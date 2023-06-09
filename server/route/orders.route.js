const express = require("express");
const router = express.Router({ strict: true });
const controller = require("../controllers/orders.controller");
const {
  updateOrderValidationRules,
  searchOrderValidationRules,
  validate,
} = require("../middlewares/validation.mw");

router
  .route("/order")
  .get(controller.GetAllOrders)
  .put(updateOrderValidationRules(), validate, controller.UpdateOrder);

router
  .route("/order/:id")
  .get(searchOrderValidationRules(), validate, controller.GetOrderByCustId);

//router.route("/orderState/:state").get(controller.GetOrderByState);
//router.route("/orderState/:id/:state").get(controller.GetOrderByCustIdAndState);

module.exports = router;
