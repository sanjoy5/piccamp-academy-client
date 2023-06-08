
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import ToggleMode from '../components/ToggleMode';

const Main = () => {
    const navigation = useNavigation()

    return (
        <>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading....'}</div>
            <main className='max-w-7xl mx-auto px-4 md:px-2'>
                <ToggleMode />
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;