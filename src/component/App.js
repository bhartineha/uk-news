import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import NewsPage from './NewsPage';
import DetailNewsPage from './DetailNewsPage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  return(
    <div className="container-fluid">
        <Header />
        <Switch>
            <Route path="/" exact component={NewsPage} />
            <Route path="/details/:title" component={DetailNewsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
  )
}

export default App;