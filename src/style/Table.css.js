import styled from "styled-components";

export const TableContainer = styled.table`
  max-width: 900px;
  border: 1.6px solid white;
  background: #ffffff78;
  border-radius: 10px;
  padding: 7px 10px;
  thead {
    background: white;
    td {
      color: #aaaaaa;
    }
  }
  td {
    border: 1px solid #dddddd;
    color: white;
    font-size: 17px;
    border-radius: 5px;
    padding: 3px 5px;
  }
`;

export const EditButton = styled.button`
  background: white;
  color: #0000ffa6;
  border: white;
  box-shadow: 0 0 3px 1px #0000ffa6;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
`;

export const DeleteButton = styled.button`
  background: white;
  color: #ff0052a6;
  border: white;
  box-shadow: 0 0 3px 1px #ff0052a6;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
`;

export const EditBox = styled.dialog`
background: linear-gradient(to right,#0e6992 41%, #9ccb0e 94%);
`