class ContactDetailController
{
    constructor($stateParams,AddContactsService) 
    {  this.service=AddContactsService;
        if($stateParams.id) {
            this.service.getContact($stateParams.id).then(response=>{this.contact=response.data;});
        }
    }
    
    saveUpdate()
    {
       this.service.saveUpdateContact(this.contact).then(response=>{this.contacts=response.data;});   
    }
}

export default
    ['$stateParams',
    'AddContactsService',    
    ContactDetailController
    ];
