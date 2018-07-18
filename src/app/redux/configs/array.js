export const arrayConfig = {
    name: 'arrayForm',
    extra: {
        title: 'Form with array fields',
        subtitle: 'Use the add/delete buttons to change the number of users.',
    },
    fields: {
        users: {
            multiple: true,
            fields: {
                name: {
                    rules: 'required',
                },
                email: {
                    type: 'email',
                    rules: 'required|email',
                },
                age: {
                    type: 'number',
                    rules: 'required|integer|min:0',
                },
            },
        },
    },
};
