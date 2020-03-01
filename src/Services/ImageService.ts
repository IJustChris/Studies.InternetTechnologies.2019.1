import DBConnection from "../Database/DBConnection";
import { ImageInfo } from "../Domain/ImageInfo";

export class ImageService
{
    private _context:DBConnection;

    constructor() 
    {
        this._context = new DBConnection();
    }

    async Get():Promise<ImageInfo[]>
    {
        await this._context.Connect();

        let imagesDB = await this._context.Images();

        var images:ImageInfo[] = await imagesDB.find().toArray();

        this._context.Disconnect();

        return images
    }

    async Insert(image:ImageInfo):Promise<void>
    {
        await this._context.Connect();
        let imagesDB = await this._context.Images();
        await imagesDB.insertOne(image);
        this._context.Disconnect();
    }

    async InsertMany(images:ImageInfo[]):Promise<void>
    {
        await this._context.Connect();
        let imagesDB = await this._context.Images();
        await imagesDB.insertMany(images);
        this._context.Disconnect();
    }
}