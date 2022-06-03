import { useState } from "react";

//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase_init from "../firebase_init";

//style
import { Form, Button } from "react-bootstrap"

export default function Login({ authenticate, wrong }) {
    //form handler
    const [formHandler, setFormHandler] = useState({
        email: "",
        password: ""
    });
    
    //input setter
    const inputEvent = (e) => {
        setFormHandler({
            ...formHandler,
            [e.target.name]: e.target.value
        })
    }


    const login = (e) => {
        e.preventDefault();
        authenticate(formHandler.email, formHandler.password);
    }

    return (
        <>
           <div className="log-in d-flex justify-content-center align-items-center">
                <h1 className="position-absolute" style={{top: "12%"}}>ADMIN CONSOLE</h1>
                <Form className="bg-light p-5 rounded justify-self-center d-flex flex-column shadow-lg" style={{height: "340px"}} onSubmit={login}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={inputEvent} />
                    </Form.Group>
                    <Form.Group className={wrong ? "mb-1": "mb-3"}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" onChange={inputEvent} />
                    </Form.Group>
                    {wrong && <p className="mb-3 text-center text-danger">Wrong E-mail or Password</p>}
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
           </div>
        </>
    )
}