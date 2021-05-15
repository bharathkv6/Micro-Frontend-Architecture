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

Run each of these projects on separate terminals.

### Container
```bash
npm run serve
```
Runs on
```bash
http://localhost:3000/
```

![image](https://user-images.githubusercontent.com/35251709/118372908-80e1b500-b5d1-11eb-831f-7a03f19b1f56.png)


### MicroFrontEnd1
```bash
npm run serve
```
Runs on
```bash
http://localhost:3001/
```

![image](https://user-images.githubusercontent.com/35251709/118372877-4a0b9f00-b5d1-11eb-9e42-c149bbae6373.png)


### MicroFrontEnd2
```bash
npm run serve
```
Runs on
```bash
http://localhost:3002/
```

![image](https://user-images.githubusercontent.com/35251709/118372906-758e8980-b5d1-11eb-80a8-8fa89a32a818.png)


## Result
The components in MicroFrontEnd1 and MicroFrontEnd2 are being used in Container. This is achieved using webpack's [**ModuleFederationPlugin**](https://webpack.js.org/concepts/module-federation/).

Refer to the [article](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669) written by the creator of ModuleFederationPlugin himself

![image](https://user-images.githubusercontent.com/35251709/118372913-8a6b1d00-b5d1-11eb-9af4-a8a1f18a8893.png)


