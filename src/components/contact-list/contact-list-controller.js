class ContactListController {
    constructor(AddContactsService) {
     
    AddContactsService.fetchContacts().then(response=>{this.contacts=response.data;});
        
    }
}

export default [
    'AddContactsService',    
    ContactListController
];
