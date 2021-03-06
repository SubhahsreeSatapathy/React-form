export default function validateInfo(values){
    let errors={};

    if (!values.username.trim()){
        errors.username="Username can not be blank"
    }
    
    if(!values.email){
        errors.email="Email can not be blank"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password="Password is required"
    }
    else if(values.password.length<6){
        errors.password="Password needs to be at least of 6 characters"
    }

    if(!values.password2){
        errors.password2="Password is required"
    }else if(values.password2!==values.password){
        errors.password2="Passwords do not match"
    }
    return errors;
}