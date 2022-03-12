const express     = require('express');
const router = express.Router();
const moonjin = require('../models/moonjin');

// GET ALL 
router.get('/moonjins', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    moonjin.find(function(err, moonjins){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(moonjins);
    })
});

// GET SINGLE : 폰번호로 가져오기
router.get('/moonjins/:user_phone', function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    moonjin.findOne({user_phone: req.params.user_phone}, function(err, moonjin){
        if(err) return res.status(500).json({error: err});
        if(!moonjin) return res.status(404).json({error: 'moonjin not found'});
        res.json(moonjin);
    })
});

// 문진표 추가
router.post('/moonjins', function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    var mj = new moonjin();
    mj.user_phone = req.body.user_phone;
    mj.checkup_place = req.body.checkup_place;
    mj.user_name = req.body.user_name;
    mj.user_birthday = req.body.user_birthday;
    mj.user_gender = req.body.user_gender;
    mj.Q1 = req.body.Q1;
    mj.Q2 = req.body.Q2;
    mj.Q3 = req.body.Q3;
    mj.Q4 = req.body.Q4;
    mj.Q5 = req.body.Q5;

    if(req.body.reg_date == null){
        mj.reg_date = new Date();
    }else{
        mj.reg_date = new Date(req.body.reg_date);
    } 
    
    mj.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});
    });
});

// GET BOOK BY AUTHOR
/***
router.get('/books/author/:author', function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
        if(err) return res.status(500).json({error: err});
        if(books.length === 0) return res.status(404).json({error: 'book not found'});
        res.json(books);
    })
}); */


// UPDATE THE BOOK
/**
router.put('/books/:book_id', function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Book.update({ _id: req.params.book_id }, { $set: req.body }, function(err, output){
        if(err) res.status(500).json({ error: 'database failure' });
        console.log(output);
        if(!output.n) return res.status(404).json({ error: 'book not found' });
        res.json( { message: 'book updated' } );
    })
}); */

// DELETE BOOK
/**
router.delete('/books/:book_id', function(req, res){
    Book.remove({ _id: req.params.book_id }, function(err, output){
        if(err) return res.status(500).json({ error: "database failure" });

        res.status(204).end();
    })
}); */

module.exports = router;