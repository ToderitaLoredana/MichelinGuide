import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import cover from "../../../src/assets/heroBackground.png";
import { recipes } from '../food-card/data';
import FoodCard from '../food-card/FoodCard';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open', })<{
  open?: boolean;
}>(({ theme, open,}) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin',  {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`, 
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#31525B',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#31525B',
      height: '100vh', backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundImage:`url(${cover})`
    }}>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 5,mt:5, position: 'fixed', color:'white', ...(open && { display: 'none' }), fontSize:'5' }}
          >
            <MenuIcon sx={{fontSize:'50px'}} />
          </IconButton>
        </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#31525B',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{color:'#FFC15D'}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <h1 style={{paddingLeft: '45px', fontSize: '50px', color: '#D08100', fontFamily:'Lora'}}>MENU</h1>
        <Divider />
        <List sx={{fontSize: '30px', color: '#FFC15D'}}>
          {['Main dishes', 'Drinks', 'Deserts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} 
                primaryTypographyProps={{
                  fontFamily:'Lora',
                  fontSize:'20px'
                }}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}> 
        <h1 style={{display:'flex', justifyContent:'center', fontSize:'220px', color:'#0492C2', fontFamily:'Playball', paddingBottom: '0'}}>Michelin</h1>
        <p style={{fontSize: '35px', marginTop:'-150px', display:'flex', justifyContent:'center', color:'#FFC15D', fontFamily:'Playball'}}>
        Be part of my great world of recipes
        </p>
        
        <List>
              {recipes.map(recipe => (
                   <FoodCard key={recipe.title} recipe={recipe} />
                )
              )
              }
        </List>
      </Main>
    </Box>
  );
}

export default SideMenu;