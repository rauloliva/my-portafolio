import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  // 1. Archivos y carpetas ignorados
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

  // 2. Reglas recomendadas de JS y TypeScript
  js.configs.recommended,
  ...tsEslint.configs.recommended,

  // 3. Reglas de Next.js y soporte para JSX
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
      "@typescript-eslint/no-require-imports": "off", // Permite require() en archivos JS y de configuración
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