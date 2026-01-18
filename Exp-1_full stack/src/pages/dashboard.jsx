import {logs} from "../data/logs";

const Dashboard = () => {
    
    const calc = logs.reduce((sum,log)=>{
    sum= sum+log.carbon;
    
},0);



return(
    <div>
        <h2>Dashbaord</h2>
        <p>Total carbon Footprint : {calc} kgs</p>

        <ul>
            {logs.map(log => (
                <li key={log.id}>
                    {log.activity} = {log.carbon} kg
                </li>
            ))}
        </ul>
    </div>
)
};

export default Dashboard;
