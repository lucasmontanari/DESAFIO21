import { Application, Router, Context, helpers } from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
    const req = helpers.getQuery(ctx, { mergeParams: true })
    const palabras = req.frase.split(/[\s,]+/)    
  ctx.response.status = 200;
  ctx.response.body = `
  <!DOCTYPE html>
  <html>
    <head><title>DESAFIO 21</title><head>
    <body>
      <h1 style="color: red;">${palabras.reverse().join(' ')}</h1>
    </body>
  </html>
  `;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
console.log("Server listening http:127.0.0.1:8080");
