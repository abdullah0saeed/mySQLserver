const express = require("express");
const router = express.Router();
const {
  insertPerson,
  insertCourse,
  insertProject,
  insertHobby,
  insertApp,
  insertLanguage,
  insertSite,
} = require("../controllers/insert");

router.post("/person", insertPerson);
router.post("/course", insertCourse);
router.post("/project", insertProject);
router.post("/hobby", insertHobby);
router.post("/app", insertApp);
router.post("/language", insertLanguage);
router.post("/site", insertSite);

module.exports = router;
