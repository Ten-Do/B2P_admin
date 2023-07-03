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