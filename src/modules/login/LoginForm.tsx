import React, { useState } from "react"
import { login, validateUserPayload } from "../../shared/services/user.service";


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        try {
          validateUserPayload({
            email,
            password,
            firstName: "str", 
            lastName: "str", 
          });
          await login(email, password);
          setErrorMessage('succes'); 
        } catch (error) {
          if (error instanceof Error) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage('An unexpected error occurred.');
          }
        }
    };
      
      
 return (
    <div style={{ maxWidth: '400px'}}>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Sign In</h1>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                    Email:
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    style={{ padding: '5px', width: '100%', boxSizing: 'border-box'  }} 
                    placeholder="Type your email address" />
                </label>
                {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
            <div style={{ display: 'flex' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                placeholder="Type your password"
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                style={{ marginLeft: '5px', cursor: 'pointer' }}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </label>
          {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
            </div>
            <button type="submit" style={{ padding: '10px', backgroundColor: 'dodgerblue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log In</button>
        </form>
    </div>

 )
}