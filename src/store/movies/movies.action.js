import { createAction } from "../../utils/reducer/reducer.utils";
import { MOVIES_ACTION_TYPES } from "./movies.types";
import {
  fetchPopularMovies,
  fetchTrendingNow,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchPopularTVShows,
  fetchTopRatedTVShows,
  fetchTrendingTVShows,
} from "../../api";
import axios from "axios";
// Action creators
// Action creator for indicating that fetching movies has started
const fetchMoviesStart = () =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_START);
// Action creator for successful fetch of popular movies
const fetchMoviesPopular = (moviesArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_POPULAR, moviesArray);
// Action creator for indicating a failure while fetching movies
const fetchMoviesFailed = (error) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED, error);
// Action creator for successful fetch of trending movies
const fetchMoviesTrending = (trendingMoviesArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_TRENDING, trendingMoviesArray);
// Action creator for successful fetch of trending TV shows
const fetchTVShowsTrending = (trendingTvArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_TV_TRENDING, trendingTvArray);
// Action creator for successful fetch of top-rated movies
const fetchMoviesTopRated = (topRatedArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_TOP_RATED, topRatedArray);
// Action creator for successful fetch of upcoming movies
const fetchUpcoming = (upcomingArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_UPCOMING, upcomingArray);
// Action creator for successful fetch of popular TV shows
const fetchTVShowsPopular = (tvShowsArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_POPULAR_TV_SHOWS, tvShowsArray);
// Action creator for successful fetch of top-rated TV shows
const fetchTVShowsTopRated = (topRatedTVArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_TOP_RATED_TV_SHOWS, topRatedTVArray);
// Async actions
// Async action for fetching movies, dispatching appropriate actions based on success or failure
export const fetchMoviesAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const popularMovies = await axios.get(fetchPopularMovies());
  try {
    dispatch(fetchMoviesPopular(popularMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching trending movies, dispatching appropriate actions based on success or failure
export const fetchTrendingAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const trendingMovies = await axios.get(fetchTrendingNow());
  try {
    dispatch(fetchMoviesTrending(trendingMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching trending TV shows, dispatching appropriate actions based on success or failure
export const fetchTrendingShowsTVAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);

  const trendingTv = await axios.get(fetchTrendingTVShows());

  try {
    dispatch(fetchTVShowsTrending(trendingTv.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching top-rated movies, dispatching appropriate actions based on success or failure
export const fetchTopRatedAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const trendingtopRatedMovies = await axios.get(fetchTopRatedMovies());
  try {
    dispatch(fetchMoviesTopRated(trendingtopRatedMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching upcoming movies, dispatching appropriate actions based on success or failure
export const fetchUpcomingAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const upcomingMovies = await axios.get(fetchUpcomingMovies());
  try {
    dispatch(fetchUpcoming(upcomingMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching popular TV shows, dispatching appropriate actions based on success or failure
export const fetchPopularTVShowsAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const popularTVShows = await axios.get(fetchPopularTVShows());
  try {
    dispatch(fetchTVShowsPopular(popularTVShows.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
// Async action for fetching top-rated TV shows, dispatching appropriate actions based on success or failure
export const fetchTopRatedTVShowsAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const topRatedTVShows = await axios.get(fetchTopRatedTVShows());
  try {
    dispatch(fetchTVShowsTopRated(topRatedTVShows.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
