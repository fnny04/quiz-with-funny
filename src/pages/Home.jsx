import { Box, Center } from "@chakra-ui/react";
import CustBox from "../components/CustBox";

export default function Home() {
  return (
    <Box display={"flex"} p="6rem" h="100vh">
      <CustBox
        g="4"
        tinggi="auto"
        FlexDir={"column"}
        bg={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        imgLink="https://img.icons8.com/external-smashingstocks-thin-outline-color-smashing-stocks/67/null/external-quiz-education-smashingstocks-thin-outline-color-smashing-stocks.png"
        title={"Quiz with Funny"}
      />
    </Box>
  );
}
