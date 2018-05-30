const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';


    if (!Validator.isLength(data.text, {
            min: 8,
            max: 300
        })) {
        errors.text = 'Post must be betwn 8 to 300 char'
    }

    if (Validator.isLength(data.text)) {
        errors.text = 'text field reqd'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};