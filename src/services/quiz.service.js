import ApiService from "./api.service";

const QuizService = {
  GetQuiz: async ({ amount }) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        amount: 1,
        current_page: amount,
        category: 26,
        difficulty: "easy",
        type: "multiple",
      },
      url: "/",
    };
    try {
      //   ApiService.setHeader();
      const res = await ApiService.customRequest(requestData);
      return res.data.results;
    } catch (error) {
      console.log(error);
    }
  },
};

export default QuizService;
