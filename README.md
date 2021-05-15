# Micro Frontend Architecture

Micro Frontend Architecture implementation

## Installation

Install the dependencies

```bash
npm install
```

## Usage

There are 3 independent code repositories
1. Container
2. MicroFrontEnd 1
3. MicroFrontEnd 2


### Container
Runs on
```bash
http://localhost:3000/
```

### MicroFrontEnd1
Runs on
```bash
http://localhost:3001/
```

### MicroFrontEnd2
Runs on
```bash
http://localhost:3002/
```

## Result
The components in MicroFrontEnd1 and MicroFrontEnd2 are being used in Container. This is achieved using webpack's [**ModuleFederationPlugin**](https://webpack.js.org/concepts/module-federation/).

Refer to the [article](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669) written by the creator of ModuleFederationPlugin himself