export const gettingData = (phone, result) => {
  if (phone.length === (11 || 12)) {
    for (let i = 0; i < result.length; i++) {
      if (phone === result[i].telephone) {
        return result[i].balances;
      }
    }
  } else {
    for (let i = 0; i < result.length; i++) {
      if ((phone || "+7" + phone || "8" + phone) === result[i].telephone) {
        return result[i].balances;
      }
    }
  }
  return false;
};
