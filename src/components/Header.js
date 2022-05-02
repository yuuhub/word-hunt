import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import './Header.css';
import categories from "../data/category"

const Header = ({category, setCategory, word, setWord}) => {

    const handleChange = (language) => {
        setCategory(language);
        setWord('');
    }
    
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
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
            </div>
        </div>
    )
}

export default Header