import React from 'react';

function Footer() {
    return(
        <footer>
            <div class='footer' style={{
                color: 'navy',
                padding: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
              <h3 class='footer'>Designed by <a href='https://github.com/holcombheather'>Heather Holcomb</a></h3>              
            </div>


        </footer>
    );
}

export default Footer;