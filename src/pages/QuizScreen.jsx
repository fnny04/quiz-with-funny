import { Box, Flex, Text } from "@chakra-ui/react";
import CustButton from "../components/CustButton";
import { useEffect, useState, Fragment } from "react";

export default function QuizScreen() {
  const [q, setQ] = useState([0]);

  const fetchQuestion = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&category=26&difficulty=easy&type=multiple`
    );
    const q = await response.json();
    setQ(q);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  console.log(q.results);

  return (
    <>
      <Flex p={"4rem"} flexDirection="column" gap="8px">
        <Box
          rounded={"lg"}
          bgColor={"blue.300"}
          w="100%"
          h="70vh"
          display={"flex"}
          alignItems="center"
          flexDirection={"column"}
          gap="6px"
        >
          <Text p="8px">Time Left 00:00:00</Text>
          {q.results.map((x, i) => (
            <Fragment key={i}>
              <Text fontSize={"3xl"} color="white" pt="6rem">
                {x.question}
              </Text>
              <CustButton
                w="14rem"
                text={x.incorrect_answers[0]}
                color={"blue"}
                v="solid"
              />
              <CustButton
                w="14rem"
                text={x.incorrect_answers[1]}
                color={"blue"}
                v="solid"
              />
              <CustButton
                w="14rem"
                text={x.correct_answer}
                color={"blue"}
                v="solid"
              />
              <CustButton
                w="14rem"
                text={x.incorrect_answers[2]}
                color={"blue"}
                v="solid"
              />
            </Fragment>
          ))}

          <Text pt="6rem" color={"white"} fontSize={"small"}>
            1 of 10 quesyion
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <CustButton to="/" w="8rem" text={"Prev"} color={"blue"} v="solid" />
          <CustButton to="/" w="8rem" text={"Next"} color={"green"} v="solid" />
        </Flex>
      </Flex>
    </>
  );
}
