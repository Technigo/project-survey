import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="creator">Created by Sarah Mottram</p>
      <p>
        Photo by {" "}
        <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Markus Spiske {" "}
        </a>
        on {" "}
        <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </footer>
  );
};

export default Footer;
