// Importing the motion module from "framer-motion"
import { motion } from "framer-motion";
// Importing the FaArrowUp and FaArrowDown icons from the react-icons/fa library
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// Importing the LoadMoreContainer component from "./loadmore.styles"
import { LoadMoreContainer } from "./loadmore.styles";

const LoadMore = ({ content, loadMore, setLoadMore }) => {
  // A functional component named LoadMore that takes content, loadMore, and setLoadMore as props
  const handleLoadMore = () => {
    // A function that handles the load more action
    if (loadMore === 6) {
      // If the loadMore value is 6
      // Set the loadMore value to the total length of the content
      setLoadMore(content.length);
    } else {
      // Set the loadMore value to the total length of the content minus 14
      setLoadMore(content.length - 14);
    }
  };

  return (
    <LoadMoreContainer>
      <hr />
      {/*Attaching the handleLoadMore function to the onClick event of the button 
      Adds a CSS class name to the button 
      Applies scaling and rotation animations when hovering over the button*/}
      <motion.button
        onClick={handleLoadMore}
        className='load-more-btn'
        whileHover={{ scale: 1.2, rotate: 360 }}
      >
        {/*Conditional rendering based on the loadMore value and content length
        Renders the FaArrowDown icon if loadMore is not equal to the content length
        Renders the FaArrowUp icon if loadMore is equal to the content length*/}
        {loadMore !== content.length ? (
          <FaArrowDown style={{ color: "white" }} size={"2rem"} />
        ) : (
          <FaArrowUp style={{ color: "white" }} size={"2rem"} />
        )}
      </motion.button>
    </LoadMoreContainer>
  );
};

export default LoadMore;
