import React from "react";
import { useNavigate } from "react-router-dom";


export default function ProductDetails({elem,deletePost}){

   const navigate = useNavigate();

    return(
 <div>
    
        <div className="Product-Card">
       <div className="Product-list-name">
          {elem.name}
       </div>
       <div className="Product-list-image">
         <img src={elem.imageUrl} alt="" />
       </div>
       <div className="Product-list-price">
       price:${elem.price}
       </div>
       <div className="Product-list-quantity">
       quantity:{elem.quantity}
       </div>
       <div >
       <button onClick={()=>{deletePost(elem.id)
       console.log('e.id',elem.id);
      }}>delete</button>
       <button onClick={()=>navigate("/update" ,{state:{id:elem.id}})}>update</button>
       </div>
    </div>
    </div>
    )
}