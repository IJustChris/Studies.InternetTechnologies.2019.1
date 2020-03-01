export class ImageInfo
{
    _id:number;
    ImageUrl:string;
    Description:string;

    constructor(imgUrl:string, description:string) 
    {
        this.ImageUrl = imgUrl;
        this.Description = description;
    }
}