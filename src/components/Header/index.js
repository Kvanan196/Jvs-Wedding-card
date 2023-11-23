import {Link } from "react-router-dom"
import "./index.css"

export default function Header () {
    return (
        <>
        <nav className="nav-cont" >  
            <p className="text"> Sign In </p>
            <p className="text">9361619595 </p>
            <p className="text"> Contact Us</p>
        </nav> 
            
            <header className="header-cont">
                <div>
                    <Link to="/" >
                    <img alt="Logo"class="image-Ele"src="https://res.cloudinary.com/dh0labeuh/image/upload/v1694577004/jvs_v5dycn.jpg"/>
                    </Link>
                   
                </div>
                <div>
                    <input className="input-Ele" type="search" placeholder="SEARCH"/>
                </div>
                <h2> Cart</h2>
            </header>
            <div>
            <ul className="head-list">
                <Link to="/ProductHindu" >
                     <li className="list-head">
                         HINDU WEDDING CARDS 
                    </li>
                </Link>
             
                <Link to="/ProductChirstian"> 
                <li className="list-head">
                    CHRISTIAN WEDDING CARDS
                </li>
                </Link>
                
             
                <Link to="/ProductIlamic">  
                    <li className="list-head">
                     ISLAMIC WEDDING CARDS 
                    </li>
                </Link>
          
               
            
            </ul>
            </div>
        
        </>
        
    )




}
