import React, { useEffect, useState } from "react";
import From from "./From";
import { DeleteButton, EditBox, EditButton, TableContainer } from "../style/Table.css";

const Table = ({ tableData, setTableData, setIsOpen, isOpen }) => {
  const [editData, setEditData] = useState();
  const deleteSingleData = (index) => {
    setTableData((prev) => prev.filter((data) => data.index !== index));
  };

  const editSingleData = async (index) => {
    const dataToEdit = tableData.filter((data) => data.index === index);
    setEditData(dataToEdit);
  };

  useEffect(() => {
    if (editData !== undefined) {
      setIsOpen(true);
    }
  }, [editData]);

  return (
    <>
      <EditBox open={isOpen}>
        <From
          isEdit={isOpen}
          setIsOpen={setIsOpen}
          editData={editData}
          tableData={tableData}
          setTableData={setTableData}
        />
      </EditBox>
      <TableContainer>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Weekdays</td>
            <td>Gender</td>
            <td>Date Of Birth</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>
                {data.checkboxes.map((day) => day.isChecked && day.value)}
              </td>
              <td>{data.selectedOption}</td>
              <td>{data.dob}</td>
              <td>
                <EditButton onClick={() => editSingleData(data.index)}>Edit</EditButton>
              </td>
              <td>
                <DeleteButton onClick={() => deleteSingleData(data.index)}>
                  Delete
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;
