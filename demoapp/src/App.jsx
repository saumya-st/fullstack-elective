import { Wrapper } from "./components/Wrapper";
import { Usercard } from "./components/Usercard";
export default function App() {
  const users=[
    {name:"virat Kohli",role:"Batsman",country:"India"},
    {name:"MS Dhoni",role:"WK-Batsman",country:"India"},
    
  return (
    <div>
      <h1>User Dashboard</h1>
      <Wrapper title="User List">
        {users.map((data)=><Usercard data={data}/>)}
      </Wrapper>
    </div>
  )
}
