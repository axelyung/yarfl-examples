import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapState, mapDispatch, mapMerge, createConnector } from 'redux-validated';
import TextField from 'material-ui/TextField';


// const mapS = (state) => mapState(state);

// const mapD = (dispatch) => ({
//     ...mapDispatch(dispatch)
// })

// const merge = (stateProps, dispatchProps, ownProps) => ({
//     ...mapMerge(stateProps, dispatchProps),
//     ...ownProps
// });

// const customConnector = (Component) => connect(mapState, mapDispatch, mapMerge)(Component);

const defaultConnector = createConnector(connect);

export default defaultConnector(class Form extends Component {
    render() { 
        console.log(this.props);
        ///console.log(JSON.stringify(this.props.select('name'), null, 4));
        const nameField = this.props.select('name');
        const nameProps = nameField.bind();
        const ageField = this.props.select('age'); 
        const ageProps = ageField.bind(); 
        // console.log(ageProps);
        return (
            <div>
                <p>
                    <button onClick={nameField.clear}>clear name</button>
                    <button onClick={nameField.reset}>reset name</button>
                    <button onClick={nameField.showErrors}>show errors for name</button>
                    <button onClick={() => nameField.set('set value')}>set name</button>
                </p>
                <p>
                    <label>{nameProps.label}</label><br/>
                    <TextField
                        hintText="Message Field"
                        floatingLabelText="MultiLine and FloatingLabel"
                        multiLine={true}
                        rows={2}
                    />
                    <input {...nameProps} /><br />
                    <strong>{nameField.errorMessage}</strong>    
                </p>
                <p>
                    <label>{ageProps.label}</label><br/>
                    <input {...ageProps} /><br /> 
                    <strong>{ageField.errorMessage}</strong>    
                </p>
            </div>
        );
    }
})