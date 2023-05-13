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


class AuthenticationFactory {

    static create(provider){
        return new Authentication()
            .setProvider(provider)
            .build
    }
}


const obj =  AuthenticationFactory.create("test");
