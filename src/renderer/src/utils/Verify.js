const regs = {
    email: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
    number: /^\+?[1-9][0-9]*$/ ,
    password: /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{8,}$/,
    version: /^[0-9\.]+$/
}

const verify = (rule,value,reg,callback) => {
    if(value) {
        if(reg.test(value)){
            callback();
        }else {
            callback(new Error(rule.message))
        }
    }else {
        callback();
    }
}

const checkPassword = (value) => {
    return regs.password.test(value);
}

const checkEmail = (value) => {
    return regs.email.test(value);
}

const password = (rule,value,callback) => {
    return verify(rule,value,regs.password,callback)
}

const number = (rule,value,callback) => {
    return verify(rule,value,regs.number,callback)
}

export default{
    checkPassword,
    checkEmail,
    password,
    number
}