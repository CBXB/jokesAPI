const mongoose = require("mongoose");
const Joke = require("../models/joke.model");



module.exports.findAllJokes = (req, res) => {

    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Did not work!", error: err}));
};

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Did not work!", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Did not work!", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    console.log(req.body)
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ user: updatedJoke }))
        .catch(err => res.json({ message: "Did not work!", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    console.log(req.body);
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Did not work!", error: err }));
};