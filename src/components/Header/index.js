import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';



const Header = props => {
    const { currentUser} = props;

    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                <Link to="/">
                    <h3>lemon<span>Store.</span></h3>
                </Link>
                </div>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                        <li>
                            <Link to="/registeration">
                                Register
                            </Link> 
                        </li>
                        <li> 
                            <Link to="/login">
                                Login
                            </Link>                       
                         </li>
                    </ul>
                    )}
                    
                </div>
            </div>
        </header>
    );
};

Header.defaultProps ={
    currentUser: null
}

export default Header;

