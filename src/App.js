import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu';
import { MenuItems } from './MenuItems';

function App() {
  return (
    <Router>
      <Menu/>
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}

export default App;
