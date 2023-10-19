const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/api/characters', {
            target: 'https://develop.d2xuxanvg7ko3t.amplifyapp.com',
            changeOrigin: true
        })
    )
}