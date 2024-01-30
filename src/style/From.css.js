import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 700px;
  border: 2px solid white;
  background-color: #ffffff78;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 20px 0;
  label {
    color: #ffffff;
    font-size: 20px;
    margin-right: 10px;
    font-weight: 500;
  }
  input {
    background: transparent;
    color: white;
    font-size: 20px;
    border: none;
    outline: none;
    border-bottom: 1.5px solid white;
    font-weight: 300;
  }
  input::placeholder {
    color: #dddddd;
  }
  p {
    font-size: 15px;
    color: #cf0707;
    font-weight: 500;
    line-height: 0;
  }
  button {
    width: 200px;
    background: transparent;
    color: #ffffff;
    font-size: 20px;
    border: 1.5px solid white;
    border-radius: 5px;
  }
`;
