import { Flex, Text, Box } from "@chakra-ui/react";
import CustButton from "../components/CustButton";

export default function CustBox({
  g,
  FlexDir,
  bg,
  bc,
  imgLink,
  title,
  tinggi,
}) {
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
        h={tinggi}
        color="white"
        borderRadius="lg"
        boxShadow="md"
      >
        <img width={"100"} src={imgLink} />
        <Text color={"white"} fontSize="4xl">
          {title}
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
