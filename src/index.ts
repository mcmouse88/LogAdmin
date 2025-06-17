import ListItem from "./Component/LogComponent.js";
import { LogData } from "./Component/LogComponent.js";

const button = document.getElementById("search");
const logContainer = document.getElementById("log_container");

button?.addEventListener("click", () => {
    try {
        fetch("http://localhost:5555/get_all_logs")
            .then(res => res.json())
            .then((data: any[]) => {
                const logs: LogData[] = data.map(x => ({
                    id: x.id,
                    tag: x.tag_name,
                    message: x.message,
                    priority: x.priority_short,
                    color: x.color,
                    timestamp: x.timestamp
                }));
                return logs;
            })
            .then(data => {
                data.forEach((log: LogData) => {
                    logContainer?.appendChild(new ListItem(log).render())}
                )
            });
    } catch (err) {
        console.error(err);
    }
});
