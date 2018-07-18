import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';

export default connect.getterSetterForm(({ getterSetterForm }) => {
    const { extra, select } = getterSetterForm;

    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form className="card">
                <div className="mb-2">
                    <Row>
                        <Col lg={6}>
                            <FormControl field={select('numberToBinary')} />
                        </Col>
                        <Col lg={6}>
                            <FormControl field={select('date')} />
                        </Col>
                        <Col lg={7}>
                            <FormControl field={select('stringToArray')} />
                        </Col>
                    </Row>
                </div>
                <FormButtons {...getterSetterForm} />
            </Form>
            <FormData {...getterSetterForm} />
        </Fragment>
    );
});
