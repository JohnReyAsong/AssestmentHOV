import React from 'react'
import AlbumCard from './AlbumCard';
import { Row, Col } from 'react-bootstrap'


const Albums = () => {
    return (

        <>
            <div className="body__title">
                Albums
            </div>
            <Row>
                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>

                <Col lg="auto">
                    <AlbumCard />
                </Col>
                

                
            </Row>
        </>
    )
}

export default Albums
