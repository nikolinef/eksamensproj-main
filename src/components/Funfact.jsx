export default function Funfact({ overskrift, brodtekst }) {
  return (
    <div className="funfact">

      <h3>{overskrift}</h3>
      <p>{brodtekst}</p>

    </div>
  );
}



/**** 
<Funfact
  overskrift="Overskrift"
  brodtekst="Brødtekst"
/>
****/