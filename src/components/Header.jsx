import React from 'react'
import AppBar from '@mui/material/AppBar'; // navbar

import Box from '@mui/material/Box'; //navbar
import Toolbar from '@mui/material/Toolbar';  // to contain icons
import Typography from '@mui/material/Typography'; // if we need to provide any typed content we use typography and provide the tag name as varient:so type like what we need like h1,h2,...,h6,p,etc
import Button from '@mui/material/Button';// button of mui
import { CiMenuBurger } from "react-icons/ci";

import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CiMenuBurger/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:4 }}>
            {/* sx-style */}
            Resume Builder
          </Typography>

          <Tooltip title="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews." placement="bottom">
            <Button color="inherit">About US</Button>
          </Tooltip>

          <Link style={{color:"white"}}  to={"/history"}>
          <Button color='inherit' variant="outlined">History</Button>
          
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>


    </>
  )
}

export default Header