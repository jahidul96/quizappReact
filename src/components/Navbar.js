import React from 'react'
import './styles/nav.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const { name } = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    return (
        <div className='navbar'>
            <div>
                <h3 style={{ cursor: "pointer" }} onClick={goHome}>QuizApp</h3>
            </div>
            <div className='navLeftDiv'>
                <i className="fa-solid fa-user personIcon"></i>
                <p>({name})</p>
            </div>
        </div>
    )
}
