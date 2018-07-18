import { countryCodes } from './country-codes';


export const reactSelectConfig = {
    name: 'reactSelectForm',
    customRules: [
        {
            name: 'mustBeReact',
            callback: (value) => {
                return value.toString().toLowerCase() === 'react';
            },
            message: "This isn't the best frontend framework!",
        },
    ],
    fields: {
        frontend: {
            rules: 'required|mustBeReact',
            type: 'select',
            options: ['React', 'Angular 2+', 'Vue', 'Angular.JS', 'Ember', 'Knockout'],
        },
        backend: {
            rules: 'array',
            type: 'select',
            multiple: true,
            options: ['express', 'koa', 'hapi', 'sails', 'adonis', 'loopback', 'nest'],
        },
        countries: {
            type: 'select',
            extra: {
                reactSelectLoadOptions: (searchString, callback) => {
                    if (!searchString) {
                        callback(null, {
                            complete: true,
                            options: countryCodes.map(({ name }) => ({ label: name, value: name })),
                        });
                    }
                    let options = countryCodes
                        .filter(({ name }) => name.toLowerCase().substr(0, searchString.length) === searchString)
                        .map(({ name }) => ({ label: name, value: name }));
                    setTimeout(() => {
                        callback(null, {
                            options,
                            complete: options.length <= countryCodes.length,
                        });
                    }, 700);
                },
            },
        },
    },
};
