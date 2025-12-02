import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    interest: "",
    pricing: "",
    zipCode: "",
    businessName: "",
    website: "",
    email: "",
    cellphone: "",
    landline: "",
    preferredContactMethod: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const priceFromQuery = params.get("price"); // get "price" param
    if (priceFromQuery) {
      setFormData((prev) => ({
        ...prev,
        pricing: priceFromQuery
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccess(res.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        role: "",
        interest: "",
        pricing: "",
        zipCode: "",
        businessName: "",
        website: "",
        email: "",
        cellphone: "",
        landline: "",
        preferredContactMethod: "",
        message: ""
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="secContactUs position-relative w-100 py-4">
      <div className="container mb-4">
        <h2 className="text-center fw-bold mb-3">Contact Us</h2>

        {success && <p className="text-success align-items-center">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form  onSubmit={handleSubmit} className="px-4 py-2 m-auto position-relative">
          <div className="row position-relative z-3">

            {/* First Name */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  First Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Last Name */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100"  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Role */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Role <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100"  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Interest */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Interest <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100"  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Pricing */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Pricing <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100"  name="pricing"
                  value={formData.pricing}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Zip Code */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Zip Code <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control w-100"  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Business Name */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">Business Name</label>
                <input type="text" className="form-control w-100"  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Website */}
            <div className="col-12 col-md-6">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">Website</label>
                <input type="text" className="form-control w-100"  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required/>
              </div>
            </div>

            {/* Contact Info Box */}
            <div className="col-12">
              <div className="form-group d-flex flex-column my-2 greyBox">
                <label className="d-block position-relative z-2">
                  Contact info (we will contact you only if we have questions about your form)
                </label>

                <div className="row">
                  {/* Email */}
                  <div className="col-12 col-lg-4">
                    <div className="form-group d-flex flex-column align-items-start my-2">
                      <label className="position-relative z-2">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control w-100"  name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required/>
                      <p className="Note mt-1">Permission to contact by email</p>
                    </div>
                  </div>

                  {/* Cellphone */}
                  <div className="col-12 col-lg-4">
                    <div className="form-group d-flex flex-column align-items-start my-2">
                      <label className="position-relative z-2">Cellphone</label>
                      <input type="number" className="form-control w-100"  name="cellphone"
                        value={formData.cellphone}
                        onChange={handleChange}
                        required/>
                      <p className="Note mt-1">Permission to text</p>
                    </div>
                  </div>

                  {/* Landline */}
                  <div className="col-12 col-lg-4">
                    <div className="form-group d-flex flex-column align-items-start my-2">
                      <label className="position-relative z-2">Landline</label>
                      <input type="number" className="form-control w-100"  name="landline"
                        value={formData.landline}
                        onChange={handleChange}
                        required/>
                      <p className="Note mt-1">We will only call you if we have question</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div className="col-12">
              <div className="form-group d-flex justify-content-between align-items-center flex-wrap my-2 greyBox">
                <label className="position-relative z-2">
                  Preferred contact method <span className="text-danger">*</span>
                </label>

                <div className="radioList d-flex align-items-center">
                  <div className="radio m-2">
                    <input
                      id="Email"
                      type="radio"
                      name="preferredContactMethod"
                      value="Email"
                      checked={formData.preferredContactMethod === "Email"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Email" className="d-flex align-items-center">
                      <span></span> Email
                    </label>
                  </div>

                  <div className="radio m-2">
                    <input
                      id="Cellphone"
                      type="radio"
                      name="preferredContactMethod"
                      value="Cellphone"
                      checked={formData.preferredContactMethod === "Cellphone"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Cellphone" className="d-flex align-items-center">
                      <span></span> Cellphone
                    </label>
                  </div>

                  <div className="radio m-2">
                    <input
                      id="Landline"
                      type="radio"
                      name="preferredContactMethod"
                      value="Landline"
                      checked={formData.preferredContactMethod === "Landline"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Landline" className="d-flex align-items-center">
                      <span></span> Landline
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="col-12">
              <div className="form-group d-flex flex-column align-items-start my-2">
                <label className="position-relative z-2">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea className="form-control w-100" rows="10"  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required></textarea>
              </div>
            </div>

            {/* Send Button */}
            <div className="col-12">
              <div className="d-flex justify-content-center my-4">
                <button type="submit" className="btn fw-bold py-2 px-5" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
