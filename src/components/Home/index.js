import {Link } from "react-router-dom"
import "./index.css"
/* import { useState } from "react" */

export default function Home () {
    /* const [name, setName] = useState("")
    const [gmail,setGmail] = useState("")
    const [number, setNumber] = useState("") */
    
/*     handleName =(e)=>{


    }

    handleEmail =(e)=>{

    }

    handleNumber =(e) =>{

    }
    handleText =(e) =>{

    } */

    const submit = (event) => {
        event.preventDefault()
    }


    return (
    <>
    <div className="image-cont">
    </div>
    <div className="cont-cate">
        <Link to= "/ProductHindu" > 
            <div className="category-cont">
                <h2> HINDU WEDDING CARDS</h2>
                <img alt="Img" className="category-img"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694585779/IWPC56_upxxiq.jpg"/>
            </div>
        </Link>

        <Link to= "/ProductChirstian" > 
            <div className="category-cont">
                <h2> CHRISTIAN WEDDING CARDS</h2>
                <img  alt = "Img" className="category-img"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694591060/classic_simple_elegant_christian_cross_wedding_invitation-r_ax8e6b_307_r5pehx.jpg"/>
            </div>
            </Link>
        <Link  className="nav-link" to="/ProductIlamic"> 
            <div className="category-cont">
                <h2 > ISLAMIC WEDDING CARDS</h2>
                <img alt="Img" className="category-img"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694591753/muslim-wedding-card-design-300x420_fpqprp.jpg"/>
            </div>
        </Link>
     
        <div className="category-cont">
            <h2> SINGLE CARDS</h2>
            <img  alt = "Img" className="category-img" src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694592041/51qR6uof-GL._AC_UF1000_1000_QL80__ylabwc.jpg"/>
        </div>
        <div className="category-cont">
            <h2> SCROLL  CARDS</h2>
            <img  alt = "Img" className="category-img"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694592327/Picture1-3_hxgsun.jpg"/>
        </div>
        <div className="category-cont">
            <h2>INVITATION CARDS </h2>
            <img  alt = "Img" className="category-img"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694592651/2039490555676d39b1c236a1b795dee3_qkbvdo.jpg"/>
        </div>

    </div>
    <div className="aboutUs">
        <div className="paracont">
            <h2> About Us</h2>
            <div className="paracont">
                <p className="About"> JVS WEDDING CARDS was born out of a passion for creating timeless and elegant wedding stationery. Established in 2013 we have since become a leading name in the industry, known for our creativity, innovation, and exceptional customer service. Our journey began with a simple mission: to offer couples a range of wedding cards that reflect their unique style and set the tone for their special day.
                </p> 
            </div>
        </div>

    </div>
    
    <div className = "bg-container" > 
        <div className="contact-container"> 
            <h2 className="head-contact"> Contact us</h2>
            <h3> Our Address </h3>
            <p className = "address-cont"> JVS Wedding Cards <br/>
                Gudalur, The Nilgiris, <br/>
                TamilNadi-643212
            </p>
            <div className = "call-us-cont ">
                <h4> Call Us</h4>
                <h3> Contact by phone/Email</h3>
                <p> 8888888888</p>
                <p> 9999999999</p>
                <p> jvsweddingcards@gmail.com</p>
            </div>  
        

        </div>

        <div className = "form-container">
        <h4> Still need help?</h4>
        <h3> Get in touch with us</h3>
        
            <form  method= "post" action="sendMail.php" className = "form-cont" onClick={submit}>
                <div className="input-cont">
                    <input  className = "input" name="name" type = "text"  placeholder="Enter your name" />
                    <input className = "input"  name="email" type = "email" placeholder="Your Email"/>
                    <input  className = "input" name="mobile" type = "phone"  placeholder="Phone"/>
                    <span >
                        <textarea name="message" className = "textarea" placeholder="Message">  </textarea>
                    </span>
                    <input className="submit" type="submit"  Value="Submit "/> 
                    </div>
            </form>
        </div>
   </div>

    
    
   


    </>
    )


}
