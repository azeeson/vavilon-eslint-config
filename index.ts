import {
    Linter
} from 'eslint';

// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

// export = {
//     parser: '@typescript-eslint/parser',
//     parserOptions: { sourceType: 'module' },
//     plugins: ['@typescript-eslint'],
//   };

const config: Linter.BaseConfig = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // Базовый набор правил eslint
        "eslint:recommended",
        // Отключаем правила из базового набора
        "plugin:@typescript-eslint/eslint-recommended",
        // Базовые правила для TypeScript
        "plugin:@typescript-eslint/recommended",
        // Правила TS, требующие инфо о типах
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        require('./rules/no-constructor-bind'),
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "tsconfig.json",
        "tsconfigRootDir": "."
    },
    // Плагин с наборами правил для TypeScript
    plugins: ["react", "@typescript-eslint", "import"],
    rules: {
        "no-console": "warn",
        "eol-last": ["error", "always"],
        "linebreak-style": ["error", "unix"],
        "semi": ['error', 'always'],
        // I - у интерфесов
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/interface-name-prefix": ["error", {
            "prefixWithI": "always",
            "allowUnderscorePrefix": false
        }],
        "sort-imports": "off",
        "import/order": ["error", {
            "groups": [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index"
            ]
        }],
        "import/dynamic-import-chunkname": [2, {
            "importFunctions": ["dynamicImport"],
            "webpackChunknameFormat": "[a-zA-Z0-57-9-/_]+"
        }],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "keyword-spacing": "error",
        "object-curly-spacing": ["error", "never"],
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "args": "after-used",
            "argsIgnorePattern": "^_"
        }]
    }
}

module.exports = config;