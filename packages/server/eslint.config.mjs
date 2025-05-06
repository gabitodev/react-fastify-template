import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  {
    ignores: ['.node_modules/', '.build/', '.dist/'],
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.node,
    },
    rules: {
      eqeqeq: 'error',
    },
  },
  eslintConfigPrettier,
);
