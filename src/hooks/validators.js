export const useValidators = () => {
  const requiredUsername = {
    required: true,
    message: "لطفا نام کاربری خود را وارد کنید",
  }
  const requiredPassword = {
    required: true,
    message: "لطفا کلمه عبور خود را وارد کنید",
  }
  const requiredName = { required: true, message: "لطفا نام خود را وارد کنید" }
  const requiredField = { required: true, message: "این فیلد اجباری است" }

  return {
    requiredUsername,
    requiredPassword,
    requiredName,
    requiredField,
  }
}
