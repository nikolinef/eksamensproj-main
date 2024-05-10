import Leasbtn from "../components/Leasbtn";

export default function Cards({ title, image, alt, underTitle, paragraph }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <img src={image} alt={alt} />
        <h5>{underTitle}</h5>
        <Leasbtn link="/products">Læs mere</Leasbtn>
        <p>{paragraph}</p>
      </div>
    );
  } 
