import IController from "./IController";
import express from "express";
import { isNumber } from "util";
import { ArticleService } from "../../Services/ArticleService";

export class ArticleController implements IController
{
    public constructor() 
    {
    }

    SetupEndpoints(application: express.Application) 
    {
        application.get('/API/article',this.Get);
        
    }

    async Get(request: express.Request, response: express.Response)
    {
        let page:number = request.query.page;

        if (isNaN(page))
        {
            page = 1;
        } 

        var articles = await new ArticleService().Get(page,4);

        articles.forEach(x => x.ImageUrl = `${request.protocol}://${request.hostname}/images/${x.ImageUrl}`);
        response.json(articles);
    }
    
}