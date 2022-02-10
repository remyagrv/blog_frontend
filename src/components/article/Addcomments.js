import React, { useState } from 'react';

 function Addcomments(props) {
     const {name , setarticleData} = props;
    const [commentValues,setCommentValues] = useState({username:"", comment:""});
function handleChange(event){
    console.log(event.target);
    const {name, value} = event.target;
    setCommentValues({...commentValues, [name]:value})

}
async function fetchComments(){
    const username = commentValues.username;
    const text = commentValues.comment;
    const response = await fetch(`/api/article/${name}/comments`,{method:'post',
    body: JSON.stringify({username, text}),
    headers:{
        'Content-Type' : 'application/json'
    }
})
const body = await response.json();
setarticleData(body);
}
    return (
        <div>
         <div>
             <h3>Add a comment:</h3><br></br>
             <label>Name:<br></br>
             <input type="text" name ="username" value={commentValues.username} onChange={handleChange}></input></label>

<label>
    Comments:
    <br></br>
    <textarea row="4" cols="50" name='comment' value={commentValues.comment} onChange={handleChange}></textarea>
</label>
<br></br>
<button onClick={fetchComments}>Submit</button>
         </div>
        </div>
    );
}

export default Addcomments;