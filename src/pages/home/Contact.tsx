const Contact = () => {
  return ( 
    <section className="contact-section section" id="contactus">
      <h2 className="contact-section-title section-title">
        Send Us A <span>Message!</span>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, deleniti.
      </p>

      <div className="contact-section-content flex">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56400419485!2d107.56075549560653!3d-6.903442379411981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1710593732994!5m2!1sen!2sid"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="">
          <div className="input-group flex">
            <i className="ri-user-line"></i>
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-group flex">
            <i className="ri-mail-line"></i>
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group flex">
            <i className="ri-phone-line"></i>
            <input type="number" placeholder="Phone Number" />
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
   );
}
 
export default Contact;