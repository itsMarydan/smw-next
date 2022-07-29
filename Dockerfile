FROM node:14-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN --mount=type=cache,id=yarn,sharing=locked,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile


FROM node:14-alpine AS builder
WORKDIR /app
ENV PORT 3000

ENV API_URL  https://admin.starmissionworld.com
ENV ENV_USE 1
ENV DOMAIN localhost
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV IMAGE_DOMAIN localhost
ENV API_URL   https://admin.starmissionworld.com
ENV ENV_USE 1

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images


COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE ${PORT}



CMD ["yarn", "start"]
