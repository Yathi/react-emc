module.exports = {
  "extends": "airbnb",
  "env": {
    browser: true,
    "es6": true
  },
  "settings": {
    "ecmascript": 6,
    "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
        "experimentalDecorators": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": 0
  }
};