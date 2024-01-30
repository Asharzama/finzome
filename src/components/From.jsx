import React, { useEffect, useState } from "react";
import {FormContainer} from "../style/From.css"

const From = ({ setTableData, isEdit, editData, tableData, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, value: "Monday", isChecked: false },
    { id: 2, value: "Tuesday", isChecked: false },
    { id: 3, value: "Wednesday", isChecked: false },
    { id: 4, value: "Thursday", isChecked: false },
    { id: 5, value: "Friday", isChecked: false },
  ]);
  const [selectedOption, setSelectedOption] = useState("");
  const [dob, setDob] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [weekdayError, setWeekdaysError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!!editData && isEdit) {
      setName(editData[0].name);
      setEmail(editData[0].email);
      setContact(editData[0].contact);
      setCheckboxes(editData[0].checkboxes);
      setSelectedOption(editData[0].selectedOption);
      setDob(editData[0].dob);
    }
  }, [editData, isEdit]);

  const nameHandler = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);

    function validateEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
    !validateEmail(email) ? setEmailError(true) : setEmailError(false);
  };

  const contactHandler = (event) => {
    let contact = event.target.value;
    setContact(contact);
    contact.length !== 10 ? setContactError(true) : setContactError(false);
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    const newCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === parseInt(id)) {
        checkbox.isChecked = checked;
        setWeekdaysError(false);
      }
      return checkbox;
    });
    setCheckboxes(newCheckboxes);
    checkboxes.every((day) => day.isChecked === false) &&
      setWeekdaysError(true);
  };

  const genderHandler = (e) => {
    setSelectedOption(e.target.value);
    setGenderError(false);
  };

  const dobHandler = (event) => {
    setDob(event.target.value);
    setDobError(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkboxes.every((day) => day.isChecked === false) &&
      setWeekdaysError(true);
    name === "" && setNameError(true);
    contact === "" && setContactError(true);
    email === "" && setEmailError(true);
    selectedOption === "" && setGenderError(true);
    dob === "" && setDobError(true);
    addToList();
  };

  const addToList = () => {
    if (
      !nameError &&
      !emailError &&
      !contactError &&
      !weekdayError &&
      !genderError &&
      !dobError
    ) {
      if (isEdit) {
        setTableData([
          ...tableData.map((data) => {
            if (data.index === editData[0].index) {
              return {
                name,
                email,
                contact,
                checkboxes,
                selectedOption,
                dob,
                index,
              };
            }
            return data;
          }),
        ]);
        setIsOpen(false);
      } else {
        setTableData((prev) => [
          ...prev,
          { name, email, contact, checkboxes, selectedOption, dob, index },
        ]);
      }
      setIndex((prev) => prev + 1);
      setName("");
      setEmail("");
      setContact("");
      setCheckboxes([
        { id: 1, value: "Monday", isChecked: false },
        { id: 2, value: "Tuesday", isChecked: false },
        { id: 3, value: "Wednesday", isChecked: false },
        { id: 4, value: "Thursday", isChecked: false },
        { id: 5, value: "Friday", isChecked: false },
      ]);
      setSelectedOption("");
      setDob("");
    }
  };
  return (
    <FormContainer>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Your Name"
          id="name"
          value={name}
          required
          onChange={nameHandler}
        />
        {nameError && <p>Name field cannot be Empty!</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={email}
          required
          onChange={emailHandler}
        />
        {emailError && <p>Fill correct Email Address!</p>}
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="number"
          placeholder="Your Contact"
          id="contact"
          required
          value={contact}
          onChange={contactHandler}
        />
        {contactError && <p>Please fill correct Contact Details!</p>}
      </div>
      <div>
        <label htmlFor="">Weekdays:</label>
        {checkboxes?.map((checkbox) => (
          <div key={checkbox.id}>
            <input
              type="checkbox"
              id={checkbox.id}
              value={checkbox.value}
              checked={checkbox.isChecked}
              onChange={handleChange}
            />
            <label htmlFor={checkbox.id}>{checkbox.value}</label>
          </div>
        ))}
        {weekdayError && <p>Please select Weekdays!</p>}
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={genderHandler}
          checked={selectedOption === "Male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={genderHandler}
          checked={selectedOption === "Female"}
        />
        <label htmlFor="female">Female</label>
        {genderError && <p>Please Select Gender!</p>}
      </div>
      <div>
        <label htmlFor="dob">Date Of Birth:</label>
        <input type="date" name="" id="dob" value={dob} onChange={dobHandler} />
        {dobError && <p>Date Of Birth field cannot be Empty!</p>}
      </div>
      <button onClick={submitHandler}>Submit</button>
    </FormContainer>
  );
};

export default From;
