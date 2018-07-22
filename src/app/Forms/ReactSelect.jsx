import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';

export default connect.reactSelectForm(({ reactSelectForm }) => {
    const { select } = reactSelectForm;
    return (
        <Fragment>
            <header className="mb-1">
                <h1>Form with <code>react-select</code></h1>
                <i>An example with the&nbsp;
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/JedWatson/react-select">
                        <code>react-select</code>
                    </a>&nbsp;library.
                </i>
            </header>
            <Form className="card">
                <Row>
                    <Col lg={6}>
                        <FormControl field={select('frontend')} reactSelect />
                    </Col>
                    <Col lg={6}>
                        <FormControl field={select('backend')} reactSelect />
                    </Col>
                    <Col lg={6}>
                        <FormControl field={select('countries')} reactSelect />
                    </Col>
                </Row>
                <FormButtons {...reactSelectForm} />
            </Form>
            <FormData {...reactSelectForm} />
        </Fragment>
    );
});
