import {Outlet, Link} from 'react-router-dom';


const Layout = ()=>{

    return(

        <nav>

            <ul>

                <li><Link to='/' >Home</Link></li>
                <li><Link to='/blog'  >Blog</Link></li>
                <li><Link to='/contact'  >Contact</Link></li>
            </ul>
            <hr />
            <Outlet />

        </nav>

    );

}


export default Layout;