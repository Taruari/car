import "./index.css";
import { useState } from "react";

 export function Login () {
const [form,setForm] = useState({
email:"",
password:""
})

const [errors,setErrors] = useState({})

const handleChange = (e)=>{
const {name,value} = e.target

setForm({...form,[name]:value})

validate(name,value)
}

const validate = (name,value)=>{

let newErrors = {...errors}

if(name === "email"){
if(!value.includes("@")){
newErrors.email = "Enter a valid email"
}else{
delete newErrors.email
}
}

if(name === "password"){
if(value.length < 6){
newErrors.password = "Password must be at least 6 characters"
}else{
delete newErrors.password
}
}

setErrors(newErrors)
}

const handleSubmit = (e)=>{
e.preventDefault()

if(Object.keys(errors).length === 0){
alert("Login Successful ✅")
}else{
alert("Please fix errors ❌")
}
}

return(

<div className="login-container">

<form className="login-form" onSubmit={handleSubmit}>

<h2>Login</h2>

<input
type="text"
name="email"
placeholder="Enter Email"
value={form.email}
onChange={handleChange}
/>

{errors.email && <p className="error">{errors.email}</p>}

<input
type="password"
name="password"
placeholder="Enter Password"
value={form.password}
onChange={handleChange}
/>

{errors.password && <p className="error">{errors.password}</p>}

<button type="submit">Login</button>

</form>

</div>

)

}

