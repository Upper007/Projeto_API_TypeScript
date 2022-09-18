import mongoose from "mongoose";
import config from "config";

// logger
import Logger from "./logger";

async function connect() {

    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectou ao banco de dados!")
    } catch (error) {
        Logger.error("Não foi possivel o connect")
        Logger.error(`Erro: ${error}`)
        process.exit(1)
    }

}

export default connect