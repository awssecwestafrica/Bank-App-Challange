/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function AllOurCustomers() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
      db
        .collection("users")
        .orderBy("name")
        .onSnapshot((snapshot) =>
          setState(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        )
  };

  return (
    <div className="allOurCustomers" css={CSS}>
      <h1>All Our Customers</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>UID</td>
              <td>Name</td>
              <td>Account Number</td>
              <td>Current Balance</td>
              <td><ion-icon name="cash-outline"></ion-icon></td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i%2===0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.name}</td>
                <td>{obj.data.accountNo}</td>
                <td>{obj.data.balance}</td>
                <td><Link to="/transfer">Transfer Money</Link></td>
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

            ion-icon {
              font-size: 20px;
            }
          }
        }
      }

      tbody {
        background-color: var(--cerulean-crayola);

        tr {
          a{
            color: #BF0000;
            transition: all 0.3s ease;
          }

          a:hover {
            text-decoration: underline;
          }

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

export default AllOurCustomers;

// {Array.from(Object.values(database)).map(arr => arr.map(e => (<p>{e}</p>)))}
