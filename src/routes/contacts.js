// src/routers/contacts.js
import { Router } from 'express';
import {
  addContact,
  deleteContactById,
  fetchContactById,
  fetchContacts,
  editContactById,
} from '../controllers/contacts.js';
import { wrapController } from '../utils/wrapController.js';
import validateId from '../middlewares/isValidId.js';

const router = Router();

router.get('/contacts', wrapController(fetchContacts));

router.get(
  '/contacts/:contactId',
  validateId,
  wrapController(fetchContactById),
);

router.post('/contacts', wrapController(addContact));

router.patch(
  '/contacts/:contactId',
  validateId,
  wrapController(editContactById),
);

router.delete(
  '/contacts/:contactId',
  validateId,
  wrapController(deleteContactById),
);

export default router;