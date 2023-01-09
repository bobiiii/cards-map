import React from 'react'
import {handBagsData} from "../data/productData"
import HandBagCard from "./HandBags"
function Products() {
  return (
    <div className='container-fluid  '> 
    <div className="row m-4">
                
    {handBagsData.map((product)=>{
        return(
        <HandBagCard 
            key={product.key}
            title={product.title}
            image={product.img}
            desc={product.desc}
            
        />
        
        )
    })}
    
        </div>
    </div>
  )
}

export default Products