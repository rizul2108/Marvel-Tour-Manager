import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Trip(props) {
  return (
    <div className='my-2 mx-2'>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/rear-view-friends-road-trip-driving-convertible-car-67525217.jpg" />
    <Card.Body>
      <Card.Title><h3>Let's Go</h3></Card.Title>
      </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Destination : Paris</ListGroup.Item>
      <ListGroup.Item>From: 21 March</ListGroup.Item>
      <ListGroup.Item>To: 26 March</ListGroup.Item>
      <ListGroup.Item>Members: 6</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">See Details</Card.Link>
      <Card.Link href="#">Delete</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}
