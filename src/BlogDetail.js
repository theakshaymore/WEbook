import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Spinner } from "@chakra-ui/react";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
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

      {blogs && (
        <div className="blog-details__content">
          <article>
            <img src={`${blogs.img}`} alt="" srcset="" />
            <h2>{blogs.title}</h2>
            <p>Written by {blogs.author}</p>
            <div>{blogs.body}</div>
            {/* <button onClick={handleDelete}>Delete blog</button> */}
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
