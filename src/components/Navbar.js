/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const ref = useRef();
  const size = useRef();

  const maxSize = () => {
    window.addEventListener("resize", () => {
      if(window.innerWidth > 731) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
        size.current.style.height = "4.5rem";
      }
    })
  }

  useEffect(() => {
    maxSize()
    window.removeEventListener("resize", null)
  }, [])

  const [state, setState] = useState({
    active: false,
  });

  // console.log(size?.current?.style.height, ref?.current?.style.display);

  const navClickHandler = () => {
    if (!state.active) {
      ref.current.style.display = "block";
      size.current.style.height = "20rem";
      setState({ ...state, active: true });
    } else {
      ref.current.style.display = "none";
      size.current.style.height = "4.5rem";
      setState({ ...state, active: false });
    }
  };

  return (
    <nav css={CSS} ref={size}>
      <Link to="/">
        <div className="logo">
          <span className="logo-ico">
            <ion-icon name="wallet-outline"></ion-icon>
          </span>
          <div className="logo__text">
            <span>Devops</span>
            <span>bank</span>
          </div>
        </div>
      </Link>
      <button onClick={navClickHandler}>
        Menu{" "}
        {!state.active ? (
          <span id="open">
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
        ) : (
          <span id="close">
            <ion-icon name="remove-circle-outline"></ion-icon>
          </span>
        )}
      </button>
      <div className="nav__links" ref={ref}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <span className="seperator"> |</span>
          </li>
          <li>
            <Link to="/create-user">Add Customer</Link>
            <span className="seperator"> |</span>
          </li>
          <li>
            <Link to="/all-our-customers">All Our Customers</Link>
            <span className="seperator"> |</span>
          </li>
          <li>
            <Link to="/transactions-history">Transaction History</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const CSS = css`
  height: 4.5rem;
  background: rgb(3, 4, 94);
  background: linear-gradient(
    45deg,
    rgba(3, 4, 94, 1) 0%,
    rgba(2, 62, 138, 1) 33%,
    rgba(0, 119, 182, 1) 100%
  );
  color: var(--powder-blue);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--powder-blue);
  }

  .logo {
    display: flex;
    width: 200px;
    height: 2.5rem;
    padding-left: 1rem;

    .logo-ico {
      color: var(--sky-blue-crayola);
      font-size: 2.5rem;
    }

    .logo__text {
      font-family: "Raleway", sans-serif;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;
      margin-left: 5px;
      padding-left: 5px;
      font-size: 18px;
      border-left: 2px solid var(--powder-blue);
    }
  }

  button {
    display: none;
  }

  .nav__links {
    font-family: "Roboto", sans-serif;
    justify-self: flex-end;
    padding-right: 1rem;

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        a {
          margin-left: 3px;
          padding: 18px 20px;
          color: var(--powder-blue);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        a:hover {
          background-color: var(--blue-green);
          color: var(--navy-blue);
          text-decoration: underline;
        }

        @media screen and (max-width: 880px) {
          a {
            padding: 18px 5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: unset;
    height: 4.5rem;

    .logo {
      margin-top: 1rem;
      margin-left: 1rem;
      padding: 0;
    }

    button {
      display: block;
      position: absolute;
      width: 95px;
      top: 0.9rem;
      right: 1rem;
      padding: 10px 20px;
      border: 2px solid var(--sky-blue-crayola);
      border-radius: 4px;
      background: transparent;
      color: var(--powder-blue);
      display: flex;
      align-items: center;
      justify-content: space-between;

      #close,
      #open {
        font-size: 16px;
      }
    }

    .nav__links {
      padding: 0;
      width: 100%;
      display: none;
      ul {
        flex-direction: column;
        padding: 0;

        .seperator {
          display: none;
        }
        li {
          padding: 20px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export default Navbar;
