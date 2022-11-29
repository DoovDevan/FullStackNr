import { insertNewCard } from '../helpers/FetchHelper';
import { Container, Button } from 'react-bootstrap';
import CardsComp from '../components/my-cards/CardsComp';
import CreateCardComp from '../components/my-cards/CreateCardComp';
import { toast } from 'react-toastify';
import { useState } from 'react';
function MyCardsPage() {
  const [isAddMode, setAddMode] = useState(false);

  function insertCard(data) {
    insertNewCard(data, localStorage.getItem('token'), () => {
      toast.success('Card created successfully');
      setAddMode(false);
    });
  }
  return (
    <>
      <Button
        style={{ position: 'relative', left: '45%' }}
        className="btn btn-success"
        onClick={() => {
          setAddMode(true);
        }}
      >
        Create New Card
      </Button>
      <Container>
        {!isAddMode && <CardsComp></CardsComp>}
        {isAddMode && <CreateCardComp createCardHandler={insertCard}></CreateCardComp>}
      </Container>
    </>
  );
}
export default MyCardsPage;
