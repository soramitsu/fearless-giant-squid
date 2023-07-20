export interface Type<T> {
    new (value: T): unknown
}

export interface Display<T> {
    new (...args: any): {
        format(): T
    }
}

export interface Serialize<T> {
    new (...args: any): {
        serialize(): T
    }
}

type StaticLookup_Source = any

export interface StaticLookup<Target> {
    lookup(s: StaticLookup_Source): Target
    unlookup(t: Target): StaticLookup_Source
}

type EnumEntry<K extends string, V> = {__kind: K; value?: V}

export abstract class Enum<U extends EnumEntry<string, any>> {
    constructor(protected value: any) {}

    match<
        S extends {
            [K in U['__kind']]?: (value: Extract<U, EnumEntry<K, any>>['value']) => any
        } & {
            _?: () => any
        }
    >(s: S): ReturnType<Exclude<S[keyof S], undefined>> {
        const fn = s[this.value.__kind as U['__kind']]
        if (fn == null) {
            const _ = s._
            if (_ == null) {
                throw new Error()
            } else {
                return _()
            }
        } else {
            return fn(this.value.value)
        }
    }

    eq(kind: keyof U) {
        return this.value.__kind === kind
    }
}
