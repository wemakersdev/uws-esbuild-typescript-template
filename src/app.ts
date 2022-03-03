import express from 'express'
import { IS_PROD, PRODUCTION_PORT } from './common/constants';

const app = express();


app.get("/", (req,res) => {
  res.send("Hello World!");
})

if (IS_PROD) {
  app.listen(PRODUCTION_PORT, () => console.log(`Server started on port ${PRODUCTION_PORT}`));
}

export const server = app;