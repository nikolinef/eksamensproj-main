import folderarrow from "../assets/folderpilned.svg";
import Stortlogo from "../components/Stortlogo";
import Centertekst from "../components/Centertekst";
import pageload from "../assets/pageloadevergreen.svg";
import { Link } from "react-router-dom";

export default function About() {

    return (
        <>
        <div className="baggrund">

        <Stortlogo />

        <div className="leftTekst">
            <h2 className="leftTekst">Hvem er Evergreen?</h2>
            <p className="leftTekst">
                Evergreen er meget mere end et webbureau. Vi er fortalere for bæredygtighed og æstetik. Vores mission er at skabe fængende webgrafiske løsninger, der ikke kun imponerer, men også belyser vigtigheden af bæredygtighed. Vi tror på at oplyse og skabe opmærksomhed om klimakonsekvenserne, som internettet skaber.
                <br /> <br />
                Vi arbejder ud fra et bæredygtigheds-codex og stræber efter at skabe brugervenlige og visuelt appellerende webløsninger med fokus på at minimere CO2-aftrykket. Hos Evergreen handler det om at udvikle løsninger, der ikke går på kompromis med brugervenlighed eller æstetik. Vi tror på, at bæredygtighed ikke behøver være kedeligt. 
                <br /> <br />
                Vores værdier - oplysning, skabe opmærksomhed og ærlighed - er fundamentale for vores arbejde. Vi stræber efter gennemsigtighed i alt, hvad vi gør, og vi vil gerne vise, at webgrafiske løsninger kan være både smukke og funktionelle samtidig med at de er bæredygtige.
                <br /> <br />
                Evergreens formål er at være et bevis på, at bæredygtige webdesigns kan være lige så smukke og effektive som konventionelle løsninger. Hos os er bæredygtighed en æstetisk og funktionel fordel, ikke en hindring.
                </p>
        </div>
      
      <br /><br />

        <div className="leftTekst">
            <h2 className="leftTekst">Hvad er bæredygtigt webdesign? og hvorfor er det vigtigt?</h2>
            <p className="leftTekst">
                Bæredygtigt webdesign er en tilgang til at optimere digitale løsninger, der tager hensyn til miljøet og brugeroplevelsen. Dette indebærer at reducere CO2-udledning og strømforbruget ved brug af internettet og elektroniske enheder.
                <br /><br />
                Vores forbrug har en betydelig miljøpåvirkning på grund af datacentre, servere og elektroniske enheder, der bruges til at hoste og tilgå websites. Ved at implementere optimeringer kan vi reducere CO2-udledningen og minimere miljøforureningen.
                <br /><br />
                I 2019 skrev Tom Greenwood et webmanifest i samarbejde med designere, udviklere og andre professionelle inden for web, for at skabe opmærksomhed om bæredygtighed i vores branche.
                <br />
                <br />
                Bæredygtig webdesign går ud på at lave webløsninger og andre digitale løsninger, som lever op til de 6 fundamentale principper fra web manifestet. 
                <li>Clean</li>
                <br />
                <li>Effecient</li>
                <br />
                <li>Open</li>
                <br />
                <li>Honest</li>
                <br />
                <li>Regenerative</li>
                <br />
                <li>Resilient</li>
                <br /><br />
                Du kan læse mere om principperne på manifestets hjemmeside:
                <a href="https://www.sustainablewebmanifesto.com/" target="_blank" rel="noopener" >www.sustainablewebmanifesto.com/</a>
                <br />
                Tom Greenwood har også skrevet bogen "Sustainable Web Design", 2021, som er vores kilde til dette afsnit. Vi har læst bogen og er blevet inspireret og motiveret af Greenwood. 
                <br /><br />
                Derudover kan bæredygtigt webdesign forbedre brugeroplevelsen og ydeevnen på hjemmesider. Ved at optimere indlæsningstider, reducere unødvendige ressourcer og sikre en intuitiv navigation kan brugere få en bedre oplevelse, hvilket kan føre til øget tilfredshed, længere besøgstider og højere konverteringsrater.
                <br /> <br />
                Endelig er bæredygtigt webdesign også vigtigt fra et brand- og omdømmeperspektiv. Virksomheder, der viser et engagement i bæredygtighed, kan tiltrække og fastholde kunder, der værdsætter miljøvenlige tiltag. Det kan også differentiere virksomhederne i et konkurrencepræget marked og styrke deres position som samfundsansvarlige aktører.
            </p>
        </div>
        
        <Centertekst overskrift="Guide til optimering" brodtekst="Vi har prøvet at samle nogle af de opfordringer som Tom Greenwood skriver i hans bog Sustainable Web Design, 2021. Bogen har inspireret og motiveret os til at dele budskabet. Alle tiltagene har effekt på pageload." />

        <div className="stortLogo"><img src={pageload} alt="loadikon"/></div>

        

        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>IA & UX</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <p>
            Informations arkitektur og user experience er væsentlige faktorer for at optimere websitet. - Bæredygtigt eller ej.
            <br />
            <br />
            En simpel og logisk informations arkitektur kan gøre det nemmere og hurtigere for brugerne at opnå deres user goals på sitet.
            <br />
            I sammenhæng med strømforbrug er det bedst at brugerne bruger mindst mulig tid på websitet. 
            Det gøres ved at reducere indholdet til det absolut mest nødvendige og bruge let forståelig kommunikation.
            <br />
            <br />
            Det er også med til at forbedre brugeroplevelsen, fordi brugerrejsen tager mindre tid uden frustrationer og forvirring.
            <br />
            <br />
            Mængden af hver sides indhold og antallet af sider kan simplificeres. 
            I bogen “Don’t Make Me Think! A Common Sense Approach to Web usability”, Steve Krug, bliver der pointere, at brugerne slet ikke bruger så lang tid på hjemmesider, som vi designer dem til.
            </p>


          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Optimering af kode</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <p>
            Optimering af IA vil automatisk også optimere din kode. 
            Derudover skal du hele tiden sørger for at slette kode, der ikke bliver brugt, fx styles eller gamle artikler. 
            <br />
            <br />
            Det er også en fordel at genbruge elementer, styles og funktioner, så serveren ikke skal loade de samme koncepter flere gang. 
            <br />
            <br />
            Brug kun nødvendig tracking og aktiver det kun, når det skal bruges. At tracke brugernes data optager meget plads og overtræder deres private grænser. 
            <br />
            <br />
            Blokér robotter der besøger hjemmesider for forskellige analyser. De øger loadingtiden på servere og vores hjemmeside. 
            <br />
            <br />
            Lad koden være tilgængelig for alle, så vi alle kan lærer af hinanden. 
            <br />
            <br />
            Undgå at bruge content management systems (CMS) som fx Wordpress uden plug-ins, fordi serveren generere filerne, hver gang nogen besøger websitet. 
            <br />
            <br />
            Brug i stedet løsninger som page caching, hvor serveren generere filerne én gang pr. upload til webhotel og kopiere filerne til de næste brugere. 
            <br />
            <br />
            Hvis muligt vælg også programmeringssprog, der bruger mindre energi. Et populært sprog som JavaScript er ikke det, som bruger mindst energi. 
            </p>
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Billeder & videoer</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <p>Først af det værd at overveje formålet med de visuelle medier, så de ikke tager unødvendigt plads. 
            <br />
            <br />
            Med optimering af koden, skal filstørrelserne for billeder og video også gøres så små som muligt. Det kan man gøre ved at eksportere medierne i de rigtige filformater. 
            <br />
            <br />
            <h4>Billeder:</h4>
            De mest effektive filtyper for billeder er WEBP og AVIF.
            Ellers kan man også bruge PNG til simple billeder med en lille farvepalet
            <br />
            <br />
            Jo mindre variationen af farver jo mindre kan filen blive, derfor kan slørrede billeder også have effekt.
            <br />
            Er baggrunden irrelevant for billedets budsskab, kan man med fordel slører baggrunden.
            <br />
            <br />
            For ikoner og grafik uden tekst er SVG-filen mest optimal.
            <br />
            <br />
            <h4>Videoer:</h4>
            De mest effektive filtyper for videoer er WEBM og MP4. 
            <br />
            Undgå store lange videoer med automatisk afspilning. Det kræver mere strøm. 
            Derimod er det mere brugervenligt, når brugerne selv bestemmer hvornår videoen skal afspilles. Ydermere kan videoerne programmeres til lazyload, så de bruger mindre data ved loading.
            <br />
            <br />
            <h4>Animationer:</h4>
            For simpel frame by frame animation kan man bruge GIF-animation, ellers er lottie den mest effektive filtype for lidt mere avanceret animation.
            <br />
            <br />
            <br />
            Ved både video og billeder gælder at størrelsen har betydning for filstørrelsen. Dvs. 1500x1000px fylder mere end 100x70px.
            <br />
            <br />
            Der findes forskellige komprimeringshjemmesider til både video og billeder, der gør filerne mindre uden kvaliteten tager skade. 
            </p>
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Visuelt design</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>
          <div className="foldercontent">
            <p>
            Typografi og farver har ikke kun indflydelse på visuelt kommunikation og identitet. Det har også effekt på strømforbruget.
            <br />
            <br />
            <h4>Farver:</h4>
            I dag består mange skærme af små OLED lamper for hver pixel, hvor hvid lyser kraftigst og ved helt sort er lamperne slukket.
            <br />
            <br />
            Derfor bruges der også mere strøm, når lamperne lyser på deres kraftigste, og man kan med fordel ændre sit interface til dark mode, hvor det er muligt.
            <br />
            Ellers kan man med fordel også bruge mørke variationer af varme nuancer.
            <br />
            <br />
            Af en uforklarlig årsag bruger blå nuancer også meget strøm.
            <br />
            <br />
            <h4>Typografi:</h4>
            Alle computere har forskellige fonte installeret i forvejen. Ved brug af disse typografier på websitet undgår serveren at downloade en helt ny font fra en tredje part.
            <br />
            <br />
            Oftest er brødtekst størstedelen af tekst, som alligevel skal være læsbar, hvilket mange installerede fonte er.
            </p>
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Performance</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <p>
            <h4>Websitets ydeevne:</h4>
            Ved at teste performance kan du blive klogere på websitet hastighed. En god performance gør brugeroplevelsen bedre.
            <br />
            <br />
            Hastigheden øges ved at implementere forskellige tiltag, der reducere koden (se ovenstående) og undgår unødvendig dataoverførelser. 
            <br />
            Performanceværktøjet Ecograder giver indsigt i websitets performance og giver forslag til forbedringer. 
            Lighthouse kan også bruges, der også hjælper med SEO. 
            <br />
            <br />
            <h4>Tracking:</h4>
            Lav kun nødvendig tracking på dit website og brug analyseprogrammer, der ikke bruger meget strøm Fx Simple Analytics og Plausible Analytics. 
            </p>
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Fun & sad facts</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
              <li>Hvis internettet var et land, ville det udlede lige så meget CO2 som det 4. mest forurenende land.</li>
              <br />
              <li>Internettet udleder mere CO2 end den kommercielle flytrafik.</li>
              <br />
              <li>2 timers streaming svare til 12 km i bilen.</li>
              <br />
              <li>EU har lavet et mål om at alle datacentre skal være CO2-neutrale i 2030.</li>
              <br />
              <li>Hvis en bærebar computer bruges i 3 år ekstra kan det spare 3,7 mio. tons CO2 i EU.</li>
              <br />
              <li>Hvis en iphone bruges i 1 år ekstra, kan det spare 1,2 mio. tons CO2 i EU.</li>
            
            <br />
            <br />
            <h4>Kilder:</h4>
            <a href="https://www.sustainablewebmanifesto.com/" target="_blank" rel="noopener" >https://www.sustainablewebmanifesto.com/ </a>
            <br />
            <a href="https://taenk.dk/forbrugerliv/baeredygtighed/saa-meget-paavirker-dit-internetforbrug-klimaet" target="_blank" rel="noopener">https://taenk.dk/forbrugerliv/baeredygtighed/saa-meget-paavirker-dit-internetforbrug-klimaet</a>
            <br />
            <br />
          </div>

        </div>



      </div>
        </>
    )
}