import Server from "./API/Server";
import DataInitializer from "./Database/Initializer/DataInitializer";


proc();
//InitializeDB();

async function proc()
{
    const server:Server = new Server();
    server.Run();
}

async function InitializeDB()
{
    var initializer = new DataInitializer();
    initializer.InitlaizeImages();
}
