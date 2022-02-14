import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Menu />
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
