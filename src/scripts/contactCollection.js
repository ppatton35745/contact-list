const checkStorage = () => {

    const contacts = {};
    const storedData = localStorage.getItem("contacts");

    if (storedData) {
        const storedContacts = JSON.parse(storedData);
        storedContacts.sort(function (a, b) {
            return a.id - b.id;
        });
        contacts.array = storedContacts;
        contacts.maxId = parseInt(storedContacts[storedContacts.length - 1].id);
    } else{
        contacts.array = [];
        contacts.maxId = 1;
    }

    return contacts;
}

const initialContacts = checkStorage();

const maxId = initialContacts.maxId;
let contacts = initialContacts.array;


const idGenerator = function* (startFrom = 0) {
    let newId = maxId;

    while (true) {
        yield startFrom + newId
        newId++
    }
}

const uuidMaker = idGenerator()

const makeContact = (lastName, firstName, address, phoneNumber) => {
    const newContact = Object.create(null, {
        "id": {
            value: uuidMaker.next().value
        },
        "lastName": {
            value: lastName,
            enumerable: true
        },
        "firstName": {
            value: firstName,
            enumerable: true
        },
        "address": {
            value: address,
            enumerable: true
        },
        "phoneNumber": {
            value: phoneNumber,
            enumerable: true
        }
    })

    return newContact
}

const contactCollection = {
    addContact: function (lastName, firstName, address, phoneNumber) {
        const newContact = makeContact(lastName, firstName, address, phoneNumber);
        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    },
    removeContact: function (id) {
        //const result = words.filter(word => word.length > 6);
        const newContactsArray = contacts.filter(element => element.id !== id);
        contacts = newContactsArray;
        localStorage.setItem("contacts", JSON.stringify(contacts));
    },
    // filter
    getContactById: function (id) {
        contacts.forEach((element, index, array) => {
            if (element.id === id) {
                return element;
            }
        });
    },
    getContacts: function () {
        return contacts;
    }
}


module.exports = contactCollection;