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

const obj = new Authentication()
.setProvider("test")
.build();


console.log("new instance ", obj2)