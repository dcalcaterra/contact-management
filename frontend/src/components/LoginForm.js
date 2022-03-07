import { React, useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap/';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-custom.css';
import '../css/sign-in.css';

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertShow, setAlertShow] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setAlertShow(true);

        const credentials = { username, password };    
        props.login(credentials);    
    };

    return (<>
        <div className="widewrapper">
            <div className="container">
                <div className="row features text-center" style={{margin: '20px auto'}}>
                    <h2>GESTIONE CONTATTI PERSONALI</h2>
                    <h3 style={{fontStyle: "italic"}}>Accedi per una migliore esperienza</h3>
                </div>                 
            </div>
        </div>

        <div className="widewrapper weak-highlight login">
            <div className="container content">
                <div className="row">
                    <div className="form-main" style={{maxWidth: "400px", margin: "auto"}}>
                        <Form className="form-signin" onSubmit={handleSubmit}>
                            <Alert
                                dismissible
                                show={alertShow && props.errorShow}
                                onClose={() => setAlertShow(false)}
                                variant="danger">
                                {props.errorMessage}
                            </Alert>
                            <Form.Control type="text"
                                className="form-control"
                                value={username}
                                placeholder="Username"
                                required={true}
                                style={{marginBottom: "10px", maxHeight: "40px", borderRadius: "0px"}}
                                onChange={(ev) => setUsername(ev.target.value)}
                            />
                            <Form.Control type="password"
                                className="form-control"
                                value={password}
                                placeholder="Password"
                                required={true}
                                style={{marginBottom: "20px", maxHeight: "40px", borderRadius: "0px"}}
                                onChange={(ev) => setPassword(ev.target.value)}
                            />
                            <div className="d-grid gap-2">
                                <Button variant="primary"
                                        className="signin"
                                        type="submit"
                                        style={{borderRadius: "0", color: "#fff"}}
                                        size="lg">ACCEDI
                                </Button>
                            </div>
                        </Form>
                    </div>    
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </>);      
};

export default LoginForm;