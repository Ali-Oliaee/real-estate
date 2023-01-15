export const useValidators = () => {
  const requiredNumber = {
    required: true,
    message: 'لطفا شماره تلفن خود را وارد کنید',
  };
  const validNumber = {
    min: 10,
    max: 10,
    message: 'شماره تلفن باید 10 رقمی باشد',
  };
  const requiredNewPassword = {
    required: true,
    message: 'لطفا رمز عبور جدید را وارد کنید',
  };
  const requiredCode = {
    required: true,
    message: 'لطفا کد ارسالی را وارد کنید',
  };
  const validCode = {
    min: 6,
    max: 6,
    message: 'کد ارسالی باید 6 رقمی باشد',
  };
  const requiredEmail = {
    required: true,
    message: 'لطفا ایمیل خود را وارد کنید',
  };
  const validEmail = {
    type: 'email',
    message: 'لطفا یک ایمیل معتبر وارد کنید',
  };
  const requiredPassword = {
    required: true,
    message: 'لطفا کلمه عبور خود را وارد کنید',
  };
  const requiredConfirmPassword = {
    required: true,
    message: 'لطفا تکرار کلمه عبور را وارد کنید',
  };
  const requiredName = { required: true, message: 'لطفا نام خود را وارد کنید' };
  const requiredField = { required: true, message: 'این فیلد اجباری است' };
  const validConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value)
        return Promise.resolve();
      return Promise.reject(new Error('رمز عبور با تکرار آن مطابقت ندارد'));
    },
  });

  return {
    requiredNumber,
    validNumber,
    requiredNewPassword,
    requiredCode,
    validCode,
    requiredEmail,
    validEmail,
    requiredPassword,
    requiredConfirmPassword,
    requiredName,
    requiredField,
    validConfirmPassword,
  };
};
