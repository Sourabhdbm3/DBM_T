import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import { UserPlus, UserCheck, UserX } from 'react-feather';
import DataTable from 'react-data-table-component';
import Admin from './Images/Admin.png'


const Table = () => {
  const columns = [
    {
      name: 'UserName',
    //   selector: row => row.title,
        minWidth: '100px',
      cell: row => (
        <div className='d-flex align-items-center'>
         <img src={Admin} width='35px' height='30px' />
          <div className='ml-1'>
            <p>{row.title}</p>
            <p>{row.userID}</p>
          </div>
        </div>
      )
    },
    {
      name: 'Job role',
      selector: row => row.jobrole
    },
    {
      name: 'Email',
      selector: row => row.Email,
    },
    {
      name: 'DOB',
      selector: row => row.year,
    },
    {
      name: 'Action',
      selector: row => row.Action,
    },
  ];

  const data = [
    {
      id: '1',
      title: 'Ashish',
      userID: "#1234",
      year: '2000',
      jobrole: 'Dev',
      Email: 'ak47@gmail.com',
    },
    {
      id: 2,
      title: 'Deepak',
      year: '1998',
      jobrole: '#0410',
      Email: 'ak47@gmail.com',
    },
    {
      id: 3,
      title: 'Sunny',
      year: '1999',
      jobrole: '#0410',
      Email: 'ak47@gmail.com',
    },
    {
      id: 4,
      title: 'Alok',
      year: '1999',
      jobrole: '#0410',
      Email: 'ak47@gmail.com',
    },
    {
      id: 5,
      title: 'Pradeep',
      year: '1984',
      jobrole: '#0410',
      Email: 'ak47@gmail.com',
    },
  ]
  return (
    <div className='container'>

      <Row className='Card'>
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
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">
              <p className='text-center'>  <UserX size={100} />
                <h2> Rejected Help <br />1.5k </h2></p>
            </CardTitle>
          </Card>
        </Col>

      </Row>
      <div>
        <row>
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            pagination
          />
        </row>
      </div>


    </div>
  )
}

export default Table