import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';

const Admin = () => {

    const formik = useFormik({
      initialValues: {
        name: '',
        images: '',
        title: '',

      },
      onSubmit: async (values) => {
      
          const response = await axios.post("http://localhost:3000/products", values);
          console.log(response.data);
          alert("submitted");
      },
    });
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
  
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        
        <label htmlFor="images">images</label>
        <input
  
          name="images"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.images}
        />

<label htmlFor="title">title</label>
        <input
  
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        
        <button type="submit">Submit</button>
      </form>
    );
  
}

export default Admin