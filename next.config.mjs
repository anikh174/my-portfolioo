/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.simpleicons.org", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
