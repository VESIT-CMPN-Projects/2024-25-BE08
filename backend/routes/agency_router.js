import express from 'express';
import agencyController from '../controller/agency_controllers.js';
import userController from '../controller/user_controllers.js';
import contourController from '../controller/contour_controller.js';
const agencyRouter = express.Router();

agencyRouter.post("/login");
agencyRouter.post("/signup");
agencyRouter.post("/floopMapping", agencyController.checkGEEInitialized, agencyController.fetchFloodMapping);
agencyRouter.post("/floodMapping/image", agencyController.checkGEEInitialized, agencyController.getSentinel1VVVH);

agencyRouter.get("/volunteer-fetch", userController.fetchVolunteerData);


agencyRouter.post('/fetch-contour-lines', agencyController.checkGEEInitialized, contourController
    .fetchContourLines);
agencyRouter.post('/fetch-contour-image', agencyController.checkGEEInitialized, contourController
    .fetchContourImage);


agencyRouter.get("/reports", agencyController.getDisasterReports);     // Disaster reports from the Local Public


export default agencyRouter;
