import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from '../redux';
import FormData from '../components/FormData';
import MaterialControl from '../components/MaterialControl';
import FormButtons from '../components/FormButtons';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#007bff',
        },
        secondary: {
            main: '#17a2b8',
        },
        error: {
            // light: '#ff7961',
            main: '#dc3545',
            // dark: '#ba000d',
            // contrastText: '#000',
        },
    },
});

export default connect.materialUiForm(({ materialUiForm }) => {
    const { select } = materialUiForm;
    return (
        <Fragment>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <header className="mb-1">
                    <h1>Form with <code>material-ui</code></h1>
                    <i>An example with&nbsp;
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://material-ui.com/">
                            <code>material-ui</code>
                        </a>&nbsp;components.
                    </i>
                </header>
                <Form className="card">
                    <Row>
                        <Col lg={4}>
                            <MaterialControl field={select('name')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('email')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('website')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('password')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('passwordConfirm')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('age')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('birthday')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('frontend')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('backend')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('operatingSystem')} />
                        </Col>
                        <Col lg={4}>
                            <MaterialControl field={select('termsAndConditions')} />
                        </Col>
                    </Row>
                    <FormButtons {...materialUiForm} />
                </Form>
                <FormData {...materialUiForm} />
            </MuiThemeProvider>
        </Fragment>
    );
});
