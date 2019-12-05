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
        "plugin:react/recommended"
    ],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"tsconfigRootDir": "."
	},
	// Плагин с наборами правил для TypeScript
	"plugins": ["react", "@typescript-eslint"],
    "rules": {
        "no-console": "warn",
        "eol-last": ["error", "always"],
        "linebreak-style": ["error", "unix"],
        "semi": ['error', 'always'],
        // I - у интерфесов
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/interface-name-prefix": ["error", {
            "prefixWithI": "always",
            "allowUnderscorePrefix": false
        }]
    }
};