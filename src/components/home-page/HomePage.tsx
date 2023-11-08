import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import cover from "../../../src/assets/heroBackground.png";
import { FoodCategory, Recipe, recipesData } from "../food-card/data";
import FoodCard from "../food-card/FoodCard";
import { Grid, Typography } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface MenuItem {
  value: FoodCategory;
  text: string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#31525B",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentCategory, setCurrentCategory] =
    React.useState<FoodCategory>("ALL");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuItems: MenuItem[] = [
    { text: "Main dishes", value: "MAIN_DISHES" },
    { text: "Drinks", value: "DRINKS" },
    { text: "Deserts", value: "DESERTS" },
    { text: "All", value: "ALL" },
  ];

  const handleMenuItemClick = (category: FoodCategory) => {
    setCurrentCategory(category);
  };

  function filterElementsByCategory(recipeItem: Recipe) {
    if (currentCategory === "ALL") {
      return true;
    } else {
      if (recipeItem.category === currentCategory) {
        return true;
      } else {
        return false;
      }
    }
  }

  const filteredRecipes = recipesData.filter(filterElementsByCategory);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#31525B",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            ml: 5,
            mt: 5,
            position: "fixed",
            zIndex: "5",
            color: "white",
            ...(open && { display: "none" }),
            fontSize: "5",
          }}
        >
          <MenuIcon sx={{ fontSize: "50px" }} />
        </IconButton>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#31525B",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{ color: "#FFC15D" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <h1
          style={{
            paddingLeft: "45px",
            fontSize: "50px",
            color: "#D08100",
            fontFamily: "Lora",
          }}
        >
          MENU
        </h1>
        <Divider />
        <List sx={{ fontSize: "30px", color: "#FFC15D" }}>
          {menuItems.map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
                selected={item.value === currentCategory}
                onClick={() => handleMenuItemClick(item.value)}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontFamily: "Lora",
                    fontSize: "20px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <section
          style={{
            backgroundImage: `url(${cover})`,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Typography
            component="h1"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "240px",
              color: "#0492C2",
              fontFamily: "Playball",
              paddingTop: "150px",
              fontWeight: "bold",
              paddingBottom: "0",
              paddingRight: "50px",
              paddingLeft: "50px",
            }}
          >
            Michelin
          </Typography>
          <Typography
            component="p"
            style={{
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              color: "#FFC15D",
              fontFamily: "Playball",
              marginTop: "0",
            }}
          >
            Be part of my great world of recipes
          </Typography>
        </section>
        <section
          style={{
            padding: "30px",
            backgroundColor: "rgba(49, 82, 91, 0.5)",
          }}
        >
          <Grid component="ul" sx={{ padding: 0 }} container={true} spacing={4}>
            {filteredRecipes.map((recipe) => (
              <Grid
                component="li"
                sx={{ listStyle: "none" }}
                item={true}
                xs={12}
                sm={6}
                md={4}
                key={recipe.title}
              >
                <FoodCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </section>
      </Main>
    </Box>
  );
};

export default SideMenu;
