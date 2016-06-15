class AddressBookService
{
    constructor($http)
    {
        this._http=$http;
    }
    
    fetchContacts()
    {
       return this._http.get('http://localhost:3000/api/Contacts'); 
    }
    
    getContact(id)
    {
        return this._http.get('http://localhost:3000/api/Contacts/'+id);
        
    }
    saveUpdateContact(contact)
    {
        if(contact.id)
        {
          return this._http.put('http://localhost:3000/api/Contacts/'+ contact.id,contact);
        }
        else
        {   
            return this._http.post('http://localhost:3000/api/Contacts',contact);
        }
    }   
}

export default 
    ['$http',
      AddressBookService];