import {Outlet, Link} from 'react-router-dom';

const Layout = ()=>{

    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Hi!~ Home</Link></li>
                    <li><Link to="/blog">Hi!~Blog</Link></li>
                    <li><Link to="/contact">Hi!~ contact me</Link></li>
                </ul>
            </nav>
            <hr/>
            <Outlet />
        </>
    );
}

export default Layout;