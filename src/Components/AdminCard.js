import React from 'react'
import { Row, Col, Container, Card, CardBody, CardTitle, Button } from 'reactstrap'



const AdminCard = (props) => {
    return (
        <>
            <Container className='mt-5'>
                <Row className="rowContainer">
                    <Col sm="4" >
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src={props.imgsrc}
                            />
                            <CardBody>
                                <CardTitle tag="h3">
                                    {props.title}

                                </CardTitle>
                                <Button>
                                    {props.btn}
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                    {/* <Col sm="4" >
                        <h1>this is 1st</h1>

                    </Col>
                    <Col sm="4" >
                        <h1>this is 1st</h1>

                    </Col> */}
                </Row>

            </Container>









        </>
    )
}

export default AdminCard