export interface LogData {
    id: number;
    tag: string;
    message: string;
    priority: string;
    color: string;
    timestamp: string;
}

class ListItem {
    private readonly container: HTMLDivElement;
    private readonly tagDiv: HTMLDivElement;
    private readonly priorityDiv: HTMLDivElement;
    private readonly messageDiv: HTMLDivElement;
    private readonly timestampDiv: HTMLDivElement;

    constructor(data: LogData) {
        this.container = document.createElement("div");
        this.container.className = "log-output";

        this.timestampDiv = this.createTextDiv("tv_timestamp", data.timestamp);
        this.tagDiv = this.createTextDiv("tv_tag", data.tag);
        this.priorityDiv = this.createPriorityDiv("tv_priority", data.priority, data.color);
        this.messageDiv = this.createMessageDiv("tv_message", data.message, data.color);

        this.container.appendChild(this.timestampDiv);
        this.container.appendChild(this.tagDiv);
        this.container.appendChild(this.priorityDiv);
        this.container.appendChild(this.messageDiv);
    }

    private createTextDiv(
        id: string,
        text: string,
        className: string = "text",
        color?: string
    ): HTMLDivElement {
        const div = document.createElement("div");
        div.id = id;
        div.className = className;
        div.textContent = text;
        if (color) {
            div.style.background = color;
        }
        return div;
    }

    private createPriorityDiv(
        id: string,
        text: string,
        color: string
    ): HTMLDivElement {
        const div = this.createTextDiv(id, text, "priority");
        div.style.background = color;
        return div;
    }

    private createMessageDiv(
        id: string,
        text: string,
        color: string
    ): HTMLDivElement {
        const div = this.createTextDiv(id, text);
        div.style.color = color;
        return div;
    }

    public render(): HTMLDivElement {
        return this.container;
    }
}

export default ListItem;