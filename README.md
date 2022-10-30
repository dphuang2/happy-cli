# happy-cli

CLI for dash.gethappy.dev

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://www.npmjs.com/package/@gethappy/cli)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://www.npmjs.com/package/@gethappy/cli)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/dphuang2/happy-cli/blob/master/package.json)

<!-- toc -->
* [happy-cli](#happy-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @gethappy/cli
$ happy COMMAND
running command...
$ happy (--version)
@gethappy/cli/0.0.8 darwin-arm64 node-v16.15.0
$ happy --help [COMMAND]
USAGE
  $ happy COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`happy deploy`](#happy-deploy)
* [`happy help [COMMAND]`](#happy-help-command)

## `happy deploy`

Deploy to dash.gethappy.dev

```
USAGE
  $ happy deploy

DESCRIPTION
  Deploy to dash.gethappy.dev

EXAMPLES
  $ happy deploy
```

_See code: [dist/commands/deploy.ts](https://github.com/dphuang2/happy-cli/blob/v0.0.8/dist/commands/deploy.ts)_

## `happy help [COMMAND]`

Display help for happy.

```
USAGE
  $ happy help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for happy.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_
<!-- commandsstop -->
