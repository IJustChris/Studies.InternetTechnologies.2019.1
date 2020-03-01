export class Article
{
    _id:number;
    Title: string;
    Content: string;
    ImageUrl: string;

    constructor(title:string, content:string,imageName:string) 
    {
        this.Title = title;
        this.Content = content;
        this.ImageUrl = imageName;
    }
}