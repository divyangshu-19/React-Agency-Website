import Hero from "./assets/heropg.png"

function Card() {
    

    return(
      
        <div className="cardBody">

            <h1 className="cardText">The one website ofr all your degital needs</h1>
            <div className="cardImg">

            <img src={Hero} alt="hhhh" />
            </div>
        </div>

            
    )

}

export default Card