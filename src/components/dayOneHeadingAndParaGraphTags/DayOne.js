import React from "react";
import "./DayOne.css"
const DayOne = ()=>{
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h1 style={{backgroundColor:"orangered",color:"white"}}>header and paragraph Tags</h1>
            <div className="section-1-day-1 mt-2">
                <h1>hiii from h1 tag</h1>
            </div>
            <div className="section-1-day-1 mt-2">
                <h2 id={"thisisId"}>hii from h2 tag</h2>
            </div>
            <div className="section-1-day-1 mt-2">
                <h3>hii from h3 tag</h3>
            </div>
            <div className="section-1-day-1 mt-2">
                <h4>hii from h4 tag</h4>
            </div>
            <div className="section-1-day-1 mt-2">
                <h5>hii from h5 tag</h5>
            </div>
            <div className="section-1-day-1 mt-2">
                <h6>hii from h6 tag</h6>
            </div>
            <div className="section-2-day-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae ducimus enim, expedita explicabo iste minus, necessitatibus nobis odit perspiciatis rem reprehenderit veritatis, voluptatem? Cupiditate, fugiat minus. Alias commodi expedita inventore magnam maiores, nesciunt, officia officiis quasi sed veritatis voluptatum.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque dolores eius ex, excepturi illum magni maxime necessitatibus officiis quaerat quia rem tempore, vitae! Illum quae repellat sunt ut voluptatum.</p>
        </div>
    )
}

export default DayOne;