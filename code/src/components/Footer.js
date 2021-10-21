import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer-text">6/5/4 Nytorgsgatan 27 116 40 Stockholm </p>
        <a
          href="https://instagram.com/654stockholm"
          // eslint-disable-next-line
          target="_blank"
          rel="noopener norefer"
        >
          <img
            className="instagram-icon"
            src="https://img.icons8.com/doodle/48/000000/instagram-new.png"
            alt="instagram icon"
          />
        </a>
      </footer>
      <div class="blur"></div>
    </>
  )
}

export default Footer
