import React, { Fragment, useState } from "react"; // imr + TAB
import Error from "./Error";
import PropTypes from "prop-types";

// sfc + TAB
const Ask = ({ saveBudget, saveBalance, updateQuestion }) => {
  // Define the State
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  // Function that reads the budget
  const definebudget = (e) => {
    saveAmount(parseInt(e.target.value, 10));
  };

  // Submit to define the budget
  const addBudget = (e) => {
    e.preventDefault();

    // Validate
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
    }

    // If validation passes
    else {
      saveError(false);
      saveBudget(amount);
      saveBalance(amount);
      updateQuestion(false);
    }
  };

  return (
    <Fragment>
      <h2>Load your budget here</h2>

      {error ? <Error message="The Budget is incorrect" /> : null}

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Load your budget here"
          onChange={definebudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>
    </Fragment>
  );
};

Ask.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveBalance: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default Ask;
