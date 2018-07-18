export const partitionedConfig = {
    name: 'partitionedForm',
    extra: {
        title: 'Partitioned Form',
        subtitle: 'Split validation into seperate parts of the form. In this example the next form section is disabled until the previous one passes validation',
    },
    customRules: [
        {
            name: 'mustBe',
            callback: (value, requirement) => value === requirement,
            message: "This isn't the best frontend framework!",
        },
    ],
    fields: {
        personalInfo: {
            fields: {
                name: {
                    value: '',
                    default: 'John Doe',
                    rules: 'required',
                },
                email: {
                    type: 'email',
                    rules: 'required|email',
                },
                website: {
                    rules: 'required|url',
                },
            },
        },
        security: {
            fields: {
                password: {
                    type: 'password',
                    rules: 'required',
                },
                passwordConfirm: {
                    type: 'password',
                    rules: 'required|same:security.password',
                },
            },
        },
        tech: {
            fields: {
                operatingSystem: {
                    rules: 'required',
                    type: 'radio',
                    options: ['linux', 'mac', 'windows'],
                },
                frontend: {
                    rules: 'required|mustBe:React',
                    type: 'select',
                    options: [
                        'React',
                        'Angular 2+',
                        'Vue',
                        'Angular.JS',
                        'Ember',
                        'Knockout',
                    ],
                },
                backend: {
                    rules: 'array',
                    type: 'select',
                    multiple: true,
                    options: [
                        'express',
                        'koa',
                        'hapi',
                        'sails',
                        'adonis',
                        'loopback',
                        'nest',
                    ],
                },
            },
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
