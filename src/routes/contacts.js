import { Router } from 'express';
import {
  addContact,
  deleteContactById,
  fetchContactById,
  fetchContacts,
  editContactById,
} from '../controllers/contacts.js';
import { wrapController } from '../utils/wrapController.js';
import { validateContact } from '../middlewares/validateBody.js'; // Импортируем мидлвар для валидации контактов
import validateMongoId from '../middlewares/validateMongoId.js';

const router = Router();

router.get('/contacts', wrapController(fetchContacts));

router.get(
  '/contacts/:contactId',
  validateMongoId('contactId'), // Валидация MongoDB ID
  wrapController(fetchContactById),
);

router.post('/contacts', validateContact, wrapController(addContact)); // Добавляем мидлвар для валидации контактов

router.patch(
  '/contacts/:contactId',
  validateMongoId('contactId'), // Валидация MongoDB ID
  validateContact, // Добавляем мидлвар для валидации контактов
  wrapController(editContactById),
);

router.delete(
  '/contacts/:contactId',
  validateMongoId('contactId'), // Валидация MongoDB ID
  wrapController(deleteContactById),
);

export default router;
