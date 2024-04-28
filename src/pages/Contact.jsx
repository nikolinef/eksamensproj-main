import Centertekst from '../components/Centertekst';
import Folderdescribtion from "../components/Folderdescribtion";
import folderarrow from "../assets/folderpilned.svg";
import Vejledningstid from '../components/Vejledningstid';
import Costumerrequest from '../components/Costumerrequest';
import FAQ from '../components/FAQ';
import React, {useState} from 'react';

export default function Homepage() {

    return (
        <>
        <div className="baggrund">

        <Centertekst overskrift="Kontakt Evergreen" brodtekst="Her kan du sende en forespørgsel på et møde eller stille os andre spørgsmål. Husk at vi har en FAQ, hvor du sandsynligvis kan finde svar på dine spørgsmål, ellers er du velkommen til at kontakte os på mail eller telefon" />


        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Book et møde</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Send en forespørgsel på et mødetidspunkt, dato og evt. sted. Vi tager rundt i hele landet for at hjælpe virksomheder. Du vil modtage en bekræftelse på at vi har fået din besked. Herefter kontakter vi dig/din virksomhed for at aftale nærmere."
            />
            <Folderdescribtion
            fdescribtion="Til mødet vil vi sammen snakke om de forskellige optimeringsmuligheder og behov, din virksomhed har, og vil fastlægge et forløb der passer jeres kalender."
            />
            <br />
            <Costumerrequest />
            

          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
        <div className="folderheadline">
            <h2>FAQ</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Vi har samlet svarene på de hyppigste spørgsmål vi får:"
            />
            <FAQ 
            question="Hvornår får jeg svar på min forespørgsel?"
            answer="Det gør du snarest muligt. Vi bestræber os på at give svar samme dag eller arbejdsdagen efter."
            />
            <br />
            <FAQ 
            question="Hvad koster pakkerne?"
            answer="Vi kan ikke sætte en fast pris på vores pakker, da variationen af vores arbejde er meget forskellige fra kunde til kunde."
            />
            <br />
            <FAQ 
            question="Hvordan kontakter jeg Evergreen uden for kontortid?"
            answer="Til vores samtaler, får du nummeret på vores hotline, hvor vi vil prøve at hjælpe med akutteproblemer."
            />
            <br />
            <FAQ 
            question="Hvordan komprimere jeg filerne?"
            answer="Der findes forskellige hjemmesider, som kan komprimere de filtyper, vi anbefaler, yderligere."
            />
            <br />
            <FAQ 
            question="Hvad er SEO?"
            answer="Search Engine Optimization. - Hjælper forskellige bots med at læse dit website bedre for at opnå højere visning på søgemaskiner som fx Google."
            />
            <br />
            <FAQ 
            question="Hvem er Tom GreenWood?"
            answer="Tom Greenwood er forfatter til bogen Sustainable Web Design, og med udvikler af Sustainable Web Manifesto. Vi er inspireret og motiveret af Greenwood."
            />
            <Folderdescribtion
            fdescribtion="Har du stadig ikke fået svar, er du selvfølgelig velkommen til at kontakte os. Se træffetider under Rådgivning og vejledning"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
              <h2>Rådgivning & vejledning</h2>
              <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Har du spørgsmål til vores implementeringsguide for CO2 reducerende tiltag, eller kan du ikke finde svar i vores FAQ, er du velkommen til at kontakte os."
            />
            <br />
            <Vejledningstid />

          </div>
        </div>
        
      </div>
        </>
    )
}