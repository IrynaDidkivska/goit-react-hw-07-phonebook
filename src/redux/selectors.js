export const selectContacts = state => state.contact.contacts.items; // повертає список контактів із стейту
export const selectIsLoading = state => state.contact.contacts.isLoading;
export const selectError = state => state.contact.contacts.error;
export const selectFilter = state => state.contact.filterValue; // повертає фільтр із стейту
