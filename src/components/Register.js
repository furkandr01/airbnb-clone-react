import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        address: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(formData);
            localStorage.setItem("users", JSON.stringify(users)); 
            
            alert("Kayıt başarılı! Lütfen giriş yapın.");
            navigate("/login"); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input name="firstName" type="text" placeholder="Name" onChange={handleChange} required />
            <input name="lastName" type="text" placeholder="Surname" onChange={handleChange} required />
            <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />
            <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <input name="address" type="text" placeholder="Post Address" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;
