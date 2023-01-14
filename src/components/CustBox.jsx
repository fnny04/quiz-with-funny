import { Flex, Text } from "@chakra-ui/react";
import CustButton from "../components/CustButton";

export default function CustBox() {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap="4"
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        h="auto"
        color="white"
        borderRadius="lg"
        boxShadow="md"
      >
        <img
          width={"100"}
          src="https://img.icons8.com/external-smashingstocks-thin-outline-color-smashing-stocks/67/null/external-quiz-education-smashingstocks-thin-outline-color-smashing-stocks.png"
        />
        <Text color={"gray.600"} fontSize="4xl">
          Quiz With Funny
        </Text>
        <CustButton to="/quiz" w="18rem" text={"Play"} color={"green"} />
        <Flex flexDirection={"row"} gap="9">
          <CustButton w="8rem" text={"Login"} color={"blue"} v="solid" />
          <CustButton w="8rem" text={"Sign Up"} color="blue" v="outline" />
        </Flex>
      </Flex>
    </>
  );
}
