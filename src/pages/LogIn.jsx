import { useState } from 'react'
import { auth } from '../Firebaseswd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            sessionStorage.setItem('user', user.email);
            navigate("/memberpage");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Medarbejder login</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="useremail"
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="userpassword"
                />
                <button type="submit" className='login-button'>Login</button>
            </form>
            
        </div>
    )
}