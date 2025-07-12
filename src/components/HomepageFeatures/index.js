import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@docusaurus/Link';
import cards_data from '@site/static/jsonfolders/feature.json';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';


function Feature({title, description, buttonTitle, buttonLink}) {
  return (
    <div className={"card infocard"}>
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
       <Box wrap="nowrap" sx={{ display: 'block', overflowX: 'auto', py:0, pl: 4, 
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',  // IE and Edge
            'scrollbar-width': 'none',  // Firefox
        }}>

          <Grid container spacing={4} wrap="nowrap">
            {cards_data.map((cards, idx) => {
              return(
                <Grid item key={idx} sx={{ minWidth: '320px' }}>
                  <Feature title ={cards.title} description={cards.description} buttonTitle={cards.buttonTitle} buttonLink={cards.link} />
                </Grid>
                
              )
            
          })}
          </Grid>
        </Box>
        
 
        

        

            
            

        
    </section>
  ); 
}
