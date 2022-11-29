import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import EditCardComp from "./EditCard";
import { editCard } from "../../helpers/FetchHelper";

const cardStyle = {
  width: "18rem",
  display: "inline-block",
  padding: 20,
  margin: 10,
};
function CardComp({ card, handleClick }) {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    (card && (
      <>
        <Card style={cardStyle}>
          <Card.Img variant="top" style={{ width: 60 }} src={card.bizImage} />
          <Card.Body>
            <Card.Title>{card.bizName}</Card.Title>
            <Card.Text>{card.bizDescription}</Card.Text>
            <Card.Text>{card.bizAddress}</Card.Text>
            <Card.Text>{card.bizPhone}</Card.Text>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                style={{ marginBottom: "1rem" }}
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(card._id);
                }}
              >
                Remove this card
              </Button>

              <Button variant="primary" onClick={() => setOpenEdit(!openEdit)}>
                Edit this card
              </Button>
            </div>
          </Card.Body>
        </Card>
        {openEdit && (
          <EditCardComp
            clickHandler={(data) => {
              editCard(card._id, data, localStorage.getItem("token"));
              setOpenEdit(false);
            }}
          ></EditCardComp>
        )}
      </>
    )) || <></>
  );
}
export default CardComp;
