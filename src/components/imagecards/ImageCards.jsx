// Importing ImageCardsContainer and LinkStyle components from "./imagecards.styles" file
import { ImageCardsContainer, LinkStyle } from "./imagecards.styles";
// Importing the useDispatch hook from "react-redux"
import { useDispatch } from "react-redux";
// Importing the motion module from "framer-motion"
import { motion } from "framer-motion";
// Importing various async action functions from "../../store/moviedetail/detail.action" file
import {
  fetchMovieDetailsAsync,
  fetchTVDetailAsync,
  fetchSimalarMoviesAsync,
  fetchSimalarTVAsync,
  fetchMovieTrailersAsync,
  fetchTVTrailersAsync,
  fetchMoviesCastsAsync,
  fetchTVCastsAsync,
} from "../../store/moviedetail/detail.action";

const ImageCards = ({ movies }) => {
  // A functional component named ImageCards that takes movies as a prop
  // Initializing the useDispatch hook
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    // A function that handles loading the details of a movie or TV show
    if ("first_air_date" in movies) {
      // A function that handles loading the details of a movie or TV show
      // Dispatching an async action to fetch TV show details
      dispatch(fetchTVDetailAsync(movies.id));
      // Dispatching an async action to fetch similar TV shows
      dispatch(fetchSimalarTVAsync(movies.id));
      // Dispatching an async action to fetch TV show trailers
      dispatch(fetchTVTrailersAsync(movies.id));
      // Dispatching an async action to fetch TV show casts
      dispatch(fetchTVCastsAsync(movies.id));
    } else {
      // If "first_air_date" property doesn't exist, it's a movie
      // Dispatching an async action to fetch movie details
      dispatch(fetchMovieDetailsAsync(movies.id));
      // Dispatching an async action to fetch similar movies
      dispatch(fetchSimalarMoviesAsync(movies.id));
      // Dispatching an async action to fetch movie trailers
      dispatch(fetchMovieTrailersAsync(movies.id));
      // Dispatching an async action to fetch movie casts
      dispatch(fetchMoviesCastsAsync(movies.id));
    }
    // Setting the CSS overflow property of the body to "hidden"
    document.body.style.overflow = "hidden";
  };

  return (
    <ImageCardsContainer
      onClick={loadDetailsHandler}
      whileHover={{ scale: 1.2 }}
      layout
    >
      {/* Rendering a link with a specific URL based on the movies.id*/}
      <LinkStyle to={`/browse/${movies.id}`}>
        <motion.img
          layout
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          loading='lazy'
          alt={movies.title || movies.original_name}
        />
      </LinkStyle>
    </ImageCardsContainer>
  );
};

export default ImageCards;
