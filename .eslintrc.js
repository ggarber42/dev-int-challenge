// http://eslint.org/docs/user-guide/configuring

module.exports = {
     root: true,
     parserOptions: {
       parser: 'babel-eslint',
       sourceType: 'module'
     },
     env: {
       browser: true
     },
     // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
     extends: ['standard', 'plugin:vue/essential', 'standard-jsdoc'],
     // required to lint *.vue files
     plugins: ['vue'],
     // add your custom rules here
     rules: {
       // allow paren-less arrow functions
       'arrow-parens': 0,
       // allow async-await
       'generator-star-spacing': 0,
       'no-new': 0,
       // allow debugger during development
       'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
       // disable jsdoc descriptions rule
       'jsdoc/require-returns-description': 0,
       'jsdoc/require-property-description': 0,
       'jsdoc/require-param-description': 0,
       // vue component name usage
       'vue/component-name-in-template-casing': [
         'error',
         'PascalCase',
         {
           registeredComponentsOnly: true,
           ignores: []
         }
       ],
       // vue self-closing tag
       'vue/html-self-closing': [
         'error',
         {
           html: {
             void: 'never',
             normal: 'always',
             component: 'always'
           },
           svg: 'always',
           math: 'always'
         }
       ],
       // vue max attributes per line
       'vue/max-attributes-per-line': ['error', {
         singleline: 1,
         multiline: {
           max: 1,
           allowFirstLine: false
         }
       }],
       // html ident for template tags
       'vue/html-indent': ['error', 2, {
         attribute: 1,
         baseIndent: 1,
         closeBracket: 0,
         alignAttributesVertically: true,
         ignores: []
       }],
       'vue/html-closing-bracket-newline': ['error', {
         singleline: 'never',
         multiline: 'always'
       }]
     },
     overrides: [
       {
         files: ['*.test.js', '*.spec.js'],
         rules: {
           'no-unused-expressions': 'off'
         }
       }
     ]
   }
