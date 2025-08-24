import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Singleton DynamoDB client
const client = new DynamoDBClient();

// Singleton Document Client (High-level API)
const docClient = DynamoDBDocumentClient.from(client);

export { client, docClient };
