/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const nextConfig = {
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true
    },
    exportPathMap: async function () {
        return {
            '/' : {page: '/home'}
        }
    }
}

module.exports = nextConfig
