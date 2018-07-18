export const asyncConfig = {
    name: 'asyncForm',
    extra: {
        title: 'Form with async validation',
        subtitle: 'Try entering \'username\'.',
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
        userName: {
            rules: 'required|userName',
        },
    },
};
