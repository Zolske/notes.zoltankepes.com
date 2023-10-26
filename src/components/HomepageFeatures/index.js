import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import download_edit from "../../../static/img/elements/download_edit_gray.png";

const FeatureList = [
  {
    title: "Build with Docusaurus",
    Svg: require("@site/static/img/elements/logo_original.svg").default,
    description: (
      <>
        The website is built with{" "}
        <a href="https://docusaurus.io/" target="_blank">
          Docusaurus
        </a>
        , which is a fantastic tool for building sites from Markdown.
      </>
    ),
  },
  {
    title: "Download Notes from GitHub",
    Svg: require("@site/static/img/elements/markdown.svg").default,
    description: (
      <>
        Every page has a link &nbsp;
        <img
          style={{ height: "22px" }}
          src={download_edit}
          alt="download-edit image"
        ></img>
        &nbsp; that will take you to my GitHub page. From there you can download
        any note as Markdown for free.
      </>
    ),
  },
  {
    title: "Search with Algolia",
    Svg: require("@site/static/img/elements/Algolia_Robust_Website_Search.svg")
      .default,
    description: (
      <>
        DocSearch crawls the site and aggregates all the content in an Algolia
        index. This content is then queried directly through the search box.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
