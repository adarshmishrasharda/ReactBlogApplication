import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const getDatafromLS = () => {
    const data = localStorage.getItem("blogs");
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

function New() {
    const [blogs, setBlogs] = useState(getDatafromLS());
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState("");
    const [content, setContent] = useState("");

    function saveData() {
        let data = { title, categories, content, liked: false }
 
        setBlogs([...blogs, data]);
    }

    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs])

    return (
        <>
            <Navbar className="header" sticky="top">
                <Container fluid>
                    <Navbar.Brand className='title'><h2><b>New Post</b></h2></Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="cls5">
            <a href="/"><b>Back to index</b></a><br /><br />    
                <Form action="/" onSubmit={saveData}>
                    <Form.Group className="mb-3">
                        <Form.Label><h5><b>Title</b></h5></Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h5><b>Categories</b></h5></Form.Label>
                        <Form.Control type="text" value={categories} onChange={(e) => { setCategories(e.target.value) }} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h5><b>Content</b></h5></Form.Label>
                        <Form.Control as="textarea" value={content} rows={4} onChange={(e) => { setContent(e.target.value) }} required />
                    </Form.Group>

                    <div>
                        <Button className='dark-btn' variant="primary" size="lg" type="submit">
                            Submit
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button className='dark-btn'href="/" variant="warning" size="lg">
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Container>

        </>
    )
}

export default New;