oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
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
happy-cli/0.0.0 darwin-arm64 node-v16.15.0
$ happy --help [COMMAND]
USAGE
  $ happy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`happy hello PERSON`](#happy-hello-person)
* [`happy hello world`](#happy-hello-world)
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

## `happy hello PERSON`

Say hello

```
USAGE
  $ happy hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/dphuang2/happy-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `happy hello world`

Say hello world

```
USAGE
  $ happy hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ happy hello world
  hello world! (./src/commands/hello/world.ts)
```

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
