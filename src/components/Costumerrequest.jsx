import React, {useState} from "react";
import "../App.css";
import { db, ref, push } from '../Firebaseswd'; 

//Vi har fået hjælp af Majed og ellers er koden fra denne YT-video: https://youtu.be/RKj3OjgftXc?si=pwW34SR38P7M75J- (sidst set d. 22/4)

const Costumerrequest =() => { //håndterer indsendelse af kundeanmodninger
  const [name, setName] = useState(""); //så data fra inputfelterne i formularen kan defineres
  const [email, setEmail] = useState("");
  const [mobilnummer, setMobilnummer] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false); // Loader-state, der angiver, om der udføres en handling (f.eks. dataoverførsel til Firebase).

  // Funktionen handleSubmit, der kaldes, når formularen indsendes.
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true); // Aktiverer loaderen for at vise, at en handling udføres.

    push(ref(db, 'contacts'), {  // Pusher dataene til Firebase-databasen under 'contacts'-referencepunktet.
      name: name,
      email: email,
      mobilnummer: mobilnummer,
      message: message, 
    })

    .then(() => { // Hvis dataoverførslen lykkes, vises en bekræftelsesbesked som en alert, og loaderen slås fra.
      setLoader(false);
      alert("Tak for din forespørgsel, vi kontakter dig snarest muligt");
    })
    .catch((error) => { // Hvis der opstår en fejl under dataoverførslen, vises en fejlbesked, og loaderen slås fra.
      alert(error.message);
      setLoader(false);
    });

     // Nulstiller værdierne af inputfelterne i formularen.
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
            placeholder="Lars Pilgaard" required
            onChange={(e) => setName(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="name">Mobilnummer:</label>
            <br />
            <input type="number" 
            name="mobilnummer"
            value={mobilnummer}
            placeholder="12345678" required
            onChange={(e) => setMobilnummer(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="name">E-mail:</label>
            <br />
            <input type="email" 
            name="email"
            value={email}
            placeholder="virksomhed@gmail.com" required
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