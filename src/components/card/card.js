import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WithHeaderExample() {
  return (
    <Card>
      <Card.Header>Student Mangaement</Card.Header>
      <Card.Body>
        <Card.Title>XYZ COLLEGE OF ENGINEERING</Card.Title>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/photos/students-in-university-picture-id942952674"
        />
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;
