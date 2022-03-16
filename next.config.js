/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},

	images: {
		domains: ["icon-library.com"],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
