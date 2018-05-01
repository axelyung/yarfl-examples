export const config = {
    name: {
        value: '',
        default: 'John Doe',
        rules: 'required',
    },
    password: {
        rules: 'required',
    },
    passwordConfirm: {
        rules: 'required|same:password'
    },
    email: {
        rules: 'required|email'
    },
    website: {
        rules: 'required|url'
    },
    age: {
        default: 18,
        rules: 'required|integer|min:18'
    },
    startDate: {
        rules: 'required|date'
    },
    favoriteThings: {
        rules: 'required|array',
        options: [
            'Raindrops on roses',
            'And whiskers on kittens',
            'Bright copper kettles and warm woolen mittens',
            'Brown paper packages tied up with strings',
        ]
    }
}