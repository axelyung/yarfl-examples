export const getterSetterConfig = {
    name: 'getterSetterForm',
    extra: {
        title: 'Form with getters and setters',
        subtitle: 'Sometimes we want to convert or transform values betweeen rendering them on the page'
        + ' and changing state. In this case we can use getters and setters.',
    },
    customRules: [{
        name: 'userName',
        callback: (value, _req, _attr, passes) => {
            // mock request to a REST API
            setTimeout(() => (value.toLowerCase() !== 'username' ? passes()
                : passes(false, `The username '${value}' is not available!`)), 1000);
        },
    }],
    fields: {
        numberToBinary: {
            type: 'number',
            label: 'Number to binary',
            placeholder: 'Write a number and save it as a binary string.',
            setter: value => parseInt(value).toString(2),
            getter: (value) => {
                const result = parseInt(value, 2);
                return Number.isNaN(result) ? '' : result;
            },
        },
        date: {
            type: 'date',
            label: 'Date to ms',
            placeholder: 'Enter your birthday',
            setter: value => new Date(value).getTime(),
            getter: (value) => {
                const d = new Date(value);
                let month = `${d.getMonth() + 1}`;
                let day = `${d.getDate()}`;
                const year = d.getFullYear();
                if (month.length < 2) month = `0${month}`;
                if (day.length < 2) day = `0${day}`;
                return [year, month, day].join('-');
            },
        },
        stringToArray: {
            value: [],
            type: 'textarea',
            label: 'String to array',
            placeholder: 'Write a series of comma seperated strings',
            setter: value => value.split(',').map(str => str.trim()),
            getter: value => value.join(',\n'),
        },
    },
};
