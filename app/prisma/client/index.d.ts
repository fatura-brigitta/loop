
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model API_Token
 * 
 */
export type API_Token = $Result.DefaultSelection<Prisma.$API_TokenPayload>
/**
 * Model Service_Usage
 * 
 */
export type Service_Usage = $Result.DefaultSelection<Prisma.$Service_UsagePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aPI_Token`: Exposes CRUD operations for the **API_Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more API_Tokens
    * const aPI_Tokens = await prisma.aPI_Token.findMany()
    * ```
    */
  get aPI_Token(): Prisma.API_TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service_Usage`: Exposes CRUD operations for the **Service_Usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service_Usages
    * const service_Usages = await prisma.service_Usage.findMany()
    * ```
    */
  get service_Usage(): Prisma.Service_UsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Workspace: 'Workspace',
    API_Token: 'API_Token',
    Service_Usage: 'Service_Usage',
    Service: 'Service'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workspace" | "aPI_Token" | "service_Usage" | "service"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WorkspaceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WorkspaceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      API_Token: {
        payload: Prisma.$API_TokenPayload<ExtArgs>
        fields: Prisma.API_TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.API_TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.API_TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          findFirst: {
            args: Prisma.API_TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.API_TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          findMany: {
            args: Prisma.API_TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>[]
          }
          create: {
            args: Prisma.API_TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          createMany: {
            args: Prisma.API_TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.API_TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          update: {
            args: Prisma.API_TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          deleteMany: {
            args: Prisma.API_TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.API_TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.API_TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$API_TokenPayload>
          }
          aggregate: {
            args: Prisma.API_TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPI_Token>
          }
          groupBy: {
            args: Prisma.API_TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<API_TokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.API_TokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.API_TokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.API_TokenCountArgs<ExtArgs>
            result: $Utils.Optional<API_TokenCountAggregateOutputType> | number
          }
        }
      }
      Service_Usage: {
        payload: Prisma.$Service_UsagePayload<ExtArgs>
        fields: Prisma.Service_UsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Service_UsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Service_UsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          findFirst: {
            args: Prisma.Service_UsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Service_UsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          findMany: {
            args: Prisma.Service_UsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>[]
          }
          create: {
            args: Prisma.Service_UsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          createMany: {
            args: Prisma.Service_UsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Service_UsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          update: {
            args: Prisma.Service_UsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          deleteMany: {
            args: Prisma.Service_UsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Service_UsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Service_UsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_UsagePayload>
          }
          aggregate: {
            args: Prisma.Service_UsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService_Usage>
          }
          groupBy: {
            args: Prisma.Service_UsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Service_UsageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Service_UsageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Service_UsageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Service_UsageCountArgs<ExtArgs>
            result: $Utils.Optional<Service_UsageCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workspace?: WorkspaceOmit
    aPI_Token?: API_TokenOmit
    service_Usage?: Service_UsageOmit
    service?: ServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    api_tokens: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_tokens?: boolean | WorkspaceCountOutputTypeCountApi_tokensArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountApi_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: API_TokenWhereInput
  }


  /**
   * Count Type API_TokenCountOutputType
   */

  export type API_TokenCountOutputType = {
    service_usages: number
  }

  export type API_TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_usages?: boolean | API_TokenCountOutputTypeCountService_usagesArgs
  }

  // Custom InputTypes
  /**
   * API_TokenCountOutputType without action
   */
  export type API_TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_TokenCountOutputType
     */
    select?: API_TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * API_TokenCountOutputType without action
   */
  export type API_TokenCountOutputTypeCountService_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_UsageWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    service_usages: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_usages?: boolean | ServiceCountOutputTypeCountService_usagesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountService_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_UsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password_hash: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password_hash: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password_hash: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password_hash: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password_hash?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password_hash?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password_hash", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password_hash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    limit: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    limit: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    limit: number | null
    user_id: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    limit: number | null
    user_id: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    limit: number
    user_id: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    limit?: true
  }

  export type WorkspaceSumAggregateInputType = {
    limit?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    limit?: true
    user_id?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    limit?: true
    user_id?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    limit?: true
    user_id?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    title: string
    description: string | null
    limit: number | null
    user_id: string
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    limit?: boolean
    user_id?: boolean
    user?: boolean | Workspace$userArgs<ExtArgs>
    api_tokens?: boolean | Workspace$api_tokensArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>



  export type WorkspaceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    limit?: boolean
    user_id?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "limit" | "user_id", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Workspace$userArgs<ExtArgs>
    api_tokens?: boolean | Workspace$api_tokensArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      api_tokens: Prisma.$API_TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      limit: number | null
      user_id: string
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * @param {WorkspaceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const workspace = await prisma.workspace.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WorkspaceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Workspace.
     * @param {WorkspaceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const workspace = await prisma.workspace.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WorkspaceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Workspace$userArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    api_tokens<T extends Workspace$api_tokensArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$api_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly title: FieldRef<"Workspace", 'String'>
    readonly description: FieldRef<"Workspace", 'String'>
    readonly limit: FieldRef<"Workspace", 'Int'>
    readonly user_id: FieldRef<"Workspace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace findRaw
   */
  export type WorkspaceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Workspace aggregateRaw
   */
  export type WorkspaceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Workspace.user
   */
  export type Workspace$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Workspace.api_tokens
   */
  export type Workspace$api_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    where?: API_TokenWhereInput
    orderBy?: API_TokenOrderByWithRelationInput | API_TokenOrderByWithRelationInput[]
    cursor?: API_TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: API_TokenScalarFieldEnum | API_TokenScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model API_Token
   */

  export type AggregateAPI_Token = {
    _count: API_TokenCountAggregateOutputType | null
    _min: API_TokenMinAggregateOutputType | null
    _max: API_TokenMaxAggregateOutputType | null
  }

  export type API_TokenMinAggregateOutputType = {
    id: string | null
    name: string | null
    token: string | null
    workspace_id: string | null
    createdAt: Date | null
    creation_date: Date | null
    revocation_date: Date | null
  }

  export type API_TokenMaxAggregateOutputType = {
    id: string | null
    name: string | null
    token: string | null
    workspace_id: string | null
    createdAt: Date | null
    creation_date: Date | null
    revocation_date: Date | null
  }

  export type API_TokenCountAggregateOutputType = {
    id: number
    name: number
    token: number
    workspace_id: number
    createdAt: number
    creation_date: number
    revocation_date: number
    _all: number
  }


  export type API_TokenMinAggregateInputType = {
    id?: true
    name?: true
    token?: true
    workspace_id?: true
    createdAt?: true
    creation_date?: true
    revocation_date?: true
  }

  export type API_TokenMaxAggregateInputType = {
    id?: true
    name?: true
    token?: true
    workspace_id?: true
    createdAt?: true
    creation_date?: true
    revocation_date?: true
  }

  export type API_TokenCountAggregateInputType = {
    id?: true
    name?: true
    token?: true
    workspace_id?: true
    createdAt?: true
    creation_date?: true
    revocation_date?: true
    _all?: true
  }

  export type API_TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which API_Token to aggregate.
     */
    where?: API_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of API_Tokens to fetch.
     */
    orderBy?: API_TokenOrderByWithRelationInput | API_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: API_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` API_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` API_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned API_Tokens
    **/
    _count?: true | API_TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: API_TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: API_TokenMaxAggregateInputType
  }

  export type GetAPI_TokenAggregateType<T extends API_TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAPI_Token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPI_Token[P]>
      : GetScalarType<T[P], AggregateAPI_Token[P]>
  }




  export type API_TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: API_TokenWhereInput
    orderBy?: API_TokenOrderByWithAggregationInput | API_TokenOrderByWithAggregationInput[]
    by: API_TokenScalarFieldEnum[] | API_TokenScalarFieldEnum
    having?: API_TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: API_TokenCountAggregateInputType | true
    _min?: API_TokenMinAggregateInputType
    _max?: API_TokenMaxAggregateInputType
  }

  export type API_TokenGroupByOutputType = {
    id: string
    name: string
    token: string
    workspace_id: string
    createdAt: Date
    creation_date: Date
    revocation_date: Date | null
    _count: API_TokenCountAggregateOutputType | null
    _min: API_TokenMinAggregateOutputType | null
    _max: API_TokenMaxAggregateOutputType | null
  }

  type GetAPI_TokenGroupByPayload<T extends API_TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<API_TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof API_TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], API_TokenGroupByOutputType[P]>
            : GetScalarType<T[P], API_TokenGroupByOutputType[P]>
        }
      >
    >


  export type API_TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    token?: boolean
    workspace_id?: boolean
    createdAt?: boolean
    creation_date?: boolean
    revocation_date?: boolean
    service_usages?: boolean | API_Token$service_usagesArgs<ExtArgs>
    workspace?: boolean | API_Token$workspaceArgs<ExtArgs>
    _count?: boolean | API_TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPI_Token"]>



  export type API_TokenSelectScalar = {
    id?: boolean
    name?: boolean
    token?: boolean
    workspace_id?: boolean
    createdAt?: boolean
    creation_date?: boolean
    revocation_date?: boolean
  }

  export type API_TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "token" | "workspace_id" | "createdAt" | "creation_date" | "revocation_date", ExtArgs["result"]["aPI_Token"]>
  export type API_TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_usages?: boolean | API_Token$service_usagesArgs<ExtArgs>
    workspace?: boolean | API_Token$workspaceArgs<ExtArgs>
    _count?: boolean | API_TokenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $API_TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "API_Token"
    objects: {
      service_usages: Prisma.$Service_UsagePayload<ExtArgs>[]
      workspace: Prisma.$WorkspacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      token: string
      workspace_id: string
      createdAt: Date
      creation_date: Date
      revocation_date: Date | null
    }, ExtArgs["result"]["aPI_Token"]>
    composites: {}
  }

  type API_TokenGetPayload<S extends boolean | null | undefined | API_TokenDefaultArgs> = $Result.GetResult<Prisma.$API_TokenPayload, S>

  type API_TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<API_TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: API_TokenCountAggregateInputType | true
    }

  export interface API_TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['API_Token'], meta: { name: 'API_Token' } }
    /**
     * Find zero or one API_Token that matches the filter.
     * @param {API_TokenFindUniqueArgs} args - Arguments to find a API_Token
     * @example
     * // Get one API_Token
     * const aPI_Token = await prisma.aPI_Token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends API_TokenFindUniqueArgs>(args: SelectSubset<T, API_TokenFindUniqueArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one API_Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {API_TokenFindUniqueOrThrowArgs} args - Arguments to find a API_Token
     * @example
     * // Get one API_Token
     * const aPI_Token = await prisma.aPI_Token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends API_TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, API_TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first API_Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenFindFirstArgs} args - Arguments to find a API_Token
     * @example
     * // Get one API_Token
     * const aPI_Token = await prisma.aPI_Token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends API_TokenFindFirstArgs>(args?: SelectSubset<T, API_TokenFindFirstArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first API_Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenFindFirstOrThrowArgs} args - Arguments to find a API_Token
     * @example
     * // Get one API_Token
     * const aPI_Token = await prisma.aPI_Token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends API_TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, API_TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more API_Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all API_Tokens
     * const aPI_Tokens = await prisma.aPI_Token.findMany()
     * 
     * // Get first 10 API_Tokens
     * const aPI_Tokens = await prisma.aPI_Token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aPI_TokenWithIdOnly = await prisma.aPI_Token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends API_TokenFindManyArgs>(args?: SelectSubset<T, API_TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a API_Token.
     * @param {API_TokenCreateArgs} args - Arguments to create a API_Token.
     * @example
     * // Create one API_Token
     * const API_Token = await prisma.aPI_Token.create({
     *   data: {
     *     // ... data to create a API_Token
     *   }
     * })
     * 
     */
    create<T extends API_TokenCreateArgs>(args: SelectSubset<T, API_TokenCreateArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many API_Tokens.
     * @param {API_TokenCreateManyArgs} args - Arguments to create many API_Tokens.
     * @example
     * // Create many API_Tokens
     * const aPI_Token = await prisma.aPI_Token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends API_TokenCreateManyArgs>(args?: SelectSubset<T, API_TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a API_Token.
     * @param {API_TokenDeleteArgs} args - Arguments to delete one API_Token.
     * @example
     * // Delete one API_Token
     * const API_Token = await prisma.aPI_Token.delete({
     *   where: {
     *     // ... filter to delete one API_Token
     *   }
     * })
     * 
     */
    delete<T extends API_TokenDeleteArgs>(args: SelectSubset<T, API_TokenDeleteArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one API_Token.
     * @param {API_TokenUpdateArgs} args - Arguments to update one API_Token.
     * @example
     * // Update one API_Token
     * const aPI_Token = await prisma.aPI_Token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends API_TokenUpdateArgs>(args: SelectSubset<T, API_TokenUpdateArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more API_Tokens.
     * @param {API_TokenDeleteManyArgs} args - Arguments to filter API_Tokens to delete.
     * @example
     * // Delete a few API_Tokens
     * const { count } = await prisma.aPI_Token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends API_TokenDeleteManyArgs>(args?: SelectSubset<T, API_TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more API_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many API_Tokens
     * const aPI_Token = await prisma.aPI_Token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends API_TokenUpdateManyArgs>(args: SelectSubset<T, API_TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one API_Token.
     * @param {API_TokenUpsertArgs} args - Arguments to update or create a API_Token.
     * @example
     * // Update or create a API_Token
     * const aPI_Token = await prisma.aPI_Token.upsert({
     *   create: {
     *     // ... data to create a API_Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the API_Token we want to update
     *   }
     * })
     */
    upsert<T extends API_TokenUpsertArgs>(args: SelectSubset<T, API_TokenUpsertArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more API_Tokens that matches the filter.
     * @param {API_TokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aPI_Token = await prisma.aPI_Token.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: API_TokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a API_Token.
     * @param {API_TokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aPI_Token = await prisma.aPI_Token.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: API_TokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of API_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenCountArgs} args - Arguments to filter API_Tokens to count.
     * @example
     * // Count the number of API_Tokens
     * const count = await prisma.aPI_Token.count({
     *   where: {
     *     // ... the filter for the API_Tokens we want to count
     *   }
     * })
    **/
    count<T extends API_TokenCountArgs>(
      args?: Subset<T, API_TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], API_TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a API_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends API_TokenAggregateArgs>(args: Subset<T, API_TokenAggregateArgs>): Prisma.PrismaPromise<GetAPI_TokenAggregateType<T>>

    /**
     * Group by API_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {API_TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends API_TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: API_TokenGroupByArgs['orderBy'] }
        : { orderBy?: API_TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, API_TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPI_TokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the API_Token model
   */
  readonly fields: API_TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for API_Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__API_TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service_usages<T extends API_Token$service_usagesArgs<ExtArgs> = {}>(args?: Subset<T, API_Token$service_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends API_Token$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, API_Token$workspaceArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the API_Token model
   */
  interface API_TokenFieldRefs {
    readonly id: FieldRef<"API_Token", 'String'>
    readonly name: FieldRef<"API_Token", 'String'>
    readonly token: FieldRef<"API_Token", 'String'>
    readonly workspace_id: FieldRef<"API_Token", 'String'>
    readonly createdAt: FieldRef<"API_Token", 'DateTime'>
    readonly creation_date: FieldRef<"API_Token", 'DateTime'>
    readonly revocation_date: FieldRef<"API_Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * API_Token findUnique
   */
  export type API_TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter, which API_Token to fetch.
     */
    where: API_TokenWhereUniqueInput
  }

  /**
   * API_Token findUniqueOrThrow
   */
  export type API_TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter, which API_Token to fetch.
     */
    where: API_TokenWhereUniqueInput
  }

  /**
   * API_Token findFirst
   */
  export type API_TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter, which API_Token to fetch.
     */
    where?: API_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of API_Tokens to fetch.
     */
    orderBy?: API_TokenOrderByWithRelationInput | API_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for API_Tokens.
     */
    cursor?: API_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` API_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` API_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of API_Tokens.
     */
    distinct?: API_TokenScalarFieldEnum | API_TokenScalarFieldEnum[]
  }

  /**
   * API_Token findFirstOrThrow
   */
  export type API_TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter, which API_Token to fetch.
     */
    where?: API_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of API_Tokens to fetch.
     */
    orderBy?: API_TokenOrderByWithRelationInput | API_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for API_Tokens.
     */
    cursor?: API_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` API_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` API_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of API_Tokens.
     */
    distinct?: API_TokenScalarFieldEnum | API_TokenScalarFieldEnum[]
  }

  /**
   * API_Token findMany
   */
  export type API_TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter, which API_Tokens to fetch.
     */
    where?: API_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of API_Tokens to fetch.
     */
    orderBy?: API_TokenOrderByWithRelationInput | API_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing API_Tokens.
     */
    cursor?: API_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` API_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` API_Tokens.
     */
    skip?: number
    distinct?: API_TokenScalarFieldEnum | API_TokenScalarFieldEnum[]
  }

  /**
   * API_Token create
   */
  export type API_TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a API_Token.
     */
    data: XOR<API_TokenCreateInput, API_TokenUncheckedCreateInput>
  }

  /**
   * API_Token createMany
   */
  export type API_TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many API_Tokens.
     */
    data: API_TokenCreateManyInput | API_TokenCreateManyInput[]
  }

  /**
   * API_Token update
   */
  export type API_TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a API_Token.
     */
    data: XOR<API_TokenUpdateInput, API_TokenUncheckedUpdateInput>
    /**
     * Choose, which API_Token to update.
     */
    where: API_TokenWhereUniqueInput
  }

  /**
   * API_Token updateMany
   */
  export type API_TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update API_Tokens.
     */
    data: XOR<API_TokenUpdateManyMutationInput, API_TokenUncheckedUpdateManyInput>
    /**
     * Filter which API_Tokens to update
     */
    where?: API_TokenWhereInput
    /**
     * Limit how many API_Tokens to update.
     */
    limit?: number
  }

  /**
   * API_Token upsert
   */
  export type API_TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the API_Token to update in case it exists.
     */
    where: API_TokenWhereUniqueInput
    /**
     * In case the API_Token found by the `where` argument doesn't exist, create a new API_Token with this data.
     */
    create: XOR<API_TokenCreateInput, API_TokenUncheckedCreateInput>
    /**
     * In case the API_Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<API_TokenUpdateInput, API_TokenUncheckedUpdateInput>
  }

  /**
   * API_Token delete
   */
  export type API_TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    /**
     * Filter which API_Token to delete.
     */
    where: API_TokenWhereUniqueInput
  }

  /**
   * API_Token deleteMany
   */
  export type API_TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which API_Tokens to delete
     */
    where?: API_TokenWhereInput
    /**
     * Limit how many API_Tokens to delete.
     */
    limit?: number
  }

  /**
   * API_Token findRaw
   */
  export type API_TokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * API_Token aggregateRaw
   */
  export type API_TokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * API_Token.service_usages
   */
  export type API_Token$service_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    where?: Service_UsageWhereInput
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    cursor?: Service_UsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Service_UsageScalarFieldEnum | Service_UsageScalarFieldEnum[]
  }

  /**
   * API_Token.workspace
   */
  export type API_Token$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
  }

  /**
   * API_Token without action
   */
  export type API_TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
  }


  /**
   * Model Service_Usage
   */

  export type AggregateService_Usage = {
    _count: Service_UsageCountAggregateOutputType | null
    _avg: Service_UsageAvgAggregateOutputType | null
    _sum: Service_UsageSumAggregateOutputType | null
    _min: Service_UsageMinAggregateOutputType | null
    _max: Service_UsageMaxAggregateOutputType | null
  }

  export type Service_UsageAvgAggregateOutputType = {
    usage_duration_ms: number | null
  }

  export type Service_UsageSumAggregateOutputType = {
    usage_duration_ms: number | null
  }

  export type Service_UsageMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    api_token_id: string | null
    usage_duration_ms: number | null
    usage_started: Date | null
  }

  export type Service_UsageMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    api_token_id: string | null
    usage_duration_ms: number | null
    usage_started: Date | null
  }

  export type Service_UsageCountAggregateOutputType = {
    id: number
    service_id: number
    api_token_id: number
    usage_duration_ms: number
    usage_started: number
    _all: number
  }


  export type Service_UsageAvgAggregateInputType = {
    usage_duration_ms?: true
  }

  export type Service_UsageSumAggregateInputType = {
    usage_duration_ms?: true
  }

  export type Service_UsageMinAggregateInputType = {
    id?: true
    service_id?: true
    api_token_id?: true
    usage_duration_ms?: true
    usage_started?: true
  }

  export type Service_UsageMaxAggregateInputType = {
    id?: true
    service_id?: true
    api_token_id?: true
    usage_duration_ms?: true
    usage_started?: true
  }

  export type Service_UsageCountAggregateInputType = {
    id?: true
    service_id?: true
    api_token_id?: true
    usage_duration_ms?: true
    usage_started?: true
    _all?: true
  }

  export type Service_UsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Usage to aggregate.
     */
    where?: Service_UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Usages to fetch.
     */
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Service_UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Service_Usages
    **/
    _count?: true | Service_UsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Service_UsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Service_UsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service_UsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service_UsageMaxAggregateInputType
  }

  export type GetService_UsageAggregateType<T extends Service_UsageAggregateArgs> = {
        [P in keyof T & keyof AggregateService_Usage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_Usage[P]>
      : GetScalarType<T[P], AggregateService_Usage[P]>
  }




  export type Service_UsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_UsageWhereInput
    orderBy?: Service_UsageOrderByWithAggregationInput | Service_UsageOrderByWithAggregationInput[]
    by: Service_UsageScalarFieldEnum[] | Service_UsageScalarFieldEnum
    having?: Service_UsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service_UsageCountAggregateInputType | true
    _avg?: Service_UsageAvgAggregateInputType
    _sum?: Service_UsageSumAggregateInputType
    _min?: Service_UsageMinAggregateInputType
    _max?: Service_UsageMaxAggregateInputType
  }

  export type Service_UsageGroupByOutputType = {
    id: string
    service_id: string | null
    api_token_id: string
    usage_duration_ms: number
    usage_started: Date
    _count: Service_UsageCountAggregateOutputType | null
    _avg: Service_UsageAvgAggregateOutputType | null
    _sum: Service_UsageSumAggregateOutputType | null
    _min: Service_UsageMinAggregateOutputType | null
    _max: Service_UsageMaxAggregateOutputType | null
  }

  type GetService_UsageGroupByPayload<T extends Service_UsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service_UsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service_UsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service_UsageGroupByOutputType[P]>
            : GetScalarType<T[P], Service_UsageGroupByOutputType[P]>
        }
      >
    >


  export type Service_UsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    api_token_id?: boolean
    usage_duration_ms?: boolean
    usage_started?: boolean
    service?: boolean | Service_Usage$serviceArgs<ExtArgs>
    api_token?: boolean | Service_Usage$api_tokenArgs<ExtArgs>
  }, ExtArgs["result"]["service_Usage"]>



  export type Service_UsageSelectScalar = {
    id?: boolean
    service_id?: boolean
    api_token_id?: boolean
    usage_duration_ms?: boolean
    usage_started?: boolean
  }

  export type Service_UsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "api_token_id" | "usage_duration_ms" | "usage_started", ExtArgs["result"]["service_Usage"]>
  export type Service_UsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | Service_Usage$serviceArgs<ExtArgs>
    api_token?: boolean | Service_Usage$api_tokenArgs<ExtArgs>
  }

  export type $Service_UsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service_Usage"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs> | null
      api_token: Prisma.$API_TokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string | null
      api_token_id: string
      usage_duration_ms: number
      usage_started: Date
    }, ExtArgs["result"]["service_Usage"]>
    composites: {}
  }

  type Service_UsageGetPayload<S extends boolean | null | undefined | Service_UsageDefaultArgs> = $Result.GetResult<Prisma.$Service_UsagePayload, S>

  type Service_UsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Service_UsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Service_UsageCountAggregateInputType | true
    }

  export interface Service_UsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service_Usage'], meta: { name: 'Service_Usage' } }
    /**
     * Find zero or one Service_Usage that matches the filter.
     * @param {Service_UsageFindUniqueArgs} args - Arguments to find a Service_Usage
     * @example
     * // Get one Service_Usage
     * const service_Usage = await prisma.service_Usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Service_UsageFindUniqueArgs>(args: SelectSubset<T, Service_UsageFindUniqueArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service_Usage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Service_UsageFindUniqueOrThrowArgs} args - Arguments to find a Service_Usage
     * @example
     * // Get one Service_Usage
     * const service_Usage = await prisma.service_Usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Service_UsageFindUniqueOrThrowArgs>(args: SelectSubset<T, Service_UsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageFindFirstArgs} args - Arguments to find a Service_Usage
     * @example
     * // Get one Service_Usage
     * const service_Usage = await prisma.service_Usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Service_UsageFindFirstArgs>(args?: SelectSubset<T, Service_UsageFindFirstArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageFindFirstOrThrowArgs} args - Arguments to find a Service_Usage
     * @example
     * // Get one Service_Usage
     * const service_Usage = await prisma.service_Usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Service_UsageFindFirstOrThrowArgs>(args?: SelectSubset<T, Service_UsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Service_Usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_Usages
     * const service_Usages = await prisma.service_Usage.findMany()
     * 
     * // Get first 10 Service_Usages
     * const service_Usages = await prisma.service_Usage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service_UsageWithIdOnly = await prisma.service_Usage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Service_UsageFindManyArgs>(args?: SelectSubset<T, Service_UsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service_Usage.
     * @param {Service_UsageCreateArgs} args - Arguments to create a Service_Usage.
     * @example
     * // Create one Service_Usage
     * const Service_Usage = await prisma.service_Usage.create({
     *   data: {
     *     // ... data to create a Service_Usage
     *   }
     * })
     * 
     */
    create<T extends Service_UsageCreateArgs>(args: SelectSubset<T, Service_UsageCreateArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Service_Usages.
     * @param {Service_UsageCreateManyArgs} args - Arguments to create many Service_Usages.
     * @example
     * // Create many Service_Usages
     * const service_Usage = await prisma.service_Usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Service_UsageCreateManyArgs>(args?: SelectSubset<T, Service_UsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service_Usage.
     * @param {Service_UsageDeleteArgs} args - Arguments to delete one Service_Usage.
     * @example
     * // Delete one Service_Usage
     * const Service_Usage = await prisma.service_Usage.delete({
     *   where: {
     *     // ... filter to delete one Service_Usage
     *   }
     * })
     * 
     */
    delete<T extends Service_UsageDeleteArgs>(args: SelectSubset<T, Service_UsageDeleteArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service_Usage.
     * @param {Service_UsageUpdateArgs} args - Arguments to update one Service_Usage.
     * @example
     * // Update one Service_Usage
     * const service_Usage = await prisma.service_Usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Service_UsageUpdateArgs>(args: SelectSubset<T, Service_UsageUpdateArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Service_Usages.
     * @param {Service_UsageDeleteManyArgs} args - Arguments to filter Service_Usages to delete.
     * @example
     * // Delete a few Service_Usages
     * const { count } = await prisma.service_Usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Service_UsageDeleteManyArgs>(args?: SelectSubset<T, Service_UsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_Usages
     * const service_Usage = await prisma.service_Usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Service_UsageUpdateManyArgs>(args: SelectSubset<T, Service_UsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service_Usage.
     * @param {Service_UsageUpsertArgs} args - Arguments to update or create a Service_Usage.
     * @example
     * // Update or create a Service_Usage
     * const service_Usage = await prisma.service_Usage.upsert({
     *   create: {
     *     // ... data to create a Service_Usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_Usage we want to update
     *   }
     * })
     */
    upsert<T extends Service_UsageUpsertArgs>(args: SelectSubset<T, Service_UsageUpsertArgs<ExtArgs>>): Prisma__Service_UsageClient<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Service_Usages that matches the filter.
     * @param {Service_UsageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service_Usage = await prisma.service_Usage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Service_UsageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service_Usage.
     * @param {Service_UsageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service_Usage = await prisma.service_Usage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Service_UsageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Service_Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageCountArgs} args - Arguments to filter Service_Usages to count.
     * @example
     * // Count the number of Service_Usages
     * const count = await prisma.service_Usage.count({
     *   where: {
     *     // ... the filter for the Service_Usages we want to count
     *   }
     * })
    **/
    count<T extends Service_UsageCountArgs>(
      args?: Subset<T, Service_UsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_UsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service_Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Service_UsageAggregateArgs>(args: Subset<T, Service_UsageAggregateArgs>): Prisma.PrismaPromise<GetService_UsageAggregateType<T>>

    /**
     * Group by Service_Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_UsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Service_UsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Service_UsageGroupByArgs['orderBy'] }
        : { orderBy?: Service_UsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Service_UsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService_UsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service_Usage model
   */
  readonly fields: Service_UsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service_Usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Service_UsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends Service_Usage$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Service_Usage$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    api_token<T extends Service_Usage$api_tokenArgs<ExtArgs> = {}>(args?: Subset<T, Service_Usage$api_tokenArgs<ExtArgs>>): Prisma__API_TokenClient<$Result.GetResult<Prisma.$API_TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service_Usage model
   */
  interface Service_UsageFieldRefs {
    readonly id: FieldRef<"Service_Usage", 'String'>
    readonly service_id: FieldRef<"Service_Usage", 'String'>
    readonly api_token_id: FieldRef<"Service_Usage", 'String'>
    readonly usage_duration_ms: FieldRef<"Service_Usage", 'Float'>
    readonly usage_started: FieldRef<"Service_Usage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service_Usage findUnique
   */
  export type Service_UsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter, which Service_Usage to fetch.
     */
    where: Service_UsageWhereUniqueInput
  }

  /**
   * Service_Usage findUniqueOrThrow
   */
  export type Service_UsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter, which Service_Usage to fetch.
     */
    where: Service_UsageWhereUniqueInput
  }

  /**
   * Service_Usage findFirst
   */
  export type Service_UsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter, which Service_Usage to fetch.
     */
    where?: Service_UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Usages to fetch.
     */
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Usages.
     */
    cursor?: Service_UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Usages.
     */
    distinct?: Service_UsageScalarFieldEnum | Service_UsageScalarFieldEnum[]
  }

  /**
   * Service_Usage findFirstOrThrow
   */
  export type Service_UsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter, which Service_Usage to fetch.
     */
    where?: Service_UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Usages to fetch.
     */
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Usages.
     */
    cursor?: Service_UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Usages.
     */
    distinct?: Service_UsageScalarFieldEnum | Service_UsageScalarFieldEnum[]
  }

  /**
   * Service_Usage findMany
   */
  export type Service_UsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter, which Service_Usages to fetch.
     */
    where?: Service_UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Usages to fetch.
     */
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Service_Usages.
     */
    cursor?: Service_UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Usages.
     */
    skip?: number
    distinct?: Service_UsageScalarFieldEnum | Service_UsageScalarFieldEnum[]
  }

  /**
   * Service_Usage create
   */
  export type Service_UsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * The data needed to create a Service_Usage.
     */
    data: XOR<Service_UsageCreateInput, Service_UsageUncheckedCreateInput>
  }

  /**
   * Service_Usage createMany
   */
  export type Service_UsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Service_Usages.
     */
    data: Service_UsageCreateManyInput | Service_UsageCreateManyInput[]
  }

  /**
   * Service_Usage update
   */
  export type Service_UsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * The data needed to update a Service_Usage.
     */
    data: XOR<Service_UsageUpdateInput, Service_UsageUncheckedUpdateInput>
    /**
     * Choose, which Service_Usage to update.
     */
    where: Service_UsageWhereUniqueInput
  }

  /**
   * Service_Usage updateMany
   */
  export type Service_UsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Service_Usages.
     */
    data: XOR<Service_UsageUpdateManyMutationInput, Service_UsageUncheckedUpdateManyInput>
    /**
     * Filter which Service_Usages to update
     */
    where?: Service_UsageWhereInput
    /**
     * Limit how many Service_Usages to update.
     */
    limit?: number
  }

  /**
   * Service_Usage upsert
   */
  export type Service_UsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * The filter to search for the Service_Usage to update in case it exists.
     */
    where: Service_UsageWhereUniqueInput
    /**
     * In case the Service_Usage found by the `where` argument doesn't exist, create a new Service_Usage with this data.
     */
    create: XOR<Service_UsageCreateInput, Service_UsageUncheckedCreateInput>
    /**
     * In case the Service_Usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Service_UsageUpdateInput, Service_UsageUncheckedUpdateInput>
  }

  /**
   * Service_Usage delete
   */
  export type Service_UsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    /**
     * Filter which Service_Usage to delete.
     */
    where: Service_UsageWhereUniqueInput
  }

  /**
   * Service_Usage deleteMany
   */
  export type Service_UsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Usages to delete
     */
    where?: Service_UsageWhereInput
    /**
     * Limit how many Service_Usages to delete.
     */
    limit?: number
  }

  /**
   * Service_Usage findRaw
   */
  export type Service_UsageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service_Usage aggregateRaw
   */
  export type Service_UsageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service_Usage.service
   */
  export type Service_Usage$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Service_Usage.api_token
   */
  export type Service_Usage$api_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the API_Token
     */
    select?: API_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the API_Token
     */
    omit?: API_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: API_TokenInclude<ExtArgs> | null
    where?: API_TokenWhereInput
  }

  /**
   * Service_Usage without action
   */
  export type Service_UsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    cost_per_ms: number | null
  }

  export type ServiceSumAggregateOutputType = {
    cost_per_ms: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    cost_per_ms: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cost_per_ms: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    cost_per_ms: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    cost_per_ms?: true
  }

  export type ServiceSumAggregateInputType = {
    cost_per_ms?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    cost_per_ms?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    cost_per_ms?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    cost_per_ms?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    cost_per_ms: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cost_per_ms?: boolean
    service_usages?: boolean | Service$service_usagesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    cost_per_ms?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cost_per_ms", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_usages?: boolean | Service$service_usagesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      service_usages: Prisma.$Service_UsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cost_per_ms: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * @param {ServiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service = await prisma.service.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service.
     * @param {ServiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service = await prisma.service.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service_usages<T extends Service$service_usagesArgs<ExtArgs> = {}>(args?: Subset<T, Service$service_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_UsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly cost_per_ms: FieldRef<"Service", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service findRaw
   */
  export type ServiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service aggregateRaw
   */
  export type ServiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service.service_usages
   */
  export type Service$service_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Usage
     */
    select?: Service_UsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Usage
     */
    omit?: Service_UsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_UsageInclude<ExtArgs> | null
    where?: Service_UsageWhereInput
    orderBy?: Service_UsageOrderByWithRelationInput | Service_UsageOrderByWithRelationInput[]
    cursor?: Service_UsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Service_UsageScalarFieldEnum | Service_UsageScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password_hash: 'password_hash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    limit: 'limit',
    user_id: 'user_id'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const API_TokenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    token: 'token',
    workspace_id: 'workspace_id',
    createdAt: 'createdAt',
    creation_date: 'creation_date',
    revocation_date: 'revocation_date'
  };

  export type API_TokenScalarFieldEnum = (typeof API_TokenScalarFieldEnum)[keyof typeof API_TokenScalarFieldEnum]


  export const Service_UsageScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    api_token_id: 'api_token_id',
    usage_duration_ms: 'usage_duration_ms',
    usage_started: 'usage_started'
  };

  export type Service_UsageScalarFieldEnum = (typeof Service_UsageScalarFieldEnum)[keyof typeof Service_UsageScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cost_per_ms: 'cost_per_ms'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    workspaces?: WorkspaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    workspaces?: WorkspaceListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    title?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    limit?: IntNullableFilter<"Workspace"> | number | null
    user_id?: StringFilter<"Workspace"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    api_tokens?: API_TokenListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    limit?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    api_tokens?: API_TokenOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_user_id?: WorkspaceTitleUser_idCompoundUniqueInput
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    title?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    limit?: IntNullableFilter<"Workspace"> | number | null
    user_id?: StringFilter<"Workspace"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    api_tokens?: API_TokenListRelationFilter
  }, "id" | "title_user_id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    limit?: SortOrder
    user_id?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _avg?: WorkspaceAvgOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
    _sum?: WorkspaceSumOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    title?: StringWithAggregatesFilter<"Workspace"> | string
    description?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    limit?: IntNullableWithAggregatesFilter<"Workspace"> | number | null
    user_id?: StringWithAggregatesFilter<"Workspace"> | string
  }

  export type API_TokenWhereInput = {
    AND?: API_TokenWhereInput | API_TokenWhereInput[]
    OR?: API_TokenWhereInput[]
    NOT?: API_TokenWhereInput | API_TokenWhereInput[]
    id?: StringFilter<"API_Token"> | string
    name?: StringFilter<"API_Token"> | string
    token?: StringFilter<"API_Token"> | string
    workspace_id?: StringFilter<"API_Token"> | string
    createdAt?: DateTimeFilter<"API_Token"> | Date | string
    creation_date?: DateTimeFilter<"API_Token"> | Date | string
    revocation_date?: DateTimeNullableFilter<"API_Token"> | Date | string | null
    service_usages?: Service_UsageListRelationFilter
    workspace?: XOR<WorkspaceNullableScalarRelationFilter, WorkspaceWhereInput> | null
  }

  export type API_TokenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    creation_date?: SortOrder
    revocation_date?: SortOrder
    service_usages?: Service_UsageOrderByRelationAggregateInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type API_TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_workspace_id?: API_TokenNameWorkspace_idCompoundUniqueInput
    AND?: API_TokenWhereInput | API_TokenWhereInput[]
    OR?: API_TokenWhereInput[]
    NOT?: API_TokenWhereInput | API_TokenWhereInput[]
    name?: StringFilter<"API_Token"> | string
    token?: StringFilter<"API_Token"> | string
    workspace_id?: StringFilter<"API_Token"> | string
    createdAt?: DateTimeFilter<"API_Token"> | Date | string
    creation_date?: DateTimeFilter<"API_Token"> | Date | string
    revocation_date?: DateTimeNullableFilter<"API_Token"> | Date | string | null
    service_usages?: Service_UsageListRelationFilter
    workspace?: XOR<WorkspaceNullableScalarRelationFilter, WorkspaceWhereInput> | null
  }, "id" | "name_workspace_id">

  export type API_TokenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    creation_date?: SortOrder
    revocation_date?: SortOrder
    _count?: API_TokenCountOrderByAggregateInput
    _max?: API_TokenMaxOrderByAggregateInput
    _min?: API_TokenMinOrderByAggregateInput
  }

  export type API_TokenScalarWhereWithAggregatesInput = {
    AND?: API_TokenScalarWhereWithAggregatesInput | API_TokenScalarWhereWithAggregatesInput[]
    OR?: API_TokenScalarWhereWithAggregatesInput[]
    NOT?: API_TokenScalarWhereWithAggregatesInput | API_TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"API_Token"> | string
    name?: StringWithAggregatesFilter<"API_Token"> | string
    token?: StringWithAggregatesFilter<"API_Token"> | string
    workspace_id?: StringWithAggregatesFilter<"API_Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"API_Token"> | Date | string
    creation_date?: DateTimeWithAggregatesFilter<"API_Token"> | Date | string
    revocation_date?: DateTimeNullableWithAggregatesFilter<"API_Token"> | Date | string | null
  }

  export type Service_UsageWhereInput = {
    AND?: Service_UsageWhereInput | Service_UsageWhereInput[]
    OR?: Service_UsageWhereInput[]
    NOT?: Service_UsageWhereInput | Service_UsageWhereInput[]
    id?: StringFilter<"Service_Usage"> | string
    service_id?: StringNullableFilter<"Service_Usage"> | string | null
    api_token_id?: StringFilter<"Service_Usage"> | string
    usage_duration_ms?: FloatFilter<"Service_Usage"> | number
    usage_started?: DateTimeFilter<"Service_Usage"> | Date | string
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    api_token?: XOR<API_TokenNullableScalarRelationFilter, API_TokenWhereInput> | null
  }

  export type Service_UsageOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    api_token_id?: SortOrder
    usage_duration_ms?: SortOrder
    usage_started?: SortOrder
    service?: ServiceOrderByWithRelationInput
    api_token?: API_TokenOrderByWithRelationInput
  }

  export type Service_UsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Service_UsageWhereInput | Service_UsageWhereInput[]
    OR?: Service_UsageWhereInput[]
    NOT?: Service_UsageWhereInput | Service_UsageWhereInput[]
    service_id?: StringNullableFilter<"Service_Usage"> | string | null
    api_token_id?: StringFilter<"Service_Usage"> | string
    usage_duration_ms?: FloatFilter<"Service_Usage"> | number
    usage_started?: DateTimeFilter<"Service_Usage"> | Date | string
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    api_token?: XOR<API_TokenNullableScalarRelationFilter, API_TokenWhereInput> | null
  }, "id">

  export type Service_UsageOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    api_token_id?: SortOrder
    usage_duration_ms?: SortOrder
    usage_started?: SortOrder
    _count?: Service_UsageCountOrderByAggregateInput
    _avg?: Service_UsageAvgOrderByAggregateInput
    _max?: Service_UsageMaxOrderByAggregateInput
    _min?: Service_UsageMinOrderByAggregateInput
    _sum?: Service_UsageSumOrderByAggregateInput
  }

  export type Service_UsageScalarWhereWithAggregatesInput = {
    AND?: Service_UsageScalarWhereWithAggregatesInput | Service_UsageScalarWhereWithAggregatesInput[]
    OR?: Service_UsageScalarWhereWithAggregatesInput[]
    NOT?: Service_UsageScalarWhereWithAggregatesInput | Service_UsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service_Usage"> | string
    service_id?: StringNullableWithAggregatesFilter<"Service_Usage"> | string | null
    api_token_id?: StringWithAggregatesFilter<"Service_Usage"> | string
    usage_duration_ms?: FloatWithAggregatesFilter<"Service_Usage"> | number
    usage_started?: DateTimeWithAggregatesFilter<"Service_Usage"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    cost_per_ms?: FloatFilter<"Service"> | number
    service_usages?: Service_UsageListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cost_per_ms?: SortOrder
    service_usages?: Service_UsageOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    cost_per_ms?: FloatFilter<"Service"> | number
    service_usages?: Service_UsageListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cost_per_ms?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    cost_per_ms?: FloatWithAggregatesFilter<"Service"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password_hash: string
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password_hash: string
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    workspaces?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    user?: UserCreateNestedOneWithoutWorkspacesInput
    api_tokens?: API_TokenCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    user_id: string
    api_tokens?: API_TokenUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutWorkspacesNestedInput
    api_tokens?: API_TokenUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    api_tokens?: API_TokenUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    user_id: string
  }

  export type WorkspaceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type API_TokenCreateInput = {
    id?: string
    name: string
    token: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
    service_usages?: Service_UsageCreateNestedManyWithoutApi_tokenInput
    workspace?: WorkspaceCreateNestedOneWithoutApi_tokensInput
  }

  export type API_TokenUncheckedCreateInput = {
    id?: string
    name: string
    token: string
    workspace_id: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
    service_usages?: Service_UsageUncheckedCreateNestedManyWithoutApi_tokenInput
  }

  export type API_TokenUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_usages?: Service_UsageUpdateManyWithoutApi_tokenNestedInput
    workspace?: WorkspaceUpdateOneWithoutApi_tokensNestedInput
  }

  export type API_TokenUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_usages?: Service_UsageUncheckedUpdateManyWithoutApi_tokenNestedInput
  }

  export type API_TokenCreateManyInput = {
    id?: string
    name: string
    token: string
    workspace_id: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
  }

  export type API_TokenUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type API_TokenUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Service_UsageCreateInput = {
    id?: string
    usage_duration_ms?: number
    usage_started: Date | string
    service?: ServiceCreateNestedOneWithoutService_usagesInput
    api_token?: API_TokenCreateNestedOneWithoutService_usagesInput
  }

  export type Service_UsageUncheckedCreateInput = {
    id?: string
    service_id?: string | null
    api_token_id: string
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageUpdateInput = {
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutService_usagesNestedInput
    api_token?: API_TokenUpdateOneWithoutService_usagesNestedInput
  }

  export type Service_UsageUncheckedUpdateInput = {
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
    api_token_id?: StringFieldUpdateOperationsInput | string
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_UsageCreateManyInput = {
    id?: string
    service_id?: string | null
    api_token_id: string
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageUpdateManyMutationInput = {
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_UsageUncheckedUpdateManyInput = {
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
    api_token_id?: StringFieldUpdateOperationsInput | string
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    cost_per_ms: number
    service_usages?: Service_UsageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    cost_per_ms: number
    service_usages?: Service_UsageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
    service_usages?: Service_UsageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
    service_usages?: Service_UsageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    cost_per_ms: number
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type API_TokenListRelationFilter = {
    every?: API_TokenWhereInput
    some?: API_TokenWhereInput
    none?: API_TokenWhereInput
  }

  export type API_TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceTitleUser_idCompoundUniqueInput = {
    title: string
    user_id: string
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    limit?: SortOrder
    user_id?: SortOrder
  }

  export type WorkspaceAvgOrderByAggregateInput = {
    limit?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    limit?: SortOrder
    user_id?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    limit?: SortOrder
    user_id?: SortOrder
  }

  export type WorkspaceSumOrderByAggregateInput = {
    limit?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type Service_UsageListRelationFilter = {
    every?: Service_UsageWhereInput
    some?: Service_UsageWhereInput
    none?: Service_UsageWhereInput
  }

  export type WorkspaceNullableScalarRelationFilter = {
    is?: WorkspaceWhereInput | null
    isNot?: WorkspaceWhereInput | null
  }

  export type Service_UsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type API_TokenNameWorkspace_idCompoundUniqueInput = {
    name: string
    workspace_id: string
  }

  export type API_TokenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    creation_date?: SortOrder
    revocation_date?: SortOrder
  }

  export type API_TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    creation_date?: SortOrder
    revocation_date?: SortOrder
  }

  export type API_TokenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    creation_date?: SortOrder
    revocation_date?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type API_TokenNullableScalarRelationFilter = {
    is?: API_TokenWhereInput | null
    isNot?: API_TokenWhereInput | null
  }

  export type Service_UsageCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    api_token_id?: SortOrder
    usage_duration_ms?: SortOrder
    usage_started?: SortOrder
  }

  export type Service_UsageAvgOrderByAggregateInput = {
    usage_duration_ms?: SortOrder
  }

  export type Service_UsageMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    api_token_id?: SortOrder
    usage_duration_ms?: SortOrder
    usage_started?: SortOrder
  }

  export type Service_UsageMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    api_token_id?: SortOrder
    usage_duration_ms?: SortOrder
    usage_started?: SortOrder
  }

  export type Service_UsageSumOrderByAggregateInput = {
    usage_duration_ms?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost_per_ms?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    cost_per_ms?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost_per_ms?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost_per_ms?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    cost_per_ms?: SortOrder
  }

  export type WorkspaceCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WorkspaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type API_TokenCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput> | API_TokenCreateWithoutWorkspaceInput[] | API_TokenUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: API_TokenCreateOrConnectWithoutWorkspaceInput | API_TokenCreateOrConnectWithoutWorkspaceInput[]
    createMany?: API_TokenCreateManyWorkspaceInputEnvelope
    connect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
  }

  export type API_TokenUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput> | API_TokenCreateWithoutWorkspaceInput[] | API_TokenUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: API_TokenCreateOrConnectWithoutWorkspaceInput | API_TokenCreateOrConnectWithoutWorkspaceInput[]
    createMany?: API_TokenCreateManyWorkspaceInputEnvelope
    connect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type API_TokenUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput> | API_TokenCreateWithoutWorkspaceInput[] | API_TokenUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: API_TokenCreateOrConnectWithoutWorkspaceInput | API_TokenCreateOrConnectWithoutWorkspaceInput[]
    upsert?: API_TokenUpsertWithWhereUniqueWithoutWorkspaceInput | API_TokenUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: API_TokenCreateManyWorkspaceInputEnvelope
    set?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    disconnect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    delete?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    connect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    update?: API_TokenUpdateWithWhereUniqueWithoutWorkspaceInput | API_TokenUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: API_TokenUpdateManyWithWhereWithoutWorkspaceInput | API_TokenUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: API_TokenScalarWhereInput | API_TokenScalarWhereInput[]
  }

  export type API_TokenUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput> | API_TokenCreateWithoutWorkspaceInput[] | API_TokenUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: API_TokenCreateOrConnectWithoutWorkspaceInput | API_TokenCreateOrConnectWithoutWorkspaceInput[]
    upsert?: API_TokenUpsertWithWhereUniqueWithoutWorkspaceInput | API_TokenUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: API_TokenCreateManyWorkspaceInputEnvelope
    set?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    disconnect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    delete?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    connect?: API_TokenWhereUniqueInput | API_TokenWhereUniqueInput[]
    update?: API_TokenUpdateWithWhereUniqueWithoutWorkspaceInput | API_TokenUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: API_TokenUpdateManyWithWhereWithoutWorkspaceInput | API_TokenUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: API_TokenScalarWhereInput | API_TokenScalarWhereInput[]
  }

  export type Service_UsageCreateNestedManyWithoutApi_tokenInput = {
    create?: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput> | Service_UsageCreateWithoutApi_tokenInput[] | Service_UsageUncheckedCreateWithoutApi_tokenInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutApi_tokenInput | Service_UsageCreateOrConnectWithoutApi_tokenInput[]
    createMany?: Service_UsageCreateManyApi_tokenInputEnvelope
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedOneWithoutApi_tokensInput = {
    create?: XOR<WorkspaceCreateWithoutApi_tokensInput, WorkspaceUncheckedCreateWithoutApi_tokensInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutApi_tokensInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type Service_UsageUncheckedCreateNestedManyWithoutApi_tokenInput = {
    create?: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput> | Service_UsageCreateWithoutApi_tokenInput[] | Service_UsageUncheckedCreateWithoutApi_tokenInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutApi_tokenInput | Service_UsageCreateOrConnectWithoutApi_tokenInput[]
    createMany?: Service_UsageCreateManyApi_tokenInputEnvelope
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type Service_UsageUpdateManyWithoutApi_tokenNestedInput = {
    create?: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput> | Service_UsageCreateWithoutApi_tokenInput[] | Service_UsageUncheckedCreateWithoutApi_tokenInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutApi_tokenInput | Service_UsageCreateOrConnectWithoutApi_tokenInput[]
    upsert?: Service_UsageUpsertWithWhereUniqueWithoutApi_tokenInput | Service_UsageUpsertWithWhereUniqueWithoutApi_tokenInput[]
    createMany?: Service_UsageCreateManyApi_tokenInputEnvelope
    set?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    disconnect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    delete?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    update?: Service_UsageUpdateWithWhereUniqueWithoutApi_tokenInput | Service_UsageUpdateWithWhereUniqueWithoutApi_tokenInput[]
    updateMany?: Service_UsageUpdateManyWithWhereWithoutApi_tokenInput | Service_UsageUpdateManyWithWhereWithoutApi_tokenInput[]
    deleteMany?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
  }

  export type WorkspaceUpdateOneWithoutApi_tokensNestedInput = {
    create?: XOR<WorkspaceCreateWithoutApi_tokensInput, WorkspaceUncheckedCreateWithoutApi_tokensInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutApi_tokensInput
    upsert?: WorkspaceUpsertWithoutApi_tokensInput
    disconnect?: boolean
    delete?: WorkspaceWhereInput | boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutApi_tokensInput, WorkspaceUpdateWithoutApi_tokensInput>, WorkspaceUncheckedUpdateWithoutApi_tokensInput>
  }

  export type Service_UsageUncheckedUpdateManyWithoutApi_tokenNestedInput = {
    create?: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput> | Service_UsageCreateWithoutApi_tokenInput[] | Service_UsageUncheckedCreateWithoutApi_tokenInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutApi_tokenInput | Service_UsageCreateOrConnectWithoutApi_tokenInput[]
    upsert?: Service_UsageUpsertWithWhereUniqueWithoutApi_tokenInput | Service_UsageUpsertWithWhereUniqueWithoutApi_tokenInput[]
    createMany?: Service_UsageCreateManyApi_tokenInputEnvelope
    set?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    disconnect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    delete?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    update?: Service_UsageUpdateWithWhereUniqueWithoutApi_tokenInput | Service_UsageUpdateWithWhereUniqueWithoutApi_tokenInput[]
    updateMany?: Service_UsageUpdateManyWithWhereWithoutApi_tokenInput | Service_UsageUpdateManyWithWhereWithoutApi_tokenInput[]
    deleteMany?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutService_usagesInput = {
    create?: XOR<ServiceCreateWithoutService_usagesInput, ServiceUncheckedCreateWithoutService_usagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutService_usagesInput
    connect?: ServiceWhereUniqueInput
  }

  export type API_TokenCreateNestedOneWithoutService_usagesInput = {
    create?: XOR<API_TokenCreateWithoutService_usagesInput, API_TokenUncheckedCreateWithoutService_usagesInput>
    connectOrCreate?: API_TokenCreateOrConnectWithoutService_usagesInput
    connect?: API_TokenWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateOneWithoutService_usagesNestedInput = {
    create?: XOR<ServiceCreateWithoutService_usagesInput, ServiceUncheckedCreateWithoutService_usagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutService_usagesInput
    upsert?: ServiceUpsertWithoutService_usagesInput
    disconnect?: boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutService_usagesInput, ServiceUpdateWithoutService_usagesInput>, ServiceUncheckedUpdateWithoutService_usagesInput>
  }

  export type API_TokenUpdateOneWithoutService_usagesNestedInput = {
    create?: XOR<API_TokenCreateWithoutService_usagesInput, API_TokenUncheckedCreateWithoutService_usagesInput>
    connectOrCreate?: API_TokenCreateOrConnectWithoutService_usagesInput
    upsert?: API_TokenUpsertWithoutService_usagesInput
    disconnect?: boolean
    delete?: API_TokenWhereInput | boolean
    connect?: API_TokenWhereUniqueInput
    update?: XOR<XOR<API_TokenUpdateToOneWithWhereWithoutService_usagesInput, API_TokenUpdateWithoutService_usagesInput>, API_TokenUncheckedUpdateWithoutService_usagesInput>
  }

  export type Service_UsageCreateNestedManyWithoutServiceInput = {
    create?: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput> | Service_UsageCreateWithoutServiceInput[] | Service_UsageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutServiceInput | Service_UsageCreateOrConnectWithoutServiceInput[]
    createMany?: Service_UsageCreateManyServiceInputEnvelope
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
  }

  export type Service_UsageUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput> | Service_UsageCreateWithoutServiceInput[] | Service_UsageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutServiceInput | Service_UsageCreateOrConnectWithoutServiceInput[]
    createMany?: Service_UsageCreateManyServiceInputEnvelope
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
  }

  export type Service_UsageUpdateManyWithoutServiceNestedInput = {
    create?: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput> | Service_UsageCreateWithoutServiceInput[] | Service_UsageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutServiceInput | Service_UsageCreateOrConnectWithoutServiceInput[]
    upsert?: Service_UsageUpsertWithWhereUniqueWithoutServiceInput | Service_UsageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: Service_UsageCreateManyServiceInputEnvelope
    set?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    disconnect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    delete?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    update?: Service_UsageUpdateWithWhereUniqueWithoutServiceInput | Service_UsageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: Service_UsageUpdateManyWithWhereWithoutServiceInput | Service_UsageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
  }

  export type Service_UsageUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput> | Service_UsageCreateWithoutServiceInput[] | Service_UsageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_UsageCreateOrConnectWithoutServiceInput | Service_UsageCreateOrConnectWithoutServiceInput[]
    upsert?: Service_UsageUpsertWithWhereUniqueWithoutServiceInput | Service_UsageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: Service_UsageCreateManyServiceInputEnvelope
    set?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    disconnect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    delete?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    connect?: Service_UsageWhereUniqueInput | Service_UsageWhereUniqueInput[]
    update?: Service_UsageUpdateWithWhereUniqueWithoutServiceInput | Service_UsageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: Service_UsageUpdateManyWithWhereWithoutServiceInput | Service_UsageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WorkspaceCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    api_tokens?: API_TokenCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    api_tokens?: API_TokenUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceCreateManyUserInputEnvelope = {
    data: WorkspaceCreateManyUserInput | WorkspaceCreateManyUserInput[]
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    title?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    limit?: IntNullableFilter<"Workspace"> | number | null
    user_id?: StringFilter<"Workspace"> | string
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type API_TokenCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    token: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
    service_usages?: Service_UsageCreateNestedManyWithoutApi_tokenInput
  }

  export type API_TokenUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    token: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
    service_usages?: Service_UsageUncheckedCreateNestedManyWithoutApi_tokenInput
  }

  export type API_TokenCreateOrConnectWithoutWorkspaceInput = {
    where: API_TokenWhereUniqueInput
    create: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput>
  }

  export type API_TokenCreateManyWorkspaceInputEnvelope = {
    data: API_TokenCreateManyWorkspaceInput | API_TokenCreateManyWorkspaceInput[]
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type API_TokenUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: API_TokenWhereUniqueInput
    update: XOR<API_TokenUpdateWithoutWorkspaceInput, API_TokenUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<API_TokenCreateWithoutWorkspaceInput, API_TokenUncheckedCreateWithoutWorkspaceInput>
  }

  export type API_TokenUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: API_TokenWhereUniqueInput
    data: XOR<API_TokenUpdateWithoutWorkspaceInput, API_TokenUncheckedUpdateWithoutWorkspaceInput>
  }

  export type API_TokenUpdateManyWithWhereWithoutWorkspaceInput = {
    where: API_TokenScalarWhereInput
    data: XOR<API_TokenUpdateManyMutationInput, API_TokenUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type API_TokenScalarWhereInput = {
    AND?: API_TokenScalarWhereInput | API_TokenScalarWhereInput[]
    OR?: API_TokenScalarWhereInput[]
    NOT?: API_TokenScalarWhereInput | API_TokenScalarWhereInput[]
    id?: StringFilter<"API_Token"> | string
    name?: StringFilter<"API_Token"> | string
    token?: StringFilter<"API_Token"> | string
    workspace_id?: StringFilter<"API_Token"> | string
    createdAt?: DateTimeFilter<"API_Token"> | Date | string
    creation_date?: DateTimeFilter<"API_Token"> | Date | string
    revocation_date?: DateTimeNullableFilter<"API_Token"> | Date | string | null
  }

  export type Service_UsageCreateWithoutApi_tokenInput = {
    id?: string
    usage_duration_ms?: number
    usage_started: Date | string
    service?: ServiceCreateNestedOneWithoutService_usagesInput
  }

  export type Service_UsageUncheckedCreateWithoutApi_tokenInput = {
    id?: string
    service_id?: string | null
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageCreateOrConnectWithoutApi_tokenInput = {
    where: Service_UsageWhereUniqueInput
    create: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput>
  }

  export type Service_UsageCreateManyApi_tokenInputEnvelope = {
    data: Service_UsageCreateManyApi_tokenInput | Service_UsageCreateManyApi_tokenInput[]
  }

  export type WorkspaceCreateWithoutApi_tokensInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    user?: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUncheckedCreateWithoutApi_tokensInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
    user_id: string
  }

  export type WorkspaceCreateOrConnectWithoutApi_tokensInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutApi_tokensInput, WorkspaceUncheckedCreateWithoutApi_tokensInput>
  }

  export type Service_UsageUpsertWithWhereUniqueWithoutApi_tokenInput = {
    where: Service_UsageWhereUniqueInput
    update: XOR<Service_UsageUpdateWithoutApi_tokenInput, Service_UsageUncheckedUpdateWithoutApi_tokenInput>
    create: XOR<Service_UsageCreateWithoutApi_tokenInput, Service_UsageUncheckedCreateWithoutApi_tokenInput>
  }

  export type Service_UsageUpdateWithWhereUniqueWithoutApi_tokenInput = {
    where: Service_UsageWhereUniqueInput
    data: XOR<Service_UsageUpdateWithoutApi_tokenInput, Service_UsageUncheckedUpdateWithoutApi_tokenInput>
  }

  export type Service_UsageUpdateManyWithWhereWithoutApi_tokenInput = {
    where: Service_UsageScalarWhereInput
    data: XOR<Service_UsageUpdateManyMutationInput, Service_UsageUncheckedUpdateManyWithoutApi_tokenInput>
  }

  export type Service_UsageScalarWhereInput = {
    AND?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
    OR?: Service_UsageScalarWhereInput[]
    NOT?: Service_UsageScalarWhereInput | Service_UsageScalarWhereInput[]
    id?: StringFilter<"Service_Usage"> | string
    service_id?: StringNullableFilter<"Service_Usage"> | string | null
    api_token_id?: StringFilter<"Service_Usage"> | string
    usage_duration_ms?: FloatFilter<"Service_Usage"> | number
    usage_started?: DateTimeFilter<"Service_Usage"> | Date | string
  }

  export type WorkspaceUpsertWithoutApi_tokensInput = {
    update: XOR<WorkspaceUpdateWithoutApi_tokensInput, WorkspaceUncheckedUpdateWithoutApi_tokensInput>
    create: XOR<WorkspaceCreateWithoutApi_tokensInput, WorkspaceUncheckedCreateWithoutApi_tokensInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutApi_tokensInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutApi_tokensInput, WorkspaceUncheckedUpdateWithoutApi_tokensInput>
  }

  export type WorkspaceUpdateWithoutApi_tokensInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutWorkspacesNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutApi_tokensInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateWithoutService_usagesInput = {
    id?: string
    name: string
    cost_per_ms: number
  }

  export type ServiceUncheckedCreateWithoutService_usagesInput = {
    id?: string
    name: string
    cost_per_ms: number
  }

  export type ServiceCreateOrConnectWithoutService_usagesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutService_usagesInput, ServiceUncheckedCreateWithoutService_usagesInput>
  }

  export type API_TokenCreateWithoutService_usagesInput = {
    id?: string
    name: string
    token: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
    workspace?: WorkspaceCreateNestedOneWithoutApi_tokensInput
  }

  export type API_TokenUncheckedCreateWithoutService_usagesInput = {
    id?: string
    name: string
    token: string
    workspace_id: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
  }

  export type API_TokenCreateOrConnectWithoutService_usagesInput = {
    where: API_TokenWhereUniqueInput
    create: XOR<API_TokenCreateWithoutService_usagesInput, API_TokenUncheckedCreateWithoutService_usagesInput>
  }

  export type ServiceUpsertWithoutService_usagesInput = {
    update: XOR<ServiceUpdateWithoutService_usagesInput, ServiceUncheckedUpdateWithoutService_usagesInput>
    create: XOR<ServiceCreateWithoutService_usagesInput, ServiceUncheckedCreateWithoutService_usagesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutService_usagesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutService_usagesInput, ServiceUncheckedUpdateWithoutService_usagesInput>
  }

  export type ServiceUpdateWithoutService_usagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateWithoutService_usagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_per_ms?: FloatFieldUpdateOperationsInput | number
  }

  export type API_TokenUpsertWithoutService_usagesInput = {
    update: XOR<API_TokenUpdateWithoutService_usagesInput, API_TokenUncheckedUpdateWithoutService_usagesInput>
    create: XOR<API_TokenCreateWithoutService_usagesInput, API_TokenUncheckedCreateWithoutService_usagesInput>
    where?: API_TokenWhereInput
  }

  export type API_TokenUpdateToOneWithWhereWithoutService_usagesInput = {
    where?: API_TokenWhereInput
    data: XOR<API_TokenUpdateWithoutService_usagesInput, API_TokenUncheckedUpdateWithoutService_usagesInput>
  }

  export type API_TokenUpdateWithoutService_usagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneWithoutApi_tokensNestedInput
  }

  export type API_TokenUncheckedUpdateWithoutService_usagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Service_UsageCreateWithoutServiceInput = {
    id?: string
    usage_duration_ms?: number
    usage_started: Date | string
    api_token?: API_TokenCreateNestedOneWithoutService_usagesInput
  }

  export type Service_UsageUncheckedCreateWithoutServiceInput = {
    id?: string
    api_token_id: string
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageCreateOrConnectWithoutServiceInput = {
    where: Service_UsageWhereUniqueInput
    create: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput>
  }

  export type Service_UsageCreateManyServiceInputEnvelope = {
    data: Service_UsageCreateManyServiceInput | Service_UsageCreateManyServiceInput[]
  }

  export type Service_UsageUpsertWithWhereUniqueWithoutServiceInput = {
    where: Service_UsageWhereUniqueInput
    update: XOR<Service_UsageUpdateWithoutServiceInput, Service_UsageUncheckedUpdateWithoutServiceInput>
    create: XOR<Service_UsageCreateWithoutServiceInput, Service_UsageUncheckedCreateWithoutServiceInput>
  }

  export type Service_UsageUpdateWithWhereUniqueWithoutServiceInput = {
    where: Service_UsageWhereUniqueInput
    data: XOR<Service_UsageUpdateWithoutServiceInput, Service_UsageUncheckedUpdateWithoutServiceInput>
  }

  export type Service_UsageUpdateManyWithWhereWithoutServiceInput = {
    where: Service_UsageScalarWhereInput
    data: XOR<Service_UsageUpdateManyMutationInput, Service_UsageUncheckedUpdateManyWithoutServiceInput>
  }

  export type WorkspaceCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    limit?: number | null
  }

  export type WorkspaceUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    api_tokens?: API_TokenUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
    api_tokens?: API_TokenUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type API_TokenCreateManyWorkspaceInput = {
    id?: string
    name: string
    token: string
    createdAt?: Date | string
    creation_date?: Date | string
    revocation_date?: Date | string | null
  }

  export type API_TokenUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_usages?: Service_UsageUpdateManyWithoutApi_tokenNestedInput
  }

  export type API_TokenUncheckedUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_usages?: Service_UsageUncheckedUpdateManyWithoutApi_tokenNestedInput
  }

  export type API_TokenUncheckedUpdateManyWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    revocation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Service_UsageCreateManyApi_tokenInput = {
    id?: string
    service_id?: string | null
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageUpdateWithoutApi_tokenInput = {
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutService_usagesNestedInput
  }

  export type Service_UsageUncheckedUpdateWithoutApi_tokenInput = {
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_UsageUncheckedUpdateManyWithoutApi_tokenInput = {
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_UsageCreateManyServiceInput = {
    id?: string
    api_token_id: string
    usage_duration_ms?: number
    usage_started: Date | string
  }

  export type Service_UsageUpdateWithoutServiceInput = {
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
    api_token?: API_TokenUpdateOneWithoutService_usagesNestedInput
  }

  export type Service_UsageUncheckedUpdateWithoutServiceInput = {
    api_token_id?: StringFieldUpdateOperationsInput | string
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_UsageUncheckedUpdateManyWithoutServiceInput = {
    api_token_id?: StringFieldUpdateOperationsInput | string
    usage_duration_ms?: FloatFieldUpdateOperationsInput | number
    usage_started?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}