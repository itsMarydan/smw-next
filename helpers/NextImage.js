import {API_DOMAIN} from "./ENUM";

export const imageLoader = ({ src, width, quality }) => {
    return `${API_DOMAIN}${src}?w=${width}&q=${quality || 75}`
}

