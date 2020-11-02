import React from 'react';

const Nav = props => {
    const { changeSelection } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <button type="button" className="btn btn-link" onClick={() => changeSelection(0)}>Home</button>
                    <button type="button" className="btn btn-link" onClick={() => changeSelection(1)}>About</button>
                    <button type="button" className="btn btn-link" onClick={() => changeSelection(2)}>Projects</button>
                    <button type="button" className="btn btn-link" onClick={() => changeSelection(3)}>Contact</button>
                </div>
            </nav>
        </div>
    )
}
export default Nav;