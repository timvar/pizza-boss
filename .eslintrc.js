module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  "rules": {
    'semi': ["error", "always"],

    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "selfClosingTag": "always"
      }
    ],
    "class-methods-use-this": 0,
    "max-len": [
      "error",
      {
        "code": 300,
        "comments": 300
      }
    ],

    "no-underscore-dangle": 0,
    "no-unused-vars": [
      "warn",
      {
        "vars": "local"
      }
    ],
    "no-return-await": "error",
    "no-console": 0,
    "no-shadow": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "function-paren-newline": 0,
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true
      }
    ],
    "no-trailing-spaces": "error",
    "vue/max-attributes-per-line": [
      2,
      {
        "singleline": 5,
        "multiline": {
          "max": 3,
          "allowFirstLine": false
        }
      }
    ]
  }
}
