import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        const apiKey = 'AIzaSyAbAjVGmIw4UBxFLxYZOL7V1Cgu3qqV1dY';
        // const apiKey = import.meta.env.VITE_FIREBASEAPIKEY;
        
        console.log(apiKey);
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        try {
            const response = await fetch(url + apiKey, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                console.log("User signed up successfully!", data);

                navigate('/TodoDashboard');

            } else {
                setError(data.error.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='text-center flex px-2'>
            <div className="m-auto">
                <h1 className='text-white font-bold text-center text-xl py-3'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input
                            className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-xl mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                            name="email"
                            placeholder="Enter email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-xl mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='off'
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    
                    <button type="submit"
                        className='text-xl font-semibold text-white bg-blue-500 px-10 py-2 rounded-lg hover:bg-blue-800'
                    >Sign Up</button>
                </form>
            </div>
        </div>
    );
}
