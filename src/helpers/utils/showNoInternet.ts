import { hasInternetConnection } from "./hasInternetConnection";

export const showNoInternet = () => {
  let element = document.getElementById("no-internet-preview");
  try {
    if (element) {
      if (!hasInternetConnection()) {
        element.classList.add("no-internet");
      } else {
        element.classList.remove("no-internet");
      }
    }
  } catch (error) {
    console.log({
      from: "no internet preview",
      data: error,
    });
  }
};
