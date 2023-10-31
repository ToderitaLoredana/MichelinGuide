import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open', })<{
  open?: boolean;
}>(({ theme, open,}) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
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
  // necessary for content to be below app bar
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
      height: '100vh', backgroundRepeat:'no-repeat', backgroundSize: 'cover',backgroundImage: 'url(https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
    }}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}> */}
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 4, position: 'fixed', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
        </div>
      {/* </AppBar> */}
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <h1 style={{paddingLeft: '45px', fontSize: '50px', color: '#D08100'}}>MENU</h1>
        <Divider />
        <List style={{fontSize: '30px', color: '#FFC15D'}}>
          {['Main dishes', 'Drinks', 'Deserts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <p style={{fontSize: '40px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales consequat quam id ornare. In iaculis non sapien blandit lobortis. Praesent dictum nisl sit amet lobortis varius. Suspendisse at urna ipsum. Phasellus aliquet dui purus, vitae imperdiet urna consequat tincidunt. Aliquam viverra magna eget pellentesque volutpat. Sed auctor finibus felis, iaculis fermentum magna finibus ac. Sed rutrum, enim eget iaculis rhoncus, neque risus auctor justo, eu aliquam ipsum mauris et est. Ut egestas gravida ipsum, vitae faucibus augue tristique vitae. Aenean dignissim, neque in laoreet venenatis, nisi urna congue ante, vitae tincidunt metus quam in augue. Morbi justo velit, imperdiet interdum orci et, viverra pretium lectus. Nullam et hendrerit leo. Ut finibus lorem in augue aliquam bibendum. Fusce fermentum diam neque, ac tincidunt nisi feugiat ac.

Nullam eget lacinia magna, eget hendrerit dolor. Curabitur porttitor tincidunt risus, laoreet accumsan nisi facilisis id. Integer convallis maximus laoreet. Donec elementum dolor vitae leo vehicula, ut faucibus urna laoreet. Integer sed turpis hendrerit, placerat odio eget, dapibus ipsum. Pellentesque quis dui sit amet diam egestas ullamcorper porttitor sed tortor. Proin mauris dui, venenatis non velit vitae, sagittis imperdiet elit. Vestibulum in aliquet nisi. Sed vitae erat nec ante varius condimentum eu nec diam. Etiam pellentesque quam non molestie tempus. Mauris nunc urna, fermentum nec condimentum sed, sodales non leo. Pellentesque sed mi velit. Nunc mattis convallis scelerisque. Pellentesque ut dapibus ipsum, nec dictum augue.

Suspendisse potenti. Aenean sodales magna lorem, eget ultrices nisi gravida id. Ut eget semper nulla. Sed lacinia porta ante, at ultricies velit accumsan ornare. In in mattis metus, at rhoncus felis. Nam facilisis vel felis quis interdum. Aliquam erat volutpat. Vestibulum et posuere sem, eu convallis arcu.

Nunc vel elit felis. Donec congue varius ante, ac commodo lectus tincidunt a. Phasellus ligula lorem, placerat sed sagittis porta, maximus et dolor. Vestibulum ut suscipit tortor. Cras tincidunt placerat finibus. Etiam cursus pharetra nibh et cursus. Mauris sit amet tellus nisl. Pellentesque vel malesuada est, et dignissim risus. Morbi efficitur id nibh eu suscipit.

Etiam eget viverra massa, quis pulvinar nisl. Maecenas condimentum risus velit, in finibus lorem volutpat id. Sed ut tortor vitae ipsum fringilla efficitur et ac est. Nunc libero lorem, condimentum vitae ante eget, mollis dignissim dui. Phasellus ultrices, justo et varius tincidunt, felis nibh tempor dolor, in venenatis ligula risus faucibus erat. Etiam neque lacus, molestie quis enim vel, suscipit condimentum nibh. Fusce elit nisl, hendrerit ac tincidunt porttitor, faucibus sed est. Nullam volutpat, justo ut rhoncus interdum, nibh nibh malesuada nibh, non maximus justo purus eget diam. Fusce libero mi, condimentum bibendum eros id, molestie euismod ligula. Sed vitae efficitur mauris. Nunc non vulputate velit.
        </p>
        {/* <DrawerHeader /> */}
        <Box ></Box>
      </Main>
    </Box>
  );
}

export default SideMenu;