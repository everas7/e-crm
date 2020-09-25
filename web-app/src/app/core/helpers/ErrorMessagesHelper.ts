export const getControlErrorMessage = (control, label) => {
  const errors = { ...control.errors };
  console.log(errors);
  if (control.hasError('required')) {
    return `${label} is required`;
  }

  if (!errors.valid) {
    return `Please enter a valid ${label}`;
  }
};
