import React from 'react'
import { Navbar, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import spotifys from './spotifys.png'
import { useLazyQuery } from '@apollo/client';
import {SEARCH_ARTIST_QUERY} from '../GraphQL/Queries'


const Header = () => {

    const [searchArtist,{loading, error, data}] = useLazyQuery(SEARCH_ARTIST_QUERY, {
        variables: {byName: 'Billie Eilish'},
    });



    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          searchArtist()
        }
      }

    if (error) return <h1>Error Found!</h1>
    if (data){
        console.log('hekhek',data)
    }



    return (

        <>
        <Row className="header">
            <Col lg="auto">
                <img className="header__image" src={spotifys}></img>
            </Col>
            <Col xs lg="4" className="ml-auto">
                <FormControl type="text" placeholder="Search Artist" onKeyDown={handleKeyDown} />
            </Col>
            <Col>
                {/* <Button variant="outline-success" >Search</Button> */}
            </Col>
        </Row>


        </>


    )
}

export default Header
