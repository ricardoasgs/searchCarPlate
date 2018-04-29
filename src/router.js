import express from "express";
import {
  search
} from "./controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ok");
  });

  router.get("/search/:plate", search);

  export default router;