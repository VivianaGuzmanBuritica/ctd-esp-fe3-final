import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
//import { useState, useEffect } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

//  const [userList, setUserList] = useState([]);
  // const fetchUser = async() => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await res.json()
  //   setUserList(data)
  // } 
  // useEffect(() => {
  //   fetchUser()
  //   }, [])

 const {userList} = useContextGlobal()
 console.log("home "+userList);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       {userList.map(user =><Card key= {user.id}  id={user.id} name={user.name} username={user.username}/>) }
      </div>
    </main>
  )
}


export default Home