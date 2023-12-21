import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, useScrollTrigger, Slide, Button, Box, Menu, MenuItem } from '@mui/material';
import { useSnapshot } from 'valtio';

import state from '../store';

import logoImg from '../assets/img/logo.png';
import burguerClose from '../assets/img/button/burguer-close.png';
import burguerOpen from '../assets/img/button/burguer-open.png';

function HideOnScroll(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

HideOnScroll.propTypes = {
   children: PropTypes.element.isRequired,
   window: PropTypes.func,
};

export default function HideAppBar(props) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const snap = useSnapshot(state);

   const languageChange = (lan) => {
      state.language = lan;
   };

   const viewLan = () => {
      console.log(snap.language);
   };

   const handleClickScrollInit = () => {
      const init = document.getElementById('init');
      if (init) {
         init.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const handleClickScrollProjects = (project) => {
      const projects = document.getElementById(project);
      if (projects) {
         projects.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const handleClickScrollAbout = () => {
      const about = document.getElementById('about');
      if (about) {
         about.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const handleClickScrollContact = () => {
      const contact = document.getElementById('contact');
      if (contact) {
         contact.scrollIntoView({ behavior: 'smooth' });
      }
   };

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   // STYLES

   const isMobile = windowWidth < 700;

   const styles = {
      link: {
         textDecoration: 'none',
         color: 'inherit',
      },

      logoImg: {
         width: isMobile ? '30vw' : '120px',
         height: 'auto',
         marginLeft: '12vw',
         marginTop: '1vh',
         cursor: 'pointer',
      },

      /* navBarButton: {
         display: isMobile ? 'none' : '',
         color: 'white',
         fontSize: isMobile ? '10px' : '24px',
         fontWeight: '300',
      }, */

      navBarBurger: {
         width: isMobile ? '30vw' : '120px',
         height: 'auto',
         marginRight: '12vw',
         marginTop: '1vh',
      },

      burguer: {
         '&:hover': {
            backgroundColor: 'transparent', // Establece el fondo a transparente al hacer hover
         },
      },

      menuItem: {
         display: 'flex',
         justifyContent: 'center',
         color: 'white',
         fontSize: '3rem',
         fontWeight: '400',
         '&:hover': {
            backgroundColor: 'transparent', // Establece el fondo a transparente al hacer hover
         },
      },
   };

   return (
      <div>
         <HideOnScroll {...props}>
            <AppBar
               className="tool-bar"
               sx={{
                  background: 'rgba(0, 0, 0, 0)',
                  boxShadow: 'none',
               }}
            >
               <div className="w-screen flex">
                  <img src={logoImg} alt="Logo" onClick={handleClickScrollInit} style={styles.logoImg} />

                  <Box sx={{ flexGrow: 1 }} />

                  <div style={styles.navBarBurger}>
                     <div style={styles.navBarBurger.button}>
                        <Button
                           id="basic-button"
                           aria-controls={open ? 'basic-menu' : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                           disableRipple
                           disableFocusRipple
                           sx={{
                              '&:hover': {
                                 backgroundColor: 'transparent',
                              },
                           }}
                        >
                           <img src={open ? burguerOpen : burguerClose} alt="Logo" />
                        </Button>
                     </div>
                     <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                        PaperProps={{
                           style: {
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(43, 64, 64, 0.70)', // Fondo rgba(61, 80, 80, 0.80)
                              width: '50vw', // Ocupa el 50% del ancho de la pantalla
                              height: '70vh',
                              left: '50%',
                              transform: 'translateX(-50%) translateY(5%)',
                           },
                        }}
                     >
                        <MenuItem
                           onClick={() => {
                              handleClickScrollAbout();
                              handleClose();
                           }}
                           sx={styles.menuItem}
                           disableRipple
                        >
                           {(() => {
                              if (snap.language === 'it') {
                                 return 'NOI';
                              } else if (snap.language === 'es') {
                                 return 'NOSOTROS';
                              } else {
                                 // Por defecto, si no es 'it' ni 'es', mostrar 'ABOUT'
                                 return 'ABOUT';
                              }
                           })()}
                        </MenuItem>

                        <MenuItem
                           onClick={() => {
                              handleClickScrollContact();
                              handleClose();
                           }}
                           sx={styles.menuItem}
                           disableRipple
                        >
                           {(() => {
                              if (snap.language === 'it') {
                                 return 'CONTATTO';
                              } else if (snap.language === 'es') {
                                 return 'CONTACTO';
                              } else {
                                 return 'CONTACT';
                              }
                           })()}
                        </MenuItem>

                        <MenuItem
                           onClick={() => {
                              handleClickScrollProjects('casa-gilardi');
                              handleClose();
                           }}
                           sx={styles.menuItem}
                           disableRipple
                        >
                           CASA GILARDI
                        </MenuItem>

                        <MenuItem
                           onClick={() => {
                              handleClickScrollProjects('housing-views');
                              handleClose();
                           }}
                           sx={styles.menuItem}
                           disableRipple
                        >
                           HOUSING VIEWS
                        </MenuItem>

                        <div className="pt-[1.5vh] flex justify-center items-center ">
                           <MenuItem
                              onClick={() => {
                                 languageChange('en');
                              }}
                              sx={{ ...styles.menuItem, fontSize: '1.5rem' }}
                              disableRipple
                           >
                              EN
                           </MenuItem>

                           <MenuItem
                              onClick={() => {
                                 languageChange('es');
                              }}
                              sx={{ ...styles.menuItem, fontSize: '1.5rem' }}
                              disableRipple
                           >
                              ES
                           </MenuItem>

                           <MenuItem
                              onClick={() => {
                                 languageChange('it');
                              }}
                              sx={{ ...styles.menuItem, fontSize: '1.5rem' }}
                              disableRipple
                           >
                              IT
                           </MenuItem>

                           {/* <MenuItem
                              onClick={() => {
                                 viewLan();
                              }}
                              sx={{ ...styles.menuItem, fontSize: '1.5rem' }}
                              disableRipple
                           >
                              see
                           </MenuItem> */}
                        </div>
                     </Menu>
                  </div>
               </div>
            </AppBar>
         </HideOnScroll>
      </div>
   );
}
