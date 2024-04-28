import React from 'react';
import { HashLink } from 'react-router-hash-link'

function Leasbtn({ link }) {
  return (
    <div className="leasbtn">
      <HashLink to={link}>Læs mere</HashLink>
    </div>
  );
}

export default Leasbtn;

/****
<Leasbtn link="Der hvor du gerne vil hen med linket" />
***/