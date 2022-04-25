# 🔧 기술 스택

<table>
  <thead>
    <tr>
      <th>백엔드</th>
      <th>RDBMS</th>
      <th>Formatter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NestJS</td>
      <td>PostgresSQL</td>
      <td>Prettier</td>
    </tr>
  </tbody>
<table>

```json
{
  "name": "picktoon",
  "version": "0.0.1",
  "description": "All about Webtoons",
  "author": "Seongtae",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "dependencies": {
    "@nestjs/common": "^8.0.0",
    "@nestjs/config": "^2.0.0",
    "@nestjs/core": "^8.0.0",
    "@nestjs/jwt": "^8.0.0",
    "@nestjs/passport": "^8.2.1",
    "@nestjs/platform-express": "^8.0.0",
    "@nestjs/typeorm": "^8.0.3",
    "@types/passport-jwt": "^3.0.6",
    "bcryptjs": "^2.4.3",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.13.2",
    "config": "^3.3.7",
    "cross-env": "^7.0.3",
    "joi": "^17.6.0",
    "mysql2": "^2.3.3",
    "passport": "^0.5.2",
    "passport-jwt": "^4.0.0",
    "pg": "^8.7.3",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.2.45",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@nestjs/cli": "^8.0.0",
    "@nestjs/schematics": "^8.0.0",
    "@nestjs/testing": "^8.0.0",
    "@types/express": "^4.17.13",
    "@types/jest": "27.4.1",
    "@types/node": "^16.0.0",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.2.5",
    "prettier": "^2.3.2",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "^27.0.3",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "^3.10.1",
    "typescript": "^4.3.5"
  },
  "jest": {
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": ["**/*.(t|j)s"],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
```

# 📦 디렉토리

🗂Picktoon  
┣📂config  
┃  
┣📂src  
┃┠📂auth  
┃┠📂boards  
┃┠📂config  
┃┠📄app.module.ts  
┃┗📄main.ts  
┃  
┣📄.eslintrc.js  
┣📄.gitignore  
┣📄.prettierrc  
┣📄nest-cli.json  
┣📄package-lock.json  
┣📄package.json  
┣📄README.md  
┣📄tsconfig.build.json  
┗📄tsconfig.json

# ⚙ 구현 기능

추가 예정
