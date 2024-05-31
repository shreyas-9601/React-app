import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/Counter';
import RichTextEditor from './components/RichTextEditor';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <div className="component counter"><Counter /></div>
          <div className="component richTextEditor"><RichTextEditor/></div>
          <div className="component userForm"><UserForm /></div>
          <div className="component userDetails"><UserDetails /></div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
