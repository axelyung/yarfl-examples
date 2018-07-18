import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';
import FormButtons from '../components/FormButtons';


export default connect.partitionedForm(({ partitionedForm }) => {
    const { extra, select } = partitionedForm;
    const disableClassName = key => (select(key).valid ? '' : 'disable-section');
    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form className="card">
                <div>
                    <h4>Personal Info</h4>
                    <Row>
                        <Col lg={4}>
                            <FormControl field={select('personalInfo.name')} />
                        </Col>
                        <Col lg={4}>
                            <FormControl field={select('personalInfo.email')} />
                        </Col>
                        <Col lg={4}>
                            <FormControl field={select('personalInfo.website')} />
                        </Col>
                    </Row>
                </div>
                <div className={disableClassName('personalInfo')}>
                    <h4>Security</h4>
                    <Row>
                        <Col lg={4}>
                            <FormControl field={select('security.password')} />
                        </Col>
                        <Col lg={4}>
                            <FormControl field={select('security.passwordConfirm')} />
                        </Col>
                    </Row>
                </div>
                <div className={disableClassName('security')}>
                    <h4>Tech</h4>
                    <Row>
                        <Col lg={4}>
                            <FormControl field={select('tech.operatingSystem')} />
                        </Col>
                        <Col lg={4}>
                            <FormControl field={select('tech.frontend')} />
                        </Col>
                        <Col lg={4}>
                            <FormControl field={select('tech.backend')} />
                        </Col>
                    </Row>
                </div>
                <div className={disableClassName('tech')}>
                    <h4>Terms And Conditions</h4>
                    <FormControl field={select('termsAndConditions')} />
                </div>
                <FormButtons {...partitionedForm} />
            </Form>
            <FormData {...partitionedForm} />
        </Fragment>
    );
});
