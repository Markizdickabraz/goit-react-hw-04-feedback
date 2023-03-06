import  { useState } from "react";
import Section from "./title/sectionTitle";
import FeedbackOptions from "./feedbackOption/feedbackOption";
import Statistics from "./statistic/statistics";
import { GlobalStyle } from "./GlobalStyle";



export default function App () {

  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btn = [{ good }, { neutral }, { bad }];


 const btnClick = e => {
   switch (e.target.name) {
     case 'good':
       setGood(good + 1)
       break;
     case 'neutral':
       setNeutral(neutral + 1)
       break;
     case 'bad':
       setBad(bad + 1)
       break;
     default: return;
    }
 }
  

 const  countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }
 
  const countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    if (![good] || countTotalFeedback() === 0) {
      return;
    }
    percentage = good / countTotalFeedback() * 100;

    return percentage.toFixed(0);
  }
          return (
            <div>
              <GlobalStyle />
              <Section title="Plese leave feedback"></Section>
              <FeedbackOptions options={btn} onLeaveFeedback={btnClick}>
              </FeedbackOptions>
              <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
            </div>
          )
      }

