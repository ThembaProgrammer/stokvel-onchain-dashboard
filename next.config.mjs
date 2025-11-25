/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'isibaya.afrocoin.xyz',
                port: '',
                pathname: '/ipfs/**',
            },
        ]
    }
}

export default nextConfig;
