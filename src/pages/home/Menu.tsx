import Menu1 from "/menu-1.jpg";

const Menu = () => {
  return ( 
    <section className="menu-section section" id="ourmenu">
      <h2 className="menu-section-title section-title">
        Our <span>Menu</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam placeat laborum facere veniam sint.
      </p>

      <div className="menu-section-content flex">
        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>

        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>

        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>

        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>

        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>
        
        <div className="menu-card">
          <img src={Menu1} className="menu-card-image" alt="Cappuccino" />
          <h3 className="menu-card-title">
            Cappuccino
          </h3>
          <p className="menu-card-price">
            IDR 25000
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default Menu;