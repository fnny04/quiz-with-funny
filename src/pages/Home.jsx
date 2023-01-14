import { Box, Center } from "@chakra-ui/react";
import CustBox from "../components/CustBox";

export default function Home() {
  return (
    <Box display={"flex"} p="6rem" h="100vh">
      <CustBox />
    </Box>
  );
}
