export const generateContact = (contactId) => {
  return Promise.resolve(
    `Ashu-Contact-${contactId} - ${Math.floor(Math.random() * 100)}`
  );
};
