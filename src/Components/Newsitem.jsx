import React from 'react'
import image from '../assets/newsimage.jpg'

const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"417px"}}>
    <img src={src?src:image} style={{height:"290px" ,width:"397px"}} className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"Become a well-informed and engaged citizen. So, don't miss out on the full story—click Read More"}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  )
}

export default Newsitem
