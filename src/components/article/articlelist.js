import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './samplearticleDB';
import Header from '../header/header';
import './article.css';

function ArticleList(prop){
    return(
        <div style={{backgroundColor:"lightblue",height:"1000px"}}>
             <Header/>
             
            <h1 className='Articles'></h1>
            <div className='list'>
            {articleContent.map((i,key)=>(
                <Link key={key} to={`/article/${i.name}`}>
                <h3 className='card'>{i.title}</h3>
                </Link>
            ))}
           </div>
        </div>
    );
}
export default ArticleList;