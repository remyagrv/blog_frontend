import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Error from '../error/error';
import ArticleList from '../article/articlelist';
import Article from '../article/article';
import Signup from '../login/Signup';
import Header from '../header/header';

function Navbar(props) {
    return (
        <div>
            <Router>
        <Header/>
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/article-list" element={<ArticleList/>}></Route>
          <Route path="/article/:name" element={<Article/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
        </div>
    );
}

export default Navbar;