module.exports = {
    transform: {
        '^.+\\\\\\\\.tsx?$': 'ts-jest',
    },
    presets:
        ['@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },]
};

