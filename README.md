## Initialize typescript

1. Install typescript ts-node and globally on machine

```sh
npm i -g typescript ts-node
```
2. Check the version of typescript

```sh 
tsc --v
```

3. Add typescript config file (tsconfig.json)

```sh
tsc init
```
Then rename

"target": "es5",

 "module": "commonjs",

 "rootDir": "./src",

 "moduleResolution": "node",

 "outDir": "./dist",

 "esModuleInterop": true,

 "forceConsistentCasingInFileNames": true,

 "strict": true, 
 
 "skipLibCheck": true
 

## Initialize node project

```sh
npm init --y
```

## Required packages

1. Install dependencies

```sh
npm i express dotenv cors mongoose
```

2. Install dev dependencies

```sh
npm i -D nodemon typescript ts-node @types/node @types/express
```

## Prettier installation


```sh
 npm i -D eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-config-airbnb-base @typescript-eslint/eslint-plugin @typescript-eslint/parser
```