import { React } from 'react';
import { Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-custom.css';
import '../css/menu-blu.css';

function Header(props) {

    return (
        <div className="widewrapper">
            <div className="top"></div>
            <div className="header">   
                <Navbar collapseOnSelect fixed="top" className="navbar navbar-default my-navbar" role="navigation" expand="lg">
                    <Navbar.Brand>
                        <span>
                            <h4 className="name"> Benvenuto, <em>{props.user.username}</em></h4> 
                            <input type="button" value="Logout" onClick={props.logout} className="btn btn-xs btn-danger no-radius" style={{display: "inline", marginLeft: "5px"}} />
                        </span>
                    </Navbar.Brand>                   
                </Navbar>         
            </div>
        </div>      
    );

};

export default Header;