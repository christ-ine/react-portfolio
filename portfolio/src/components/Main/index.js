import React from 'react'
import { Row, Card, Button } from 'react-bootstrap'
import placeholder from '../../images/placeholder.png'
import './style.css'

const Main = () => {
    return (
        <>
            <div className="main_cards">
                <Row>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                </Row>


            </div>
        </>

    )
}

export default Main
