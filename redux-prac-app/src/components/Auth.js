import classes from './Auth.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../components/store/AuthReducer';
import UserProfile from "./UserProfile"


const Auth = () => {
  const isLogin = useSelector(state=>{return(state.auth.isLogin)})
  
  const dispatch = useDispatch()

  const submitHandler = (event)=>{
    event.preventDefault();
    dispatch(authActions.isLogin())
  }
  return (
    <div>
    {isLogin ? <UserProfile></UserProfile>
    :<main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
}
    </div>
    );
};

export default Auth;
