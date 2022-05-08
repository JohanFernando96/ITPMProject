import express from 'express';
import { getFeedbacks, addFeedback, getFeedbackById, editFeedback, deleteFeedback } from '../controller/feedbacks.controller.js';

const route = express.Router();

route.get('/', getFeedbacks);
route.post('/add', addFeedback);
route.get('/:id', getFeedbackById);
route.put('/:id', editFeedback);
route.delete('/:id', deleteFeedback);

export default route;