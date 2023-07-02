import {
  Header,
  NavContainer,
  MovieInfo,
  Overlay,
  Logo,
} from "./profilenavigation.styles";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import NetflixLogo from "../../assets/netflix.png";
import Button from "../../components/button/Button";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectMovies } from "../../store/movies/movies.selector";
import { motion } from "framer-motion";

const ProfileNavigation = () => {
  // Retrieve the current user from the Redux store
  const currentUser = useSelector(selectCurrentUser);
  // Retrieve the popular movies from the Redux store
  const popularMovie = useSelector(selectMovies);
  // Get the first movie from the popular movie list to display as hero movie
  const heroMovie = popularMovie[0];

  return (
    <Header imgUrl={heroMovie?.backdrop_path}>
      <Overlay></Overlay>
      <NavContainer>
        <Logo>
          {/* Link to the profile page */}
          <Link to='/profile'>
            <img src={NetflixLogo} alt='logo' />
          </Link>
          {/* Link to the user's favorites list */}
          <Link className='list-link' to='/mylist'>
            <p>My List</p>
          </Link>
        </Logo>
        {/* Render the sign out button if a user is logged in */}
        {currentUser && (
          <div>
            {/* Button to sign out the user */}
            <Link onClick={signOutUser} to='/'>
              <Button buttonText='Sign Out' />
            </Link>
          </div>
        )}
      </NavContainer>
      {/* Movie information */}
      <MovieInfo
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: "1.2", delayChildren: "0.2" }}
      >
        {/* Title of the hero movie */}
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {heroMovie?.name || heroMovie?.original_name || heroMovie?.title}
        </motion.h3>
        {/* Overview of the hero movie */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {heroMovie?.overview}
        </motion.p>
      </MovieInfo>
      {/* Render the child components */}
      <Outlet />
    </Header>
  );
};

export default ProfileNavigation;
