import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ saveExpense, saveCreateExpense }) => {
  const [name, saveName] = useState("");
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  // When the user adds an expense
  const addExpense = (e) => {
    e.preventDefault();

    // Validate
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      saveError(true);
      return;
    } else {
      saveError(false);
    }

    // Build spending
    const expense = {
      name,
      amount,
      id: shortid.generate(),
    };

    // Pass the expense to the main component
    saveExpense(expense);
    saveCreateExpense(true);

    // Reset the form
    saveName("");
    saveAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here</h2>

      {error ? (
        <Error message="Both fields are required or wrong budget" />
      ) : null}

      <div className="field">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g Transport"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Spending amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g 300"
          value={amount}
          onChange={(e) => saveAmount(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired,
};

export default Form;
