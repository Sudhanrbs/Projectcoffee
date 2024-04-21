import React from 'react';
import NavDemo from './NavDemo';
import Carousel from 'react-bootstrap/Carousel';
import'./Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';


export const Home = () => {
  return (
    <>
   
    <div ><NavDemo /></div>



    <div className='carousel'>
   

    <Carousel >
      <Carousel.Item className='carouselcolor' >
      <img 
          className="crbg"
          src="green.png"
          alt="First slide"
        />
       <Carousel.Caption className='caption' >

       <Card className="card" >
       <Card.Img className='food' variant="left" src="BhunaChickenPuffs.jpeg" />
          <Card.Body>
          
          <Card.Title>Bhuna Chicken Puffs</Card.Title>
           <Card.Text>
           PER SERVE(85g)
           </Card.Text>
           <Button className='button'>Add item</Button>
            </Card.Body>
         </Card>

         <Card className="card" >
         <Card.Img className='food' variant="left" src="TandooriChickenPaniniSandwich.jpeg" />
         <Card.Body>
        
            <Card.Title>Tandoori Chicken  Sandwich</Card.Title>
            <Card.Text>
               290g/901kal
             </Card.Text>
         <Button className='button'>Add item</Button>
            </Card.Body>
        </Card>

         <Card className="card" > 
         <Card.Img className='food' variant="left" src="ChocolateBrownieCupcake.jpeg" />
              <Card.Body>
             
                <Card.Title>Chocolate Brownie Cupcake</Card.Title>
                <Card.Text>
                PER SERVE (80 g) - 416kcal
                 </Card.Text>
                 <Button className='button'>Add item</Button>
                </Card.Body>
             </Card>
             
 
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img
          className="crbg"
          src="green.png"
          alt="First slide"
        />
        <Carousel.Caption className='caption'>

        <Card className="card" >
        <Card.Img className='food' variant="left" src="ThreeDipChips.png" />
          <Card.Body>
          
          <Card.Title>Three Dip Chips</Card.Title>
           <Card.Text>
           290g/901kal
           </Card.Text>
           <Button className='button'>Add item</Button>
            </Card.Body>
         </Card>

         <Card className="card" >
         <Card.Img className='food' variant="left" src="ChilliPaneerInHerbedBun.webp" />
         <Card.Body>
         
            <Card.Title>Chilli Paneer InHerbed Bun</Card.Title>
            <Card.Text>
            290g/901kal
             </Card.Text>
         <Button className='button'>Add item</Button>
            </Card.Body>
        </Card>

         <Card className="card" > 
         <Card.Img className='food' variant="left" src="Strawberry Milkshake.webp" />
              <Card.Body>
              
                <Card.Title>Strawberry Milkshake</Card.Title>
                <Card.Text>
                 Tall(Strawberry Milkshake) 
                 </Card.Text>
                 <Button className='button'>Add item</Button>
                </Card.Body>
             </Card>
             

          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      
        <img
          className="crbg"
          src="green.png"
          alt="First slide"
        />
        <Carousel.Caption className='caption'>

        <Card className="card" >
        <Card.Img className='food' variant="left" src="VanillaMilkshake.webp" />
          <Card.Body>
          
          <Card.Title>Vanilla Milkshake</Card.Title>
           <Card.Text>
           Tall(vanilla Milkshake) 
           </Card.Text>
           <Button className='button'>Add item</Button>
            </Card.Body>
         </Card>

         <Card className="card" >
         <Card.Img className='food' variant="left" src="ChocolateMilkshakes.webp" />

         <Card.Body>
            <Card.Title>Chocolate MilkShake</Card.Title>
            <Card.Text>
            Tall(Chocolate Milkshake) 
             </Card.Text>
         <Button className='button'>Add item</Button>
            </Card.Body>
        </Card>



       
         <Card className="card" > 
         <Card.Img className='food' variant="left" src="blackcurrant.webp" />
         
              <Card.Body>
             
                <Card.Title>Black current</Card.Title>
                
                <Card.Text>
                Tall(Black current Milkshake) 
                 </Card.Text>
                 <Button className='button'>Add item</Button>
                </Card.Body>
             </Card>
             
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





    </div>

<div>

    <Carousel className='carouselcolor'>
      <Carousel.Item >
      <img 
          className="crbg2"
          src="CoffeeandDesserts.jpeg"
          alt="First slide"
        />
       <Carousel.Caption className='caption2' >
        <h2> Coffee and Desserts </h2>
        <p> Experience the harmonious blend of smooth coffee, nutty almond, and creamy mascarpone</p>
             
 
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img
          className="crbg2"
          src="Beverage.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className='caption2'>
        <h2>Beverage Subscription </h2>
        <p> bucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply</p>

             

          
        </Carousel.Caption>
      </Carousel.Item>

      


</Carousel>
</div>

      <div className='hand'>
      <h1> Handcrafted Curations</h1>
      </div>
        

     <div className='round'>

       

        <div>
            <span>
                <img className='roundimg' src="bestseller.jpeg" alt="" />
                
            </span>
            <p className='name'> Best Seller</p>
        </div>


        <div>
            <span>
                <img className='roundimg' src="drink.jpeg" alt="" />
                
            </span>
            <p className='name'> Drinks</p>
        </div>


        <div>
            <span>
                <img className='roundimg' src="merchandish.jpeg" alt="" />
                
            </span>
            <p className='name'> Merchandise</p>
        </div>


        <div>
            <span>
                <img className='roundimg' src="coffee.jpeg" alt="" />
                
            </span>
            <p className='name'> Coffee at Home</p>
        </div>


        <div>
            <span>
                <img className='roundimg' src="sandwich.jpeg" alt="" />
                
            </span>
            <p className='name'> Food</p>
        </div>


        <div>
            <span>
                <img className='roundimg' src="readytoeat.jpeg" alt="" />
                
            </span>
            <p className='name'> Ready to eat</p>
        </div>
     
    

        
     </div>

     <div className='latest'>
      <h1> Latest Offerings</h1>
      </div>

     <div className='norcard'>
      
     <Card className="card" > 
         <Card.Img className='food' variant="left" src="blackcurrant.webp" />
         
              <Card.Body>
             
                <Card.Title>Black current</Card.Title>
                
                <Card.Text>
                Tall(Black current Milkshake) 
                 </Card.Text>
                 <Button className='button'>Add item</Button>
                </Card.Body>
             </Card>

         <Card className="card" >
         <Card.Img className='food' variant="left" src="TandooriChickenPaniniSandwich.jpeg" />
         <Card.Body>
        
            <Card.Title>Tandoori Chicken  Sandwich</Card.Title>
            <Card.Text>
               290g/901kal
             </Card.Text>
         <Button className='button'>Add item</Button>
            </Card.Body>
        </Card>

         <Card className="card" > 
         <Card.Img className='food' variant="left" src="ChocolateBrownieCupcake.jpeg" />
              <Card.Body>
             
                <Card.Title>Chocolate Brownie Cupcake</Card.Title>
                <Card.Text>
                PER SERVE (80 g) - 416kcal
                 </Card.Text>
                 <Button className='button'>Add item</Button>
                </Card.Body>
             </Card>

             </div>
             
             
             
             
        <div  className="crbg3">
   
      
      <img 
         
          src="cappuccino.jpeg"
          alt="First slide"
        />
       <div className='caption3' >
        <h2> Coffee and Desserts </h2>
        <p> Experience the harmonious blend of smooth coffee, nutty almond, and creamy mascarpone</p>
         </div>    


</div>

 
    <div><Footer/></div>
   
    </>
  );
}
export default Home;
