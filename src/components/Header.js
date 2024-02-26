import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import {authActions} from '../store/index'
const Header = () => {
  const islogin=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch()
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {islogin && <li>
            <a href='/'>My Products</a>
          </li>}
         {islogin && <li>
            <a href='/'>My Sales</a>
          </li>}
          {islogin && <li>
            <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
