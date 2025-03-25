import express from "express";
import regionController from "../controllers/region.controller";

const router = express.Router();

router.get("/regions", regionController.getAllProvinces);
router.get("/regions/:id/province", regionController.getProvince);
router.get("/regions/:id/regency", regionController.getRegency);
router.get("/regions/:id/district", regionController.getDistrict);
router.get("/regions/:id/village", regionController.getVillage);
router.get("/regions-search/regency", regionController.findByCity);
router.get("/regions-search/district", regionController.findByDistrict);
router.get("/regions-search/village", regionController.findByVillage);

export default router;
