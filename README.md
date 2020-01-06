# React App Template

Fully-baked React Application with all the scaffolding and build toolchain. 

- React 16.x
- React Router 4.x

This is mostly for my own projects as I like my apps more streamlined and slimmed down but if you want a more sophistacted scaffolding app feel free to check out [Create React App](https://github.com/facebook/create-react-app) or [Gatsby](https://www.gatsbyjs.org/).

# Dependencies

This project encourages the use of exact versions in dependencies. As such, all dependencies listed in `package.json` file use exact versions and explicitly pull out devDependencies.

# Webpack Build Configuration

The project is fully configured to use [Webpack 4](https://webpack.js.org/) contains the minimal toolchain set to build all necessary components:

- Compiles SCSS files and compresses into 1 file
- Creates separate vendor and application bundle
- Includes hashes in filename output
- Copies static assets over to `dist` output

## Webpack Plugins 

The project is fully setup and configured to use the following plugins:

- [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) - Separates out vendor and application dependencies but can be further separated as desired.
- [HtmlWebPackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - Minimal configuration, uses defaults.
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - Pulls out CSS and minifies files and configured for hot reloading of SCSS changes.

In addition, the project is properly configured to use the following loaders for resolution in `devMode` and `production`:

- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [resolve-url-loader](https://github.com/bholloway/resolve-url-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [file-loader](https://github.com/webpack-contrib/file-loader)

# Tests

This project uses Jest for testing React components and uses [manual mocks](https://jestjs.io/docs/en/manual-mocks) to mock out test files and compiled styles in the `__mocks__` directory.

# Styles

This project is setup for development using Sass (or SCSS) in the `styles` directory. The global style elements are preset with reasonable defaults for responsive web development and can be extended to add grid layouts as needed.

# Other Configuration

- Uses `babel` with a target of ES6 and React presets
- Configuerd `eslint` with recommended plugins for Airbnb and React settings
- Prettier configuration included in `.prettierrc` file

