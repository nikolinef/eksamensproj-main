export default function Centertekst({ overskrift, brodtekst }) {
    return (
        <div className="centerTekst">
            <h1>{overskrift}</h1>
            <p>{brodtekst}</p>
        </div>
    );
}

/***
<Centertekst overskrift="Your Heading" brodtekst="Your paragraph text" />
***/