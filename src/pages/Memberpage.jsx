import Folderdescribtion from "../components/Folderdescribtion";
import folderarrow from "../assets/folderpilned.svg";
import MedarbejderKasser from "../components/MedarbejderKasser";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; //sigOut og auth er "funktioner" firebase levere, så vi kan bruge dem
import { auth } from "../Firebaseswd";
import { useAuthState } from "react-firebase-hooks/auth"; //kræver at man skriver: "npm install --save react-firebase-hooks" i terminalen. 
import { useEffect } from "react";

export default function Memberpage() {

  const userInSession = sessionStorage.getItem('user'); //henter brugeroplysninger vi lavede i firebase
  const navigate = useNavigate(); //useNavigate skal bruges, når vi vil have functionerne til at skifte fra side til side. useNavigate kommer fra App.jsx
  const [user, loading] = useAuthState(auth); // Bruger useAuthState-hooket fra react-firebase-hooks til at få brugerens autentificeringsstatus

  useEffect(() => {
    if (loading) return; //hvis den stadig loader sker der ikke noget
    if (!user) return navigate("/login"); //Hvis medarbejderne ikke er logget ind, sendes de til login-siden
  }, [user, loading, navigate]); //

  async function handleLogout() { //logud funktion
    try {
      await signOut(auth); //signOut er en firebasefunktion
      sessionStorage.removeItem('user'); //fjerne brugeroplysninger, så firebase kan se, ingen er logget ind. 
      navigate("/login"); //kommer tilbage til login-siden, hvis man logger ud
    } catch (error) { 
      console.error(error); //konsollen fanger fejl, hvis de opstår under logud. 
    }
  }

  return (
    <>
      <div className="baggrund">

        <h1 className="overskrift" id="MedarbejderH">Status</h1>

        <div className="onefolder" style={{ backgroundColor: "#B9C186", color: "#412F26" }}>
          <div className="folderheadline">
            <h2>Nye forespørgsler</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <MedarbejderKasser
              paragraph1="EleganceEssence"
              paragraph2="tlf. 10 10 10 10"
              paragraph3="E-mai: info@EleganceEssence.dk"
              paragraph4="Vi skal optimere vores eksisterende billeder for at forbedre kvaliteten og præsentationen af vores indhold. Dette indebærer at justere lysstyrke, kontrast, farvebalance og skarphed samt sikre, at billederne er i den rette størrelse og format til de platforme, hvor de skal vises."
            />
            <br /><br />
            <MedarbejderKasser
              paragraph1="LAMBOK"
              paragraph2="tlf. 20 20 20 20"
              paragraph3="E-mail: info@LAMBOK.dk"
              paragraph4="Hele hjemmeside skal optimeres, inklusive koden og de visuelle medier, for at forbedre ydeevnen og hastigheden. Dette vil sikre en mere effektiv brugeroplevelse og hurtigere indlæsningstider. "
            />
            <Folderdescribtion />
          </div>
        </div>

        <div className="onefolder" style={{ backgroundColor: "#6A6F4C", color: "#EDE1D2" }}>
          <div className="folderheadline">
            <h2>Igangværende</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <MedarbejderKasser
              paragraph1="BOHO Blomster"
              paragraph2="tlf. 30 30 30 30"
              paragraph3="E.mail: info@BOHOBlomster.dk"
              paragraph4="Rebrandings opgave, kunden ønsker mørkefraver, gerne en mørk lilla og en hvid tekst. Selve designet skal være enkelt."
            />
            <br /><br />
            <MedarbejderKasser
              paragraph1="Foodies"
              paragraph2="tlf. 10 20 30 40"
              paragraph3="E-mail: info@Foodies.dk"
              paragraph4="For at forbedre præsentationen og kvaliteten af vores indhold er det nødvendigt at optimere vores nuværende billedmateriale. Dette indebærer en proces, hvor vi finjusterer elementer som lysstyrke, kontrast, farvebalance og skarphed. Derudover skal vi sikre, at billederne er i den korrekte størrelse og det passende format til de specifikke platforme, hvor de vil blive vist."
            />
            <Folderdescribtion />
          </div>
        </div>

        <div className="onefolder" style={{ backgroundColor: "#806044", color: "#EDE1D2" }}>
          <div className="folderheadline">
            <h2>Afsluttede kunder</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <MedarbejderKasser
              paragraph1="StilfuldMand"
              paragraph2="tlf. 20 30 40 50"
              paragraph3="E-mail: info@StilfuldMand.dk"
              paragraph4="Optimering af hele hjemmesiden, herunder både koden og de visuelle medier, er påkrævet for at forbedre ydeevnen og hastigheden. Dette vil resultere i en mere effektiv brugeroplevelse med hurtigere indlæsningstider."
            />
            <br /><br />
            <MedarbejderKasser
              paragraph1="Sneakers"
              paragraph2="tlf. 50 60 70 80"
              paragraph3="E-mail: info@Sneakers.dk"
              paragraph4="Vi står over for en spændende rebranding-opgave, hvor kunden ønsker et farverigt design med en levende og livlig palet. Denne tilgang sigter mod at skabe en positiv og engagerende atmosfære, der fanger opmærksomheden og skaber et mindeværdigt indtryk. Samtidig er det vigtigt, at designet forbliver enkelt og stilfuldt for at sikre klarhed og effektiv kommunikation."
            />
            <Folderdescribtion />
          </div>
        </div>

        <p>Logget på som {user && userInSession && user.email}</p> 
        <button onClick={handleLogout} className="subBtn">Log ud</button> 

      </div>
    </>
  ); //linje 109 og 110 så medarbejderne kan logge ud igen.
} //kopiret fra mortens kode i undervisning d. 11.-15. marts 
