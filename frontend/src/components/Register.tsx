import axios from "axios";
import './App.css';
function Register() {
  
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    
    try {
      await axios.post('http://localhost:3000/api/register', data);
      console.log("Data sent successfully");
      e.target.reset();
    } catch (err) {
      console.error(err);
    }


    data.username="";
    data.email="";
    data.password="";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Name' required />
        <input type="email" name="email" placeholder='Email' required />
        <input type="password" name="password" placeholder='Password' required />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;