module.exports = {
    plugins: ['simple-import-sort'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:astro/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    globals: {
        astroHTML: true,
    },
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ['*.astro'],
            // Allows Astro components to be parsed.
            parser: 'astro-eslint-parser',
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
    ],
}
