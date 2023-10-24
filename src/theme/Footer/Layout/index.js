import React from "react";
import clsx from "clsx";
import logo_linkedin from "../../../../static/img/icons/linkedin.png";
import logo_github from "../../../../static/img/icons/github.png";
import logo_email from "../../../../static/img/icons/gmail.png";
import logo_zoltankepes from "../../../../static/img/icons/zoltankepes_logo.png";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      {/* <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div> */}
      <div className="cfoot--header">Contact Me:</div>
      <div className="cfoot--container">
        <a
          href="https://www.linkedin.com/in/zolt%C3%A1n-kepes-b1922b1bb/?originalSubdomain=uk"
          target="_blank"
          rel="noopener noreferrer"
          title="open new tab with Zoltan's Linkedin profile"
        >
          <img src={logo_linkedin}></img>
        </a>
        <a
          href="mailto:zoltan.the.kepes@gmail.com?subject=feedback to 'zoltankepes.com'"
          title="open your standard email app with my email address (zoltan.the.kepes@gmail.com) as receiver"
        >
          <img src={logo_email}></img>
        </a>
        <a
          href="https://github.com/Zolske?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          title="open new tab with Zoltan's GitHub profile"
        >
          <img src={logo_github}></img>
        </a>
        <a
          href="https://www.zoltankepes.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="open new tab to 'zoltankepes.com'"
        >
          <img src={logo_zoltankepes}></img>
        </a>
      </div>
    </footer>
  );
}
