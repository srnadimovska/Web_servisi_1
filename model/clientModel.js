const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'You must enter client name'],
        minlength:[ 2, 'Name is too short!'],
        maxlength:[ 50, 'Name is too long!'], 
    },
    email: {
        type: String,
        required: [true, 'You must enter an email!'],
        unique: [true],
    },
    address: {
        type: String,
        required: [true],

    },
    city: {
        type: String,
        required: [true],
    },

    state: {
        type: String,
        required: [true, 'Please enter your state!'],
    },

    phonenumber: {
        type: String,
        required: [true, 'Please enter your phone number!'],
        minlength:[ 2, 'Phonenumber is too short!'],
        maxlength:[ 20, 'Phonenumber is too long!'],
    },

    paymentMethod: {
        type: String,
        enum: ["cash", "card", "bank transfer"],
        required: [true, 'Please enter your payment method!'],
    },

    bank: {
        type: String,
        required: [true, 'Please enter your bank!'],
    },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
