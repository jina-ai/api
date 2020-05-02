# Jina API Schema

![API Schema](https://github.com/jina-ai/jina/workflows/API%20Schema/badge.svg)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)
[![Jina Docs](https://github.com/jina-ai/jina/blob/master/.github/badges/docs-badge.svg?raw=true  "Checkout our docs and learn Jina")](https://docs.jina.ai)

The schema of Jina command line interface exposed as JSON and YAML files. They can be used and refered in the 3rd-party applications. The schema is tagged with version given by `jina -v`. This repository is maintained by [jina-bot](https://github.com/jina-bot), it gets updated everytime jina-ai/jina is updated or released.

## Schema URL

You can directly download or use GET request on

```text
https://api.jina.ai/VER.json
https://api.jina.ai/VER.yml
```

where VER is Jina version, e.g. [`https://api.jina.ai/0.1.5.yml`](https://api.jina.ai/0.1.5.yml)

## Description

| Field | Description |
| --- | --- |
|`.methods[]`|  All subcommands under `jina` |
|`.methods[].name`|  The name of the subcommand  |
|`.methods[].options[]`|  All arguments of a subcommand  |
|`.methods[].options[].choices[]`| If it is non-empty list, then the value of this argument must be one of which |
|`.methods[].options[].default`| Default value, when not given, then default is a Python `None` |
|`.methods[].options[].default_random`|  If `true`, then the `default` is random value that changes on each run. In this case you tell the user `default` is just a random valid value, not a fixed value  |
|`.methods[].options[].help`| Help text of that option  |
|`.methods[].options[].name`|  The name of the argument  |
|`.methods[].options[].option_strings[]`|  The argument name in CLI, often starts with `--`  |
|`.methods[].options[].required`|  If this option is required  |
|`.methods[].options[].type`|  The Python type of this option  |
|`.name`| `Jina`   |
|`.revision`| VCS short commit tag |
|`.source`| `https://github.com/jina-ai/jina/tree/{.revision}` |
|`.url`|  `https://jina.ai`  |
|`.vendor`|  `Jina AI Limited`  |
|`.version`| Jina version given by `jina -v`  |
|`.authors`|  `dev-team@jina.ai`  |
|`.description`|  `Jina is the cloud-native neural search solution powered by state-of-the-art AI and deep learning technology`  |
|`.docs`|  `https://docs.jina.ai`  |
|`.license`|   `Apache 2.0` |
