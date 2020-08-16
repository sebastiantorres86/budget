export const checkBudget = (budget, balance) => {
  let Class;

  if (budget / 4 > balance) {
    Class = "alert alert-danger";
  } else if (budget / 2 > balance) {
    Class = "alert alert-warning";
  } else {
    Class = "alert alert-success";
  }

  return Class;
};
