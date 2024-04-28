import Card from "../components/Cards";
import folderarrow from "../assets/folderpilned.svg";
import Leasbtn from "../components/Leasbtn";
import Folderdescribtion from "../components/Folderdescribtion";
import Beforeandafter from "../components/Beforeandafter";
import Centertekst from "../components/Centertekst";
import LilleKunde1 from "../assets/LilleKunde1.png";
import LilleKunde2 from "../assets/LilleKunde2.png";
import LilleKunde3 from "../assets/LilleKunde3.png";
import Bookbtn from "../components/Bookbtn";
import foereksempel1 from "../assets/foereksempel1-min.jpg";
import foereksempel2 from "../assets/foereksempel2-min.jpg";
import foereksempel3 from "../assets/foereksempel3-min.jpg";
import eftereksempel2 from "../assets/eftereksempel2-min.jpg";
import eftereksempel3 from "../assets/eftereksempel3-min.jpg";

export default function Products() {


    return (
        <>
    <div className="baggrund">


        <Centertekst overskrift="Pakker vi tilbyder" brodtekst="Herunder kan du læse, hvilke ydelser der hører med i de forskellige pakker. 
        Husk at vejledning og rådgivning alle dage, på mail og telefon, er med i alle pakkerne. " />


        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Pakke 1 - Billedeoptimering</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Hos Evergreen har vi forståelse for, at den komplette omstilling kan virke uoverskuelig. 
            Derfor har vi lavet en pakke, hvor vi komprimere visuelle medier og opdatere koden, samt sletter gammelt ubrugeligt kode."
            />
            <p>
              <h4>Det får du med i pakken:</h4>
              <li>Komprimering af billeder og videoer</li>
              <br />
              <li>Optimering af kode</li>
              <br />
              <li>Simpel informationsarkitektur</li>
            </p>
            
            <Bookbtn
            link="/Contact#mdebook"/>
            <Beforeandafter
            image1={foereksempel1}
            alt1="Example alt"
            lagringspladspre="14,07 GB"
            kgwattpre="105 kg/watt"
            image2={foereksempel1}
            alt2="Example alt2"
            lagringspladspost="504 KB"
            kgwattpost="20 kg/watt"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Pakke 2 - Designoptimering</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Med designoptimering tilføjer vi et nyt design, der mindsker energiforbruget, samt opdater koden og komprimere visuelle medier. 
            Denne pakke er populær, fordi vi bevare dit brand og identitet."
            />
            <p>
            <h4>Det får du med i pakken:</h4>
              <li>Komprimering af billeder og videoer</li>
              <br />
              <li>Optimering af kode</li>
              <br />
              <li>Simpel informationsarkitektur</li>
              <br />
              <li>Design af userinterface</li>
            </p>
            <Bookbtn
            link="/Contact#mdebook"/>
            <Beforeandafter
            image1={foereksempel2}
            alt1="Example alt"
            lagringspladspre="17,07 GB"
            kgwattpre="150 kg/watt"
            image2={eftereksempel2}
            alt2="Example alt2"
            lagringspladspost="378 KB"
            kgwattpost="17 kg/watt"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Pakke 3 - Rebranding</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Her får du hele pakken!
            Vi går all in og optimerer dit website på alle parameter vi ved er mulige. 
            Det er til virksomheder, der godt kunne bruge en rebranding i den mere miljøvenlige retning. "
            />
            <p>
            <h4>Det får du med i pakken:</h4>
              <li>Komprimering af billeder og videoer</li>
              <br />
              <li>Optimering af kode</li>
              <br />
              <li>Simpel informationsarkitektur</li>
              <br />
              <li>Design af userinterface</li>
              <br />
              <li>Logo</li>
              <br />
              <li>Kommunikationsstrategier</li>
              <br />
              <li>Vedligeholdelse af content</li>
            </p>
            <Bookbtn
            link="/Contact#mdebook"/>
            <Beforeandafter
            image1={foereksempel3}
            alt1="Example alt"
            lagringspladspre="20,56 GB"
            kgwattpre="289 kg/watt"
            image2={eftereksempel3}
            alt2="Example alt2"
            lagringspladspost="482 KB"
            kgwattpost="10 kg/watt"
            />
          </div>
        </div>
    
          <h3 className="centerTekst">Eksempler fra tidligere kunder</h3>
          <div className="allcards">
            <Card
              title="EleganceEssence"
              image={LilleKunde1} 
              alt="Example Image"
              underTitle="Billedeoptimering"
              paragraph="Takket være billedoptimeringstjenesten er vores hjemmesides loadtid halveret, hvilket giver vores brugere en bedre browsingoplevelse. Nu kan vi levere vores indhold mere effektivt og imponerende."
            />
            <Card
              title="LAMBOK"
              image={LilleKunde2}
              alt="Example Image"
              underTitle="Designoptimering"
              paragraph="
              Vi er begejstrede for vores nye hjemmeside! Trafikken er steget, kunderne er glade, og vores brand er styrket. Nu matcher vores online tilstedeværelse vores virksomhedsidentitet perfekt."
            />
            <Card
              title="BOHO Blomster"
              image={LilleKunde3}
              alt="Example Image"
              underTitle="Rebranding"
              paragraph="
              Vores rebranding styrker vores bæredygtige engagement og brand. At skabe en positiv indvirkning på miljøet fylder mig med stolthed og glæde. Det er fantastisk at være en del af denne rejse mod en mere bæredygtig fremtid."
            />

          </div>

    </div>

        </>
    )
}