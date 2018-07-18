import React from 'react';
import { Row, Col } from 'reactstrap';
import configs from '../redux/configs';
import { stringifyConfig } from '../helpers';

export default ({ name, errors, valid, values }) => (
    <Row className="mt-3">
        <Col xs={12} md={6}>
            <div className="mb-half">
                <strong>Passes validation:&nbsp;
                    <span className={`text-${valid ? 'valid' : 'danger'}`}>
                        {valid.toString().toUpperCase()}
                    </span>
                </strong>
            </div>
            <div>
                <strong>Errors ({errors.length}):</strong>
                <ul>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    {errors.map((error, i) => (<li key={i}>{error}</li>))}
                </ul>
            </div>
        </Col>
        <Col xs={12} md={6}>
            <div>
                <strong>Form values:</strong>
                <div className="code">
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </div>
            </div>
        </Col>
        <Col xs={12} className="mb-1">
            <div>
                <strong>Config:</strong>
                <div className="code">
                    <pre>
                        {stringifyConfig(configs.find((c => c.name === name)))}
                    </pre>
                </div>
            </div>
        </Col>
    </Row>
);
