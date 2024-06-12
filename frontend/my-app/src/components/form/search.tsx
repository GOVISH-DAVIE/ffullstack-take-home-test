
import InputAdornment from '@mui/material/InputAdornment'; 
import TextField from '@mui/material/TextField'; 
import {  Search } from '@mui/icons-material';
import useFilter from '../../hooks/filter';
import { Book } from '../../interfaces/IBooks';

export  const InputSearch =({books}:{books:Book[]})  =>{

  const {search} = useFilter()

  return (
   
      <TextField
    //   fillWidth
        id="input-with-icon-textfield"
        sx={(theme)=>({
          width:'100%'
        
        })}
        label="Search Books" 
        onChange={(e) => {
          search(e.target.value, books)
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
        
  );
}