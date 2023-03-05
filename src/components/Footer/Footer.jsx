import React from "react";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Divider />
      <footer>
        <div
          style={{ textAlign: "center", fontSize: "small", color: "#B0B0B0" }}
        >
          <p>
            @{new Date().getFullYear()} Created by Digvijay Sethi. All Rights
            Reserved.
            <a href="https://digvijayweb.vercel.app" target='_blank' rel="noreferrer">&nbsp; &nbsp; @Contact</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
