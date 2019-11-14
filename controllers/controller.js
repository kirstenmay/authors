const mongoose = require('mongoose');
const MongModels = require('../models/model');

const Author = MongModels.Author;

module.exports = {
    allAuthors: function(req, res) {
        Author.find()
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "error", result: err }))
    },
    oneAuthor: function(req, res) {
        Author.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "error", result: err }))
    },
    newAuthor: function(req, res) {
        let author = req.body;
        Author.create(author)
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "error", result: err }))
    },
    editAuthor: function(req, res) {
        Author.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "error", result: err }))
    },
    removeAuthor: function(req, res) {
        Author.remove({ _id: req.params.id })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "error", result: err }))
    }
}