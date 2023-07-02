import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import { motion } from "framer-motion";
import {
  selectDetails,
  selectSimilarMovies,
  selectMovieTrailers,
  selectCasts,
} from "../../store/moviedetail/detail.selector";
import { addFavouriteItem } from "../../store/mylist/mylist.action";
import { detailsClear } from "../../store/moviedetail/detail.action";
import { selectFavouriteListItem } from "../../store/mylist/mylist.selector";
import {
  Overlay,
  DetailContainer,
  MovieHeroContainer,
  MovieHeroOverlay,
  HeroInfo,
  HeroButtons,
  DetailedInfo,
  Overview,
  Genre,
  H4,
  Languages,
  SimilarMovie,
  CastsContainer,
} from "./details.styles";
import Placeholder from "../../assets/img-placeholder.png";
import ReadMoreLess from "../../components/readmoreless/ReadMoreLess";
import LoadMore from "../../components/loadmore/LoadMore.component";

const Details = () => {
  // Selecting data from the Redux store
  const detail = useSelector(selectDetails);
  const listItems = useSelector(selectFavouriteListItem);
  const similarMovies = useSelector(selectSimilarMovies);
  const movieTrailers = useSelector(selectMovieTrailers);
  const casts = useSelector(selectCasts);

  const offcialTrailer =
    movieTrailers.length > 0
      ? movieTrailers.find(
          (trailer) => trailer.type === "Trailer" || trailer.type === "Clip"
        )
      : "N0 Trailers Found";

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const [loadMore, setLoadMore] = useState(6);

  const itemPresentInList = listItems.find((item) => item.id === detail.id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const exitOverlayHandler = (event) => {
    // Selecting data from the Redux store
    const element = event.target;

    if (element.classList.contains("overlay")) {
      document.body.style.overflow = "auto";
      dispatch(detailsClear);
      navigate("/browse");
    }
  };

  const addToListHandler = () => {
    // Add the item to the favorite list
    dispatch(addFavouriteItem(listItems, detail));
  };

  const closeModalHandler = () => {
    // Close the modal and clear the details from the store
    document.body.style.overflow = "auto";
    dispatch(detailsClear);
    navigate("/browse");
  };

  return (
    <>
      {detail && (
        <Overlay className='overlay' onClick={exitOverlayHandler}>
          {/*Overlay for displaying movie details*/}
          <DetailContainer layout>
            <MovieHeroContainer
              imgUrl={
                detail?.backdrop_path !== null
                  ? detail.backdrop_path
                  : detail.poster_path
              }
            >
              <MovieHeroOverlay />
              <HeroInfo>
                <motion.h3 layout>
                  {/* Display the movie title */}
                  {detail.title ||
                    detail.name ||
                    detail.original_title ||
                    detail.original_name}
                </motion.h3>
                <HeroButtons>
                  <button onClick={() => setIsTrailerOpen(true)}>
                    <FaPlay />
                    &nbsp; Play
                  </button>
                  <button
                    layout
                    className='add-to-list'
                    onClick={addToListHandler}
                  >
                    {/* Display different icons based on whether the item is already in the favorite list */}
                    {itemPresentInList ? (
                      <ImCheckmark style={{ color: "white" }} />
                    ) : (
                      <FaPlus style={{ color: "white" }} />
                    )}
                  </button>
                </HeroButtons>
              </HeroInfo>
              {isTrailerOpen ? (
                <motion.div layout className='video-wrapper'>
                  <GiCancel
                    className='cancel'
                    onClick={() => setIsTrailerOpen(false)}
                  />
                  <iframe
                    className='video'
                    title='Youtube player'
                    allowFullScreen
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${offcialTrailer.key}?autoplay=0`}
                    loading='lazy'
                  ></iframe>
                </motion.div>
              ) : null}
              <div onClick={closeModalHandler} className='close-modal'>
                <strong>X</strong>
              </div>
            </MovieHeroContainer>
            <DetailedInfo>
              {/* Movie overview */}
              <Overview>
                <H4>Overview</H4>
                <div className='overview-info'>
                  {/* Display movie ratings and release date */}
                  <h5>Ratings: {detail.vote_average} / 10</h5>
                  <h5>
                    Release Date: {detail.release_date || detail.first_air_date}
                  </h5>
                  {/* Display movie overview */}
                  <p>{detail.overview}</p>
                </div>
              </Overview>
              {/* Movie genres */}
              <Genre>
                <H4>Genres</H4>
                <div className='genres'>
                  {/* Display movie genres */}
                  {detail?.genres?.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </Genre>
              {/* Movie languages */}
              <Languages>
                <H4>Languages</H4>
                <div className='spoken-languages'>
                  {/* Display spoken languages */}
                  {detail?.spoken_languages?.map((language, idx) => (
                    <p key={idx}>{language.english_name}</p>
                  ))}
                </div>
              </Languages>
              {/* Similar movies */}
              <SimilarMovie>
                <H4>More Like This</H4>
                <div className='results'>
                  {/* Display similar movies */}
                  {similarMovies.slice(0, loadMore).map((similarMovie) => (
                    <motion.div
                      whileHover={{ scale: 0.98 }}
                      className='similar-card'
                      key={similarMovie.id}
                    >
                      <div className='img-wrapper'>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                          loading='lazy'
                          alt={
                            similarMovie.title ||
                            similarMovie.original_title ||
                            similarMovie.name ||
                            similarMovie.original_name
                          }
                        />
                      </div>

                      <div className='similar-info'>
                        <h5>
                          {/* Display similar movie title */}
                          {similarMovie.title ||
                            similarMovie.original_title ||
                            similarMovie.name ||
                            similarMovie.original_name}
                        </h5>
                        {/* Display a read more/less component for the similar movie overview */}
                        <ReadMoreLess>{similarMovie.overview}</ReadMoreLess>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Load more button */}
                <LoadMore
                  content={similarMovies}
                  loadMore={loadMore}
                  setLoadMore={setLoadMore}
                />
              </SimilarMovie>
              <CastsContainer>
                <H4>Cast</H4>
                <div className='cast-results'>
                  {/* Display cast members */}
                  {casts.length === 0
                    ? "No Casts Available"
                    : casts
                        .filter((_, index) => index < 6)
                        .map((cast, index) => (
                          <div className='cast-card' key={index}>
                            <div className='profile-wrapper'>
                              <motion.img
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                src={
                                  cast.profile_path !== null
                                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                                    : Placeholder
                                }
                                loading='lazy'
                                alt={cast.name || cast.original_name}
                              />
                            </div>
                            <strong>{cast.name || cast.original_name}</strong>
                          </div>
                        ))}
                </div>
              </CastsContainer>
            </DetailedInfo>
          </DetailContainer>
        </Overlay>
      )}
    </>
  );
};

export default Details;
