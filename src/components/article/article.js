import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from '../error/error';
import './article.css';
import ArticleContent from './samplearticleDB';
import Comments from './comments';
import Upvotesection from "./Upvotesection";
import Addcomments from "./Addcomments";
import Header from "../header/header";

function Article(props){
    const {name} = useParams();
    const [articleData,setarticleData] = useState({upvotes:0,comments:[]});

    const article = ArticleContent.find(i=> i.name===name)
  
  useEffect(()=>{
    fetchAPI();
  },[name]);
  async function fetchAPI(){
   const response = await fetch(`/api/article/${name}`)
  const body = await response.json();
  console.log(body);
  setarticleData(body);
  }
  if (!article) return (<Error/>);
    return(
        <div className="Article" style={{backgroundColor:"lightblue",height:"1000px"}}>
           <Header/>
           <div className="carddes">
<h1>{article.title} </h1>
<Upvotesection name = {name} setarticleData ={setarticleData} upvotes={articleData.upvotes}/>

<p style={{marginTop:"50px"}}>{article.description}</p></div>
<div className="comments">
  <Comments comments ={articleData.comments}/>
  </div>
  
  <div className="comments">
  <Addcomments name = {name} setarticleData ={setarticleData}/>
  </div>


        </div>
    );
}
export default Article;