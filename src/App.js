import React from 'react'
import { Switch, Route } from 'react-router-dom'


import HomePage from './pages/home';
import LoginPage from './pages/login';
import CartPage from './pages/cart';
import HistoryPage from './pages/historyTrans';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/cart" component={CartPage}/>
          <Route path="/History" component={HistoryPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
