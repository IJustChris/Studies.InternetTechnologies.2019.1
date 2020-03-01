import IController from "./IController";
import express from "express";
import DBConnection from "../../Database/DBConnection";
import { ImageService } from "../../Services/ImageService";

export class ImageController implements IController
{

    public constructor() 
    {
    }

    SetupEndpoints(application: express.Application) 
    {
        application.get('/API/images',this.Get);
    }

    private async Get(request: express.Request, response: express.Response)
    {

        var service = new ImageService();
        var images = await service.Get();
        images.forEach(x => x.ImageUrl= `${request.protocol}://${request.hostname}/images/${x.ImageUrl}`)
        response.json(images);
    }
    
}