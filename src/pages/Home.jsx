import { Box, Text, Flex } from "@chakra-ui/react";
import CustBox from "../components/CustBox";
import CustButton from "../components/CustButton";
import { ColorModeScript } from "@chakra-ui/react";
import ToggleTheme from "../components/ToggleTheme";

export default function Home() {
  return (
    <>
      <ToggleTheme />
      <Box display={"flex"} p="6rem" h="100vh">
        <CustBox
          g="4"
          height="auto"
          FlexDir={"column"}
          bg={[
            "linear(to-tr, teal.300, yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, orange.100, purple.300)",
          ]}
        >
          <img
            width={"100"}
            src={
              "https://img.icons8.com/external-smashingstocks-thin-outline-color-smashing-stocks/67/null/external-quiz-education-smashingstocks-thin-outline-color-smashing-stocks.png"
            }
          />
          <Text color={"white"} fontSize="4xl">
            Quiz with Funny
          </Text>

          <CustButton to="/quiz" w="18rem" text={"Play"} color={"green"} />
          <Flex flexDirection={"row"} gap="9">
            <CustButton w="8rem" text={"Login"} color={"blue"} v="solid" />
            <CustButton w="8rem" text={"Sign Up"} color="blue" v="outline" />
          </Flex>
        </CustBox>
      </Box>
    </>
  );
}
