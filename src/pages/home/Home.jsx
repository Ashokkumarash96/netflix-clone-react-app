import Button from "../../components/button/Button";
import { Link, useLocation } from "react-router-dom";
import { ParentContainer, HomeContainer } from "./home.styles";

const Home = () => {
  // Get the current pathname using useLocation hook
  const { pathname } = useLocation();
  return (
    <>
      {/* Render the home content only when the current pathname is "/" */}
      {pathname === "/" ? (
        <ParentContainer>
          <HomeContainer>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            {/* Link to the signup page */}
            <Link to='signup'>
              {/* Render the Button component with custom props */}
              <Button buttonText='Sign Up' signupstyle='50%' />
            </Link>
          </HomeContainer>
        </ParentContainer>
      ) : (
        // Render nothing when the current pathname is not "/"
        ""
      )}
    </>
  );
};

export default Home;
