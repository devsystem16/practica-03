import React from 'react'
const Header = ({ titulo }) => {
    return (
        <div className="row col-12 bg-info">
            <header className="title_header">
                     <h1>  {titulo} </h1>
            </header>
        </div>
    );
}
export default Header;