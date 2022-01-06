<<<<<<< HEAD
import React, { Component } from "react";
import useForm from "react-hook-form";

const NewBudgetForm = () => {
  const submitHandler = () => {
    console.log("HELLO");
  };

  return (
    <div className="NewBudgetForm">
      <form
        onSubmit={(e) => {
          console.log("HELLO");
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          type="text"
          placeholder="Groceries"
          name="groceries"
          className="type"
        />
        <input type="text" placeholder="Gym" name="gym" className="type" />
        <input type="text" placeholder="Rent" name="rent" className="type" />
        <input
          type="text"
          placeholder="Car Loan"
          name="car loan"
          className="type"
        />
        <input
          type="text"
          placeholder="Fun Money"
          name="fun money"
          className="type"
        />
        <input
          type="text"
          placeholder="Student Loan"
          name="student loan"
          className="type"
        />
        <input
          type="text"
          placeholder="Electronics"
          name="electronics"
          className="type"
        />
        <input
          type="text"
          placeholder="Day Care"
          name="day care"
          className="type"
        />
        <input
          type="text"
          placeholder="Clothing"
          name="clothing"
          className="type"
        />
        <input type="submit" value="Click" />
=======
import React, { useState } from 'react';
// import useForm from 'react-hook-form';
import { render } from "react-dom";
import PieChart from './PieChart.jsx';
import "../styles.scss";
import {Link} from 'react-router-dom';
import { addBudget} from '../store.js'
import { useSelector, useDispatch } from "react-redux";

const NewBudgetForm = () => {

  const dispatch = useDispatch();
  const budgetState = useSelector((state) => state.config.budget);

  const [groceries, setGroceries] = useState(0);
  const [gym, setGym] = useState(0);
  const [rent, setRent] = useState(0);
  const [car_loan, setCar_loan,] = useState(0);
  const [fun_money, setFun_money,] = useState(0);
  const [student_loan, setStudent_loan,] = useState(0);
  const [electronics, setElectronics] = useState(0);
  const [day_care, setDaycare] = useState(0);
  const [clothing, setClothing] = useState(0);
  
  const [clicked, setClicked] = useState(false);


  const isClicked  = () => {
    clicked ? setClicked(false) : setClicked(true);
    dispatch(addBudget({groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing}));
    alert("Submitted Successfully!")
  }


  return (
    <div className="sub-budget-container">
      <form className='content'>
        <h4>New Budget Form</h4>
        <label className='label'>Groceries:</label>
          <input type="text" placeholder = "Groceries" name="groceries" className="type" onChange={(e) => setGroceries(e.target.value)}/>
        <label className='label'>Gym:</label>
          <input type="text" placeholder = "Gym" name="gym" className="type" onChange={(e) => setGym(e.target.value)}/>
          <label className='label'>Rent:</label>
        <input type="text" placeholder = "Rent" name="rent" className="type" onChange={(e) => setRent(e.target.value)}/>
          <label className='label'>Car Loan:</label>
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" onChange={(e) => setCar_loan(e.target.value)}/>
         <label className='label'>Fun Money:</label>
          <input type="text" placeholder = "Fun Money" name="fun money" className="type" onChange={(e) => setFun_money(e.target.value)}/>
        <label className='label'>Student Loan:</label>
          <input type="text" placeholder = "Student Loan" name="student loan" className="type" onChange={(e) => setStudent_loan(e.target.value)}/>
        <label className='label'>Electronics:</label>
          <input type="text" placeholder = "Electronics" name="electronics" className="type" onChange={(e) => setElectronics(e.target.value)}/>
        <label className='label'>Day Care:</label>
          <input type="text" placeholder = "Day Care" name="day care" className="type" onChange={(e) => setDaycare(e.target.value)}/>
        <label className='label'>Clothing:</label>
          <input type="text" placeholder = "Clothing" name="clothing" className="type" onChange={(e) => setClothing(e.target.value)}/>
        <button type='button' className='btn' onClick={()=>isClicked()}>Submit</button>
        <Link style={{textDecoration:'none', fontSize:'13px'}} className='btn' to="/budgetmain">Go Back</Link>
>>>>>>> 1767bc88d50766f1c7f3386d5c018b357bbe726e
      </form>
    </div>
  );
};

export default NewBudgetForm;

// onChange={(e) => setGroceries(e.target.value)}
