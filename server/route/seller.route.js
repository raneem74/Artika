const express = require("express");
// const route = new express.Router();
const router = express.Router({ strict: true });
const controller = require("../controllers/seller.controller");

// route.post("/seller/update-orders", controller.updateOrders);
router.route("/seller").get(controller.GetAllSellers);
router
  .route("/seller/update-order-status")
  .put(controller.updateSellerOrderStatus);
// get all carts for all sellers

router
  .route("/seller/details/:sellerId")
  .get(controller.GetSellerById)
  .put(controller.editSellerById);

router
  .route("/seller/:sellerId")
  .get(controller.GetSellerOrders)
  .delete(controller.DeleteSellerById);

router.route("/seller/:sellerId/:state").get(controller.GetSellerOrdersByState);

router.get("/allpending", controller.getAllPendingSellers);
router.put("/sellerapprove/:id", controller.sellerApprove);
module.exports = router;
