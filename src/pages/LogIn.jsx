import { useState } from 'react'
import { auth } from '../Firebaseswd';
import { signInWithEmailAndPassword } from 'firebase/auth'; //firebase "funktion"
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

    const [email, setEmail] = useState(''); //to useStae- hooks
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 

    //funktion sender formularen ind til firebase
    async function handleSubmit(e) { 
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password); //logger medarbejderne ind med email og password
            console.log(userCredential); // Hvis login er vellykket, vil userCredential indeholde information om brugeren.
            const user = userCredential.user; //Udtrækker brugerobjektet fra userCredential.
            sessionStorage.setItem('user', user.email); // Gemmer brugerens email-adresse i session storage, så den kan bruges på andre sider.
            navigate("/memberpage"); 
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="baggrund">
            <h1 className="underOverskrift">Medarbejder login</h1>

            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Opdaterer værdien af email-statet med den værdi, brugeren indtaster i inputfeltet.
                    name="useremail"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="userpassword"
                />
                <button type="submit" className='subBtn'>Login</button>
            </form>
            
        </div>
    )
}