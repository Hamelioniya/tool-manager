const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 5) {
            errors.name = 'Must be at least 5'
    } else if (values.name.length > 150){
            errors.name = 'Must be less than 150'
    }

    if (!values.type) {
        errors.type = 'Required'
    }

    if (!values.location) {
        errors.location = 'Required'
    }
  
    return errors;
};
  
export default validate;