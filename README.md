# auto-reload-page [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/auto-reload-page.svg)](https://www.npmjs.com/package/auto-reload-page)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Auto reload a page at a specified interval.

## Installation

```bash
npm install auto-reload-page
```

[![NPM](https://nodei.co/npm/auto-reload-page.png)](https://nodei.co/npm/auto-reload-page/)

## Usage

```js
const autoReloadPage = require("auto-reload-page");

// Open url in a separate window and reload every 10 seconds
autoReloadPage("https://www.ipcc.ch/", 10000);
```

## API

| Option        | Description                                    |    Type     |
| :------------ | :--------------------------------------------- | :---------: |
| **url**       | Url to be opened                               |   string    |
| **interval?** | Interval between each reload                   | number (ms) |
| **title?**    | An optional page title for the separate window | number (ms) |

## License

MIT. See [license file](https://github.com/dmnsgn/auto-reload-page/blob/master/LICENSE.md).
