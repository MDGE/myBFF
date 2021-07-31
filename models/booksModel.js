import SafeRequest from '../utils/safeRequest'
class BooksModel {
    getBooksList(){
        return SafeRequest.fetch('http://localhost/mvc/basic/web/index.php?r=xoxo')
    }
}
export default BooksModel