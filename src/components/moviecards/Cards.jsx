// Importing the MovieCardContainer and ImageCardsContainer components from "./cards.styles"
import { MovieCardContainer, ImageCardsContainer } from "./cards.styles";
// Importing the base styles for the Swiper library
import "swiper/css";
// Importing the styles for Swiper navigation
import "swiper/css/navigation";
// Importing the Swiper and SwiperSlide components from the "swiper/react" package
import { Swiper, SwiperSlide } from "swiper/react";
// Importing the Navigation module from Swiper
import { Navigation } from "swiper";
// Importing the ImageCards component from "../imagecards/ImageCards"
import ImageCards from "../imagecards/ImageCards";

const Cards = ({ categoryTitle, categoryData }) => {
  // A functional component named Cards that takes categoryTitle and categoryData as props
  return (
    <MovieCardContainer>
      {/*  // Renders a container for movie cards using the MovieCardContainer component*/}
      <h3>{categoryTitle}</h3>
      {/*Renders the category title as an <h3> element*/}
      <ImageCardsContainer>
        {/*Renders a container for image cards using the ImageCardsContainer component*/}
        {/*Sets the space between slides to 10 pixels
        Sets the number of slides per view to 5
        Enables looping of slides
        Enables navigation
        Uses the Navigation module
        Adds a CSS class name to the Swiper component
        Sets the number of slides per view to 2 for a viewport width of 375px or less
        Sets the number of slides per view to 5 for a viewport width of 768px or less*/}
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          navigation
          modules={[Navigation]}
          className='my-swiper'
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {categoryData.map((movies) => (
            //Maps over the categoryData array
            /*Renders a SwiperSlide component for each movie in the
              categoryData array*/
            /*Renders the ImageCards component with the movie as a prop*/
            <SwiperSlide key={movies.id} className='card'>
              <ImageCards movies={movies} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageCardsContainer>
    </MovieCardContainer>
  );
};

export default Cards;
