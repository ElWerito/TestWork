import React, { useEffect, useState } from "react";
import "./test.css"
function Test() {

fetch('')
.then(res=>res.json())
.then(json=>console.log(json))

const [user, setUser] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>{ 
        let data = []
        json.forEach((item)=>{
            let object = {
                id: item.id,
                name: item.id,
                username: item.id,
                email: item.email
            }
            data.push(object);
        })
        setUser(data)
    })
}, [] )

    return (
      <div>
          {user.length>0&&(
          <table>
              <thead>
                
                  <tr className="row-top">
                    
                      <th scope="col">Employee ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Salary</th>
                      <th scope="col">DOB</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {user.map((users)=>(
                  <tr className="row-top">
                  
                        <tr key={users.id}>
                            <th scope="row">{users.id}</th>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                        </tr>
                            
                
                      <td><button id="Add-Box">Add</button><button id="X-Box">X</button></td>
                  </tr>
              ))}
              </tbody>
          </table>)}
      </div>
    )
}
export default Test;