# happy-cli

CLI for dash.gethappy.dev

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [happy-cli](#happy-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g happy-cli
$ happy COMMAND
running command...
$ happy (--version)
happy-cli/0.0.2 darwin-arm64 node-v16.15.0
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
* [`happy plugins`](#happy-plugins)
* [`happy plugins:install PLUGIN...`](#happy-pluginsinstall-plugin)
* [`happy plugins:inspect PLUGIN...`](#happy-pluginsinspect-plugin)
* [`happy plugins:install PLUGIN...`](#happy-pluginsinstall-plugin-1)
* [`happy plugins:link PLUGIN`](#happy-pluginslink-plugin)
* [`happy plugins:uninstall PLUGIN...`](#happy-pluginsuninstall-plugin)
* [`happy plugins:uninstall PLUGIN...`](#happy-pluginsuninstall-plugin-1)
* [`happy plugins:uninstall PLUGIN...`](#happy-pluginsuninstall-plugin-2)
* [`happy plugins update`](#happy-plugins-update)

## `happy deploy`

Deploy to dash.gethappy.dev

```
USAGE
  $ happy deploy [-f]

FLAGS
  -f, --dev

DESCRIPTION
  Deploy to dash.gethappy.dev

EXAMPLES
  $ happy deploy
```

_See code: [dist/commands/deploy.ts](https://github.com/dphuang2/happy-cli/blob/v0.0.2/dist/commands/deploy.ts)_

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

## `happy plugins`

List installed plugins.

```
USAGE
  $ happy plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ happy plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.5/src/commands/plugins/index.ts)_

## `happy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ happy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ happy plugins add

EXAMPLES
  $ happy plugins:install myplugin 

  $ happy plugins:install https://github.com/someuser/someplugin

  $ happy plugins:install someuser/someplugin
```

## `happy plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ happy plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ happy plugins:inspect myplugin
```

## `happy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ happy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ happy plugins add

EXAMPLES
  $ happy plugins:install myplugin 

  $ happy plugins:install https://github.com/someuser/someplugin

  $ happy plugins:install someuser/someplugin
```

## `happy plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ happy plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ happy plugins:link myplugin
```

## `happy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ happy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ happy plugins unlink
  $ happy plugins remove
```

## `happy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ happy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ happy plugins unlink
  $ happy plugins remove
```

## `happy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ happy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ happy plugins unlink
  $ happy plugins remove
```

## `happy plugins update`

Update installed plugins.

```
USAGE
  $ happy plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
