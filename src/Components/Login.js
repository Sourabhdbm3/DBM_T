import React from 'react'
import { Label, Input, Button, FormGroup,Form } from 'reactstrap'

const login = () => {
  return (
    <>
      <div className='container'>
        <div className='row' >
          <div className='col-md-4 col'>
            <div className='logo'>
              <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="img" className='img-fluid' />
            </div>
          </div>
          <div className='col-md-4 col'>
            <h3 className='text-dark fw-bolder fs-4 mb-2 '>
              Sign In to DBM
            </h3>
            <Form inline>
              <FormGroup floating>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <Label for="exampleEmail">
                  Email
                </Label>
              </FormGroup>
              {' '}
              <FormGroup floating>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Label for="examplePassword">
                  Password
                </Label>
              </FormGroup>
              {' '}
              <Button className="button">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>

  )
}

export default login