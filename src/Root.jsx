
import Footer from './components/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>

            <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Root;