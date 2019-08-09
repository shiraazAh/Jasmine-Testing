describe('Address Book', function(){

    var addressBook,
        thisContacts;

    beforeEach(function() {
        addressBook = new AddressBook();
        thisContacts = new Contact();
    })

    it('Should be able to add a contact', function() {
        addressBook.addContact(thisContacts);
        expect(addressBook.getContact(0)).toBe(thisContacts);
    });
    
    it('Should be able to delete a contact', function() {
        addressBook.addContact(thisContacts);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async Address Book', function() {

    var addressBook = new AddressBook();

    beforeEach(function(done){
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('Should grab initial Contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
})