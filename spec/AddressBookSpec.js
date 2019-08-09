describe('Address Book', function(){
    it('Should be able to add a contact', function() {
        var addressBook = new AddressBook();
        var thisContacts = new Contact();
        addressBook.addContact(thisContacts);
        expect(addressBook.getContact(0)).toBe(thisContacts);
    });
    it('Should be able to delete a contact', function() {
        var addressBook = new AddressBook();
        var thisContacts = new Contact();
        addressBook.addContact(thisContacts);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    })
})