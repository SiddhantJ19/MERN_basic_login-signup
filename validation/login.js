const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  var inputfield = '';
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks

  if (Validator.isEmpty(data.email) && Validator.isEmpty(data.username) ) {
    errors.email = "Email/Username field is required";
  } else if ( (!Validator.isEmail(data.email)) 
              && (!Validator.isAlphanumeric(data.username))) {
    errors.email = "Input is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.username)){inputfield='email';}
  else{inputfield='username';}
return {
    inputfield,
    errors,
    isValid: isEmpty(errors)
  };
}