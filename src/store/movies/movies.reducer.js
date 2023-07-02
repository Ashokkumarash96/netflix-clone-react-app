import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
  popularMovies: [],
  trendingNow: [],
  trendingTV: [],
  topRatedMovies: [],
  upcomingMovies: [],
  popularTVShows: [],
  topRatedTVShows: [],
  isLoading: false,
  error: null,
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // Start fetching movies, set isLoading to true
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_START:
      return { ...state, isLoading: true };
    // Start fetching movies, set isLoading to true
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_POPULAR:
      return {
        ...state,
        popularMovies: payload,
        isLoading: false,
      };
    // Successfully fetched trending movies, update trendingNow state
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_TRENDING:
      return {
        ...state,
        trendingNow: payload,
        isLoading: false,
      };
    // Successfully fetched trending TV shows, update trendingTV state
    case MOVIES_ACTION_TYPES.FETCH_TV_TRENDING:
      return {
        ...state,
        trendingTV: payload,
        isLoading: false,
      };
    // Successfully fetched top-rated movies, update topRatedMovies state
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_TOP_RATED:
      return {
        ...state,
        topRatedMovies: payload,
        isLoading: false,
      };
    // Successfully fetched upcoming movies, update upcomingMovies state
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcomingMovies: payload,
        isLoading: false,
      };
    // Successfully fetched popular TV shows, update popularTVShows state
    case MOVIES_ACTION_TYPES.FETCH_POPULAR_TV_SHOWS:
      return {
        ...state,
        popularTVShows: payload,
        isLoading: false,
      };
    // Successfully fetched top-rated TV shows, update topRatedTVShows state
    case MOVIES_ACTION_TYPES.FETCH_TOP_RATED_TV_SHOWS:
      return {
        ...state,
        topRatedTVShows: payload,
        isLoading: false,
      };
    // Failed to fetch movies, update error state
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
