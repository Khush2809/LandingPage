import React from "react";
import whiteLogo from "./../Images/whiteLogo.svg";
import "./../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#5d696e" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <div>
            <img src={whiteLogo} alt="Logo" style={{ marginLeft: "10%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "10%",
            }}
          >
            <p>Copyright © 2018 Evercoin Inc. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
