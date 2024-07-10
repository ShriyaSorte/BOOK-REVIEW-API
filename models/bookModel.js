const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    bcreatedby:{type: String, required: false},
    bmodifiedby:{type: String, required: false},
    bcreatedat:{type: Date, required: false},
    bmodifiedat:{type: Date, required: false},
    reviews:[
        {
            userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: {type: String, required: true},
            rating: {type: Number, required: true}
        }
    ]
});

const book = mongoose.model('Book', bookSchema);

module.exports = book;