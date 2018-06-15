if (localStorage.getItem("contacts")) {
    const contacts = localStorage.getItem("contacts");
    console.log(contacts);
    contacts.sort(function (a, b) {
        return a.id - b.id;
    });
    const maxId = contacts[contacts.length - 1].id;
} else {
    const contacts = []
}

const idGenerator = function* (startFrom = 0) {
    let newId = (maxId ? maxId + 1 : 1)

    while (true) {
        yield startFrom + newId
        newId++
    }
}

const uuidMaker = idGenerator()

const contactFactory = (lastName, firstName, address, phoneNumber) => {
    const newContact = Object.create(null, {
        "id": {
            value: uuidMaker.next().value
        },
        "lastName": {
            value: name,
            enumerable: true
        },
        "firstName": {
            value: name,
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
        newContact = newContact(lastName, firstName, address, phoneNumber);
        contacts.push(newContact);
        localStorage.setItem("contacts", contacts);
    },
    removeContact: function (id) {
        contacts.forEach((element, index, array) => {
            if (element.id === id) {
                array.pop(element);
                localStorage.setItem("contacts", contacts);
            }
        });
    },
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