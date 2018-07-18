import React, { Fragment } from 'react';
import { Row, Col, Form } from 'reactstrap';
import { Calendar, Combobox, DateTimePicker, DropdownList, Multiselect, NumberPicker, SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import numberLocalizer from 'react-widgets-simple-number';
import { connect } from '../redux';
import FormData from '../components/FormData';
import FormButtons from '../components/FormButtons';

Moment.locale('en');
momentLocalizer();
numberLocalizer();

export default connect.reactWidgetsForm(class extends React.Component {
    select = (key) => {
        const { reactWidgetsForm: { select } } = this.props;
        return select(key);
    }

    widgetMap = (key) => {
        switch (key) {
            case 'calendar':
                return Calendar;
            case 'combobox':
                return Combobox;
            case 'dateTimePicker':
                return DateTimePicker;
            case 'dropdownList':
                return DropdownList;
            case 'multiselect':
                return Multiselect;
            case 'numberPicker':
                return NumberPicker;
            case 'selectList':
                return SelectList;
            default:
                throw new Error('Missing correct key!');
        }
    }

    renderWidget = (key, { onChangeMapper, valueMapper }) => {
        const { id, label, bind } = this.select(key);
        const { value, onChange, extra, ...other } = bind();

        const Widget = this.widgetMap(key);
        return (
            <Fragment>
                <label htmlFor={id}>{label}</label>
                <Widget
                    {...other}
                    {...extra}
                    value={valueMapper
                        ? valueMapper(value)
                        : value}
                    onChange={onChangeMapper
                        ? onChangeMapper(onChange)
                        : v => onChange(null, v)} />
            </Fragment>
        );
    }

    renderCalender = () => {
        const { value, onChange, ...other } = this.select('calender').bind();
        return (
            <Calendar
                {...other}
                onChange={d => onChange(null, d.getTime())}
                value={value ? new Date(value) : new Date()} />
        );
    }

    renderComboBox = () => {
        const { bind, extra: { data } } = this.select('combobox');
        const { onChange, ...other } = bind();
        return (
            <Combobox
                {...other}
                data={data}
                onChange={v => onChange(null, v)} />
        );
    }

    renderDateTimePicker = () => {
        const { value, onChange, ...other } = this.select('dateTimePicker').bind();
        return (
            <DateTimePicker
                {...other}
                onChange={d => onChange(null, d.getTime())}
                value={value ? new Date(value) : new Date()} />
        );
    }

    renderDropdownList = () => {
        const { bind, extra: { data } } = this.select('dropdownList');
        const { onChange, ...other } = bind();
        return (
            <DropdownList
                {...other}
                data={data}
                onChange={v => onChange(null, v)} />
        );
    }

    renderMultiselect = () => {
        const { bind, extra: { data } } = this.select('multiselect');
        const { onChange, ...other } = bind();
        return (
            <Multiselect
                {...other}
                data={data}
                onChange={v => onChange(null, v)} />
        );
    }

    renderNumberPicker = () => {
        const { onChange, default: dfault, ...other } = this.select('numberPicker').bind();
        return (
            <NumberPicker
                {...other}
                defaultValue={dfault}
                onChange={v => onChange(null, v)} />
        );
    }

    renderSelectList = () => {
        const { bind, extra: { data } } = this.select('selectList');
        const { onChange, ...other } = bind();
        return (
            <SelectList
                {...other}
                data={data}
                onChange={v => onChange(null, v)} />
        );
    }

    render() {
        const { reactWidgetsForm } = this.props;
        return (
            <Fragment>
                <header className="mb-1">
                    <h1>Form with <code>react-widgets</code></h1>
                    <i>An example with the&nbsp;
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://github.com/jquense/react-widgets" target="_blank">
                            <code>react-widgets</code>
                        </a>&nbsp;library.
                    </i>
                </header>
                <Form className="card react-widgets-form">
                    <Row>
                        <Col lg={6} xl={4}>
                            <label htmlFor="calendar">Calendar</label>
                            {this.renderCalender()}
                            <div className="d-none d-lg-block d-xl-none">
                                <label htmlFor="select-list">SelectList</label>
                                {this.renderSelectList()}
                            </div>
                        </Col>
                        <Col lg={6} xl={8}>
                            <Row>
                                <Col md={6} lg={12} xl={6}>
                                    <label htmlFor="combobox">Combobox</label>
                                    {this.renderComboBox()}
                                </Col>
                                <Col md={6} lg={12} xl={6}>
                                    <label htmlFor="date-time-picker">DateTimePicker</label>
                                    {this.renderDateTimePicker()}
                                </Col>
                                <Col md={6} lg={12} xl={6}>
                                    <label htmlFor="dropdown-list">DropdownList</label>
                                    {this.renderDropdownList()}
                                </Col>
                                <Col md={6} lg={12} xl={6}>
                                    <label htmlFor="multiselect">Multiselect</label>
                                    {this.renderMultiselect()}
                                </Col>
                                <Col md={6} lg={12} xl={6}>
                                    <label htmlFor="number-picker">NumberPicker</label>
                                    {this.renderNumberPicker()}
                                </Col>
                                <Col md={6} lg={12} xl={6} className="d-lg-none d-xl-block">
                                    <label htmlFor="select-list">SelectList</label>
                                    {this.renderSelectList()}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <FormButtons {...reactWidgetsForm} />
                </Form>
                <FormData {...reactWidgetsForm} />
            </Fragment>
        );
    }
});
