// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';


// const Information = () => {
// const {userInfo}=useParams()
// const [user,setUser]=useState([])
// useEffect(()=>{
// fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userInfo}`)
// .then(response => response.json())
// .then(data => setUser(data))
// },[userInfo])
// console.log(user)
// return (
// <>

    // {user.map(data ,i=> setUser(data) )}
    // <h1>Name {user.name}</h1>

    // </>
// );
// };

// export default Information;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detailes from './Detailes';

const Information = () => {
const { userInfo } = useParams();
const [comments, setComments] = useState([]);

useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userInfo}`)
.then(response => response.json())
.then(data => {
setComments(data.slice(0,100));
})
.catch(error => {
console.error('Error fetching data:', error);
});
}, [userInfo]);
console.log(comments)
return (
<>
        <h1 className='text-[25px] font-mono font-semibold text-center my-3'>User Comments</h1>
    <ul className='md:grid md:grid-cols-3'>
        {comments.map((comment, index) => (
        <Detailes comment={comment} key={index}/>
        ))}
    </ul>
</>
);
};

export default Information;
