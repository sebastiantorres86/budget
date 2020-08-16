import React, { useState, useEffect } from "react";
import Ask from "./Components/Ask";
import Form from "./Components/Form";
import List from "./Components/List";
import BudgetControl from "./Components/BudgetControl";

function App() {
  // Define the State
  const [budget, saveBudget] = useState(0);
  const [balance, saveBalance] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  // useEffect which updates the balance
  useEffect(() => {
    if (createExpense) {
      // Add the new budget
      saveExpenses([...expenses, expense]);

      // Subtraction from current budget
      const remainingBudget = balance - expense.amount;
      saveBalance(remainingBudget);

      // Reset to false
      saveCreateExpense(false);
    }
  }, [balance, createExpense, expense, expenses]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="content-main content">
          {showQuestion ? (
            <Ask
              saveBudget={saveBudget}
              saveBalance={saveBalance}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>

              <div className="one-half column">
                <List expenses={expenses} />

                <BudgetControl budget={budget} balance={balance} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
