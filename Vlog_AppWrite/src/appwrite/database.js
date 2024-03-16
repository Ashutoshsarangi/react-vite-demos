import { Client, Storage, ID, Databases, Query } from "appwrite";
import { config } from "../config/config";

class DataBase {
  client = new Client();
  constructor() {
    this.client
      .setEndpoint(config.APPWRITE_ENDPOINT) // Your API Endpoint
      .setProject(config.PROJECT_ID); // Your project ID

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createDocument({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.DATABASE_ID,
        config.COLLECTION_ID,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async updateDocument(
    documentID,
    { title, slug, content, featuredImage, status, userId }
  ) {
    try {
      return await this.databases.updateDocument(
        config.DATABASE_ID,
        config.COLLECTION_ID,
        documentID,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async getDocument(documentID) {
    try {
      return await this.databases.getDocument(
        config.DATABASE_ID,
        config.COLLECTION_ID,
        documentID
      );
    } catch (err) {
      console.log(err);
    }
  }

  async getAllDocuments() {
    const queries = [Query.equal("status", "active")];
    try {
      return await this.databases.listDocuments(
        config.DATABASE_ID,
        config.COLLECTION_ID,
        queries
      );
    } catch (err) {
      console.log(err);
    }
  }

  async deleteDocument(documentID) {
    try {
      return await this.databases.deleteDocument(
        config.DATABASE_ID,
        config.COLLECTION_ID,
        documentID
      );
    } catch (err) {
      console.log(err);
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(config.BUCKET_ID, ID.unique(), file);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteFile(fileID) {
    try {
      return await this.storage.deleteFile(config.BUCKET_ID, fileID);
    } catch (err) {
      console.log(err);
    }
  }

  getFilePreview(fileID) {
    return this.storage.getFilePreview(config.BUCKET_ID, fileID);
  }
}

const database = new DataBase();

export default database;
