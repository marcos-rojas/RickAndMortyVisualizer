import React from 'react';

const Header = function ({title}) {
    return (
        <header>
            <div className='container'>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <p className='text'>Mira todos los personajes de tu serie favorita</p>
                </div>
            </div>
        </header>
    );
}

export default Header;