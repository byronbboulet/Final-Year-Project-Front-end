export class Tutorial {
    id?: number;
    title?: string;
    description?: string;
    url?: string;

    constructor(id: number, title: string, description: string, url: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}
