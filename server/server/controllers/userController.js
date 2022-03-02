const router = require("../routes/user")
const mysql = require('mysql');



const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
    port           : process.env.DB_PORT
});

//creating view
exports.viewall = (req,res) => {
   // res.render('home');

    //connect to  DB
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        console.log('connected as ID '+ connection.threadId);
        
        //use the connection 
        connection.query('select * from user ',(err,rows)=> {
            //where status="active
            //when done with the connection,release it
            connection.release();
            console.log(rows.length);
            if(!err) {
                //res.send({message : "VIEW API"},rows );
                res.json(rows)
               // res.status(200).send({rows});
                
            }
            else {
                console.log(err);
            }
            //console.log("the data user table :\n",rows);
        })
    })
}
//find user by search
exports.find = (req,res) =>{

    //connect to  DB
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        //console.log('connected as ID '+ connection.threadId);
        
        const searchTerm = req.params.search;
        console.log(searchTerm);
        //const{first_name,last_name,email,phone,comment }= req.body;
        //use the connection 
                connection.query('select * from user where first_name like ? or last_name like ?',['%'+searchTerm+'%','%'+searchTerm+'%'],(err,rows)=> {
                    //when done with the connection,release it
                    connection.release();
        
                    if(!err) {
                        res.json(rows);
                    }
                    else {
                        console.log(err);
                    }
                    console.log("the data after searching in search  :\n",rows);     
        })

    }) 
}
//add new user

exports.create=(req,res)=>{ //adduser
       const{first_name,last_name,email,phone,comment }= req.body;
       pool.getConnection((err,connection)=>{
        if(err) console.log(err);
       // console.log('connected as ID '+ connection.threadId);
        
       // let search = req.body.search;
       console.log("hello mayank");

        //use the connection 
        connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comment = ?', [first_name, last_name, email, phone, comment], (err, rows) => {
            //when done with the connection,release it
            connection.release();

            if(!err) {
                res.status(200).send({ message:'useradded successfully'});
            }
            else {
                console.log(err);
            }
           console.log("the data of adduser  :\n",rows);
        })
    })       
}


exports.update = (req,res)=> {
    const{first_name,last_name,email,phone,comment }= req.body;
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        console.log('connected as ID '+ connection.threadId); 
        connection.query('update user set first_name = ? ,last_name = ?,email=?,phone=?,comment=? where id=?',[first_name,last_name,email,phone,comment,req.params.id],(err,rows)=> {
            if(!err) {
                pool.getConnection((err,connection)=>{
                    if(err) console.log(err);
                    console.log('connected as ID '+ connection.threadId);
                    connection.query('select * from user where id =?',[req.params.id],(err,rows)=> {
                        connection.release();
                        if(!err) {
                            res.status(200).send({ message:`Id -${req.params.id} has been updated.`,rows });
                        }
                        else {
                            console.log(err);
                        }
                        console.log("the data update table :\n",rows);
                    })
                })
            }
            else {
                console.log(err);
            }
            console.log("the data user table :\n",rows);
        })
    })
}
exports.delete =(req,res)=> {
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        console.log('connected as ID '+ connection.threadId);
        connection.query('delete  from user where id =?',[req.params.id],(err,rows)=> {
            connection.release();

            if(!err) {
                res.send({message:`user with id ${req.params.id} Deleted`});
            }
            else {
                console.log(err);
            }
            console.log("the data delete user table :\n",rows);
        })
    })
}
exports.view =(req,res)=> {
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        //console.log('connected as ID '+ connection.threadId);
        connection.query('select * from user where id =?',[req.params.id],(err,rows)=> {
            connection.release();
            if(!err) {
                //res.status(200).send({rows});
                res.json(rows)
            }
            else {
                console.log(err);
            }
            console.log("the data view user table :\n",rows);
        })
    })
}

exports.edit =(req,res)=> {
    pool.getConnection((err,connection)=>{
        if(err) console.log(err);
        console.log('connected as ID '+ connection.threadId); 
        connection.query('select * from user where id =?',[req.params.id],(err,rows)=> {
            connection.release();
            if(!err) {
                res.status(200).send({rows});
            }
            else {
                console.log(err);
            }
            console.log("the data edit-user table :\n",rows);
        })
    })
}

exports.form =(req,res)=>{
    console.log("clicked");
    //res.render('adduser');
}