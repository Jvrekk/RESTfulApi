'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Order');

exports.listAllOrders = (req,res) => {
    Order.find({}, (err, order) => {
        if(err)
            res.send(err);
        res.json(order)        
    });
};

exports.createOrder = (req, res) => {
    let newOrder = new Order(req.body);
    newOrder.save((err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.readOrder = (req, res) => {
    Order.findById(req.params.orderId, (err, order) => {
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.updateOrder = (req, res) => {
    Order.findByIdAndUpdate({_id: req.params.orderId}, req.body, {new: true}, (err, order) =>{
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.deleteOrder = (req, res) => {
    Order.remove({
        _id: req.params.orderId
    }, (err, order) => {
        if(err)
            res.send(err);
        res.json({message: 'Order successfully deleted'});
    });
};