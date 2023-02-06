import { Flex, Text, Box } from "@chakra-ui/react";
import CustButton from "../components/CustButton";

export default function CustBox({ g, FlexDir, bg, bc, height, children }) {
  return (
    <>
      <Flex
        flexDirection={FlexDir}
        gap={g}
        bgGradient={bg}
        bgColor={bc}
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        h={height}
        color="white"
        borderRadius="lg"
        boxShadow="md"
      >
        {children}
      </Flex>
    </>
  );
}
