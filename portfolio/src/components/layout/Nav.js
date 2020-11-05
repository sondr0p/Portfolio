import React from 'react';

const Nav = props => {
    const { changeSelection } = props;
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
                <div className="collapse navbar-collapse">
                    <button type="button" className="nav-button-custom" onClick={() => changeSelection(0)}>Home</button>
                    <button type="button" className="nav-button-custom" onClick={() => changeSelection(1)}>About</button>
                    <button type="button" className="nav-button-custom" onClick={() => changeSelection(2)}>Projects</button>
                    <button type="button" className="nav-button-custom" onClick={() => changeSelection(3)}>Contact</button>
                </div>
            </nav>
        </div>
    )
}
export default Nav;