import pkg from "@material-tailwind/react"
const  { Switch } = pkg
import { useEffect, useState } from "react"



export const DarkModeSwitch = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false)
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            addDarkMode()
          } else {
            removeDarkMode()            
          }
      
          
    }, [])

    const addDarkMode = () => {
        document.documentElement.classList.add('dark')
        setDarkMode(true)

    }

    const removeDarkMode = () => {
        document.documentElement.classList.remove('dark')
        setDarkMode(false)
    }

    const toggleTheme = (event) =>{
        const isChecked = event.target.checked
        if(isChecked){
            addDarkMode()
        }else {
            removeDarkMode()
        }
    }

    

    return <Switch crossOrigin={true} onChange={toggleTheme} checked={isDarkMode} color="red" />
}