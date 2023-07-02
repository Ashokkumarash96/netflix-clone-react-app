// Importing the styled-components library
import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.6rem 2.3rem;
  border: none;
  border-radius: 0.3rem;
  // Inherits the font family from the parent
  font-family: inherit;
  font-weight: bold;
  font-size: 1.6rem;
  // Sets the cursor style based on the btnLoading prop
  cursor: ${(props) => (props.btnLoading ? "unset" : "pointer")};
  background-color: var(--netflix-color);
  color: var(--white-color);
  // Sets the width of the button based on the signupstyle prop or defaults to 100%
  width: ${(props) => (props.signupstyle ? props.signupstyle : "100%")};
  // Sets the top margin of the button based on the signupstyle prop
  margin-top: ${(props) => (props.signupstyle ? "2rem" : "")};
  // Sets the opacity of the button based on the btnLoading prop
  opacity: ${(props) => (props.btnLoading ? "0.8" : "1")};
`;
