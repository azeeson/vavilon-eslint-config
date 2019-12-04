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
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"tsconfigRootDir": "."
	},
	// Плагин с наборами правил для TypeScript
	"plugins": ["@typescript-eslint"],
    "rules": {
        semi: ['error', 'always']
    }
};