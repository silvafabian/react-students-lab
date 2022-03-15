import Scores from "./Scores";
import { Card } from 'react-bootstrap'

const Students = (props) => {

  return (
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title as="h2">
          Name: {props.student.name}
        </Card.Title>

        <Card.Text as="p">
          Bio: {props.student.bio}
        </Card.Text>

        {props.student.scores.map(card =>
          <Scores key={card} card={card} />
        )}
      </Card.Body>
    </Card>
  );
}

export default Students;