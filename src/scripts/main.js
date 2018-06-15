//console.log(contacts);

const contacts = require("./contactCollection")

console.log(contacts.getContacts());

contacts.addContact("Sawyer", "Tom", "Maple Street", "5345938495");
contacts.addContact("Thompson", "Sue", "Birch Street", "3069582759");
contacts.addContact("Hardy", "Greg", "Fir Street", "3759206395");

console.log(contacts.getContacts());

contacts.removeContact(1);
contacts.removeContact(2);

console.log(contacts.getContacts());