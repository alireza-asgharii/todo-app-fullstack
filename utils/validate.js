export const signupValidate = (form) => {
  const error = {};
  const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  if (form.email.trim() === "") {
    error.email = true;
  } else if (!emailRegx.test(form.email)) {
    error.email = true;
  } else {
    delete error.email
  }

  if (form.password.trim() === "") {
    error.password = true;
  } else if (form.password.length < 6) {
    error.password = true;
  } else {
    delete error.password
  }

  return error;
};
