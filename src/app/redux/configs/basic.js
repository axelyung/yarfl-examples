export const basicConfig = {
    name: 'basicForm',
    extra: {
        title: 'Basic Form',
        subtitle: 'A basic example of a form with different input/data-types with global/field-level validation.',
    },
    customRules: [
        {
            name: 'mustBeReact',
            callback: value => value.toString().toLowerCase() === 'react',
            message: "This isn't the best frontend framework!",
        },
    ],
    fields: {
        name: {
            value: '',
            default: 'John Doe',
            rules: 'required',
        },
        password: {
            type: 'password',
            rules: 'required',
        },
        passwordConfirm: {
            type: 'password',
            rules: 'required|same:password',
        },
        email: {
            type: 'email',
            rules: 'required|email',
        },
        website: {
            rules: 'required|url',
        },
        age: {
            default: 18,
            rules: 'required|integer|min:18',
        },
        birthday: {
            type: 'date',
            rules: 'required|date',
        },
        operatingSystem: {
            rules: 'required',
            type: 'radio',
            options: ['linux', 'mac', 'windows'],
        },
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
        termsAndConditions: {
            type: 'checkbox',
            rules: 'accepted',
            extra: {
                checkboxText: 'I accept the terms and conditions.',
            },
        },
    },
};
