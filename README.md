# React Gen CLI

Generate component, interceptor, translator and service for your react app.

### Getting started

Install package globally using npm `npm install -g react-gen-cli`. After that you will be able to use `rgc` command.

Generators
---

#### Component

Use `rgc component <name>` or `rgc c <name>` where's `<name>` is your component name.

List of flags
- `--style <type>` or `-s <type>` change style extensions. Default value is `scss`.
- `--functional` or `-f` make functional component.
- `--connected` or `-c` make your component connected to store.

#### Interceptor

Use `rgc interceptor <name>` or `rgc i <name>` where's `<name>` is your interceptor name.

#### Translator

Use `rgc translator <name>` or `rgc t <name>` where's `<name>` is your translator name.

#### Service

Use `rgc service <name>` or `rgc s <name>` where's `<name>` is your service name.
