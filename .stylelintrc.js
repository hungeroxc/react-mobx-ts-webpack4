module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss'],
    ignoreFiles: ['node_modules/**/*.scss', '**/*.md', '**/*.ts', '**/*.tsx', '**/*.js'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
}
