// Importing the ButtonStyle component from "./button.styles" file
import { ButtonStyle } from "./button.styles";

// A functional component named Button that takes buttonText, signupstyle, and isUserLoading as props

function Button({ buttonText, signupstyle, isUserLoading }) {
  return (
    <ButtonStyle
      signupstyle={signupstyle} // A functional component named Button that takes buttonText, signupstyle, and isUserLoading as props
      disabled={isUserLoading} // Sets the disabled prop of the ButtonStyle component based on isUserLoading
      btnLoading={isUserLoading} // Passes the btnLoading prop to the ButtonStyle component based on isUserLoading
      buttonText // Passes the btnLoading prop to the ButtonStyle component based on isUserLoading
    >
      {buttonText}
      {/*Renders the buttonText prop as the content of the
      ButtonStyle component*/}
    </ButtonStyle>
  );
}

export default Button;
