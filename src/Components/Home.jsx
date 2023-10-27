import { useEffect, useState } from "react";
import ShowData from "./ShowData";


const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res=>res.json())
        .then(data=> setData(data))
    },[])
    return (
        <>
            <div className=" md:grid md:grid-cols-3"> 
             {data.map(data=> <ShowData data={data}/>)}
            </div>
        </>
    );
};

export default Home;