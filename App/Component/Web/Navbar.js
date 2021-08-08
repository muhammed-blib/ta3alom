import React from 'react'
import Brand from './Brand.js'
import Links from './Links.js'
import colors from '../../config/colors.js'
export default function Navbar() {
    return (
        <div style={{display: 'flex',backgroundColor: colors.navbarColor,margin:0,padding:0,justifyContent:"space-between",flexWrap:"wrap"}}>
             <Brand/>
            <Links/>
        </div>
    )
}
