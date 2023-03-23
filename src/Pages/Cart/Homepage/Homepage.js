        import React, { useContext } from 'react';
        import "./Homepage.css";
        import { useEffect, useState } from 'react';
        import axios from "axios";
        import { Cartcontext } from '../../../Context/Context';


        function Homepage() {
        const [data, setdata] = useState([]);
        const fetchData = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products");
        setdata(response.data);
        console.log(data);
    }
    useEffect(() => {
        fetchData();
    },);

const Globalstate=useContext(Cartcontext);
const dispatch = Globalstate.dispatch;
console.log(Globalstate)
  return (
    <div className='homepage'>
        {data.map((item, index) => {
            item.quantity = 1;
            return (
            <div className='card' key={index}>
                <img src={item.image} alt=""/>
                <p>{item.title}</p>
                <h3>$.{item.price}</h3>
                <button onClick={() =>dispatch({type: 'ADD', payload: item})}>Add to Cart</button>
            </div>
            );
        })};
      
    </div>
  )
}

export default Homepage;
