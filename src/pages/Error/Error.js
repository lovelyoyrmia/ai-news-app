import React, { useEffect } from "react";
import styled from "styled-components";

const PageNotFoundStyle = styled.div`
  .container__404 {
    height: 100%;
    padding: 1rem;
    text-align: center;
    padding-top: 8rem;
  }
  .title__404 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .subTitle__404 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 3rem;
  }
  button {
    background-color: white;
    color: black;
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: orange;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

function Error(props) {
  useEffect(() => {
    document.title = "Page not found :(";
  }, []);

  return (
    <PageNotFoundStyle>
      <div className="container__404">
        <div className="title__404">404 Page Not Found !!</div>
        <div className="subTitle__404">
          I'm so sorry, I didn't get that page :(
        </div>
        <button
          onClick={() => {
            props.history.push("/");
          }}
        >
          Back To Home
        </button>
      </div>
    </PageNotFoundStyle>
  );
}

export default Error;
