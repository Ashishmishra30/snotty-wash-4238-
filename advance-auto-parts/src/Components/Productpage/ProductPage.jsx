import React, { useEffect, useState } from 'react'

export const ProductPage = () => {
    const [data,setData] = useState([]);

const getData = () =>{
    fetch(` http://localhost:3004/products`)
    .then((res)=>res.json())
    .then((data) =>setData(data))
}

useEffect(()=>{
    getData();
},[])

  return (
    <div>
        <h1>Products Page</h1>
        <div  style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"5px", backgroundColor:"white"}}>
        {  
            data.map((el)=>(
                <div>
                    <img src={el.image} alt="" />
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <p>{el.ratings}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
