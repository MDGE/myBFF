import Contorller from './controller'
import BooksModel from '../models/booksModel'
class BooksController {
    constructor(){

    }
    async actionBooksList(ctx,next){
        const booksModel = new BooksModel()
        const result = await booksModel.getBooksList()
        ctx.body = await ctx.render('books/booksList',{
            data:result.data
        })
    }
}
export default BooksController