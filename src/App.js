import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React,{useState} from 'react';
import Wrapper from './Helper/Wrapper';
function App() {
  const [userList, setUserlist] = useState([]);

  const onChangeSubmithandler = (uName, uAge) =>{
    setUserlist((prevUserList) => {
      return [...prevUserList, {id: Math.random().toString() ,name: uName, age: uAge  },
      ];
    });
  };

  return (
    <Wrapper>   {/* Wrapper is getting the childrens and wrap them from the Wrapper.js file inside the helper*/}
    

    <AddUser onAdduser={onChangeSubmithandler}/>
      
    <UsersList users={userList}/>

    </Wrapper>
  );
}

export default App;
