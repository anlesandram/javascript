# Design Patterns

## Builder
```
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
```

## Factory 

```
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
```

### Singleton

```
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
```
