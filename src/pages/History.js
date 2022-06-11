import React from 'react'
import QuizDemo from '../components/quizdemo/QuizDemo'

const quizdata = [
    {
        id: 1,
        question: "When did Bangladesh become an independent country?",
        options: [
            { option: "1971", isTrue: true },
            { option: "1965", isTrue: false },
            { option: "1966", isTrue: false },
            { option: "1972", isTrue: false },
        ]
    },
    {
        id: 2,
        question: "How was Bangladesh known when it was part of Pakistan?",
        options: [
            { option: "Baluchistan", isTrue: false },
            { option: " East Pakistan", isTrue: true },
            { option: "Sindh", isTrue: false },
            { option: "Baltistan", isTrue: false },
        ]
    },
    {
        id: 3,
        question: "Which district of Bangladesh was part of Assam?",
        options: [
            { option: "Chittagong", isTrue: false },
            { option: "Sylhet", isTrue: true },
            { option: "Khulna", isTrue: false },
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
    {
        id: 11,
        question: " Who was assassinated on 15 August 1975?    ?",
        options: [
            { option: "Zia-ur-Rahman", isTrue: false },
            { option: "Sheikh Mujibur Rahman", isTrue: true },
            { option: "Tikka Khan", isTrue: false },
            { option: "Zia-ul-Haq", isTrue: false },
        ]
    },
]

export default function History() {
    return (
        <div>
            <QuizDemo quizdata={quizdata} />
        </div>
    )
}
