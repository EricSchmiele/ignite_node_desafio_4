import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(admin = false) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.admin = admin;
  }
}

export { User };
