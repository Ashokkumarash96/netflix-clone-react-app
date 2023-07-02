// Importing the styled-components library
import styled from "styled-components";
// Importing the Link component from "react-router-dom"
import { Link } from "react-router-dom";
// Importing the motion module from "framer-motion"
import { motion } from "framer-motion";

export const ImageCardsContainer = styled(motion.div)`
  overflow: hidden;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  h4 {
    font-size: 1.2rem;
  }
`;

export const LinkStyle = styled(Link)`
  color: var(--white-color);
`;
