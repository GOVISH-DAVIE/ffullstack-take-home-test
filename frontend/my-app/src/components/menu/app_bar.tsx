import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';  
import StudentListModal from '../popups/student_list';
import { Container } from '@mui/material';
 

export  const  ElloAppBar:React.FC  =()  =>{
   
  return (
    <Container>
      <AppBar color='secondary' position="static" elevation={0}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'Block', sm: 'block' } }}
          >
            Ello
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <StudentListModal  />
          </Box>
         
        </Toolbar>
      </AppBar> 
    </Container>
  );
}