import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Preview from '../components/Preview'
import StepperComp from '../components/StepperComp'

const Form = () => {
  return (
    <Row className='mt-5'>
        <Col lg={6} sm={12}>
        <StepperComp/>
        
        </Col>
        <Col lg={6} sm={12}>
        <Preview/>
        </Col>
    </Row>
  )
}

export default Form