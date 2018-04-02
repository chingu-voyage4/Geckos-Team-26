import React from "react";

import "./footer.css";

const Footer = () => (
  <footer className="ui inverted vertical center aligned segment footer custom-footer">
    <p>Copyright &copy; 2018 Geckos-Team-26</p>
    <div>
      <a
        className="item ui label black"
        href="https://github.com/chingu-voyage4/Geckos-Team-26"
      >
        <i className="github icon yellow" /> Github
      </a>
      <a className="item ui label black" href="https://chingu.io/">
        <i className="home icon yellow" /> Chingu
      </a>
    </div>
  </footer>
);

export default Footer;
