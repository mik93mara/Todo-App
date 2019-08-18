const koa = require("koa");
const koaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
const render = require("koa-ejs");
const views = require("./api/views");
const api = require("./api/api");
var bodyParser = require('koa-bodyparser');

const app = new koa();
const router = new koaRouter();

// json middleware
app.use(json());
// body parser middleware
app.use(bodyParser());

// app template configuration
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false,
});

// templates routes & api routes
router.get("/", views.index);
router.get("/add", views.add);
router.get("/todos", api.getToDos);
router.post("/add", api.addToDo);
router.post("/toggle", api.toggleToDo);
router.delete("/add", api.deleteToDo);

// router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server Started @ port 3000!"));