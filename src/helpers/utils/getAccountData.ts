import { getCookie } from "../Cookie";

/**
 * Needle examples
 * agencyId
 */
export const getAccountData = (needle: string) => {

  const {VITE_ACCOUNT_DATA} = import.meta.env;
  if (!VITE_ACCOUNT_DATA) throw Error("account data env not found!");

  let accountDataString = getCookie(VITE_ACCOUNT_DATA);
  if (accountDataString) {
    let accountData = JSON.parse(accountDataString);
    return accountData[needle];
  }

  return "";
};
