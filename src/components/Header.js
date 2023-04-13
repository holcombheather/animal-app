import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={{
                color: '#fbfe67',
                padding: '30px',
                fontWeight: 'bolder',
                textDecoration: 'underline overline',
                textDecorationColor: '#029c53',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>Horned Animals</h1>
        </header>
    );
}

export default Header;