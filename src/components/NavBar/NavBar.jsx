import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon></CatchingPokemon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Feature</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit" id="resources-menu">Resources</Button>
          <Button color="inherit">FyQ</Button>
        </Stack>
        <Menu id="resources-menu">
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
