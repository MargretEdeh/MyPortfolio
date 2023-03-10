import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function TheModal({ showContact }) {
  const theRef = useRef();
  const [sucess, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [theErrors, setTheErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setTheErrors(validate(formData));
      return;
    } else {
      setTheErrors({});
      emailjs
        .sendForm(
          "service_b6gn2bc",
          "template_bzvjgln",
          theRef.current,
          "dRkQG3PaVnm5yzwxs"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setSucess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }

    // setTheErrors(validate(formData))
    // console.log('form submitted')
    // // theRef.current.reset()
    // setSucess(true)
    // setFormData({
    //   name: '',
    //   email: '',
    //   message: ''
    // })
    theRef.current.focus();
  };
  return (
    <div className="fixed w-full z-[50] h-screen font-semibold bg-pink-600 opacity-90 top-0 -ml-0">
      <FaTimes
        onClick={showContact}
        className="text-4xl text-slate-900 m-10 hover:text-5xl"
      />
    
    {sucess ? (<div className="text-center" >  <h1 className="text-4xl text-slate-900" >Thank You!! for your Message!!</h1> </div>)
    :

  
      <form
        ref={theRef}
        onSubmit={SubmitForm}
        className="flex flex-col m-10 md:w-1/2 md:mx-auto my-10"
      >
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <p className="text-slate-900 font-semibold">{theErrors.name} </p>
        <input
          ref={theRef}
          value={formData.name}
          type="text"
          name="name"
          onChange={handleChange}
          id="name"
          className="bg-pink-300 text-white"
        />
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <p className="text-slate-900 font-semibold">{theErrors.email}</p>
        <input
          value={formData.email}
          type="email"
          name="email"
          onChange={handleChange}
          id="email"
          className="bg-pink-300 text-white"
        />
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <p className="text-slate-900 font-semibold">{theErrors.message}</p>
        <textarea
          value={formData.message}
          name="message"
          onChange={handleChange}
          id="message"
          cols="30"
          rows="10"
          className="bg-pink-300 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-900 my-10 p-2 text-white"
        >
          Submit
        </button>
      </form>}
    </div>
  );
}
