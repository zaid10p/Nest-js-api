# NestJs REST API tutorial for FreeCodeCamp

## API with JWT and Refresh token implementation

### Run the API in development mode

```javascript
yarn install
yarn db:dev:restart // start postgres in docker and push migrations
yarn start:dev // start api in dev mode

```

### Run Prisma

```javascript
npx prisma migrate dev // to run migrations to prisma

npx prisma db push // push schema to sync with studio
npx prisma studio  // run studio UI
```
