import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Carbonara from "../../../src/assets/CarbonaraPasta.jpg";
import FoodBlogger from "../../../src/assets/foodBlogger.jpg";
import { Recipe, recipes } from './data';

interface FoodCardProps {
  recipe: Recipe;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({recipe}: FoodCardProps) {
  const { description, title, image, ingredients, preparationSteps } = recipe;
  const [expanded, setExpanded] = React.useState(false);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
    <Card sx={{ maxWidth: 345, backgroundColor:'#31525B' }}>
    <CardHeader sx={{color:'#D08100', fontFamily:'Lora'}}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={FoodBlogger} style={{ height:'47px',objectFit:'cover'}} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ color: '#D08100'}} />
              </IconButton>
            }
            title={recipe.title} 
            subheader={recipe.category}
          />
          <CardMedia
            component="img"
            height="240"
            image={recipe.image}
            alt="Pasta Carbonara"
          />
          <CardContent>
            <Typography sx={{fontFamily:'Lora', color:'#FFC15D', fontSize:'16px', display:'flex', justifyContent:'center', textAlign:'center'}} variant="body2" color="text.secondary">
            {recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{color:'#D08100'}} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{color:'#FFC15D', fontFamily:'Lora', textAlign: 'center'}}>
              <Typography paragraph sx={{fontSize:'26px', textAlign:'center', fontFamily:'Lora', color:'#D08100'}}>Ingredients:</Typography> 
              <Typography paragraph sx={{fontFamily:'Lora'}}>
               <ul style={{listStyleType:'disc',textAlign:'left'}}>
              {ingredients.map(ingredient=>
               <li>{ingredient}</li>
               )
              } 
               </ul> <br></br>
              </Typography>
              <Typography paragraph sx={{fontSize:'26px', textAlign:'center', fontFamily:'Lora', color:'#D08100'}}>Method of cooking:</Typography>
              <Typography paragraph sx={{fontFamily:'Lora'}}>
                <ol style={{textAlign:'left'}}>
                  { preparationSteps.map(step =>
                  <li>{step}</li>
                  )
                  }
                  </ol>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );

  // return (
    // <Card sx={{ maxWidth: 500, backgroundColor:'#31525B' }}>
    //   <CardHeader sx={{color:'#D08100', fontFamily:'Lora'}}
    //     avatar={
    //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //         <img src={FoodBlogger} style={{ height:'47px',objectFit:'cover'}} />
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         <MoreVertIcon sx={{ color: '#D08100'}} />
    //       </IconButton>
    //     }
    //     title={title}
    //     subheader="November 1, 2023"
    //   />
    //   <CardMedia
    //     component="img"
    //     height="240"
    //     image={image}
    //     alt={title}
    //   />
    //   <Box component="p"></Box>
    //   <CardContent>
    //     <Typography sx={{fontFamily:'Lora', color:'#FFC15D', fontSize:'16px', display:'flex', justifyContent:'center', textAlign:'center'}} variant="body2" color="text.secondary">
    //      {description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <ExpandMore
    //       expand={expanded}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon sx={{color:'#D08100'}} />
    //     </ExpandMore>
    //   </CardActions>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent sx={{color:'#FFC15D', fontFamily:'Lora', textAlign: 'center'}}>
    //       <Typography paragraph sx={{fontSize:'26px', textAlign:'center', fontFamily:'Lora', color:'#D08100'}}>Ingredients:</Typography> 
    //       <Typography paragraph sx={{fontFamily:'Lora'}}>
    //        <ul style={{listStyleType:'disc',textAlign:'left', marginBottom:'20px'}} > 
    //        {ingredients.map((ingredient,index) =>  {
    //         return <li key={index}>{ingredient}</li>
    //        }
    //        )}
    //         {/* <li>100g pancetta</li>
    //         <li>50g pecorino cheese</li>
    //         <li>50g parmesan</li>
    //         <li>3 large eggs</li>
    //         <li>350g spaghetti</li>
    //         <li>2 plump garlic cloves, peeled and left whole</li>
    //         <li>50g unsalted butter</li>
    //         <li>sea salt and freshly ground black pepper</li>
    //       */}
    //        </ul>
    //       </Typography>
    //       <Typography paragraph sx={{fontSize:'26px', textAlign:'center', fontFamily:'Lora', color:'#D08100'}}>Method of cooking:</Typography>
    //       <Typography paragraph sx={{fontFamily:'Lora'}}>
    //         <ol style={{textAlign:'left'}}>
    //           <li>Put a large saucepan of water on to boil.</li><br></br>
    //           <li>Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.</li><br></br>
    //           <li>Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.</li><br></br>
    //           <li>Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).</li><br></br>
    //           <li>Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.</li>
    //           <li>While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.</li><br></br>
    //           <li>Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.</li><br></br>
    //           <li>Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.</li><br></br>
    //           <li>Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.</li><br></br>
    //           <li>Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.</li><br></br>
    //           <li>Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.</li><br></br>
    //           <li>Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.</li><br></br>
    //         </ol>
    //       </Typography>
    //     </CardContent>
    //   </Collapse>
    // </Card>
  // );
}

