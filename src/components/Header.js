import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import './Header.css';
import categories from "../data/category"
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Header = ({category, setCategory, word, setWord, DarkMode}) => {

    const handleChange = (language) => {
        setCategory(language);
        setWord('');
    }

    const darkTheme = createTheme({
        palette: {
          mode: DarkMode ? "dark" : "light",
        },
    });
    
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className='search'
                        id="standard-basic" 
                        label="Search a word" 
                        variant="standard" 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        variant="standard"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header