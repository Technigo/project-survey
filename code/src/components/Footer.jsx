import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <footer>
            <hr/>
            <p>© Copyright {year}, Michael Chang</p>
            <p>Icons made by <a href="https://www.freepik.com">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </footer>
    )
}

export default Footer