import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import Home from './components/components/Home';
import Users from './components/components/Users';
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/Users">Users</Link>
          </p>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
