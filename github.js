class Github{

    constructor(){
        this.client_id = '26229eae756d18e36667';
        this.client_secret = '7452e1010131e5729bc2317f10844f038cbaac9c';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id= ${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}