import React from 'react';
import Header from '../header/header';
import './home.css';

function Home(){
    return(
        <div style={{backgroundColor:"lightblue",height:"1000px"}}>
             <Header/>
             <div class="cards-list">
  
<div class="card 1" style={{width:"700px", height:"400px"}}>
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <h2>Publish your passions!</h2><br></br>
    <h4>Create a unique and beautiful blog. It’s easy and free.</h4>
  </div>
</div>


</div>
             {/* <div style={{color:"darkcyan",alignItems:"center",height:"500px",width:"600px"}}>
<h1>Publish your passions, your way</h1>
<h3>Create a unique and beautiful blog. It’s easy and free.</h3></div> */}
        </div>
    );
}
export default Home;