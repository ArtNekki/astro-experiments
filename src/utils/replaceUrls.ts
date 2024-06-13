export const replaceUrls = (content: string, replacementUrl: string) => {
    console.log('content', content)
    console.log('replaceUrls', replacementUrl)
    return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl)
}
