module.exports = {
	reactStrictMode: true,
	images: {
		loader: "imgix",
		path: "https://noop/",
		domains: ['localhost', "fakestoreapi.com",'d1wqzb5bdbcre6.cloudfront.net'],
	},
	webpack5: true,
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
			'/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
			'/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
		}
	},
	


}
