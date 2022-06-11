import React from 'react'
import QuizDemo from '../components/quizdemo/QuizDemo'

const quizdata = [
    {
        id: 1,
        question: "React is an _______?",
        options: [
            { option: "liabery", isTrue: true },
            { option: "pogramming Language", isTrue: false },
            { option: "SuperSet of js", isTrue: false },
            { option: "Object", isTrue: false },
        ]
    },
    {
        id: 2,
        question: "Which of the following Javascript liabery?",
        options: [
            { option: "jQuery", isTrue: false },
            { option: " React js", isTrue: true },
            { option: "Java", isTrue: false },
            { option: "npm", isTrue: false },
        ]
    },
    {
        id: 3,
        question: "Javascript is ___",
        options: [
            { option: "Just For FrontEnd", isTrue: false },
            { option: "EveryWhere", isTrue: true },
            { option: "Backend", isTrue: false },
            { option: "Waste of time", isTrue: false },
        ]
    },
    {
        id: 4,
        question: "Which one of the following is a keyword?",
        options: [
            { option: "Switch ", isTrue: true },
            { option: "Size", isTrue: false },
            { option: "Jump", isTrue: false },
            { option: "Key", isTrue: false },
        ]
    },
    {
        id: 5,
        question: "The modulus operator uses ___ character.",
        options: [
            { option: "+ ", isTrue: false },
            { option: "%", isTrue: true },
            { option: "*", isTrue: false },
            { option: "-", isTrue: false },
        ]
    },
    {
        id: 6,
        question: "Auto, static, extern and register are called as ___",
        options: [
            { option: "Static ", isTrue: false },
            { option: "Storage specifier", isTrue: true },
            { option: "Register", isTrue: false },
            { option: "Auto", isTrue: false },
        ]
    },
    {
        id: 7,
        question: "How many storage specifies are there in a C++?",
        options: [
            { option: "5 ", isTrue: false },
            { option: "4", isTrue: true },
            { option: "3", isTrue: false },
            { option: "10", isTrue: false },
        ]
    },
    {
        id: 8,
        question: "Signed, unsigned, long and short are some of the ___",
        options: [
            { option: "Void ", isTrue: false },
            { option: "Data", isTrue: false },
            { option: "Modifiers", isTrue: true },
            { option: " Derived data", isTrue: false },
        ]
    },
    {
        id: 9,
        question: " Logical AND (&&) and Logical OR (||) are ___ operators.",
        options: [
            { option: "Logical ", isTrue: false },
            { option: "Class ", isTrue: false },
            { option: "Logical", isTrue: true },
            { option: "Equality", isTrue: false },
        ]
    },
    {
        id: 10,
        question: " Variable names must begin with ___",
        options: [
            { option: "#", isTrue: false },
            { option: "$", isTrue: false },
            { option: "Number", isTrue: false },
            { option: "Letter", isTrue: true },
        ]
    }
]

export default function JsReact() {
    return (
        <div>
            <QuizDemo quizdata={quizdata} />
        </div>
    )
}
