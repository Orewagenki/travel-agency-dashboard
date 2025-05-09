import {Header} from "../../../components";

const Dashboard = () => {
  const user = {name: "Adrian"};
  
  return(
    <main className="dashboard wrapper">
        <Header
            title={`Welcome ${user?.name ?? 'Guest'}👋`}
          descrpition="Track activity, trends and popular destinations in real time"
          />  
    </main>  
  )
}

export default Dashboard
