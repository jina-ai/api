# Jina API Schema

![API Schema](https://github.com/jina-ai/jina/workflows/API%20Schema/badge.svg)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)
[![Jina Docs](https://github.com/jina-ai/jina/blob/master/.github/badges/docs-badge.svg?raw=true  "Checkout our docs and learn Jina")](https://docs.jina.ai)

Every time [jina-ai/jina](https://github.com/jina-ai/jina) is updated or released, the schema of Jina command line interface is exposed to JSON and YAML files. They can be used or referred in the 3rd-party applications. For example, [our dashboard](https://dashboard.jina.ai) is using this schema to arrange UI elements. The schema is tagged with [the Jina's version](https://github.com/jina-ai/jina/blob/master/RELEASE.md#version-explained). 


## Jina CLI Schema

- [`https://api.jina.ai/latest`](https://api.jina.ai/latest) gives you the latest stable API schema (corresponds to the last Friday release) in JSON
- [`https://api.jina.ai/devel`](https://api.jina.ai/devel) gives you the latest development API schema (corresponds to the last master update of [jina-ai/jina](https://github.com/jina-ai/jina) in JSON

```bash
➜ curl https://api.jina.ai/devel

{"authors": "dev-team@jina.ai", "description": "Jina is the cloud-native neural search solution powered by state-of-the-art AI and deep learning technology", "docs": "https://docs.jina.ai", "license": "Apache 2.0", "methods": [{"name": "pod", "options": [{"choices": null, "default": null, "default_random": false, "help": "the name of this pea, used to identify the pod and its logs.", "name": "name", "option_strings": ["--name"], "required": false, "type": "str"},
```

You can specify the version and the schema format via:

```text
https://api.jina.ai/VER.json
https://api.jina.ai/VER.yml
```

where `VER` is [the Jina's version](https://github.com/jina-ai/jina/blob/master/RELEASE.md#version-explained), e.g. [`https://api.jina.ai/0.1.5.yml`](https://api.jina.ai/0.1.5.yml)


### Description

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


## Jina Hub Status

- [`https://api.jina.ai/hub/status`](https://api.jina.ai/hub/status) gives you the current status of the hub in JSON.
- [`https://api.jina.ai/hub/package`](https://api.jina.ai/hub/package) gives you details of each image in the hub

```bash

➜  curl https://api.jina.ai/hub/package
{"hub.executors.encoders.nlp.transformers-pytorc": {"ImageName": "hub.executors.encoders.nlp.transformers-pytorc", "ImageStatus": true, "LastBuildTime": "1589910798", "Inspect": {}, "ImageBuilds": {"1589905809": true, "1589905947": true, "1589906164": true, "1589906194": true, "1589907655": true, "1589908974": true, "1589909736": true, "1589910798": true}}, "hub.executors.encoders.nlp.transformers-hitscir": {"ImageName": "hub.executors.encoders.nlp.transformers-hitscir", "ImageStatus": true, "LastBuildTime": "1589911153", "Inspect": {}, "ImageBuilds": {"1589905810": true, "1589905937": true, "1589906166": true, "1589906195": true, "1589907392": true, "1589909184": true, "1589910233": true, "1589911153": true}}, "hub.executors.encoders.image.onnx_image_encoder": {"ImageName": "hub.executors.encoders.image.onnx_image_encoder", "ImageStatus": true, "LastBuildTime": "1589906197", "Inspect": {}, "ImageBuilds": {"1589905811": true, "1589905938": true, "1589906167": true, "1589906197": true}}, "hub.executors.encoders.image.torchvision-mobilenet_v2": {"ImageName": "hub.executors.encoders.image.torchvision-mobilenet_v2", "ImageStatus": true, "LastBuildTime": "1589911335", "Inspect": {}, "ImageBuilds": {"1589905818": true, "1589905942": true, "1589906170": true, "1589906193": true, "1589907089": true, "1589908579": true, "1589909976": true, "1589911335": true}}, "hub.examples.mwu_encoder": {"ImageName": "hub.examples.mwu_encoder", "ImageStatus": true, "LastBuildTime": "1589910831", "Inspect": {}, "ImageBuilds": {"1589905820": true, "1589905943": true, "1589906165": true, "1589906196": true, "1589906858": true, "1589908352": true, "1589910009": true, "1589910831": true}}}
```

### Description of `hub/status`

| Field | Description |
| --- | --- |
|`LastBuildTime` | the timestamp of the last build time |
|`LastBuildDuration` | the total elapsed time in second of the last build |
|`.LastBuildStatus{}` | the key-value pair with the name of the image (str) as key and success or not as value (bool) |
|`LastBuildReason` | the reason that why the builder started last time| 
|`.name`| `Hub Builder`   |
|`.revision`| VCS short commit tag for `hub-builder` |
|`.source`| `https://github.com/jina-ai/hub-builder/tree/{.revision}` |
|`.url`|  `https://jina.ai`  |
|`.vendor`|  `Jina AI Limited`  |
|`.version`| Jina version given by `jina -v`  |
|`.authors`|  `dev-team@jina.ai`  |
|`.description` |  `Jina is the cloud-native neural search solution powered by state-of-the-art AI and deep learning technology`  |
|`.docs`|  `https://docs.jina.ai`  |
|`.license`|   `Apache 2.0` |


### Description of `hub/package`

| Field | Description |
| --- | --- |
|`.{}` | the key-value pair indexed by the image name, the value is the build information of that image |
|`.{}.ImageName` | the name of the image |
|`.{}.LastBuildTime` | last build time of the image |
|`.{}.Inspect` | `docker inspect` of that image |
|`.{}.ImageBuilds{}` | the previous build status of that image, indexed by the image name (str) with timestamp as value (int)|
|`.name`| `Jina Hub` |
|`.revision`| VCS short commit tag for `jina-hub` |
|`.source`| `https://github.com/jina-ai/jina-hub/tree/{.revision}` |
|`.url`|  `https://jina.ai`  |
|`.vendor`|  `Jina AI Limited`  |
|`.version`| Jina version given by `jina -v`  |
|`.authors`|  `dev-team@jina.ai`  |
|`.description`|  `Jina is the cloud-native neural search solution powered by state-of-the-art AI and deep learning technology`  |
|`.docs`|  `https://docs.jina.ai`  |
|`.license`|   `Apache 2.0` |
