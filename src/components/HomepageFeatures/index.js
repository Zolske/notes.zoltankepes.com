import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powered by "Docusaurus"',
    Svg: require('@site/static/img/elements/logo_original.svg').default,
    description: (
      <>
        The website is built with <a href='https://docusaurus.io/' target="_blank">Docusaurus</a>, 
        which is a fantastic tool for building sites from Markdown.
      </>
    ),
  },
  {
    title: 'Download Notes from GitHub',
    Svg: require('@site/static/img/elements/markdown.svg').default,
    description: (
      <>
      Every page has a link &nbsp;
      <svg fill="currentColor" height="20" width="20" viewBox="0 0 40 40" color='#2e8555' ><g><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></g></svg>
      &nbsp; that will take you to my GitHub page. From there you can download any note as Markdown for free.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
