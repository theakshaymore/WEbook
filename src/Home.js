import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Skeleton, Spinner } from "@chakra-ui/react";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && (
        <div
          style={{
            backgroundColor: "white",
            minHeight: "100vh",
            color: "#E53E3E",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error}
        </div>
      )}
      {isPending && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner color="red.500" size="xl" />
        </div>
      )}
      <Skeleton isLoaded={!isPending}>
        <div className="home__blog">{blogs && <BlogList blogs={blogs} />}</div>
      </Skeleton>
    </div>
  );
};

export default Home;
