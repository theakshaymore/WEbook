import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("Akshay More");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, img, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new data added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mt={4}>
          <FormLabel>Title:</FormLabel>
          <Input
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Blog Body:</FormLabel>
          <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Image Url:</FormLabel>
          <Input
            type="text"
            placeholder="enter title"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Author:</FormLabel>
          <Select
            placeholder="Select option"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Akshay More">Akshay More</option>
            <option value="Hardik Yewale">Hardik Yewale</option>
            <option value="Rohit Sawnat">Rohit Sawnat</option>
            <option value="im_PD">im_PD</option>
          </Select>
        </FormControl>

        {!isPending && (
          <Button type="submit" colorScheme="red" mt={4}>
            Add Blog
          </Button>
        )}
        {isPending && (
          <Button colorScheme="red" mt={4}>
            Adding...
          </Button>
        )}
      </form>
    </div>
  );
};

export default Create;
