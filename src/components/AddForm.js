import React,{useState} from "react";
function AddForm ({onAdd}) {
    const [employee, setEmployee] = useState({
        name:'',surname:'',email:'',phone:'',image:'',position:'',id:'',
    });

    const handleInputChange = (e) => {
        setEmployee({
          ...employee,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(employee);
        setEmployee({
          name: '',
          surname: '',
          email: '',
          phone: '',
          image: '',
          position: '',
          id: '',
        });
      };



    return(
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="surname"
                value={employee.surname}
                onChange={handleInputChange}
                placeholder="Surname"
              /><br/>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                value={employee.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              /><br/>
              <input
                type="text"
                name="image"
                value={employee.image}
                onChange={handleInputChange}
                placeholder="Image URL"
              />
              <input
                type="text"
                name="position"
                value={employee.position}
                onChange={handleInputChange}
                placeholder="Position"
              /><br/>
              <input className="input-id"
                type="text"
                name="id"
                value={employee.id}
                onChange={handleInputChange}
                placeholder="ID"
              /><br/>
              <button type="submit" className="submit-form">Add Employee</button>
            </form>
          
        
    );
};

export default AddForm;