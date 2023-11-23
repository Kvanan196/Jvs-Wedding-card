import React from 'react'
import { ChristianCards  } from '../../Products/ChristianCards'
import { useNavigate } from 'react-router-dom'
import "./index.css"

export default function ProductsChrist () {
    const navigate = useNavigate()


  return (

        <>
        <div className="head-filt">
            <div className="filter-cont">
                <h2> Filter By</h2>
                <p> Price</p>
                <br/>   
                <p> Range INR 0 - INR 250</p>
            </div>
            <div>
                <h1>
                   Christian Wedding Cards
                </h1>
                <p>We have the finest collection of Hindu Wedding cards in India. We have Ganesh wedding cards, Balaji Wedding cards in all price ranges.
               </p>
            </div>
        </div>
        <div className="items-cont">
              {ChristianCards.map(ele =>(
              
                <div className="product-item-cont" onClick={()=> navigate(`/ChristianProduct/${ele.id}`)} >
                        <img alt ={ele.itemName}src={ele.imgUrl} className="product-img"/>
                        <p> {ele.id} </p>
                        <p> {ele.itemName} </p>
                        
                   </div>
                ))}
        </div>
        </>
   
  )
}
