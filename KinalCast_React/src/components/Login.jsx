import { useState } from 'react';
import { Input } from "./Input.jsx";
import { useLogin } from "../shared/hooks/useLogin.jsx";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from '../shared/validators/validator.js';

export const Login = ({ SwitchAuthAndler }) => {
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  });

  const isSubmitButtonDisable = !formData.email.isValid || !formData.password.isValid;

  const handleValueChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }));
  };

  const handleValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        isValid,
        showError: !isValid
      }
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.email.isValid && formData.password.isValid) {
      login(formData.email.value, formData.password.value);
    }
  };

  return (
    <div className="login-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <Input
          field='email'
          label='Email'
          value={formData.email.value}
          onChangeHandler={handleValueChange}
          type='email'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={handleValueChange}
          type='password'
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button disabled={isSubmitButtonDisable}>LOGIN</button>
      </form>
      <span onClick={SwitchAuthAndler}>
        ¿No tienes una cuenta? ¡Crea una acá!
      </span>
    </div>
  );
};