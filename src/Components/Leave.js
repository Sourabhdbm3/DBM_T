import React from 'react';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

import { User, LogOut, HelpCircle, Search, } from 'react-feather';
import { Card, Container, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap';

// ..........imported file............

const Example = (props) => {
  return (

    <div className='container mt-2'>
      <Row className='p-2'>
        {/* ............Here is our first card............  */}
        <Col sm="4 ">
          <Card body className='body'>
            <p className='text-center'> <User size={100} /> </p>
            <CardTitle className='text-center'><h2>Total Staff</h2></CardTitle>
            <CardText className='text-center'><b>(4M)</b></CardText>
          </Card>
        </Col>
        {/* ............Here is our second card............  */}
        <Col sm="4">
          <Card body className='body'>
            <p className='text-center'><LogOut size={100} /></p>
            <CardTitle className='text-center'><h2>Total Leave Request</h2></CardTitle>
            <CardText className='text-center'><b>(3L)</b></CardText>
          </Card>
        </Col>
        {/* ............Here is our third card............   */}
        <Col sm="4">
          <Card body className='body'>
            <p className='text-center'><HelpCircle size={100} /></p>
            <CardTitle className='text-center'><h2>Approve Leave</h2></CardTitle>
            <CardText className='text-center'><b>(1k)</b></CardText>
          </Card>
        </Col>
      </Row>
      {/* ...........from here is the export button....... */}
      <Container className='class p-2'>
        <Row className='bg-white p-2'>
          <Col sm="4"> <Button color="primary">Export</Button>
          </Col>
          {/* .........Here is the search icon..... */}
          <Col sm="4">
            <InputGroup>
              <InputGroupText>
                <Search className='search' />
              </InputGroupText>
              <Input placeholder="username" />
            </InputGroup>
          </Col>
          {/* .........Here is the DateRangePicker..... */}
          <Col sm="4" className='d-flex justify-content-end'>
            <Row>
              <DateRangePickerComponent placeholder='Date Range Pickar' />
            </Row>
          </Col>

        </Row>
      </Container>
    </div>

  );
};

export default Example;