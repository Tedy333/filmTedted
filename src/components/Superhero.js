import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImages from "../assets/images/superhero/antman.jpg"
import avangersImages from "../assets/images/superhero/avengers.jpg"
import batmanImages from "../assets/images/superhero/batman.jpg"
import robinhoodImages from "../assets/images/superhero/robinhood.jpg"
import spidermanImages from "../assets/images/superhero/spiderman.jpg"
import supermanImages from "../assets/images/superhero/superman.jpg"


const Superhero = () => {
    return(
        <div>
            <Container>
                <br/>
                
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <Row>

                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {antmanImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">ANTMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>

                <Col md={4} className="movieWrapper" >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {avangersImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">AVENGERS</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>

                <Col md={4} className="movieWrapper" >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {batmanImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">BATMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>

                <Col md={4} className="movieWrapper" >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {robinhoodImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">ROBINHOOD</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>

                <Col md={4} className="movieWrapper" >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {spidermanImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">SPIDERMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>

                <Col md={4} className="movieWrapper" >
                    <Card className=" movieImage bg-dark m-3 p-2">
                    <Image src= {supermanImages} 
                        alt="Dune Movies" className="Image"  />
                    <div className="bg-dark">
                        <div className="p-2 m-2  text-white">
                    <Card.Title className="text-center ">SUPERMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                        </Card>
                </Col>


                </Row>
            </Container>
  
        </div>
    )
}

export default Superhero;