
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Screening
 * 
 */
export type Screening = $Result.DefaultSelection<Prisma.$ScreeningPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chair
 * 
 */
export type Chair = $Result.DefaultSelection<Prisma.$ChairPayload>
/**
 * Model Rank
 * 
 */
export type Rank = $Result.DefaultSelection<Prisma.$RankPayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>
/**
 * Model Hall
 * 
 */
export type Hall = $Result.DefaultSelection<Prisma.$HallPayload>
/**
 * Model Forum
 * 
 */
export type Forum = $Result.DefaultSelection<Prisma.$ForumPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Ticket_type
 * 
 */
export type Ticket_type = $Result.DefaultSelection<Prisma.$Ticket_typePayload>
/**
 * Model Screening_type
 * 
 */
export type Screening_type = $Result.DefaultSelection<Prisma.$Screening_typePayload>
/**
 * Model Payment_session
 * 
 */
export type Payment_session = $Result.DefaultSelection<Prisma.$Payment_sessionPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screening`: Exposes CRUD operations for the **Screening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screenings
    * const screenings = await prisma.screening.findMany()
    * ```
    */
  get screening(): Prisma.ScreeningDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.chair`: Exposes CRUD operations for the **Chair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chairs
    * const chairs = await prisma.chair.findMany()
    * ```
    */
  get chair(): Prisma.ChairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rank`: Exposes CRUD operations for the **Rank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ranks
    * const ranks = await prisma.rank.findMany()
    * ```
    */
  get rank(): Prisma.RankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hall`: Exposes CRUD operations for the **Hall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Halls
    * const halls = await prisma.hall.findMany()
    * ```
    */
  get hall(): Prisma.HallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forum`: Exposes CRUD operations for the **Forum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forums
    * const forums = await prisma.forum.findMany()
    * ```
    */
  get forum(): Prisma.ForumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket_type`: Exposes CRUD operations for the **Ticket_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_types
    * const ticket_types = await prisma.ticket_type.findMany()
    * ```
    */
  get ticket_type(): Prisma.Ticket_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screening_type`: Exposes CRUD operations for the **Screening_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screening_types
    * const screening_types = await prisma.screening_type.findMany()
    * ```
    */
  get screening_type(): Prisma.Screening_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_session`: Exposes CRUD operations for the **Payment_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_sessions
    * const payment_sessions = await prisma.payment_session.findMany()
    * ```
    */
  get payment_session(): Prisma.Payment_sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;
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
    Admin: 'Admin',
    Movie: 'Movie',
    Screening: 'Screening',
    User: 'User',
    Chair: 'Chair',
    Rank: 'Rank',
    Discount: 'Discount',
    Hall: 'Hall',
    Forum: 'Forum',
    Ticket: 'Ticket',
    Ticket_type: 'Ticket_type',
    Screening_type: 'Screening_type',
    Payment_session: 'Payment_session',
    Coupon: 'Coupon'
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
      modelProps: "admin" | "movie" | "screening" | "user" | "chair" | "rank" | "discount" | "hall" | "forum" | "ticket" | "ticket_type" | "screening_type" | "payment_session" | "coupon"
      txIsolationLevel: never
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MovieFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MovieAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Screening: {
        payload: Prisma.$ScreeningPayload<ExtArgs>
        fields: Prisma.ScreeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          findFirst: {
            args: Prisma.ScreeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          findMany: {
            args: Prisma.ScreeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>[]
          }
          create: {
            args: Prisma.ScreeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          createMany: {
            args: Prisma.ScreeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScreeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          update: {
            args: Prisma.ScreeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          deleteMany: {
            args: Prisma.ScreeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScreeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          aggregate: {
            args: Prisma.ScreeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreening>
          }
          groupBy: {
            args: Prisma.ScreeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreeningGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScreeningFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScreeningAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScreeningCountArgs<ExtArgs>
            result: $Utils.Optional<ScreeningCountAggregateOutputType> | number
          }
        }
      }
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
      Chair: {
        payload: Prisma.$ChairPayload<ExtArgs>
        fields: Prisma.ChairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          findFirst: {
            args: Prisma.ChairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          findMany: {
            args: Prisma.ChairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>[]
          }
          create: {
            args: Prisma.ChairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          createMany: {
            args: Prisma.ChairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          update: {
            args: Prisma.ChairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          deleteMany: {
            args: Prisma.ChairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairPayload>
          }
          aggregate: {
            args: Prisma.ChairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChair>
          }
          groupBy: {
            args: Prisma.ChairGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChairGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChairFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChairAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChairCountArgs<ExtArgs>
            result: $Utils.Optional<ChairCountAggregateOutputType> | number
          }
        }
      }
      Rank: {
        payload: Prisma.$RankPayload<ExtArgs>
        fields: Prisma.RankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          findFirst: {
            args: Prisma.RankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          findMany: {
            args: Prisma.RankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>[]
          }
          create: {
            args: Prisma.RankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          createMany: {
            args: Prisma.RankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          update: {
            args: Prisma.RankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          deleteMany: {
            args: Prisma.RankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankPayload>
          }
          aggregate: {
            args: Prisma.RankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRank>
          }
          groupBy: {
            args: Prisma.RankGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RankFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RankAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RankCountArgs<ExtArgs>
            result: $Utils.Optional<RankCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiscountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiscountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
          }
        }
      }
      Hall: {
        payload: Prisma.$HallPayload<ExtArgs>
        fields: Prisma.HallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findFirst: {
            args: Prisma.HallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findMany: {
            args: Prisma.HallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>[]
          }
          create: {
            args: Prisma.HallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          createMany: {
            args: Prisma.HallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          update: {
            args: Prisma.HallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          deleteMany: {
            args: Prisma.HallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          aggregate: {
            args: Prisma.HallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHall>
          }
          groupBy: {
            args: Prisma.HallGroupByArgs<ExtArgs>
            result: $Utils.Optional<HallGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HallFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HallAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HallCountArgs<ExtArgs>
            result: $Utils.Optional<HallCountAggregateOutputType> | number
          }
        }
      }
      Forum: {
        payload: Prisma.$ForumPayload<ExtArgs>
        fields: Prisma.ForumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findFirst: {
            args: Prisma.ForumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findMany: {
            args: Prisma.ForumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          create: {
            args: Prisma.ForumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          createMany: {
            args: Prisma.ForumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ForumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          update: {
            args: Prisma.ForumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          deleteMany: {
            args: Prisma.ForumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ForumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          aggregate: {
            args: Prisma.ForumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForum>
          }
          groupBy: {
            args: Prisma.ForumGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ForumFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ForumAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ForumCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Ticket_type: {
        payload: Prisma.$Ticket_typePayload<ExtArgs>
        fields: Prisma.Ticket_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ticket_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ticket_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          findFirst: {
            args: Prisma.Ticket_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ticket_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          findMany: {
            args: Prisma.Ticket_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>[]
          }
          create: {
            args: Prisma.Ticket_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          createMany: {
            args: Prisma.Ticket_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Ticket_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          update: {
            args: Prisma.Ticket_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          deleteMany: {
            args: Prisma.Ticket_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ticket_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Ticket_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typePayload>
          }
          aggregate: {
            args: Prisma.Ticket_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_type>
          }
          groupBy: {
            args: Prisma.Ticket_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Ticket_typeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Ticket_typeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Ticket_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typeCountAggregateOutputType> | number
          }
        }
      }
      Screening_type: {
        payload: Prisma.$Screening_typePayload<ExtArgs>
        fields: Prisma.Screening_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Screening_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Screening_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          findFirst: {
            args: Prisma.Screening_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Screening_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          findMany: {
            args: Prisma.Screening_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>[]
          }
          create: {
            args: Prisma.Screening_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          createMany: {
            args: Prisma.Screening_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Screening_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          update: {
            args: Prisma.Screening_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          deleteMany: {
            args: Prisma.Screening_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Screening_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Screening_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Screening_typePayload>
          }
          aggregate: {
            args: Prisma.Screening_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreening_type>
          }
          groupBy: {
            args: Prisma.Screening_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Screening_typeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Screening_typeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Screening_typeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Screening_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Screening_typeCountAggregateOutputType> | number
          }
        }
      }
      Payment_session: {
        payload: Prisma.$Payment_sessionPayload<ExtArgs>
        fields: Prisma.Payment_sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Payment_sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Payment_sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          findFirst: {
            args: Prisma.Payment_sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Payment_sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          findMany: {
            args: Prisma.Payment_sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>[]
          }
          create: {
            args: Prisma.Payment_sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          createMany: {
            args: Prisma.Payment_sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Payment_sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          update: {
            args: Prisma.Payment_sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          deleteMany: {
            args: Prisma.Payment_sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Payment_sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Payment_sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Payment_sessionPayload>
          }
          aggregate: {
            args: Prisma.Payment_sessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_session>
          }
          groupBy: {
            args: Prisma.Payment_sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_sessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Payment_sessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Payment_sessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Payment_sessionCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_sessionCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CouponFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CouponAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
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
    admin?: AdminOmit
    movie?: MovieOmit
    screening?: ScreeningOmit
    user?: UserOmit
    chair?: ChairOmit
    rank?: RankOmit
    discount?: DiscountOmit
    hall?: HallOmit
    forum?: ForumOmit
    ticket?: TicketOmit
    ticket_type?: Ticket_typeOmit
    screening_type?: Screening_typeOmit
    payment_session?: Payment_sessionOmit
    coupon?: CouponOmit
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
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    screenings: number
    forum: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenings?: boolean | MovieCountOutputTypeCountScreeningsArgs
    forum?: boolean | MovieCountOutputTypeCountForumArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountForumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
  }


  /**
   * Count Type ScreeningCountOutputType
   */

  export type ScreeningCountOutputType = {
    payment_sessions: number
    tickets: number
  }

  export type ScreeningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_sessions?: boolean | ScreeningCountOutputTypeCountPayment_sessionsArgs
    tickets?: boolean | ScreeningCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ScreeningCountOutputType without action
   */
  export type ScreeningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningCountOutputType
     */
    select?: ScreeningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreeningCountOutputType without action
   */
  export type ScreeningCountOutputTypeCountPayment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_sessionWhereInput
  }

  /**
   * ScreeningCountOutputType without action
   */
  export type ScreeningCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
    forum: number
    payment_sessions: number
    coupons: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    forum?: boolean | UserCountOutputTypeCountForumArgs
    payment_sessions?: boolean | UserCountOutputTypeCountPayment_sessionsArgs
    coupons?: boolean | UserCountOutputTypeCountCouponsArgs
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
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_sessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }


  /**
   * Count Type ChairCountOutputType
   */

  export type ChairCountOutputType = {
    tickets: number
  }

  export type ChairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ChairCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ChairCountOutputType without action
   */
  export type ChairCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChairCountOutputType
     */
    select?: ChairCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChairCountOutputType without action
   */
  export type ChairCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type RankCountOutputType
   */

  export type RankCountOutputType = {
    users: number
  }

  export type RankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RankCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RankCountOutputType without action
   */
  export type RankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankCountOutputType
     */
    select?: RankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RankCountOutputType without action
   */
  export type RankCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    ranks: number
    coupons: number
  }

  export type DiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ranks?: boolean | DiscountCountOutputTypeCountRanksArgs
    coupons?: boolean | DiscountCountOutputTypeCountCouponsArgs
  }

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountRanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankWhereInput
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }


  /**
   * Count Type HallCountOutputType
   */

  export type HallCountOutputType = {
    screenings: number
    chairs: number
  }

  export type HallCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenings?: boolean | HallCountOutputTypeCountScreeningsArgs
    chairs?: boolean | HallCountOutputTypeCountChairsArgs
  }

  // Custom InputTypes
  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallCountOutputType
     */
    select?: HallCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeCountScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
  }

  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeCountChairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairWhereInput
  }


  /**
   * Count Type Ticket_typeCountOutputType
   */

  export type Ticket_typeCountOutputType = {
    tickets: number
    payment_sessions: number
  }

  export type Ticket_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Ticket_typeCountOutputTypeCountTicketsArgs
    payment_sessions?: boolean | Ticket_typeCountOutputTypeCountPayment_sessionsArgs
  }

  // Custom InputTypes
  /**
   * Ticket_typeCountOutputType without action
   */
  export type Ticket_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_typeCountOutputType
     */
    select?: Ticket_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_typeCountOutputType without action
   */
  export type Ticket_typeCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * Ticket_typeCountOutputType without action
   */
  export type Ticket_typeCountOutputTypeCountPayment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_sessionWhereInput
  }


  /**
   * Count Type Screening_typeCountOutputType
   */

  export type Screening_typeCountOutputType = {
    tickets: number
    screenings: number
  }

  export type Screening_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Screening_typeCountOutputTypeCountTicketsArgs
    screenings?: boolean | Screening_typeCountOutputTypeCountScreeningsArgs
  }

  // Custom InputTypes
  /**
   * Screening_typeCountOutputType without action
   */
  export type Screening_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_typeCountOutputType
     */
    select?: Screening_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Screening_typeCountOutputType without action
   */
  export type Screening_typeCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * Screening_typeCountOutputType without action
   */
  export type Screening_typeCountOutputTypeCountScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    password_hash: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password_hash: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    password_hash: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    password_hash?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    password_hash: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    password_hash?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password_hash", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password_hash: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly password_hash: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    playtime: number | null
    review: number | null
  }

  export type MovieSumAggregateOutputType = {
    playtime: number | null
    review: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    title: string | null
    director: string | null
    actors: string | null
    playtime: number | null
    language: string | null
    trailer: string | null
    poster: string | null
    backdrop: string | null
    onscreen: boolean | null
    genre: string | null
    review: number | null
    description: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    title: string | null
    director: string | null
    actors: string | null
    playtime: number | null
    language: string | null
    trailer: string | null
    poster: string | null
    backdrop: string | null
    onscreen: boolean | null
    genre: string | null
    review: number | null
    description: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    director: number
    actors: number
    playtime: number
    language: number
    trailer: number
    poster: number
    backdrop: number
    onscreen: number
    genre: number
    review: number
    description: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    playtime?: true
    review?: true
  }

  export type MovieSumAggregateInputType = {
    playtime?: true
    review?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    director?: true
    actors?: true
    playtime?: true
    language?: true
    trailer?: true
    poster?: true
    backdrop?: true
    onscreen?: true
    genre?: true
    review?: true
    description?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    director?: true
    actors?: true
    playtime?: true
    language?: true
    trailer?: true
    poster?: true
    backdrop?: true
    onscreen?: true
    genre?: true
    review?: true
    description?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    director?: true
    actors?: true
    playtime?: true
    language?: true
    trailer?: true
    poster?: true
    backdrop?: true
    onscreen?: true
    genre?: true
    review?: true
    description?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop: string | null
    onscreen: boolean
    genre: string
    review: number | null
    description: string | null
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    director?: boolean
    actors?: boolean
    playtime?: boolean
    language?: boolean
    trailer?: boolean
    poster?: boolean
    backdrop?: boolean
    onscreen?: boolean
    genre?: boolean
    review?: boolean
    description?: boolean
    screenings?: boolean | Movie$screeningsArgs<ExtArgs>
    forum?: boolean | Movie$forumArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    director?: boolean
    actors?: boolean
    playtime?: boolean
    language?: boolean
    trailer?: boolean
    poster?: boolean
    backdrop?: boolean
    onscreen?: boolean
    genre?: boolean
    review?: boolean
    description?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "director" | "actors" | "playtime" | "language" | "trailer" | "poster" | "backdrop" | "onscreen" | "genre" | "review" | "description", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenings?: boolean | Movie$screeningsArgs<ExtArgs>
    forum?: boolean | Movie$forumArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      screenings: Prisma.$ScreeningPayload<ExtArgs>[]
      forum: Prisma.$ForumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      director: string
      actors: string
      playtime: number
      language: string
      trailer: string
      poster: string
      backdrop: string | null
      onscreen: boolean
      genre: string
      review: number | null
      description: string | null
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MovieFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movie = await prisma.movie.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MovieFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Movie.
     * @param {MovieAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movie = await prisma.movie.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MovieAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screenings<T extends Movie$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$screeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forum<T extends Movie$forumArgs<ExtArgs> = {}>(args?: Subset<T, Movie$forumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly director: FieldRef<"Movie", 'String'>
    readonly actors: FieldRef<"Movie", 'String'>
    readonly playtime: FieldRef<"Movie", 'Int'>
    readonly language: FieldRef<"Movie", 'String'>
    readonly trailer: FieldRef<"Movie", 'String'>
    readonly poster: FieldRef<"Movie", 'String'>
    readonly backdrop: FieldRef<"Movie", 'String'>
    readonly onscreen: FieldRef<"Movie", 'Boolean'>
    readonly genre: FieldRef<"Movie", 'String'>
    readonly review: FieldRef<"Movie", 'Float'>
    readonly description: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie findRaw
   */
  export type MovieFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Movie aggregateRaw
   */
  export type MovieAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Movie.screenings
   */
  export type Movie$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    cursor?: ScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Movie.forum
   */
  export type Movie$forumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    cursor?: ForumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Screening
   */

  export type AggregateScreening = {
    _count: ScreeningCountAggregateOutputType | null
    _min: ScreeningMinAggregateOutputType | null
    _max: ScreeningMaxAggregateOutputType | null
  }

  export type ScreeningMinAggregateOutputType = {
    id: string | null
    hall_id: string | null
    movie_id: string | null
    start: Date | null
    end: Date | null
    screening_type_id: string | null
  }

  export type ScreeningMaxAggregateOutputType = {
    id: string | null
    hall_id: string | null
    movie_id: string | null
    start: Date | null
    end: Date | null
    screening_type_id: string | null
  }

  export type ScreeningCountAggregateOutputType = {
    id: number
    hall_id: number
    movie_id: number
    start: number
    end: number
    screening_type_id: number
    _all: number
  }


  export type ScreeningMinAggregateInputType = {
    id?: true
    hall_id?: true
    movie_id?: true
    start?: true
    end?: true
    screening_type_id?: true
  }

  export type ScreeningMaxAggregateInputType = {
    id?: true
    hall_id?: true
    movie_id?: true
    start?: true
    end?: true
    screening_type_id?: true
  }

  export type ScreeningCountAggregateInputType = {
    id?: true
    hall_id?: true
    movie_id?: true
    start?: true
    end?: true
    screening_type_id?: true
    _all?: true
  }

  export type ScreeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screening to aggregate.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screenings
    **/
    _count?: true | ScreeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreeningMaxAggregateInputType
  }

  export type GetScreeningAggregateType<T extends ScreeningAggregateArgs> = {
        [P in keyof T & keyof AggregateScreening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreening[P]>
      : GetScalarType<T[P], AggregateScreening[P]>
  }




  export type ScreeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithAggregationInput | ScreeningOrderByWithAggregationInput[]
    by: ScreeningScalarFieldEnum[] | ScreeningScalarFieldEnum
    having?: ScreeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreeningCountAggregateInputType | true
    _min?: ScreeningMinAggregateInputType
    _max?: ScreeningMaxAggregateInputType
  }

  export type ScreeningGroupByOutputType = {
    id: string
    hall_id: string
    movie_id: string
    start: Date
    end: Date
    screening_type_id: string
    _count: ScreeningCountAggregateOutputType | null
    _min: ScreeningMinAggregateOutputType | null
    _max: ScreeningMaxAggregateOutputType | null
  }

  type GetScreeningGroupByPayload<T extends ScreeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreeningGroupByOutputType[P]>
            : GetScalarType<T[P], ScreeningGroupByOutputType[P]>
        }
      >
    >


  export type ScreeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hall_id?: boolean
    movie_id?: boolean
    start?: boolean
    end?: boolean
    screening_type_id?: boolean
    payment_sessions?: boolean | Screening$payment_sessionsArgs<ExtArgs>
    tickets?: boolean | Screening$ticketsArgs<ExtArgs>
    movies?: boolean | Screening$moviesArgs<ExtArgs>
    halls?: boolean | Screening$hallsArgs<ExtArgs>
    screening_types?: boolean | Screening$screening_typesArgs<ExtArgs>
    _count?: boolean | ScreeningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screening"]>



  export type ScreeningSelectScalar = {
    id?: boolean
    hall_id?: boolean
    movie_id?: boolean
    start?: boolean
    end?: boolean
    screening_type_id?: boolean
  }

  export type ScreeningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hall_id" | "movie_id" | "start" | "end" | "screening_type_id", ExtArgs["result"]["screening"]>
  export type ScreeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_sessions?: boolean | Screening$payment_sessionsArgs<ExtArgs>
    tickets?: boolean | Screening$ticketsArgs<ExtArgs>
    movies?: boolean | Screening$moviesArgs<ExtArgs>
    halls?: boolean | Screening$hallsArgs<ExtArgs>
    screening_types?: boolean | Screening$screening_typesArgs<ExtArgs>
    _count?: boolean | ScreeningCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScreeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screening"
    objects: {
      payment_sessions: Prisma.$Payment_sessionPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      movies: Prisma.$MoviePayload<ExtArgs> | null
      halls: Prisma.$HallPayload<ExtArgs> | null
      screening_types: Prisma.$Screening_typePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hall_id: string
      movie_id: string
      start: Date
      end: Date
      screening_type_id: string
    }, ExtArgs["result"]["screening"]>
    composites: {}
  }

  type ScreeningGetPayload<S extends boolean | null | undefined | ScreeningDefaultArgs> = $Result.GetResult<Prisma.$ScreeningPayload, S>

  type ScreeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreeningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreeningCountAggregateInputType | true
    }

  export interface ScreeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screening'], meta: { name: 'Screening' } }
    /**
     * Find zero or one Screening that matches the filter.
     * @param {ScreeningFindUniqueArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreeningFindUniqueArgs>(args: SelectSubset<T, ScreeningFindUniqueArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreeningFindUniqueOrThrowArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreeningFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindFirstArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreeningFindFirstArgs>(args?: SelectSubset<T, ScreeningFindFirstArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindFirstOrThrowArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreeningFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screenings
     * const screenings = await prisma.screening.findMany()
     * 
     * // Get first 10 Screenings
     * const screenings = await prisma.screening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screeningWithIdOnly = await prisma.screening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreeningFindManyArgs>(args?: SelectSubset<T, ScreeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screening.
     * @param {ScreeningCreateArgs} args - Arguments to create a Screening.
     * @example
     * // Create one Screening
     * const Screening = await prisma.screening.create({
     *   data: {
     *     // ... data to create a Screening
     *   }
     * })
     * 
     */
    create<T extends ScreeningCreateArgs>(args: SelectSubset<T, ScreeningCreateArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screenings.
     * @param {ScreeningCreateManyArgs} args - Arguments to create many Screenings.
     * @example
     * // Create many Screenings
     * const screening = await prisma.screening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreeningCreateManyArgs>(args?: SelectSubset<T, ScreeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Screening.
     * @param {ScreeningDeleteArgs} args - Arguments to delete one Screening.
     * @example
     * // Delete one Screening
     * const Screening = await prisma.screening.delete({
     *   where: {
     *     // ... filter to delete one Screening
     *   }
     * })
     * 
     */
    delete<T extends ScreeningDeleteArgs>(args: SelectSubset<T, ScreeningDeleteArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screening.
     * @param {ScreeningUpdateArgs} args - Arguments to update one Screening.
     * @example
     * // Update one Screening
     * const screening = await prisma.screening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreeningUpdateArgs>(args: SelectSubset<T, ScreeningUpdateArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screenings.
     * @param {ScreeningDeleteManyArgs} args - Arguments to filter Screenings to delete.
     * @example
     * // Delete a few Screenings
     * const { count } = await prisma.screening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreeningDeleteManyArgs>(args?: SelectSubset<T, ScreeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screenings
     * const screening = await prisma.screening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreeningUpdateManyArgs>(args: SelectSubset<T, ScreeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Screening.
     * @param {ScreeningUpsertArgs} args - Arguments to update or create a Screening.
     * @example
     * // Update or create a Screening
     * const screening = await prisma.screening.upsert({
     *   create: {
     *     // ... data to create a Screening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screening we want to update
     *   }
     * })
     */
    upsert<T extends ScreeningUpsertArgs>(args: SelectSubset<T, ScreeningUpsertArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screenings that matches the filter.
     * @param {ScreeningFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const screening = await prisma.screening.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScreeningFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Screening.
     * @param {ScreeningAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const screening = await prisma.screening.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScreeningAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningCountArgs} args - Arguments to filter Screenings to count.
     * @example
     * // Count the number of Screenings
     * const count = await prisma.screening.count({
     *   where: {
     *     // ... the filter for the Screenings we want to count
     *   }
     * })
    **/
    count<T extends ScreeningCountArgs>(
      args?: Subset<T, ScreeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreeningAggregateArgs>(args: Subset<T, ScreeningAggregateArgs>): Prisma.PrismaPromise<GetScreeningAggregateType<T>>

    /**
     * Group by Screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningGroupByArgs} args - Group by arguments.
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
      T extends ScreeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreeningGroupByArgs['orderBy'] }
        : { orderBy?: ScreeningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScreeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screening model
   */
  readonly fields: ScreeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment_sessions<T extends Screening$payment_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Screening$payment_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Screening$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Screening$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movies<T extends Screening$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Screening$moviesArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    halls<T extends Screening$hallsArgs<ExtArgs> = {}>(args?: Subset<T, Screening$hallsArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    screening_types<T extends Screening$screening_typesArgs<ExtArgs> = {}>(args?: Subset<T, Screening$screening_typesArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Screening model
   */
  interface ScreeningFieldRefs {
    readonly id: FieldRef<"Screening", 'String'>
    readonly hall_id: FieldRef<"Screening", 'String'>
    readonly movie_id: FieldRef<"Screening", 'String'>
    readonly start: FieldRef<"Screening", 'DateTime'>
    readonly end: FieldRef<"Screening", 'DateTime'>
    readonly screening_type_id: FieldRef<"Screening", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Screening findUnique
   */
  export type ScreeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where: ScreeningWhereUniqueInput
  }

  /**
   * Screening findUniqueOrThrow
   */
  export type ScreeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where: ScreeningWhereUniqueInput
  }

  /**
   * Screening findFirst
   */
  export type ScreeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenings.
     */
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Screening findFirstOrThrow
   */
  export type ScreeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenings.
     */
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Screening findMany
   */
  export type ScreeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screenings to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Screening create
   */
  export type ScreeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The data needed to create a Screening.
     */
    data: XOR<ScreeningCreateInput, ScreeningUncheckedCreateInput>
  }

  /**
   * Screening createMany
   */
  export type ScreeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screenings.
     */
    data: ScreeningCreateManyInput | ScreeningCreateManyInput[]
  }

  /**
   * Screening update
   */
  export type ScreeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The data needed to update a Screening.
     */
    data: XOR<ScreeningUpdateInput, ScreeningUncheckedUpdateInput>
    /**
     * Choose, which Screening to update.
     */
    where: ScreeningWhereUniqueInput
  }

  /**
   * Screening updateMany
   */
  export type ScreeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screenings.
     */
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyInput>
    /**
     * Filter which Screenings to update
     */
    where?: ScreeningWhereInput
    /**
     * Limit how many Screenings to update.
     */
    limit?: number
  }

  /**
   * Screening upsert
   */
  export type ScreeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The filter to search for the Screening to update in case it exists.
     */
    where: ScreeningWhereUniqueInput
    /**
     * In case the Screening found by the `where` argument doesn't exist, create a new Screening with this data.
     */
    create: XOR<ScreeningCreateInput, ScreeningUncheckedCreateInput>
    /**
     * In case the Screening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreeningUpdateInput, ScreeningUncheckedUpdateInput>
  }

  /**
   * Screening delete
   */
  export type ScreeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter which Screening to delete.
     */
    where: ScreeningWhereUniqueInput
  }

  /**
   * Screening deleteMany
   */
  export type ScreeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenings to delete
     */
    where?: ScreeningWhereInput
    /**
     * Limit how many Screenings to delete.
     */
    limit?: number
  }

  /**
   * Screening findRaw
   */
  export type ScreeningFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Screening aggregateRaw
   */
  export type ScreeningAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Screening.payment_sessions
   */
  export type Screening$payment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    where?: Payment_sessionWhereInput
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    cursor?: Payment_sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * Screening.tickets
   */
  export type Screening$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Screening.movies
   */
  export type Screening$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }

  /**
   * Screening.halls
   */
  export type Screening$hallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    where?: HallWhereInput
  }

  /**
   * Screening.screening_types
   */
  export type Screening$screening_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    where?: Screening_typeWhereInput
  }

  /**
   * Screening without action
   */
  export type ScreeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    points: number | null
    phone_number: string | null
    profile_image: string | null
    gender: string | null
    email_verified: boolean | null
    email_code: string | null
    email_code_exp: Date | null
    password_reset_token: string | null
    password_reset_exp: Date | null
    rank_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    points: number | null
    phone_number: string | null
    profile_image: string | null
    gender: string | null
    email_verified: boolean | null
    email_code: string | null
    email_code_exp: Date | null
    password_reset_token: string | null
    password_reset_exp: Date | null
    rank_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    points: number
    phone_number: number
    profile_image: number
    gender: number
    email_verified: number
    email_code: number
    email_code_exp: number
    password_reset_token: number
    password_reset_exp: number
    rank_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    points?: true
    phone_number?: true
    profile_image?: true
    gender?: true
    email_verified?: true
    email_code?: true
    email_code_exp?: true
    password_reset_token?: true
    password_reset_exp?: true
    rank_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    points?: true
    phone_number?: true
    profile_image?: true
    gender?: true
    email_verified?: true
    email_code?: true
    email_code_exp?: true
    password_reset_token?: true
    password_reset_exp?: true
    rank_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    points?: true
    phone_number?: true
    profile_image?: true
    gender?: true
    email_verified?: true
    email_code?: true
    email_code_exp?: true
    password_reset_token?: true
    password_reset_exp?: true
    rank_id?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    points: number
    phone_number: string
    profile_image: string
    gender: string
    email_verified: boolean
    email_code: string | null
    email_code_exp: Date | null
    password_reset_token: string | null
    password_reset_exp: Date | null
    rank_id: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password_hash?: boolean
    points?: boolean
    phone_number?: boolean
    profile_image?: boolean
    gender?: boolean
    email_verified?: boolean
    email_code?: boolean
    email_code_exp?: boolean
    password_reset_token?: boolean
    password_reset_exp?: boolean
    rank_id?: boolean
    ranks?: boolean | User$ranksArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    forum?: boolean | User$forumArgs<ExtArgs>
    payment_sessions?: boolean | User$payment_sessionsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    points?: boolean
    phone_number?: boolean
    profile_image?: boolean
    gender?: boolean
    email_verified?: boolean
    email_code?: boolean
    email_code_exp?: boolean
    password_reset_token?: boolean
    password_reset_exp?: boolean
    rank_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "points" | "phone_number" | "profile_image" | "gender" | "email_verified" | "email_code" | "email_code_exp" | "password_reset_token" | "password_reset_exp" | "rank_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ranks?: boolean | User$ranksArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    forum?: boolean | User$forumArgs<ExtArgs>
    payment_sessions?: boolean | User$payment_sessionsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ranks: Prisma.$RankPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      forum: Prisma.$ForumPayload<ExtArgs>[]
      payment_sessions: Prisma.$Payment_sessionPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      points: number
      phone_number: string
      profile_image: string
      gender: string
      email_verified: boolean
      email_code: string | null
      email_code_exp: Date | null
      password_reset_token: string | null
      password_reset_exp: Date | null
      rank_id: string
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
    ranks<T extends User$ranksArgs<ExtArgs> = {}>(args?: Subset<T, User$ranksArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forum<T extends User$forumArgs<ExtArgs> = {}>(args?: Subset<T, User$forumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_sessions<T extends User$payment_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$payment_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends User$couponsArgs<ExtArgs> = {}>(args?: Subset<T, User$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly profile_image: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly email_verified: FieldRef<"User", 'Boolean'>
    readonly email_code: FieldRef<"User", 'String'>
    readonly email_code_exp: FieldRef<"User", 'DateTime'>
    readonly password_reset_token: FieldRef<"User", 'String'>
    readonly password_reset_exp: FieldRef<"User", 'DateTime'>
    readonly rank_id: FieldRef<"User", 'String'>
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
   * User.ranks
   */
  export type User$ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    where?: RankWhereInput
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.forum
   */
  export type User$forumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    cursor?: ForumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * User.payment_sessions
   */
  export type User$payment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    where?: Payment_sessionWhereInput
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    cursor?: Payment_sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * User.coupons
   */
  export type User$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
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
   * Model Chair
   */

  export type AggregateChair = {
    _count: ChairCountAggregateOutputType | null
    _avg: ChairAvgAggregateOutputType | null
    _sum: ChairSumAggregateOutputType | null
    _min: ChairMinAggregateOutputType | null
    _max: ChairMaxAggregateOutputType | null
  }

  export type ChairAvgAggregateOutputType = {
    row: number | null
    column: number | null
  }

  export type ChairSumAggregateOutputType = {
    row: number | null
    column: number | null
  }

  export type ChairMinAggregateOutputType = {
    id: string | null
    row: number | null
    column: number | null
    hall_id: string | null
  }

  export type ChairMaxAggregateOutputType = {
    id: string | null
    row: number | null
    column: number | null
    hall_id: string | null
  }

  export type ChairCountAggregateOutputType = {
    id: number
    row: number
    column: number
    hall_id: number
    _all: number
  }


  export type ChairAvgAggregateInputType = {
    row?: true
    column?: true
  }

  export type ChairSumAggregateInputType = {
    row?: true
    column?: true
  }

  export type ChairMinAggregateInputType = {
    id?: true
    row?: true
    column?: true
    hall_id?: true
  }

  export type ChairMaxAggregateInputType = {
    id?: true
    row?: true
    column?: true
    hall_id?: true
  }

  export type ChairCountAggregateInputType = {
    id?: true
    row?: true
    column?: true
    hall_id?: true
    _all?: true
  }

  export type ChairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chair to aggregate.
     */
    where?: ChairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairs to fetch.
     */
    orderBy?: ChairOrderByWithRelationInput | ChairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chairs
    **/
    _count?: true | ChairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChairMaxAggregateInputType
  }

  export type GetChairAggregateType<T extends ChairAggregateArgs> = {
        [P in keyof T & keyof AggregateChair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChair[P]>
      : GetScalarType<T[P], AggregateChair[P]>
  }




  export type ChairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairWhereInput
    orderBy?: ChairOrderByWithAggregationInput | ChairOrderByWithAggregationInput[]
    by: ChairScalarFieldEnum[] | ChairScalarFieldEnum
    having?: ChairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChairCountAggregateInputType | true
    _avg?: ChairAvgAggregateInputType
    _sum?: ChairSumAggregateInputType
    _min?: ChairMinAggregateInputType
    _max?: ChairMaxAggregateInputType
  }

  export type ChairGroupByOutputType = {
    id: string
    row: number
    column: number
    hall_id: string
    _count: ChairCountAggregateOutputType | null
    _avg: ChairAvgAggregateOutputType | null
    _sum: ChairSumAggregateOutputType | null
    _min: ChairMinAggregateOutputType | null
    _max: ChairMaxAggregateOutputType | null
  }

  type GetChairGroupByPayload<T extends ChairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChairGroupByOutputType[P]>
            : GetScalarType<T[P], ChairGroupByOutputType[P]>
        }
      >
    >


  export type ChairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    row?: boolean
    column?: boolean
    hall_id?: boolean
    tickets?: boolean | Chair$ticketsArgs<ExtArgs>
    halls?: boolean | Chair$hallsArgs<ExtArgs>
    _count?: boolean | ChairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chair"]>



  export type ChairSelectScalar = {
    id?: boolean
    row?: boolean
    column?: boolean
    hall_id?: boolean
  }

  export type ChairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "row" | "column" | "hall_id", ExtArgs["result"]["chair"]>
  export type ChairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Chair$ticketsArgs<ExtArgs>
    halls?: boolean | Chair$hallsArgs<ExtArgs>
    _count?: boolean | ChairCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chair"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      halls: Prisma.$HallPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      row: number
      column: number
      hall_id: string
    }, ExtArgs["result"]["chair"]>
    composites: {}
  }

  type ChairGetPayload<S extends boolean | null | undefined | ChairDefaultArgs> = $Result.GetResult<Prisma.$ChairPayload, S>

  type ChairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChairCountAggregateInputType | true
    }

  export interface ChairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chair'], meta: { name: 'Chair' } }
    /**
     * Find zero or one Chair that matches the filter.
     * @param {ChairFindUniqueArgs} args - Arguments to find a Chair
     * @example
     * // Get one Chair
     * const chair = await prisma.chair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChairFindUniqueArgs>(args: SelectSubset<T, ChairFindUniqueArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChairFindUniqueOrThrowArgs} args - Arguments to find a Chair
     * @example
     * // Get one Chair
     * const chair = await prisma.chair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChairFindUniqueOrThrowArgs>(args: SelectSubset<T, ChairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairFindFirstArgs} args - Arguments to find a Chair
     * @example
     * // Get one Chair
     * const chair = await prisma.chair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChairFindFirstArgs>(args?: SelectSubset<T, ChairFindFirstArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairFindFirstOrThrowArgs} args - Arguments to find a Chair
     * @example
     * // Get one Chair
     * const chair = await prisma.chair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChairFindFirstOrThrowArgs>(args?: SelectSubset<T, ChairFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chairs
     * const chairs = await prisma.chair.findMany()
     * 
     * // Get first 10 Chairs
     * const chairs = await prisma.chair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chairWithIdOnly = await prisma.chair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChairFindManyArgs>(args?: SelectSubset<T, ChairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chair.
     * @param {ChairCreateArgs} args - Arguments to create a Chair.
     * @example
     * // Create one Chair
     * const Chair = await prisma.chair.create({
     *   data: {
     *     // ... data to create a Chair
     *   }
     * })
     * 
     */
    create<T extends ChairCreateArgs>(args: SelectSubset<T, ChairCreateArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chairs.
     * @param {ChairCreateManyArgs} args - Arguments to create many Chairs.
     * @example
     * // Create many Chairs
     * const chair = await prisma.chair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChairCreateManyArgs>(args?: SelectSubset<T, ChairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chair.
     * @param {ChairDeleteArgs} args - Arguments to delete one Chair.
     * @example
     * // Delete one Chair
     * const Chair = await prisma.chair.delete({
     *   where: {
     *     // ... filter to delete one Chair
     *   }
     * })
     * 
     */
    delete<T extends ChairDeleteArgs>(args: SelectSubset<T, ChairDeleteArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chair.
     * @param {ChairUpdateArgs} args - Arguments to update one Chair.
     * @example
     * // Update one Chair
     * const chair = await prisma.chair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChairUpdateArgs>(args: SelectSubset<T, ChairUpdateArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chairs.
     * @param {ChairDeleteManyArgs} args - Arguments to filter Chairs to delete.
     * @example
     * // Delete a few Chairs
     * const { count } = await prisma.chair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChairDeleteManyArgs>(args?: SelectSubset<T, ChairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chairs
     * const chair = await prisma.chair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChairUpdateManyArgs>(args: SelectSubset<T, ChairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chair.
     * @param {ChairUpsertArgs} args - Arguments to update or create a Chair.
     * @example
     * // Update or create a Chair
     * const chair = await prisma.chair.upsert({
     *   create: {
     *     // ... data to create a Chair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chair we want to update
     *   }
     * })
     */
    upsert<T extends ChairUpsertArgs>(args: SelectSubset<T, ChairUpsertArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chairs that matches the filter.
     * @param {ChairFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chair = await prisma.chair.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChairFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chair.
     * @param {ChairAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chair = await prisma.chair.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChairAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Chairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairCountArgs} args - Arguments to filter Chairs to count.
     * @example
     * // Count the number of Chairs
     * const count = await prisma.chair.count({
     *   where: {
     *     // ... the filter for the Chairs we want to count
     *   }
     * })
    **/
    count<T extends ChairCountArgs>(
      args?: Subset<T, ChairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChairAggregateArgs>(args: Subset<T, ChairAggregateArgs>): Prisma.PrismaPromise<GetChairAggregateType<T>>

    /**
     * Group by Chair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairGroupByArgs} args - Group by arguments.
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
      T extends ChairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChairGroupByArgs['orderBy'] }
        : { orderBy?: ChairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chair model
   */
  readonly fields: ChairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Chair$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Chair$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    halls<T extends Chair$hallsArgs<ExtArgs> = {}>(args?: Subset<T, Chair$hallsArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chair model
   */
  interface ChairFieldRefs {
    readonly id: FieldRef<"Chair", 'String'>
    readonly row: FieldRef<"Chair", 'Int'>
    readonly column: FieldRef<"Chair", 'Int'>
    readonly hall_id: FieldRef<"Chair", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chair findUnique
   */
  export type ChairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter, which Chair to fetch.
     */
    where: ChairWhereUniqueInput
  }

  /**
   * Chair findUniqueOrThrow
   */
  export type ChairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter, which Chair to fetch.
     */
    where: ChairWhereUniqueInput
  }

  /**
   * Chair findFirst
   */
  export type ChairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter, which Chair to fetch.
     */
    where?: ChairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairs to fetch.
     */
    orderBy?: ChairOrderByWithRelationInput | ChairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairs.
     */
    cursor?: ChairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairs.
     */
    distinct?: ChairScalarFieldEnum | ChairScalarFieldEnum[]
  }

  /**
   * Chair findFirstOrThrow
   */
  export type ChairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter, which Chair to fetch.
     */
    where?: ChairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairs to fetch.
     */
    orderBy?: ChairOrderByWithRelationInput | ChairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairs.
     */
    cursor?: ChairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairs.
     */
    distinct?: ChairScalarFieldEnum | ChairScalarFieldEnum[]
  }

  /**
   * Chair findMany
   */
  export type ChairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter, which Chairs to fetch.
     */
    where?: ChairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairs to fetch.
     */
    orderBy?: ChairOrderByWithRelationInput | ChairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chairs.
     */
    cursor?: ChairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairs.
     */
    skip?: number
    distinct?: ChairScalarFieldEnum | ChairScalarFieldEnum[]
  }

  /**
   * Chair create
   */
  export type ChairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * The data needed to create a Chair.
     */
    data: XOR<ChairCreateInput, ChairUncheckedCreateInput>
  }

  /**
   * Chair createMany
   */
  export type ChairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chairs.
     */
    data: ChairCreateManyInput | ChairCreateManyInput[]
  }

  /**
   * Chair update
   */
  export type ChairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * The data needed to update a Chair.
     */
    data: XOR<ChairUpdateInput, ChairUncheckedUpdateInput>
    /**
     * Choose, which Chair to update.
     */
    where: ChairWhereUniqueInput
  }

  /**
   * Chair updateMany
   */
  export type ChairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chairs.
     */
    data: XOR<ChairUpdateManyMutationInput, ChairUncheckedUpdateManyInput>
    /**
     * Filter which Chairs to update
     */
    where?: ChairWhereInput
    /**
     * Limit how many Chairs to update.
     */
    limit?: number
  }

  /**
   * Chair upsert
   */
  export type ChairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * The filter to search for the Chair to update in case it exists.
     */
    where: ChairWhereUniqueInput
    /**
     * In case the Chair found by the `where` argument doesn't exist, create a new Chair with this data.
     */
    create: XOR<ChairCreateInput, ChairUncheckedCreateInput>
    /**
     * In case the Chair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChairUpdateInput, ChairUncheckedUpdateInput>
  }

  /**
   * Chair delete
   */
  export type ChairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    /**
     * Filter which Chair to delete.
     */
    where: ChairWhereUniqueInput
  }

  /**
   * Chair deleteMany
   */
  export type ChairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chairs to delete
     */
    where?: ChairWhereInput
    /**
     * Limit how many Chairs to delete.
     */
    limit?: number
  }

  /**
   * Chair findRaw
   */
  export type ChairFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chair aggregateRaw
   */
  export type ChairAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chair.tickets
   */
  export type Chair$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Chair.halls
   */
  export type Chair$hallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    where?: HallWhereInput
  }

  /**
   * Chair without action
   */
  export type ChairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
  }


  /**
   * Model Rank
   */

  export type AggregateRank = {
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  export type RankAvgAggregateOutputType = {
    point_limit: number | null
  }

  export type RankSumAggregateOutputType = {
    point_limit: number | null
  }

  export type RankMinAggregateOutputType = {
    id: string | null
    name: string | null
    point_limit: number | null
    image: string | null
    discount_id: string | null
  }

  export type RankMaxAggregateOutputType = {
    id: string | null
    name: string | null
    point_limit: number | null
    image: string | null
    discount_id: string | null
  }

  export type RankCountAggregateOutputType = {
    id: number
    name: number
    point_limit: number
    image: number
    discount_id: number
    _all: number
  }


  export type RankAvgAggregateInputType = {
    point_limit?: true
  }

  export type RankSumAggregateInputType = {
    point_limit?: true
  }

  export type RankMinAggregateInputType = {
    id?: true
    name?: true
    point_limit?: true
    image?: true
    discount_id?: true
  }

  export type RankMaxAggregateInputType = {
    id?: true
    name?: true
    point_limit?: true
    image?: true
    discount_id?: true
  }

  export type RankCountAggregateInputType = {
    id?: true
    name?: true
    point_limit?: true
    image?: true
    discount_id?: true
    _all?: true
  }

  export type RankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rank to aggregate.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: RankOrderByWithRelationInput | RankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ranks
    **/
    _count?: true | RankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankMaxAggregateInputType
  }

  export type GetRankAggregateType<T extends RankAggregateArgs> = {
        [P in keyof T & keyof AggregateRank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRank[P]>
      : GetScalarType<T[P], AggregateRank[P]>
  }




  export type RankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankWhereInput
    orderBy?: RankOrderByWithAggregationInput | RankOrderByWithAggregationInput[]
    by: RankScalarFieldEnum[] | RankScalarFieldEnum
    having?: RankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankCountAggregateInputType | true
    _avg?: RankAvgAggregateInputType
    _sum?: RankSumAggregateInputType
    _min?: RankMinAggregateInputType
    _max?: RankMaxAggregateInputType
  }

  export type RankGroupByOutputType = {
    id: string
    name: string
    point_limit: number
    image: string
    discount_id: string | null
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  type GetRankGroupByPayload<T extends RankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankGroupByOutputType[P]>
            : GetScalarType<T[P], RankGroupByOutputType[P]>
        }
      >
    >


  export type RankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point_limit?: boolean
    image?: boolean
    discount_id?: boolean
    discount?: boolean | Rank$discountArgs<ExtArgs>
    users?: boolean | Rank$usersArgs<ExtArgs>
    _count?: boolean | RankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rank"]>



  export type RankSelectScalar = {
    id?: boolean
    name?: boolean
    point_limit?: boolean
    image?: boolean
    discount_id?: boolean
  }

  export type RankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "point_limit" | "image" | "discount_id", ExtArgs["result"]["rank"]>
  export type RankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | Rank$discountArgs<ExtArgs>
    users?: boolean | Rank$usersArgs<ExtArgs>
    _count?: boolean | RankCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rank"
    objects: {
      discount: Prisma.$DiscountPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      point_limit: number
      image: string
      discount_id: string | null
    }, ExtArgs["result"]["rank"]>
    composites: {}
  }

  type RankGetPayload<S extends boolean | null | undefined | RankDefaultArgs> = $Result.GetResult<Prisma.$RankPayload, S>

  type RankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankCountAggregateInputType | true
    }

  export interface RankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rank'], meta: { name: 'Rank' } }
    /**
     * Find zero or one Rank that matches the filter.
     * @param {RankFindUniqueArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankFindUniqueArgs>(args: SelectSubset<T, RankFindUniqueArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankFindUniqueOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankFindUniqueOrThrowArgs>(args: SelectSubset<T, RankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindFirstArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankFindFirstArgs>(args?: SelectSubset<T, RankFindFirstArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindFirstOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankFindFirstOrThrowArgs>(args?: SelectSubset<T, RankFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ranks
     * const ranks = await prisma.rank.findMany()
     * 
     * // Get first 10 Ranks
     * const ranks = await prisma.rank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankWithIdOnly = await prisma.rank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RankFindManyArgs>(args?: SelectSubset<T, RankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rank.
     * @param {RankCreateArgs} args - Arguments to create a Rank.
     * @example
     * // Create one Rank
     * const Rank = await prisma.rank.create({
     *   data: {
     *     // ... data to create a Rank
     *   }
     * })
     * 
     */
    create<T extends RankCreateArgs>(args: SelectSubset<T, RankCreateArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ranks.
     * @param {RankCreateManyArgs} args - Arguments to create many Ranks.
     * @example
     * // Create many Ranks
     * const rank = await prisma.rank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankCreateManyArgs>(args?: SelectSubset<T, RankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rank.
     * @param {RankDeleteArgs} args - Arguments to delete one Rank.
     * @example
     * // Delete one Rank
     * const Rank = await prisma.rank.delete({
     *   where: {
     *     // ... filter to delete one Rank
     *   }
     * })
     * 
     */
    delete<T extends RankDeleteArgs>(args: SelectSubset<T, RankDeleteArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rank.
     * @param {RankUpdateArgs} args - Arguments to update one Rank.
     * @example
     * // Update one Rank
     * const rank = await prisma.rank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankUpdateArgs>(args: SelectSubset<T, RankUpdateArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ranks.
     * @param {RankDeleteManyArgs} args - Arguments to filter Ranks to delete.
     * @example
     * // Delete a few Ranks
     * const { count } = await prisma.rank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankDeleteManyArgs>(args?: SelectSubset<T, RankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ranks
     * const rank = await prisma.rank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankUpdateManyArgs>(args: SelectSubset<T, RankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rank.
     * @param {RankUpsertArgs} args - Arguments to update or create a Rank.
     * @example
     * // Update or create a Rank
     * const rank = await prisma.rank.upsert({
     *   create: {
     *     // ... data to create a Rank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rank we want to update
     *   }
     * })
     */
    upsert<T extends RankUpsertArgs>(args: SelectSubset<T, RankUpsertArgs<ExtArgs>>): Prisma__RankClient<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ranks that matches the filter.
     * @param {RankFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rank = await prisma.rank.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RankFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rank.
     * @param {RankAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rank = await prisma.rank.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RankAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankCountArgs} args - Arguments to filter Ranks to count.
     * @example
     * // Count the number of Ranks
     * const count = await prisma.rank.count({
     *   where: {
     *     // ... the filter for the Ranks we want to count
     *   }
     * })
    **/
    count<T extends RankCountArgs>(
      args?: Subset<T, RankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankAggregateArgs>(args: Subset<T, RankAggregateArgs>): Prisma.PrismaPromise<GetRankAggregateType<T>>

    /**
     * Group by Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankGroupByArgs} args - Group by arguments.
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
      T extends RankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankGroupByArgs['orderBy'] }
        : { orderBy?: RankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rank model
   */
  readonly fields: RankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discount<T extends Rank$discountArgs<ExtArgs> = {}>(args?: Subset<T, Rank$discountArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Rank$usersArgs<ExtArgs> = {}>(args?: Subset<T, Rank$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rank model
   */
  interface RankFieldRefs {
    readonly id: FieldRef<"Rank", 'String'>
    readonly name: FieldRef<"Rank", 'String'>
    readonly point_limit: FieldRef<"Rank", 'Int'>
    readonly image: FieldRef<"Rank", 'String'>
    readonly discount_id: FieldRef<"Rank", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rank findUnique
   */
  export type RankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where: RankWhereUniqueInput
  }

  /**
   * Rank findUniqueOrThrow
   */
  export type RankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where: RankWhereUniqueInput
  }

  /**
   * Rank findFirst
   */
  export type RankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: RankOrderByWithRelationInput | RankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranks.
     */
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * Rank findFirstOrThrow
   */
  export type RankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: RankOrderByWithRelationInput | RankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranks.
     */
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * Rank findMany
   */
  export type RankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Ranks to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: RankOrderByWithRelationInput | RankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * Rank create
   */
  export type RankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The data needed to create a Rank.
     */
    data: XOR<RankCreateInput, RankUncheckedCreateInput>
  }

  /**
   * Rank createMany
   */
  export type RankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ranks.
     */
    data: RankCreateManyInput | RankCreateManyInput[]
  }

  /**
   * Rank update
   */
  export type RankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The data needed to update a Rank.
     */
    data: XOR<RankUpdateInput, RankUncheckedUpdateInput>
    /**
     * Choose, which Rank to update.
     */
    where: RankWhereUniqueInput
  }

  /**
   * Rank updateMany
   */
  export type RankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ranks.
     */
    data: XOR<RankUpdateManyMutationInput, RankUncheckedUpdateManyInput>
    /**
     * Filter which Ranks to update
     */
    where?: RankWhereInput
    /**
     * Limit how many Ranks to update.
     */
    limit?: number
  }

  /**
   * Rank upsert
   */
  export type RankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The filter to search for the Rank to update in case it exists.
     */
    where: RankWhereUniqueInput
    /**
     * In case the Rank found by the `where` argument doesn't exist, create a new Rank with this data.
     */
    create: XOR<RankCreateInput, RankUncheckedCreateInput>
    /**
     * In case the Rank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankUpdateInput, RankUncheckedUpdateInput>
  }

  /**
   * Rank delete
   */
  export type RankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter which Rank to delete.
     */
    where: RankWhereUniqueInput
  }

  /**
   * Rank deleteMany
   */
  export type RankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ranks to delete
     */
    where?: RankWhereInput
    /**
     * Limit how many Ranks to delete.
     */
    limit?: number
  }

  /**
   * Rank findRaw
   */
  export type RankFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Rank aggregateRaw
   */
  export type RankAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Rank.discount
   */
  export type Rank$discountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
  }

  /**
   * Rank.users
   */
  export type Rank$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Rank without action
   */
  export type RankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    percent: number | null
  }

  export type DiscountSumAggregateOutputType = {
    percent: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    percent: number | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    percent: number | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    name: number
    image: number
    percent: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    percent?: true
  }

  export type DiscountSumAggregateInputType = {
    percent?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    percent?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    percent?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    percent?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: string
    name: string
    image: string
    percent: number
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    percent?: boolean
    ranks?: boolean | Discount$ranksArgs<ExtArgs>
    coupons?: boolean | Discount$couponsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>



  export type DiscountSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    percent?: boolean
  }

  export type DiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "percent", ExtArgs["result"]["discount"]>
  export type DiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ranks?: boolean | Discount$ranksArgs<ExtArgs>
    coupons?: boolean | Discount$couponsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {
      ranks: Prisma.$RankPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      percent: number
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * @param {DiscountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const discount = await prisma.discount.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiscountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Discount.
     * @param {DiscountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const discount = await prisma.discount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiscountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
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
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ranks<T extends Discount$ranksArgs<ExtArgs> = {}>(args?: Subset<T, Discount$ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends Discount$couponsArgs<ExtArgs> = {}>(args?: Subset<T, Discount$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'String'>
    readonly name: FieldRef<"Discount", 'String'>
    readonly image: FieldRef<"Discount", 'String'>
    readonly percent: FieldRef<"Discount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number
  }

  /**
   * Discount findRaw
   */
  export type DiscountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Discount aggregateRaw
   */
  export type DiscountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Discount.ranks
   */
  export type Discount$ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rank
     */
    omit?: RankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankInclude<ExtArgs> | null
    where?: RankWhereInput
    orderBy?: RankOrderByWithRelationInput | RankOrderByWithRelationInput[]
    cursor?: RankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * Discount.coupons
   */
  export type Discount$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
  }


  /**
   * Model Hall
   */

  export type AggregateHall = {
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  export type HallAvgAggregateOutputType = {
    row: number | null
    column: number | null
  }

  export type HallSumAggregateOutputType = {
    row: number | null
    column: number | null
  }

  export type HallMinAggregateOutputType = {
    id: string | null
    name: string | null
    row: number | null
    column: number | null
  }

  export type HallMaxAggregateOutputType = {
    id: string | null
    name: string | null
    row: number | null
    column: number | null
  }

  export type HallCountAggregateOutputType = {
    id: number
    name: number
    row: number
    column: number
    _all: number
  }


  export type HallAvgAggregateInputType = {
    row?: true
    column?: true
  }

  export type HallSumAggregateInputType = {
    row?: true
    column?: true
  }

  export type HallMinAggregateInputType = {
    id?: true
    name?: true
    row?: true
    column?: true
  }

  export type HallMaxAggregateInputType = {
    id?: true
    name?: true
    row?: true
    column?: true
  }

  export type HallCountAggregateInputType = {
    id?: true
    name?: true
    row?: true
    column?: true
    _all?: true
  }

  export type HallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hall to aggregate.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Halls
    **/
    _count?: true | HallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HallMaxAggregateInputType
  }

  export type GetHallAggregateType<T extends HallAggregateArgs> = {
        [P in keyof T & keyof AggregateHall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHall[P]>
      : GetScalarType<T[P], AggregateHall[P]>
  }




  export type HallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HallWhereInput
    orderBy?: HallOrderByWithAggregationInput | HallOrderByWithAggregationInput[]
    by: HallScalarFieldEnum[] | HallScalarFieldEnum
    having?: HallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HallCountAggregateInputType | true
    _avg?: HallAvgAggregateInputType
    _sum?: HallSumAggregateInputType
    _min?: HallMinAggregateInputType
    _max?: HallMaxAggregateInputType
  }

  export type HallGroupByOutputType = {
    id: string
    name: string
    row: number
    column: number
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  type GetHallGroupByPayload<T extends HallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HallGroupByOutputType[P]>
            : GetScalarType<T[P], HallGroupByOutputType[P]>
        }
      >
    >


  export type HallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    row?: boolean
    column?: boolean
    screenings?: boolean | Hall$screeningsArgs<ExtArgs>
    chairs?: boolean | Hall$chairsArgs<ExtArgs>
    _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hall"]>



  export type HallSelectScalar = {
    id?: boolean
    name?: boolean
    row?: boolean
    column?: boolean
  }

  export type HallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "row" | "column", ExtArgs["result"]["hall"]>
  export type HallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenings?: boolean | Hall$screeningsArgs<ExtArgs>
    chairs?: boolean | Hall$chairsArgs<ExtArgs>
    _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hall"
    objects: {
      screenings: Prisma.$ScreeningPayload<ExtArgs>[]
      chairs: Prisma.$ChairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      row: number
      column: number
    }, ExtArgs["result"]["hall"]>
    composites: {}
  }

  type HallGetPayload<S extends boolean | null | undefined | HallDefaultArgs> = $Result.GetResult<Prisma.$HallPayload, S>

  type HallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HallCountAggregateInputType | true
    }

  export interface HallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hall'], meta: { name: 'Hall' } }
    /**
     * Find zero or one Hall that matches the filter.
     * @param {HallFindUniqueArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HallFindUniqueArgs>(args: SelectSubset<T, HallFindUniqueArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HallFindUniqueOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HallFindUniqueOrThrowArgs>(args: SelectSubset<T, HallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HallFindFirstArgs>(args?: SelectSubset<T, HallFindFirstArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HallFindFirstOrThrowArgs>(args?: SelectSubset<T, HallFindFirstOrThrowArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Halls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Halls
     * const halls = await prisma.hall.findMany()
     * 
     * // Get first 10 Halls
     * const halls = await prisma.hall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hallWithIdOnly = await prisma.hall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HallFindManyArgs>(args?: SelectSubset<T, HallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hall.
     * @param {HallCreateArgs} args - Arguments to create a Hall.
     * @example
     * // Create one Hall
     * const Hall = await prisma.hall.create({
     *   data: {
     *     // ... data to create a Hall
     *   }
     * })
     * 
     */
    create<T extends HallCreateArgs>(args: SelectSubset<T, HallCreateArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Halls.
     * @param {HallCreateManyArgs} args - Arguments to create many Halls.
     * @example
     * // Create many Halls
     * const hall = await prisma.hall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HallCreateManyArgs>(args?: SelectSubset<T, HallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hall.
     * @param {HallDeleteArgs} args - Arguments to delete one Hall.
     * @example
     * // Delete one Hall
     * const Hall = await prisma.hall.delete({
     *   where: {
     *     // ... filter to delete one Hall
     *   }
     * })
     * 
     */
    delete<T extends HallDeleteArgs>(args: SelectSubset<T, HallDeleteArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hall.
     * @param {HallUpdateArgs} args - Arguments to update one Hall.
     * @example
     * // Update one Hall
     * const hall = await prisma.hall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HallUpdateArgs>(args: SelectSubset<T, HallUpdateArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Halls.
     * @param {HallDeleteManyArgs} args - Arguments to filter Halls to delete.
     * @example
     * // Delete a few Halls
     * const { count } = await prisma.hall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HallDeleteManyArgs>(args?: SelectSubset<T, HallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Halls
     * const hall = await prisma.hall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HallUpdateManyArgs>(args: SelectSubset<T, HallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hall.
     * @param {HallUpsertArgs} args - Arguments to update or create a Hall.
     * @example
     * // Update or create a Hall
     * const hall = await prisma.hall.upsert({
     *   create: {
     *     // ... data to create a Hall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hall we want to update
     *   }
     * })
     */
    upsert<T extends HallUpsertArgs>(args: SelectSubset<T, HallUpsertArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Halls that matches the filter.
     * @param {HallFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hall = await prisma.hall.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HallFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hall.
     * @param {HallAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hall = await prisma.hall.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HallAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallCountArgs} args - Arguments to filter Halls to count.
     * @example
     * // Count the number of Halls
     * const count = await prisma.hall.count({
     *   where: {
     *     // ... the filter for the Halls we want to count
     *   }
     * })
    **/
    count<T extends HallCountArgs>(
      args?: Subset<T, HallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HallAggregateArgs>(args: Subset<T, HallAggregateArgs>): Prisma.PrismaPromise<GetHallAggregateType<T>>

    /**
     * Group by Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallGroupByArgs} args - Group by arguments.
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
      T extends HallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HallGroupByArgs['orderBy'] }
        : { orderBy?: HallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hall model
   */
  readonly fields: HallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screenings<T extends Hall$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Hall$screeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chairs<T extends Hall$chairsArgs<ExtArgs> = {}>(args?: Subset<T, Hall$chairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hall model
   */
  interface HallFieldRefs {
    readonly id: FieldRef<"Hall", 'String'>
    readonly name: FieldRef<"Hall", 'String'>
    readonly row: FieldRef<"Hall", 'Int'>
    readonly column: FieldRef<"Hall", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hall findUnique
   */
  export type HallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall findUniqueOrThrow
   */
  export type HallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall findFirst
   */
  export type HallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Hall findFirstOrThrow
   */
  export type HallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Hall findMany
   */
  export type HallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Halls to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Hall create
   */
  export type HallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to create a Hall.
     */
    data: XOR<HallCreateInput, HallUncheckedCreateInput>
  }

  /**
   * Hall createMany
   */
  export type HallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Halls.
     */
    data: HallCreateManyInput | HallCreateManyInput[]
  }

  /**
   * Hall update
   */
  export type HallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to update a Hall.
     */
    data: XOR<HallUpdateInput, HallUncheckedUpdateInput>
    /**
     * Choose, which Hall to update.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall updateMany
   */
  export type HallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Halls.
     */
    data: XOR<HallUpdateManyMutationInput, HallUncheckedUpdateManyInput>
    /**
     * Filter which Halls to update
     */
    where?: HallWhereInput
    /**
     * Limit how many Halls to update.
     */
    limit?: number
  }

  /**
   * Hall upsert
   */
  export type HallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The filter to search for the Hall to update in case it exists.
     */
    where: HallWhereUniqueInput
    /**
     * In case the Hall found by the `where` argument doesn't exist, create a new Hall with this data.
     */
    create: XOR<HallCreateInput, HallUncheckedCreateInput>
    /**
     * In case the Hall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HallUpdateInput, HallUncheckedUpdateInput>
  }

  /**
   * Hall delete
   */
  export type HallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter which Hall to delete.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall deleteMany
   */
  export type HallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Halls to delete
     */
    where?: HallWhereInput
    /**
     * Limit how many Halls to delete.
     */
    limit?: number
  }

  /**
   * Hall findRaw
   */
  export type HallFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hall aggregateRaw
   */
  export type HallAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hall.screenings
   */
  export type Hall$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    cursor?: ScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Hall.chairs
   */
  export type Hall$chairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    where?: ChairWhereInput
    orderBy?: ChairOrderByWithRelationInput | ChairOrderByWithRelationInput[]
    cursor?: ChairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChairScalarFieldEnum | ChairScalarFieldEnum[]
  }

  /**
   * Hall without action
   */
  export type HallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
  }


  /**
   * Model Forum
   */

  export type AggregateForum = {
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  export type ForumAvgAggregateOutputType = {
    review: number | null
  }

  export type ForumSumAggregateOutputType = {
    review: number | null
  }

  export type ForumMinAggregateOutputType = {
    id: string | null
    review: number | null
    comment: string | null
    user_id: string | null
    movie_id: string | null
  }

  export type ForumMaxAggregateOutputType = {
    id: string | null
    review: number | null
    comment: string | null
    user_id: string | null
    movie_id: string | null
  }

  export type ForumCountAggregateOutputType = {
    id: number
    review: number
    comment: number
    user_id: number
    movie_id: number
    _all: number
  }


  export type ForumAvgAggregateInputType = {
    review?: true
  }

  export type ForumSumAggregateInputType = {
    review?: true
  }

  export type ForumMinAggregateInputType = {
    id?: true
    review?: true
    comment?: true
    user_id?: true
    movie_id?: true
  }

  export type ForumMaxAggregateInputType = {
    id?: true
    review?: true
    comment?: true
    user_id?: true
    movie_id?: true
  }

  export type ForumCountAggregateInputType = {
    id?: true
    review?: true
    comment?: true
    user_id?: true
    movie_id?: true
    _all?: true
  }

  export type ForumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forum to aggregate.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forums
    **/
    _count?: true | ForumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMaxAggregateInputType
  }

  export type GetForumAggregateType<T extends ForumAggregateArgs> = {
        [P in keyof T & keyof AggregateForum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForum[P]>
      : GetScalarType<T[P], AggregateForum[P]>
  }




  export type ForumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithAggregationInput | ForumOrderByWithAggregationInput[]
    by: ForumScalarFieldEnum[] | ForumScalarFieldEnum
    having?: ForumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCountAggregateInputType | true
    _avg?: ForumAvgAggregateInputType
    _sum?: ForumSumAggregateInputType
    _min?: ForumMinAggregateInputType
    _max?: ForumMaxAggregateInputType
  }

  export type ForumGroupByOutputType = {
    id: string
    review: number
    comment: string
    user_id: string
    movie_id: string
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  type GetForumGroupByPayload<T extends ForumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumGroupByOutputType[P]>
            : GetScalarType<T[P], ForumGroupByOutputType[P]>
        }
      >
    >


  export type ForumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    review?: boolean
    comment?: boolean
    user_id?: boolean
    movie_id?: boolean
    users?: boolean | Forum$usersArgs<ExtArgs>
    movies?: boolean | Forum$moviesArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>



  export type ForumSelectScalar = {
    id?: boolean
    review?: boolean
    comment?: boolean
    user_id?: boolean
    movie_id?: boolean
  }

  export type ForumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "review" | "comment" | "user_id" | "movie_id", ExtArgs["result"]["forum"]>
  export type ForumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Forum$usersArgs<ExtArgs>
    movies?: boolean | Forum$moviesArgs<ExtArgs>
  }

  export type $ForumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forum"
    objects: {
      users: Prisma.$UserPayload<ExtArgs> | null
      movies: Prisma.$MoviePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      review: number
      comment: string
      user_id: string
      movie_id: string
    }, ExtArgs["result"]["forum"]>
    composites: {}
  }

  type ForumGetPayload<S extends boolean | null | undefined | ForumDefaultArgs> = $Result.GetResult<Prisma.$ForumPayload, S>

  type ForumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCountAggregateInputType | true
    }

  export interface ForumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forum'], meta: { name: 'Forum' } }
    /**
     * Find zero or one Forum that matches the filter.
     * @param {ForumFindUniqueArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumFindUniqueArgs>(args: SelectSubset<T, ForumFindUniqueArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumFindUniqueOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumFindFirstArgs>(args?: SelectSubset<T, ForumFindFirstArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forums
     * const forums = await prisma.forum.findMany()
     * 
     * // Get first 10 Forums
     * const forums = await prisma.forum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumWithIdOnly = await prisma.forum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumFindManyArgs>(args?: SelectSubset<T, ForumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forum.
     * @param {ForumCreateArgs} args - Arguments to create a Forum.
     * @example
     * // Create one Forum
     * const Forum = await prisma.forum.create({
     *   data: {
     *     // ... data to create a Forum
     *   }
     * })
     * 
     */
    create<T extends ForumCreateArgs>(args: SelectSubset<T, ForumCreateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forums.
     * @param {ForumCreateManyArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCreateManyArgs>(args?: SelectSubset<T, ForumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Forum.
     * @param {ForumDeleteArgs} args - Arguments to delete one Forum.
     * @example
     * // Delete one Forum
     * const Forum = await prisma.forum.delete({
     *   where: {
     *     // ... filter to delete one Forum
     *   }
     * })
     * 
     */
    delete<T extends ForumDeleteArgs>(args: SelectSubset<T, ForumDeleteArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forum.
     * @param {ForumUpdateArgs} args - Arguments to update one Forum.
     * @example
     * // Update one Forum
     * const forum = await prisma.forum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumUpdateArgs>(args: SelectSubset<T, ForumUpdateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forums.
     * @param {ForumDeleteManyArgs} args - Arguments to filter Forums to delete.
     * @example
     * // Delete a few Forums
     * const { count } = await prisma.forum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumDeleteManyArgs>(args?: SelectSubset<T, ForumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumUpdateManyArgs>(args: SelectSubset<T, ForumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Forum.
     * @param {ForumUpsertArgs} args - Arguments to update or create a Forum.
     * @example
     * // Update or create a Forum
     * const forum = await prisma.forum.upsert({
     *   create: {
     *     // ... data to create a Forum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forum we want to update
     *   }
     * })
     */
    upsert<T extends ForumUpsertArgs>(args: SelectSubset<T, ForumUpsertArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forums that matches the filter.
     * @param {ForumFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const forum = await prisma.forum.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ForumFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Forum.
     * @param {ForumAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const forum = await prisma.forum.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ForumAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCountArgs} args - Arguments to filter Forums to count.
     * @example
     * // Count the number of Forums
     * const count = await prisma.forum.count({
     *   where: {
     *     // ... the filter for the Forums we want to count
     *   }
     * })
    **/
    count<T extends ForumCountArgs>(
      args?: Subset<T, ForumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumAggregateArgs>(args: Subset<T, ForumAggregateArgs>): Prisma.PrismaPromise<GetForumAggregateType<T>>

    /**
     * Group by Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumGroupByArgs} args - Group by arguments.
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
      T extends ForumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumGroupByArgs['orderBy'] }
        : { orderBy?: ForumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forum model
   */
  readonly fields: ForumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Forum$usersArgs<ExtArgs> = {}>(args?: Subset<T, Forum$usersArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    movies<T extends Forum$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Forum$moviesArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Forum model
   */
  interface ForumFieldRefs {
    readonly id: FieldRef<"Forum", 'String'>
    readonly review: FieldRef<"Forum", 'Float'>
    readonly comment: FieldRef<"Forum", 'String'>
    readonly user_id: FieldRef<"Forum", 'String'>
    readonly movie_id: FieldRef<"Forum", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Forum findUnique
   */
  export type ForumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findUniqueOrThrow
   */
  export type ForumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findFirst
   */
  export type ForumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findFirstOrThrow
   */
  export type ForumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findMany
   */
  export type ForumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forums to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum create
   */
  export type ForumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to create a Forum.
     */
    data: XOR<ForumCreateInput, ForumUncheckedCreateInput>
  }

  /**
   * Forum createMany
   */
  export type ForumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
  }

  /**
   * Forum update
   */
  export type ForumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to update a Forum.
     */
    data: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
    /**
     * Choose, which Forum to update.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum updateMany
   */
  export type ForumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
  }

  /**
   * Forum upsert
   */
  export type ForumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The filter to search for the Forum to update in case it exists.
     */
    where: ForumWhereUniqueInput
    /**
     * In case the Forum found by the `where` argument doesn't exist, create a new Forum with this data.
     */
    create: XOR<ForumCreateInput, ForumUncheckedCreateInput>
    /**
     * In case the Forum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
  }

  /**
   * Forum delete
   */
  export type ForumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter which Forum to delete.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum deleteMany
   */
  export type ForumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forums to delete
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to delete.
     */
    limit?: number
  }

  /**
   * Forum findRaw
   */
  export type ForumFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Forum aggregateRaw
   */
  export type ForumAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Forum.users
   */
  export type Forum$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Forum.movies
   */
  export type Forum$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }

  /**
   * Forum without action
   */
  export type ForumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    price: number | null
  }

  export type TicketSumAggregateOutputType = {
    price: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticket_type_id: string | null
    user_id: string | null
    screening_type_id: string | null
    screening_id: string | null
    chair_id: string | null
    price: number | null
    qr_token: string | null
    used_at: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticket_type_id: string | null
    user_id: string | null
    screening_type_id: string | null
    screening_id: string | null
    chair_id: string | null
    price: number | null
    qr_token: string | null
    used_at: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticket_type_id: number
    user_id: number
    screening_type_id: number
    screening_id: number
    chair_id: number
    price: number
    qr_token: number
    used_at: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    price?: true
  }

  export type TicketSumAggregateInputType = {
    price?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    ticket_type_id?: true
    user_id?: true
    screening_type_id?: true
    screening_id?: true
    chair_id?: true
    price?: true
    qr_token?: true
    used_at?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticket_type_id?: true
    user_id?: true
    screening_type_id?: true
    screening_id?: true
    chair_id?: true
    price?: true
    qr_token?: true
    used_at?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticket_type_id?: true
    user_id?: true
    screening_type_id?: true
    screening_id?: true
    chair_id?: true
    price?: true
    qr_token?: true
    used_at?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at: Date | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_type_id?: boolean
    user_id?: boolean
    screening_type_id?: boolean
    screening_id?: boolean
    chair_id?: boolean
    price?: boolean
    qr_token?: boolean
    used_at?: boolean
    ticket_types?: boolean | Ticket$ticket_typesArgs<ExtArgs>
    screening_types?: boolean | Ticket$screening_typesArgs<ExtArgs>
    screenings?: boolean | Ticket$screeningsArgs<ExtArgs>
    users?: boolean | Ticket$usersArgs<ExtArgs>
    chairs?: boolean | Ticket$chairsArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    ticket_type_id?: boolean
    user_id?: boolean
    screening_type_id?: boolean
    screening_id?: boolean
    chair_id?: boolean
    price?: boolean
    qr_token?: boolean
    used_at?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticket_type_id" | "user_id" | "screening_type_id" | "screening_id" | "chair_id" | "price" | "qr_token" | "used_at", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_types?: boolean | Ticket$ticket_typesArgs<ExtArgs>
    screening_types?: boolean | Ticket$screening_typesArgs<ExtArgs>
    screenings?: boolean | Ticket$screeningsArgs<ExtArgs>
    users?: boolean | Ticket$usersArgs<ExtArgs>
    chairs?: boolean | Ticket$chairsArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      ticket_types: Prisma.$Ticket_typePayload<ExtArgs> | null
      screening_types: Prisma.$Screening_typePayload<ExtArgs> | null
      screenings: Prisma.$ScreeningPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs> | null
      chairs: Prisma.$ChairPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticket_type_id: string
      user_id: string
      screening_type_id: string
      screening_id: string
      chair_id: string
      price: number
      qr_token: string
      used_at: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * @param {TicketFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticket = await prisma.ticket.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TicketFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticket.
     * @param {TicketAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticket = await prisma.ticket.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_types<T extends Ticket$ticket_typesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticket_typesArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    screening_types<T extends Ticket$screening_typesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$screening_typesArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    screenings<T extends Ticket$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$screeningsArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Ticket$usersArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$usersArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chairs<T extends Ticket$chairsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$chairsArgs<ExtArgs>>): Prisma__ChairClient<$Result.GetResult<Prisma.$ChairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticket_type_id: FieldRef<"Ticket", 'String'>
    readonly user_id: FieldRef<"Ticket", 'String'>
    readonly screening_type_id: FieldRef<"Ticket", 'String'>
    readonly screening_id: FieldRef<"Ticket", 'String'>
    readonly chair_id: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly qr_token: FieldRef<"Ticket", 'String'>
    readonly used_at: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket findRaw
   */
  export type TicketFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket aggregateRaw
   */
  export type TicketAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket.ticket_types
   */
  export type Ticket$ticket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    where?: Ticket_typeWhereInput
  }

  /**
   * Ticket.screening_types
   */
  export type Ticket$screening_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    where?: Screening_typeWhereInput
  }

  /**
   * Ticket.screenings
   */
  export type Ticket$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
  }

  /**
   * Ticket.users
   */
  export type Ticket$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket.chairs
   */
  export type Ticket$chairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chair
     */
    select?: ChairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chair
     */
    omit?: ChairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairInclude<ExtArgs> | null
    where?: ChairWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Ticket_type
   */

  export type AggregateTicket_type = {
    _count: Ticket_typeCountAggregateOutputType | null
    _avg: Ticket_typeAvgAggregateOutputType | null
    _sum: Ticket_typeSumAggregateOutputType | null
    _min: Ticket_typeMinAggregateOutputType | null
    _max: Ticket_typeMaxAggregateOutputType | null
  }

  export type Ticket_typeAvgAggregateOutputType = {
    percent: number | null
  }

  export type Ticket_typeSumAggregateOutputType = {
    percent: number | null
  }

  export type Ticket_typeMinAggregateOutputType = {
    id: string | null
    type: string | null
    percent: number | null
  }

  export type Ticket_typeMaxAggregateOutputType = {
    id: string | null
    type: string | null
    percent: number | null
  }

  export type Ticket_typeCountAggregateOutputType = {
    id: number
    type: number
    percent: number
    _all: number
  }


  export type Ticket_typeAvgAggregateInputType = {
    percent?: true
  }

  export type Ticket_typeSumAggregateInputType = {
    percent?: true
  }

  export type Ticket_typeMinAggregateInputType = {
    id?: true
    type?: true
    percent?: true
  }

  export type Ticket_typeMaxAggregateInputType = {
    id?: true
    type?: true
    percent?: true
  }

  export type Ticket_typeCountAggregateInputType = {
    id?: true
    type?: true
    percent?: true
    _all?: true
  }

  export type Ticket_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_type to aggregate.
     */
    where?: Ticket_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typeOrderByWithRelationInput | Ticket_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ticket_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ticket_types
    **/
    _count?: true | Ticket_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_typeMaxAggregateInputType
  }

  export type GetTicket_typeAggregateType<T extends Ticket_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_type[P]>
      : GetScalarType<T[P], AggregateTicket_type[P]>
  }




  export type Ticket_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ticket_typeWhereInput
    orderBy?: Ticket_typeOrderByWithAggregationInput | Ticket_typeOrderByWithAggregationInput[]
    by: Ticket_typeScalarFieldEnum[] | Ticket_typeScalarFieldEnum
    having?: Ticket_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_typeCountAggregateInputType | true
    _avg?: Ticket_typeAvgAggregateInputType
    _sum?: Ticket_typeSumAggregateInputType
    _min?: Ticket_typeMinAggregateInputType
    _max?: Ticket_typeMaxAggregateInputType
  }

  export type Ticket_typeGroupByOutputType = {
    id: string
    type: string
    percent: number
    _count: Ticket_typeCountAggregateOutputType | null
    _avg: Ticket_typeAvgAggregateOutputType | null
    _sum: Ticket_typeSumAggregateOutputType | null
    _min: Ticket_typeMinAggregateOutputType | null
    _max: Ticket_typeMaxAggregateOutputType | null
  }

  type GetTicket_typeGroupByPayload<T extends Ticket_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_typeGroupByOutputType[P]>
        }
      >
    >


  export type Ticket_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    percent?: boolean
    tickets?: boolean | Ticket_type$ticketsArgs<ExtArgs>
    payment_sessions?: boolean | Ticket_type$payment_sessionsArgs<ExtArgs>
    _count?: boolean | Ticket_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_type"]>



  export type Ticket_typeSelectScalar = {
    id?: boolean
    type?: boolean
    percent?: boolean
  }

  export type Ticket_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "percent", ExtArgs["result"]["ticket_type"]>
  export type Ticket_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Ticket_type$ticketsArgs<ExtArgs>
    payment_sessions?: boolean | Ticket_type$payment_sessionsArgs<ExtArgs>
    _count?: boolean | Ticket_typeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Ticket_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket_type"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      payment_sessions: Prisma.$Payment_sessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      percent: number
    }, ExtArgs["result"]["ticket_type"]>
    composites: {}
  }

  type Ticket_typeGetPayload<S extends boolean | null | undefined | Ticket_typeDefaultArgs> = $Result.GetResult<Prisma.$Ticket_typePayload, S>

  type Ticket_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Ticket_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ticket_typeCountAggregateInputType | true
    }

  export interface Ticket_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket_type'], meta: { name: 'Ticket_type' } }
    /**
     * Find zero or one Ticket_type that matches the filter.
     * @param {Ticket_typeFindUniqueArgs} args - Arguments to find a Ticket_type
     * @example
     * // Get one Ticket_type
     * const ticket_type = await prisma.ticket_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ticket_typeFindUniqueArgs>(args: SelectSubset<T, Ticket_typeFindUniqueArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Ticket_typeFindUniqueOrThrowArgs} args - Arguments to find a Ticket_type
     * @example
     * // Get one Ticket_type
     * const ticket_type = await prisma.ticket_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ticket_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, Ticket_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeFindFirstArgs} args - Arguments to find a Ticket_type
     * @example
     * // Get one Ticket_type
     * const ticket_type = await prisma.ticket_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ticket_typeFindFirstArgs>(args?: SelectSubset<T, Ticket_typeFindFirstArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeFindFirstOrThrowArgs} args - Arguments to find a Ticket_type
     * @example
     * // Get one Ticket_type
     * const ticket_type = await prisma.ticket_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ticket_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, Ticket_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_types
     * const ticket_types = await prisma.ticket_type.findMany()
     * 
     * // Get first 10 Ticket_types
     * const ticket_types = await prisma.ticket_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticket_typeWithIdOnly = await prisma.ticket_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Ticket_typeFindManyArgs>(args?: SelectSubset<T, Ticket_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket_type.
     * @param {Ticket_typeCreateArgs} args - Arguments to create a Ticket_type.
     * @example
     * // Create one Ticket_type
     * const Ticket_type = await prisma.ticket_type.create({
     *   data: {
     *     // ... data to create a Ticket_type
     *   }
     * })
     * 
     */
    create<T extends Ticket_typeCreateArgs>(args: SelectSubset<T, Ticket_typeCreateArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ticket_types.
     * @param {Ticket_typeCreateManyArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_type = await prisma.ticket_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ticket_typeCreateManyArgs>(args?: SelectSubset<T, Ticket_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_type.
     * @param {Ticket_typeDeleteArgs} args - Arguments to delete one Ticket_type.
     * @example
     * // Delete one Ticket_type
     * const Ticket_type = await prisma.ticket_type.delete({
     *   where: {
     *     // ... filter to delete one Ticket_type
     *   }
     * })
     * 
     */
    delete<T extends Ticket_typeDeleteArgs>(args: SelectSubset<T, Ticket_typeDeleteArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket_type.
     * @param {Ticket_typeUpdateArgs} args - Arguments to update one Ticket_type.
     * @example
     * // Update one Ticket_type
     * const ticket_type = await prisma.ticket_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ticket_typeUpdateArgs>(args: SelectSubset<T, Ticket_typeUpdateArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ticket_types.
     * @param {Ticket_typeDeleteManyArgs} args - Arguments to filter Ticket_types to delete.
     * @example
     * // Delete a few Ticket_types
     * const { count } = await prisma.ticket_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ticket_typeDeleteManyArgs>(args?: SelectSubset<T, Ticket_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_types
     * const ticket_type = await prisma.ticket_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ticket_typeUpdateManyArgs>(args: SelectSubset<T, Ticket_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_type.
     * @param {Ticket_typeUpsertArgs} args - Arguments to update or create a Ticket_type.
     * @example
     * // Update or create a Ticket_type
     * const ticket_type = await prisma.ticket_type.upsert({
     *   create: {
     *     // ... data to create a Ticket_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_type we want to update
     *   }
     * })
     */
    upsert<T extends Ticket_typeUpsertArgs>(args: SelectSubset<T, Ticket_typeUpsertArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticket_types that matches the filter.
     * @param {Ticket_typeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticket_type = await prisma.ticket_type.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Ticket_typeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticket_type.
     * @param {Ticket_typeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticket_type = await prisma.ticket_type.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Ticket_typeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeCountArgs} args - Arguments to filter Ticket_types to count.
     * @example
     * // Count the number of Ticket_types
     * const count = await prisma.ticket_type.count({
     *   where: {
     *     // ... the filter for the Ticket_types we want to count
     *   }
     * })
    **/
    count<T extends Ticket_typeCountArgs>(
      args?: Subset<T, Ticket_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ticket_typeAggregateArgs>(args: Subset<T, Ticket_typeAggregateArgs>): Prisma.PrismaPromise<GetTicket_typeAggregateType<T>>

    /**
     * Group by Ticket_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typeGroupByArgs} args - Group by arguments.
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
      T extends Ticket_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ticket_typeGroupByArgs['orderBy'] }
        : { orderBy?: Ticket_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Ticket_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket_type model
   */
  readonly fields: Ticket_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ticket_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Ticket_type$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket_type$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_sessions<T extends Ticket_type$payment_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket_type$payment_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ticket_type model
   */
  interface Ticket_typeFieldRefs {
    readonly id: FieldRef<"Ticket_type", 'String'>
    readonly type: FieldRef<"Ticket_type", 'String'>
    readonly percent: FieldRef<"Ticket_type", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket_type findUnique
   */
  export type Ticket_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_type to fetch.
     */
    where: Ticket_typeWhereUniqueInput
  }

  /**
   * Ticket_type findUniqueOrThrow
   */
  export type Ticket_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_type to fetch.
     */
    where: Ticket_typeWhereUniqueInput
  }

  /**
   * Ticket_type findFirst
   */
  export type Ticket_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_type to fetch.
     */
    where?: Ticket_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typeOrderByWithRelationInput | Ticket_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_types.
     */
    cursor?: Ticket_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_types.
     */
    distinct?: Ticket_typeScalarFieldEnum | Ticket_typeScalarFieldEnum[]
  }

  /**
   * Ticket_type findFirstOrThrow
   */
  export type Ticket_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_type to fetch.
     */
    where?: Ticket_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typeOrderByWithRelationInput | Ticket_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_types.
     */
    cursor?: Ticket_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_types.
     */
    distinct?: Ticket_typeScalarFieldEnum | Ticket_typeScalarFieldEnum[]
  }

  /**
   * Ticket_type findMany
   */
  export type Ticket_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where?: Ticket_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typeOrderByWithRelationInput | Ticket_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ticket_types.
     */
    cursor?: Ticket_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    distinct?: Ticket_typeScalarFieldEnum | Ticket_typeScalarFieldEnum[]
  }

  /**
   * Ticket_type create
   */
  export type Ticket_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket_type.
     */
    data: XOR<Ticket_typeCreateInput, Ticket_typeUncheckedCreateInput>
  }

  /**
   * Ticket_type createMany
   */
  export type Ticket_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ticket_types.
     */
    data: Ticket_typeCreateManyInput | Ticket_typeCreateManyInput[]
  }

  /**
   * Ticket_type update
   */
  export type Ticket_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket_type.
     */
    data: XOR<Ticket_typeUpdateInput, Ticket_typeUncheckedUpdateInput>
    /**
     * Choose, which Ticket_type to update.
     */
    where: Ticket_typeWhereUniqueInput
  }

  /**
   * Ticket_type updateMany
   */
  export type Ticket_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ticket_types.
     */
    data: XOR<Ticket_typeUpdateManyMutationInput, Ticket_typeUncheckedUpdateManyInput>
    /**
     * Filter which Ticket_types to update
     */
    where?: Ticket_typeWhereInput
    /**
     * Limit how many Ticket_types to update.
     */
    limit?: number
  }

  /**
   * Ticket_type upsert
   */
  export type Ticket_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket_type to update in case it exists.
     */
    where: Ticket_typeWhereUniqueInput
    /**
     * In case the Ticket_type found by the `where` argument doesn't exist, create a new Ticket_type with this data.
     */
    create: XOR<Ticket_typeCreateInput, Ticket_typeUncheckedCreateInput>
    /**
     * In case the Ticket_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ticket_typeUpdateInput, Ticket_typeUncheckedUpdateInput>
  }

  /**
   * Ticket_type delete
   */
  export type Ticket_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    /**
     * Filter which Ticket_type to delete.
     */
    where: Ticket_typeWhereUniqueInput
  }

  /**
   * Ticket_type deleteMany
   */
  export type Ticket_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_types to delete
     */
    where?: Ticket_typeWhereInput
    /**
     * Limit how many Ticket_types to delete.
     */
    limit?: number
  }

  /**
   * Ticket_type findRaw
   */
  export type Ticket_typeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket_type aggregateRaw
   */
  export type Ticket_typeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket_type.tickets
   */
  export type Ticket_type$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket_type.payment_sessions
   */
  export type Ticket_type$payment_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    where?: Payment_sessionWhereInput
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    cursor?: Payment_sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * Ticket_type without action
   */
  export type Ticket_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
  }


  /**
   * Model Screening_type
   */

  export type AggregateScreening_type = {
    _count: Screening_typeCountAggregateOutputType | null
    _avg: Screening_typeAvgAggregateOutputType | null
    _sum: Screening_typeSumAggregateOutputType | null
    _min: Screening_typeMinAggregateOutputType | null
    _max: Screening_typeMaxAggregateOutputType | null
  }

  export type Screening_typeAvgAggregateOutputType = {
    percent: number | null
  }

  export type Screening_typeSumAggregateOutputType = {
    percent: number | null
  }

  export type Screening_typeMinAggregateOutputType = {
    id: string | null
    type: string | null
    percent: number | null
  }

  export type Screening_typeMaxAggregateOutputType = {
    id: string | null
    type: string | null
    percent: number | null
  }

  export type Screening_typeCountAggregateOutputType = {
    id: number
    type: number
    percent: number
    _all: number
  }


  export type Screening_typeAvgAggregateInputType = {
    percent?: true
  }

  export type Screening_typeSumAggregateInputType = {
    percent?: true
  }

  export type Screening_typeMinAggregateInputType = {
    id?: true
    type?: true
    percent?: true
  }

  export type Screening_typeMaxAggregateInputType = {
    id?: true
    type?: true
    percent?: true
  }

  export type Screening_typeCountAggregateInputType = {
    id?: true
    type?: true
    percent?: true
    _all?: true
  }

  export type Screening_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screening_type to aggregate.
     */
    where?: Screening_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screening_types to fetch.
     */
    orderBy?: Screening_typeOrderByWithRelationInput | Screening_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Screening_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screening_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screening_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screening_types
    **/
    _count?: true | Screening_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Screening_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Screening_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Screening_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Screening_typeMaxAggregateInputType
  }

  export type GetScreening_typeAggregateType<T extends Screening_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateScreening_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreening_type[P]>
      : GetScalarType<T[P], AggregateScreening_type[P]>
  }




  export type Screening_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Screening_typeWhereInput
    orderBy?: Screening_typeOrderByWithAggregationInput | Screening_typeOrderByWithAggregationInput[]
    by: Screening_typeScalarFieldEnum[] | Screening_typeScalarFieldEnum
    having?: Screening_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Screening_typeCountAggregateInputType | true
    _avg?: Screening_typeAvgAggregateInputType
    _sum?: Screening_typeSumAggregateInputType
    _min?: Screening_typeMinAggregateInputType
    _max?: Screening_typeMaxAggregateInputType
  }

  export type Screening_typeGroupByOutputType = {
    id: string
    type: string
    percent: number
    _count: Screening_typeCountAggregateOutputType | null
    _avg: Screening_typeAvgAggregateOutputType | null
    _sum: Screening_typeSumAggregateOutputType | null
    _min: Screening_typeMinAggregateOutputType | null
    _max: Screening_typeMaxAggregateOutputType | null
  }

  type GetScreening_typeGroupByPayload<T extends Screening_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Screening_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Screening_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Screening_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Screening_typeGroupByOutputType[P]>
        }
      >
    >


  export type Screening_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    percent?: boolean
    tickets?: boolean | Screening_type$ticketsArgs<ExtArgs>
    screenings?: boolean | Screening_type$screeningsArgs<ExtArgs>
    _count?: boolean | Screening_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screening_type"]>



  export type Screening_typeSelectScalar = {
    id?: boolean
    type?: boolean
    percent?: boolean
  }

  export type Screening_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "percent", ExtArgs["result"]["screening_type"]>
  export type Screening_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Screening_type$ticketsArgs<ExtArgs>
    screenings?: boolean | Screening_type$screeningsArgs<ExtArgs>
    _count?: boolean | Screening_typeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Screening_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screening_type"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      screenings: Prisma.$ScreeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      percent: number
    }, ExtArgs["result"]["screening_type"]>
    composites: {}
  }

  type Screening_typeGetPayload<S extends boolean | null | undefined | Screening_typeDefaultArgs> = $Result.GetResult<Prisma.$Screening_typePayload, S>

  type Screening_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Screening_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Screening_typeCountAggregateInputType | true
    }

  export interface Screening_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screening_type'], meta: { name: 'Screening_type' } }
    /**
     * Find zero or one Screening_type that matches the filter.
     * @param {Screening_typeFindUniqueArgs} args - Arguments to find a Screening_type
     * @example
     * // Get one Screening_type
     * const screening_type = await prisma.screening_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Screening_typeFindUniqueArgs>(args: SelectSubset<T, Screening_typeFindUniqueArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screening_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Screening_typeFindUniqueOrThrowArgs} args - Arguments to find a Screening_type
     * @example
     * // Get one Screening_type
     * const screening_type = await prisma.screening_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Screening_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, Screening_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screening_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeFindFirstArgs} args - Arguments to find a Screening_type
     * @example
     * // Get one Screening_type
     * const screening_type = await prisma.screening_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Screening_typeFindFirstArgs>(args?: SelectSubset<T, Screening_typeFindFirstArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screening_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeFindFirstOrThrowArgs} args - Arguments to find a Screening_type
     * @example
     * // Get one Screening_type
     * const screening_type = await prisma.screening_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Screening_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, Screening_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screening_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screening_types
     * const screening_types = await prisma.screening_type.findMany()
     * 
     * // Get first 10 Screening_types
     * const screening_types = await prisma.screening_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screening_typeWithIdOnly = await prisma.screening_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Screening_typeFindManyArgs>(args?: SelectSubset<T, Screening_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screening_type.
     * @param {Screening_typeCreateArgs} args - Arguments to create a Screening_type.
     * @example
     * // Create one Screening_type
     * const Screening_type = await prisma.screening_type.create({
     *   data: {
     *     // ... data to create a Screening_type
     *   }
     * })
     * 
     */
    create<T extends Screening_typeCreateArgs>(args: SelectSubset<T, Screening_typeCreateArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screening_types.
     * @param {Screening_typeCreateManyArgs} args - Arguments to create many Screening_types.
     * @example
     * // Create many Screening_types
     * const screening_type = await prisma.screening_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Screening_typeCreateManyArgs>(args?: SelectSubset<T, Screening_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Screening_type.
     * @param {Screening_typeDeleteArgs} args - Arguments to delete one Screening_type.
     * @example
     * // Delete one Screening_type
     * const Screening_type = await prisma.screening_type.delete({
     *   where: {
     *     // ... filter to delete one Screening_type
     *   }
     * })
     * 
     */
    delete<T extends Screening_typeDeleteArgs>(args: SelectSubset<T, Screening_typeDeleteArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screening_type.
     * @param {Screening_typeUpdateArgs} args - Arguments to update one Screening_type.
     * @example
     * // Update one Screening_type
     * const screening_type = await prisma.screening_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Screening_typeUpdateArgs>(args: SelectSubset<T, Screening_typeUpdateArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screening_types.
     * @param {Screening_typeDeleteManyArgs} args - Arguments to filter Screening_types to delete.
     * @example
     * // Delete a few Screening_types
     * const { count } = await prisma.screening_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Screening_typeDeleteManyArgs>(args?: SelectSubset<T, Screening_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screening_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screening_types
     * const screening_type = await prisma.screening_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Screening_typeUpdateManyArgs>(args: SelectSubset<T, Screening_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Screening_type.
     * @param {Screening_typeUpsertArgs} args - Arguments to update or create a Screening_type.
     * @example
     * // Update or create a Screening_type
     * const screening_type = await prisma.screening_type.upsert({
     *   create: {
     *     // ... data to create a Screening_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screening_type we want to update
     *   }
     * })
     */
    upsert<T extends Screening_typeUpsertArgs>(args: SelectSubset<T, Screening_typeUpsertArgs<ExtArgs>>): Prisma__Screening_typeClient<$Result.GetResult<Prisma.$Screening_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screening_types that matches the filter.
     * @param {Screening_typeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const screening_type = await prisma.screening_type.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Screening_typeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Screening_type.
     * @param {Screening_typeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const screening_type = await prisma.screening_type.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Screening_typeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Screening_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeCountArgs} args - Arguments to filter Screening_types to count.
     * @example
     * // Count the number of Screening_types
     * const count = await prisma.screening_type.count({
     *   where: {
     *     // ... the filter for the Screening_types we want to count
     *   }
     * })
    **/
    count<T extends Screening_typeCountArgs>(
      args?: Subset<T, Screening_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Screening_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screening_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Screening_typeAggregateArgs>(args: Subset<T, Screening_typeAggregateArgs>): Prisma.PrismaPromise<GetScreening_typeAggregateType<T>>

    /**
     * Group by Screening_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Screening_typeGroupByArgs} args - Group by arguments.
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
      T extends Screening_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Screening_typeGroupByArgs['orderBy'] }
        : { orderBy?: Screening_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Screening_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreening_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screening_type model
   */
  readonly fields: Screening_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screening_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Screening_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Screening_type$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Screening_type$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    screenings<T extends Screening_type$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Screening_type$screeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Screening_type model
   */
  interface Screening_typeFieldRefs {
    readonly id: FieldRef<"Screening_type", 'String'>
    readonly type: FieldRef<"Screening_type", 'String'>
    readonly percent: FieldRef<"Screening_type", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Screening_type findUnique
   */
  export type Screening_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter, which Screening_type to fetch.
     */
    where: Screening_typeWhereUniqueInput
  }

  /**
   * Screening_type findUniqueOrThrow
   */
  export type Screening_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter, which Screening_type to fetch.
     */
    where: Screening_typeWhereUniqueInput
  }

  /**
   * Screening_type findFirst
   */
  export type Screening_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter, which Screening_type to fetch.
     */
    where?: Screening_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screening_types to fetch.
     */
    orderBy?: Screening_typeOrderByWithRelationInput | Screening_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screening_types.
     */
    cursor?: Screening_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screening_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screening_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screening_types.
     */
    distinct?: Screening_typeScalarFieldEnum | Screening_typeScalarFieldEnum[]
  }

  /**
   * Screening_type findFirstOrThrow
   */
  export type Screening_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter, which Screening_type to fetch.
     */
    where?: Screening_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screening_types to fetch.
     */
    orderBy?: Screening_typeOrderByWithRelationInput | Screening_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screening_types.
     */
    cursor?: Screening_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screening_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screening_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screening_types.
     */
    distinct?: Screening_typeScalarFieldEnum | Screening_typeScalarFieldEnum[]
  }

  /**
   * Screening_type findMany
   */
  export type Screening_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter, which Screening_types to fetch.
     */
    where?: Screening_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screening_types to fetch.
     */
    orderBy?: Screening_typeOrderByWithRelationInput | Screening_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screening_types.
     */
    cursor?: Screening_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screening_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screening_types.
     */
    skip?: number
    distinct?: Screening_typeScalarFieldEnum | Screening_typeScalarFieldEnum[]
  }

  /**
   * Screening_type create
   */
  export type Screening_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a Screening_type.
     */
    data: XOR<Screening_typeCreateInput, Screening_typeUncheckedCreateInput>
  }

  /**
   * Screening_type createMany
   */
  export type Screening_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screening_types.
     */
    data: Screening_typeCreateManyInput | Screening_typeCreateManyInput[]
  }

  /**
   * Screening_type update
   */
  export type Screening_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a Screening_type.
     */
    data: XOR<Screening_typeUpdateInput, Screening_typeUncheckedUpdateInput>
    /**
     * Choose, which Screening_type to update.
     */
    where: Screening_typeWhereUniqueInput
  }

  /**
   * Screening_type updateMany
   */
  export type Screening_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screening_types.
     */
    data: XOR<Screening_typeUpdateManyMutationInput, Screening_typeUncheckedUpdateManyInput>
    /**
     * Filter which Screening_types to update
     */
    where?: Screening_typeWhereInput
    /**
     * Limit how many Screening_types to update.
     */
    limit?: number
  }

  /**
   * Screening_type upsert
   */
  export type Screening_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the Screening_type to update in case it exists.
     */
    where: Screening_typeWhereUniqueInput
    /**
     * In case the Screening_type found by the `where` argument doesn't exist, create a new Screening_type with this data.
     */
    create: XOR<Screening_typeCreateInput, Screening_typeUncheckedCreateInput>
    /**
     * In case the Screening_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Screening_typeUpdateInput, Screening_typeUncheckedUpdateInput>
  }

  /**
   * Screening_type delete
   */
  export type Screening_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
    /**
     * Filter which Screening_type to delete.
     */
    where: Screening_typeWhereUniqueInput
  }

  /**
   * Screening_type deleteMany
   */
  export type Screening_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screening_types to delete
     */
    where?: Screening_typeWhereInput
    /**
     * Limit how many Screening_types to delete.
     */
    limit?: number
  }

  /**
   * Screening_type findRaw
   */
  export type Screening_typeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Screening_type aggregateRaw
   */
  export type Screening_typeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Screening_type.tickets
   */
  export type Screening_type$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Screening_type.screenings
   */
  export type Screening_type$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening
     */
    omit?: ScreeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    cursor?: ScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }

  /**
   * Screening_type without action
   */
  export type Screening_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening_type
     */
    select?: Screening_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screening_type
     */
    omit?: Screening_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Screening_typeInclude<ExtArgs> | null
  }


  /**
   * Model Payment_session
   */

  export type AggregatePayment_session = {
    _count: Payment_sessionCountAggregateOutputType | null
    _min: Payment_sessionMinAggregateOutputType | null
    _max: Payment_sessionMaxAggregateOutputType | null
  }

  export type Payment_sessionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    screening_id: string | null
    status: string | null
    createdAt: Date | null
    ticket_type_id: string | null
  }

  export type Payment_sessionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    screening_id: string | null
    status: string | null
    createdAt: Date | null
    ticket_type_id: string | null
  }

  export type Payment_sessionCountAggregateOutputType = {
    id: number
    user_id: number
    screening_id: number
    chair_ids: number
    status: number
    createdAt: number
    ticket_type_id: number
    _all: number
  }


  export type Payment_sessionMinAggregateInputType = {
    id?: true
    user_id?: true
    screening_id?: true
    status?: true
    createdAt?: true
    ticket_type_id?: true
  }

  export type Payment_sessionMaxAggregateInputType = {
    id?: true
    user_id?: true
    screening_id?: true
    status?: true
    createdAt?: true
    ticket_type_id?: true
  }

  export type Payment_sessionCountAggregateInputType = {
    id?: true
    user_id?: true
    screening_id?: true
    chair_ids?: true
    status?: true
    createdAt?: true
    ticket_type_id?: true
    _all?: true
  }

  export type Payment_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment_session to aggregate.
     */
    where?: Payment_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_sessions to fetch.
     */
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Payment_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payment_sessions
    **/
    _count?: true | Payment_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_sessionMaxAggregateInputType
  }

  export type GetPayment_sessionAggregateType<T extends Payment_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_session[P]>
      : GetScalarType<T[P], AggregatePayment_session[P]>
  }




  export type Payment_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Payment_sessionWhereInput
    orderBy?: Payment_sessionOrderByWithAggregationInput | Payment_sessionOrderByWithAggregationInput[]
    by: Payment_sessionScalarFieldEnum[] | Payment_sessionScalarFieldEnum
    having?: Payment_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_sessionCountAggregateInputType | true
    _min?: Payment_sessionMinAggregateInputType
    _max?: Payment_sessionMaxAggregateInputType
  }

  export type Payment_sessionGroupByOutputType = {
    id: string
    user_id: string
    screening_id: string
    chair_ids: JsonValue
    status: string
    createdAt: Date
    ticket_type_id: string | null
    _count: Payment_sessionCountAggregateOutputType | null
    _min: Payment_sessionMinAggregateOutputType | null
    _max: Payment_sessionMaxAggregateOutputType | null
  }

  type GetPayment_sessionGroupByPayload<T extends Payment_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_sessionGroupByOutputType[P]>
        }
      >
    >


  export type Payment_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    screening_id?: boolean
    chair_ids?: boolean
    status?: boolean
    createdAt?: boolean
    ticket_type_id?: boolean
    ticket_types?: boolean | Payment_session$ticket_typesArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    screenings?: boolean | ScreeningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_session"]>



  export type Payment_sessionSelectScalar = {
    id?: boolean
    user_id?: boolean
    screening_id?: boolean
    chair_ids?: boolean
    status?: boolean
    createdAt?: boolean
    ticket_type_id?: boolean
  }

  export type Payment_sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "screening_id" | "chair_ids" | "status" | "createdAt" | "ticket_type_id", ExtArgs["result"]["payment_session"]>
  export type Payment_sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_types?: boolean | Payment_session$ticket_typesArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    screenings?: boolean | ScreeningDefaultArgs<ExtArgs>
  }

  export type $Payment_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment_session"
    objects: {
      ticket_types: Prisma.$Ticket_typePayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>
      screenings: Prisma.$ScreeningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      screening_id: string
      chair_ids: Prisma.JsonValue
      status: string
      createdAt: Date
      ticket_type_id: string | null
    }, ExtArgs["result"]["payment_session"]>
    composites: {}
  }

  type Payment_sessionGetPayload<S extends boolean | null | undefined | Payment_sessionDefaultArgs> = $Result.GetResult<Prisma.$Payment_sessionPayload, S>

  type Payment_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Payment_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_sessionCountAggregateInputType | true
    }

  export interface Payment_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment_session'], meta: { name: 'Payment_session' } }
    /**
     * Find zero or one Payment_session that matches the filter.
     * @param {Payment_sessionFindUniqueArgs} args - Arguments to find a Payment_session
     * @example
     * // Get one Payment_session
     * const payment_session = await prisma.payment_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Payment_sessionFindUniqueArgs>(args: SelectSubset<T, Payment_sessionFindUniqueArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Payment_sessionFindUniqueOrThrowArgs} args - Arguments to find a Payment_session
     * @example
     * // Get one Payment_session
     * const payment_session = await prisma.payment_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Payment_sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, Payment_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionFindFirstArgs} args - Arguments to find a Payment_session
     * @example
     * // Get one Payment_session
     * const payment_session = await prisma.payment_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Payment_sessionFindFirstArgs>(args?: SelectSubset<T, Payment_sessionFindFirstArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionFindFirstOrThrowArgs} args - Arguments to find a Payment_session
     * @example
     * // Get one Payment_session
     * const payment_session = await prisma.payment_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Payment_sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, Payment_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_sessions
     * const payment_sessions = await prisma.payment_session.findMany()
     * 
     * // Get first 10 Payment_sessions
     * const payment_sessions = await prisma.payment_session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_sessionWithIdOnly = await prisma.payment_session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Payment_sessionFindManyArgs>(args?: SelectSubset<T, Payment_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_session.
     * @param {Payment_sessionCreateArgs} args - Arguments to create a Payment_session.
     * @example
     * // Create one Payment_session
     * const Payment_session = await prisma.payment_session.create({
     *   data: {
     *     // ... data to create a Payment_session
     *   }
     * })
     * 
     */
    create<T extends Payment_sessionCreateArgs>(args: SelectSubset<T, Payment_sessionCreateArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_sessions.
     * @param {Payment_sessionCreateManyArgs} args - Arguments to create many Payment_sessions.
     * @example
     * // Create many Payment_sessions
     * const payment_session = await prisma.payment_session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Payment_sessionCreateManyArgs>(args?: SelectSubset<T, Payment_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_session.
     * @param {Payment_sessionDeleteArgs} args - Arguments to delete one Payment_session.
     * @example
     * // Delete one Payment_session
     * const Payment_session = await prisma.payment_session.delete({
     *   where: {
     *     // ... filter to delete one Payment_session
     *   }
     * })
     * 
     */
    delete<T extends Payment_sessionDeleteArgs>(args: SelectSubset<T, Payment_sessionDeleteArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_session.
     * @param {Payment_sessionUpdateArgs} args - Arguments to update one Payment_session.
     * @example
     * // Update one Payment_session
     * const payment_session = await prisma.payment_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Payment_sessionUpdateArgs>(args: SelectSubset<T, Payment_sessionUpdateArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_sessions.
     * @param {Payment_sessionDeleteManyArgs} args - Arguments to filter Payment_sessions to delete.
     * @example
     * // Delete a few Payment_sessions
     * const { count } = await prisma.payment_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Payment_sessionDeleteManyArgs>(args?: SelectSubset<T, Payment_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_sessions
     * const payment_session = await prisma.payment_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Payment_sessionUpdateManyArgs>(args: SelectSubset<T, Payment_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_session.
     * @param {Payment_sessionUpsertArgs} args - Arguments to update or create a Payment_session.
     * @example
     * // Update or create a Payment_session
     * const payment_session = await prisma.payment_session.upsert({
     *   create: {
     *     // ... data to create a Payment_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_session we want to update
     *   }
     * })
     */
    upsert<T extends Payment_sessionUpsertArgs>(args: SelectSubset<T, Payment_sessionUpsertArgs<ExtArgs>>): Prisma__Payment_sessionClient<$Result.GetResult<Prisma.$Payment_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_sessions that matches the filter.
     * @param {Payment_sessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment_session = await prisma.payment_session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Payment_sessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment_session.
     * @param {Payment_sessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment_session = await prisma.payment_session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Payment_sessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payment_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionCountArgs} args - Arguments to filter Payment_sessions to count.
     * @example
     * // Count the number of Payment_sessions
     * const count = await prisma.payment_session.count({
     *   where: {
     *     // ... the filter for the Payment_sessions we want to count
     *   }
     * })
    **/
    count<T extends Payment_sessionCountArgs>(
      args?: Subset<T, Payment_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_sessionAggregateArgs>(args: Subset<T, Payment_sessionAggregateArgs>): Prisma.PrismaPromise<GetPayment_sessionAggregateType<T>>

    /**
     * Group by Payment_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_sessionGroupByArgs} args - Group by arguments.
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
      T extends Payment_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Payment_sessionGroupByArgs['orderBy'] }
        : { orderBy?: Payment_sessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Payment_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment_session model
   */
  readonly fields: Payment_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Payment_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_types<T extends Payment_session$ticket_typesArgs<ExtArgs> = {}>(args?: Subset<T, Payment_session$ticket_typesArgs<ExtArgs>>): Prisma__Ticket_typeClient<$Result.GetResult<Prisma.$Ticket_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    screenings<T extends ScreeningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreeningDefaultArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment_session model
   */
  interface Payment_sessionFieldRefs {
    readonly id: FieldRef<"Payment_session", 'String'>
    readonly user_id: FieldRef<"Payment_session", 'String'>
    readonly screening_id: FieldRef<"Payment_session", 'String'>
    readonly chair_ids: FieldRef<"Payment_session", 'Json'>
    readonly status: FieldRef<"Payment_session", 'String'>
    readonly createdAt: FieldRef<"Payment_session", 'DateTime'>
    readonly ticket_type_id: FieldRef<"Payment_session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment_session findUnique
   */
  export type Payment_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter, which Payment_session to fetch.
     */
    where: Payment_sessionWhereUniqueInput
  }

  /**
   * Payment_session findUniqueOrThrow
   */
  export type Payment_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter, which Payment_session to fetch.
     */
    where: Payment_sessionWhereUniqueInput
  }

  /**
   * Payment_session findFirst
   */
  export type Payment_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter, which Payment_session to fetch.
     */
    where?: Payment_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_sessions to fetch.
     */
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payment_sessions.
     */
    cursor?: Payment_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payment_sessions.
     */
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * Payment_session findFirstOrThrow
   */
  export type Payment_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter, which Payment_session to fetch.
     */
    where?: Payment_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_sessions to fetch.
     */
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payment_sessions.
     */
    cursor?: Payment_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payment_sessions.
     */
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * Payment_session findMany
   */
  export type Payment_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter, which Payment_sessions to fetch.
     */
    where?: Payment_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payment_sessions to fetch.
     */
    orderBy?: Payment_sessionOrderByWithRelationInput | Payment_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payment_sessions.
     */
    cursor?: Payment_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payment_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payment_sessions.
     */
    skip?: number
    distinct?: Payment_sessionScalarFieldEnum | Payment_sessionScalarFieldEnum[]
  }

  /**
   * Payment_session create
   */
  export type Payment_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment_session.
     */
    data: XOR<Payment_sessionCreateInput, Payment_sessionUncheckedCreateInput>
  }

  /**
   * Payment_session createMany
   */
  export type Payment_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payment_sessions.
     */
    data: Payment_sessionCreateManyInput | Payment_sessionCreateManyInput[]
  }

  /**
   * Payment_session update
   */
  export type Payment_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment_session.
     */
    data: XOR<Payment_sessionUpdateInput, Payment_sessionUncheckedUpdateInput>
    /**
     * Choose, which Payment_session to update.
     */
    where: Payment_sessionWhereUniqueInput
  }

  /**
   * Payment_session updateMany
   */
  export type Payment_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payment_sessions.
     */
    data: XOR<Payment_sessionUpdateManyMutationInput, Payment_sessionUncheckedUpdateManyInput>
    /**
     * Filter which Payment_sessions to update
     */
    where?: Payment_sessionWhereInput
    /**
     * Limit how many Payment_sessions to update.
     */
    limit?: number
  }

  /**
   * Payment_session upsert
   */
  export type Payment_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment_session to update in case it exists.
     */
    where: Payment_sessionWhereUniqueInput
    /**
     * In case the Payment_session found by the `where` argument doesn't exist, create a new Payment_session with this data.
     */
    create: XOR<Payment_sessionCreateInput, Payment_sessionUncheckedCreateInput>
    /**
     * In case the Payment_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Payment_sessionUpdateInput, Payment_sessionUncheckedUpdateInput>
  }

  /**
   * Payment_session delete
   */
  export type Payment_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
    /**
     * Filter which Payment_session to delete.
     */
    where: Payment_sessionWhereUniqueInput
  }

  /**
   * Payment_session deleteMany
   */
  export type Payment_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment_sessions to delete
     */
    where?: Payment_sessionWhereInput
    /**
     * Limit how many Payment_sessions to delete.
     */
    limit?: number
  }

  /**
   * Payment_session findRaw
   */
  export type Payment_sessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Payment_session aggregateRaw
   */
  export type Payment_sessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Payment_session.ticket_types
   */
  export type Payment_session$ticket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_type
     */
    select?: Ticket_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_type
     */
    omit?: Ticket_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typeInclude<ExtArgs> | null
    where?: Ticket_typeWhereInput
  }

  /**
   * Payment_session without action
   */
  export type Payment_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_session
     */
    select?: Payment_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment_session
     */
    omit?: Payment_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Payment_sessionInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    discount_id: string | null
    qr_token: string | null
    used: boolean | null
    created_at: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    discount_id: string | null
    qr_token: string | null
    used: boolean | null
    created_at: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    user_id: number
    discount_id: number
    qr_token: number
    used: number
    created_at: number
    _all: number
  }


  export type CouponMinAggregateInputType = {
    id?: true
    user_id?: true
    discount_id?: true
    qr_token?: true
    used?: true
    created_at?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    user_id?: true
    discount_id?: true
    qr_token?: true
    used?: true
    created_at?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    user_id?: true
    discount_id?: true
    qr_token?: true
    used?: true
    created_at?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    user_id: string
    discount_id: string
    qr_token: string
    used: boolean
    created_at: Date
    _count: CouponCountAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    discount_id?: boolean
    qr_token?: boolean
    used?: boolean
    created_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
    discounts?: boolean | DiscountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    user_id?: boolean
    discount_id?: boolean
    qr_token?: boolean
    used?: boolean
    created_at?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "discount_id" | "qr_token" | "used" | "created_at", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
    discounts?: boolean | DiscountDefaultArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>
      discounts: Prisma.$DiscountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      discount_id: string
      qr_token: string
      used: boolean
      created_at: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * @param {CouponFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const coupon = await prisma.coupon.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CouponFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Coupon.
     * @param {CouponAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const coupon = await prisma.coupon.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CouponAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discounts<T extends DiscountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscountDefaultArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly user_id: FieldRef<"Coupon", 'String'>
    readonly discount_id: FieldRef<"Coupon", 'String'>
    readonly qr_token: FieldRef<"Coupon", 'String'>
    readonly used: FieldRef<"Coupon", 'Boolean'>
    readonly created_at: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon findRaw
   */
  export type CouponFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Coupon aggregateRaw
   */
  export type CouponAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password_hash: 'password_hash'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    director: 'director',
    actors: 'actors',
    playtime: 'playtime',
    language: 'language',
    trailer: 'trailer',
    poster: 'poster',
    backdrop: 'backdrop',
    onscreen: 'onscreen',
    genre: 'genre',
    review: 'review',
    description: 'description'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const ScreeningScalarFieldEnum: {
    id: 'id',
    hall_id: 'hall_id',
    movie_id: 'movie_id',
    start: 'start',
    end: 'end',
    screening_type_id: 'screening_type_id'
  };

  export type ScreeningScalarFieldEnum = (typeof ScreeningScalarFieldEnum)[keyof typeof ScreeningScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    points: 'points',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    gender: 'gender',
    email_verified: 'email_verified',
    email_code: 'email_code',
    email_code_exp: 'email_code_exp',
    password_reset_token: 'password_reset_token',
    password_reset_exp: 'password_reset_exp',
    rank_id: 'rank_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChairScalarFieldEnum: {
    id: 'id',
    row: 'row',
    column: 'column',
    hall_id: 'hall_id'
  };

  export type ChairScalarFieldEnum = (typeof ChairScalarFieldEnum)[keyof typeof ChairScalarFieldEnum]


  export const RankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    point_limit: 'point_limit',
    image: 'image',
    discount_id: 'discount_id'
  };

  export type RankScalarFieldEnum = (typeof RankScalarFieldEnum)[keyof typeof RankScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    percent: 'percent'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const HallScalarFieldEnum: {
    id: 'id',
    name: 'name',
    row: 'row',
    column: 'column'
  };

  export type HallScalarFieldEnum = (typeof HallScalarFieldEnum)[keyof typeof HallScalarFieldEnum]


  export const ForumScalarFieldEnum: {
    id: 'id',
    review: 'review',
    comment: 'comment',
    user_id: 'user_id',
    movie_id: 'movie_id'
  };

  export type ForumScalarFieldEnum = (typeof ForumScalarFieldEnum)[keyof typeof ForumScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    ticket_type_id: 'ticket_type_id',
    user_id: 'user_id',
    screening_type_id: 'screening_type_id',
    screening_id: 'screening_id',
    chair_id: 'chair_id',
    price: 'price',
    qr_token: 'qr_token',
    used_at: 'used_at'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const Ticket_typeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    percent: 'percent'
  };

  export type Ticket_typeScalarFieldEnum = (typeof Ticket_typeScalarFieldEnum)[keyof typeof Ticket_typeScalarFieldEnum]


  export const Screening_typeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    percent: 'percent'
  };

  export type Screening_typeScalarFieldEnum = (typeof Screening_typeScalarFieldEnum)[keyof typeof Screening_typeScalarFieldEnum]


  export const Payment_sessionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    screening_id: 'screening_id',
    chair_ids: 'chair_ids',
    status: 'status',
    createdAt: 'createdAt',
    ticket_type_id: 'ticket_type_id'
  };

  export type Payment_sessionScalarFieldEnum = (typeof Payment_sessionScalarFieldEnum)[keyof typeof Payment_sessionScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    discount_id: 'discount_id',
    qr_token: 'qr_token',
    used: 'used',
    created_at: 'created_at'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    password_hash?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password_hash?: StringFilter<"Admin"> | string
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    password_hash?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    director?: StringFilter<"Movie"> | string
    actors?: StringFilter<"Movie"> | string
    playtime?: IntFilter<"Movie"> | number
    language?: StringFilter<"Movie"> | string
    trailer?: StringFilter<"Movie"> | string
    poster?: StringFilter<"Movie"> | string
    backdrop?: StringNullableFilter<"Movie"> | string | null
    onscreen?: BoolFilter<"Movie"> | boolean
    genre?: StringFilter<"Movie"> | string
    review?: FloatNullableFilter<"Movie"> | number | null
    description?: StringNullableFilter<"Movie"> | string | null
    screenings?: ScreeningListRelationFilter
    forum?: ForumListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    playtime?: SortOrder
    language?: SortOrder
    trailer?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    onscreen?: SortOrder
    genre?: SortOrder
    review?: SortOrder
    description?: SortOrder
    screenings?: ScreeningOrderByRelationAggregateInput
    forum?: ForumOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    director?: StringFilter<"Movie"> | string
    actors?: StringFilter<"Movie"> | string
    playtime?: IntFilter<"Movie"> | number
    language?: StringFilter<"Movie"> | string
    trailer?: StringFilter<"Movie"> | string
    poster?: StringFilter<"Movie"> | string
    backdrop?: StringNullableFilter<"Movie"> | string | null
    onscreen?: BoolFilter<"Movie"> | boolean
    genre?: StringFilter<"Movie"> | string
    review?: FloatNullableFilter<"Movie"> | number | null
    description?: StringNullableFilter<"Movie"> | string | null
    screenings?: ScreeningListRelationFilter
    forum?: ForumListRelationFilter
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    playtime?: SortOrder
    language?: SortOrder
    trailer?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    onscreen?: SortOrder
    genre?: SortOrder
    review?: SortOrder
    description?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
    director?: StringWithAggregatesFilter<"Movie"> | string
    actors?: StringWithAggregatesFilter<"Movie"> | string
    playtime?: IntWithAggregatesFilter<"Movie"> | number
    language?: StringWithAggregatesFilter<"Movie"> | string
    trailer?: StringWithAggregatesFilter<"Movie"> | string
    poster?: StringWithAggregatesFilter<"Movie"> | string
    backdrop?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    onscreen?: BoolWithAggregatesFilter<"Movie"> | boolean
    genre?: StringWithAggregatesFilter<"Movie"> | string
    review?: FloatNullableWithAggregatesFilter<"Movie"> | number | null
    description?: StringNullableWithAggregatesFilter<"Movie"> | string | null
  }

  export type ScreeningWhereInput = {
    AND?: ScreeningWhereInput | ScreeningWhereInput[]
    OR?: ScreeningWhereInput[]
    NOT?: ScreeningWhereInput | ScreeningWhereInput[]
    id?: StringFilter<"Screening"> | string
    hall_id?: StringFilter<"Screening"> | string
    movie_id?: StringFilter<"Screening"> | string
    start?: DateTimeFilter<"Screening"> | Date | string
    end?: DateTimeFilter<"Screening"> | Date | string
    screening_type_id?: StringFilter<"Screening"> | string
    payment_sessions?: Payment_sessionListRelationFilter
    tickets?: TicketListRelationFilter
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
    halls?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
    screening_types?: XOR<Screening_typeNullableScalarRelationFilter, Screening_typeWhereInput> | null
  }

  export type ScreeningOrderByWithRelationInput = {
    id?: SortOrder
    hall_id?: SortOrder
    movie_id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    screening_type_id?: SortOrder
    payment_sessions?: Payment_sessionOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    movies?: MovieOrderByWithRelationInput
    halls?: HallOrderByWithRelationInput
    screening_types?: Screening_typeOrderByWithRelationInput
  }

  export type ScreeningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreeningWhereInput | ScreeningWhereInput[]
    OR?: ScreeningWhereInput[]
    NOT?: ScreeningWhereInput | ScreeningWhereInput[]
    hall_id?: StringFilter<"Screening"> | string
    movie_id?: StringFilter<"Screening"> | string
    start?: DateTimeFilter<"Screening"> | Date | string
    end?: DateTimeFilter<"Screening"> | Date | string
    screening_type_id?: StringFilter<"Screening"> | string
    payment_sessions?: Payment_sessionListRelationFilter
    tickets?: TicketListRelationFilter
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
    halls?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
    screening_types?: XOR<Screening_typeNullableScalarRelationFilter, Screening_typeWhereInput> | null
  }, "id">

  export type ScreeningOrderByWithAggregationInput = {
    id?: SortOrder
    hall_id?: SortOrder
    movie_id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    screening_type_id?: SortOrder
    _count?: ScreeningCountOrderByAggregateInput
    _max?: ScreeningMaxOrderByAggregateInput
    _min?: ScreeningMinOrderByAggregateInput
  }

  export type ScreeningScalarWhereWithAggregatesInput = {
    AND?: ScreeningScalarWhereWithAggregatesInput | ScreeningScalarWhereWithAggregatesInput[]
    OR?: ScreeningScalarWhereWithAggregatesInput[]
    NOT?: ScreeningScalarWhereWithAggregatesInput | ScreeningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Screening"> | string
    hall_id?: StringWithAggregatesFilter<"Screening"> | string
    movie_id?: StringWithAggregatesFilter<"Screening"> | string
    start?: DateTimeWithAggregatesFilter<"Screening"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Screening"> | Date | string
    screening_type_id?: StringWithAggregatesFilter<"Screening"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    phone_number?: StringFilter<"User"> | string
    profile_image?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    email_verified?: BoolFilter<"User"> | boolean
    email_code?: StringNullableFilter<"User"> | string | null
    email_code_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    password_reset_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    rank_id?: StringFilter<"User"> | string
    ranks?: XOR<RankNullableScalarRelationFilter, RankWhereInput> | null
    tickets?: TicketListRelationFilter
    forum?: ForumListRelationFilter
    payment_sessions?: Payment_sessionListRelationFilter
    coupons?: CouponListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    points?: SortOrder
    phone_number?: SortOrder
    profile_image?: SortOrder
    gender?: SortOrder
    email_verified?: SortOrder
    email_code?: SortOrder
    email_code_exp?: SortOrder
    password_reset_token?: SortOrder
    password_reset_exp?: SortOrder
    rank_id?: SortOrder
    ranks?: RankOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    forum?: ForumOrderByRelationAggregateInput
    payment_sessions?: Payment_sessionOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    profile_image?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    email_verified?: BoolFilter<"User"> | boolean
    email_code?: StringNullableFilter<"User"> | string | null
    email_code_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    password_reset_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    rank_id?: StringFilter<"User"> | string
    ranks?: XOR<RankNullableScalarRelationFilter, RankWhereInput> | null
    tickets?: TicketListRelationFilter
    forum?: ForumListRelationFilter
    payment_sessions?: Payment_sessionListRelationFilter
    coupons?: CouponListRelationFilter
  }, "id" | "email" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    points?: SortOrder
    phone_number?: SortOrder
    profile_image?: SortOrder
    gender?: SortOrder
    email_verified?: SortOrder
    email_code?: SortOrder
    email_code_exp?: SortOrder
    password_reset_token?: SortOrder
    password_reset_exp?: SortOrder
    rank_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    points?: IntWithAggregatesFilter<"User"> | number
    phone_number?: StringWithAggregatesFilter<"User"> | string
    profile_image?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    email_verified?: BoolWithAggregatesFilter<"User"> | boolean
    email_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    email_code_exp?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_reset_exp?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    rank_id?: StringWithAggregatesFilter<"User"> | string
  }

  export type ChairWhereInput = {
    AND?: ChairWhereInput | ChairWhereInput[]
    OR?: ChairWhereInput[]
    NOT?: ChairWhereInput | ChairWhereInput[]
    id?: StringFilter<"Chair"> | string
    row?: IntFilter<"Chair"> | number
    column?: IntFilter<"Chair"> | number
    hall_id?: StringFilter<"Chair"> | string
    tickets?: TicketListRelationFilter
    halls?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
  }

  export type ChairOrderByWithRelationInput = {
    id?: SortOrder
    row?: SortOrder
    column?: SortOrder
    hall_id?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    halls?: HallOrderByWithRelationInput
  }

  export type ChairWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChairWhereInput | ChairWhereInput[]
    OR?: ChairWhereInput[]
    NOT?: ChairWhereInput | ChairWhereInput[]
    row?: IntFilter<"Chair"> | number
    column?: IntFilter<"Chair"> | number
    hall_id?: StringFilter<"Chair"> | string
    tickets?: TicketListRelationFilter
    halls?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
  }, "id">

  export type ChairOrderByWithAggregationInput = {
    id?: SortOrder
    row?: SortOrder
    column?: SortOrder
    hall_id?: SortOrder
    _count?: ChairCountOrderByAggregateInput
    _avg?: ChairAvgOrderByAggregateInput
    _max?: ChairMaxOrderByAggregateInput
    _min?: ChairMinOrderByAggregateInput
    _sum?: ChairSumOrderByAggregateInput
  }

  export type ChairScalarWhereWithAggregatesInput = {
    AND?: ChairScalarWhereWithAggregatesInput | ChairScalarWhereWithAggregatesInput[]
    OR?: ChairScalarWhereWithAggregatesInput[]
    NOT?: ChairScalarWhereWithAggregatesInput | ChairScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chair"> | string
    row?: IntWithAggregatesFilter<"Chair"> | number
    column?: IntWithAggregatesFilter<"Chair"> | number
    hall_id?: StringWithAggregatesFilter<"Chair"> | string
  }

  export type RankWhereInput = {
    AND?: RankWhereInput | RankWhereInput[]
    OR?: RankWhereInput[]
    NOT?: RankWhereInput | RankWhereInput[]
    id?: StringFilter<"Rank"> | string
    name?: StringFilter<"Rank"> | string
    point_limit?: IntFilter<"Rank"> | number
    image?: StringFilter<"Rank"> | string
    discount_id?: StringNullableFilter<"Rank"> | string | null
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    users?: UserListRelationFilter
  }

  export type RankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    point_limit?: SortOrder
    image?: SortOrder
    discount_id?: SortOrder
    discount?: DiscountOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RankWhereInput | RankWhereInput[]
    OR?: RankWhereInput[]
    NOT?: RankWhereInput | RankWhereInput[]
    point_limit?: IntFilter<"Rank"> | number
    image?: StringFilter<"Rank"> | string
    discount_id?: StringNullableFilter<"Rank"> | string | null
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    point_limit?: SortOrder
    image?: SortOrder
    discount_id?: SortOrder
    _count?: RankCountOrderByAggregateInput
    _avg?: RankAvgOrderByAggregateInput
    _max?: RankMaxOrderByAggregateInput
    _min?: RankMinOrderByAggregateInput
    _sum?: RankSumOrderByAggregateInput
  }

  export type RankScalarWhereWithAggregatesInput = {
    AND?: RankScalarWhereWithAggregatesInput | RankScalarWhereWithAggregatesInput[]
    OR?: RankScalarWhereWithAggregatesInput[]
    NOT?: RankScalarWhereWithAggregatesInput | RankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rank"> | string
    name?: StringWithAggregatesFilter<"Rank"> | string
    point_limit?: IntWithAggregatesFilter<"Rank"> | number
    image?: StringWithAggregatesFilter<"Rank"> | string
    discount_id?: StringNullableWithAggregatesFilter<"Rank"> | string | null
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: StringFilter<"Discount"> | string
    name?: StringFilter<"Discount"> | string
    image?: StringFilter<"Discount"> | string
    percent?: IntFilter<"Discount"> | number
    ranks?: RankListRelationFilter
    coupons?: CouponListRelationFilter
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    percent?: SortOrder
    ranks?: RankOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    name?: StringFilter<"Discount"> | string
    image?: StringFilter<"Discount"> | string
    percent?: IntFilter<"Discount"> | number
    ranks?: RankListRelationFilter
    coupons?: CouponListRelationFilter
  }, "id">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    percent?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discount"> | string
    name?: StringWithAggregatesFilter<"Discount"> | string
    image?: StringWithAggregatesFilter<"Discount"> | string
    percent?: IntWithAggregatesFilter<"Discount"> | number
  }

  export type HallWhereInput = {
    AND?: HallWhereInput | HallWhereInput[]
    OR?: HallWhereInput[]
    NOT?: HallWhereInput | HallWhereInput[]
    id?: StringFilter<"Hall"> | string
    name?: StringFilter<"Hall"> | string
    row?: IntFilter<"Hall"> | number
    column?: IntFilter<"Hall"> | number
    screenings?: ScreeningListRelationFilter
    chairs?: ChairListRelationFilter
  }

  export type HallOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    row?: SortOrder
    column?: SortOrder
    screenings?: ScreeningOrderByRelationAggregateInput
    chairs?: ChairOrderByRelationAggregateInput
  }

  export type HallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HallWhereInput | HallWhereInput[]
    OR?: HallWhereInput[]
    NOT?: HallWhereInput | HallWhereInput[]
    name?: StringFilter<"Hall"> | string
    row?: IntFilter<"Hall"> | number
    column?: IntFilter<"Hall"> | number
    screenings?: ScreeningListRelationFilter
    chairs?: ChairListRelationFilter
  }, "id">

  export type HallOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    row?: SortOrder
    column?: SortOrder
    _count?: HallCountOrderByAggregateInput
    _avg?: HallAvgOrderByAggregateInput
    _max?: HallMaxOrderByAggregateInput
    _min?: HallMinOrderByAggregateInput
    _sum?: HallSumOrderByAggregateInput
  }

  export type HallScalarWhereWithAggregatesInput = {
    AND?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    OR?: HallScalarWhereWithAggregatesInput[]
    NOT?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hall"> | string
    name?: StringWithAggregatesFilter<"Hall"> | string
    row?: IntWithAggregatesFilter<"Hall"> | number
    column?: IntWithAggregatesFilter<"Hall"> | number
  }

  export type ForumWhereInput = {
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    id?: StringFilter<"Forum"> | string
    review?: FloatFilter<"Forum"> | number
    comment?: StringFilter<"Forum"> | string
    user_id?: StringFilter<"Forum"> | string
    movie_id?: StringFilter<"Forum"> | string
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }

  export type ForumOrderByWithRelationInput = {
    id?: SortOrder
    review?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    users?: UserOrderByWithRelationInput
    movies?: MovieOrderByWithRelationInput
  }

  export type ForumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    review?: FloatFilter<"Forum"> | number
    comment?: StringFilter<"Forum"> | string
    user_id?: StringFilter<"Forum"> | string
    movie_id?: StringFilter<"Forum"> | string
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }, "id">

  export type ForumOrderByWithAggregationInput = {
    id?: SortOrder
    review?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    _count?: ForumCountOrderByAggregateInput
    _avg?: ForumAvgOrderByAggregateInput
    _max?: ForumMaxOrderByAggregateInput
    _min?: ForumMinOrderByAggregateInput
    _sum?: ForumSumOrderByAggregateInput
  }

  export type ForumScalarWhereWithAggregatesInput = {
    AND?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    OR?: ForumScalarWhereWithAggregatesInput[]
    NOT?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forum"> | string
    review?: FloatWithAggregatesFilter<"Forum"> | number
    comment?: StringWithAggregatesFilter<"Forum"> | string
    user_id?: StringWithAggregatesFilter<"Forum"> | string
    movie_id?: StringWithAggregatesFilter<"Forum"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticket_type_id?: StringFilter<"Ticket"> | string
    user_id?: StringFilter<"Ticket"> | string
    screening_type_id?: StringFilter<"Ticket"> | string
    screening_id?: StringFilter<"Ticket"> | string
    chair_id?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    qr_token?: StringFilter<"Ticket"> | string
    used_at?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticket_types?: XOR<Ticket_typeNullableScalarRelationFilter, Ticket_typeWhereInput> | null
    screening_types?: XOR<Screening_typeNullableScalarRelationFilter, Screening_typeWhereInput> | null
    screenings?: XOR<ScreeningNullableScalarRelationFilter, ScreeningWhereInput> | null
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chairs?: XOR<ChairNullableScalarRelationFilter, ChairWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticket_type_id?: SortOrder
    user_id?: SortOrder
    screening_type_id?: SortOrder
    screening_id?: SortOrder
    chair_id?: SortOrder
    price?: SortOrder
    qr_token?: SortOrder
    used_at?: SortOrder
    ticket_types?: Ticket_typeOrderByWithRelationInput
    screening_types?: Screening_typeOrderByWithRelationInput
    screenings?: ScreeningOrderByWithRelationInput
    users?: UserOrderByWithRelationInput
    chairs?: ChairOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_token?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    ticket_type_id?: StringFilter<"Ticket"> | string
    user_id?: StringFilter<"Ticket"> | string
    screening_type_id?: StringFilter<"Ticket"> | string
    screening_id?: StringFilter<"Ticket"> | string
    chair_id?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    used_at?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticket_types?: XOR<Ticket_typeNullableScalarRelationFilter, Ticket_typeWhereInput> | null
    screening_types?: XOR<Screening_typeNullableScalarRelationFilter, Screening_typeWhereInput> | null
    screenings?: XOR<ScreeningNullableScalarRelationFilter, ScreeningWhereInput> | null
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chairs?: XOR<ChairNullableScalarRelationFilter, ChairWhereInput> | null
  }, "id" | "qr_token">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_type_id?: SortOrder
    user_id?: SortOrder
    screening_type_id?: SortOrder
    screening_id?: SortOrder
    chair_id?: SortOrder
    price?: SortOrder
    qr_token?: SortOrder
    used_at?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticket_type_id?: StringWithAggregatesFilter<"Ticket"> | string
    user_id?: StringWithAggregatesFilter<"Ticket"> | string
    screening_type_id?: StringWithAggregatesFilter<"Ticket"> | string
    screening_id?: StringWithAggregatesFilter<"Ticket"> | string
    chair_id?: StringWithAggregatesFilter<"Ticket"> | string
    price?: IntWithAggregatesFilter<"Ticket"> | number
    qr_token?: StringWithAggregatesFilter<"Ticket"> | string
    used_at?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
  }

  export type Ticket_typeWhereInput = {
    AND?: Ticket_typeWhereInput | Ticket_typeWhereInput[]
    OR?: Ticket_typeWhereInput[]
    NOT?: Ticket_typeWhereInput | Ticket_typeWhereInput[]
    id?: StringFilter<"Ticket_type"> | string
    type?: StringFilter<"Ticket_type"> | string
    percent?: IntFilter<"Ticket_type"> | number
    tickets?: TicketListRelationFilter
    payment_sessions?: Payment_sessionListRelationFilter
  }

  export type Ticket_typeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    payment_sessions?: Payment_sessionOrderByRelationAggregateInput
  }

  export type Ticket_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Ticket_typeWhereInput | Ticket_typeWhereInput[]
    OR?: Ticket_typeWhereInput[]
    NOT?: Ticket_typeWhereInput | Ticket_typeWhereInput[]
    type?: StringFilter<"Ticket_type"> | string
    percent?: IntFilter<"Ticket_type"> | number
    tickets?: TicketListRelationFilter
    payment_sessions?: Payment_sessionListRelationFilter
  }, "id">

  export type Ticket_typeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
    _count?: Ticket_typeCountOrderByAggregateInput
    _avg?: Ticket_typeAvgOrderByAggregateInput
    _max?: Ticket_typeMaxOrderByAggregateInput
    _min?: Ticket_typeMinOrderByAggregateInput
    _sum?: Ticket_typeSumOrderByAggregateInput
  }

  export type Ticket_typeScalarWhereWithAggregatesInput = {
    AND?: Ticket_typeScalarWhereWithAggregatesInput | Ticket_typeScalarWhereWithAggregatesInput[]
    OR?: Ticket_typeScalarWhereWithAggregatesInput[]
    NOT?: Ticket_typeScalarWhereWithAggregatesInput | Ticket_typeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket_type"> | string
    type?: StringWithAggregatesFilter<"Ticket_type"> | string
    percent?: IntWithAggregatesFilter<"Ticket_type"> | number
  }

  export type Screening_typeWhereInput = {
    AND?: Screening_typeWhereInput | Screening_typeWhereInput[]
    OR?: Screening_typeWhereInput[]
    NOT?: Screening_typeWhereInput | Screening_typeWhereInput[]
    id?: StringFilter<"Screening_type"> | string
    type?: StringFilter<"Screening_type"> | string
    percent?: IntFilter<"Screening_type"> | number
    tickets?: TicketListRelationFilter
    screenings?: ScreeningListRelationFilter
  }

  export type Screening_typeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    screenings?: ScreeningOrderByRelationAggregateInput
  }

  export type Screening_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Screening_typeWhereInput | Screening_typeWhereInput[]
    OR?: Screening_typeWhereInput[]
    NOT?: Screening_typeWhereInput | Screening_typeWhereInput[]
    type?: StringFilter<"Screening_type"> | string
    percent?: IntFilter<"Screening_type"> | number
    tickets?: TicketListRelationFilter
    screenings?: ScreeningListRelationFilter
  }, "id">

  export type Screening_typeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
    _count?: Screening_typeCountOrderByAggregateInput
    _avg?: Screening_typeAvgOrderByAggregateInput
    _max?: Screening_typeMaxOrderByAggregateInput
    _min?: Screening_typeMinOrderByAggregateInput
    _sum?: Screening_typeSumOrderByAggregateInput
  }

  export type Screening_typeScalarWhereWithAggregatesInput = {
    AND?: Screening_typeScalarWhereWithAggregatesInput | Screening_typeScalarWhereWithAggregatesInput[]
    OR?: Screening_typeScalarWhereWithAggregatesInput[]
    NOT?: Screening_typeScalarWhereWithAggregatesInput | Screening_typeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Screening_type"> | string
    type?: StringWithAggregatesFilter<"Screening_type"> | string
    percent?: IntWithAggregatesFilter<"Screening_type"> | number
  }

  export type Payment_sessionWhereInput = {
    AND?: Payment_sessionWhereInput | Payment_sessionWhereInput[]
    OR?: Payment_sessionWhereInput[]
    NOT?: Payment_sessionWhereInput | Payment_sessionWhereInput[]
    id?: StringFilter<"Payment_session"> | string
    user_id?: StringFilter<"Payment_session"> | string
    screening_id?: StringFilter<"Payment_session"> | string
    chair_ids?: JsonFilter<"Payment_session">
    status?: StringFilter<"Payment_session"> | string
    createdAt?: DateTimeFilter<"Payment_session"> | Date | string
    ticket_type_id?: StringNullableFilter<"Payment_session"> | string | null
    ticket_types?: XOR<Ticket_typeNullableScalarRelationFilter, Ticket_typeWhereInput> | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    screenings?: XOR<ScreeningScalarRelationFilter, ScreeningWhereInput>
  }

  export type Payment_sessionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    screening_id?: SortOrder
    chair_ids?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket_type_id?: SortOrder
    ticket_types?: Ticket_typeOrderByWithRelationInput
    users?: UserOrderByWithRelationInput
    screenings?: ScreeningOrderByWithRelationInput
  }

  export type Payment_sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Payment_sessionWhereInput | Payment_sessionWhereInput[]
    OR?: Payment_sessionWhereInput[]
    NOT?: Payment_sessionWhereInput | Payment_sessionWhereInput[]
    user_id?: StringFilter<"Payment_session"> | string
    screening_id?: StringFilter<"Payment_session"> | string
    chair_ids?: JsonFilter<"Payment_session">
    status?: StringFilter<"Payment_session"> | string
    createdAt?: DateTimeFilter<"Payment_session"> | Date | string
    ticket_type_id?: StringNullableFilter<"Payment_session"> | string | null
    ticket_types?: XOR<Ticket_typeNullableScalarRelationFilter, Ticket_typeWhereInput> | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    screenings?: XOR<ScreeningScalarRelationFilter, ScreeningWhereInput>
  }, "id">

  export type Payment_sessionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    screening_id?: SortOrder
    chair_ids?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket_type_id?: SortOrder
    _count?: Payment_sessionCountOrderByAggregateInput
    _max?: Payment_sessionMaxOrderByAggregateInput
    _min?: Payment_sessionMinOrderByAggregateInput
  }

  export type Payment_sessionScalarWhereWithAggregatesInput = {
    AND?: Payment_sessionScalarWhereWithAggregatesInput | Payment_sessionScalarWhereWithAggregatesInput[]
    OR?: Payment_sessionScalarWhereWithAggregatesInput[]
    NOT?: Payment_sessionScalarWhereWithAggregatesInput | Payment_sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment_session"> | string
    user_id?: StringWithAggregatesFilter<"Payment_session"> | string
    screening_id?: StringWithAggregatesFilter<"Payment_session"> | string
    chair_ids?: JsonWithAggregatesFilter<"Payment_session">
    status?: StringWithAggregatesFilter<"Payment_session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment_session"> | Date | string
    ticket_type_id?: StringNullableWithAggregatesFilter<"Payment_session"> | string | null
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    user_id?: StringFilter<"Coupon"> | string
    discount_id?: StringFilter<"Coupon"> | string
    qr_token?: StringFilter<"Coupon"> | string
    used?: BoolFilter<"Coupon"> | boolean
    created_at?: DateTimeFilter<"Coupon"> | Date | string
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    discounts?: XOR<DiscountScalarRelationFilter, DiscountWhereInput>
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_id?: SortOrder
    qr_token?: SortOrder
    used?: SortOrder
    created_at?: SortOrder
    users?: UserOrderByWithRelationInput
    discounts?: DiscountOrderByWithRelationInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_token?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    user_id?: StringFilter<"Coupon"> | string
    discount_id?: StringFilter<"Coupon"> | string
    used?: BoolFilter<"Coupon"> | boolean
    created_at?: DateTimeFilter<"Coupon"> | Date | string
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    discounts?: XOR<DiscountScalarRelationFilter, DiscountWhereInput>
  }, "id" | "qr_token">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_id?: SortOrder
    qr_token?: SortOrder
    used?: SortOrder
    created_at?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    user_id?: StringWithAggregatesFilter<"Coupon"> | string
    discount_id?: StringWithAggregatesFilter<"Coupon"> | string
    qr_token?: StringWithAggregatesFilter<"Coupon"> | string
    used?: BoolWithAggregatesFilter<"Coupon"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    password_hash: string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    screenings?: ScreeningCreateNestedManyWithoutMoviesInput
    forum?: ForumCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    screenings?: ScreeningUncheckedCreateNestedManyWithoutMoviesInput
    forum?: ForumUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    screenings?: ScreeningUpdateManyWithoutMoviesNestedInput
    forum?: ForumUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    screenings?: ScreeningUncheckedUpdateManyWithoutMoviesNestedInput
    forum?: ForumUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScreeningCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionCreateNestedManyWithoutScreeningsInput
    tickets?: TicketCreateNestedManyWithoutScreeningsInput
    movies?: MovieCreateNestedOneWithoutScreeningsInput
    halls?: HallCreateNestedOneWithoutScreeningsInput
    screening_types?: Screening_typeCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUpdateManyWithoutScreeningsNestedInput
    movies?: MovieUpdateOneWithoutScreeningsNestedInput
    halls?: HallUpdateOneWithoutScreeningsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type ScreeningCreateManyInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
  }

  export type ScreeningUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningUncheckedUpdateManyInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    ranks?: RankCreateNestedOneWithoutUsersInput
    tickets?: TicketCreateNestedManyWithoutUsersInput
    forum?: ForumCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutUsersInput
    coupons?: CouponCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUsersInput
    forum?: ForumUncheckedCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutUsersInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ranks?: RankUpdateOneWithoutUsersNestedInput
    tickets?: TicketUpdateManyWithoutUsersNestedInput
    forum?: ForumUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutUsersNestedInput
    coupons?: CouponUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUsersNestedInput
    forum?: ForumUncheckedUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
  }

  export type ChairCreateInput = {
    id?: string
    row: number
    column: number
    tickets?: TicketCreateNestedManyWithoutChairsInput
    halls?: HallCreateNestedOneWithoutChairsInput
  }

  export type ChairUncheckedCreateInput = {
    id?: string
    row: number
    column: number
    hall_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutChairsInput
  }

  export type ChairUpdateInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutChairsNestedInput
    halls?: HallUpdateOneWithoutChairsNestedInput
  }

  export type ChairUncheckedUpdateInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    hall_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutChairsNestedInput
  }

  export type ChairCreateManyInput = {
    id?: string
    row: number
    column: number
    hall_id: string
  }

  export type ChairUpdateManyMutationInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
  }

  export type ChairUncheckedUpdateManyInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    hall_id?: StringFieldUpdateOperationsInput | string
  }

  export type RankCreateInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    discount?: DiscountCreateNestedOneWithoutRanksInput
    users?: UserCreateNestedManyWithoutRanksInput
  }

  export type RankUncheckedCreateInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    discount_id?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRanksInput
  }

  export type RankUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discount?: DiscountUpdateOneWithoutRanksNestedInput
    users?: UserUpdateManyWithoutRanksNestedInput
  }

  export type RankUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discount_id?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRanksNestedInput
  }

  export type RankCreateManyInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    discount_id?: string | null
  }

  export type RankUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type RankUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discount_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscountCreateInput = {
    id?: string
    name: string
    image: string
    percent: number
    ranks?: RankCreateNestedManyWithoutDiscountInput
    coupons?: CouponCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    percent: number
    ranks?: RankUncheckedCreateNestedManyWithoutDiscountInput
    coupons?: CouponUncheckedCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    ranks?: RankUpdateManyWithoutDiscountNestedInput
    coupons?: CouponUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    ranks?: RankUncheckedUpdateManyWithoutDiscountNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountCreateManyInput = {
    id?: string
    name: string
    image: string
    percent: number
  }

  export type DiscountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type HallCreateInput = {
    id?: string
    name: string
    row: number
    column: number
    screenings?: ScreeningCreateNestedManyWithoutHallsInput
    chairs?: ChairCreateNestedManyWithoutHallsInput
  }

  export type HallUncheckedCreateInput = {
    id?: string
    name: string
    row: number
    column: number
    screenings?: ScreeningUncheckedCreateNestedManyWithoutHallsInput
    chairs?: ChairUncheckedCreateNestedManyWithoutHallsInput
  }

  export type HallUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUpdateManyWithoutHallsNestedInput
    chairs?: ChairUpdateManyWithoutHallsNestedInput
  }

  export type HallUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUncheckedUpdateManyWithoutHallsNestedInput
    chairs?: ChairUncheckedUpdateManyWithoutHallsNestedInput
  }

  export type HallCreateManyInput = {
    id?: string
    name: string
    row: number
    column: number
  }

  export type HallUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
  }

  export type HallUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCreateInput = {
    id?: string
    review: number
    comment: string
    users?: UserCreateNestedOneWithoutForumInput
    movies?: MovieCreateNestedOneWithoutForumInput
  }

  export type ForumUncheckedCreateInput = {
    id?: string
    review: number
    comment: string
    user_id: string
    movie_id: string
  }

  export type ForumUpdateInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateOneWithoutForumNestedInput
    movies?: MovieUpdateOneWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type ForumCreateManyInput = {
    id?: string
    review: number
    comment: string
    user_id: string
    movie_id: string
  }

  export type ForumUpdateManyMutationInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUncheckedUpdateManyInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    ticket_types?: Ticket_typeCreateNestedOneWithoutTicketsInput
    screening_types?: Screening_typeCreateNestedOneWithoutTicketsInput
    screenings?: ScreeningCreateNestedOneWithoutTicketsInput
    users?: UserCreateNestedOneWithoutTicketsInput
    chairs?: ChairCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_types?: Ticket_typeUpdateOneWithoutTicketsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutTicketsNestedInput
    screenings?: ScreeningUpdateOneWithoutTicketsNestedInput
    users?: UserUpdateOneWithoutTicketsNestedInput
    chairs?: ChairUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Ticket_typeCreateInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketCreateNestedManyWithoutTicket_typesInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeUncheckedCreateInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketUncheckedCreateNestedManyWithoutTicket_typesInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutTicket_typesNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutTicket_typesNestedInput
  }

  export type Ticket_typeUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutTicket_typesNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutTicket_typesNestedInput
  }

  export type Ticket_typeCreateManyInput = {
    id?: string
    type: string
    percent: number
  }

  export type Ticket_typeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type Ticket_typeUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type Screening_typeCreateInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketCreateNestedManyWithoutScreening_typesInput
    screenings?: ScreeningCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeUncheckedCreateInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketUncheckedCreateNestedManyWithoutScreening_typesInput
    screenings?: ScreeningUncheckedCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutScreening_typesNestedInput
    screenings?: ScreeningUpdateManyWithoutScreening_typesNestedInput
  }

  export type Screening_typeUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutScreening_typesNestedInput
    screenings?: ScreeningUncheckedUpdateManyWithoutScreening_typesNestedInput
  }

  export type Screening_typeCreateManyInput = {
    id?: string
    type: string
    percent: number
  }

  export type Screening_typeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type Screening_typeUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type Payment_sessionCreateInput = {
    id?: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_types?: Ticket_typeCreateNestedOneWithoutPayment_sessionsInput
    users: UserCreateNestedOneWithoutPayment_sessionsInput
    screenings: ScreeningCreateNestedOneWithoutPayment_sessionsInput
  }

  export type Payment_sessionUncheckedCreateInput = {
    id?: string
    user_id: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type Payment_sessionUpdateInput = {
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_types?: Ticket_typeUpdateOneWithoutPayment_sessionsNestedInput
    users?: UserUpdateOneRequiredWithoutPayment_sessionsNestedInput
    screenings?: ScreeningUpdateOneRequiredWithoutPayment_sessionsNestedInput
  }

  export type Payment_sessionUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Payment_sessionCreateManyInput = {
    id?: string
    user_id: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type Payment_sessionUpdateManyMutationInput = {
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Payment_sessionUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponCreateInput = {
    id?: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
    users: UserCreateNestedOneWithoutCouponsInput
    discounts: DiscountCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    user_id: string
    discount_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type CouponUpdateInput = {
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutCouponsNestedInput
    discounts?: DiscountUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    discount_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: string
    user_id: string
    discount_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    discount_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
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

  export type ScreeningListRelationFilter = {
    every?: ScreeningWhereInput
    some?: ScreeningWhereInput
    none?: ScreeningWhereInput
  }

  export type ForumListRelationFilter = {
    every?: ForumWhereInput
    some?: ForumWhereInput
    none?: ForumWhereInput
  }

  export type ScreeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    playtime?: SortOrder
    language?: SortOrder
    trailer?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    onscreen?: SortOrder
    genre?: SortOrder
    review?: SortOrder
    description?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    playtime?: SortOrder
    review?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    playtime?: SortOrder
    language?: SortOrder
    trailer?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    onscreen?: SortOrder
    genre?: SortOrder
    review?: SortOrder
    description?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    playtime?: SortOrder
    language?: SortOrder
    trailer?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    onscreen?: SortOrder
    genre?: SortOrder
    review?: SortOrder
    description?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    playtime?: SortOrder
    review?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type Payment_sessionListRelationFilter = {
    every?: Payment_sessionWhereInput
    some?: Payment_sessionWhereInput
    none?: Payment_sessionWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type MovieNullableScalarRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type HallNullableScalarRelationFilter = {
    is?: HallWhereInput | null
    isNot?: HallWhereInput | null
  }

  export type Screening_typeNullableScalarRelationFilter = {
    is?: Screening_typeWhereInput | null
    isNot?: Screening_typeWhereInput | null
  }

  export type Payment_sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreeningCountOrderByAggregateInput = {
    id?: SortOrder
    hall_id?: SortOrder
    movie_id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    screening_type_id?: SortOrder
  }

  export type ScreeningMaxOrderByAggregateInput = {
    id?: SortOrder
    hall_id?: SortOrder
    movie_id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    screening_type_id?: SortOrder
  }

  export type ScreeningMinOrderByAggregateInput = {
    id?: SortOrder
    hall_id?: SortOrder
    movie_id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    screening_type_id?: SortOrder
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

  export type RankNullableScalarRelationFilter = {
    is?: RankWhereInput | null
    isNot?: RankWhereInput | null
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    points?: SortOrder
    phone_number?: SortOrder
    profile_image?: SortOrder
    gender?: SortOrder
    email_verified?: SortOrder
    email_code?: SortOrder
    email_code_exp?: SortOrder
    password_reset_token?: SortOrder
    password_reset_exp?: SortOrder
    rank_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    points?: SortOrder
    phone_number?: SortOrder
    profile_image?: SortOrder
    gender?: SortOrder
    email_verified?: SortOrder
    email_code?: SortOrder
    email_code_exp?: SortOrder
    password_reset_token?: SortOrder
    password_reset_exp?: SortOrder
    rank_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    points?: SortOrder
    phone_number?: SortOrder
    profile_image?: SortOrder
    gender?: SortOrder
    email_verified?: SortOrder
    email_code?: SortOrder
    email_code_exp?: SortOrder
    password_reset_token?: SortOrder
    password_reset_exp?: SortOrder
    rank_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type ChairCountOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    column?: SortOrder
    hall_id?: SortOrder
  }

  export type ChairAvgOrderByAggregateInput = {
    row?: SortOrder
    column?: SortOrder
  }

  export type ChairMaxOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    column?: SortOrder
    hall_id?: SortOrder
  }

  export type ChairMinOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    column?: SortOrder
    hall_id?: SortOrder
  }

  export type ChairSumOrderByAggregateInput = {
    row?: SortOrder
    column?: SortOrder
  }

  export type DiscountNullableScalarRelationFilter = {
    is?: DiscountWhereInput | null
    isNot?: DiscountWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point_limit?: SortOrder
    image?: SortOrder
    discount_id?: SortOrder
  }

  export type RankAvgOrderByAggregateInput = {
    point_limit?: SortOrder
  }

  export type RankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point_limit?: SortOrder
    image?: SortOrder
    discount_id?: SortOrder
  }

  export type RankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point_limit?: SortOrder
    image?: SortOrder
    discount_id?: SortOrder
  }

  export type RankSumOrderByAggregateInput = {
    point_limit?: SortOrder
  }

  export type RankListRelationFilter = {
    every?: RankWhereInput
    some?: RankWhereInput
    none?: RankWhereInput
  }

  export type RankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    percent?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    percent?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    percent?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type ChairListRelationFilter = {
    every?: ChairWhereInput
    some?: ChairWhereInput
    none?: ChairWhereInput
  }

  export type ChairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HallCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    row?: SortOrder
    column?: SortOrder
  }

  export type HallAvgOrderByAggregateInput = {
    row?: SortOrder
    column?: SortOrder
  }

  export type HallMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    row?: SortOrder
    column?: SortOrder
  }

  export type HallMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    row?: SortOrder
    column?: SortOrder
  }

  export type HallSumOrderByAggregateInput = {
    row?: SortOrder
    column?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ForumCountOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
  }

  export type ForumAvgOrderByAggregateInput = {
    review?: SortOrder
  }

  export type ForumMaxOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
  }

  export type ForumMinOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
  }

  export type ForumSumOrderByAggregateInput = {
    review?: SortOrder
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

  export type Ticket_typeNullableScalarRelationFilter = {
    is?: Ticket_typeWhereInput | null
    isNot?: Ticket_typeWhereInput | null
  }

  export type ScreeningNullableScalarRelationFilter = {
    is?: ScreeningWhereInput | null
    isNot?: ScreeningWhereInput | null
  }

  export type ChairNullableScalarRelationFilter = {
    is?: ChairWhereInput | null
    isNot?: ChairWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_type_id?: SortOrder
    user_id?: SortOrder
    screening_type_id?: SortOrder
    screening_id?: SortOrder
    chair_id?: SortOrder
    price?: SortOrder
    qr_token?: SortOrder
    used_at?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_type_id?: SortOrder
    user_id?: SortOrder
    screening_type_id?: SortOrder
    screening_id?: SortOrder
    chair_id?: SortOrder
    price?: SortOrder
    qr_token?: SortOrder
    used_at?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_type_id?: SortOrder
    user_id?: SortOrder
    screening_type_id?: SortOrder
    screening_id?: SortOrder
    chair_id?: SortOrder
    price?: SortOrder
    qr_token?: SortOrder
    used_at?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type Ticket_typeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Ticket_typeAvgOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type Ticket_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Ticket_typeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Ticket_typeSumOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type Screening_typeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Screening_typeAvgOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type Screening_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Screening_typeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    percent?: SortOrder
  }

  export type Screening_typeSumOrderByAggregateInput = {
    percent?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScreeningScalarRelationFilter = {
    is?: ScreeningWhereInput
    isNot?: ScreeningWhereInput
  }

  export type Payment_sessionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    screening_id?: SortOrder
    chair_ids?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket_type_id?: SortOrder
  }

  export type Payment_sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    screening_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket_type_id?: SortOrder
  }

  export type Payment_sessionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    screening_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket_type_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DiscountScalarRelationFilter = {
    is?: DiscountWhereInput
    isNot?: DiscountWhereInput
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_id?: SortOrder
    qr_token?: SortOrder
    used?: SortOrder
    created_at?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_id?: SortOrder
    qr_token?: SortOrder
    used?: SortOrder
    created_at?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_id?: SortOrder
    qr_token?: SortOrder
    used?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ScreeningCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput> | ScreeningCreateWithoutMoviesInput[] | ScreeningUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMoviesInput | ScreeningCreateOrConnectWithoutMoviesInput[]
    createMany?: ScreeningCreateManyMoviesInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type ForumCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput> | ForumCreateWithoutMoviesInput[] | ForumUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutMoviesInput | ForumCreateOrConnectWithoutMoviesInput[]
    createMany?: ForumCreateManyMoviesInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type ScreeningUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput> | ScreeningCreateWithoutMoviesInput[] | ScreeningUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMoviesInput | ScreeningCreateOrConnectWithoutMoviesInput[]
    createMany?: ScreeningCreateManyMoviesInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type ForumUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput> | ForumCreateWithoutMoviesInput[] | ForumUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutMoviesInput | ForumCreateOrConnectWithoutMoviesInput[]
    createMany?: ForumCreateManyMoviesInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ScreeningUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput> | ScreeningCreateWithoutMoviesInput[] | ScreeningUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMoviesInput | ScreeningCreateOrConnectWithoutMoviesInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutMoviesInput | ScreeningUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ScreeningCreateManyMoviesInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutMoviesInput | ScreeningUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutMoviesInput | ScreeningUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type ForumUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput> | ForumCreateWithoutMoviesInput[] | ForumUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutMoviesInput | ForumCreateOrConnectWithoutMoviesInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutMoviesInput | ForumUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ForumCreateManyMoviesInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutMoviesInput | ForumUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutMoviesInput | ForumUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type ScreeningUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput> | ScreeningCreateWithoutMoviesInput[] | ScreeningUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMoviesInput | ScreeningCreateOrConnectWithoutMoviesInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutMoviesInput | ScreeningUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ScreeningCreateManyMoviesInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutMoviesInput | ScreeningUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutMoviesInput | ScreeningUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type ForumUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput> | ForumCreateWithoutMoviesInput[] | ForumUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutMoviesInput | ForumCreateOrConnectWithoutMoviesInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutMoviesInput | ForumUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ForumCreateManyMoviesInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutMoviesInput | ForumUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutMoviesInput | ForumUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type Payment_sessionCreateNestedManyWithoutScreeningsInput = {
    create?: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput> | Payment_sessionCreateWithoutScreeningsInput[] | Payment_sessionUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutScreeningsInput | Payment_sessionCreateOrConnectWithoutScreeningsInput[]
    createMany?: Payment_sessionCreateManyScreeningsInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutScreeningsInput = {
    create?: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput> | TicketCreateWithoutScreeningsInput[] | TicketUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreeningsInput | TicketCreateOrConnectWithoutScreeningsInput[]
    createMany?: TicketCreateManyScreeningsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MovieCreateNestedOneWithoutScreeningsInput = {
    create?: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutScreeningsInput
    connect?: MovieWhereUniqueInput
  }

  export type HallCreateNestedOneWithoutScreeningsInput = {
    create?: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: HallCreateOrConnectWithoutScreeningsInput
    connect?: HallWhereUniqueInput
  }

  export type Screening_typeCreateNestedOneWithoutScreeningsInput = {
    create?: XOR<Screening_typeCreateWithoutScreeningsInput, Screening_typeUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: Screening_typeCreateOrConnectWithoutScreeningsInput
    connect?: Screening_typeWhereUniqueInput
  }

  export type Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput = {
    create?: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput> | Payment_sessionCreateWithoutScreeningsInput[] | Payment_sessionUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutScreeningsInput | Payment_sessionCreateOrConnectWithoutScreeningsInput[]
    createMany?: Payment_sessionCreateManyScreeningsInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutScreeningsInput = {
    create?: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput> | TicketCreateWithoutScreeningsInput[] | TicketUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreeningsInput | TicketCreateOrConnectWithoutScreeningsInput[]
    createMany?: TicketCreateManyScreeningsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Payment_sessionUpdateManyWithoutScreeningsNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput> | Payment_sessionCreateWithoutScreeningsInput[] | Payment_sessionUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutScreeningsInput | Payment_sessionCreateOrConnectWithoutScreeningsInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutScreeningsInput | Payment_sessionUpsertWithWhereUniqueWithoutScreeningsInput[]
    createMany?: Payment_sessionCreateManyScreeningsInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutScreeningsInput | Payment_sessionUpdateWithWhereUniqueWithoutScreeningsInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutScreeningsInput | Payment_sessionUpdateManyWithWhereWithoutScreeningsInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutScreeningsNestedInput = {
    create?: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput> | TicketCreateWithoutScreeningsInput[] | TicketUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreeningsInput | TicketCreateOrConnectWithoutScreeningsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScreeningsInput | TicketUpsertWithWhereUniqueWithoutScreeningsInput[]
    createMany?: TicketCreateManyScreeningsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScreeningsInput | TicketUpdateWithWhereUniqueWithoutScreeningsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScreeningsInput | TicketUpdateManyWithWhereWithoutScreeningsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MovieUpdateOneWithoutScreeningsNestedInput = {
    create?: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutScreeningsInput
    upsert?: MovieUpsertWithoutScreeningsInput
    disconnect?: boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutScreeningsInput, MovieUpdateWithoutScreeningsInput>, MovieUncheckedUpdateWithoutScreeningsInput>
  }

  export type HallUpdateOneWithoutScreeningsNestedInput = {
    create?: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: HallCreateOrConnectWithoutScreeningsInput
    upsert?: HallUpsertWithoutScreeningsInput
    disconnect?: boolean
    delete?: HallWhereInput | boolean
    connect?: HallWhereUniqueInput
    update?: XOR<XOR<HallUpdateToOneWithWhereWithoutScreeningsInput, HallUpdateWithoutScreeningsInput>, HallUncheckedUpdateWithoutScreeningsInput>
  }

  export type Screening_typeUpdateOneWithoutScreeningsNestedInput = {
    create?: XOR<Screening_typeCreateWithoutScreeningsInput, Screening_typeUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: Screening_typeCreateOrConnectWithoutScreeningsInput
    upsert?: Screening_typeUpsertWithoutScreeningsInput
    disconnect?: boolean
    delete?: Screening_typeWhereInput | boolean
    connect?: Screening_typeWhereUniqueInput
    update?: XOR<XOR<Screening_typeUpdateToOneWithWhereWithoutScreeningsInput, Screening_typeUpdateWithoutScreeningsInput>, Screening_typeUncheckedUpdateWithoutScreeningsInput>
  }

  export type Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput> | Payment_sessionCreateWithoutScreeningsInput[] | Payment_sessionUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutScreeningsInput | Payment_sessionCreateOrConnectWithoutScreeningsInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutScreeningsInput | Payment_sessionUpsertWithWhereUniqueWithoutScreeningsInput[]
    createMany?: Payment_sessionCreateManyScreeningsInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutScreeningsInput | Payment_sessionUpdateWithWhereUniqueWithoutScreeningsInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutScreeningsInput | Payment_sessionUpdateManyWithWhereWithoutScreeningsInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutScreeningsNestedInput = {
    create?: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput> | TicketCreateWithoutScreeningsInput[] | TicketUncheckedCreateWithoutScreeningsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreeningsInput | TicketCreateOrConnectWithoutScreeningsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScreeningsInput | TicketUpsertWithWhereUniqueWithoutScreeningsInput[]
    createMany?: TicketCreateManyScreeningsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScreeningsInput | TicketUpdateWithWhereUniqueWithoutScreeningsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScreeningsInput | TicketUpdateManyWithWhereWithoutScreeningsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RankCreateNestedOneWithoutUsersInput = {
    create?: XOR<RankCreateWithoutUsersInput, RankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RankCreateOrConnectWithoutUsersInput
    connect?: RankWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput> | TicketCreateWithoutUsersInput[] | TicketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsersInput | TicketCreateOrConnectWithoutUsersInput[]
    createMany?: TicketCreateManyUsersInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ForumCreateNestedManyWithoutUsersInput = {
    create?: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput> | ForumCreateWithoutUsersInput[] | ForumUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUsersInput | ForumCreateOrConnectWithoutUsersInput[]
    createMany?: ForumCreateManyUsersInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type Payment_sessionCreateNestedManyWithoutUsersInput = {
    create?: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput> | Payment_sessionCreateWithoutUsersInput[] | Payment_sessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutUsersInput | Payment_sessionCreateOrConnectWithoutUsersInput[]
    createMany?: Payment_sessionCreateManyUsersInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutUsersInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput> | CouponCreateWithoutUsersInput[] | CouponUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput | CouponCreateOrConnectWithoutUsersInput[]
    createMany?: CouponCreateManyUsersInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput> | TicketCreateWithoutUsersInput[] | TicketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsersInput | TicketCreateOrConnectWithoutUsersInput[]
    createMany?: TicketCreateManyUsersInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ForumUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput> | ForumCreateWithoutUsersInput[] | ForumUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUsersInput | ForumCreateOrConnectWithoutUsersInput[]
    createMany?: ForumCreateManyUsersInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type Payment_sessionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput> | Payment_sessionCreateWithoutUsersInput[] | Payment_sessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutUsersInput | Payment_sessionCreateOrConnectWithoutUsersInput[]
    createMany?: Payment_sessionCreateManyUsersInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput> | CouponCreateWithoutUsersInput[] | CouponUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput | CouponCreateOrConnectWithoutUsersInput[]
    createMany?: CouponCreateManyUsersInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type RankUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RankCreateWithoutUsersInput, RankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RankCreateOrConnectWithoutUsersInput
    upsert?: RankUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: RankWhereInput | boolean
    connect?: RankWhereUniqueInput
    update?: XOR<XOR<RankUpdateToOneWithWhereWithoutUsersInput, RankUpdateWithoutUsersInput>, RankUncheckedUpdateWithoutUsersInput>
  }

  export type TicketUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput> | TicketCreateWithoutUsersInput[] | TicketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsersInput | TicketCreateOrConnectWithoutUsersInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUsersInput | TicketUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketCreateManyUsersInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUsersInput | TicketUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUsersInput | TicketUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ForumUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput> | ForumCreateWithoutUsersInput[] | ForumUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUsersInput | ForumCreateOrConnectWithoutUsersInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUsersInput | ForumUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ForumCreateManyUsersInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUsersInput | ForumUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUsersInput | ForumUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type Payment_sessionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput> | Payment_sessionCreateWithoutUsersInput[] | Payment_sessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutUsersInput | Payment_sessionCreateOrConnectWithoutUsersInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutUsersInput | Payment_sessionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Payment_sessionCreateManyUsersInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutUsersInput | Payment_sessionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutUsersInput | Payment_sessionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput> | CouponCreateWithoutUsersInput[] | CouponUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput | CouponCreateOrConnectWithoutUsersInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUsersInput | CouponUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CouponCreateManyUsersInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUsersInput | CouponUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUsersInput | CouponUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput> | TicketCreateWithoutUsersInput[] | TicketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsersInput | TicketCreateOrConnectWithoutUsersInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUsersInput | TicketUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketCreateManyUsersInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUsersInput | TicketUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUsersInput | TicketUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ForumUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput> | ForumCreateWithoutUsersInput[] | ForumUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUsersInput | ForumCreateOrConnectWithoutUsersInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUsersInput | ForumUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ForumCreateManyUsersInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUsersInput | ForumUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUsersInput | ForumUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput> | Payment_sessionCreateWithoutUsersInput[] | Payment_sessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutUsersInput | Payment_sessionCreateOrConnectWithoutUsersInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutUsersInput | Payment_sessionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Payment_sessionCreateManyUsersInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutUsersInput | Payment_sessionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutUsersInput | Payment_sessionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput> | CouponCreateWithoutUsersInput[] | CouponUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput | CouponCreateOrConnectWithoutUsersInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUsersInput | CouponUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CouponCreateManyUsersInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUsersInput | CouponUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUsersInput | CouponUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutChairsInput = {
    create?: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput> | TicketCreateWithoutChairsInput[] | TicketUncheckedCreateWithoutChairsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutChairsInput | TicketCreateOrConnectWithoutChairsInput[]
    createMany?: TicketCreateManyChairsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type HallCreateNestedOneWithoutChairsInput = {
    create?: XOR<HallCreateWithoutChairsInput, HallUncheckedCreateWithoutChairsInput>
    connectOrCreate?: HallCreateOrConnectWithoutChairsInput
    connect?: HallWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutChairsInput = {
    create?: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput> | TicketCreateWithoutChairsInput[] | TicketUncheckedCreateWithoutChairsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutChairsInput | TicketCreateOrConnectWithoutChairsInput[]
    createMany?: TicketCreateManyChairsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutChairsNestedInput = {
    create?: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput> | TicketCreateWithoutChairsInput[] | TicketUncheckedCreateWithoutChairsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutChairsInput | TicketCreateOrConnectWithoutChairsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutChairsInput | TicketUpsertWithWhereUniqueWithoutChairsInput[]
    createMany?: TicketCreateManyChairsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutChairsInput | TicketUpdateWithWhereUniqueWithoutChairsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutChairsInput | TicketUpdateManyWithWhereWithoutChairsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type HallUpdateOneWithoutChairsNestedInput = {
    create?: XOR<HallCreateWithoutChairsInput, HallUncheckedCreateWithoutChairsInput>
    connectOrCreate?: HallCreateOrConnectWithoutChairsInput
    upsert?: HallUpsertWithoutChairsInput
    disconnect?: boolean
    delete?: HallWhereInput | boolean
    connect?: HallWhereUniqueInput
    update?: XOR<XOR<HallUpdateToOneWithWhereWithoutChairsInput, HallUpdateWithoutChairsInput>, HallUncheckedUpdateWithoutChairsInput>
  }

  export type TicketUncheckedUpdateManyWithoutChairsNestedInput = {
    create?: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput> | TicketCreateWithoutChairsInput[] | TicketUncheckedCreateWithoutChairsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutChairsInput | TicketCreateOrConnectWithoutChairsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutChairsInput | TicketUpsertWithWhereUniqueWithoutChairsInput[]
    createMany?: TicketCreateManyChairsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutChairsInput | TicketUpdateWithWhereUniqueWithoutChairsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutChairsInput | TicketUpdateManyWithWhereWithoutChairsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type DiscountCreateNestedOneWithoutRanksInput = {
    create?: XOR<DiscountCreateWithoutRanksInput, DiscountUncheckedCreateWithoutRanksInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutRanksInput
    connect?: DiscountWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRanksInput = {
    create?: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput> | UserCreateWithoutRanksInput[] | UserUncheckedCreateWithoutRanksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRanksInput | UserCreateOrConnectWithoutRanksInput[]
    createMany?: UserCreateManyRanksInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRanksInput = {
    create?: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput> | UserCreateWithoutRanksInput[] | UserUncheckedCreateWithoutRanksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRanksInput | UserCreateOrConnectWithoutRanksInput[]
    createMany?: UserCreateManyRanksInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DiscountUpdateOneWithoutRanksNestedInput = {
    create?: XOR<DiscountCreateWithoutRanksInput, DiscountUncheckedCreateWithoutRanksInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutRanksInput
    upsert?: DiscountUpsertWithoutRanksInput
    disconnect?: boolean
    delete?: DiscountWhereInput | boolean
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutRanksInput, DiscountUpdateWithoutRanksInput>, DiscountUncheckedUpdateWithoutRanksInput>
  }

  export type UserUpdateManyWithoutRanksNestedInput = {
    create?: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput> | UserCreateWithoutRanksInput[] | UserUncheckedCreateWithoutRanksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRanksInput | UserCreateOrConnectWithoutRanksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRanksInput | UserUpsertWithWhereUniqueWithoutRanksInput[]
    createMany?: UserCreateManyRanksInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRanksInput | UserUpdateWithWhereUniqueWithoutRanksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRanksInput | UserUpdateManyWithWhereWithoutRanksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRanksNestedInput = {
    create?: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput> | UserCreateWithoutRanksInput[] | UserUncheckedCreateWithoutRanksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRanksInput | UserCreateOrConnectWithoutRanksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRanksInput | UserUpsertWithWhereUniqueWithoutRanksInput[]
    createMany?: UserCreateManyRanksInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRanksInput | UserUpdateWithWhereUniqueWithoutRanksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRanksInput | UserUpdateManyWithWhereWithoutRanksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RankCreateNestedManyWithoutDiscountInput = {
    create?: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput> | RankCreateWithoutDiscountInput[] | RankUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RankCreateOrConnectWithoutDiscountInput | RankCreateOrConnectWithoutDiscountInput[]
    createMany?: RankCreateManyDiscountInputEnvelope
    connect?: RankWhereUniqueInput | RankWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutDiscountsInput = {
    create?: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput> | CouponCreateWithoutDiscountsInput[] | CouponUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutDiscountsInput | CouponCreateOrConnectWithoutDiscountsInput[]
    createMany?: CouponCreateManyDiscountsInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type RankUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput> | RankCreateWithoutDiscountInput[] | RankUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RankCreateOrConnectWithoutDiscountInput | RankCreateOrConnectWithoutDiscountInput[]
    createMany?: RankCreateManyDiscountInputEnvelope
    connect?: RankWhereUniqueInput | RankWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutDiscountsInput = {
    create?: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput> | CouponCreateWithoutDiscountsInput[] | CouponUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutDiscountsInput | CouponCreateOrConnectWithoutDiscountsInput[]
    createMany?: CouponCreateManyDiscountsInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type RankUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput> | RankCreateWithoutDiscountInput[] | RankUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RankCreateOrConnectWithoutDiscountInput | RankCreateOrConnectWithoutDiscountInput[]
    upsert?: RankUpsertWithWhereUniqueWithoutDiscountInput | RankUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: RankCreateManyDiscountInputEnvelope
    set?: RankWhereUniqueInput | RankWhereUniqueInput[]
    disconnect?: RankWhereUniqueInput | RankWhereUniqueInput[]
    delete?: RankWhereUniqueInput | RankWhereUniqueInput[]
    connect?: RankWhereUniqueInput | RankWhereUniqueInput[]
    update?: RankUpdateWithWhereUniqueWithoutDiscountInput | RankUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: RankUpdateManyWithWhereWithoutDiscountInput | RankUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: RankScalarWhereInput | RankScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutDiscountsNestedInput = {
    create?: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput> | CouponCreateWithoutDiscountsInput[] | CouponUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutDiscountsInput | CouponCreateOrConnectWithoutDiscountsInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutDiscountsInput | CouponUpsertWithWhereUniqueWithoutDiscountsInput[]
    createMany?: CouponCreateManyDiscountsInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutDiscountsInput | CouponUpdateWithWhereUniqueWithoutDiscountsInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutDiscountsInput | CouponUpdateManyWithWhereWithoutDiscountsInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type RankUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput> | RankCreateWithoutDiscountInput[] | RankUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RankCreateOrConnectWithoutDiscountInput | RankCreateOrConnectWithoutDiscountInput[]
    upsert?: RankUpsertWithWhereUniqueWithoutDiscountInput | RankUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: RankCreateManyDiscountInputEnvelope
    set?: RankWhereUniqueInput | RankWhereUniqueInput[]
    disconnect?: RankWhereUniqueInput | RankWhereUniqueInput[]
    delete?: RankWhereUniqueInput | RankWhereUniqueInput[]
    connect?: RankWhereUniqueInput | RankWhereUniqueInput[]
    update?: RankUpdateWithWhereUniqueWithoutDiscountInput | RankUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: RankUpdateManyWithWhereWithoutDiscountInput | RankUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: RankScalarWhereInput | RankScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutDiscountsNestedInput = {
    create?: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput> | CouponCreateWithoutDiscountsInput[] | CouponUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutDiscountsInput | CouponCreateOrConnectWithoutDiscountsInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutDiscountsInput | CouponUpsertWithWhereUniqueWithoutDiscountsInput[]
    createMany?: CouponCreateManyDiscountsInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutDiscountsInput | CouponUpdateWithWhereUniqueWithoutDiscountsInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutDiscountsInput | CouponUpdateManyWithWhereWithoutDiscountsInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type ScreeningCreateNestedManyWithoutHallsInput = {
    create?: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput> | ScreeningCreateWithoutHallsInput[] | ScreeningUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallsInput | ScreeningCreateOrConnectWithoutHallsInput[]
    createMany?: ScreeningCreateManyHallsInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type ChairCreateNestedManyWithoutHallsInput = {
    create?: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput> | ChairCreateWithoutHallsInput[] | ChairUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ChairCreateOrConnectWithoutHallsInput | ChairCreateOrConnectWithoutHallsInput[]
    createMany?: ChairCreateManyHallsInputEnvelope
    connect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
  }

  export type ScreeningUncheckedCreateNestedManyWithoutHallsInput = {
    create?: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput> | ScreeningCreateWithoutHallsInput[] | ScreeningUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallsInput | ScreeningCreateOrConnectWithoutHallsInput[]
    createMany?: ScreeningCreateManyHallsInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type ChairUncheckedCreateNestedManyWithoutHallsInput = {
    create?: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput> | ChairCreateWithoutHallsInput[] | ChairUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ChairCreateOrConnectWithoutHallsInput | ChairCreateOrConnectWithoutHallsInput[]
    createMany?: ChairCreateManyHallsInputEnvelope
    connect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
  }

  export type ScreeningUpdateManyWithoutHallsNestedInput = {
    create?: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput> | ScreeningCreateWithoutHallsInput[] | ScreeningUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallsInput | ScreeningCreateOrConnectWithoutHallsInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutHallsInput | ScreeningUpsertWithWhereUniqueWithoutHallsInput[]
    createMany?: ScreeningCreateManyHallsInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutHallsInput | ScreeningUpdateWithWhereUniqueWithoutHallsInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutHallsInput | ScreeningUpdateManyWithWhereWithoutHallsInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type ChairUpdateManyWithoutHallsNestedInput = {
    create?: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput> | ChairCreateWithoutHallsInput[] | ChairUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ChairCreateOrConnectWithoutHallsInput | ChairCreateOrConnectWithoutHallsInput[]
    upsert?: ChairUpsertWithWhereUniqueWithoutHallsInput | ChairUpsertWithWhereUniqueWithoutHallsInput[]
    createMany?: ChairCreateManyHallsInputEnvelope
    set?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    disconnect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    delete?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    connect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    update?: ChairUpdateWithWhereUniqueWithoutHallsInput | ChairUpdateWithWhereUniqueWithoutHallsInput[]
    updateMany?: ChairUpdateManyWithWhereWithoutHallsInput | ChairUpdateManyWithWhereWithoutHallsInput[]
    deleteMany?: ChairScalarWhereInput | ChairScalarWhereInput[]
  }

  export type ScreeningUncheckedUpdateManyWithoutHallsNestedInput = {
    create?: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput> | ScreeningCreateWithoutHallsInput[] | ScreeningUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallsInput | ScreeningCreateOrConnectWithoutHallsInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutHallsInput | ScreeningUpsertWithWhereUniqueWithoutHallsInput[]
    createMany?: ScreeningCreateManyHallsInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutHallsInput | ScreeningUpdateWithWhereUniqueWithoutHallsInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutHallsInput | ScreeningUpdateManyWithWhereWithoutHallsInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type ChairUncheckedUpdateManyWithoutHallsNestedInput = {
    create?: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput> | ChairCreateWithoutHallsInput[] | ChairUncheckedCreateWithoutHallsInput[]
    connectOrCreate?: ChairCreateOrConnectWithoutHallsInput | ChairCreateOrConnectWithoutHallsInput[]
    upsert?: ChairUpsertWithWhereUniqueWithoutHallsInput | ChairUpsertWithWhereUniqueWithoutHallsInput[]
    createMany?: ChairCreateManyHallsInputEnvelope
    set?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    disconnect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    delete?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    connect?: ChairWhereUniqueInput | ChairWhereUniqueInput[]
    update?: ChairUpdateWithWhereUniqueWithoutHallsInput | ChairUpdateWithWhereUniqueWithoutHallsInput[]
    updateMany?: ChairUpdateManyWithWhereWithoutHallsInput | ChairUpdateManyWithWhereWithoutHallsInput[]
    deleteMany?: ChairScalarWhereInput | ChairScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutForumInput = {
    create?: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutForumInput = {
    create?: XOR<MovieCreateWithoutForumInput, MovieUncheckedCreateWithoutForumInput>
    connectOrCreate?: MovieCreateOrConnectWithoutForumInput
    connect?: MovieWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutForumNestedInput = {
    create?: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumInput
    upsert?: UserUpsertWithoutForumInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumInput, UserUpdateWithoutForumInput>, UserUncheckedUpdateWithoutForumInput>
  }

  export type MovieUpdateOneWithoutForumNestedInput = {
    create?: XOR<MovieCreateWithoutForumInput, MovieUncheckedCreateWithoutForumInput>
    connectOrCreate?: MovieCreateOrConnectWithoutForumInput
    upsert?: MovieUpsertWithoutForumInput
    disconnect?: boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutForumInput, MovieUpdateWithoutForumInput>, MovieUncheckedUpdateWithoutForumInput>
  }

  export type Ticket_typeCreateNestedOneWithoutTicketsInput = {
    create?: XOR<Ticket_typeCreateWithoutTicketsInput, Ticket_typeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Ticket_typeCreateOrConnectWithoutTicketsInput
    connect?: Ticket_typeWhereUniqueInput
  }

  export type Screening_typeCreateNestedOneWithoutTicketsInput = {
    create?: XOR<Screening_typeCreateWithoutTicketsInput, Screening_typeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Screening_typeCreateOrConnectWithoutTicketsInput
    connect?: Screening_typeWhereUniqueInput
  }

  export type ScreeningCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ScreeningCreateWithoutTicketsInput, ScreeningUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutTicketsInput
    connect?: ScreeningWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type ChairCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ChairCreateWithoutTicketsInput, ChairUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ChairCreateOrConnectWithoutTicketsInput
    connect?: ChairWhereUniqueInput
  }

  export type Ticket_typeUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<Ticket_typeCreateWithoutTicketsInput, Ticket_typeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Ticket_typeCreateOrConnectWithoutTicketsInput
    upsert?: Ticket_typeUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: Ticket_typeWhereInput | boolean
    connect?: Ticket_typeWhereUniqueInput
    update?: XOR<XOR<Ticket_typeUpdateToOneWithWhereWithoutTicketsInput, Ticket_typeUpdateWithoutTicketsInput>, Ticket_typeUncheckedUpdateWithoutTicketsInput>
  }

  export type Screening_typeUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<Screening_typeCreateWithoutTicketsInput, Screening_typeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Screening_typeCreateOrConnectWithoutTicketsInput
    upsert?: Screening_typeUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: Screening_typeWhereInput | boolean
    connect?: Screening_typeWhereUniqueInput
    update?: XOR<XOR<Screening_typeUpdateToOneWithWhereWithoutTicketsInput, Screening_typeUpdateWithoutTicketsInput>, Screening_typeUncheckedUpdateWithoutTicketsInput>
  }

  export type ScreeningUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<ScreeningCreateWithoutTicketsInput, ScreeningUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutTicketsInput
    upsert?: ScreeningUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: ScreeningWhereInput | boolean
    connect?: ScreeningWhereUniqueInput
    update?: XOR<XOR<ScreeningUpdateToOneWithWhereWithoutTicketsInput, ScreeningUpdateWithoutTicketsInput>, ScreeningUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type ChairUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<ChairCreateWithoutTicketsInput, ChairUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ChairCreateOrConnectWithoutTicketsInput
    upsert?: ChairUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: ChairWhereInput | boolean
    connect?: ChairWhereUniqueInput
    update?: XOR<XOR<ChairUpdateToOneWithWhereWithoutTicketsInput, ChairUpdateWithoutTicketsInput>, ChairUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput> | TicketCreateWithoutTicket_typesInput[] | TicketUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicket_typesInput | TicketCreateOrConnectWithoutTicket_typesInput[]
    createMany?: TicketCreateManyTicket_typesInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Payment_sessionCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput> | Payment_sessionCreateWithoutTicket_typesInput[] | Payment_sessionUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutTicket_typesInput | Payment_sessionCreateOrConnectWithoutTicket_typesInput[]
    createMany?: Payment_sessionCreateManyTicket_typesInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput> | TicketCreateWithoutTicket_typesInput[] | TicketUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicket_typesInput | TicketCreateOrConnectWithoutTicket_typesInput[]
    createMany?: TicketCreateManyTicket_typesInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Payment_sessionUncheckedCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput> | Payment_sessionCreateWithoutTicket_typesInput[] | Payment_sessionUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutTicket_typesInput | Payment_sessionCreateOrConnectWithoutTicket_typesInput[]
    createMany?: Payment_sessionCreateManyTicket_typesInputEnvelope
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput> | TicketCreateWithoutTicket_typesInput[] | TicketUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicket_typesInput | TicketCreateOrConnectWithoutTicket_typesInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicket_typesInput | TicketUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: TicketCreateManyTicket_typesInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicket_typesInput | TicketUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicket_typesInput | TicketUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Payment_sessionUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput> | Payment_sessionCreateWithoutTicket_typesInput[] | Payment_sessionUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutTicket_typesInput | Payment_sessionCreateOrConnectWithoutTicket_typesInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutTicket_typesInput | Payment_sessionUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: Payment_sessionCreateManyTicket_typesInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutTicket_typesInput | Payment_sessionUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutTicket_typesInput | Payment_sessionUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput> | TicketCreateWithoutTicket_typesInput[] | TicketUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicket_typesInput | TicketCreateOrConnectWithoutTicket_typesInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicket_typesInput | TicketUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: TicketCreateManyTicket_typesInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicket_typesInput | TicketUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicket_typesInput | TicketUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Payment_sessionUncheckedUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput> | Payment_sessionCreateWithoutTicket_typesInput[] | Payment_sessionUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: Payment_sessionCreateOrConnectWithoutTicket_typesInput | Payment_sessionCreateOrConnectWithoutTicket_typesInput[]
    upsert?: Payment_sessionUpsertWithWhereUniqueWithoutTicket_typesInput | Payment_sessionUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: Payment_sessionCreateManyTicket_typesInputEnvelope
    set?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    disconnect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    delete?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    connect?: Payment_sessionWhereUniqueInput | Payment_sessionWhereUniqueInput[]
    update?: Payment_sessionUpdateWithWhereUniqueWithoutTicket_typesInput | Payment_sessionUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: Payment_sessionUpdateManyWithWhereWithoutTicket_typesInput | Payment_sessionUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutScreening_typesInput = {
    create?: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput> | TicketCreateWithoutScreening_typesInput[] | TicketUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreening_typesInput | TicketCreateOrConnectWithoutScreening_typesInput[]
    createMany?: TicketCreateManyScreening_typesInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ScreeningCreateNestedManyWithoutScreening_typesInput = {
    create?: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput> | ScreeningCreateWithoutScreening_typesInput[] | ScreeningUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutScreening_typesInput | ScreeningCreateOrConnectWithoutScreening_typesInput[]
    createMany?: ScreeningCreateManyScreening_typesInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutScreening_typesInput = {
    create?: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput> | TicketCreateWithoutScreening_typesInput[] | TicketUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreening_typesInput | TicketCreateOrConnectWithoutScreening_typesInput[]
    createMany?: TicketCreateManyScreening_typesInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ScreeningUncheckedCreateNestedManyWithoutScreening_typesInput = {
    create?: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput> | ScreeningCreateWithoutScreening_typesInput[] | ScreeningUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutScreening_typesInput | ScreeningCreateOrConnectWithoutScreening_typesInput[]
    createMany?: ScreeningCreateManyScreening_typesInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutScreening_typesNestedInput = {
    create?: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput> | TicketCreateWithoutScreening_typesInput[] | TicketUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreening_typesInput | TicketCreateOrConnectWithoutScreening_typesInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScreening_typesInput | TicketUpsertWithWhereUniqueWithoutScreening_typesInput[]
    createMany?: TicketCreateManyScreening_typesInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScreening_typesInput | TicketUpdateWithWhereUniqueWithoutScreening_typesInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScreening_typesInput | TicketUpdateManyWithWhereWithoutScreening_typesInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ScreeningUpdateManyWithoutScreening_typesNestedInput = {
    create?: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput> | ScreeningCreateWithoutScreening_typesInput[] | ScreeningUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutScreening_typesInput | ScreeningCreateOrConnectWithoutScreening_typesInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutScreening_typesInput | ScreeningUpsertWithWhereUniqueWithoutScreening_typesInput[]
    createMany?: ScreeningCreateManyScreening_typesInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutScreening_typesInput | ScreeningUpdateWithWhereUniqueWithoutScreening_typesInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutScreening_typesInput | ScreeningUpdateManyWithWhereWithoutScreening_typesInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutScreening_typesNestedInput = {
    create?: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput> | TicketCreateWithoutScreening_typesInput[] | TicketUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScreening_typesInput | TicketCreateOrConnectWithoutScreening_typesInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScreening_typesInput | TicketUpsertWithWhereUniqueWithoutScreening_typesInput[]
    createMany?: TicketCreateManyScreening_typesInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScreening_typesInput | TicketUpdateWithWhereUniqueWithoutScreening_typesInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScreening_typesInput | TicketUpdateManyWithWhereWithoutScreening_typesInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ScreeningUncheckedUpdateManyWithoutScreening_typesNestedInput = {
    create?: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput> | ScreeningCreateWithoutScreening_typesInput[] | ScreeningUncheckedCreateWithoutScreening_typesInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutScreening_typesInput | ScreeningCreateOrConnectWithoutScreening_typesInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutScreening_typesInput | ScreeningUpsertWithWhereUniqueWithoutScreening_typesInput[]
    createMany?: ScreeningCreateManyScreening_typesInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutScreening_typesInput | ScreeningUpdateWithWhereUniqueWithoutScreening_typesInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutScreening_typesInput | ScreeningUpdateManyWithWhereWithoutScreening_typesInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type Ticket_typeCreateNestedOneWithoutPayment_sessionsInput = {
    create?: XOR<Ticket_typeCreateWithoutPayment_sessionsInput, Ticket_typeUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: Ticket_typeCreateOrConnectWithoutPayment_sessionsInput
    connect?: Ticket_typeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPayment_sessionsInput = {
    create?: XOR<UserCreateWithoutPayment_sessionsInput, UserUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_sessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ScreeningCreateNestedOneWithoutPayment_sessionsInput = {
    create?: XOR<ScreeningCreateWithoutPayment_sessionsInput, ScreeningUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutPayment_sessionsInput
    connect?: ScreeningWhereUniqueInput
  }

  export type Ticket_typeUpdateOneWithoutPayment_sessionsNestedInput = {
    create?: XOR<Ticket_typeCreateWithoutPayment_sessionsInput, Ticket_typeUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: Ticket_typeCreateOrConnectWithoutPayment_sessionsInput
    upsert?: Ticket_typeUpsertWithoutPayment_sessionsInput
    disconnect?: boolean
    delete?: Ticket_typeWhereInput | boolean
    connect?: Ticket_typeWhereUniqueInput
    update?: XOR<XOR<Ticket_typeUpdateToOneWithWhereWithoutPayment_sessionsInput, Ticket_typeUpdateWithoutPayment_sessionsInput>, Ticket_typeUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type UserUpdateOneRequiredWithoutPayment_sessionsNestedInput = {
    create?: XOR<UserCreateWithoutPayment_sessionsInput, UserUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_sessionsInput
    upsert?: UserUpsertWithoutPayment_sessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayment_sessionsInput, UserUpdateWithoutPayment_sessionsInput>, UserUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type ScreeningUpdateOneRequiredWithoutPayment_sessionsNestedInput = {
    create?: XOR<ScreeningCreateWithoutPayment_sessionsInput, ScreeningUncheckedCreateWithoutPayment_sessionsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutPayment_sessionsInput
    upsert?: ScreeningUpsertWithoutPayment_sessionsInput
    connect?: ScreeningWhereUniqueInput
    update?: XOR<XOR<ScreeningUpdateToOneWithWhereWithoutPayment_sessionsInput, ScreeningUpdateWithoutPayment_sessionsInput>, ScreeningUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type UserCreateNestedOneWithoutCouponsInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    connect?: UserWhereUniqueInput
  }

  export type DiscountCreateNestedOneWithoutCouponsInput = {
    create?: XOR<DiscountCreateWithoutCouponsInput, DiscountUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutCouponsInput
    connect?: DiscountWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    upsert?: UserUpsertWithoutCouponsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponsInput, UserUpdateWithoutCouponsInput>, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type DiscountUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<DiscountCreateWithoutCouponsInput, DiscountUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutCouponsInput
    upsert?: DiscountUpsertWithoutCouponsInput
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutCouponsInput, DiscountUpdateWithoutCouponsInput>, DiscountUncheckedUpdateWithoutCouponsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type ScreeningCreateWithoutMoviesInput = {
    id?: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionCreateNestedManyWithoutScreeningsInput
    tickets?: TicketCreateNestedManyWithoutScreeningsInput
    halls?: HallCreateNestedOneWithoutScreeningsInput
    screening_types?: Screening_typeCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutMoviesInput = {
    id?: string
    hall_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningCreateOrConnectWithoutMoviesInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput>
  }

  export type ScreeningCreateManyMoviesInputEnvelope = {
    data: ScreeningCreateManyMoviesInput | ScreeningCreateManyMoviesInput[]
  }

  export type ForumCreateWithoutMoviesInput = {
    id?: string
    review: number
    comment: string
    users?: UserCreateNestedOneWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutMoviesInput = {
    id?: string
    review: number
    comment: string
    user_id: string
  }

  export type ForumCreateOrConnectWithoutMoviesInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput>
  }

  export type ForumCreateManyMoviesInputEnvelope = {
    data: ForumCreateManyMoviesInput | ForumCreateManyMoviesInput[]
  }

  export type ScreeningUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ScreeningWhereUniqueInput
    update: XOR<ScreeningUpdateWithoutMoviesInput, ScreeningUncheckedUpdateWithoutMoviesInput>
    create: XOR<ScreeningCreateWithoutMoviesInput, ScreeningUncheckedCreateWithoutMoviesInput>
  }

  export type ScreeningUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ScreeningWhereUniqueInput
    data: XOR<ScreeningUpdateWithoutMoviesInput, ScreeningUncheckedUpdateWithoutMoviesInput>
  }

  export type ScreeningUpdateManyWithWhereWithoutMoviesInput = {
    where: ScreeningScalarWhereInput
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyWithoutMoviesInput>
  }

  export type ScreeningScalarWhereInput = {
    AND?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
    OR?: ScreeningScalarWhereInput[]
    NOT?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
    id?: StringFilter<"Screening"> | string
    hall_id?: StringFilter<"Screening"> | string
    movie_id?: StringFilter<"Screening"> | string
    start?: DateTimeFilter<"Screening"> | Date | string
    end?: DateTimeFilter<"Screening"> | Date | string
    screening_type_id?: StringFilter<"Screening"> | string
  }

  export type ForumUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ForumWhereUniqueInput
    update: XOR<ForumUpdateWithoutMoviesInput, ForumUncheckedUpdateWithoutMoviesInput>
    create: XOR<ForumCreateWithoutMoviesInput, ForumUncheckedCreateWithoutMoviesInput>
  }

  export type ForumUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ForumWhereUniqueInput
    data: XOR<ForumUpdateWithoutMoviesInput, ForumUncheckedUpdateWithoutMoviesInput>
  }

  export type ForumUpdateManyWithWhereWithoutMoviesInput = {
    where: ForumScalarWhereInput
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyWithoutMoviesInput>
  }

  export type ForumScalarWhereInput = {
    AND?: ForumScalarWhereInput | ForumScalarWhereInput[]
    OR?: ForumScalarWhereInput[]
    NOT?: ForumScalarWhereInput | ForumScalarWhereInput[]
    id?: StringFilter<"Forum"> | string
    review?: FloatFilter<"Forum"> | number
    comment?: StringFilter<"Forum"> | string
    user_id?: StringFilter<"Forum"> | string
    movie_id?: StringFilter<"Forum"> | string
  }

  export type Payment_sessionCreateWithoutScreeningsInput = {
    id?: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_types?: Ticket_typeCreateNestedOneWithoutPayment_sessionsInput
    users: UserCreateNestedOneWithoutPayment_sessionsInput
  }

  export type Payment_sessionUncheckedCreateWithoutScreeningsInput = {
    id?: string
    user_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type Payment_sessionCreateOrConnectWithoutScreeningsInput = {
    where: Payment_sessionWhereUniqueInput
    create: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput>
  }

  export type Payment_sessionCreateManyScreeningsInputEnvelope = {
    data: Payment_sessionCreateManyScreeningsInput | Payment_sessionCreateManyScreeningsInput[]
  }

  export type TicketCreateWithoutScreeningsInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    ticket_types?: Ticket_typeCreateNestedOneWithoutTicketsInput
    screening_types?: Screening_typeCreateNestedOneWithoutTicketsInput
    users?: UserCreateNestedOneWithoutTicketsInput
    chairs?: ChairCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutScreeningsInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutScreeningsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput>
  }

  export type TicketCreateManyScreeningsInputEnvelope = {
    data: TicketCreateManyScreeningsInput | TicketCreateManyScreeningsInput[]
  }

  export type MovieCreateWithoutScreeningsInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    forum?: ForumCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutScreeningsInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    forum?: ForumUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutScreeningsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
  }

  export type HallCreateWithoutScreeningsInput = {
    id?: string
    name: string
    row: number
    column: number
    chairs?: ChairCreateNestedManyWithoutHallsInput
  }

  export type HallUncheckedCreateWithoutScreeningsInput = {
    id?: string
    name: string
    row: number
    column: number
    chairs?: ChairUncheckedCreateNestedManyWithoutHallsInput
  }

  export type HallCreateOrConnectWithoutScreeningsInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
  }

  export type Screening_typeCreateWithoutScreeningsInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeUncheckedCreateWithoutScreeningsInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketUncheckedCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeCreateOrConnectWithoutScreeningsInput = {
    where: Screening_typeWhereUniqueInput
    create: XOR<Screening_typeCreateWithoutScreeningsInput, Screening_typeUncheckedCreateWithoutScreeningsInput>
  }

  export type Payment_sessionUpsertWithWhereUniqueWithoutScreeningsInput = {
    where: Payment_sessionWhereUniqueInput
    update: XOR<Payment_sessionUpdateWithoutScreeningsInput, Payment_sessionUncheckedUpdateWithoutScreeningsInput>
    create: XOR<Payment_sessionCreateWithoutScreeningsInput, Payment_sessionUncheckedCreateWithoutScreeningsInput>
  }

  export type Payment_sessionUpdateWithWhereUniqueWithoutScreeningsInput = {
    where: Payment_sessionWhereUniqueInput
    data: XOR<Payment_sessionUpdateWithoutScreeningsInput, Payment_sessionUncheckedUpdateWithoutScreeningsInput>
  }

  export type Payment_sessionUpdateManyWithWhereWithoutScreeningsInput = {
    where: Payment_sessionScalarWhereInput
    data: XOR<Payment_sessionUpdateManyMutationInput, Payment_sessionUncheckedUpdateManyWithoutScreeningsInput>
  }

  export type Payment_sessionScalarWhereInput = {
    AND?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
    OR?: Payment_sessionScalarWhereInput[]
    NOT?: Payment_sessionScalarWhereInput | Payment_sessionScalarWhereInput[]
    id?: StringFilter<"Payment_session"> | string
    user_id?: StringFilter<"Payment_session"> | string
    screening_id?: StringFilter<"Payment_session"> | string
    chair_ids?: JsonFilter<"Payment_session">
    status?: StringFilter<"Payment_session"> | string
    createdAt?: DateTimeFilter<"Payment_session"> | Date | string
    ticket_type_id?: StringNullableFilter<"Payment_session"> | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutScreeningsInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutScreeningsInput, TicketUncheckedUpdateWithoutScreeningsInput>
    create: XOR<TicketCreateWithoutScreeningsInput, TicketUncheckedCreateWithoutScreeningsInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutScreeningsInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutScreeningsInput, TicketUncheckedUpdateWithoutScreeningsInput>
  }

  export type TicketUpdateManyWithWhereWithoutScreeningsInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutScreeningsInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticket_type_id?: StringFilter<"Ticket"> | string
    user_id?: StringFilter<"Ticket"> | string
    screening_type_id?: StringFilter<"Ticket"> | string
    screening_id?: StringFilter<"Ticket"> | string
    chair_id?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    qr_token?: StringFilter<"Ticket"> | string
    used_at?: DateTimeNullableFilter<"Ticket"> | Date | string | null
  }

  export type MovieUpsertWithoutScreeningsInput = {
    update: XOR<MovieUpdateWithoutScreeningsInput, MovieUncheckedUpdateWithoutScreeningsInput>
    create: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutScreeningsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutScreeningsInput, MovieUncheckedUpdateWithoutScreeningsInput>
  }

  export type MovieUpdateWithoutScreeningsInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: ForumUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutScreeningsInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: ForumUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type HallUpsertWithoutScreeningsInput = {
    update: XOR<HallUpdateWithoutScreeningsInput, HallUncheckedUpdateWithoutScreeningsInput>
    create: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    where?: HallWhereInput
  }

  export type HallUpdateToOneWithWhereWithoutScreeningsInput = {
    where?: HallWhereInput
    data: XOR<HallUpdateWithoutScreeningsInput, HallUncheckedUpdateWithoutScreeningsInput>
  }

  export type HallUpdateWithoutScreeningsInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    chairs?: ChairUpdateManyWithoutHallsNestedInput
  }

  export type HallUncheckedUpdateWithoutScreeningsInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    chairs?: ChairUncheckedUpdateManyWithoutHallsNestedInput
  }

  export type Screening_typeUpsertWithoutScreeningsInput = {
    update: XOR<Screening_typeUpdateWithoutScreeningsInput, Screening_typeUncheckedUpdateWithoutScreeningsInput>
    create: XOR<Screening_typeCreateWithoutScreeningsInput, Screening_typeUncheckedCreateWithoutScreeningsInput>
    where?: Screening_typeWhereInput
  }

  export type Screening_typeUpdateToOneWithWhereWithoutScreeningsInput = {
    where?: Screening_typeWhereInput
    data: XOR<Screening_typeUpdateWithoutScreeningsInput, Screening_typeUncheckedUpdateWithoutScreeningsInput>
  }

  export type Screening_typeUpdateWithoutScreeningsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutScreening_typesNestedInput
  }

  export type Screening_typeUncheckedUpdateWithoutScreeningsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutScreening_typesNestedInput
  }

  export type RankCreateWithoutUsersInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    discount?: DiscountCreateNestedOneWithoutRanksInput
  }

  export type RankUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    discount_id?: string | null
  }

  export type RankCreateOrConnectWithoutUsersInput = {
    where: RankWhereUniqueInput
    create: XOR<RankCreateWithoutUsersInput, RankUncheckedCreateWithoutUsersInput>
  }

  export type TicketCreateWithoutUsersInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    ticket_types?: Ticket_typeCreateNestedOneWithoutTicketsInput
    screening_types?: Screening_typeCreateNestedOneWithoutTicketsInput
    screenings?: ScreeningCreateNestedOneWithoutTicketsInput
    chairs?: ChairCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutUsersInput = {
    id?: string
    ticket_type_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutUsersInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput>
  }

  export type TicketCreateManyUsersInputEnvelope = {
    data: TicketCreateManyUsersInput | TicketCreateManyUsersInput[]
  }

  export type ForumCreateWithoutUsersInput = {
    id?: string
    review: number
    comment: string
    movies?: MovieCreateNestedOneWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutUsersInput = {
    id?: string
    review: number
    comment: string
    movie_id: string
  }

  export type ForumCreateOrConnectWithoutUsersInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput>
  }

  export type ForumCreateManyUsersInputEnvelope = {
    data: ForumCreateManyUsersInput | ForumCreateManyUsersInput[]
  }

  export type Payment_sessionCreateWithoutUsersInput = {
    id?: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_types?: Ticket_typeCreateNestedOneWithoutPayment_sessionsInput
    screenings: ScreeningCreateNestedOneWithoutPayment_sessionsInput
  }

  export type Payment_sessionUncheckedCreateWithoutUsersInput = {
    id?: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type Payment_sessionCreateOrConnectWithoutUsersInput = {
    where: Payment_sessionWhereUniqueInput
    create: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput>
  }

  export type Payment_sessionCreateManyUsersInputEnvelope = {
    data: Payment_sessionCreateManyUsersInput | Payment_sessionCreateManyUsersInput[]
  }

  export type CouponCreateWithoutUsersInput = {
    id?: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
    discounts: DiscountCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateWithoutUsersInput = {
    id?: string
    discount_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type CouponCreateOrConnectWithoutUsersInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
  }

  export type CouponCreateManyUsersInputEnvelope = {
    data: CouponCreateManyUsersInput | CouponCreateManyUsersInput[]
  }

  export type RankUpsertWithoutUsersInput = {
    update: XOR<RankUpdateWithoutUsersInput, RankUncheckedUpdateWithoutUsersInput>
    create: XOR<RankCreateWithoutUsersInput, RankUncheckedCreateWithoutUsersInput>
    where?: RankWhereInput
  }

  export type RankUpdateToOneWithWhereWithoutUsersInput = {
    where?: RankWhereInput
    data: XOR<RankUpdateWithoutUsersInput, RankUncheckedUpdateWithoutUsersInput>
  }

  export type RankUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discount?: DiscountUpdateOneWithoutRanksNestedInput
  }

  export type RankUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discount_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutUsersInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUsersInput, TicketUncheckedUpdateWithoutUsersInput>
    create: XOR<TicketCreateWithoutUsersInput, TicketUncheckedCreateWithoutUsersInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUsersInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUsersInput, TicketUncheckedUpdateWithoutUsersInput>
  }

  export type TicketUpdateManyWithWhereWithoutUsersInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUsersInput>
  }

  export type ForumUpsertWithWhereUniqueWithoutUsersInput = {
    where: ForumWhereUniqueInput
    update: XOR<ForumUpdateWithoutUsersInput, ForumUncheckedUpdateWithoutUsersInput>
    create: XOR<ForumCreateWithoutUsersInput, ForumUncheckedCreateWithoutUsersInput>
  }

  export type ForumUpdateWithWhereUniqueWithoutUsersInput = {
    where: ForumWhereUniqueInput
    data: XOR<ForumUpdateWithoutUsersInput, ForumUncheckedUpdateWithoutUsersInput>
  }

  export type ForumUpdateManyWithWhereWithoutUsersInput = {
    where: ForumScalarWhereInput
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyWithoutUsersInput>
  }

  export type Payment_sessionUpsertWithWhereUniqueWithoutUsersInput = {
    where: Payment_sessionWhereUniqueInput
    update: XOR<Payment_sessionUpdateWithoutUsersInput, Payment_sessionUncheckedUpdateWithoutUsersInput>
    create: XOR<Payment_sessionCreateWithoutUsersInput, Payment_sessionUncheckedCreateWithoutUsersInput>
  }

  export type Payment_sessionUpdateWithWhereUniqueWithoutUsersInput = {
    where: Payment_sessionWhereUniqueInput
    data: XOR<Payment_sessionUpdateWithoutUsersInput, Payment_sessionUncheckedUpdateWithoutUsersInput>
  }

  export type Payment_sessionUpdateManyWithWhereWithoutUsersInput = {
    where: Payment_sessionScalarWhereInput
    data: XOR<Payment_sessionUpdateManyMutationInput, Payment_sessionUncheckedUpdateManyWithoutUsersInput>
  }

  export type CouponUpsertWithWhereUniqueWithoutUsersInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutUsersInput, CouponUncheckedUpdateWithoutUsersInput>
    create: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutUsersInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutUsersInput, CouponUncheckedUpdateWithoutUsersInput>
  }

  export type CouponUpdateManyWithWhereWithoutUsersInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutUsersInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    id?: StringFilter<"Coupon"> | string
    user_id?: StringFilter<"Coupon"> | string
    discount_id?: StringFilter<"Coupon"> | string
    qr_token?: StringFilter<"Coupon"> | string
    used?: BoolFilter<"Coupon"> | boolean
    created_at?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type TicketCreateWithoutChairsInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    ticket_types?: Ticket_typeCreateNestedOneWithoutTicketsInput
    screening_types?: Screening_typeCreateNestedOneWithoutTicketsInput
    screenings?: ScreeningCreateNestedOneWithoutTicketsInput
    users?: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutChairsInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    screening_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutChairsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput>
  }

  export type TicketCreateManyChairsInputEnvelope = {
    data: TicketCreateManyChairsInput | TicketCreateManyChairsInput[]
  }

  export type HallCreateWithoutChairsInput = {
    id?: string
    name: string
    row: number
    column: number
    screenings?: ScreeningCreateNestedManyWithoutHallsInput
  }

  export type HallUncheckedCreateWithoutChairsInput = {
    id?: string
    name: string
    row: number
    column: number
    screenings?: ScreeningUncheckedCreateNestedManyWithoutHallsInput
  }

  export type HallCreateOrConnectWithoutChairsInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutChairsInput, HallUncheckedCreateWithoutChairsInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutChairsInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutChairsInput, TicketUncheckedUpdateWithoutChairsInput>
    create: XOR<TicketCreateWithoutChairsInput, TicketUncheckedCreateWithoutChairsInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutChairsInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutChairsInput, TicketUncheckedUpdateWithoutChairsInput>
  }

  export type TicketUpdateManyWithWhereWithoutChairsInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutChairsInput>
  }

  export type HallUpsertWithoutChairsInput = {
    update: XOR<HallUpdateWithoutChairsInput, HallUncheckedUpdateWithoutChairsInput>
    create: XOR<HallCreateWithoutChairsInput, HallUncheckedCreateWithoutChairsInput>
    where?: HallWhereInput
  }

  export type HallUpdateToOneWithWhereWithoutChairsInput = {
    where?: HallWhereInput
    data: XOR<HallUpdateWithoutChairsInput, HallUncheckedUpdateWithoutChairsInput>
  }

  export type HallUpdateWithoutChairsInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUpdateManyWithoutHallsNestedInput
  }

  export type HallUncheckedUpdateWithoutChairsInput = {
    name?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUncheckedUpdateManyWithoutHallsNestedInput
  }

  export type DiscountCreateWithoutRanksInput = {
    id?: string
    name: string
    image: string
    percent: number
    coupons?: CouponCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUncheckedCreateWithoutRanksInput = {
    id?: string
    name: string
    image: string
    percent: number
    coupons?: CouponUncheckedCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountCreateOrConnectWithoutRanksInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutRanksInput, DiscountUncheckedCreateWithoutRanksInput>
  }

  export type UserCreateWithoutRanksInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    tickets?: TicketCreateNestedManyWithoutUsersInput
    forum?: ForumCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutUsersInput
    coupons?: CouponCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRanksInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutUsersInput
    forum?: ForumUncheckedCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutUsersInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutRanksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput>
  }

  export type UserCreateManyRanksInputEnvelope = {
    data: UserCreateManyRanksInput | UserCreateManyRanksInput[]
  }

  export type DiscountUpsertWithoutRanksInput = {
    update: XOR<DiscountUpdateWithoutRanksInput, DiscountUncheckedUpdateWithoutRanksInput>
    create: XOR<DiscountCreateWithoutRanksInput, DiscountUncheckedCreateWithoutRanksInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutRanksInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutRanksInput, DiscountUncheckedUpdateWithoutRanksInput>
  }

  export type DiscountUpdateWithoutRanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    coupons?: CouponUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountUncheckedUpdateWithoutRanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    coupons?: CouponUncheckedUpdateManyWithoutDiscountsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRanksInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRanksInput, UserUncheckedUpdateWithoutRanksInput>
    create: XOR<UserCreateWithoutRanksInput, UserUncheckedCreateWithoutRanksInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRanksInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRanksInput, UserUncheckedUpdateWithoutRanksInput>
  }

  export type UserUpdateManyWithWhereWithoutRanksInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRanksInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    phone_number?: StringFilter<"User"> | string
    profile_image?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    email_verified?: BoolFilter<"User"> | boolean
    email_code?: StringNullableFilter<"User"> | string | null
    email_code_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    password_reset_exp?: DateTimeNullableFilter<"User"> | Date | string | null
    rank_id?: StringFilter<"User"> | string
  }

  export type RankCreateWithoutDiscountInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    users?: UserCreateNestedManyWithoutRanksInput
  }

  export type RankUncheckedCreateWithoutDiscountInput = {
    id?: string
    name: string
    point_limit: number
    image: string
    users?: UserUncheckedCreateNestedManyWithoutRanksInput
  }

  export type RankCreateOrConnectWithoutDiscountInput = {
    where: RankWhereUniqueInput
    create: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput>
  }

  export type RankCreateManyDiscountInputEnvelope = {
    data: RankCreateManyDiscountInput | RankCreateManyDiscountInput[]
  }

  export type CouponCreateWithoutDiscountsInput = {
    id?: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
    users: UserCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateWithoutDiscountsInput = {
    id?: string
    user_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type CouponCreateOrConnectWithoutDiscountsInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput>
  }

  export type CouponCreateManyDiscountsInputEnvelope = {
    data: CouponCreateManyDiscountsInput | CouponCreateManyDiscountsInput[]
  }

  export type RankUpsertWithWhereUniqueWithoutDiscountInput = {
    where: RankWhereUniqueInput
    update: XOR<RankUpdateWithoutDiscountInput, RankUncheckedUpdateWithoutDiscountInput>
    create: XOR<RankCreateWithoutDiscountInput, RankUncheckedCreateWithoutDiscountInput>
  }

  export type RankUpdateWithWhereUniqueWithoutDiscountInput = {
    where: RankWhereUniqueInput
    data: XOR<RankUpdateWithoutDiscountInput, RankUncheckedUpdateWithoutDiscountInput>
  }

  export type RankUpdateManyWithWhereWithoutDiscountInput = {
    where: RankScalarWhereInput
    data: XOR<RankUpdateManyMutationInput, RankUncheckedUpdateManyWithoutDiscountInput>
  }

  export type RankScalarWhereInput = {
    AND?: RankScalarWhereInput | RankScalarWhereInput[]
    OR?: RankScalarWhereInput[]
    NOT?: RankScalarWhereInput | RankScalarWhereInput[]
    id?: StringFilter<"Rank"> | string
    name?: StringFilter<"Rank"> | string
    point_limit?: IntFilter<"Rank"> | number
    image?: StringFilter<"Rank"> | string
    discount_id?: StringNullableFilter<"Rank"> | string | null
  }

  export type CouponUpsertWithWhereUniqueWithoutDiscountsInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutDiscountsInput, CouponUncheckedUpdateWithoutDiscountsInput>
    create: XOR<CouponCreateWithoutDiscountsInput, CouponUncheckedCreateWithoutDiscountsInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutDiscountsInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutDiscountsInput, CouponUncheckedUpdateWithoutDiscountsInput>
  }

  export type CouponUpdateManyWithWhereWithoutDiscountsInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutDiscountsInput>
  }

  export type ScreeningCreateWithoutHallsInput = {
    id?: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionCreateNestedManyWithoutScreeningsInput
    tickets?: TicketCreateNestedManyWithoutScreeningsInput
    movies?: MovieCreateNestedOneWithoutScreeningsInput
    screening_types?: Screening_typeCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutHallsInput = {
    id?: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningCreateOrConnectWithoutHallsInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput>
  }

  export type ScreeningCreateManyHallsInputEnvelope = {
    data: ScreeningCreateManyHallsInput | ScreeningCreateManyHallsInput[]
  }

  export type ChairCreateWithoutHallsInput = {
    id?: string
    row: number
    column: number
    tickets?: TicketCreateNestedManyWithoutChairsInput
  }

  export type ChairUncheckedCreateWithoutHallsInput = {
    id?: string
    row: number
    column: number
    tickets?: TicketUncheckedCreateNestedManyWithoutChairsInput
  }

  export type ChairCreateOrConnectWithoutHallsInput = {
    where: ChairWhereUniqueInput
    create: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput>
  }

  export type ChairCreateManyHallsInputEnvelope = {
    data: ChairCreateManyHallsInput | ChairCreateManyHallsInput[]
  }

  export type ScreeningUpsertWithWhereUniqueWithoutHallsInput = {
    where: ScreeningWhereUniqueInput
    update: XOR<ScreeningUpdateWithoutHallsInput, ScreeningUncheckedUpdateWithoutHallsInput>
    create: XOR<ScreeningCreateWithoutHallsInput, ScreeningUncheckedCreateWithoutHallsInput>
  }

  export type ScreeningUpdateWithWhereUniqueWithoutHallsInput = {
    where: ScreeningWhereUniqueInput
    data: XOR<ScreeningUpdateWithoutHallsInput, ScreeningUncheckedUpdateWithoutHallsInput>
  }

  export type ScreeningUpdateManyWithWhereWithoutHallsInput = {
    where: ScreeningScalarWhereInput
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyWithoutHallsInput>
  }

  export type ChairUpsertWithWhereUniqueWithoutHallsInput = {
    where: ChairWhereUniqueInput
    update: XOR<ChairUpdateWithoutHallsInput, ChairUncheckedUpdateWithoutHallsInput>
    create: XOR<ChairCreateWithoutHallsInput, ChairUncheckedCreateWithoutHallsInput>
  }

  export type ChairUpdateWithWhereUniqueWithoutHallsInput = {
    where: ChairWhereUniqueInput
    data: XOR<ChairUpdateWithoutHallsInput, ChairUncheckedUpdateWithoutHallsInput>
  }

  export type ChairUpdateManyWithWhereWithoutHallsInput = {
    where: ChairScalarWhereInput
    data: XOR<ChairUpdateManyMutationInput, ChairUncheckedUpdateManyWithoutHallsInput>
  }

  export type ChairScalarWhereInput = {
    AND?: ChairScalarWhereInput | ChairScalarWhereInput[]
    OR?: ChairScalarWhereInput[]
    NOT?: ChairScalarWhereInput | ChairScalarWhereInput[]
    id?: StringFilter<"Chair"> | string
    row?: IntFilter<"Chair"> | number
    column?: IntFilter<"Chair"> | number
    hall_id?: StringFilter<"Chair"> | string
  }

  export type UserCreateWithoutForumInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    ranks?: RankCreateNestedOneWithoutUsersInput
    tickets?: TicketCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutUsersInput
    coupons?: CouponCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutForumInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutUsersInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutForumInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
  }

  export type MovieCreateWithoutForumInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    screenings?: ScreeningCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutForumInput = {
    id?: string
    title: string
    director: string
    actors: string
    playtime: number
    language: string
    trailer: string
    poster: string
    backdrop?: string | null
    onscreen: boolean
    genre: string
    review?: number | null
    description?: string | null
    screenings?: ScreeningUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutForumInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutForumInput, MovieUncheckedCreateWithoutForumInput>
  }

  export type UserUpsertWithoutForumInput = {
    update: XOR<UserUpdateWithoutForumInput, UserUncheckedUpdateWithoutForumInput>
    create: XOR<UserCreateWithoutForumInput, UserUncheckedCreateWithoutForumInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumInput, UserUncheckedUpdateWithoutForumInput>
  }

  export type UserUpdateWithoutForumInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ranks?: RankUpdateOneWithoutUsersNestedInput
    tickets?: TicketUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutUsersNestedInput
    coupons?: CouponUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutForumInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MovieUpsertWithoutForumInput = {
    update: XOR<MovieUpdateWithoutForumInput, MovieUncheckedUpdateWithoutForumInput>
    create: XOR<MovieCreateWithoutForumInput, MovieUncheckedCreateWithoutForumInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutForumInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutForumInput, MovieUncheckedUpdateWithoutForumInput>
  }

  export type MovieUpdateWithoutForumInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    screenings?: ScreeningUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutForumInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
    playtime?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    trailer?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    onscreen?: BoolFieldUpdateOperationsInput | boolean
    genre?: StringFieldUpdateOperationsInput | string
    review?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    screenings?: ScreeningUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type Ticket_typeCreateWithoutTicketsInput = {
    id?: string
    type: string
    percent: number
    payment_sessions?: Payment_sessionCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeUncheckedCreateWithoutTicketsInput = {
    id?: string
    type: string
    percent: number
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeCreateOrConnectWithoutTicketsInput = {
    where: Ticket_typeWhereUniqueInput
    create: XOR<Ticket_typeCreateWithoutTicketsInput, Ticket_typeUncheckedCreateWithoutTicketsInput>
  }

  export type Screening_typeCreateWithoutTicketsInput = {
    id?: string
    type: string
    percent: number
    screenings?: ScreeningCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeUncheckedCreateWithoutTicketsInput = {
    id?: string
    type: string
    percent: number
    screenings?: ScreeningUncheckedCreateNestedManyWithoutScreening_typesInput
  }

  export type Screening_typeCreateOrConnectWithoutTicketsInput = {
    where: Screening_typeWhereUniqueInput
    create: XOR<Screening_typeCreateWithoutTicketsInput, Screening_typeUncheckedCreateWithoutTicketsInput>
  }

  export type ScreeningCreateWithoutTicketsInput = {
    id?: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionCreateNestedManyWithoutScreeningsInput
    movies?: MovieCreateNestedOneWithoutScreeningsInput
    halls?: HallCreateNestedOneWithoutScreeningsInput
    screening_types?: Screening_typeCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutTicketsInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningCreateOrConnectWithoutTicketsInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutTicketsInput, ScreeningUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    ranks?: RankCreateNestedOneWithoutUsersInput
    forum?: ForumCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutUsersInput
    coupons?: CouponCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
    forum?: ForumUncheckedCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutUsersInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type ChairCreateWithoutTicketsInput = {
    id?: string
    row: number
    column: number
    halls?: HallCreateNestedOneWithoutChairsInput
  }

  export type ChairUncheckedCreateWithoutTicketsInput = {
    id?: string
    row: number
    column: number
    hall_id: string
  }

  export type ChairCreateOrConnectWithoutTicketsInput = {
    where: ChairWhereUniqueInput
    create: XOR<ChairCreateWithoutTicketsInput, ChairUncheckedCreateWithoutTicketsInput>
  }

  export type Ticket_typeUpsertWithoutTicketsInput = {
    update: XOR<Ticket_typeUpdateWithoutTicketsInput, Ticket_typeUncheckedUpdateWithoutTicketsInput>
    create: XOR<Ticket_typeCreateWithoutTicketsInput, Ticket_typeUncheckedCreateWithoutTicketsInput>
    where?: Ticket_typeWhereInput
  }

  export type Ticket_typeUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Ticket_typeWhereInput
    data: XOR<Ticket_typeUpdateWithoutTicketsInput, Ticket_typeUncheckedUpdateWithoutTicketsInput>
  }

  export type Ticket_typeUpdateWithoutTicketsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    payment_sessions?: Payment_sessionUpdateManyWithoutTicket_typesNestedInput
  }

  export type Ticket_typeUncheckedUpdateWithoutTicketsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutTicket_typesNestedInput
  }

  export type Screening_typeUpsertWithoutTicketsInput = {
    update: XOR<Screening_typeUpdateWithoutTicketsInput, Screening_typeUncheckedUpdateWithoutTicketsInput>
    create: XOR<Screening_typeCreateWithoutTicketsInput, Screening_typeUncheckedCreateWithoutTicketsInput>
    where?: Screening_typeWhereInput
  }

  export type Screening_typeUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Screening_typeWhereInput
    data: XOR<Screening_typeUpdateWithoutTicketsInput, Screening_typeUncheckedUpdateWithoutTicketsInput>
  }

  export type Screening_typeUpdateWithoutTicketsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUpdateManyWithoutScreening_typesNestedInput
  }

  export type Screening_typeUncheckedUpdateWithoutTicketsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    screenings?: ScreeningUncheckedUpdateManyWithoutScreening_typesNestedInput
  }

  export type ScreeningUpsertWithoutTicketsInput = {
    update: XOR<ScreeningUpdateWithoutTicketsInput, ScreeningUncheckedUpdateWithoutTicketsInput>
    create: XOR<ScreeningCreateWithoutTicketsInput, ScreeningUncheckedCreateWithoutTicketsInput>
    where?: ScreeningWhereInput
  }

  export type ScreeningUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ScreeningWhereInput
    data: XOR<ScreeningUpdateWithoutTicketsInput, ScreeningUncheckedUpdateWithoutTicketsInput>
  }

  export type ScreeningUpdateWithoutTicketsInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUpdateManyWithoutScreeningsNestedInput
    movies?: MovieUpdateOneWithoutScreeningsNestedInput
    halls?: HallUpdateOneWithoutScreeningsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutTicketsInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ranks?: RankUpdateOneWithoutUsersNestedInput
    forum?: ForumUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutUsersNestedInput
    coupons?: CouponUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
    forum?: ForumUncheckedUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ChairUpsertWithoutTicketsInput = {
    update: XOR<ChairUpdateWithoutTicketsInput, ChairUncheckedUpdateWithoutTicketsInput>
    create: XOR<ChairCreateWithoutTicketsInput, ChairUncheckedCreateWithoutTicketsInput>
    where?: ChairWhereInput
  }

  export type ChairUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ChairWhereInput
    data: XOR<ChairUpdateWithoutTicketsInput, ChairUncheckedUpdateWithoutTicketsInput>
  }

  export type ChairUpdateWithoutTicketsInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    halls?: HallUpdateOneWithoutChairsNestedInput
  }

  export type ChairUncheckedUpdateWithoutTicketsInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    hall_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateWithoutTicket_typesInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    screening_types?: Screening_typeCreateNestedOneWithoutTicketsInput
    screenings?: ScreeningCreateNestedOneWithoutTicketsInput
    users?: UserCreateNestedOneWithoutTicketsInput
    chairs?: ChairCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutTicket_typesInput = {
    id?: string
    user_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutTicket_typesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput>
  }

  export type TicketCreateManyTicket_typesInputEnvelope = {
    data: TicketCreateManyTicket_typesInput | TicketCreateManyTicket_typesInput[]
  }

  export type Payment_sessionCreateWithoutTicket_typesInput = {
    id?: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    users: UserCreateNestedOneWithoutPayment_sessionsInput
    screenings: ScreeningCreateNestedOneWithoutPayment_sessionsInput
  }

  export type Payment_sessionUncheckedCreateWithoutTicket_typesInput = {
    id?: string
    user_id: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
  }

  export type Payment_sessionCreateOrConnectWithoutTicket_typesInput = {
    where: Payment_sessionWhereUniqueInput
    create: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput>
  }

  export type Payment_sessionCreateManyTicket_typesInputEnvelope = {
    data: Payment_sessionCreateManyTicket_typesInput | Payment_sessionCreateManyTicket_typesInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutTicket_typesInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTicket_typesInput, TicketUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<TicketCreateWithoutTicket_typesInput, TicketUncheckedCreateWithoutTicket_typesInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTicket_typesInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTicket_typesInput, TicketUncheckedUpdateWithoutTicket_typesInput>
  }

  export type TicketUpdateManyWithWhereWithoutTicket_typesInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicket_typesInput>
  }

  export type Payment_sessionUpsertWithWhereUniqueWithoutTicket_typesInput = {
    where: Payment_sessionWhereUniqueInput
    update: XOR<Payment_sessionUpdateWithoutTicket_typesInput, Payment_sessionUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<Payment_sessionCreateWithoutTicket_typesInput, Payment_sessionUncheckedCreateWithoutTicket_typesInput>
  }

  export type Payment_sessionUpdateWithWhereUniqueWithoutTicket_typesInput = {
    where: Payment_sessionWhereUniqueInput
    data: XOR<Payment_sessionUpdateWithoutTicket_typesInput, Payment_sessionUncheckedUpdateWithoutTicket_typesInput>
  }

  export type Payment_sessionUpdateManyWithWhereWithoutTicket_typesInput = {
    where: Payment_sessionScalarWhereInput
    data: XOR<Payment_sessionUpdateManyMutationInput, Payment_sessionUncheckedUpdateManyWithoutTicket_typesInput>
  }

  export type TicketCreateWithoutScreening_typesInput = {
    id?: string
    price: number
    qr_token: string
    used_at?: Date | string | null
    ticket_types?: Ticket_typeCreateNestedOneWithoutTicketsInput
    screenings?: ScreeningCreateNestedOneWithoutTicketsInput
    users?: UserCreateNestedOneWithoutTicketsInput
    chairs?: ChairCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutScreening_typesInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutScreening_typesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput>
  }

  export type TicketCreateManyScreening_typesInputEnvelope = {
    data: TicketCreateManyScreening_typesInput | TicketCreateManyScreening_typesInput[]
  }

  export type ScreeningCreateWithoutScreening_typesInput = {
    id?: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionCreateNestedManyWithoutScreeningsInput
    tickets?: TicketCreateNestedManyWithoutScreeningsInput
    movies?: MovieCreateNestedOneWithoutScreeningsInput
    halls?: HallCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutScreening_typesInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutScreeningsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningCreateOrConnectWithoutScreening_typesInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput>
  }

  export type ScreeningCreateManyScreening_typesInputEnvelope = {
    data: ScreeningCreateManyScreening_typesInput | ScreeningCreateManyScreening_typesInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutScreening_typesInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutScreening_typesInput, TicketUncheckedUpdateWithoutScreening_typesInput>
    create: XOR<TicketCreateWithoutScreening_typesInput, TicketUncheckedCreateWithoutScreening_typesInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutScreening_typesInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutScreening_typesInput, TicketUncheckedUpdateWithoutScreening_typesInput>
  }

  export type TicketUpdateManyWithWhereWithoutScreening_typesInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutScreening_typesInput>
  }

  export type ScreeningUpsertWithWhereUniqueWithoutScreening_typesInput = {
    where: ScreeningWhereUniqueInput
    update: XOR<ScreeningUpdateWithoutScreening_typesInput, ScreeningUncheckedUpdateWithoutScreening_typesInput>
    create: XOR<ScreeningCreateWithoutScreening_typesInput, ScreeningUncheckedCreateWithoutScreening_typesInput>
  }

  export type ScreeningUpdateWithWhereUniqueWithoutScreening_typesInput = {
    where: ScreeningWhereUniqueInput
    data: XOR<ScreeningUpdateWithoutScreening_typesInput, ScreeningUncheckedUpdateWithoutScreening_typesInput>
  }

  export type ScreeningUpdateManyWithWhereWithoutScreening_typesInput = {
    where: ScreeningScalarWhereInput
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyWithoutScreening_typesInput>
  }

  export type Ticket_typeCreateWithoutPayment_sessionsInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeUncheckedCreateWithoutPayment_sessionsInput = {
    id?: string
    type: string
    percent: number
    tickets?: TicketUncheckedCreateNestedManyWithoutTicket_typesInput
  }

  export type Ticket_typeCreateOrConnectWithoutPayment_sessionsInput = {
    where: Ticket_typeWhereUniqueInput
    create: XOR<Ticket_typeCreateWithoutPayment_sessionsInput, Ticket_typeUncheckedCreateWithoutPayment_sessionsInput>
  }

  export type UserCreateWithoutPayment_sessionsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    ranks?: RankCreateNestedOneWithoutUsersInput
    tickets?: TicketCreateNestedManyWithoutUsersInput
    forum?: ForumCreateNestedManyWithoutUsersInput
    coupons?: CouponCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPayment_sessionsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUsersInput
    forum?: ForumUncheckedCreateNestedManyWithoutUsersInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPayment_sessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayment_sessionsInput, UserUncheckedCreateWithoutPayment_sessionsInput>
  }

  export type ScreeningCreateWithoutPayment_sessionsInput = {
    id?: string
    start: Date | string
    end: Date | string
    tickets?: TicketCreateNestedManyWithoutScreeningsInput
    movies?: MovieCreateNestedOneWithoutScreeningsInput
    halls?: HallCreateNestedOneWithoutScreeningsInput
    screening_types?: Screening_typeCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutPayment_sessionsInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutScreeningsInput
  }

  export type ScreeningCreateOrConnectWithoutPayment_sessionsInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutPayment_sessionsInput, ScreeningUncheckedCreateWithoutPayment_sessionsInput>
  }

  export type Ticket_typeUpsertWithoutPayment_sessionsInput = {
    update: XOR<Ticket_typeUpdateWithoutPayment_sessionsInput, Ticket_typeUncheckedUpdateWithoutPayment_sessionsInput>
    create: XOR<Ticket_typeCreateWithoutPayment_sessionsInput, Ticket_typeUncheckedCreateWithoutPayment_sessionsInput>
    where?: Ticket_typeWhereInput
  }

  export type Ticket_typeUpdateToOneWithWhereWithoutPayment_sessionsInput = {
    where?: Ticket_typeWhereInput
    data: XOR<Ticket_typeUpdateWithoutPayment_sessionsInput, Ticket_typeUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type Ticket_typeUpdateWithoutPayment_sessionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutTicket_typesNestedInput
  }

  export type Ticket_typeUncheckedUpdateWithoutPayment_sessionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutTicket_typesNestedInput
  }

  export type UserUpsertWithoutPayment_sessionsInput = {
    update: XOR<UserUpdateWithoutPayment_sessionsInput, UserUncheckedUpdateWithoutPayment_sessionsInput>
    create: XOR<UserCreateWithoutPayment_sessionsInput, UserUncheckedCreateWithoutPayment_sessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayment_sessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayment_sessionsInput, UserUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type UserUpdateWithoutPayment_sessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ranks?: RankUpdateOneWithoutUsersNestedInput
    tickets?: TicketUpdateManyWithoutUsersNestedInput
    forum?: ForumUpdateManyWithoutUsersNestedInput
    coupons?: CouponUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPayment_sessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUsersNestedInput
    forum?: ForumUncheckedUpdateManyWithoutUsersNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ScreeningUpsertWithoutPayment_sessionsInput = {
    update: XOR<ScreeningUpdateWithoutPayment_sessionsInput, ScreeningUncheckedUpdateWithoutPayment_sessionsInput>
    create: XOR<ScreeningCreateWithoutPayment_sessionsInput, ScreeningUncheckedCreateWithoutPayment_sessionsInput>
    where?: ScreeningWhereInput
  }

  export type ScreeningUpdateToOneWithWhereWithoutPayment_sessionsInput = {
    where?: ScreeningWhereInput
    data: XOR<ScreeningUpdateWithoutPayment_sessionsInput, ScreeningUncheckedUpdateWithoutPayment_sessionsInput>
  }

  export type ScreeningUpdateWithoutPayment_sessionsInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutScreeningsNestedInput
    movies?: MovieUpdateOneWithoutScreeningsNestedInput
    halls?: HallUpdateOneWithoutScreeningsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutPayment_sessionsInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type UserCreateWithoutCouponsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    ranks?: RankCreateNestedOneWithoutUsersInput
    tickets?: TicketCreateNestedManyWithoutUsersInput
    forum?: ForumCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCouponsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
    rank_id: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUsersInput
    forum?: ForumUncheckedCreateNestedManyWithoutUsersInput
    payment_sessions?: Payment_sessionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
  }

  export type DiscountCreateWithoutCouponsInput = {
    id?: string
    name: string
    image: string
    percent: number
    ranks?: RankCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutCouponsInput = {
    id?: string
    name: string
    image: string
    percent: number
    ranks?: RankUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutCouponsInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutCouponsInput, DiscountUncheckedCreateWithoutCouponsInput>
  }

  export type UserUpsertWithoutCouponsInput = {
    update: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type UserUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ranks?: RankUpdateOneWithoutUsersNestedInput
    tickets?: TicketUpdateManyWithoutUsersNestedInput
    forum?: ForumUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rank_id?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUsersNestedInput
    forum?: ForumUncheckedUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type DiscountUpsertWithoutCouponsInput = {
    update: XOR<DiscountUpdateWithoutCouponsInput, DiscountUncheckedUpdateWithoutCouponsInput>
    create: XOR<DiscountCreateWithoutCouponsInput, DiscountUncheckedCreateWithoutCouponsInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutCouponsInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutCouponsInput, DiscountUncheckedUpdateWithoutCouponsInput>
  }

  export type DiscountUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    ranks?: RankUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    ranks?: RankUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type ScreeningCreateManyMoviesInput = {
    id?: string
    hall_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
  }

  export type ForumCreateManyMoviesInput = {
    id?: string
    review: number
    comment: string
    user_id: string
  }

  export type ScreeningUpdateWithoutMoviesInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUpdateManyWithoutScreeningsNestedInput
    halls?: HallUpdateOneWithoutScreeningsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutMoviesInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateManyWithoutMoviesInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUpdateWithoutMoviesInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateOneWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutMoviesInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUncheckedUpdateManyWithoutMoviesInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Payment_sessionCreateManyScreeningsInput = {
    id?: string
    user_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type TicketCreateManyScreeningsInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type Payment_sessionUpdateWithoutScreeningsInput = {
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_types?: Ticket_typeUpdateOneWithoutPayment_sessionsNestedInput
    users?: UserUpdateOneRequiredWithoutPayment_sessionsNestedInput
  }

  export type Payment_sessionUncheckedUpdateWithoutScreeningsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Payment_sessionUncheckedUpdateManyWithoutScreeningsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpdateWithoutScreeningsInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_types?: Ticket_typeUpdateOneWithoutTicketsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutTicketsNestedInput
    users?: UserUpdateOneWithoutTicketsNestedInput
    chairs?: ChairUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutScreeningsInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutScreeningsInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyUsersInput = {
    id?: string
    ticket_type_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type ForumCreateManyUsersInput = {
    id?: string
    review: number
    comment: string
    movie_id: string
  }

  export type Payment_sessionCreateManyUsersInput = {
    id?: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
    ticket_type_id?: string | null
  }

  export type CouponCreateManyUsersInput = {
    id?: string
    discount_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type TicketUpdateWithoutUsersInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_types?: Ticket_typeUpdateOneWithoutTicketsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutTicketsNestedInput
    screenings?: ScreeningUpdateOneWithoutTicketsNestedInput
    chairs?: ChairUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutUsersInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutUsersInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ForumUpdateWithoutUsersInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateOneWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutUsersInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUncheckedUpdateManyWithoutUsersInput = {
    review?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type Payment_sessionUpdateWithoutUsersInput = {
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_types?: Ticket_typeUpdateOneWithoutPayment_sessionsNestedInput
    screenings?: ScreeningUpdateOneRequiredWithoutPayment_sessionsNestedInput
  }

  export type Payment_sessionUncheckedUpdateWithoutUsersInput = {
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Payment_sessionUncheckedUpdateManyWithoutUsersInput = {
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_type_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponUpdateWithoutUsersInput = {
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutUsersInput = {
    discount_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutUsersInput = {
    discount_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyChairsInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_type_id: string
    screening_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type TicketUpdateWithoutChairsInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_types?: Ticket_typeUpdateOneWithoutTicketsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutTicketsNestedInput
    screenings?: ScreeningUpdateOneWithoutTicketsNestedInput
    users?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutChairsInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutChairsInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRanksInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    points?: number
    phone_number: string
    profile_image?: string
    gender: string
    email_verified?: boolean
    email_code?: string | null
    email_code_exp?: Date | string | null
    password_reset_token?: string | null
    password_reset_exp?: Date | string | null
  }

  export type UserUpdateWithoutRanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUpdateManyWithoutUsersNestedInput
    forum?: ForumUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUpdateManyWithoutUsersNestedInput
    coupons?: CouponUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutUsersNestedInput
    forum?: ForumUncheckedUpdateManyWithoutUsersNestedInput
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutUsersNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    email_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_code_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_exp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RankCreateManyDiscountInput = {
    id?: string
    name: string
    point_limit: number
    image: string
  }

  export type CouponCreateManyDiscountsInput = {
    id?: string
    user_id: string
    qr_token: string
    used?: boolean
    created_at?: Date | string
  }

  export type RankUpdateWithoutDiscountInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRanksNestedInput
  }

  export type RankUncheckedUpdateWithoutDiscountInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRanksNestedInput
  }

  export type RankUncheckedUpdateManyWithoutDiscountInput = {
    name?: StringFieldUpdateOperationsInput | string
    point_limit?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CouponUpdateWithoutDiscountsInput = {
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutDiscountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutDiscountsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    qr_token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningCreateManyHallsInput = {
    id?: string
    movie_id: string
    start: Date | string
    end: Date | string
    screening_type_id: string
  }

  export type ChairCreateManyHallsInput = {
    id?: string
    row: number
    column: number
  }

  export type ScreeningUpdateWithoutHallsInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUpdateManyWithoutScreeningsNestedInput
    movies?: MovieUpdateOneWithoutScreeningsNestedInput
    screening_types?: Screening_typeUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutHallsInput = {
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateManyWithoutHallsInput = {
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type ChairUpdateWithoutHallsInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutChairsNestedInput
  }

  export type ChairUncheckedUpdateWithoutHallsInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutChairsNestedInput
  }

  export type ChairUncheckedUpdateManyWithoutHallsInput = {
    row?: IntFieldUpdateOperationsInput | number
    column?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyTicket_typesInput = {
    id?: string
    user_id: string
    screening_type_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type Payment_sessionCreateManyTicket_typesInput = {
    id?: string
    user_id: string
    screening_id: string
    chair_ids: InputJsonValue
    status: string
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutTicket_typesInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screening_types?: Screening_typeUpdateOneWithoutTicketsNestedInput
    screenings?: ScreeningUpdateOneWithoutTicketsNestedInput
    users?: UserUpdateOneWithoutTicketsNestedInput
    chairs?: ChairUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicket_typesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutTicket_typesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_type_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Payment_sessionUpdateWithoutTicket_typesInput = {
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutPayment_sessionsNestedInput
    screenings?: ScreeningUpdateOneRequiredWithoutPayment_sessionsNestedInput
  }

  export type Payment_sessionUncheckedUpdateWithoutTicket_typesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Payment_sessionUncheckedUpdateManyWithoutTicket_typesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_ids?: InputJsonValue | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyScreening_typesInput = {
    id?: string
    ticket_type_id: string
    user_id: string
    screening_id: string
    chair_id: string
    price: number
    qr_token: string
    used_at?: Date | string | null
  }

  export type ScreeningCreateManyScreening_typesInput = {
    id?: string
    hall_id: string
    movie_id: string
    start: Date | string
    end: Date | string
  }

  export type TicketUpdateWithoutScreening_typesInput = {
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_types?: Ticket_typeUpdateOneWithoutTicketsNestedInput
    screenings?: ScreeningUpdateOneWithoutTicketsNestedInput
    users?: UserUpdateOneWithoutTicketsNestedInput
    chairs?: ChairUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutScreening_typesInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutScreening_typesInput = {
    ticket_type_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    screening_id?: StringFieldUpdateOperationsInput | string
    chair_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    qr_token?: StringFieldUpdateOperationsInput | string
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScreeningUpdateWithoutScreening_typesInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUpdateManyWithoutScreeningsNestedInput
    movies?: MovieUpdateOneWithoutScreeningsNestedInput
    halls?: HallUpdateOneWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutScreening_typesInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_sessions?: Payment_sessionUncheckedUpdateManyWithoutScreeningsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateManyWithoutScreening_typesInput = {
    hall_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
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