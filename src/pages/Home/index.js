import React from 'react';
import NavBar from '../../components/NavBar';
import NavBarMobile from '../../components/NavBarMobile';

const Home = () => {

    const [clientWindow, setClientWindow] = React.useState(window.innerWidth);

    window.addEventListener('resize', function() {
        setClientWindow(window.innerWidth);
    });

    return (
        <>
            {clientWindow < 1068 ? <NavBarMobile/> : <NavBar/>}
        </>
    );
}

export default Home;