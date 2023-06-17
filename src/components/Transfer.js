/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { transact, addTransaction, db } from "./firebase";
import { useHistory } from "react-router-dom";

function Transfer() {
  const [state, setState] = useState({
    to: "",
    from: "",
    amount: "",
    accounts: [],
  });

  const history = useHistory();

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setState({
        ...state,
        accounts: snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag1 = false;
    let flag2 = false;
    let id1,
      id2 = [0, 0];
    for (let i = 0; i < state.accounts.length - 1; i++) {
      if (state.to === state.from) {
        alert("Payer's and Reciever's account numbers cannot be same!");
        setState({ ...state, to: "", from: "", amount: "" });
        break;
      }
      if (state.accounts[i].data.accountNo === state.to) {
        flag1 = true;
        id1 = i;
        // console.log(state.to);
      }
      if (state.accounts[i].data.accountNo === state.from) {
        flag2 = true;
        id2 = i;
        // console.log(state.from);
      }
    }
    if (!flag1) {
      alert("Check Reciever's account number!");
    } else if (!flag2) {
      alert("Check Payer's account number!");
    } else {
      // Go to firebase
      if (Number(state.accounts[id1].data.balance) < Number(state.amount)) {
        alert("Insufficient Balance");
        setState({ ...state, to: "", from: "", amount: "" });
      } else {
        transact(
          state.accounts[id1].id,
          state.accounts[id1].data.balance,
          state.accounts[id2].id,
          state.accounts[id2].data.balance,
          state.amount
        );
        addTransaction(state.amount, state.to, state.from);

        setState({ ...state, to: "", from: "", amount: "" });
        history.replace("/transactions-history");
      }
    }
  };

  return (
    <div className="transfer" css={CSS}>
      <h1>Transfer:</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Transfer from:
          </label>
          <input
            type="number"
            min={100000}
            max={999999}
            name="from"
            className="input"
            placeholder="Account Number"
            value={state.to}
            onChange={(e) => setState({ ...state, to: e.target.value })}
          />
        </div>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Transfer to:
          </label>
          <input
            type="number"
            min={100000}
            max={999999}
            name="from"
            className="input"
            placeholder="Account Number"
            value={state.from}
            onChange={(e) => setState({ ...state, from: e.target.value })}
          />
        </div>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Enter Amount:
          </label>
          <input
            type="number"
            min={1}
            name="from"
            className="input"
            placeholder="Amount"
            value={state.amount}
            onChange={(e) => setState({ ...state, amount: e.target.value })}
          />
        </div>
        <div className="form__item">
          <button type="submit" className="submit">
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}

const CSS = css`
  width: 100%;
  height: calc(100vh - 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(72, 202, 228);
  background: linear-gradient(
    180deg,
    rgba(72, 202, 228, 1) 0%,
    rgba(173, 232, 244, 1) 50%,
    rgba(202, 240, 248, 1) 100%
  );

  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: var(--star-command-blue);
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--dark-cornflower-blue);
    padding: 50px;
    margin: 0 auto;
    border-radius: 4px;
    color: white;
    font-family: "Roboto", sans-serif;
    width: 80%;
    max-width: 650px;

    .form__item {
      display: flex;
      flex-direction: column;
      padding: 5px;
      margin: 10px 0;

      .label {
        font-size: 20px;
      }

      .input {
        font-size: 18px;
        margin-top: 10px;
        padding: 5px;
        border-radius: 4px;
      }

      .submit {
        padding: 10px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 600;
        background: var(--navy-blue);
        color: var(--powder-blue);
        transition: all 0.3s ease;
      }

      .submit:hover {
        background-color: var(--sky-blue-crayola);
        color: var(--navy-blue);
      }

      .submit:target {
        background-color: var(--blizzard-blue;);
      }
    }
  }

  @media screen and (max-width: 780px) {
    .form {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export default Transfer;
