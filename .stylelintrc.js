module.exports = {
    extends: 'stylelint-config-standard',
    ignoreFiles: [
        'node_modules/**/*.scss',
        '**/*.md',
        '**/*.ts',
        '**/*.tsx',
        '**/*.js'
    ],
    rules: {
        'indentation': 4,
        'at-rule-no-unknown': false
    }
}
