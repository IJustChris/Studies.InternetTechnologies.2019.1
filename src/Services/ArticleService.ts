import DBConnection from "../Database/DBConnection";
import { Article } from "../Domain/Article";


export class ArticleService
{
    private _context:DBConnection;

    constructor() 
    {
        this._context = new DBConnection();
    }

    async Get(page:number, articlesOnPage:number):Promise<Article[]>
    {
        await this._context.Connect();

        let articlesDB = await this._context.Articles();

        var numberOfArticles:number = await articlesDB.count();
        let skip = (page - 1) * articlesOnPage;

        if (skip >= numberOfArticles)
        {
            skip = numberOfArticles - articlesOnPage;
        }
        
        let queryOptions = {
            "limit": articlesOnPage,
            "skip": skip
        };

        var articles:Article[] = await articlesDB.find({},queryOptions).toArray();

        this._context.Disconnect();

        return articles
    }

    async Insert(article:Article):Promise<void>
    {
        await this._context.Connect();
        let articelsDB = await this._context.Articles();
        await articelsDB.insertOne(article);
        this._context.Disconnect();
    }

    async InsertMany(articles:Article[]):Promise<void>
    {
        await this._context.Connect();
        let articelsDB = await this._context.Articles();
        await articelsDB.insertMany(articles);
        this._context.Disconnect();
    }
}