import React, { useState, useEffect } from 'react'
import './pagestyles/auth.css'
import { useNavigate } from 'react-router-dom'

export default function AuthScreen() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const guestBtn = () => {
        const user = {
            name: "Guest",
            email: "Guest@mail.com"
        }
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload();
    }
    const authBtn = () => {
        if (!name || !email) {
            return alert('please fill all the filed')
        } else {
            const user = {
                name,
                email
            }
            localStorage.setItem('user', JSON.stringify(user))
            alert('user created succesFully')
            window.location.reload();
        }

    }

    return (
        <div className='auth'>
            <div className='authContent'>
                <h2>About Yourself.</h2>
                <div className='inputWrapper'>
                    <input onChange={(e) => setName(e.target.value)} placeholder='UserName...' type="text" />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder='Email...' type="text" />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder='Password...' type="text" />
                    <div className='authBtnWrapper'>
                        <button onClick={authBtn} className='btn authsubmtiBtn'>Submit</button>
                        <button onClick={guestBtn} className='btn'>Play as Guest</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
