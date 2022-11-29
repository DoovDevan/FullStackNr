import "./CardsComps.css";
import { useState, useEffect } from "react";
import { getMeCards, deleteCard } from "../../helpers/FetchHelper";
import CardComp from "./CardComp";
function CardsComp({ handleClick }) {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  console.log(cards);
  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  const deleteCardHandler = (id) => {
    deleteCard(id, localStorage.getItem("token"), (card) => {
      setCards(cards.filter((x) => x._id != id));
    });
  };

  return (
    <>
      <div className="rounded-input">
        <div className="rounded-div">
          <h1
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "700",
            }}
          >
            Search Card
          </h1>
          <input
            style={{
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "1rem",
              borderWidth: "1px",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) ",
            }}
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Card name"
          />
        </div>
      </div>
      {cards
        .filter((value) => {
          if (searchText === "") {
            console.log(value);
            return value;
          } else if (
            value.bizName.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return value;
          }
        })
        .map((c) => (
          <CardComp handleClick={deleteCardHandler} card={c}></CardComp>
        ))}
    </>
  );
}
export default CardsComp;
