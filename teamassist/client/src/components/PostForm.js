// import React, { useState, useEffect} from "react";
// import axios from "axios";

// function PostForm () {

//     const [firstname, setFirstname] = useState([]);
//     const [lastname, setLastname] = useState([]);
    

//     function changeHandler (e) {
//         this.setState({[firstname]: firstname})
//     }

//     function submitHandler (e) {
//         e.preventDefault()
//         console.log(this.state);
//         axios.post('/api/new', this.state)
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     return (
//             <div>
//                 <form onSubmit={submitHandler}>
//                 <div>
//                         <input type="text" name="firstname" value={firstname} onChange={changeHandler} />
//                     </div>
//                     <div>
//                         <input type="text" name="lastname" value={lastname} onChange={changeHandler} />
//                     </div>
//                     {/* <div>
//                         <input type="text" name="body" value={body} onChange={this.changeHandler} />
//                     </div> */}
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//     )
    
// }

// export default PostForm