## Initialize typescript

1. Install typescript globally on machine

```sh
npm i -g typescript
```
2. Check the version of typescript

```sh 
npm i tsc --v
```

3. Add typescript config file (tsconfig.json)

```sh
tsc init
```
### "target":"es5",
### "module": "commonjs",
### "rootDir": "./src",
### "moduleResolution": "node",
### "outDir": "./dist",
### "esModuleInterop": true,
### "forceConsistentCasingInFileNames": true,
### "strict": true, 
### "skipLibCheck": true

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

