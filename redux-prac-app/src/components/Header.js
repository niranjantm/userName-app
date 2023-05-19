import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../components/store/AuthReducer';

const Header = () => {
  const isLogOut = useSelector(state=>{return(state.auth.isLogOut)})
  const isLogin = useSelector(state=>{return(state.auth.isLogout)})
  const dispatch = useDispatch();

  const logOutHandler=()=>{
    dispatch(authActions.isLogOut())
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {console.log(isLogOut)}
            {!isLogOut && <button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
