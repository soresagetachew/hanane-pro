/** @type {import('next').NextConfig} */
const isStatic = process.env.BUILD_MODE === "static";

const nextConfig = {
  // Static export for cPanel / shared hosting deploys.
  ...(isStatic && { output: "export", trailingSlash: true }),
  images: {
    // Static hosts don't run the Next image optimizer.
    ...(isStatic && { unoptimized: true }),
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
