import DBConnection from "../DBConnection";
import GetArticles from "./GetArticles";
import { ImageInfo } from "../../Domain/ImageInfo";
import GetImagesInfo from "./GetImagesInfo";
import { ImageService } from "../../Services/ImageService";
import { ArticleService } from "../../Services/ArticleService";


export default class DataInitializer
{
    
    async InitializeArticles()
    {
        var service = new ArticleService();
        service.InsertMany(GetArticles());
    }

    async InitlaizeImages()
    {
        var service = new ImageService();
        await service.InsertMany(GetImagesInfo());
    }
}