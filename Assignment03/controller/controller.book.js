const book=require('../db/models').Book;

//select * from books;
exports.findAllBook=(req,resp)=>{
    console.log("findAll "+book);
    if(book!==undefined){
    book.findAll()
    .then(data=>resp.send(data))
    .catch(err=>resp.status(500).send({ message: "No records found" }));
}else{
    resp.send("book is undefined");
}

}


//select * from books where bookName='Shiva Triology';
// exports.findByBookName=(req,resp)=>{
//     const bookName=req.params.bookName;
//     books.findAll({where: { "bookName": "Shiva" } })
//         .then(data=>{
//                 console.log(data);
//                 resp.send(data);
//             }).catch(err=>{
//                 resp.status(500).send({message:"500 server error"});    
//             });
// };
// //select * from books where id=1;
 exports.findByPK=(req,resp)=>{
//     // express.json() express.urlencoded()->body.id
  const id = req.params.id;
  book.findByPK(id)
  .then(data=>resp.send(data))
  .catch(err=>resp.status(500).send({ message: "No records found" }));

}
exports.insertBook=(req, resp)=>{
    const new_book={
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    book.create(new_book)
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to add record!" }));
}
exports.updateBook=(req, resp)=>{
    book.udpate({ authorName: req.body.authorName }, { where: { id: req.body.id } })
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to update record!" }));
}
exports.deleteBook=(req, resp)=>{
    book.destroy({ where: { id: req.params.id } })
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to delete record!" }));
}