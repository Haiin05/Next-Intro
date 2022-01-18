module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/old-blog/:path*',
                destination: '/new-blog/:path*',
                permanent: false,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/movies',
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
            },
            {
                source: '/api/movies/:id',
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
            },
        ]
    },
}
