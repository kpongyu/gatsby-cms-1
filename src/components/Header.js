import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <nav>
        <ul>
          <li><Link to="/" activeClassName='active'>Home</Link></li>
           <li><Link to="/about/" activeClassName='active'>About</Link></li>
            <li><Link to="/contact/" activeClassName='active'>Contact</Link></li>
             <li><Link to="/other/" activeClassName='active'>Other</Link></li>

        </ul>
    </nav>
  )
}

export default Header