import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Trip(props) {
  return (
    <div className='my-2 mx-2'>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Destination :</ListGroup.Item>
      <ListGroup.Item>From:</ListGroup.Item>
      <ListGroup.Item>To: </ListGroup.Item>
      <ListGroup.Item>Members:</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">See Details</Card.Link>
      <Card.Link href="#">Delete</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}
