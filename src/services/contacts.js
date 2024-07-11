// src/services/contacts.js
import { Contact } from '../db/models/contacts.js';

export const getAllContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const addNewContact = (data) => Contact.create(data);

export const editContact = async (contactId, data, options = {}) => {
  const result = await Contact.findOneAndUpdate({ _id: contactId }, data, {
    new: true,
    ...options,
  });

  if (!result) return null;

  return {
    data: result,
  };
};

export const removeExistingContact = (contactId) =>
  Contact.findOneAndDelete({ _id: contactId });