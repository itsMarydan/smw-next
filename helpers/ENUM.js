import getConfig from   "next/config"
const { publicRuntimeConfig } = getConfig();
const API_DOMAIN_DEV ='http://localhost:8080';
export const API_DOMAIN = publicRuntimeConfig.ENV_USE === '1' ? publicRuntimeConfig.API_URL : API_DOMAIN_DEV ;
export const REVALIDATE=100;