'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "type name"
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type:[{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default:['pending']
    }
});

module.exports = mongoose.model('Order', OrderSchema);