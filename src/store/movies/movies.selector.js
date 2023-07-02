// Selects the popularMovies array from the movies state
export const selectMovies = (state) => state.movies.popularMovies;
// Selects the trendingNow array from the movies state
export const selectTrending = (state) => state.movies.trendingNow;
// Selects the trendingTV array from the movies state
export const selectTrendingTV = (state) => state.movies.trendingTV;
// Selects the topRatedMovies array from the movies state
export const selectTopRated = (state) => state.movies.topRatedMovies;
// Selects the upcomingMovies array from the movies state
export const selectUpcoming = (state) => state.movies.upcomingMovies;
// Selects the popularTVShows array from the movies state
export const selectTVShows = (state) => state.movies.popularTVShows;
// Selects the topRatedTVShows array from the movies state
export const selectTopRatedTVShows = (state) => state.movies.topRatedTVShows;
// Selects the isLoading value from the movies state
export const selectIsLoading = (state) => state.movies.isLoading;
