import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Badge, Avatar, Collapse } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div className="blog-list__previews" key={item.id}>
          <Box p={4} mt={20} display={{ md: "flex" }}>
            <Box flexShrink={0}>
              <Image
                borderRadius="lg"
                width={{ md: 350 }}
                height={{ md: 230 }}
                src={item.img}
                alt="img"
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {item.tag}
              </Badge>
              <Box
                mt="0"
                fontSize="2xl"
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.title}
              </Box>
              <Text mt={0} color="gray.700">
                <Box>
                  {" "}
                  <Avatar
                    size="xs"
                    name={item.author}
                    src="https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    mr={3}
                  />
                  {item.author}
                </Box>
              </Text>
              <Text mt={0} color="blue.500">
                <Box>
                  {" "}
                  <StarIcon /> {item.rev_count} reviews
                </Box>
              </Text>
              <Collapse startingHeight={46}>{item.body}</Collapse>
              <Link to={`/detail/${item.id}`}>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="#E53E3E"
                  color="white"
                  px={5}
                  h={10}
                  // margin={4}
                  marginTop={6}
                  marginLeft={0}
                  fontSize={16}
                >
                  Read more
                  <ChevronRightIcon />
                </Box>
              </Link>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
