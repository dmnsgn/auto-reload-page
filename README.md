# auto-reload-page

[![npm version](https://img.shields.io/npm/v/auto-reload-page)](https://www.npmjs.com/package/auto-reload-page)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/auto-reload-page)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/auto-reload-page)](https://bundlephobia.com/package/auto-reload-page)
[![dependencies](https://img.shields.io/librariesio/release/npm/auto-reload-page)](https://github.com/dmnsgn/auto-reload-page/blob/main/package.json)
[![types](https://img.shields.io/npm/types/auto-reload-page)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/auto-reload-page)](https://github.com/dmnsgn/auto-reload-page/blob/main/LICENSE.md)

Auto reload a page at a specified interval.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/auto-reload-page/main/screenshot.gif)

## Installation

```bash
npm install auto-reload-page
```

## Usage

```js
import autoReloadPage from "auto-reload-page";

// Open url in a separate window and reload every 10 seconds
autoReloadPage("https://www.ipcc.ch/", 10000);
```

## API

<!-- api-start -->

<a name="autoReloadPage"></a>

## autoReloadPage(url, [interval], [title])

Auto reload a page at a specified interval.

**Kind**: global function

| Param      | Type                | Default                                                            | Description                                    |
| ---------- | ------------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| url        | <code>string</code> |                                                                    | Url to be opened                               |
| [interval] | <code>number</code> | <code>60 \* 1000</code>                                            | Interval between each reload                   |
| [title]    | <code>string</code> | <code>&quot;\&quot;Page content auto reloading\&quot;&quot;</code> | An optional page title for the separate window |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/auto-reload-page/blob/main/LICENSE.md).
