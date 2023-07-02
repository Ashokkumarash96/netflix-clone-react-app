// Importing the useState hook from React
import { useState } from "react";

const ReadMoreLess = ({ children }) => {
  // Importing the useState hook from React
  const [readMoreLess, setReadMoreLess] = useState(false);
  // Importing the useState hook from React
  const toggleButton = () => setReadMoreLess(!readMoreLess);
  return (
    <div>
      {/* Rendering the children text, either in full or sliced to 100 characters based on the readMoreLess state */}
      <p>{readMoreLess ? children : children.slice(0, 100)}</p>
      <strong onClick={toggleButton} style={{ cursor: "pointer" }}>
        {/* Rendering the read more/less text based on the readMoreLess state */}
        {readMoreLess ? " read less..." : " read more..."}
      </strong>
    </div>
  );
};

export default ReadMoreLess;
