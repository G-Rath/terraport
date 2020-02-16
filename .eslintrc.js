module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    createDefaultProgram: false,
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: { node: true },
  plugins: [
    '@typescript-eslint', //
    'prettier',
    'eslint-comments'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        typedefs: false,
        functions: true,
        variables: false
      }
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_|props'
      }
    ],
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/generic-type-naming': [
      'error',
      '^T([A-Z0-9][a-zA-Z0-9]*){0,1}$|^[A-Z]{1}$'
    ],
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/member-naming': [
      'warn',
      {
        private: '^_',
        protected: '^_'
      }
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/camelcase': ['error', { allow: ['child_process'] }],
    'eslint-comments/no-unused-disable': 'error',
    'no-var': 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-sparse-arrays': 'error',
    'no-param-reassign': 'error',
    'no-ex-assign': 'error',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-with': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-nested-ternary': 'error',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-this-before-super': 'off',
    'prefer-arrow-callback': 'warn',
    'newline-before-return': 'error',
    'curly': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'default-case': 'error',
    'radix': 'error',
    'dot-notation': 'error',
    'consistent-this': ['error', 'self'],
    'yoda': 'error',
    'new-cap': ['error', { capIsNewExceptions: ['Callsite'] }],
    'semi': ['off', 'always'],
    'spaced-comment': [
      'warn',
      'always',
      {
        markers: ['=', '#region'],
        exceptions: ['#endregion']
      }
    ],
    'camelcase': 'off'
  }
};
