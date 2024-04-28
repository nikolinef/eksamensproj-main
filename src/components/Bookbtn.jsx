import React from 'react';
import { HashLink } from 'react-router-hash-link'

function Bookbtn({ link }) {
  return (
    <div className="Bookbtn">
      <HashLink to={link}>Book et møde</HashLink>
    </div>
  );
}

export default Bookbtn;

/****
<Bookbtn link="Der hvor du gerne vil hen med linket" />
***/