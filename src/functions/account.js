async function _baseFn_(username, urlSuffix){
    if( !username) throw new Error("Username cannot be empty");

    try {
        const url = `https://api.github.com/users/${username}/${urlSuffix}`;
        const data = await fetch(url);
        return data;
    } catch (error) {
        throw error;
    }
}
export const find = (username)=>_baseFn_(username, "");

export const findFollowers = (username)=>_baseFn_(username, `followers`);

export const findFollowing= (username)=> _baseFn_(username, "following");

export const findRepositories = (username)=> _baseFn_(username, "repos");

export const findOrganisations = (username) => _baseFn_(username, "orgs")