import express from "express";
import {
    IController,
    ArticleController,
    ImageController} from "./"

export default class Server
{
    private _app: express.Application;
    private _port: number = 80;
    private _controllers: IController[];

    constructor() 
    {
        this._controllers = new Array();

        this._controllers.push(new ArticleController());
        this._controllers.push(new ImageController());
    }

    public Run() 
    {
        this._app = express();

        this._controllers.forEach(x => x.SetupEndpoints(this._app));
        this._app.use(express.static('public'));

        this._app.listen(this._port,() => console.log(`Listening on port ${this._port}`));   
    }


}