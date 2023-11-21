import { DBConnect } from "../dbConnector";
import { TestEntity } from "../../entities";

export const getTestRepository = async () => {
    const connection = await DBConnect.getConnection();

    return connection.getRepository(TestEntity);
}