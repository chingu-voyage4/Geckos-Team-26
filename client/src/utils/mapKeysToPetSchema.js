const mapKeysToPetSchema = object => {
  const schemaNames = {
    Name: "petName",
    Avatar: "petAvatar",
    Species: "species",
    Breed: "breed",
    Born: "dob",
    Description: "description",
    Sex: "sex",
    Neutered: "neutered"
  };
  let newObj = {};

  for (key of Object.keys(object)) {
    newObj[schemaNames[key]] = object[key];
  }
  return newObj;
};

export default mapKeysToPetSchema;