import React from 'react';
import { Button as RsButton, Row, Col } from 'reactstrap';
import MuiButton from '@material-ui/core/Button';


export default ({ name, valid, reset, clear }) => {
    const Button = name === 'materialUiForm' ? MuiButton : RsButton;
    const commonBtnProps = {
        type: 'button',
        variant: 'contained',
    };
    return (
        <Row className="form-btns">
            <Col xs={12}>
                <Button
                    {...commonBtnProps}
                    color="primary"
                    disabled={!valid}>
                    Submit
                </Button>
                <Button
                    {...commonBtnProps}
                    className="bg-danger mr-half"
                    color={name === 'materialUiForm' ? 'inherit' : 'danger'}
                    onClick={clear}>
                    Clear
                </Button>
                <Button
                    {...commonBtnProps}
                    color="secondary"
                    onClick={reset}>
                    Reset
                </Button>
            </Col>
        </Row>
    );
};
