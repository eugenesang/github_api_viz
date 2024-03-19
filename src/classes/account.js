class GithubAccount {
    /**
     * 
     * @param {String} username 
     */
    constructor(username) {
        this.username = username;
        this.login = "";
        this.id = 0;
        this.node_id = "";
        this.avatar_url = "";
        this.gravatar_id = "";
        this.url = "";
        this.html_url = "";
        this.followers_url = "";
        this.following_url = "";
        this.gists_url = "";
        this.starred_url = "";
        this.subscriptions_url = "";
        this.organizations_url = "";
        this.repos_url = "";
        this.events_url = "";
        this.received_events_url = "";
        this.type = "User";
        this.site_admin = false;
        this.name = "";
        this.company = null;
        this.blog = "";
        this.location = "";
        this.email = null;
        this.hireable = true;
        this.bio = "";
        this.twitter_username = "";
        this.public_repos = 0;
        this.public_gists = 0;
        this.followers = 0;
        this.following = 0;
        this.created_at = "";
        this.updated_at = "";
        this.isLoaded = false;
    }

    async load(){
        
    }
}

export default GithubAccount;