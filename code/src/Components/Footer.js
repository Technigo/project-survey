import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
        <footer tabIndex="0">
          <p className="author">&copy;
            <a href="https://github.com/petrame/">Petra Almgren&nbsp;</a>
            for Technigo bootcamp 2020
          </p>
          <p className="cred">Images from 
            <a href="https://www.deviantart.com/unidcolor">&nbsp;UnidColor&nbsp;</a>
            and
            <a href="https://www.iconarchive.com/artist/ergosign.html" >&nbsp;Ergosign</a>.
          </p>
        </footer>
    );
};
