/* eslint-disable */
const mapPetSchemaToKeys = object => {
  const schemaNames = {
    id: "id",
    petName: "Name",
    petAvatar: "Avatar",
    species: "Species",
    breed: "Breed",
    dob: "Born",
    description: "Description",
    sex: "Sex",
    neutered: "Neutered"
  };
  const newObj = {};

  for (const key of Object.keys(object)) {
    newObj[schemaNames[key]] = object[key];
  }
  return newObj;
};

export default mapPetSchemaToKeys;
