import {React, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HinduCards } from '../../Products/HinduCards'
import GetQuotePop from '../../Popups/GetQuotePopups/GetQuotePop'
import "./index.css"


export default function ProductHindu() {
  const params = useParams()
  const [buttonPopup, setbuttonPopup] = useState(false)
  const item = HinduCards.find((element) => element.id=== parseInt(params.id) )
  return (<>
            
          <div className='background'>
              
              <div className='imagecont'>
                  <h1> Product Details </h1>
                  <img src= {item.imgUrl} alt ={item.id} className='itemView'/>
                  
              </div> 
              <div>
                  <p> {item.itemName}</p>
                  <p> Minimun Order Quantity : 100</p>
                  <p> Dimension in Centimeter Width :  Height : </p>
                  <p> Delivery Time : 01 - 10 Days</p>
                   
                    <div className='order-container'>
                        <p> {item.itemName}</p>
                        <p> INR {item.rate}</p>
                        <button onClick= {()=> setbuttonPopup(true)}className='button-order' > GET QUOTE </button>
                    </div>
                    <div>
                        <p> Color : </p>
                        <p> Card Material :</p>
                        <p> Product Weight : </p>
                        <p> Card Type : </p>
                        <p> Orientation : </p>               
                    </div>               
              </div>              
          </div>
          <GetQuotePop trigger={buttonPopup} itemCode={item.id}
           setTrigger={setbuttonPopup}> </GetQuotePop>
          </>
  )


}
