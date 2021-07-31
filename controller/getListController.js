import Controller from './controller'
class GetListController extends Controller{
    constructor(){
        super()
    }
    async getList(ctx,next){
        ctx.body = [1,2,3,4]
    }
}
export default GetListController