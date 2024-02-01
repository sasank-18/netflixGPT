
const userValidation = (email, password) => {
    let arr=[];
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (!email.match(validRegex)) return "Email Id  is not valid"
    if (!password.match(paswd)) return "Password is not Valid"

    return null;


 
}

export default userValidation