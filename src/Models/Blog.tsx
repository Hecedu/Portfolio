export default class Blog {
    id: number;
    title: string;
    content: string;
    constructor(
        id: number,
        title: string,
        content: string
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
