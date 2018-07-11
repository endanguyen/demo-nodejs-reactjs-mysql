import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository {
  constructor(){
    super();
    this.PATH = "/user";
  }
}

export default UserRepository;
