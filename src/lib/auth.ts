import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";


const dbUrl = process.env.BETTER_AUTH_DB_URL;
if (!dbUrl) {
  throw new Error("BETTER_AUTH_DB_URL is not set");
}

const client = new MongoClient(dbUrl);
const db = client.db('better-auth-db');

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  },
    database: mongodbAdapter(db, {
        client
    })

  //...
});