module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
    "extends": [
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
        "plugin:import/typescript"
    ],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"tsconfigRootDir": "."
	},
	// Плагин с наборами правил для TypeScript
	"plugins": ["react", "@typescript-eslint", "import"],
    "rules": {
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
        "import/order": ["error", {"groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
        ]}],
        "import/dynamic-import-chunkname": [2, {
            "importFunctions": ["dynamicImport"],
            "webpackChunknameFormat": "[a-zA-Z0-57-9-/_]+"
        }],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error"
    }
};