export type Entity = {
    id: number;
}

export const unstableDelay = (ms: number) => new Promise(resolve =>
    setTimeout(resolve, Math.round(ms * 0.8 + Math.random() * ms * 0.4))
)

export default class APIMock<T extends Entity> {
    constructor(public readonly key: string, public readonly initialValues: T[] = []) {}

    findAll(): T[] {
        if (localStorage.getItem(this.key) === null) {
            localStorage.setItem(this.key, JSON.stringify(this.initialValues))
        }

        const data = localStorage.getItem(this.key)!
        return JSON.parse(data) as T[]
    }

    saveAll(data: T[]) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }
}

export class SingleEntityAPIMock<T extends Entity> {
    constructor(public readonly key: string) {}

    get(): T | null {
        if (localStorage.getItem(this.key) === null) {
            return null;
        }

        const data = localStorage.getItem(this.key)!
        return JSON.parse(data) as T
    }

    set(data: T | null) {
        localStorage.setItem(this.key, JSON.stringify(data))
    }
}