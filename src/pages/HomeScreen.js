import React, { useState } from 'react'
import './pagestyles/home.css';
import { Link } from 'react-router-dom'

export default function HomeScreen() {

    const quizData = [
        {
            id: 1,
            title: "About Bangladesh",
            img: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/bangladesh--jorg-hackemann-shutterstock.jpg",
            link: "/quiz/bangladesh"
        },
        {
            id: 2,
            title: "History",
            img: "https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-feather-quill-compass-30890377.jpg",
            link: "/quiz/history"
        },
        {
            id: 3,
            title: "Pograming",
            img: "https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp",
            link: "/quiz/pograming"
        },
        {
            id: 4,
            title: "All About Bangladesh",
            img: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ybGR8ZW58MHx8MHx8&w=1000&q=80",
            link: "/quiz/world"
        },
        {
            id: 5,
            title: "React",
            img: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
            link: "/quiz/react"
        },
        {
            id: 6,
            title: "JavaScript",
            img: "https://moralis.io/wp-content/uploads/2021/07/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png",
            link: "/quiz/javascript"
        },
    ]


    return (
        <div className='home'>
            <div className='container'>
                <h2 className='homeTitle'>Choose Your Category From Below</h2>

                <div className='flexQuizesContainer'>
                    {
                        quizData.map(data => (
                            <Link key={data.id} className='LinkWrapper' to={data.link}>
                                <div className="quizSectionWrapper">
                                    <img src={data.img} className="quizHomeImgStyle" />
                                    <h3 className='homeQuizDetailsText'>{data.title}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
