'use strict';
module.exports = function(app){
    var orderList = require('../controllers/apiController');

    app.route('/orders')
        .get(orderList.listAllOrders)
        .post(orderList.createOrder);

    app.route('/orders/:orderId')
        .get(orderList.readOrder)
        .put(orderList.updateOrder)
        .delete(orderList.deleteOrder)
}