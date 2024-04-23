import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn";
import Card from "../components/Cards";
import Funfact from "../components/Funfact";
import Carousel from "../components/Carousel";
import ECO from "../components/ECOgrader";
import forsideeksempel1 from "../assets/forsidefoereksempel1.jpg";
import forsideeksempel2 from "../assets/forsideeftereksempel2.jpg";
import forsideeksempel3 from "../assets/forsideeftereksempel3.jpg";
import React, { useEffect, useState } from "react";

export default function Homepage() {

    //screenloading kode er fra YT-video: https://youtu.be/SR8755C0bME?si=KqKUEtwv4u4XyVlx (sidst set d. 22/4) 
    const [loading, setLoading] = useState(false);
    //funktion til screenload 
    useEffect(() => { //sætter en tid, når tiden er gået fjernes det
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 6000) //6 sekunder
    }, []);

    return (
        <>
        <div className="loadingscreen">
            {
                loading ? (<iframe src="https://lottie.host/embed/d7e7f56d-6795-404a-9530-c92e8f7c766c/C9sRDSFZS4.json"></iframe>)
                : (

            <div className="baggrund">

                <div className="velkomst">
                    <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Her kan du blive klogere på hvordan internettet og hjemmesider påvirker klimaet" />
                </div>

                <Centertekst overskrift="Hvem er Evergreen?" brodtekst="Evergreen forener æstetik med optimerede websites. Vores mission er at minimere CO2-aftrykket ved udvikling af brugervenlige og visuelt appellerende webløsninger. Samtidig vil vi dele vores erfaring og viden, så andre kan lade sig inspirere" />

                <Leasbtn link="/about">Læs mere</Leasbtn>


                <h2 className="underOverskrift">Vores pakker</h2>
                <div className="allcards">
                    <Card
                    title="Pakke 1"
                    image={forsideeksempel1} // 300x200px
                    alt="Example Image"
                    underTitle="Billedeoptimering"
                    paragraph="Hos Evergreen har vi forståelse for, at den komplette omstilling kan virke uoverskuelig. Derfor har vi lavet en pakke, hvor vi komprimere visuelle medier og opdatere koden, samt sletter gammelt ubrugeligt kode."
                />
                    <Card
                    title="Pakke 2"
                    image={forsideeksempel2}
                    alt="Example Image"
                    underTitle="Designoptimering"
                    paragraph="Med designoptimering tilføjer vi et nyt design, der mindsker energiforbruget, samt opdater koden og komprimere visuelle medier. Denne pakke er populær, fordi vi bevare dit brand og identitet."
                />
                    <Card
                    title="Pakke 3"
                    image={forsideeksempel3}
                    alt="Example Image"
                    underTitle="Rebranding"
                    paragraph="Her får du hele pakken! Vi går all in og optimere dit website på alle parameter vi ved er mulige. Det er til virksomheder, der godt kunne bruge en rebranding i den mere miljøvenlige retning."
                />
                </div> 

                <Funfact
                    overskrift="Dark mode"
                    brodtekst="
                    Mørke baggrunde kræver mindre energi at vise på skærmen, hvilket resulterer i lavere energiforbrug, især på enheder med OLED- eller AMOLED-skærme. Den reducerede energiforbrug fører også til længere batterilevetid på batteridrevne enheder som smartphones og bærbare computere. Derudover reducerer mørke baggrunde øjenbelastning og træthed, samtidig med at de producerer mindre varme under brug. Alt i alt kan brugen af dark mode bidrage til mindre energiforbrug i forbindelse med visning af hjemmesider."
                />
                <Leasbtn link="/about">Læs mere</Leasbtn>

                <Funfact
                    overskrift="Letter hjemmesider"
                    brodtekst="
                    Lette websider er ikke kun godt for planeten, men de skaber også glade brugere. Vores webdesign handler om at reducere filstørrelsen på hjemmesider, hvilket ikke kun bidrager til at skære ned på CO2-udledningen, men også resulterer i hurtigere indlæsningstider. Når hjemmesider indlæses hurtigt, oplever brugerne en mere gnidningsfri browsingoplevelse, hvilket igen fører til større tilfredshed og glæde. Design med naturen i tankerne kan ikke kun gøre vores planet gladere, men også skabe mere behagelige løsninger for vores brugere."
                />
                <Leasbtn link="/about">Læs mere</Leasbtn>

                <h2 className="underOverskrift">Vores tidligere kunder</h2>

                <Carousel />

                <Centertekst overskrift="Google lighthouse test" brodtekst="Her kan du se hvad vores website scoore i Google lighthouses test af performance." />
                <ECO />
            
            </div>
              )}
        </div>
        </>
    )
}
