import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import { UserPlus, UserCheck, UserX} from 'react-feather';

const Help = () => {
  return (
    <div className='container'>

      <Row className='abc'>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">
             <p className='text-center'> <UserPlus size={100} />
              <h2>Total Help <br />2.5k </h2></p>
              </CardTitle>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">
           <p className='text-center'> <UserCheck size={100} />
              <h2> Requeted Help <br />1.5k </h2> </p>
            </CardTitle>
          </Card>
        </Col>
        <Col sm="">
          <Card body>
            <CardTitle tag="h5">
          <p className='text-center'>  <UserX size={100} />
              <h2> Rejected Help <br />1.5k </h2></p>
            </CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Help