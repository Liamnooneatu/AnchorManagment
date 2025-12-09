import React from "react";

const BoatSalesPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>        
        

       <section style={{ padding: "2rem" }}>
        <h2>Featured Paints</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/88/65.520.10_New2019.jpg?t=1734405406" alt="Bayliner VR5 Bowrider" style={{ width: "100%" }} />
            <h3>Epoxy Resin fiberclass repair kit</h3>
            <p>Brand: OSCULATI</p>
            <p>Price: $61.38</p>
            <button>View Details</button>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/200/apikmfoqn__52294.jpg?t=1738896081" alt="Yamaha AR195" style={{ width: "100%" }} />
            <h3>West System Six10 Thickend Epoxy Adhesive 190ml</h3>
            <p>Brand: Six10 </p>
            <p>Price: $49.30</p>
            <button>View Details</button>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/155/LNKZ8822.jpg?t=1734404724" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Glass Fibre</h3>
            <p>Brand: Talamex</p>
            <p>Price: $12.40</p>
            <button>View Details</button>
          </div>        
        </div>
      </section>

      <section style={{ padding: "2rem" }}>
          <h2>Paints</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}></div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/120/GS90004.jpg?t=1735008971" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Engine Spray Paints</h3>
            <p>Brand: Talamex</p>
            <p>Price: $16.59</p>
            <button>View Details</button>            
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/162/51f7jY2pbDL._AC_SL1000_.jpg?t=1734404935" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Brilliant Gloss Top coat</h3>
            <p>Brand: Hempel</p>
            <p>Price: $20.05</p>
            <button>View Details</button>            
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/195/topcoat-plus-rescue-orange-ylk265.jpg?t=1734405176" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>INternational Toplac Plus</h3>
            <p>Brand: International</p>
            <p>Price: $41.11</p>
            <button>View Details</button>            
          </div>
        </section>

        <section style={{ padding: "2rem" }}>
          <h2>Varnish</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}></div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/59/duraSatin.jpg?t=1732329137" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Hempel Classic Varinish</h3>
            <p>Brand: Hempel</p>
            <p>Price: $27.59</p>
            <button>View Details</button>
          </div>
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/63.0365_w550_h550.jpg?t=1734576756" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Owartal Glazing Finish</h3>
            <p>Brand: Hempel</p>
            <p>Price: $19.50</p>
            <button>View Details</button>
          </div>
        </section>


      
      {/* Why Buy From Us */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of Paints and Colours</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* Services */}
      <section style={{ padding: "2rem" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New & pre-owned boats</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f1f1f1", padding: "2rem" }}>
        <h2>Customer Testimonials</h2>
        <blockquote>
           “I ordered the Hempel varinish and it was delivered within 3 days great service” - Joe ⭐⭐⭐⭐⭐
        </blockquote>
        <blockquote>
           “I was able to check if the paint was in stock and was able to collect it in-store that day” - Joe ⭐⭐⭐⭐⭐
        </blockquote>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Location: Silicon Dock, Galway</p>
        <p>📞 Phone: 085 253 4566</p>
        <p>📧 Email: CustomerService@anchormanagement.com</p>
        <div>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>Schedule a Visit</button>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>Request a Quote</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0077b6", color: "#fff", textAlign: "center", padding: "1rem" }}>
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default BoatSalesPage;