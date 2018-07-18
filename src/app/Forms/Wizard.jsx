import React, { Fragment } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormControl from '../components/FormControl';

const routes = {
    personalInfo: '/wizard/personal-info',
    security: '/wizard/security',
    tech: '/wizard/tech',
    termsAndConditions: '/wizard/terms-and-conditions',
};
const routesKeys = Object.keys(routes);
const routesValues = Object.values(routes);

const Navigation = withRouter((props) => {
    const {
        location,
        history,
        valid,
        select,
        reset: resetForm,
        clear: clearForm,
    } = props;
    const page = routesValues.indexOf(location.pathname);
    const {
        valid: pageValid,
        // reset: resetPage,
        // clear: clearPage,
    } = select(routesKeys[page]);
    const isFirstPage = page === 0;
    const isLastPage = page === routesValues.length - 1;
    return (
        <div>
            <Row>
                <Col xs={12} className="ta-center">
                    { !isFirstPage && (
                        <Button
                            onClick={() => history.push(routesValues[page - 1])}
                            className="f-left">
                            Previous
                        </Button>
                    )}
                    {/*
                    // TODO:implement node and clear actions for subsections
                     <Button
                        type="button"
                        color="danger"
                        className="mr-half"
                        onClick={resetPage}>
                        Reset
                    </Button>
                    <Button
                        type="button"
                        color="primary"
                        className="mr-half"
                        onClick={clearPage}>
                        Clear
                    </Button> */}
                    { isLastPage ? (
                        <Fragment>
                            <Button
                                type="button"
                                color="primary"
                                className="f-right ml-half"
                                disabled={!valid}>
                                Submit
                            </Button>
                            <Button
                                type="button"
                                color="danger"
                                className="f-right ml-half"
                                onClick={clearForm}>
                                Clear all
                            </Button>
                            <Button
                                type="button"
                                color="secondary"
                                className="f-right"
                                onClick={resetForm}>
                                Reset all
                            </Button>
                        </Fragment>
                    ) : (
                        <Button
                            disabled={!pageValid}
                            onClick={() => history.push(routesValues[page + 1])}
                            className="f-right">
                            Next
                        </Button>
                    )}
                </Col>
            </Row>
        </div>
    );
});

export default connect.wizardForm(({ wizardForm }) => {
    const { extra, select } = wizardForm;
    return (
        <Fragment>
            <header className="mb-1">
                <h1>{extra.title}</h1>
                <i>{extra.subtitle}</i>
            </header>
            <Form className="wizard-form card">
                <Switch>
                    <Route path={routes.personalInfo}>
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
                            <Navigation {...wizardForm} />
                        </div>
                    </Route>
                    <Route path={routes.security}>
                        <div>
                            <h4>Security</h4>
                            <Row>
                                <Col lg={4}>
                                    <FormControl field={select('security.password')} />
                                </Col>
                                <Col lg={4}>
                                    <FormControl field={select('security.passwordConfirm')} />
                                </Col>
                            </Row>
                            <Navigation {...wizardForm} />
                        </div>
                    </Route>
                    <Route path={routes.tech}>
                        <div>
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
                            <Navigation {...wizardForm} />
                        </div>
                    </Route>
                    <Route path={routes.termsAndConditions}>
                        <div>
                            <h4>Terms And Conditions</h4>
                            <div>
                                <FormControl field={select('termsAndConditions')} />
                            </div>
                            <Navigation {...wizardForm} />
                        </div>
                    </Route>
                    <Redirect to={routes.personalInfo} />
                </Switch>
            </Form>
            <FormData {...wizardForm} skipButtons />
        </Fragment>
    );
});
