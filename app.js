import Koa from 'koa'
import render from 'koa-swig'
import co from 'co'
import staticServer from 'koa-static'
import log4js from "log4js"
import config from './config/env'
import ErrorHandler from './middleware/errorHandle'
import initController from './controller'
import {historyApiFallback} from 'koa2-connect-history-api-fallback'
const app = new Koa()
app.use(staticServer(config.staticDir))
app.use(historyApiFallback({
    index:"/",
    whiteList:["api","getList","booksList"]
}))
log4js.configure({
    appenders: { globalError: { type: "file", filename: "./log/error.log" } },
    categories: { default: { appenders: ["globalError"], level: "error" } }
});

const logger = log4js.getLogger("globalError")
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
ErrorHandler.error(app,logger)
initController(app)
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    varControls:['[[',']]']
}))
app.listen(config.port,()=>{
    console.log(`正在监听${config.port}端口`)
})