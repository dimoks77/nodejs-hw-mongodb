// src/controllers/contacts.js
import {
    addNewContact,
    removeExistingContact,
    getAllContacts,
    getContactById,
    editContact,
  } from '../services/contacts.js';
  import createHttpError from 'http-errors';
  
  export const fetchContacts = async (req, res) => {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: res.statusCode,
      message: 'Contacts successfully retrieved!',
      data: contacts,
    });
  };
  
  export const fetchContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
  
    if (!contact) {
      next(createHttpError(404, `Contact with id '${contactId}' not found`));
      return;
    }
  
    res.status(200).json({
      status: res.statusCode,
      message: `Contact with id '${contactId}' found!`,
      data: contact,
    });
  };
  
  export const addContact = async (req, res) => {
    const contact = await addNewContact(req.body);
  
    res.status(201).json({
      status: 201,
      message: 'Contact successfully created!',
      data: contact,
    });
  };
  
  export const editContactById = async (req, res, next) => {
    const { contactId } = req.params;
  
    const result = await editContact(contactId, req.body);
  
    if (!result) {
      next(createHttpError(404, `Contact with id ${contactId} not found`));
      return;
    }
  
    res.status(200).json({
      status: 200,
      message: `Contact with id '${contactId}' updated!`,
      data: result.data,
    });
  };
  
  export const deleteContactById = async (req, res, next) => {
    const { contactId } = req.params;
  
    const result = await removeExistingContact(contactId);
  
    if (!result) {
      next(createHttpError(404, `Contact with id ${contactId} not found`));
      return;
    }
  
    res.status(204).send();
  };