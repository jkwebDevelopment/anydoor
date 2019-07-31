module.exports = {
    root: process.cwd(),
    hostname: '172.19.135.186',
    port: 9527,
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}
