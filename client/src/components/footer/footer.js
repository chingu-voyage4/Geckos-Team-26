import React from "react";

import "./footer.css";

const Footer = () => (
  <footer className="ui inverted vertical center aligned segment footer custom-footer">
    <p>Copyright &copy; 2018 Geckos-Team-26</p>
    <div className="ui inverted link list">
      <a
        className="item"
        href="https://github.com/chingu-voyage4/Geckos-Team-26"
      >
        GitHub
      </a>
      <a className="item" href="https://chingu.io/">
        Chingu
      </a>
    </div>
  </footer>
);

export default Footer;
