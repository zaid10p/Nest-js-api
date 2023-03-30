# NestJs REST API tutorial for FreeCodeCamp

## API with JWT and Refresh token implementation

### Run the API in development mode(STEPS)

```javascript
1. yarn install
2. yarn db:dev:restart // start postgres in docker and runs migrations in prisma
3. yarn start:dev // start nest api in dev mode

```

### Run Prisma Studio

```javascript
npx prisma migrate dev // to run migrations to prisma

npx prisma db push // push schema to sync with studio
npx prisma studio  // run studio UI
```
