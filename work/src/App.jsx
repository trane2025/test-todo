import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Books from './pages/Books';
import FinalForm from './pages/FinalForm/FinalForm';
import ReduxForm from './pages/ReduxForm';
import RecLIst from "./pages/RecLIst";


const b = {
  foo: 1,
  fee: 3
}

function App() {



  return (
    <Layout>
      <Switch>
        <Route path='/' exact ><Books a={b} /></Route>
        <Route path='/redux-form'><ReduxForm /></Route>
        <Route path='/final-form'><FinalForm title='Final form' /></Route>
        <Route path='/rec-list'><RecLIst/></Route>
      </Switch>
    </Layout>
  )
}

export default App;






