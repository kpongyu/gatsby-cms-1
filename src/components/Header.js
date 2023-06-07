import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
           <li><Link to="/about/">About</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
             <li><Link to="/other/">Other</Link></li>

        </ul>
    </nav>
  )
}

export default Header