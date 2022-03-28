// TODO: find a way to enforce readonly equivalent to tslint-immutable/readonly-keyword
// TODO: detect whether this is a react project
module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
  rules: {
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "react/prop-types": ["error", { ignore: ["children"] }],
    "import/default": ["error"],
    "import/export": ["error"],
    "import/group-exports": ["warn"],
    "import/namespace": ["error"],
    "import/newline-after-import": ["warn"],
    "import/no-duplicates": ["warn"],
    "import/no-named-as-default": ["warn"],
    "import/no-named-as-default-member": ["warn"],
    "import/no-unresolved": ["error"],
    "import/no-useless-path-segments": ["warn"],
    "import/order": ["warn"],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        semi: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true,
            },
          },
        ],
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
        "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
        "@typescript-eslint/no-for-in-array": ["error"],
      },
    },
    {
      files: ["**/*.scss.d.ts"],
      rules: {
        "import/group-exports": ["off"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
};
