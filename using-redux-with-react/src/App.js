import {Fragment} from 'react'
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'

function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
      <Auth />
    </Fragment>
  );
}

export default App;
