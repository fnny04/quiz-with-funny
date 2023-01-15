import { useState, useEffect } from "react";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  return <div></div>;
};

export default Quiz;
