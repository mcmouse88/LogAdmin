"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(data) {
        this.container = document.createElement("div");
        this.container.className = "log-output";
        this.timestampDiv = this.createTextDiv("tv_timestamp", data.timestamp);
        this.tagDiv = this.createTextDiv("tv_tag", data.tag);
        this.priorityDiv = this.createTextDiv("tv_priority", data.priority, "priority");
        this.messageDiv = this.createTextDiv("tv_message", data.priority);
        this.container.appendChild(this.messageDiv);
        this.container.appendChild(this.tagDiv);
        this.container.appendChild(this.priorityDiv);
        this.container.appendChild(this.timestampDiv);
    }
    ListItem.prototype.createTextDiv = function (id, text, className) {
        if (className === void 0) { className = "text"; }
        var div = document.createElement("div");
        div.id = id;
        div.className = className;
        div.textContent = text;
        return div;
    };
    ListItem.prototype.render = function () {
        return this.container;
    };
    return ListItem;
}());
exports.default = ListItem;
