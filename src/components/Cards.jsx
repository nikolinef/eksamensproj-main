
export default function Cards({ title, image, alt, underTitle, paragraph }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <img src={image} alt={alt} />
        <h5>{underTitle}</h5>
        <p>{paragraph}</p>
      </div>
    );
  }



/**** 
export default function Cards() {

    return(
        <>
        <div className="allcards">

            <div className="card">
                <h3>Title</h3>
                <img src={placeholderImg} alt="Placeholder img" />
                <h5>Under title</h5>
                <p>Brød tekst: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non.</p>
            </div>

            <div className="card">
                <h3>Title</h3>
                <img src={placeholderImg} alt="Placeholder img" />
                <h5>Under title</h5>
                <p>Brød tekst: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non.</p>
            </div>

            <div className="card">
                <h3>Title</h3>
                <img src={placeholderImg} alt="Placeholder img" />
                <h5>Under title</h5>
                <p>Brød tekst: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non.</p>
            </div>

        </div>


        </>
    )
}
****/