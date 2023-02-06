import { Box, Flex, Text } from "@chakra-ui/react";
import CustButton from "../components/CustButton";
import Loading from "../components/Loading";
import { useFetchAllQuiz } from "../hooks/Quiz/useFetchAllQuiz";
import { Fragment, useState } from "react";
import ToggleTheme from "../components/ToggleTheme";

export default function QuizScreen() {
  const [amount, setAmount] = useState(1);
  const { data, isFetching } = useFetchAllQuiz({ amount });
  const [currentAnswer, setCurrentAnswer] = useState();
  const [alreadyAnswerd, setAlreadyAnswerd] = useState(0);
  const [resultData, setResultData] = useState(null);

  const handleSubmit = () => {
    const dataResult = countResult(data, currentAnswer);
    setResultData(dataResult);
    setNumber(0);
  };

  const handleQuestion = (e) => {
    let newCurrentAnswer = currentAnswer;
    newCurrentAnswer[number] = e;
    setAlreadyAnswerd(countAlreadyAnswerd(newCurrentAnswer));
    setCurrentAnswer(newCurrentAnswer);
    setNumber(number === data.length - 1 ? number : number + 1);
  };

  return (
    <>
      <ToggleTheme />
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
          {!isFetching ? (
            data.map((x, i) => (
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
            ))
          ) : (
            <Loading />
          )}

          <Text pt="6rem" color={"white"} fontSize={"small"}>
            {amount} of 10 quesyion
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <CustButton
            onClick={() => setAmount((prev) => prev !== 1 && prev - 1)}
            w="8rem"
            text={"Prev"}
            color={"blue"}
            v="solid"
          />
          <CustButton
            onClick={() => setAmount((prev) => prev !== 10 && prev + 1)}
            w="8rem"
            text={"Next"}
            color={"green"}
            v="solid"
          />
        </Flex>
      </Flex>
    </>
  );
}
