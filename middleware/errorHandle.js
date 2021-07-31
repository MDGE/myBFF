class ErrorHandler {
    constructor(){
    }
    static error(app,logger){
        app.use(async (ctx,next)=>{
            try{
                await next()
                if(ctx.status === 404){
                    ctx.body = '404'
                }
            }catch(err){
                logger.error(err.message)
                ctx.body = `正在修复中...`
            }
        })
    }
}
module.exports = ErrorHandler