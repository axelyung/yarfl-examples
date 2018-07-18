import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ReactSelect from 'react-select';
/* eslint-disable  */
export default class extends Component {
    get input() {
        const { bind, label, options, type, value, placeholder, multiple, extra } = this.props.field;
        switch (type) {
            case 'checkbox':
                return (
                    <div className="pl-half">
                        <input {...bind()} />
                        <label className="pl-half">
                            {(extra || {}).checkboxText || label}
                        </label>
                    </div>
                );
            case 'radio':
                return (
                    <div className="pl-2">
                        {options.map(opt => <div key={opt.value}>
                            <Input {...opt.bind()} />
                            <label className="pl-half">
                                {opt.label}
                            </label>
                        </div>)
                        }
                    </div>
                );
            case 'select':
                if(this.props.reactSelect) {
                    const {onChange, ...other} = bind();
                    const props = {
                        ...other,
                        multi: !!multiple,
                        options: options.map(({ label, value}) => ({ label, value })),
                        onChange: (option) => {
                            const newValue = multiple
                                ? option.map(opt => opt.value)
                                : (option || {}).value;
                            onChange(null, newValue || '')
                        } 
                    }
                    return extra.reactSelectLoadOptions
                        ? <ReactSelect.Async 
                            {...props} 
                            loadOptions={extra.reactSelectLoadOptions}/>
                        : <ReactSelect {...props} />
                }
                return (
                    <Input {...bind()}>
                        {!multiple && <option value="" label={placeholder} disabled />}
                        {options.map(opt => <option key={opt.value} {...opt.bind()} />)}
                    </Input>
                );
            default:
                return <Input {...bind()} rows="8"/>;
        }
    }

    render() {
        const { field } = this.props;
        const { bind, name, label, errorMessage } = field;
        const hasError = !!errorMessage;
        return (
            <FormGroup className={hasError ? 'has-error' : ''}>
                <Label for={name}>
                    {hasError ? errorMessage : label}
                </Label>
                <br />
                {this.input}
            </FormGroup>
        );
    }
}
