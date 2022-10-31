# happy-cli

CLI for dash.gethappy.dev

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
@gethappy/cli/0.0.10 darwin-arm64 node-v16.15.0
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

_See code: [dist/commands/deploy.ts](https://github.com/dphuang2/happy-cli/blob/v0.0.10/dist/commands/deploy.ts)_

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
