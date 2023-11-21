import { DBConnect } from "../utils";

const databaseSetup = async (next: () => void) => {
  try {
    await DBConnect.getConnection();
    console.info("PostgreSQL is connected");
    next();
  } catch (err) {
    console.error(err);
  }
};

export default databaseSetup;
