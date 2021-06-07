import React from "react";
import { CardBody, CardImg, CardText } from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import LoadComments from "./LoadComments";

const DishDetails = (props) => {
  return (
    <div>
      <Card className="m-3">
        <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
        <CardBody>
          <CardTitle className="mt-3">
            <h3>{props.dish.name}</h3>{" "}
          </CardTitle>
          <CardText>
            <p> {props.dish.description} </p>
            <p>Price: {props.dish.price} </p>
          </CardText>

          <hr />
          <LoadComments comments={props.dish.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetails;
