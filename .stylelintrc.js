export default {
  "plugins": [
    "stylelint-prettier"
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  "ignoreFiles": [
    "node_modules/**/*",
    "src/index.css"
  ],
  "rules": {
    "prettier/prettier": true,
  }

}