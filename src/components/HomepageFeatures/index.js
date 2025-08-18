import clsx from 'clsx';
import Heading from '@theme/Heading';
import cards_data from '@site/static/jsonfolders/feature.json';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Feature from './Feature'; 

/**
 * This function implements information about the club's activities
 * The data for these cards can be found in jsonfolders/feature.json
 * @returns A sequence of info cards wrapped in a horizontal, scrollable container
 * 
 * Box component: https://mui.com/material-ui/react-box/ 
 * Grid Component: https://mui.com/material-ui/react-grid/
 * 
 * Card component: https://infima.dev/docs/components/card 
 * 
 * Date created: January 27th 2025 
 */

export default function HomepageFeatures() {
   return (
      // Scrollable container for the cards, prevents cards from overflowing
       <Box wrap="nowrap" sx={{ display: 'block', overflowX: 'auto', py:2, pl: 4, 
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',  // IE and Edge
            'scrollbar-width': 'none',  // Firefox
        }}>
          
          {/* Maps info to evenly spaced cards using the Feature component (Feature.js)  */}
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


    
  ); 
}
