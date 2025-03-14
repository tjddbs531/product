const conn = require('../mariadb'); //db모듈
const {StatusCodes} = require('http-status-codes'); 

//좋아요 추가
const addLike = (req,res) => {
     
     const {id} = req.params;  //사용자가 좋아요를 누른 책(book)의 ID입니다.
     const {user_id} = req.body;  //좋아요를 누른 사용자 ID입니다.

     let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
     let values = [user_id, id]
     conn.query(sql, values, 
        (err, results) => {
         if(err) {
             console.log(err);
             return res.status(StatusCodes.BAD_REQUEST).end(); 
         }

         return res.status(StatusCodes.OK).json(results);
     })
};

const removeLike = (req,res) => {
    //좋아요 취소(제거)
    const {id} = req.params;  //사용자가 좋아요를 누른 책(book)의 ID입니다.
     const {user_id} = req.body;  //좋아요를 누른 사용자 ID입니다.

     let sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
     let values = [user_id, id]
     conn.query(sql, values, 
        (err, results) => {
         if(err) {
             console.log(err);
             return res.status(StatusCodes.BAD_REQUEST).end(); 
         }

         return res.status(StatusCodes.OK).json(results);
     })
};

module.exports = {
    addLike,
    removeLike
};