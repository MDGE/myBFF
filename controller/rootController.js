import Controller from './controller'
class RootController extends Controller {
    constructor(){
        super()
    }
    async actionIndex(ctx,next){
        // throw new Error('出现错误')
        ctx.body = await ctx.render('index',{
            name:'bai'
        })
    }
}
export default RootController