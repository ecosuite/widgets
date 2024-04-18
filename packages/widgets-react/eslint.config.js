// @ts-check

import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
  },
  {
    files: ["*.js"],
    ...typescriptEslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/", "storybook-static/"],
  },
);
