import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from "./components/Header"
import Auth from "./components/Auth"


function App() {
  return (
    <Fragment> 
      <Header></Header>
     <Auth></Auth>
      <Counter />
    </Fragment>
   
  );
}

export default App;
