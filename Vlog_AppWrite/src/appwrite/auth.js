import { Client, Account, ID } from "appwrite";
import { config } from "../config/config";

class AuthService {
  client = new Client();

  constructor() {
    this.account = new Account(this.client);
    this.client
      .setEndpoint(config.APPWRITE_ENDPOINT) // Your API Endpoint
      .setProject(config.PROJECT_ID); // Your project ID
  }

  async createAccount({ email, password, name }) {
    console.log("inside Create account ---> ", email, password);
    try {
      const res = await this.account.create(ID.unique(), email, password, name);
      if (res) {
        return this.login({ email, password });
      } else {
        return res;
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async getAccount() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log(err);
    }
  }

  async login({ email, password }) {
    console.log(email, password);
    try {
      return await this.account.createEmailSession(email, password);
      // return await this.getAccount();
    } catch (err) {
      console.log(err);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      console.log(err);
    }
  }
}

const authService = new AuthService();

export default authService;
