import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { GlobalData } from '../App';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

function Post() {
    const { data, i } = useContext(GlobalData);
    const info = JSON.parse(localStorage.getItem("blogs"));
    const [liked, setLiked] = useState(info[i].liked);

    // fetch("http://localhost:5000/blogs/" + data.id, {
    //     method: "DELETE"
    // }).then((result) => {
    //     result.json().then()
    // })

    const deleteBlog = () => {
        let elements = JSON.parse(localStorage.getItem("blogs"));;
        elements.splice(i, 1);
        localStorage.setItem("blogs", JSON.stringify(elements));
    }

    const likeBlog = () => {
        info[i].liked = !info[i].liked;
        localStorage.setItem("blogs", JSON.stringify(info));
        setLiked(!liked);
    }

    return (
        <>
            <Navbar className="header" sticky="top">
                <Container fluid>
                    <Navbar.Brand className='title'><h2><b>Post</b></h2></Navbar.Brand>
                    <div>
                        <Button className="cls4 btn" onClick={likeBlog} style={liked ? { backgroundColor: "#00BFFF" } : null} variant="light"><FaThumbsUp className="cls3" /></Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/Editcomponent"><Button variant="light">Edit</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button className="btn" href="/" onClick={deleteBlog} variant="light">Delete</Button>
                    </div>
                </Container>
            </Navbar>
            <Container fluid className="cls5">
                <a href="/"><b>Back to index</b></a><br /><br />
                <Card className="cls2">
                    <Card.Body><h5><b>Title:</b></h5> {data.title}<br /><br /><br />
                        <h5><b>Categories:</b></h5> {data.categories}<br /><br /><br />
                        <h5><b>Content:</b></h5> {data.content}
                    </Card.Body>
                </Card><br />
            </Container>
        </>
    )
}

export default Post;
