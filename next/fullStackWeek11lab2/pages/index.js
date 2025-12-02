import React from "react";

const BoatSalesPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Hero Section */}
      <header
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          color: "#fff",
          backgroundImage:
            "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHVhOXd3N3RyMWJ4NTd3ajRxcWkyc2NqdTMzeDBmbndxcjlrbjcwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26BRM88RLMycDlbW0/200.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Content sits above overlay */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>Find Your Perfect Boat Today</h1>
          <p>New & pre-owned boats, unbeatable prices, trusted service.</p>
          <div>
            <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
              Browse Inventory
            </button>
            <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Featured Boats */}
      <section style={{ padding: "2rem" }}>
        <h2>Featured Boats</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://brunswick.scene7.com/is/image/brunswick/Hero-5?$H-2000-2000$&fit=constrain&fmt=webp-alpha"
              alt="Bayliner VR5 Bowrider"
              style={{ width: "100%" }}
            />
            <h3>Bayliner VR5 Bowrider</h3>
            <p>20 ft length, 200 HP engine, 8 seats</p>
            <p>Price: $35,000</p>
            <button>View Details</button>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://images.boattrader.com/resize/1/56/66/2019-yamaha-boats-ar195-power-9895666-20250804131820349-1.jpg?w=402&ratio=default&t=1754338701000&format=webp&exact"
              alt="Yamaha AR195"
              style={{ width: "100%" }}
            />
            <h3>Yamaha AR195</h3>
            <p>19 ft length, jet drive, 8 seats</p>
            <p>Price: $29,500</p>
            <button>View Details</button>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://www.searay.com/content/dam/searay/spx-series/spx-210-ob/sea-ray-spx-210-outboard-floorplan.png"
              alt="Sea Ray SPX 210"
              style={{ width: "100%" }}
            />
            <h3>Sea Ray SPX 210</h3>
            <p>21 ft length, 250 HP engine, 10 seats</p>
            <p>Price: $42,000</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new & used boats</li>
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
        <div>“They've got boats alright” - John down the road</div>
        <div>“Wow boy do they have some boats” - That fella from the pub</div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Location: Silicon Dock, Galway</p>
        <p>Phone: 085 253 3038</p>
        <p>Email: CustomerService@anchormanagement.com</p>
        <div>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
            Schedule a Visit
          </button>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "blue",
          color: "#fff",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default BoatSalesPage;
