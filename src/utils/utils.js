export const getStatusSeverity = (status) => {
  switch (status) {
    case "Registred":
      return "info";

    case "Authorized":
      return "warning";

    case "Completed":
      return "success";

    case "Cancelled":
      return "danger";

    default:
      return "danger";
  }
};

export const formatNumber = (number) => {
  const regex = /^([^\d]+|\d+[^0-9]|0+[1-9]\d*)$/; //все кроме целых неотрицательных чисел
  let newNumber = String(number);

  return newNumber.length === 1
    ? newNumber.replace(regex, "")
    : newNumber.slice(-newNumber.length, -1) +
        newNumber.slice(-1).replace(regex, "");
};
