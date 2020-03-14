export default class Deps {
    private static deps: any[] = [];

    static build(...types: any) {
        for (const Type of types)
            this.deps.push(new Type());
    }

    static get<T>(type: any): T {        
        const service = this.deps.find(t => t instanceof type);
        return !service ? this.add<T>(new type()) : service;
    }

    private static add<T>(instance: any): T {
        this.deps.push(instance);
        return instance;
    }
}
