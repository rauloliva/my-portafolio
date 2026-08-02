import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "coverage/**",
      "jest.config.js"
    ],
  },

  // recommended JS and TypeScript rules
  js.configs.recommended,
  ...tsEslint.configs.recommended,

  // Next.js rules and support for JSX
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off", // allows require() in JS config files
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }
);