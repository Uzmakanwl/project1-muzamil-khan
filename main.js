//nested objects
var carShop = { model1: { modelName: "ferray",
        features: "most advance tech ",
        price: 2.500000,
        pros: "elegant styling" },
    model2: { modelName: "BMW x1",
        features: "new features color chnges ",
        price: 4.2000000,
        pros: "other" }
};
// object
var personDetails = { firstName: "muzamil",
    lastName: "taswer khan",
    age: 21,
    nationality: "Pakistani",
    isMarried: false,
};
console.log(carShop);
console.log(carShop.model1);
console.log(carShop.model1.modelName);
console.log(carShop.model1.features);
console.log(carShop.model1.price);
console.log(carShop.model1.pros);
console.log(carShop.model2);
console.log(carShop.model2.modelName);
console.log(carShop.model2.features);
console.log(carShop.model2.price);
console.log(carShop.model2.pros);
// print object
console.log(personDetails);
// to access any specific detail in an object
console.log(personDetails.firstName);
console.log(personDetails.lastName);
console.log(personDetails.age);
console.log(personDetails.nationality);
console.log(personDetails.isMarried);
//array  and object in an object
var personInformation = { fullName: "muzamil",
    age: 21,
    CNIC: 87325263989380,
    religion: "Islam",
    degrees: ["matric", "intermediate", "graduate", "masters"],
    contact: { phoneNumber: 3333666,
        emailAddress: "muzamil2@gmail.com" }
};
console.log(personInformation);
console.log(personInformation.fullName);
console.log(personInformation.degrees);
console.log(personInformation.degrees[3]);
console.log(personInformation.contact);
console.log(personInformation.contact.emailAddress);
