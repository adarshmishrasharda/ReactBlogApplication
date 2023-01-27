import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { GlobalData } from '../App';

function Edit() {
    const { data, i } = useContext(GlobalData);
    const [title, setTitle] = useState(data.title);
    const [categories, setCategories] = useState(data.categories);
    const [content, setContent] = useState(data.content);

    function updateData() {
        let blog = { title, categories, content };
        
        const info = JSON.parse(localStorage.getItem("blogs"));
        Object.keys(blog).forEach(key => { info[i][key] = blog[key] })
        localStorage.setItem("blogs", JSON.stringify(info));
    }

    return (
        <>
            <Navbar className="header" sticky="top">
                <Container fluid>
                    <Navbar.Brand className='title'><h2><b>Edit Post</b></h2></Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="cls5">
            <a href="/"><b>Back to index</b></a><br/><br/>   
                <Form action="/" onSubmit={updateData}>
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
                        <Button className='dark-btn' href="/" variant="warning" size="lg">
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Container>

        </>
    )
}

export default Edit;