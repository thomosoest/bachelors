import React, { useState } from 'react'

const Register = () => {
    const [ user, setUser] = useState({
        name:  '',
        email: '',
        password: ''
    });

    const { name, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        console.log('Register submit');
    }

    return (
        <div className='form-container'>
            <h1>
                <span className="text-primate">Registrer Konto</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group"> 
                    <label htmlFor="email">Email Adresse</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary brn-block"/>
            </form>
        </div>
    )
}

export default Register