import { createAction } from "../../utils/reducer/reducer.utils";
import { DETAIL_ACTION_TYPES } from "./detail.types";
import {
  fetchMovieDetails,
  fetchTvDetails,
  fetchSimilarMovies,
  fetchSimilarTV,
  fetchMovieTrailers,
  fetchTVTrailers,
  fetchMovieCasts,
  fetchTVCasts,
} from "../../api";
import axios from "axios";

// Action creators
const fetchDetailLoading = () =>
  createAction(DETAIL_ACTION_TYPES.DETAIL_IS_LOADING);

const fetchDetailSuccess = (detailObject) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_SUCCESS, detailObject);

const fetchDetailError = (error) =>
  createAction(DETAIL_ACTION_TYPES.DETAIL_ERROR, error);

const fetchSimilarMoviesSuccess = (similarMoviesArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_SIMILAR_MOVIES, similarMoviesArray);

const fetchMovieTrailersSuccess = (trailersArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_MOVIES_TRAILERS, trailersArray);

const fetchCastsDetails = (castsArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_CAST, castsArray);

const detailsClearSuccess = () =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_CLEAR);
// Async action creators
export const fetchMovieDetailsAsync = (movie_id) => async (dispatch) => {
  // Dispatch action indicating that the detail data is being loaded
  dispatch(fetchDetailLoading);
  // Fetch movie details from the API
  const movieDetails = await axios.get(fetchMovieDetails(movie_id));
  try {
    // Dispatch action with the retrieved movie details
    dispatch(fetchDetailSuccess(movieDetails.data));
  } catch (error) {
    // Dispatch action in case of an error
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVDetailAsync = (tv_id) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching TV details using the provided TV ID
  const tvDetails = await axios.get(fetchTvDetails(tv_id));

  try {
    // Dispatching the success action with the fetched TV details
    dispatch(fetchDetailSuccess(tvDetails.data));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchSimalarMoviesAsync = (movie_id) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching similar movies using the provided movie ID
  const similarMovies = await axios.get(fetchSimilarMovies(movie_id));

  try {
    // Dispatching the success action with the fetched similar movies
    dispatch(fetchSimilarMoviesSuccess(similarMovies.data.results));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchSimalarTVAsync = (tv_id) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching similar TV shows using the provided TV ID
  const similarTVShows = await axios.get(fetchSimilarTV(tv_id));
  // Dispatching the success action with the fetched similar TV shows
  try {
    dispatch(fetchSimilarMoviesSuccess(similarTVShows.data.results));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchMovieTrailersAsync = (movie_id) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching movie trailers using the provided movie ID
  const trailers = await axios.get(fetchMovieTrailers(movie_id));
  try {
    // Dispatching the success action with the fetched movie trailers
    dispatch(fetchMovieTrailersSuccess(trailers.data.results));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVTrailersAsync = (tv_id) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching TV show trailers using the provided TV ID
  const trailers = await axios.get(fetchTVTrailers(tv_id));
  try {
    // Dispatching the success action with the fetched TV show trailers
    dispatch(fetchMovieTrailersSuccess(trailers.data.results));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchMoviesCastsAsync = (movieId) => async (dispatch) => {
  // Dispatching the loading action
  dispatch(fetchDetailLoading);
  // Fetching movie casts using the provided movie ID
  const movieCasts = await axios.get(fetchMovieCasts(movieId));

  try {
    // Dispatching the success action with the fetched movie casts
    dispatch(fetchCastsDetails(movieCasts.data.cast));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVCastsAsync = (tvId) => async (dispatch) => {
  // Dispatching the error action if an error occurs
  dispatch(fetchDetailLoading);
  // Fetching TV show casts using the provided TV ID
  const tvCasts = await axios.get(fetchTVCasts(tvId));

  try {
    // Dispatching the success action with the fetched TV show casts
    dispatch(fetchCastsDetails(tvCasts.data.cast));
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};

export const detailsClear = (dispatch) => {
  try {
    // Dispatching the success action to clear the detail state
    dispatch(detailsClearSuccess());
  } catch (error) {
    // Dispatching the error action if an error occurs
    dispatch(fetchDetailError(error));
  }
};
