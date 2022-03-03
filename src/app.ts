import { PRODUCTION_PORT } from './common/constants';
import {App} from 'uWebSockets.js';

const app = App();

app.get("/", (res, req) => {
  res.write("Hello World!");
  res.end();
})

app.listen(PRODUCTION_PORT, () => console.log(`Server started on port ${PRODUCTION_PORT}`));
export const server = app;