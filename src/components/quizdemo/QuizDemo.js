import React, { useState } from 'react'
import './quizdemo.css';
import { useNavigate } from 'react-router-dom'





export default function QuizDemo({ quizdata }) {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [questionCount, setQuestionCunt] = useState(1);

    const navigate = useNavigate()


    const quizBtn = (isTrue) => {
        if (isTrue == true) {
            const nextQuestion = count + 1;
            if (nextQuestion < quizdata.length) {
                setCount(nextQuestion)
                setQuestionCunt(questionCount + 1)
            } else {

                alert('you have come to end of the course')
                setShow(true)
            }
        } else {
            alert('Your answer is wrong')
        }
    }

    const playMore = () => {
        navigate('/')
    }
    const prevBtn = () => {
        if (count >= 1) {
            setCount(count - 1)
            setQuestionCunt(questionCount - 1)
        }
    }

    return (
        <div className='quizDemohome'>
            <div className='quizDemocontentWrapper'>
                <h3>Quiz</h3>
                {
                    show ?
                        (
                            <div className='scoreDiv'>
                                <h3>You score {questionCount} of {quizdata.length}</h3>
                                <button onClick={playMore} className='prevBtn'>Play More</button>

                            </div>
                        )

                        :

                        <div className='quizdemoWrapper'>
                            <h4>Question {questionCount} of {quizdata.length}</h4>
                            <h4 className='questionTextStyle'>{quizdata[count].question}</h4>
                            <div className='btnWrapper'>
                                {
                                    quizdata[count].options.map((data, index) => (
                                        <button onClick={() => quizBtn(data.isTrue)} className='quizdemobtn' key={index}>{data.option}</button>
                                    ))
                                }
                            </div>

                            {
                                count > 0 && <button onClick={prevBtn} className='prevBtn'>Previous</button>
                            }

                        </div>
                }


            </div>
        </div>
    )
}
