export const reactWidgetsConfig = {
    name: 'reactWidgetsForm',
    fields: {
        calender: {
            value: new Date().getTime(),
        },
        combobox: {
            extra: {
                data: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
            },
        },
        dateTimePicker: {
            value: new Date().getTime(),
        },
        dropdownList: {
            extra: {
                data: ['React', 'Angular 2+', 'Vue', 'Angular.JS', 'Ember', 'Knockout'],
            },
        },
        multiselect: {
            value: [],
            extra: {
                data: ['express', 'koa', 'hapi', 'sails', 'adonis', 'loopback', 'nest'],
            },
        },
        numberPicker: {
            default: 0,
        },
        selectList: {
            extra: {
                data: ['Linux', 'Windows', 'MacOS'],
            },
        },
    },
};
