import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(56,255,20,0.8124633073107588) 0%, rgba(14,207,223,0.818328409950055) 48%, rgba(0,255,1,0.8916421929412573) 100%)",
          color: "black",
        }}
      >
        <div className="container">
          <NavbarBrand> Resturent </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;



         
         