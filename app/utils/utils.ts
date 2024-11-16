import useBearStore from "./zustandStore";
const { setToken, authToken } = useBearStore();

export const isUserLoggedin = async (): Promise<boolean> => {
  try {
    if (authToken) {
      console.log("Token retrieved successfully:", authToken);
      return true;
    } else {
      console.log("No token stored");
      return false;
    }
  } catch (error) {
    console.error("Could not retrieve token", error);
    return false;
  }
};
