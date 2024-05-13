import {Outlet, Link} from 'react-router-dom';


const Layout = ()=>{

    return(

        <nav>

            <ul>

                <li><Link to='/' >Home</Link></li>
                <li><Link to='/blog'  >Blog</Link></li>
                <li><Link to='/contact'  >Contact</Link></li>
                <li><Link to='/component1/' >HelloMyCar</Link></li>
                <li><Link to='/component2'  >HelloMyCarProps</Link></li>
                <li><Link to='/component3'  >HelloMyCarinGarage</Link></li>
                <li><Link to='/component4'  >HelloMyCarArrayinGarage</Link></li>
                <li><Link to='/component5'  >HelloMyCarInfoObjectinGarage</Link></li>
            </ul>
            <hr />
            <Outlet />

        </nav>

    );

}


export default Layout;