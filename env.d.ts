// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly WPGRAPHQL_URL: string;
    readonly PUBLIC_WP_URL: string;
    readonly PUBLIC_PROTOCOL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
