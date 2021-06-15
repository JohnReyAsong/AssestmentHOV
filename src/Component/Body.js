import React from 'react'
import Artist from './Artist';
import Songs from './Songs';
import Albums from './Albums';
import { Row, Col } from 'react-bootstrap'


const Body = () => {
    return (
        <>
            <Row className="p-4">
                <Col lg="auto">
                    <div >
                        <Artist />
                    </div>
                </Col>

                <Col>
                    <div >
                        <Songs />

                    </div>
                </Col>
            </Row>
            <Row className="p-4">
                <Col>
                    <div >

                        <Albums />

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Body

