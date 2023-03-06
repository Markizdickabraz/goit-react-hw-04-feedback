import React, { Component } from "react";
import Section from "./title/sectionTitle";
import FeedbackOptions from "./feedbackOption/feedbackOption";
import Statistics from "./statistic/statistics";
import { GlobalStyle } from "./GlobalStyle";



class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  goodState() {
    const goodState = this.state.good;
    return goodState;
  }
  
  btnClick = (options) => {
    this.setState({
        [options.currentTarget.innerText]: this.state[options.currentTarget.innerText] + 1  
    }
    )
  }
  

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
 
  countPositiveFeedbackPercentage() {
    let percentage = 0;
    if (!this.state.good || this.countTotalFeedback() === 0) {
      return;
    }
    percentage = this.goodState() / this.countTotalFeedback() * 100;
    // if (percentage %2 !== 0) {
    //   percentage.toFixed(2);
    // }
    return percentage.toFixed(0);
  }
    
  render() { 
        
          return (
            <div>
              <GlobalStyle />
              <Section title="Plese leave feedback"></Section>
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.btnClick}>
              </FeedbackOptions>
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
            </div>
          )
      }
  }

export default App;