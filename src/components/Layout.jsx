import img from '../assets/images/IMAGE (9).jpg';
import city from '../assets/images/IMAGE (10).jpg';
import food from '../assets/images/IMAGE (11).jpg';
import sea from '../assets/images/IMAGE (12).jpg';
import box from '../assets/images/IMAGE (13).jpg'
import people from '../assets/images/IMAGE (14).jpg'
import tunel from '../assets/images/IMAGE (15).jpg'

import string from '../assets/images/IMAGE (16).jpg';
import img1 from '../assets/images/IMAGE (17).jpg';
import city1 from '../assets/images/IMAGE (18).jpg';
import food1 from '../assets/images/IMAGE (19).jpg';
import sea1 from '../assets/images/IMAGE (20).jpg';
import box1 from '../assets/images/IMAGE (21).jpg'
import people1 from '../assets/images/IMAGE (22).jpg'
import tunel1 from '../assets/images/IMAGE (23).jpg'

import stadion from '../assets/images/IMAGE (24).jpg'
import water from '../assets/images/IMAGE (25).jpg'
import ice from '../assets/images/IMAGE (26).jpg'
import water2 from '../assets/images/IMAGE (27).jpg'
const Layout = () => {
  return (
    <main>
      <section id="intro">
        <div className="container">
          <div className="wrapper2">
            <img src={img} />

            <div className="text">
              <p className='text1'>Illustration</p>
              <h1 className='text2'>Japan House opens in mountainside to foster peak creativity.</h1>
              <p className='text3'>Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
              <h4 className='text4'>By Reta Torphy</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="card">
        <div className="container">
          <div className="wrapper1">
            <div className="card">
              <img className='city' src={city} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>Helmut Lang celebrates <br /> taxi drivers worldwide in <br /> latest campaign</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>

            <div className="card">
              <img className='city' src={food} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>Bowlcut launch a new br summer collection that pays <br /> homage to “UK legends”</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>

            <div className="card">
              <img className='city' src={sea} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>Thousands of previously <br /> unseen photographs by Andy <br /> Warhol will be made public <br /> this Autumn</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>

            <div className="card">
              <img className='city' src={box} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>London-based Yinka Ilori’s <br /> storytelling furniture</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>

            <div className="card">
              <img className='city' src={people} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>Anonymous Israeli art <br /> collective Broken Fingaz <br /> direct music video for U2 <br /> and Beck</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>

            <div className="card">
              <img className='city' src={tunel} alt="" />
              <p className='design'>Photography</p>
              <h1 className='lang'>Suzanne Saroff’s meticulously arranged photographs alter perceptions</h1>
              <h4 className='by'>By Alessandra Ortiz</h4>
            </div>
          </div>
          <hr />
          <div className="text55">
            <p>LATEST POSTS</p>
          </div>
        </div>
      </section>

      <section id="card2">
        <div className="container">
          <div className="wrapper4">
            <div className="card2">
              <img src={string} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Japan House opens in <br /> mountainside to <br /> foster peak creativity.</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={img1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Helmut Lang <br /> celebrates taxi <br /> drivers worldwide in <br /> latest campaign</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={city1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Bowlcut launch a new <br /> summer collection <br /> that pays homage to <br /> “UK legends”</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={food1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Thousands of  <br />previously unseen <br /> photographs by Andy <br /> Warhol will be made <br /> public this Autumn</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={sea1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>London-based Yinka <br /> Ilori’s storytelling <br /> furniture</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={box1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Anonymous Israeli art <br /> collective Broken <br /> Fingaz direct music <br /> video for U2 and Beck</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={people1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Suzanne Saroff’s <br /> meticulously <br /> arranged <br /> photographs <br /> alter perceptions</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>

            <div className="card2">
              <img src={tunel1} />
              <p className="texts">Photography</p>
              <h1 className='text44'>Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches</h1>
              <h4 className='text33'>By Alessandra Ortiz</h4>
            </div>
          </div>
          <div className="btn">
            <button className='btn1'> <span className='span'>view all latest posts</span></button>
          </div>
          <hr />
          <p className='posts'>featured POSTS</p>
        </div>
      </section>

      <section id="cards">
        <div className="container">
          <div className="wrapper3">
            <div className="cards">
              <img className='img101' src={stadion} />
              <p className='text12'>Graphic Design</p>
              <h1 className='text13'>A Brief History of the FIFA World Cup Logo</h1>
              <h4 className='text14'>By Clem Onojeghuo</h4>
            </div>

            <div className="cards">
              <img className='img101' src={water} />
              <p className='text12'>Graphic Design</p>
              <h1 className='text13'>Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back</h1>
              <h4 className='text14'>By Clem Onojeghuo</h4>
            </div>

            <div className="cards">
              <img className='img101' src={ice} />
              <p className='text12'>Graphic Design</p>
              <h1 className='text13'>A Brief History of the FIFA World Cup Logo</h1>
              <h4 className='text14'>By Clem Onojeghuo</h4>
            </div>

            <div className="cards">
              <img className='img101' src={water2} />
              <p className='text12'>Graphic Design</p>
              <h1 className='text13'>Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back</h1>
              <h4 className='text14'>By Clem Onojeghuo</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;