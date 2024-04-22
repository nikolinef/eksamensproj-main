import React, {useState} from "react";
import "../App.css";
import { db, ref, push } from '../Firebaseswd';

const Costumerrequest =() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilnummer, setMobilnummer] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    push(ref(db, 'contacts'), {
      name: name,
      email: email,
      mobilnummer: mobilnummer,
      message: message, 
    })

    .then(() => {
      setLoader(false);
      alert("Tak for din forespørgsel, vi kontakter dig snarest muligt");
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setName("");
    setEmail("");
    setMobilnummer("");
    setMessage("");
  };

    return(
        <>
        <form className="costumerrequest" onSubmit={handleSubmit}>
            <label htmlFor="name">Navn/firmanavn:</label>
            <br />
            <input type="text" 
            name="navn"
            value={name}
            placeholder="Navn/firmanavn" required
            onChange={(e) => setName(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="name">Mobilnummer:</label>
            <br />
            <input type="number" 
            name="mobilnummer"
            value={mobilnummer}
            placeholder="Mobilnummer" required
            onChange={(e) => setMobilnummer(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="name">E-mail:</label>
            <br />
            <input type="email" 
            name="email"
            value={email}
            placeholder="E-mail" required
            onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="name">Besked:</label>
            <br />
            <textarea type="text" 
            name="message"
            value={message}
            placeholder="Forespørgsel til mødetidspunkt, dato og evt. sted" required
            onChange={(e) => setMessage(e.target.value)}/>
            <br />
            <button type="submit" className="subBtn">Send</button>
        </form>
        </>
    );
};

export default Costumerrequest;