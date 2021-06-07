import React from "react";
import { CardBody, CardImg, CardImgOverlay } from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";


const MenuItem = (props) => {
  
  return (
    <div>

      <Card className="m-3 p-3">
        <CardBody onClick={props.DishSelect}>
          <CardImg
            style={{ opacity: "0.5" }}
            src={props.dish.image}
            alt={props.dish.name}
            width="100%"
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="mt-3 text-center">
              <h3>{props.dish.name}</h3>{" "}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
