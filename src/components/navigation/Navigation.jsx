// Importing the NetflixLogo image from the specified path
import NetflixLogo from "../../assets/netflix.png";
// Importing the Outlet and Link components from the react-router-dom library
import { Outlet, Link } from "react-router-dom";
// Importing the Button component from the specified path
import Button from "../button/Button";
// Importing styled components from the specified path
import {
  NavigationContainer,
  LogoContainer,
  Header,
} from "./navigation.styles";
// Importing the Home component from the specified path
import Home from "../../pages/home/Home";

const Navigation = () => {
  return (
    <Header>
      <NavigationContainer>
        <LogoContainer>
          <Link to='/'>
            <img src={NetflixLogo} alt='logo' />
          </Link>
        </LogoContainer>
        <div className='navigation-links'>
          <Link to='login'>
            <Button buttonText='Sign In' />
          </Link>
        </div>
      </NavigationContainer>
      <Home />

      <Outlet />
    </Header>
  );
};

export default Navigation;
