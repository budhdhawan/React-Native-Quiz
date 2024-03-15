import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: 'What is the capital of India?',
      options: ['Delhi', 'Dehradun', 'Chandigarh', 'Goa'],
      answer: 'Delhi',
    },
    {
      question: 'Who is the Prime Minister of India?',
      options: ['Narendra Modi', 'Amit Shah', 'Rahul Gandhi', 'Manmohan Singh'],
      answer: 'Narendra Modi',
    },
    {
      question: 'Who is the President of India?',
      options: ['Narendra Modi', 'Amit Shah', 'Rahul Gandhi', 'Droupadi Murmu'],
      answer: 'Droupadi Murmu',
    },
    {
      question: 'Who is the Finance Minister of India?',
      options: ['Narendra Modi', 'Amit Shah', 'Nirmala Sitharaman', 'Manmohan Singh'],
      answer: 'Nirmala Sitharaman',
    },
    {
      question: 'Who is the Minister of Foreign Affairs of India?',
      options: ['Narendra Modi', 'Dr. S. Jaishankar', 'Rahul Gandhi', 'Manmohan Singh'],
      answer: 'Dr. S. Jaishankar',
    },
    {
      question: 'Who is the Transport Minister of India?',
      options: ['Nitin Gadkari', 'Amit Shah', 'Nirmala Sitharaman', 'Manmohan Singh'],
      answer: 'Nitin Gadkari',
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (correctAnswer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text>Your Score: {score}</Text>
          <TouchableOpacity onPress={handleReset}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.ques}>{quizData[currentQuestion].question}</Text>
          {quizData[currentQuestion].options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(item)}
              style={styles.optioncont}>
              <Text style={styles.options}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  questionContainer: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  options: {
    color: 'white',
    fontSize: 18,
  },
  optioncont: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  ques: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },
});
