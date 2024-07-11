const mongoose = require('mongoose');
const Book = require('../models/bookModel');

// add new book
async function addbook (req,res){
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};

// get all books
async function getbooks(res,res){
    try {
        const result = await Book.find();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error);
    }
};

// update a book
async function updatebook(req,res){
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};

// delete a book
async function deletebook(req,res){
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        return res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

// add review to book
async function addreview(req,res,){
    try {
        const book = await Book.findById(req.params.id);
        
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        const review = {
            userid: req.params.id,
            review: req.body.review,
            rating: req.body.rating
        };
        console.log(req.body);
        book.reviews.push(review);
        await book.save();
        
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

// get all reviews
async function getreview(req,res){
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {addbook, getbooks, updatebook, deletebook, addreview, getreview};