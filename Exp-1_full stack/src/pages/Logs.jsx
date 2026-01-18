import { logs } from "../data/logs";

const Logs = () => {
    const highCarbon = logs.filter(
        log => log.carbon >= 4
    );
    const lowCarbon = logs.filter(
        log=>log.carbon < 4 
    );

    return (
        <div>
            <h2>Daily Logs</h2>
            <ul>
                High Carbon:
                {highCarbon.map(log => (
                    <li key={log.id} style={{backgroundColor:"red"}}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
            <ul >
                Low Carbon:
                {lowCarbon.map(log => (
                    <li key={log.id} style={{backgroundColor:"green"}}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
            
            
        </div>
    );
};

export default Logs;