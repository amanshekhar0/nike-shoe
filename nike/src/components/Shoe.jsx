export default function Shoe(){
    return(
        <div className="shoe container">
            <div className="shoe-content">
                <h1>Feel the Air---beat the air</h1>
               
                <div className="pic">
                <img src="/src/assets/shoe_image.png" className="nike" alt="" />
            </div>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.   
                </p>
                <div className="buttons">
                    <button className="btn1">shop now</button>
                    <button className="btn2">category</button>
                </div>
                <div className="icon">
                   
                    <div className="logos">
                    <p className="available">Also available on </p>
                        <img className="amazon" src="/src/assets/amazon.png" alt="" />
                        <img className="flipkart" src="/src/assets/flipkart.png" alt="" />

                    </div>
                </div>
                
            </div>
            
           

        </div>
    )
}