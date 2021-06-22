import dayjs from 'dayjs';
import { FormikErrors, FormikProps, useFormik, withFormik } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import styles from './PizzaForm.module.css';

const dateFormat = "YYYY-MM-DDTHH:mm"

interface FormValues {
  eatDate: dayjs.Dayjs,
  doughType: string,
  amount: number
}
interface FormProps {
  initialEatDate: dayjs.Dayjs
}



const InnerForm = (props: FormProps & FormikProps<FormValues>) => {
  
  const { values, touched, errors, isSubmitting, handleChange, handleSubmit } = props



  return (
    <div className={styles.PizzaForm}>
      PizzaForm Component

      <form onSubmit={handleSubmit}>
        <label>
          When do you plan to eat?
          <input 
            id="eat-time"
            name="eatTime"
            type="datetime-local" 
            value={values.eatDate.format(dateFormat)} 
            onChange={handleChange}
          />
        </label>
        {errors.eatDate ? <div>{errors.eatDate}</div> : null} 

        <br/>
        
        <label htmlFor="dough-select">
          What dough type do you want?
        </label>
        <select 
          id="dough-select" 
          name="doughType" 
          onChange={handleChange} 
          value={values.doughType}
        >
          <option value="">-- Choose an option --</option>
          <option value="neapolitana">Neapolitana</option>
          <option value="master">Master Dough (american)</option>
        </select>

        <br/>
        <br/>

        <label>
          How many pizzas?
          <input 
            id="amount"
            name="amount"
            type="number" 
            value={values.amount} 
            onChange={handleChange}
          />
        </label> 

        <button type="submit">Submit</button>


        

      </form>
    </div>
  )
};

const PizzaForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      eatDate: props.initialEatDate,
      doughType: "",
      amount: 1
    }
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if(!values.doughType) {
      errors.doughType = "Must select an dough type!"
    }
    return errors
  },

  handleSubmit: values => {
    // do submitting things
    console.log(values);
    
  },
})(InnerForm)


export default PizzaForm;
