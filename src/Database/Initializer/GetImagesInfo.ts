import { ImageInfo } from "../../Domain/ImageInfo";

export default function GetImagesInfo():ImageInfo[]
{
    return [
        {
            "_id":1,
            "ImageUrl":"g1.jpg",
            "Description": "Lorem ipsum"
        },
        {
            "_id":2,
            "ImageUrl":"g2.jpg",
            "Description": "Vivamus feugiat,"
        },
        {
            "_id":3,
            "ImageUrl":"g3.jpg",
            "Description": "Vivamus egestas"
        },
        {
            "_id":4,
            "ImageUrl":"g4.jpg",
            "Description": "Nunc convallis"
        }

    ]
}