import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>page not found</h2>
      <Button colorScheme="red">
        <Link to="/">click to go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
