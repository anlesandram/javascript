class Authentication {

    constructor() { }

    setProvider(provider) {
        this.provider = provider
        return this
    }

    setOAuthUrl(url) {
        this.url = url
        return this
    }

    build() {
        return this;
    }
} 
 
 class Authentication {
    static _instance

    static build(){
        if(Authentication._instance){
            Authentication._instance = new Authentication().setProvider("test");
        }

        return Authentication._instance
    }
 }