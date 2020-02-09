import React, { useState } from 'react'

const Login = () => {
    const [ user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        console.log('Login submit');
    }

    return (
        <div className='form-container'>
            <h1>
                <span className="text-primate">Log inn</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group"> 
                    <label htmlFor="email">Email Adresse</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary brn-block"/>
            </form>
        </div>
    )
}

export default Login;