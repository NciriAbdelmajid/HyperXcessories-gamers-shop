import React from "react";


export default function ProductDetails({elem}){



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
       <button>delete</button>
       <button>update</button>
       </div>
    </div>
    </div>
    )
}