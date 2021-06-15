import React from 'react'
import Adele from './Adele.png'
import {  Row, Col } from 'react-bootstrap'


const List = () => {
    return (
        <Row className="Lists">
            <Col lg="auto">
            <img className="Lists__image" src={Adele}/>
            </Col>
            <Col>
            <Row>
            <span>
                All I Ask
            </span>
            </Row>
            <Row>

            <span>Adele</span>
            </Row>
            </Col>

            <Col  lg="auto">
            <div>
                4:00
            </div>
            </Col>
        </Row>
    )
}

export default List
