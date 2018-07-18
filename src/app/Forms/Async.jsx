import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';

export default connect.asyncForm(({ asyncForm }) => {
    const { extra, select } = asyncForm;

    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form className="card">
                <div className="mb-2">
                    <Row>
                        <Col lg={4}>
                            <FormControl field={select('userName')} />
                        </Col>
                    </Row>
                </div>
                <FormButtons {...asyncForm} />
            </Form>
            <FormData {...asyncForm} />
        </Fragment>
    );
});
