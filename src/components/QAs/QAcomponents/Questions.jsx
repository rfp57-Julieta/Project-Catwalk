/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './Question.jsx';
import Answers from './Answers.jsx';
import QuestionModal from './QuestionModal.jsx';

const Questions = (props) => {
  const [modalView , setModalView] = useState(false);
  const [count, setCount] = useState(4);
  const [questions, setQuestions] = useState([]);
  useEffect( () => {
    setQuestions( () => {
      return props.questions.slice(0, count);
    })
  }, [count]);

  const handleAddQuestionView = (event) => {
    event.preventDefault();
    setModalView( (currState) => { return !currState; });
  };

  const handleShowMore = (event) => {
    setCount( (curCount) => {
      return curCount + 2;
    });
  };

  return (
    <div className='wholeQuestion'>
      <QuestionModal open={modalView} onClose={handleAddQuestionView} product_name={props.product_name}>
        <form className='form' onSubmit={props.task}>
          <label>Your Question <span className='asterisk'>*</span></label>
          <textarea name='body' maxLength='1000' rows='8' placeholder='Why did you like the product or not?'></textarea>
          <label>What is your nickname <span className='asterisk'>*</span></label>
          <input className='username' type='text' maxLength='60' name='username' placeholder='Example: jackson11!'></input>
          <label>Your Email <span className='asterisk'>*</span></label>
          <input className='email' type='text' maxLength='60' name='email' placeholder='Example: jack@email.com'></input>
          <input className='submit' type='submit' value='Answer'></input>
        </form>
      </QuestionModal>
      {questions.map( (question) => {
        return (
          <div key={question.question_id} className='oneQ'>
              <Question question={question} product_name={props.product_name}/>
          </div>
        );
      })}
      <div className='topBar'>
        <span className='addQuestion'>
          <button onClick={handleAddQuestionView}>Add Question</button>
        </span>
        {props.questions.length > count
          && <span onClick={handleShowMore} className='qShowMore'>
            Show More Questions
          </span>
        }

      </div>
    </div>
  );
};

export default Questions;