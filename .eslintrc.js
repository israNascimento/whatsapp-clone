module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "max-len": ["error", 80 ],
        "no-console": 0,
        "global-require": 0,
        "react/forbid-prop-types": [['array', 'object']],
    },
    "parser": "babel-eslint",
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".ios.js", ".android.js"]
          }
        }
    }
};