export const getStatusSeverity = (status) => {
  const statuses = {
    Registred: "info",
    Authorized: "warning",
    Completed: "success",
    Cancelled: "danger",
  };

  return statuses[status];
};

export const formatNumber = (number) => {
  const regex = /^([^\d]+|\d+[^0-9]|0+[1-9]\d*)$/; //все кроме целых неотрицательных чисел
  let newNumber = String(number);

  return newNumber.length === 1
    ? newNumber.replace(regex, "")
    : newNumber.slice(-newNumber.length, -1) +
        newNumber.slice(-1).replace(regex, "");
};
