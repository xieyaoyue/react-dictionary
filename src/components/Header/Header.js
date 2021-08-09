import React from 'react'
import './Header.css'
import {createTheme, MenuItem, MuiThemeProvider, TextField} from "@material-ui/core";
import countries from "../../data/category";

const Header = ({category, setCategory, word, setWord, LightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode? '#000':'#fff'
            },
            type: LightMode? 'light' : 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className='header'>
            <span className='title'>{word? word : "Word Hunt"}</span>
            <div className='inputs'>
                <MuiThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        className="select"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </MuiThemeProvider>
            </div>

        </div>
    )
}

export default Header;