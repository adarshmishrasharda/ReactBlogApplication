import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { GlobalData } from '../App';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import {  useContext } from 'react';




function List() {
    //const [blogs, setBlogs] = useState([]);
    
    const info = JSON.parse(localStorage.getItem("blogs"));
 
    const { getData } = useContext(GlobalData);
    



    // useEffect(() => {
    //     fetch("http://localhost:5000/blogs").then((result) => {
    //         result.json().then((resp) => {
    //             setBlogs(resp);
    //         })
    //     })
    // }, [])

    return (
        <>
            <Navbar className="header" sticky="top">
                <Container fluid>
                    <Navbar.Brand className='title'><h2><b>Blog Posts</b></h2></Navbar.Brand>
                    <Button className='btn' href="/AddBlogComponent" variant="dark">New Post</Button>
                </Container>
            </Navbar><br />
            <Container fluid className="cls1">
                {
                    (info && info.length !== 0) ? info.map((item, i) =>
                        <Link to="/BlogPostComponent" onClick={() => { getData(item, i) }} className="cls6" key={i}>
                            <Card className="cls">
                                <Card.Body>{item.title}
                                <div className='right'>
                                   
                                    <Link to="/Editcomponent"><Button className='dark-btn' variant="light">Edit</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    
                                </div>
                                </Card.Body>
                           
                            </Card><br />
                        </Link>
                    ) : <Alert variant="danger"><h5><b>No posts added yet!</b></h5></Alert>
                }
            </Container>
        </>
    )
}

export default List;