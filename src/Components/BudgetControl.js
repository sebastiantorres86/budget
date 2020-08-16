import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { checkBudget } from "../helpers";

const BudgetControl = ({ budget, balance }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>

      <div className={checkBudget(budget, balance)}>Balance: $ {balance}</div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default BudgetControl;
