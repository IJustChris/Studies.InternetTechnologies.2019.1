import mongodb, { MongoError, MongoClient } from "mongodb";
import { Article } from "../Domain/Article";
import GetArticles from "./Initializer/GetArticles";
import { ImageInfo } from "../Domain/ImageInfo";

export default class DBConnection
{
    private _username = 'TechApp';
    private _password = 'cobjqchzjyvnn4oi';
    private _host = 'localhost';
    private _port = '27017';
    private _database = 'Techapp';

    private _connectionString:string = `mongodb://${this._username}:${this._password}@${this._host}}:${this._port}}/${this._database}`;
    private _client: mongodb.MongoClient;

    constructor() 
    {
    }

    async Connect()
    {
        this._client = await MongoClient.connect(this._connectionString,  {useNewUrlParser: true});
    }

    async Disconnect()
    {
        await this._client.close();
    }

    async Articles(): Promise<mongodb.Collection<Article>>
    {
        return await this._client.db("techapp").collection<Article>("Articles");
    }

    async Images(): Promise<mongodb.Collection<ImageInfo>>
    {
        return await this._client.db("techapp").collection<ImageInfo>("Images");
    }


}