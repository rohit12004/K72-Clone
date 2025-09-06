import React, { createContext } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {

    const [navOpen, setnavOpen] = useState(false)
    const [navColor, setNavColor] = useState('white')

    const locate = useLocation().pathname
    useEffect(function () {
        if (locate == '/projects' || locate == '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setnavOpen]}>
               <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
               </NavbarColorContext.Provider>
            </NavbarContext.Provider>

        </div>
    )
}

export default NavContext
