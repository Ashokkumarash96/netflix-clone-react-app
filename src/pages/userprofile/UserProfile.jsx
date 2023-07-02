import ProfileNavigation from "../profilenavigation/ProfileNavigation";
import Cards from "../../components/moviecards/Cards";
import {
  selectMovies,
  selectTrending,
  selectTopRated,
  selectUpcoming,
  selectTVShows,
  selectTopRatedTVShows,
  selectTrendingTV,
} from "../../store/movies/movies.selector";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const UserProfile = () => {
  // Selecting movie and TV show data from Redux store
  const popularMovies = useSelector(selectMovies);
  const trendingNow = useSelector(selectTrending);
  const topRatedMovies = useSelector(selectTopRated);
  const upcomingMovies = useSelector(selectUpcoming);
  const popularTVShows = useSelector(selectTVShows);
  const topRatedTVShows = useSelector(selectTopRatedTVShows);
  const trendingTVShows = useSelector(selectTrendingTV);

  return (
    <>
      {/* Render the profile navigation component */}
      <ProfileNavigation />
      {/* Render movie cards for popular movies */}
      <Cards categoryTitle='Popular on NetFlix' categoryData={popularMovies} />
      {/* Render movie cards for trending movies */}
      <Cards categoryTitle='Trending Movies' categoryData={trendingNow} />
      {/* Render movie cards for top rated movies */}
      <Cards categoryTitle='Top Rated Movies' categoryData={topRatedMovies} />
      {/* Render movie cards for upcoming movies */}
      <Cards categoryTitle='Movies Coming Soon' categoryData={upcomingMovies} />
      {/* Render movie cards for popular TV shows */}
      <Cards categoryTitle='Popular TV Shows' categoryData={popularTVShows} />
      {/* Render movie cards for trending TV shows */}
      <Cards categoryTitle='Trending TV Shows' categoryData={trendingTVShows} />
      {/* Render movie cards for top rated TV shows */}
      <Cards
        categoryTitle='Top Rated TV Shows'
        categoryData={topRatedTVShows}
      />
      {/* Render nested routes within the UserProfile component */}
      <Outlet />
    </>
  );
};

export default UserProfile;
