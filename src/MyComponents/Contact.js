import React, { useState } from 'react';

export const Contact = () => {

  const defaultContact =
  {
    name: "",
    number: "",
    email: "",
    suggestion: "",
    check: false,
  };

  const [contact, setContact] = useState(defaultContact);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "check")
      setContact((prevContact) => ({
        ...prevContact,
        check: !prevContact.check,
      }))
    else
      setContact((prevContact) => ({
        ...prevContact,
        [name]: value,
      }))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (contact.number.length < 10)
      alert(`Please Enter a Valid 10 Digit Number`);
    else {
      alert(`Hi ${contact.name} you will be contacted through your number: ${contact.number} or Email: ${contact.email} shortly.${contact.suggestion ? `Your suggestion: ${contact.suggestion}` : `Your suggestion: null`}. ${contact.check ? "You have successfully subscribed to our newsletter" : ""}`);
      setContact(defaultContact);

    }

  }
  return (
    <>
      <div className="my-4">
        <h2 className="text-center">Contact Us</h2>
      </div>

      <div className="container w-75 mb-3">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="mb-4">
                <input
                  required
                  type="text"
                  className=" form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={contact.name}
                  onChange={handleInput}
                  placeholder="Enter Your Full Name" />
              </div>

              <div className="mb-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={contact.number}
                  onChange={handleInput}
                  placeholder="Enter Your Phone Number" />
              </div>

              <div className="mb-4">
                <input
                  required
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Enter Suggestions"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="suggestion"
                  value={contact.suggestion}
                  onChange={handleInput}
                  rows="3">
                </textarea>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="check"
                  checked={contact.check}
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Receive a Newsletters</label>
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
