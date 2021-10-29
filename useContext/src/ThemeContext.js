import React,{useState, useContext} from "react";

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
    useContext(ThemeContext)
}
export function useThemeUpdate(){
    useContext(ThemeUpdateContext)
}
export function ThemeProvider ({children}) {
    const [darkTheme,setDarkTheme] = useState(true)
    function toggleTheme(){
    setDarkTheme(prevdarkTheme => !prevdarkTheme)
}

return(
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)
}
