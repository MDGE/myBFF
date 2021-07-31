import Router from '@koa/router'

import RootController from './rootController'
import GetListController from './getListController'
import BooksController from './booksController'
const router = new Router()
const rootController = new RootController()
const getListController = new GetListController()
const booksController = new BooksController()
function initController(app){

    router.get('/',rootController.actionIndex)
    router.get('/getList',getListController.getList)
    router.get('/booksList',booksController.actionBooksList)

    app.use(router.routes())
    .use(router.allowedMethods())
}
export default initController