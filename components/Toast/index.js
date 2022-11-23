import { ToastAndroid } from "react-native";
export const connectionErrorToast = () => {
  ToastAndroid.show(
    "Error Ocurred, Please check your internet connection and try again later!",
    ToastAndroid.SHORT
  );
};
export const formErrorToast = () => {
  ToastAndroid.show("Please fill up the form!", ToastAndroid.SHORT);
};
export const updateSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Profile has been updated!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const successToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Submitted Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const usernameErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Username is already existed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const loginSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Logged In Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const passwordErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Confirm password mismatch!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const registerSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Registered Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const loginErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Wrong credentials, Please try again!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const sessionErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Session Expired, Please try again!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
