import React from 'react'
import './index.css'

function GetQuotePop(props) {
    const {itemCode}= props
    const submitForm =(event) => {
        event.preventDefault()
    }
  return (props.trigger)? (
    <div className='pop-bg'>
        <div className='popup-inner'> 
            <h2 className='heading-item'> Code :-{itemCode} </h2>
            <form  onClick={submitForm} >
                <div className='row'>
                    <div className='col-25'>
                        <label id="name"> Name </label>
                    </div>
                    <div className='col-75'>
                        <input  htmlfor="name" type="text"  name="firstname" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label id="email">Email</label>
                    </div>
                    <div className='col-75'>
                        <input  htmlfor="email" type="email"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label id="email">Quantity</label>
                    </div>
                    <div className='col-75'>
                        <input  htmlfor="email" type="number"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label id="email">Comments</label>
                    </div>
                    <div className='col-75'>
                        <textarea htmlfor="email"  />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label id="price">Place</label>
                    </div>
                    <div className='col-75'>
                        <input  htmlfor="email" type="text"/>
                    </div>
                </div>

                <div class="row-submit">
                    <input type="submit" value="Submit"/>
                </div>
                
            </form>
            <button onClick={()=> props.setTrigger(false)} className='close-btn'> Close</button>

        </div>
       </div>) : "";
  
}

export default GetQuotePop