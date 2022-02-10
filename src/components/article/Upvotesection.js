import React from 'react';
import './article.css';
 function Upvotesection(props) {
    const {name, setarticleData, upvotes} = props;
    async function fetchUpvotes(){
     const response = await fetch(`/api/article/${name}/upvotes`, {method: 'post'});
    const body = await response.json();
        setarticleData(body);
}
    return (
        <div className='upvote'>
            <button className='like' onClick={fetchUpvotes}>Upvote here</button>
            <p>This article has {upvotes} upvotes</p>
        </div>
    );
}

export default Upvotesection;