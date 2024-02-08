// import logo from './logo.svg';
import './App.css';
import './all.min.css';

function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo"> <i className="fas fa-user"></i> planner </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">service</a>
          <a href="#pricing">pricing</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="icons">
          <div className="fas fa-moon" id="theme-btn"></div>
          <div className="fas fa-bars" id="menu"></div>
        </div>
      </header>

      {/* <!-- home --> */}

      <section className="home" id="home">
        <div className="content">
          <h3>your dream wedding <br></br> as simple as pie</h3>
          <a href="#" className="btn"> see more info</a>
        </div>
      </section>

      {/* <!-- end --> */}

      {/* <!-- about --> */}

      <section className="about" id="about">
        <h1 className="heading"> <span>about</span> us</h1>
        <div className="row">
          <div className="content">
            <h3>team of passionate people</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis, reiciendis veniam incidunt architecto quam velit dolorum exercitationem cum aliquam ab quas dicta dolores ad earum quasis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci totam, nam voluptates quis delectus. Ea quo repudiandae.</p>
            <a href="#" className="btn">read more</a>
          </div>
          <div className="image">
            <img src={require('./images/about.jpg')}></img>
          </div>
        </div>
      </section>

      {/* <!-- end --> */}

      {/* <!-- service --> */}

      <section className="services" id="services">
        <h1 className="heading">our services</h1>
        <div className="box-container">
          <div className="box">
            <img src={require('./images/service1.png')}></img>
            <h3>full video and camera service</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
          </div>
          <div className="box">
            <img src={require('./images/service2.png')}></img>
            <h3>we arrange flowers and decorations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
          </div>
          <div className="box">
            <img src={require('./images/service3.png')}></img>
            <h3>finding the right place for you</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
          </div>
        </div>
      </section>

      {/* <!-- service end--> */}

      {/* <!-- plan section starts  --> */}

      <section className="plan" id="plan">
        <h1 className="heading">membership plan</h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">basic</h3>
            <h3 className="price">10.99<span>$</span></h3>
            <h3 className="month">per months</h3>
            <ul>
              <li><i className="fas fa-check"></i>photography</li>
              <li><i className="fas fa-check"></i>consultation</li>
              <li><i className="fas fa-check"></i>full assistance</li>
              <li><i className="fas fa-times"></i>vendor referrals</li>
              <li><i className="fas fa-times"></i>find place</li>
            </ul>
            <a href="#"><button className="btn">buy now</button></a>
          </div>
          <div className="box">
            <h3 className="title">standard</h3>
            <h3 className="price">19.99<span>$</span></h3>
            <h3 className="month">per months</h3>
            <ul>
              <li><i className="fas fa-check"></i>photography</li>
              <li><i className="fas fa-check"></i>consultation</li>
              <li><i className="fas fa-check"></i>full assistance</li>
              <li><i className="fas fa-check"></i>vendor referrals</li>
              <li><i className="fas fa-times"></i>find place</li>
            </ul>
            <a href="#"><button className="btn">buy now</button></a>
          </div>
          <div className="box">
            <h3 className="title">premium</h3>
            <h3 className="price">29.99<span>$</span></h3>
            <h3 className="month">per months</h3>
            <ul>
              <li><i className="fas fa-check"></i>photography</li>
              <li><i className="fas fa-check"></i>consultation</li>
              <li><i className="fas fa-check"></i>full assistance</li>
              <li><i className="fas fa-check"></i>vendor referrals</li>
              <li><i className="fas fa-check"></i>find place</li>
            </ul>
            <a href="#"><button className="btn">buy now</button></a>
          </div>
        </div>
      </section>

      {/* <!-- plan section ends --> */}

      {/* <!-- gallery=---> */}

      <section className="gallery" id="gallery">
        <h1 className="heading"> <span>our</span> gallery</h1>
        <div className="swiper gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src={require('./images/gallery-1.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-2.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-3.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-4.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-5.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-6.jpg')}></img></div>
            <div className="swiper-slide"><img src={require('./images/gallery-7.jpg')}></img></div>
          </div>
        </div>
      </section>

      {/* <!-- end --> */}

      {/* <!-- review section starts  --> */}

      <section className="review" id="review">
        <h1 className="heading"> client's review </h1>
        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src={require('./images/pic-1.png')}></img>
              <h3>john deo</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={require('./images/pic-2.png')}></img>
              <h3>john deo</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={require('./images/pic-3.png')}></img>
              <h3>john deo</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={require('./images/pic-4.png')}></img>
              <h3>john deo</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!-- review section ends --> */}

      {/* <!-- team --> */}

      <section className="team" id="team">
        <h1 className="heading">our team</h1>
        <div className="box-container">
          <div className="box">
            <img src={require('./images/pic-1.png')}></img>
            <h3>john deo</h3>
            <p>wedding planner</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="box">
            <img src={require('./images/pic-2.png')}></img>
            <h3>john deo</h3>
            <p>wedding planner</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="box">
            <img src={require('./images/pic-3.png')}></img>
            <h3>john deo</h3>
            <p>wedding planner</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
          <div className="box">
            <img src={require('./images/pic-4.png')}></img>
            <h3>john deo</h3>
            <p>wedding planner</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end --> */}

      {/* <!-- contact section starts  --> */}

      <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> us </h1>
        <form>
          <div className="inputBox">
            <input type="text" placeholder="name"></input>
            <input type="email" placeholder="email"></input>
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number"></input>
            <input type="date"></input>
          </div>
          <div className="inputBox">
            <input type="text" placeholder="your address"></input>
            <select name="plan">
              <option value="basic">basic plan</option>
              <option value="premium">premium plan</option>
              <option value="ultimate">ultimate plan</option>
            </select>
          </div>
          <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
          <a href="#" className="btn">send message</a>
        </form>
      </section>

      {/* <!-- contact section ends --> */}

      {/* <!-- footer --> */}
      <footer>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3> <i className="fas fa-user"></i> wedding planner </h3>
              <p>We are a team of experienced wedding planners dedicated to creating unforgettable weddings for our clients.</p>
            </div>
            <div className="box">
              <h3>Our Services</h3>
              <a href="#"><i className="fas fa-chevron-right"></i> Full Wedding Planning</a>
              <a href="#"><i className="fas fa-chevron-right"></i> Partial Wedding Planning</a>
              <a href="#"><i className="fas fa-chevron-right"></i> Day-of Coordination</a>
              <a href="#"><i className="fas fa-chevron-right"></i> Vendor Referrals</a>
            </div>
            <div className="box">
              <h3>Contact Us</h3>
              <a href="#"><i className="fas fa-phone"></i> 123-595-5555</a>
              <a href="#"><i className="fas fa-phone"></i> 555-555-5555</a>
              <a href="#"><i className="fas fa-envelope"></i> info@weddingplanner.com</a>
              <a href="#"><i className="fas fa-map"></i> 123 Main St, Anytown USA</a>
            </div>
            <div className="box">
              <h3>Follow Us</h3>
              <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
              <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
              <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
              <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
            </div>
          </div>
          <div className="credit"> &copy; copyright @ 2023 by <span>ninjashub</span> </div>
        </section>
      </footer>

      {/* <!-- end --> */}
    </>
  );
}

export default App;
