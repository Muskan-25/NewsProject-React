import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";


//search as JSX

const email = localStorage.getItem('Email');

const pages = email!=null ? ['Logout']: ['Login','Signup'];

   



export default function MainNavigation() {
    const [anchorElNav, setAnchorElNav] = React.useState("");
    
    const handleOpenNavMenu = () => {
      setAnchorElNav();
      
      
    };  
    const handleCloseNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
      
    };
  
    
    var button = document.getElementsByClassName('btns');
      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click",function(){
          if(button[i].textContent=="Login"){
            window.location.href='/login';
          }
          if(button[i].textContent=="Signup"){
            window.location.href='/signup';
          }
          if(button[i].textContent=="Logout"){
            localStorage.removeItem('Email');
            window.location.href='/NewsProject-React';
            
          }
        })        
      }
  
  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  
  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (

    <AppBar position="" sx={{ backgroundColor:'transparent', mt:0,zIndex:1,boxShadow:0}}>
      <Container maxWidth="sm" disableGutters="true">
        <Toolbar sx={{float:'right'}}>     
            
            <IconButton 
              edge="end" 
              color="#07294d" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                
                display: {
                  xs: 'block',
                  md: 'none',
                },
                color:"#fff"
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              //from which side the drawer slides in
              anchor="left"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
              sx={{}}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  px:3,
                  height: 1,
                  width: '300px',
                  backgroundColor: "#fff",
                  marginTop:'60px'
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                  <IconButton sx={{mb: 2}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{mb: 2}} />

                  <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' },}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className="btns"
                sx={{color: '#53497a', display: 'block', fontFamily: 'Roboto', fontSize:'14px',
                fontWeight: 800, 
                textAlign: "justify",transition: 'all 0.4s linear',"&:hover":{color:'#000'} }}
              >
                {page}
              </Button>
            ))}
          </Box>        
          </Box>
              
            </Drawer>
            <Box sx={{ flexGrow: 1,p:0, display: { xs: 'none', md: 'flex' },justifyContent:"center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleOpenNavMenu}
                className="btns"
                sx={{  color: '#53497a', backgroundColor:'#fff',display: 'block',textTransform:"capitalize", fontFamily: 'Roboto', fontSize:'14px',
                fontWeight: 800, transition: 'all 0.4s linear',
                transition: 'all 0.4s linear',
                padding: '8px 20px', mr:2, "&:hover":{color:'#fff'} }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </Toolbar>
      </Container>
    </AppBar>

  );
}