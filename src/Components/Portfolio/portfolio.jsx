import React from 'react';
import "./portfolio.css";
import BigBasket from "../../assets/BigBasket.png";
import Beardo from "../../assets/BeardoProduct.png";
import Apollo from "../../assets/ApolloNew.png"

const Portfolio = () => {

  const arr = [
    {
      img: BigBasket,
      title: "Big Basket Clone",
      Github: "https://github.com/S-hub1996/Big-basket-clone",
      Live: "https://big-basket-clone-by-masai-school.netlify.app/",
      
    },
     {
      img: Beardo,
      title: "Beardo Clone",
      Github: "https://github.com/leadernaga/Beardo.in",
      Live: "https://beardoclone.netlify.app/"
    },
      {
      img: Apollo,
      title: "Apollo Clone",
      Github: "http://github.com/leadernaga/Apollo247",
      Live: "https://apollo24by7.netlify.app/"
    }
     
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        {arr.map((elm,index) => {
          return <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={elm.img} alt="bigbasket" />
            </div>
            <h3>{elm.title}</h3>
            
            <div className="portfolio__item-cta">
              <a href={elm.Github} className='btn' target="__blank">Github</a>
              <a href={elm.Live} className='btn btn-primary' target="__blank">Live Demo</a>
            
            </div>
          </article>
        })}
      
      </div>
    </section>
  )
}

export default Portfolio


{/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Beardo} alt="bigbasket" />
          </div>
          <h3>Beardo</h3>
          <div className="portfolio__item-cta">
                  <a href="https://github.com/leadernaga/Beardo.in" className='btn' target="__blank">Github</a>
          <a href="https://https://beardoclone.netlify.app/" className='btn btn-primary' target="__blank">Live Demo</a>
    </div>

        </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Apollo} alt="bigbasket" />
          </div>
          <h3>Apollo</h3>
          <div className='portfolio__item-cta'>
              <a href="http://github.com/leadernaga/Apollo247" className='btn' target="__blank">Github</a>
          <a href="https://apollo24by7.netlify.app/" className='btn btn-primary' target="__blank">Live Demo</a>
        </div>

        </article> */}