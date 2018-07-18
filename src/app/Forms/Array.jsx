import React, { Fragment } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';

export default connect.arrayForm(({ arrayForm }) => {
    const { extra, select } = arrayForm;
    const users = select('users');
    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form>
                {
                    users.fields.map((u, i) => (
                        <div key={u.age.key} className="card mb-1 user-card">
                            <Row>
                                <Col lg={4}>
                                    <FormControl field={select(`users[${i}].name`)} />
                                </Col>
                                <Col lg={4}>
                                    <FormControl field={select(`users[${i}].email`)} />
                                </Col>
                                <Col lg={4}>
                                    <FormControl field={select(`users[${i}].age`)} />
                                </Col>
                                <Button
                                    size="sm"
                                    color="danger"
                                    type="button"
                                    className="corner-btn"
                                    onClick={() => users.del(i)}>
                                delete
                                </Button>
                            </Row>
                        </div>
                    ))
                }
                <Row className="mtb-1 pr-1">
                    <Col>
                        <Button
                            type="button"
                            onClick={() => users.add()}>
                            Add User
                        </Button>
                    </Col>
                    <FormButtons />
                </Row>
                <FormData {...arrayForm} />
            </Form>
        </Fragment>
    );
});
