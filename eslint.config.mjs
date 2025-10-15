// eslint.config.mjs — flat config for ESLint v9
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  // Ignore build artifacts
  {
    ignores: ["**/node_modules/**", "**/dist/**", ".turbo/**"],
  },

  // Base JS rules
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.node,
    },
  },

  // TypeScript rules (applies to .ts/.tsx only)
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: false, // fast, no type-aware lint
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Turn off stylistic conflicts; Prettier handles formatting
  prettier,
];
