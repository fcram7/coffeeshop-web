import AboutUs from "/about-us.jpg";

const About = () => {
  return ( 
    <section className="about-section section" id="about">
      <h2 className="about-section-title section-title">
        About <span>Us</span>
      </h2>
      <div className="section-content">
        <div className="row flex">
          <div className="about-img">
            <img src={AboutUs} alt="About Us" />
          </div>

          <div className="content">
            <h3>Why choose our coffee?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis suscipit accusamus sed consectetur eos explicabo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptate quisquam eum corporis exercitationem voluptatum?</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default About;