/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function Transactions() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    db
    .collection("transactions")
    .onSnapshot((snapshot) =>
      setState(
        snapshot.docs.map((doc) => ({ id: doc.id,  data: doc.data() }))
      )
    )
    // console.log(`${state[2]?.data.createdAt.toDate().toDateString()} ${state[2].data.createdAt.toDate().toLocaleTimeString('en-US')}`)
  }

  return (
    <div className="transactions" css={CSS}>
      <h1>Transactions History</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>UID</td>
              <td>Payer</td>
              <td>Receiver</td>
              <td>Amount</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.to}</td>
                <td>{obj.data.from}</td>
                <td>{obj.data.amount}</td>
                <td>{`${obj.data.createdAt?.toDate().toDateString() ? obj.data.createdAt?.toDate().toDateString() : "Not"} ${obj.data.createdAt?.toDate().toLocaleTimeString('en-US') ? obj.data.createdAt?.toDate().toLocaleTimeString('en-US') : "Available"}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgb(72, 202, 228);
  background: linear-gradient(
    180deg,
    rgba(72, 202, 228, 1) 0%,
    rgba(173, 232, 244, 1) 50%,
    rgba(202, 240, 248, 1) 100%
  );
  font-family: "Roboto", sans-serif;

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

  .table {
    display: table;
    overflow: scroll;
    height: 100vh;

    table {
      table-layout: fixed;
      color: var(--powder-blue);
      margin: 2rem 0;
      border-collapse: collapse;
      border: 1px solid black;

      thead {
        background-color: var(--navy-blue);

        tr {
          td {
            padding: 10px;
            text-align: center;
            font-weight: 700;
          }
        }
      }

      tbody {
        background-color: var(--cerulean-crayola);

        tr {

          td {
            padding: 10px;
            border-right: 1px solid var(--navy-blue);
            text-align: right;
          }
        }

        .light {
          background-color: var(--sky-blue-crayola);
        }
      }
    }
  }
`;

export default Transactions;
