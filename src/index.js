"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogComponent_js_1 = require("./Component/LogComponent.js");
var button = document.getElementById("search");
var logContainer = document.getElementById("log_output");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    try {
        fetch("http://localhost:5555/get_all_logs")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var logs = data.map(function (x) { return ({
                id: x.id,
                tag: x.tag,
                message: x.message,
                priority: x.priority,
                timestamp: x.timestamp
            }); });
            return logs;
        })
            .then(function (data) {
            console.log(data);
            data.forEach(function (log) { logContainer === null || logContainer === void 0 ? void 0 : logContainer.appendChild(new LogComponent_js_1.default(log).render()); });
        });
    }
    catch (err) {
        console.error(err);
    }
});
