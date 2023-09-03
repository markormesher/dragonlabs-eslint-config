module.exports = {
  // plugins to use and core rule sets we're extending from
  plugins: ["@typescript-eslint", "prettier", "react", "import"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],

  // core setup + options
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/*.scss.d.ts"],

  // actual rules
  rules: {
    // overrides to prettier:recommended
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        semi: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],

    // enable some stricter rules on import/export formatting
    "import/group-exports": ["warn"],
    "import/newline-after-import": ["warn"],
    "import/no-useless-path-segments": ["warn"],
    "import/order": ["warn"],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      rules: {
        // the no-unresolved rule doesn't understand the fully-specified *.js paths for TS ES modules
        // unresolvable paths will cause parser and compiler errors anyway, so we can turn off the rule
        "import/no-unresolved": "off",

        // prefer types over interfaces
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],

        // assert a stricter naming convention
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "should", "has", "can", "did", "will"],
          },
        ],
      },
    },
  ],
};
