import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PlayerCard({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{nationality}</Card.Text>
        <Card.Text>{age}</Card.Text>
        <Card.Text>{team}</Card.Text>
        <Card.Text>{jerseyNumber}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
