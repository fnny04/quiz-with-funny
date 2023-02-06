import { useQuery } from "@tanstack/react-query";
import QuizService from "../../services/quiz.service";

export const useFetchAllQuiz = ({ amount }) => {
  return useQuery({
    queryKey: ["fetchAllQuiz", amount],
    queryFn: async () => QuizService.GetQuiz({ amount }),
  });
};
