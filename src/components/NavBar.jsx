import React from 'react';


const NavBar = ({
    name, email
}) => {
    return ( <nav>
        {name}
        {email}
    </nav> );
}
 
export default NavBar;