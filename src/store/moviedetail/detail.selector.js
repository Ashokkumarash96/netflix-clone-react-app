// Selects the details data from the state
export const selectDetails = (state) => state.movieTvDetails.details;
// Selects the loading status from the state
export const selectLoading = (state) => state.movieTvDetails.isLoading;
// Selects the similar movies data from the state
export const selectSimilarMovies = (state) =>
  state.movieTvDetails.similarMovies;
// Selects the movie trailers data from the state
export const selectMovieTrailers = (state) => state.movieTvDetails.movieVideos;
// Selects the casts data from the state
export const selectCasts = (state) => state.movieTvDetails.casts;
