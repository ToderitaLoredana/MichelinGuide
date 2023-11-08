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
import { Recipe} from './data';

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
    <Card elevation={18} sx={{height:'100%', backgroundColor:'#31525B' }}>
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
            title={title} 
            subheader={recipe.category}
          />
          <CardMedia
            component="img"
            height="350"
            image={recipe.image}
            alt={title}
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
              {ingredients.map((ingredient, index)=>
               <li key={index}>{ingredient}</li>
               )
              } 
               </ul> <br></br>
              </Typography>
              <Typography paragraph sx={{fontSize:'26px', textAlign:'center', fontFamily:'Lora', color:'#D08100'}}>Method of cooking:</Typography>
              <Typography paragraph sx={{fontFamily:'Lora'}}>
                <ol style={{textAlign:'left'}}>
                  { preparationSteps.map((step, index) =>
                  <li key={index}>{step}</li>
                  )
                  }
                  </ol>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
}

