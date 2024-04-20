export const validateEmail = (email) =>{
    //expresion regular 
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidationMessage = 'Por favor ingresa un correo válido';
/* VALIDACION DE CORREO */

/* VALIDACION DE NOMBRE DE USUARIO */

export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const usernmaeValidationMessage = 'El nombre de usuario debe ser de entre 3 y 8 caracteres, sin espacios '

/* VALIDACION PARA PASSWORD*/

export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/;
    return regex.test(password);
}

export const passwordValidationMessage = 'La contraseña debe tener entre 6 a 12 caracteres, sin espacio';

/* VALIDACION PARA PASSWORDCONFIRM*/

export const validatePasswordConfirm = (password, passwordConfirm) =>{
    return password === passwordConfirm;
}

export const passwordConfirmValidationMessage = 'Las constraseñas no coinciden';
