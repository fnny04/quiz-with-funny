import ErrorPhotos from "../assets/error.webp";
import { Flex } from "@chakra-ui/react";

const Error = () => {
  return (
    <Flex justifyContent={"center"} alignItems="center" py={"4rem"}>
      <img src={ErrorPhotos} alt="ups error" />
    </Flex>
  );
};

export default Error;
