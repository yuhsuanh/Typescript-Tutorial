/**
 * 
 * @param {number} contactId 
 * @returns 
 */
async function getContact(contactId) {
  //install jquery: npm i --save-dev @types/jquery
  const resp = await $.ajax({
    url: `/contact/${contactId}`,
    dataType: "json"
  });

  return {
    id: resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate)
  };
}

getContact(1).then((contact) => {
  contact.id = 1234;
  contact.birthDate = new Date("2022/08/16");
});

// ERROR: if type not match number
// getContact("2").then((contact) => {
//   contact.id = 2345;
//   contact.birthDate = new Date("2022/08/16");
// })