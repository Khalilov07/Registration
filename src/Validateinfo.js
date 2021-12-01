export default function validateInfo(valuse) {
    let errors = {}

    if(!valuse.username.trim()) {
        errors.username = "Username required"
    }

    // email
    if (!valuse.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(valuse.email)) {
        errors.email = 'Email address is invalid';
      }
    if(!valuse.password) {
        errors.password = "Password in required"
    }else if (valuse.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    if(!valuse.password2) {
        errors.password2 = "Password is required"
    }else if (valuse.password2 !== valuse.password) {
        errors.password2 = "Passwords do not match"
    }

    return errors;
}