const FormValidation = (values) => {
    const errors = {};
  
    if (!values.firstName || values.firstName === "") {
      errors.firstName = "First name is mandatory!";
    }
  
    if (!values.lastName || values.lastName === "") {
      errors.lastName = "Last name is mandatory!";
    }
  
    if (!values.age || values.age === "") {
      errors.age = "Age is mandatory!";
    }
  
    if (!values.photo || values.photo === "") {
      errors.photo = "Photo is mandatory!";
    }
  
    return errors;
  };
  
  export default FormValidation;
  