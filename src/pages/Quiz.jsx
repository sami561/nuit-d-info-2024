import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useState } from "react";
import Question from "../components/Question";
import { jobit } from "../assets";
import Fireworks from "../components/Fireworks";

const Quiz = () => {
  const questions = [
    {
      question: "Does the ocean produce more than 50% of Earth's oxygen?",
      answer: false,
      img: jobit,
    },
    {
      question:
        "Is the salt concentration in our blood similar to that of ancient oceans?",
      answer: true,
      img: jobit,
    },
    {
      question: "Can ocean pollution directly affect human health?",
      answer: true,
      img: jobit,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showFireworks, setShowFireworks] = useState(false);

  const onChoice = (answerUser) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answerUser === correctAnswer) {
      setFeedback("Congratulations! That's correct!");
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
      }, 500);
    } else {
      setFeedback("Oops! That's not right. Try again.");
      setShowFireworks(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
      setShowFireworks(false);
    } else {
      setFeedback("You've completed the quiz!");
      setShowFireworks(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] mt-12">
      {/* Fireworks component */}
      {showFireworks && <Fireworks show={showFireworks} />}

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-[80vh] w-[80vw]"
      >
        <Question
          key={currentQuestionIndex}
          img={questions[currentQuestionIndex].img}
          question={questions[currentQuestionIndex].question}
          onChoice={onChoice}
        />

        <div className="mt-4 text-center">
          <p className="text-white">{feedback}</p>

          {feedback && (
            <button
              onClick={nextQuestion}
              className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
            >
              Next Question
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Quiz;
