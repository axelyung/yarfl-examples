import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';

export default connect.basicForm(({ basicForm }) => {
    const { extra, select } = basicForm;

    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form className="card">
                <Row>
                    <Col lg={4}>
                        <FormControl field={select('name')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('email')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('website')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('password')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('passwordConfirm')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('age')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('birthday')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('operatingSystem')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('frontend')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('backend')} />
                    </Col>
                    <Col lg={4}>
                        <FormControl field={select('termsAndConditions')} />
                    </Col>
                </Row>
                <FormButtons {...basicForm} />
            </Form>
            <FormData {...basicForm} />
        </Fragment>
    );
});
