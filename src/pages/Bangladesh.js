import React from 'react'
import QuizDemo from '../components/quizdemo/QuizDemo'

const quizdata = [
    {
        id: 1,
        question: "Capital of Bangladesh is?",
        options: [
            { option: "Dhaka", isTrue: true },
            { option: "Chittagong", isTrue: false },
            { option: "Khulna", isTrue: false },
            { option: "Shylet", isTrue: false },
        ]
    },
    {
        id: 2,
        question: "How many total Districts are there in Bangladesh ?",
        options: [
            { option: "60", isTrue: false },
            { option: "64", isTrue: true },
            { option: "68", isTrue: false },
            { option: "54", isTrue: false },
        ]
    },
    {
        id: 3,
        question: "What is the country calling code for Bangladesh?",
        options: [
            { option: "+49", isTrue: false },
            { option: "+880", isTrue: true },
            { option: "+230", isTrue: false },
            { option: "+97", isTrue: false },
        ]
    },
    {
        id: 4,
        question: "Official language of Bangladesh is ?",
        options: [
            { option: "Bengali ", isTrue: true },
            { option: "+Urdu", isTrue: false },
            { option: "Arabic", isTrue: false },
            { option: "Hindi", isTrue: false },
        ]
    },
    {
        id: 5,
        question: "Internet tld of Bangladesh is  ?",
        options: [
            { option: ".in ", isTrue: false },
            { option: ".bd", isTrue: true },
            { option: ".uk", isTrue: false },
            { option: ".us", isTrue: false },
        ]
    },
    {
        id: 6,
        question: "National game of Bangladesh is   ?",
        options: [
            { option: "Cricket ", isTrue: false },
            { option: "Kabadi", isTrue: true },
            { option: "Football", isTrue: false },
            { option: "Hockey", isTrue: false },
        ]
    },
    {
        id: 7,
        question: "What is the currency of Bangladesh  ?",
        options: [
            { option: "Rupee ", isTrue: false },
            { option: "Taka", isTrue: true },
            { option: "Dollar", isTrue: false },
            { option: "Euro", isTrue: false },
        ]
    },
    {
        id: 8,
        question: "Which of following river is longest in Bangladesh   ?",
        options: [
            { option: "Padma ", isTrue: false },
            { option: "Kobadak", isTrue: false },
            { option: "Surma", isTrue: true },
            { option: "Kornofully", isTrue: false },
        ]
    },
    {
        id: 9,
        question: " Who is the first president of Bangladesh    ?",
        options: [
            { option: "Ziaur-Rahman ", isTrue: false },
            { option: "Nazrul islam", isTrue: false },
            { option: "S.k mujib", isTrue: true },
            { option: "Sifaq", isTrue: false },
        ]
    },
    {
        id: 10,
        question: " Highest population city of Bangladesh is     ?",
        options: [
            { option: "Chittagong ", isTrue: false },
            { option: "Rangpur", isTrue: false },
            { option: "Cumilla", isTrue: false },
            { option: "Dhaka", isTrue: true },
        ]
    },
]

export default function Bangladesh() {
    return (
        <div>
            <QuizDemo quizdata={quizdata} />
        </div>
    )
}
