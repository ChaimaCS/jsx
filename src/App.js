import './App.css';
import './style.css';
import React from 'react';
import elements from "./zod.jpg";
import zodvid from "./zodvid.mp4";

const myStyle={
  backgroundImage: 
"url('https://cdn.vectorstock.com/i/1000x1000/49/12/seamless-pattern-with-zodiac-constellations-vector-20914912.webp')"
};




function App() {
  return (
<div style={myStyle}>



  {/**navbar**/}
 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#!"><img src="/el.jpg" style={{height:40}} alt="" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#!">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='#!'>Signs</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <div>

  {/**content**/}
        <div>
          <h1 className="title red">The Ancient Zodiac as a Guide to your Life</h1>
          <p className="para">Exploring the Way of the Seed of Life in the Truth of the Sacred Writings <br></br>
          If you’re acquainted with your sun sign, you’ve likely come across its associated element—fire, water, Earth, or air—while seeking out intel about its classic qualities. These elements of astrological signs (also called triplicities in modern astrology) are generally linked to overall temperament. Each astrological element is made up of three zodiac signs: Aries, Leo, and Sagittarius are fire signs; Taurus, Virgo, and Capricorn are Earth signs; Gemini, Libra, and Aquarius are air signs; and Cancer, Scorpio, and Pisces are water signs.
          <br />
          While people all over the world have used elements to classify behavioral tendencies for thousands of years—consider the system of Traditional Chinese Medicine, which includes water, fire, Earth, metal, and wood—several Greek philosophers are credited with pioneering the four-element system used in astrology including Empedocles and Plato, says astrologer Stephanie Gailing, author of The Complete Guide to Astrological Self-Care.
          <br/>
          Around that period of time, a few centuries BCE, the elements also made an appearance in Hippocratic medicine (a system pioneered by the Greek physician Hippocrates), for being reflective of a person’s general constitution. “Fire is dry and hot, air is wet and hot, Earth is dry and cold, and water is wet and cold,” Gailing says. “This then translated to the four temperaments: fire is choleric, air is sanguine, Earth is melancholic, and water is phlegmatic.”
          </p>
          
          <div>
<video width={'100%'} height={700} preload='auto' controls>
          <source src={zodvid} type="video/mp4" />
        </video>
</div>
      </div>




  {/**carousel of pics**/}
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={elements} class="d-block w-100" style={{height:700}} alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='element'>Water</h5>
        <p className='zodiac'>
        Fluidity and freedom are linked closely with this element. Water-y people embrace nonlinear understanding and are typically sensitive and receptive to changes in their environments, says Gailing. They look for depth and emotional fulfillment above all, and often through creative or artistic means.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={elements} class="d-block w-100" style={{height:700}} alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='element'>Fire</h5>
        <p className='zodiac'>This element is dynamic, enthusiastic, and passionate, says Gailing. People who reflect it tend to appreciate movement and spontaneity, along with accessing their imagination for creative problem-solving. And they’re frequently in search of action and adventure and tend to push back against limitations.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={elements} class="d-block w-100" style={{height:700}} alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='element'>Air</h5>
        <p className='zodiac'>Linked to the agile and changeable nature of thoughts and observation, air signs are typically cerebral and intellect-driven. People who fall in this camp are often witty and thoughtful, while also prone to over-thinking. And they’re generally sociable creatures who draw energy from communicating and forming alliances with others, says Gailing.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={elements} class="d-block w-100" style={{height:700}} alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='element'>Earth</h5>
        <p className='zodiac'>Grounded, solid, and practical, Earth energy relates to the world on a deep and sensual level, says Gailing. People with this element in their chart are often resistant to change, appreciating routines and rituals instead. They also tend to seek out material comforts and success.</p>
      </div>
    </div>


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



</div>
</div>
  );
}

export default App;
