import React from 'react'

function HandBagCard( props) {
    const {title,image,desc } = props
  return (
    
    
    <div className=" rounded-4 col-sm-5 col-lg-4 col-lg-2 mx-auto shadow-lg">
    
    <div className="card text-center my-4 " >
      <div className="card-body">
      <img src={image} class="card-img-top" alt="..."/>
        <h5 className="card-title py-1">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary w-75">Add To Cart</a>
      </div>
    </div>
  </div>
  )
}

export default HandBagCard; 