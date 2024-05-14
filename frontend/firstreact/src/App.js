import {useEffect,useState} from "react"
import "./App.css"

const App=()=>{
  const [user,setUser]=useState([])

  const getUser=async ()=>{
const response=await fetch ("/api/user")
    const data=await response.json()
    setUser(data)
    //fetch("/api/user")
   // .then(res => res.json())
    //.then(json => console.log(json))
  }

  useEffect(()=>{
    getUser()
  },[])

  console.log(user)
  return (
    <div className="">
    {user.map((each)=>{
      return<>
      <div className="container">
<h1 className="">Name : {each.name}</h1>
    <h1 className="">UserName :{each.username}</h1>
    <h1 className="">Email :{each.email}</h1>
      </div>
      </>
      
    })}
      
    </div>
  )
}

export default App;
