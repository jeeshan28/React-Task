// components/LoginPage.js
import React, { useState } from 'react';


function LoginPage({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true);
        } else {
            setError(data.error || 'Invalid email or password');
        }
    };

    return (



        <div
            style={{
                height: "640px",
                width: "100%",
                backgroundImage: "linear-gradient(to right, #6782EB , #D026F9)"
            }} >

            <form
                style={{
                    height: "450px",
                    width: "350px",
                    backgroundColor:"white",
                    position:"absolute",
                    left:"35%",
                    top:"10%",
                    display:"flex",
                    flexDirection:"column",
                    gap:"20px",
                    borderRadius:"10px",
                    paddingLeft:"2%"
                }}
                onSubmit={handleSubmit}
                >


                    <h2 style={{ fontSize: "32px", fontWeight: "600", paddingLeft: "22%", paddingTop: "5%" }}>Login Form</h2>
                    <div>
                        <label style={{ color: "black", fontSize: "25px" }}>Email</label> <br />
                        <input style={{ height: "40px", width: "22vw", marginTop:"2%",paddingLeft: "2%", border: "1px solid grey", borderRadius: "5px" }} type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label style={{ color: "black", fontSize: "25px" }}>Password</label>
                        <br />
                        <input style={{ height: "40px", width: "22vw", marginTop:"2%",paddingLeft: "2%", border: "1px solid grey", borderRadius: "5px" }} placeholder='Enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button style={{ height: "40px", width: "22vw", backgroundImage: "linear-gradient(to right,#06D4DF, #6782EB , #D026F9)" , marginTop:"5vh" , borderRadius:"5px"}} type="submit">Login</button>
                </form>
            

            {error && <p>{error}</p>}
        </div>

    );
}

export default LoginPage;
