import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@docusaurus/Link';
import cards_data from '@site/static/jsonfolders/feature.json';
import { Button, Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/system/Stack';
/*
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
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
        <Heading as="h3">{title}</Heading>
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
*/
/* 
const FeatureList = [
  {
    title: 'A local branch of the national ACM',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 
        "We focus on bringing interesting speakers to campus, holding fun competitions and educational events.",
    buttonTitle: "About ACM",
    link: 'https://www.acm.org/about-acm/about-the-acm-organization',
    
        
  },
  {
    title: 'Open to all UMass Lowell students, faculty, and staff',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description:
        "Want to learn more about new topics in Computer Science? Join us at our weekly meetings to learn, build, and connect.",
    buttonTitle: "CampusGroups",
    link: 'https://www.acm.org/about-acm/about-the-acm-organization'
  },
  {
    title: 'Membership',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description:  
    "While optional, membership to the national ACM includes access to ACM's Digital Library, ACM conferences, and ACM's Special Interest Groups",
    buttonTitle: "Membership Options",
    link: 'https://www.acm.org/membership',
  }
]; */

function Feature({title, description, buttonTitle, buttonLink}) {
  return (
    <div className={"card papercard"}>
      <div className="card__header text--center">
        <h3>{title}</h3>
      </div>
      <div className={"card__body text--center"}>
        <p>{description}</p>
      </div>
      <div className={"card__footer"}>
        <Link className="button button--secondary button--block" to={buttonLink}>{buttonTitle}</Link>
      </div>
    </div>
  );
}


 
export default function HomepageFeatures() {
   
   return (
    <section className={styles.features}>
      <Grid2 container spacing={4} wrap="nowrap" sx={{minWidth: '500px'}}>
        {cards_data.map((cards) => (
            <Feature title ={cards.title} description={cards.description} buttonTitle={cards.buttonTitle} buttonLink={cards.link} />
          ))}
      </Grid2>
        

            
            

        
    </section>
  ); 
}
