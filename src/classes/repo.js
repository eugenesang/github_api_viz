import GithubAccount from "./account";

class RepoOwner extends GithubAccount{
    constructor(username){
        super(username);
        this.site_admin = false;
    }
}
class GithubRepo{
    constructor(url){
        this.url = url;
        this.owner = null;
    }

    async load(){
        // load and then have user info
        this.owner = new RepoOwner()
    }
}

export default GithubRepo;