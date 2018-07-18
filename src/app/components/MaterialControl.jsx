import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

/* //eslint-disable  */
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    formControl: {
        // margin: theme.spacing.unit * 3,
        marginBottom: 0,
    },
    menu: {},
});

export default withStyles(styles)(class extends Component {
    input() {
        const { field, classes } = this.props;
        const { id, bind, label, options, type, errorMessage, multiple, extra } = field;
        switch (type) {
            case 'checkbox':
                return (
                    <FormControl
                        component="fieldset"
                        error={!!errorMessage}
                        className={classes.formControl}
                        fullWidth>
                        <FormLabel htmlFor={id}>{label}</FormLabel>
                        <FormControlLabel
                            color="primary"
                            control={<Checkbox
                                {...bind()}
                                value="true" />}
                            label={(extra || {}).checkboxText || label} />
                        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
                    </FormControl>
                );
            case 'radio':
                return (
                    <FormControl
                        component="fieldset"
                        error={!!errorMessage}
                        className={classes.formControl}
                        fullWidth>
                        <FormLabel htmlFor={id}>{label}</FormLabel>
                        <RadioGroup {...bind()}>
                            {options.map(opt => (
                                <FormControlLabel
                                    color="primary"
                                    className="radio-btn"
                                    key={opt.value}
                                    label={opt.label}
                                    value={opt.value}
                                    control={<Radio />} />
                            ))}
                        </RadioGroup>
                        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
                    </FormControl>
                );
            case 'select':
                const { onChange, ...other } = bind();
                const onChangeHandler = multiple
                    ? e => onChange(null, e.target.value)
                    : onChange;
                return (
                    <FormControl error={!!errorMessage} fullWidth>
                        <InputLabel htmlFor={id}>{label}</InputLabel>
                        <Select
                            {...other}
                            onChange={onChangeHandler}
                            label={errorMessage || label}>
                            {options.map(opt => (
                                <MenuItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
                    </FormControl>
                );
            default:
                return (
                    <FormControl error={!!errorMessage} fullWidth>
                        <InputLabel
                            htmlFor={id}
                            {...(type === 'date' ? { shrink: true } : {})}>
                            {label}
                        </InputLabel>
                        <Input
                            {...bind()}
                            error={!!errorMessage}
                            fullWidth />
                        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
                    </FormControl>
                );
        }
    }

    render() {
        const { field: { id } } = this.props;
        return (
            <div className={`material-ui-control ${id}-wrapper`}>
                {this.input()}
            </div>
        );
    }
});
