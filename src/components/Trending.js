import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImages from "../assets/images/trending/dune.jpg"
import everythingImages from "../assets/images/trending/everything.jpeg"
import gatotkacaImages from "../assets/images/trending/gatotkaca.jpg"
import infiniteImages from "../assets/images/trending/infinite.jpg"
import jokerImages from "../assets/images/trending/joker.jpg"
import gundalaImages from "../assets/images/trending/gundala.jpg"
import axios from "axios"


const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY

            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])


    return(
        <div>
            <Container>
                <br/>
                
                <h1 className="text-white">TRENDING MOVIES</h1>
                <Row>
                {movies.map((result, index) => {
                    return(

                     <Col md={4} className="movieWrapper" id ="trending" key={index} >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= { `${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} 
                        alt="test" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">{result.title}</Card.Title>
                    <Card.Text className="text-left">
                    {result.overview}
                    </Card.Text>
                    <Card.Text className="text-left"> {result.release_date} </Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col> 
                    )

                })}
                

                </Row>
            </Container>
  
        </div>
    )
}

export default Trending;