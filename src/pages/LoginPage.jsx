import React, { useState } from 'react';
import '../assets/styles/LoginPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import arrowRightImage from '../assets/images/Login/arrow-right.png'; 

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ username: false, password: false });

    const handleLogin = (e) => {
            e.preventDefault();
        
        if (!username.trim() || !password.trim()) {
            setErrors({ username: !username.trim(), password: !password.trim() });
            return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className='datos-container'>
                <form onSubmit={handleLogin}>
                    <div className='img-container'>
                        <img src={require("../assets/images/Login/logo.png")} alt="" />
                    </div>
                    <span className='name-datos'>Usuario:</span>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span className="error">El campo de usuario es requerido</span>}
                    <span className='name-datos'>Contraseña:</span>
                    <div className='pass'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="password-toggle" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash style={{ color: '#555' }}/> : <FaEye style={{ color: '#555' }}/>}
                        </span>
                    </div>
                    {errors.password && <span className="error">El campo de contraseña es requerido</span>}

                    <a href="">¿Olvidates tu contraseña?</a>
                    <button type="submit" className="submit-button">
                        <div className="button-content">
                            <span>Acceder</span>
                            <img src={arrowRightImage} alt="arrow-right" /> {/* Agrega la imagen de flecha derecha */}
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
