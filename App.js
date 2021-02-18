import React, {useState} from "react";
import Tweet from "./tweet";


function App(){

  const [users, setUsers] = useState([
    {'name': 'Kane', 'message':"Nz"},
    {'name': 'smith', 'message':"india"},
    {'name': 'root', 'message':"eng"}
  ]);


  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    

    </div>
  );

}

export default App;