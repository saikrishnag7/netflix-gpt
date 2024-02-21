export const validate = (email,password) =>{
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passValidate = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    // const nameValidate = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(name);
    if(!emailValidate) return ("Email is not valid");
    if(!passValidate) return ("Password is not valid");
    // if(!nameValidate) return ("User Name is not valid");
    return(null);


}
