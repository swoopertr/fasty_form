
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  firstname: string
  lastname: string
  email: string
  Password: string
  Role: number
  createdat: Date
  token: string | null
  tokenexp: Date | null
}

/**
 * Model Form
 * 
 */
export type Form = {
  id: number
  formname: string
  createdat: Date
}

/**
 * Model Questions
 * 
 */
export type Questions = {
  id: number
  formid: number
  question: string
  createdat: Date
}

/**
 * Model Answers
 * 
 */
export type Answers = {
  id: number
  questionid: number
  answer: string
  createdat: Date
}

/**
 * Model UserAnswers
 * 
 */
export type UserAnswers = {
  id: number
  questionid: number
  questionanswerid: number
  userid: number
  createdat: Date
}


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<GlobalReject>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<GlobalReject>;

  /**
   * `prisma.answers`: Exposes CRUD operations for the **Answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.AnswersDelegate<GlobalReject>;

  /**
   * `prisma.userAnswers`: Exposes CRUD operations for the **UserAnswers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswers.findMany()
    * ```
    */
  get userAnswers(): Prisma.UserAnswersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Form: 'Form',
    Questions: 'Questions',
    Answers: 'Answers',
    UserAnswers: 'UserAnswers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormCountOutputType
   */


  export type FormCountOutputType = {
    Questions: number
  }

  export type FormCountOutputTypeSelect = {
    Questions?: boolean
  }

  export type FormCountOutputTypeGetPayload<S extends boolean | null | undefined | FormCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FormCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FormCountOutputTypeArgs)
    ? FormCountOutputType 
    : S extends { select: any } & (FormCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FormCountOutputType ? FormCountOutputType[P] : never
  } 
      : FormCountOutputType




  // Custom InputTypes

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionsCountOutputType
   */


  export type QuestionsCountOutputType = {
    Answers: number
    UserAnswers: number
  }

  export type QuestionsCountOutputTypeSelect = {
    Answers?: boolean
    UserAnswers?: boolean
  }

  export type QuestionsCountOutputTypeGetPayload<S extends boolean | null | undefined | QuestionsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuestionsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuestionsCountOutputTypeArgs)
    ? QuestionsCountOutputType 
    : S extends { select: any } & (QuestionsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuestionsCountOutputType ? QuestionsCountOutputType[P] : never
  } 
      : QuestionsCountOutputType




  // Custom InputTypes

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect | null
  }



  /**
   * Count Type AnswersCountOutputType
   */


  export type AnswersCountOutputType = {
    UserAnswers: number
  }

  export type AnswersCountOutputTypeSelect = {
    UserAnswers?: boolean
  }

  export type AnswersCountOutputTypeGetPayload<S extends boolean | null | undefined | AnswersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AnswersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AnswersCountOutputTypeArgs)
    ? AnswersCountOutputType 
    : S extends { select: any } & (AnswersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AnswersCountOutputType ? AnswersCountOutputType[P] : never
  } 
      : AnswersCountOutputType




  // Custom InputTypes

  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AnswersCountOutputType
     */
    select?: AnswersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

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
    id: number | null
    Role: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    Role: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    Password: string | null
    Role: number | null
    createdat: Date | null
    token: string | null
    tokenexp: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    Password: string | null
    Role: number | null
    createdat: Date | null
    token: string | null
    tokenexp: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    Password: number
    Role: number
    createdat: number
    token: number
    tokenexp: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    Role?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    Role?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    Password?: true
    Role?: true
    createdat?: true
    token?: true
    tokenexp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    Password?: true
    Role?: true
    createdat?: true
    token?: true
    tokenexp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    Password?: true
    Role?: true
    createdat?: true
    token?: true
    tokenexp?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    id: number
    firstname: string
    lastname: string
    email: string
    Password: string
    Role: number
    createdat: Date
    token: string | null
    tokenexp: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    Password?: boolean
    Role?: boolean
    createdat?: boolean
    token?: boolean
    tokenexp?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
  }



  /**
   * Model Form
   */


  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    id: number | null
  }

  export type FormSumAggregateOutputType = {
    id: number | null
  }

  export type FormMinAggregateOutputType = {
    id: number | null
    formname: string | null
    createdat: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: number | null
    formname: string | null
    createdat: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    formname: number
    createdat: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    id?: true
  }

  export type FormSumAggregateInputType = {
    id?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    formname?: true
    createdat?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    formname?: true
    createdat?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    formname?: true
    createdat?: true
    _all?: true
  }

  export type FormAggregateArgs = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs = {
    where?: FormWhereInput
    orderBy?: Enumerable<FormOrderByWithAggregationInput>
    by: FormScalarFieldEnum[]
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }


  export type FormGroupByOutputType = {
    id: number
    formname: string
    createdat: Date
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect = {
    id?: boolean
    formname?: boolean
    createdat?: boolean
    Questions?: boolean | Form$QuestionsArgs
    _count?: boolean | FormCountOutputTypeArgs
  }


  export type FormInclude = {
    Questions?: boolean | Form$QuestionsArgs
    _count?: boolean | FormCountOutputTypeArgs
  }

  export type FormGetPayload<S extends boolean | null | undefined | FormArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Form :
    S extends undefined ? never :
    S extends { include: any } & (FormArgs | FormFindManyArgs)
    ? Form  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Questions' ? Array < QuestionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FormArgs | FormFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Questions' ? Array < QuestionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Form ? Form[P] : never
  } 
      : Form


  type FormCountArgs = 
    Omit<FormFindManyArgs, 'select' | 'include'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Form'> extends True ? Prisma__FormClient<FormGetPayload<T>> : Prisma__FormClient<FormGetPayload<T> | null, null>

    /**
     * Find one Form that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormFindUniqueOrThrowArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Form'> extends True ? Prisma__FormClient<FormGetPayload<T>> : Prisma__FormClient<FormGetPayload<T> | null, null>

    /**
     * Find the first Form that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormFindFirstOrThrowArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFindManyArgs>(
      args?: SelectSubset<T, FormFindManyArgs>
    ): PrismaPromise<Array<FormGetPayload<T>>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
    **/
    create<T extends FormCreateArgs>(
      args: SelectSubset<T, FormCreateArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Create many Forms.
     *     @param {FormCreateManyArgs} args - Arguments to create many Forms.
     *     @example
     *     // Create many Forms
     *     const form = await prisma.form.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormCreateManyArgs>(
      args?: SelectSubset<T, FormCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
    **/
    delete<T extends FormDeleteArgs>(
      args: SelectSubset<T, FormDeleteArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormUpdateArgs>(
      args: SelectSubset<T, FormUpdateArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormDeleteManyArgs>(
      args?: SelectSubset<T, FormDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormUpdateManyArgs>(
      args: SelectSubset<T, FormUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
    **/
    upsert<T extends FormUpsertArgs>(
      args: SelectSubset<T, FormUpsertArgs>
    ): Prisma__FormClient<FormGetPayload<T>>

    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Questions<T extends Form$QuestionsArgs= {}>(args?: Subset<T, Form$QuestionsArgs>): PrismaPromise<Array<QuestionsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Form base type for findUnique actions
   */
  export type FormFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUnique
   */
  export interface FormFindUniqueArgs extends FormFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form base type for findFirst actions
   */
  export type FormFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: Enumerable<FormScalarFieldEnum>
  }

  /**
   * Form findFirst
   */
  export interface FormFindFirstArgs extends FormFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: Enumerable<FormScalarFieldEnum>
  }


  /**
   * Form findMany
   */
  export type FormFindManyArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: Enumerable<FormScalarFieldEnum>
  }


  /**
   * Form create
   */
  export type FormCreateArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }


  /**
   * Form createMany
   */
  export type FormCreateManyArgs = {
    /**
     * The data used to create many Forms.
     */
    data: Enumerable<FormCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Form update
   */
  export type FormUpdateArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
  }


  /**
   * Form upsert
   */
  export type FormUpsertArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }


  /**
   * Form delete
   */
  export type FormDeleteArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
  }


  /**
   * Form.Questions
   */
  export type Form$QuestionsArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    where?: QuestionsWhereInput
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Form without action
   */
  export type FormArgs = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude | null
  }



  /**
   * Model Questions
   */


  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    formid: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    formid: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    formid: number | null
    question: string | null
    createdat: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    formid: number | null
    question: string | null
    createdat: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    formid: number
    question: number
    createdat: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    formid?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    formid?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    formid?: true
    question?: true
    createdat?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    formid?: true
    question?: true
    createdat?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    formid?: true
    question?: true
    createdat?: true
    _all?: true
  }

  export type QuestionsAggregateArgs = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs = {
    where?: QuestionsWhereInput
    orderBy?: Enumerable<QuestionsOrderByWithAggregationInput>
    by: QuestionsScalarFieldEnum[]
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }


  export type QuestionsGroupByOutputType = {
    id: number
    formid: number
    question: string
    createdat: Date
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect = {
    id?: boolean
    formid?: boolean
    question?: boolean
    createdat?: boolean
    Answers?: boolean | Questions$AnswersArgs
    Form?: boolean | FormArgs
    UserAnswers?: boolean | Questions$UserAnswersArgs
    _count?: boolean | QuestionsCountOutputTypeArgs
  }


  export type QuestionsInclude = {
    Answers?: boolean | Questions$AnswersArgs
    Form?: boolean | FormArgs
    UserAnswers?: boolean | Questions$UserAnswersArgs
    _count?: boolean | QuestionsCountOutputTypeArgs
  }

  export type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Questions :
    S extends undefined ? never :
    S extends { include: any } & (QuestionsArgs | QuestionsFindManyArgs)
    ? Questions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Answers' ? Array < AnswersGetPayload<S['include'][P]>>  :
        P extends 'Form' ? FormGetPayload<S['include'][P]> :
        P extends 'UserAnswers' ? Array < UserAnswersGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionsArgs | QuestionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Answers' ? Array < AnswersGetPayload<S['select'][P]>>  :
        P extends 'Form' ? FormGetPayload<S['select'][P]> :
        P extends 'UserAnswers' ? Array < UserAnswersGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuestionsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Questions ? Questions[P] : never
  } 
      : Questions


  type QuestionsCountArgs = 
    Omit<QuestionsFindManyArgs, 'select' | 'include'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Questions'> extends True ? Prisma__QuestionsClient<QuestionsGetPayload<T>> : Prisma__QuestionsClient<QuestionsGetPayload<T> | null, null>

    /**
     * Find one Questions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionsFindUniqueOrThrowArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Questions'> extends True ? Prisma__QuestionsClient<QuestionsGetPayload<T>> : Prisma__QuestionsClient<QuestionsGetPayload<T> | null, null>

    /**
     * Find the first Questions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionsFindManyArgs>(
      args?: SelectSubset<T, QuestionsFindManyArgs>
    ): PrismaPromise<Array<QuestionsGetPayload<T>>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
    **/
    create<T extends QuestionsCreateArgs>(
      args: SelectSubset<T, QuestionsCreateArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Create many Questions.
     *     @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const questions = await prisma.questions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionsCreateManyArgs>(
      args?: SelectSubset<T, QuestionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
    **/
    delete<T extends QuestionsDeleteArgs>(
      args: SelectSubset<T, QuestionsDeleteArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionsUpdateArgs>(
      args: SelectSubset<T, QuestionsUpdateArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionsDeleteManyArgs>(
      args?: SelectSubset<T, QuestionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionsUpdateManyArgs>(
      args: SelectSubset<T, QuestionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionsUpsertArgs>(
      args: SelectSubset<T, QuestionsUpsertArgs>
    ): Prisma__QuestionsClient<QuestionsGetPayload<T>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
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
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Answers<T extends Questions$AnswersArgs= {}>(args?: Subset<T, Questions$AnswersArgs>): PrismaPromise<Array<AnswersGetPayload<T>>| Null>;

    Form<T extends FormArgs= {}>(args?: Subset<T, FormArgs>): Prisma__FormClient<FormGetPayload<T> | Null>;

    UserAnswers<T extends Questions$UserAnswersArgs= {}>(args?: Subset<T, Questions$UserAnswersArgs>): PrismaPromise<Array<UserAnswersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Questions base type for findUnique actions
   */
  export type QuestionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUnique
   */
  export interface QuestionsFindUniqueArgs extends QuestionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions base type for findFirst actions
   */
  export type QuestionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }

  /**
   * Questions findFirst
   */
  export interface QuestionsFindFirstArgs extends QuestionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Questions create
   */
  export type QuestionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }


  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs = {
    /**
     * The data used to create many Questions.
     */
    data: Enumerable<QuestionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Questions update
   */
  export type QuestionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
  }


  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }


  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
  }


  /**
   * Questions.Answers
   */
  export type Questions$AnswersArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    where?: AnswersWhereInput
    orderBy?: Enumerable<AnswersOrderByWithRelationInput>
    cursor?: AnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }


  /**
   * Questions.UserAnswers
   */
  export type Questions$UserAnswersArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    where?: UserAnswersWhereInput
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserAnswersScalarFieldEnum>
  }


  /**
   * Questions without action
   */
  export type QuestionsArgs = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionsInclude | null
  }



  /**
   * Model Answers
   */


  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    id: number | null
    questionid: number | null
  }

  export type AnswersSumAggregateOutputType = {
    id: number | null
    questionid: number | null
  }

  export type AnswersMinAggregateOutputType = {
    id: number | null
    questionid: number | null
    answer: string | null
    createdat: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: number | null
    questionid: number | null
    answer: string | null
    createdat: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    questionid: number
    answer: number
    createdat: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    id?: true
    questionid?: true
  }

  export type AnswersSumAggregateInputType = {
    id?: true
    questionid?: true
  }

  export type AnswersMinAggregateInputType = {
    id?: true
    questionid?: true
    answer?: true
    createdat?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    questionid?: true
    answer?: true
    createdat?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    questionid?: true
    answer?: true
    createdat?: true
    _all?: true
  }

  export type AnswersAggregateArgs = {
    /**
     * Filter which Answers to aggregate.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type AnswersGroupByArgs = {
    where?: AnswersWhereInput
    orderBy?: Enumerable<AnswersOrderByWithAggregationInput>
    by: AnswersScalarFieldEnum[]
    having?: AnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }


  export type AnswersGroupByOutputType = {
    id: number
    questionid: number
    answer: string
    createdat: Date
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends AnswersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type AnswersSelect = {
    id?: boolean
    questionid?: boolean
    answer?: boolean
    createdat?: boolean
    Questions?: boolean | QuestionsArgs
    UserAnswers?: boolean | Answers$UserAnswersArgs
    _count?: boolean | AnswersCountOutputTypeArgs
  }


  export type AnswersInclude = {
    Questions?: boolean | QuestionsArgs
    UserAnswers?: boolean | Answers$UserAnswersArgs
    _count?: boolean | AnswersCountOutputTypeArgs
  }

  export type AnswersGetPayload<S extends boolean | null | undefined | AnswersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Answers :
    S extends undefined ? never :
    S extends { include: any } & (AnswersArgs | AnswersFindManyArgs)
    ? Answers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Questions' ? QuestionsGetPayload<S['include'][P]> :
        P extends 'UserAnswers' ? Array < UserAnswersGetPayload<S['include'][P]>>  :
        P extends '_count' ? AnswersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AnswersArgs | AnswersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Questions' ? QuestionsGetPayload<S['select'][P]> :
        P extends 'UserAnswers' ? Array < UserAnswersGetPayload<S['select'][P]>>  :
        P extends '_count' ? AnswersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Answers ? Answers[P] : never
  } 
      : Answers


  type AnswersCountArgs = 
    Omit<AnswersFindManyArgs, 'select' | 'include'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface AnswersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Answers that matches the filter.
     * @param {AnswersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Answers'> extends True ? Prisma__AnswersClient<AnswersGetPayload<T>> : Prisma__AnswersClient<AnswersGetPayload<T> | null, null>

    /**
     * Find one Answers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnswersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnswersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AnswersFindUniqueOrThrowArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Answers'> extends True ? Prisma__AnswersClient<AnswersGetPayload<T>> : Prisma__AnswersClient<AnswersGetPayload<T> | null, null>

    /**
     * Find the first Answers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnswersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnswersFindFirstOrThrowArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswersFindManyArgs>(
      args?: SelectSubset<T, AnswersFindManyArgs>
    ): PrismaPromise<Array<AnswersGetPayload<T>>>

    /**
     * Create a Answers.
     * @param {AnswersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
    **/
    create<T extends AnswersCreateArgs>(
      args: SelectSubset<T, AnswersCreateArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Create many Answers.
     *     @param {AnswersCreateManyArgs} args - Arguments to create many Answers.
     *     @example
     *     // Create many Answers
     *     const answers = await prisma.answers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswersCreateManyArgs>(
      args?: SelectSubset<T, AnswersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Answers.
     * @param {AnswersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
    **/
    delete<T extends AnswersDeleteArgs>(
      args: SelectSubset<T, AnswersDeleteArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Update one Answers.
     * @param {AnswersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswersUpdateArgs>(
      args: SelectSubset<T, AnswersUpdateArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Delete zero or more Answers.
     * @param {AnswersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswersDeleteManyArgs>(
      args?: SelectSubset<T, AnswersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswersUpdateManyArgs>(
      args: SelectSubset<T, AnswersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Answers.
     * @param {AnswersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
    **/
    upsert<T extends AnswersUpsertArgs>(
      args: SelectSubset<T, AnswersUpsertArgs>
    ): Prisma__AnswersClient<AnswersGetPayload<T>>

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswersCountArgs>(
      args?: Subset<T, AnswersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersGroupByArgs} args - Group by arguments.
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
      T extends AnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswersGroupByArgs['orderBy'] }
        : { orderBy?: AnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Questions<T extends QuestionsArgs= {}>(args?: Subset<T, QuestionsArgs>): Prisma__QuestionsClient<QuestionsGetPayload<T> | Null>;

    UserAnswers<T extends Answers$UserAnswersArgs= {}>(args?: Subset<T, Answers$UserAnswersArgs>): PrismaPromise<Array<UserAnswersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Answers base type for findUnique actions
   */
  export type AnswersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers findUnique
   */
  export interface AnswersFindUniqueArgs extends AnswersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answers findUniqueOrThrow
   */
  export type AnswersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }


  /**
   * Answers base type for findFirst actions
   */
  export type AnswersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }

  /**
   * Answers findFirst
   */
  export interface AnswersFindFirstArgs extends AnswersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answers findFirstOrThrow
   */
  export type AnswersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }


  /**
   * Answers findMany
   */
  export type AnswersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }


  /**
   * Answers create
   */
  export type AnswersCreateArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * The data needed to create a Answers.
     */
    data: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
  }


  /**
   * Answers createMany
   */
  export type AnswersCreateManyArgs = {
    /**
     * The data used to create many Answers.
     */
    data: Enumerable<AnswersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Answers update
   */
  export type AnswersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * The data needed to update a Answers.
     */
    data: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
    /**
     * Choose, which Answers to update.
     */
    where: AnswersWhereUniqueInput
  }


  /**
   * Answers updateMany
   */
  export type AnswersUpdateManyArgs = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswersWhereInput
  }


  /**
   * Answers upsert
   */
  export type AnswersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * The filter to search for the Answers to update in case it exists.
     */
    where: AnswersWhereUniqueInput
    /**
     * In case the Answers found by the `where` argument doesn't exist, create a new Answers with this data.
     */
    create: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
    /**
     * In case the Answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
  }


  /**
   * Answers delete
   */
  export type AnswersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
    /**
     * Filter which Answers to delete.
     */
    where: AnswersWhereUniqueInput
  }


  /**
   * Answers deleteMany
   */
  export type AnswersDeleteManyArgs = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswersWhereInput
  }


  /**
   * Answers.UserAnswers
   */
  export type Answers$UserAnswersArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    where?: UserAnswersWhereInput
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserAnswersScalarFieldEnum>
  }


  /**
   * Answers without action
   */
  export type AnswersArgs = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswersInclude | null
  }



  /**
   * Model UserAnswers
   */


  export type AggregateUserAnswers = {
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  export type UserAnswersAvgAggregateOutputType = {
    id: number | null
    questionid: number | null
    questionanswerid: number | null
    userid: number | null
  }

  export type UserAnswersSumAggregateOutputType = {
    id: number | null
    questionid: number | null
    questionanswerid: number | null
    userid: number | null
  }

  export type UserAnswersMinAggregateOutputType = {
    id: number | null
    questionid: number | null
    questionanswerid: number | null
    userid: number | null
    createdat: Date | null
  }

  export type UserAnswersMaxAggregateOutputType = {
    id: number | null
    questionid: number | null
    questionanswerid: number | null
    userid: number | null
    createdat: Date | null
  }

  export type UserAnswersCountAggregateOutputType = {
    id: number
    questionid: number
    questionanswerid: number
    userid: number
    createdat: number
    _all: number
  }


  export type UserAnswersAvgAggregateInputType = {
    id?: true
    questionid?: true
    questionanswerid?: true
    userid?: true
  }

  export type UserAnswersSumAggregateInputType = {
    id?: true
    questionid?: true
    questionanswerid?: true
    userid?: true
  }

  export type UserAnswersMinAggregateInputType = {
    id?: true
    questionid?: true
    questionanswerid?: true
    userid?: true
    createdat?: true
  }

  export type UserAnswersMaxAggregateInputType = {
    id?: true
    questionid?: true
    questionanswerid?: true
    userid?: true
    createdat?: true
  }

  export type UserAnswersCountAggregateInputType = {
    id?: true
    questionid?: true
    questionanswerid?: true
    userid?: true
    createdat?: true
    _all?: true
  }

  export type UserAnswersAggregateArgs = {
    /**
     * Filter which UserAnswers to aggregate.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswersMaxAggregateInputType
  }

  export type GetUserAnswersAggregateType<T extends UserAnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswers[P]>
      : GetScalarType<T[P], AggregateUserAnswers[P]>
  }




  export type UserAnswersGroupByArgs = {
    where?: UserAnswersWhereInput
    orderBy?: Enumerable<UserAnswersOrderByWithAggregationInput>
    by: UserAnswersScalarFieldEnum[]
    having?: UserAnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswersCountAggregateInputType | true
    _avg?: UserAnswersAvgAggregateInputType
    _sum?: UserAnswersSumAggregateInputType
    _min?: UserAnswersMinAggregateInputType
    _max?: UserAnswersMaxAggregateInputType
  }


  export type UserAnswersGroupByOutputType = {
    id: number
    questionid: number
    questionanswerid: number
    userid: number
    createdat: Date
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  type GetUserAnswersGroupByPayload<T extends UserAnswersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserAnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswersSelect = {
    id?: boolean
    questionid?: boolean
    questionanswerid?: boolean
    userid?: boolean
    createdat?: boolean
    Answers?: boolean | AnswersArgs
    Questions?: boolean | QuestionsArgs
  }


  export type UserAnswersInclude = {
    Answers?: boolean | AnswersArgs
    Questions?: boolean | QuestionsArgs
  }

  export type UserAnswersGetPayload<S extends boolean | null | undefined | UserAnswersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserAnswers :
    S extends undefined ? never :
    S extends { include: any } & (UserAnswersArgs | UserAnswersFindManyArgs)
    ? UserAnswers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Answers' ? AnswersGetPayload<S['include'][P]> :
        P extends 'Questions' ? QuestionsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserAnswersArgs | UserAnswersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Answers' ? AnswersGetPayload<S['select'][P]> :
        P extends 'Questions' ? QuestionsGetPayload<S['select'][P]> :  P extends keyof UserAnswers ? UserAnswers[P] : never
  } 
      : UserAnswers


  type UserAnswersCountArgs = 
    Omit<UserAnswersFindManyArgs, 'select' | 'include'> & {
      select?: UserAnswersCountAggregateInputType | true
    }

  export interface UserAnswersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserAnswers that matches the filter.
     * @param {UserAnswersFindUniqueArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAnswersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAnswersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAnswers'> extends True ? Prisma__UserAnswersClient<UserAnswersGetPayload<T>> : Prisma__UserAnswersClient<UserAnswersGetPayload<T> | null, null>

    /**
     * Find one UserAnswers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAnswersFindUniqueOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAnswersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserAnswersFindUniqueOrThrowArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Find the first UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAnswersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAnswersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAnswers'> extends True ? Prisma__UserAnswersClient<UserAnswersGetPayload<T>> : Prisma__UserAnswersClient<UserAnswersGetPayload<T> | null, null>

    /**
     * Find the first UserAnswers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAnswersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserAnswersFindFirstOrThrowArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserAnswersFindManyArgs>(
      args?: SelectSubset<T, UserAnswersFindManyArgs>
    ): PrismaPromise<Array<UserAnswersGetPayload<T>>>

    /**
     * Create a UserAnswers.
     * @param {UserAnswersCreateArgs} args - Arguments to create a UserAnswers.
     * @example
     * // Create one UserAnswers
     * const UserAnswers = await prisma.userAnswers.create({
     *   data: {
     *     // ... data to create a UserAnswers
     *   }
     * })
     * 
    **/
    create<T extends UserAnswersCreateArgs>(
      args: SelectSubset<T, UserAnswersCreateArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Create many UserAnswers.
     *     @param {UserAnswersCreateManyArgs} args - Arguments to create many UserAnswers.
     *     @example
     *     // Create many UserAnswers
     *     const userAnswers = await prisma.userAnswers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAnswersCreateManyArgs>(
      args?: SelectSubset<T, UserAnswersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserAnswers.
     * @param {UserAnswersDeleteArgs} args - Arguments to delete one UserAnswers.
     * @example
     * // Delete one UserAnswers
     * const UserAnswers = await prisma.userAnswers.delete({
     *   where: {
     *     // ... filter to delete one UserAnswers
     *   }
     * })
     * 
    **/
    delete<T extends UserAnswersDeleteArgs>(
      args: SelectSubset<T, UserAnswersDeleteArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Update one UserAnswers.
     * @param {UserAnswersUpdateArgs} args - Arguments to update one UserAnswers.
     * @example
     * // Update one UserAnswers
     * const userAnswers = await prisma.userAnswers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAnswersUpdateArgs>(
      args: SelectSubset<T, UserAnswersUpdateArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswersDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAnswersDeleteManyArgs>(
      args?: SelectSubset<T, UserAnswersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAnswersUpdateManyArgs>(
      args: SelectSubset<T, UserAnswersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAnswers.
     * @param {UserAnswersUpsertArgs} args - Arguments to update or create a UserAnswers.
     * @example
     * // Update or create a UserAnswers
     * const userAnswers = await prisma.userAnswers.upsert({
     *   create: {
     *     // ... data to create a UserAnswers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswers we want to update
     *   }
     * })
    **/
    upsert<T extends UserAnswersUpsertArgs>(
      args: SelectSubset<T, UserAnswersUpsertArgs>
    ): Prisma__UserAnswersClient<UserAnswersGetPayload<T>>

    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswers.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswersCountArgs>(
      args?: Subset<T, UserAnswersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAnswersAggregateArgs>(args: Subset<T, UserAnswersAggregateArgs>): PrismaPromise<GetUserAnswersAggregateType<T>>

    /**
     * Group by UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersGroupByArgs} args - Group by arguments.
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
      T extends UserAnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswersGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserAnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAnswersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Answers<T extends AnswersArgs= {}>(args?: Subset<T, AnswersArgs>): Prisma__AnswersClient<AnswersGetPayload<T> | Null>;

    Questions<T extends QuestionsArgs= {}>(args?: Subset<T, QuestionsArgs>): Prisma__QuestionsClient<QuestionsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserAnswers base type for findUnique actions
   */
  export type UserAnswersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findUnique
   */
  export interface UserAnswersFindUniqueArgs extends UserAnswersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAnswers findUniqueOrThrow
   */
  export type UserAnswersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }


  /**
   * UserAnswers base type for findFirst actions
   */
  export type UserAnswersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: Enumerable<UserAnswersScalarFieldEnum>
  }

  /**
   * UserAnswers findFirst
   */
  export interface UserAnswersFindFirstArgs extends UserAnswersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAnswers findFirstOrThrow
   */
  export type UserAnswersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: Enumerable<UserAnswersScalarFieldEnum>
  }


  /**
   * UserAnswers findMany
   */
  export type UserAnswersFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: Enumerable<UserAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: Enumerable<UserAnswersScalarFieldEnum>
  }


  /**
   * UserAnswers create
   */
  export type UserAnswersCreateArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * The data needed to create a UserAnswers.
     */
    data: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
  }


  /**
   * UserAnswers createMany
   */
  export type UserAnswersCreateManyArgs = {
    /**
     * The data used to create many UserAnswers.
     */
    data: Enumerable<UserAnswersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserAnswers update
   */
  export type UserAnswersUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * The data needed to update a UserAnswers.
     */
    data: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
    /**
     * Choose, which UserAnswers to update.
     */
    where: UserAnswersWhereUniqueInput
  }


  /**
   * UserAnswers updateMany
   */
  export type UserAnswersUpdateManyArgs = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
  }


  /**
   * UserAnswers upsert
   */
  export type UserAnswersUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * The filter to search for the UserAnswers to update in case it exists.
     */
    where: UserAnswersWhereUniqueInput
    /**
     * In case the UserAnswers found by the `where` argument doesn't exist, create a new UserAnswers with this data.
     */
    create: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
    /**
     * In case the UserAnswers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
  }


  /**
   * UserAnswers delete
   */
  export type UserAnswersDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
    /**
     * Filter which UserAnswers to delete.
     */
    where: UserAnswersWhereUniqueInput
  }


  /**
   * UserAnswers deleteMany
   */
  export type UserAnswersDeleteManyArgs = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswersWhereInput
  }


  /**
   * UserAnswers without action
   */
  export type UserAnswersArgs = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAnswersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AnswersScalarFieldEnum: {
    id: 'id',
    questionid: 'questionid',
    answer: 'answer',
    createdat: 'createdat'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    formname: 'formname',
    createdat: 'createdat'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    formid: 'formid',
    question: 'question',
    createdat: 'createdat'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserAnswersScalarFieldEnum: {
    id: 'id',
    questionid: 'questionid',
    questionanswerid: 'questionanswerid',
    userid: 'userid',
    createdat: 'createdat'
  };

  export type UserAnswersScalarFieldEnum = (typeof UserAnswersScalarFieldEnum)[keyof typeof UserAnswersScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    Password: 'Password',
    Role: 'Role',
    createdat: 'createdat',
    token: 'token',
    tokenexp: 'tokenexp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    email?: StringFilter | string
    Password?: StringFilter | string
    Role?: IntFilter | number
    createdat?: DateTimeFilter | Date | string
    token?: StringNullableFilter | string | null
    tokenexp?: DateTimeNullableFilter | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    createdat?: SortOrder
    token?: SortOrder
    tokenexp?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    createdat?: SortOrder
    token?: SortOrder
    tokenexp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    Password?: StringWithAggregatesFilter | string
    Role?: IntWithAggregatesFilter | number
    createdat?: DateTimeWithAggregatesFilter | Date | string
    token?: StringNullableWithAggregatesFilter | string | null
    tokenexp?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type FormWhereInput = {
    AND?: Enumerable<FormWhereInput>
    OR?: Enumerable<FormWhereInput>
    NOT?: Enumerable<FormWhereInput>
    id?: IntFilter | number
    formname?: StringFilter | string
    createdat?: DateTimeFilter | Date | string
    Questions?: QuestionsListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    formname?: SortOrder
    createdat?: SortOrder
    Questions?: QuestionsOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = {
    id?: number
  }

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    formname?: SortOrder
    createdat?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    formname?: StringWithAggregatesFilter | string
    createdat?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionsWhereInput = {
    AND?: Enumerable<QuestionsWhereInput>
    OR?: Enumerable<QuestionsWhereInput>
    NOT?: Enumerable<QuestionsWhereInput>
    id?: IntFilter | number
    formid?: IntFilter | number
    question?: StringFilter | string
    createdat?: DateTimeFilter | Date | string
    Answers?: AnswersListRelationFilter
    Form?: XOR<FormRelationFilter, FormWhereInput>
    UserAnswers?: UserAnswersListRelationFilter
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    formid?: SortOrder
    question?: SortOrder
    createdat?: SortOrder
    Answers?: AnswersOrderByRelationAggregateInput
    Form?: FormOrderByWithRelationInput
    UserAnswers?: UserAnswersOrderByRelationAggregateInput
  }

  export type QuestionsWhereUniqueInput = {
    id?: number
  }

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    formid?: SortOrder
    question?: SortOrder
    createdat?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    formid?: IntWithAggregatesFilter | number
    question?: StringWithAggregatesFilter | string
    createdat?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AnswersWhereInput = {
    AND?: Enumerable<AnswersWhereInput>
    OR?: Enumerable<AnswersWhereInput>
    NOT?: Enumerable<AnswersWhereInput>
    id?: IntFilter | number
    questionid?: IntFilter | number
    answer?: StringFilter | string
    createdat?: DateTimeFilter | Date | string
    Questions?: XOR<QuestionsRelationFilter, QuestionsWhereInput>
    UserAnswers?: UserAnswersListRelationFilter
  }

  export type AnswersOrderByWithRelationInput = {
    id?: SortOrder
    questionid?: SortOrder
    answer?: SortOrder
    createdat?: SortOrder
    Questions?: QuestionsOrderByWithRelationInput
    UserAnswers?: UserAnswersOrderByRelationAggregateInput
  }

  export type AnswersWhereUniqueInput = {
    id?: number
  }

  export type AnswersOrderByWithAggregationInput = {
    id?: SortOrder
    questionid?: SortOrder
    answer?: SortOrder
    createdat?: SortOrder
    _count?: AnswersCountOrderByAggregateInput
    _avg?: AnswersAvgOrderByAggregateInput
    _max?: AnswersMaxOrderByAggregateInput
    _min?: AnswersMinOrderByAggregateInput
    _sum?: AnswersSumOrderByAggregateInput
  }

  export type AnswersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswersScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionid?: IntWithAggregatesFilter | number
    answer?: StringWithAggregatesFilter | string
    createdat?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserAnswersWhereInput = {
    AND?: Enumerable<UserAnswersWhereInput>
    OR?: Enumerable<UserAnswersWhereInput>
    NOT?: Enumerable<UserAnswersWhereInput>
    id?: IntFilter | number
    questionid?: IntFilter | number
    questionanswerid?: IntFilter | number
    userid?: IntFilter | number
    createdat?: DateTimeFilter | Date | string
    Answers?: XOR<AnswersRelationFilter, AnswersWhereInput>
    Questions?: XOR<QuestionsRelationFilter, QuestionsWhereInput>
  }

  export type UserAnswersOrderByWithRelationInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
    createdat?: SortOrder
    Answers?: AnswersOrderByWithRelationInput
    Questions?: QuestionsOrderByWithRelationInput
  }

  export type UserAnswersWhereUniqueInput = {
    id?: number
  }

  export type UserAnswersOrderByWithAggregationInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
    createdat?: SortOrder
    _count?: UserAnswersCountOrderByAggregateInput
    _avg?: UserAnswersAvgOrderByAggregateInput
    _max?: UserAnswersMaxOrderByAggregateInput
    _min?: UserAnswersMinOrderByAggregateInput
    _sum?: UserAnswersSumOrderByAggregateInput
  }

  export type UserAnswersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAnswersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAnswersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAnswersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionid?: IntWithAggregatesFilter | number
    questionanswerid?: IntWithAggregatesFilter | number
    userid?: IntWithAggregatesFilter | number
    createdat?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    firstname: string
    lastname: string
    email: string
    Password: string
    Role?: number
    createdat?: Date | string
    token?: string | null
    tokenexp?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    Password: string
    Role?: number
    createdat?: Date | string
    token?: string | null
    tokenexp?: Date | string | null
  }

  export type UserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenexp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenexp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    Password: string
    Role?: number
    createdat?: Date | string
    token?: string | null
    tokenexp?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenexp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenexp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormCreateInput = {
    formname: string
    createdat?: Date | string
    Questions?: QuestionsCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: number
    formname: string
    createdat?: Date | string
    Questions?: QuestionsUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: number
    formname: string
    createdat?: Date | string
  }

  export type FormUpdateManyMutationInput = {
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateInput = {
    question: string
    createdat?: Date | string
    Answers?: AnswersCreateNestedManyWithoutQuestionsInput
    Form: FormCreateNestedOneWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: number
    formid: number
    question: string
    createdat?: Date | string
    Answers?: AnswersUncheckedCreateNestedManyWithoutQuestionsInput
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUpdateManyWithoutQuestionsNestedInput
    Form?: FormUpdateOneRequiredWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formid?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUncheckedUpdateManyWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsCreateManyInput = {
    id?: number
    formid: number
    question: string
    createdat?: Date | string
  }

  export type QuestionsUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formid?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswersCreateInput = {
    answer: string
    createdat?: Date | string
    Questions: QuestionsCreateNestedOneWithoutAnswersInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutAnswersInput
  }

  export type AnswersUncheckedCreateInput = {
    id?: number
    questionid: number
    answer: string
    createdat?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type AnswersUpdateInput = {
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateOneRequiredWithoutAnswersNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type AnswersCreateManyInput = {
    id?: number
    questionid: number
    answer: string
    createdat?: Date | string
  }

  export type AnswersUpdateManyMutationInput = {
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateInput = {
    userid: number
    createdat?: Date | string
    Answers: AnswersCreateNestedOneWithoutUserAnswersInput
    Questions: QuestionsCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateInput = {
    id?: number
    questionid: number
    questionanswerid: number
    userid: number
    createdat?: Date | string
  }

  export type UserAnswersUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUpdateOneRequiredWithoutUserAnswersNestedInput
    Questions?: QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    questionanswerid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyInput = {
    id?: number
    questionid: number
    questionanswerid: number
    userid: number
    createdat?: Date | string
  }

  export type UserAnswersUpdateManyMutationInput = {
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    questionanswerid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    createdat?: SortOrder
    token?: SortOrder
    tokenexp?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    Role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    createdat?: SortOrder
    token?: SortOrder
    tokenexp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    createdat?: SortOrder
    token?: SortOrder
    tokenexp?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    Role?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    formname?: SortOrder
    createdat?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    formname?: SortOrder
    createdat?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    formname?: SortOrder
    createdat?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnswersListRelationFilter = {
    every?: AnswersWhereInput
    some?: AnswersWhereInput
    none?: AnswersWhereInput
  }

  export type FormRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type UserAnswersListRelationFilter = {
    every?: UserAnswersWhereInput
    some?: UserAnswersWhereInput
    none?: UserAnswersWhereInput
  }

  export type AnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    formid?: SortOrder
    question?: SortOrder
    createdat?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    id?: SortOrder
    formid?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    formid?: SortOrder
    question?: SortOrder
    createdat?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    formid?: SortOrder
    question?: SortOrder
    createdat?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    id?: SortOrder
    formid?: SortOrder
  }

  export type QuestionsRelationFilter = {
    is?: QuestionsWhereInput
    isNot?: QuestionsWhereInput
  }

  export type AnswersCountOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    answer?: SortOrder
    createdat?: SortOrder
  }

  export type AnswersAvgOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
  }

  export type AnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    answer?: SortOrder
    createdat?: SortOrder
  }

  export type AnswersMinOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    answer?: SortOrder
    createdat?: SortOrder
  }

  export type AnswersSumOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
  }

  export type AnswersRelationFilter = {
    is?: AnswersWhereInput
    isNot?: AnswersWhereInput
  }

  export type UserAnswersCountOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
    createdat?: SortOrder
  }

  export type UserAnswersAvgOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
  }

  export type UserAnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
    createdat?: SortOrder
  }

  export type UserAnswersMinOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
    createdat?: SortOrder
  }

  export type UserAnswersSumOrderByAggregateInput = {
    id?: SortOrder
    questionid?: SortOrder
    questionanswerid?: SortOrder
    userid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuestionsCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutFormInput>, Enumerable<QuestionsUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutFormInput>
    createMany?: QuestionsCreateManyFormInputEnvelope
    connect?: Enumerable<QuestionsWhereUniqueInput>
  }

  export type QuestionsUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutFormInput>, Enumerable<QuestionsUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutFormInput>
    createMany?: QuestionsCreateManyFormInputEnvelope
    connect?: Enumerable<QuestionsWhereUniqueInput>
  }

  export type QuestionsUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutFormInput>, Enumerable<QuestionsUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<QuestionsUpsertWithWhereUniqueWithoutFormInput>
    createMany?: QuestionsCreateManyFormInputEnvelope
    set?: Enumerable<QuestionsWhereUniqueInput>
    disconnect?: Enumerable<QuestionsWhereUniqueInput>
    delete?: Enumerable<QuestionsWhereUniqueInput>
    connect?: Enumerable<QuestionsWhereUniqueInput>
    update?: Enumerable<QuestionsUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<QuestionsUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<QuestionsScalarWhereInput>
  }

  export type QuestionsUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutFormInput>, Enumerable<QuestionsUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<QuestionsUpsertWithWhereUniqueWithoutFormInput>
    createMany?: QuestionsCreateManyFormInputEnvelope
    set?: Enumerable<QuestionsWhereUniqueInput>
    disconnect?: Enumerable<QuestionsWhereUniqueInput>
    delete?: Enumerable<QuestionsWhereUniqueInput>
    connect?: Enumerable<QuestionsWhereUniqueInput>
    update?: Enumerable<QuestionsUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<QuestionsUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<QuestionsScalarWhereInput>
  }

  export type AnswersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<AnswersCreateWithoutQuestionsInput>, Enumerable<AnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<AnswersCreateOrConnectWithoutQuestionsInput>
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    connect?: Enumerable<AnswersWhereUniqueInput>
  }

  export type FormCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutQuestionsInput
    connect?: FormWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutQuestionsInput>, Enumerable<UserAnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutQuestionsInput>
    createMany?: UserAnswersCreateManyQuestionsInputEnvelope
    connect?: Enumerable<UserAnswersWhereUniqueInput>
  }

  export type AnswersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<AnswersCreateWithoutQuestionsInput>, Enumerable<AnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<AnswersCreateOrConnectWithoutQuestionsInput>
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    connect?: Enumerable<AnswersWhereUniqueInput>
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutQuestionsInput>, Enumerable<UserAnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutQuestionsInput>
    createMany?: UserAnswersCreateManyQuestionsInputEnvelope
    connect?: Enumerable<UserAnswersWhereUniqueInput>
  }

  export type AnswersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<AnswersCreateWithoutQuestionsInput>, Enumerable<AnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<AnswersCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<AnswersUpsertWithWhereUniqueWithoutQuestionsInput>
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    set?: Enumerable<AnswersWhereUniqueInput>
    disconnect?: Enumerable<AnswersWhereUniqueInput>
    delete?: Enumerable<AnswersWhereUniqueInput>
    connect?: Enumerable<AnswersWhereUniqueInput>
    update?: Enumerable<AnswersUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<AnswersUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<AnswersScalarWhereInput>
  }

  export type FormUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutQuestionsInput
    upsert?: FormUpsertWithoutQuestionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<FormUpdateWithoutQuestionsInput, FormUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAnswersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutQuestionsInput>, Enumerable<UserAnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<UserAnswersUpsertWithWhereUniqueWithoutQuestionsInput>
    createMany?: UserAnswersCreateManyQuestionsInputEnvelope
    set?: Enumerable<UserAnswersWhereUniqueInput>
    disconnect?: Enumerable<UserAnswersWhereUniqueInput>
    delete?: Enumerable<UserAnswersWhereUniqueInput>
    connect?: Enumerable<UserAnswersWhereUniqueInput>
    update?: Enumerable<UserAnswersUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<UserAnswersUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<UserAnswersScalarWhereInput>
  }

  export type AnswersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<AnswersCreateWithoutQuestionsInput>, Enumerable<AnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<AnswersCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<AnswersUpsertWithWhereUniqueWithoutQuestionsInput>
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    set?: Enumerable<AnswersWhereUniqueInput>
    disconnect?: Enumerable<AnswersWhereUniqueInput>
    delete?: Enumerable<AnswersWhereUniqueInput>
    connect?: Enumerable<AnswersWhereUniqueInput>
    update?: Enumerable<AnswersUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<AnswersUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<AnswersScalarWhereInput>
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutQuestionsInput>, Enumerable<UserAnswersUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<UserAnswersUpsertWithWhereUniqueWithoutQuestionsInput>
    createMany?: UserAnswersCreateManyQuestionsInputEnvelope
    set?: Enumerable<UserAnswersWhereUniqueInput>
    disconnect?: Enumerable<UserAnswersWhereUniqueInput>
    delete?: Enumerable<UserAnswersWhereUniqueInput>
    connect?: Enumerable<UserAnswersWhereUniqueInput>
    update?: Enumerable<UserAnswersUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<UserAnswersUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<UserAnswersScalarWhereInput>
  }

  export type QuestionsCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutAnswersInput
    connect?: QuestionsWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutAnswersInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutAnswersInput>, Enumerable<UserAnswersUncheckedCreateWithoutAnswersInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutAnswersInput>
    createMany?: UserAnswersCreateManyAnswersInputEnvelope
    connect?: Enumerable<UserAnswersWhereUniqueInput>
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutAnswersInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutAnswersInput>, Enumerable<UserAnswersUncheckedCreateWithoutAnswersInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutAnswersInput>
    createMany?: UserAnswersCreateManyAnswersInputEnvelope
    connect?: Enumerable<UserAnswersWhereUniqueInput>
  }

  export type QuestionsUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutAnswersInput
    upsert?: QuestionsUpsertWithoutAnswersInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<QuestionsUpdateWithoutAnswersInput, QuestionsUncheckedUpdateWithoutAnswersInput>
  }

  export type UserAnswersUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutAnswersInput>, Enumerable<UserAnswersUncheckedCreateWithoutAnswersInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutAnswersInput>
    upsert?: Enumerable<UserAnswersUpsertWithWhereUniqueWithoutAnswersInput>
    createMany?: UserAnswersCreateManyAnswersInputEnvelope
    set?: Enumerable<UserAnswersWhereUniqueInput>
    disconnect?: Enumerable<UserAnswersWhereUniqueInput>
    delete?: Enumerable<UserAnswersWhereUniqueInput>
    connect?: Enumerable<UserAnswersWhereUniqueInput>
    update?: Enumerable<UserAnswersUpdateWithWhereUniqueWithoutAnswersInput>
    updateMany?: Enumerable<UserAnswersUpdateManyWithWhereWithoutAnswersInput>
    deleteMany?: Enumerable<UserAnswersScalarWhereInput>
  }

  export type UserAnswersUncheckedUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<Enumerable<UserAnswersCreateWithoutAnswersInput>, Enumerable<UserAnswersUncheckedCreateWithoutAnswersInput>>
    connectOrCreate?: Enumerable<UserAnswersCreateOrConnectWithoutAnswersInput>
    upsert?: Enumerable<UserAnswersUpsertWithWhereUniqueWithoutAnswersInput>
    createMany?: UserAnswersCreateManyAnswersInputEnvelope
    set?: Enumerable<UserAnswersWhereUniqueInput>
    disconnect?: Enumerable<UserAnswersWhereUniqueInput>
    delete?: Enumerable<UserAnswersWhereUniqueInput>
    connect?: Enumerable<UserAnswersWhereUniqueInput>
    update?: Enumerable<UserAnswersUpdateWithWhereUniqueWithoutAnswersInput>
    updateMany?: Enumerable<UserAnswersUpdateManyWithWhereWithoutAnswersInput>
    deleteMany?: Enumerable<UserAnswersScalarWhereInput>
  }

  export type AnswersCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<AnswersCreateWithoutUserAnswersInput, AnswersUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutUserAnswersInput
    connect?: AnswersWhereUniqueInput
  }

  export type QuestionsCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUserAnswersInput
    connect?: QuestionsWhereUniqueInput
  }

  export type AnswersUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<AnswersCreateWithoutUserAnswersInput, AnswersUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutUserAnswersInput
    upsert?: AnswersUpsertWithoutUserAnswersInput
    connect?: AnswersWhereUniqueInput
    update?: XOR<AnswersUpdateWithoutUserAnswersInput, AnswersUncheckedUpdateWithoutUserAnswersInput>
  }

  export type QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUserAnswersInput
    upsert?: QuestionsUpsertWithoutUserAnswersInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<QuestionsUpdateWithoutUserAnswersInput, QuestionsUncheckedUpdateWithoutUserAnswersInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type QuestionsCreateWithoutFormInput = {
    question: string
    createdat?: Date | string
    Answers?: AnswersCreateNestedManyWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutFormInput = {
    id?: number
    question: string
    createdat?: Date | string
    Answers?: AnswersUncheckedCreateNestedManyWithoutQuestionsInput
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutFormInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutFormInput, QuestionsUncheckedCreateWithoutFormInput>
  }

  export type QuestionsCreateManyFormInputEnvelope = {
    data: Enumerable<QuestionsCreateManyFormInput>
    skipDuplicates?: boolean
  }

  export type QuestionsUpsertWithWhereUniqueWithoutFormInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutFormInput, QuestionsUncheckedUpdateWithoutFormInput>
    create: XOR<QuestionsCreateWithoutFormInput, QuestionsUncheckedCreateWithoutFormInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutFormInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutFormInput, QuestionsUncheckedUpdateWithoutFormInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutFormInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: Enumerable<QuestionsScalarWhereInput>
    OR?: Enumerable<QuestionsScalarWhereInput>
    NOT?: Enumerable<QuestionsScalarWhereInput>
    id?: IntFilter | number
    formid?: IntFilter | number
    question?: StringFilter | string
    createdat?: DateTimeFilter | Date | string
  }

  export type AnswersCreateWithoutQuestionsInput = {
    answer: string
    createdat?: Date | string
    UserAnswers?: UserAnswersCreateNestedManyWithoutAnswersInput
  }

  export type AnswersUncheckedCreateWithoutQuestionsInput = {
    id?: number
    answer: string
    createdat?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type AnswersCreateOrConnectWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    create: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswersCreateManyQuestionsInputEnvelope = {
    data: Enumerable<AnswersCreateManyQuestionsInput>
    skipDuplicates?: boolean
  }

  export type FormCreateWithoutQuestionsInput = {
    formname: string
    createdat?: Date | string
  }

  export type FormUncheckedCreateWithoutQuestionsInput = {
    id?: number
    formname: string
    createdat?: Date | string
  }

  export type FormCreateOrConnectWithoutQuestionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswersCreateWithoutQuestionsInput = {
    userid: number
    createdat?: Date | string
    Answers: AnswersCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutQuestionsInput = {
    id?: number
    questionanswerid: number
    userid: number
    createdat?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutQuestionsInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutQuestionsInput, UserAnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswersCreateManyQuestionsInputEnvelope = {
    data: Enumerable<UserAnswersCreateManyQuestionsInput>
    skipDuplicates?: boolean
  }

  export type AnswersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    update: XOR<AnswersUpdateWithoutQuestionsInput, AnswersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    data: XOR<AnswersUpdateWithoutQuestionsInput, AnswersUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswersUpdateManyWithWhereWithoutQuestionsInput = {
    where: AnswersScalarWhereInput
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyWithoutAnswersInput>
  }

  export type AnswersScalarWhereInput = {
    AND?: Enumerable<AnswersScalarWhereInput>
    OR?: Enumerable<AnswersScalarWhereInput>
    NOT?: Enumerable<AnswersScalarWhereInput>
    id?: IntFilter | number
    questionid?: IntFilter | number
    answer?: StringFilter | string
    createdat?: DateTimeFilter | Date | string
  }

  export type FormUpsertWithoutQuestionsInput = {
    update: XOR<FormUpdateWithoutQuestionsInput, FormUncheckedUpdateWithoutQuestionsInput>
    create: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
  }

  export type FormUpdateWithoutQuestionsInput = {
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    formname?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutQuestionsInput, UserAnswersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserAnswersCreateWithoutQuestionsInput, UserAnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutQuestionsInput, UserAnswersUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutQuestionsInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutUserAnswersInput>
  }

  export type UserAnswersScalarWhereInput = {
    AND?: Enumerable<UserAnswersScalarWhereInput>
    OR?: Enumerable<UserAnswersScalarWhereInput>
    NOT?: Enumerable<UserAnswersScalarWhereInput>
    id?: IntFilter | number
    questionid?: IntFilter | number
    questionanswerid?: IntFilter | number
    userid?: IntFilter | number
    createdat?: DateTimeFilter | Date | string
  }

  export type QuestionsCreateWithoutAnswersInput = {
    question: string
    createdat?: Date | string
    Form: FormCreateNestedOneWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutAnswersInput = {
    id?: number
    formid: number
    question: string
    createdat?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutAnswersInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
  }

  export type UserAnswersCreateWithoutAnswersInput = {
    userid: number
    createdat?: Date | string
    Questions: QuestionsCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutAnswersInput = {
    id?: number
    questionid: number
    userid: number
    createdat?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutAnswersInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
  }

  export type UserAnswersCreateManyAnswersInputEnvelope = {
    data: Enumerable<UserAnswersCreateManyAnswersInput>
    skipDuplicates?: boolean
  }

  export type QuestionsUpsertWithoutAnswersInput = {
    update: XOR<QuestionsUpdateWithoutAnswersInput, QuestionsUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionsUpdateWithoutAnswersInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Form?: FormUpdateOneRequiredWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    formid?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutAnswersInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutAnswersInput, UserAnswersUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutAnswersInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutAnswersInput, UserAnswersUncheckedUpdateWithoutAnswersInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutAnswersInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutUserAnswersInput>
  }

  export type AnswersCreateWithoutUserAnswersInput = {
    answer: string
    createdat?: Date | string
    Questions: QuestionsCreateNestedOneWithoutAnswersInput
  }

  export type AnswersUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    questionid: number
    answer: string
    createdat?: Date | string
  }

  export type AnswersCreateOrConnectWithoutUserAnswersInput = {
    where: AnswersWhereUniqueInput
    create: XOR<AnswersCreateWithoutUserAnswersInput, AnswersUncheckedCreateWithoutUserAnswersInput>
  }

  export type QuestionsCreateWithoutUserAnswersInput = {
    question: string
    createdat?: Date | string
    Answers?: AnswersCreateNestedManyWithoutQuestionsInput
    Form: FormCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    formid: number
    question: string
    createdat?: Date | string
    Answers?: AnswersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutUserAnswersInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
  }

  export type AnswersUpsertWithoutUserAnswersInput = {
    update: XOR<AnswersUpdateWithoutUserAnswersInput, AnswersUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<AnswersCreateWithoutUserAnswersInput, AnswersUncheckedCreateWithoutUserAnswersInput>
  }

  export type AnswersUpdateWithoutUserAnswersInput = {
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUpsertWithoutUserAnswersInput = {
    update: XOR<QuestionsUpdateWithoutUserAnswersInput, QuestionsUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
  }

  export type QuestionsUpdateWithoutUserAnswersInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUpdateManyWithoutQuestionsNestedInput
    Form?: FormUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    formid?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsCreateManyFormInput = {
    id?: number
    question: string
    createdat?: Date | string
  }

  export type QuestionsUpdateWithoutFormInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUpdateManyWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUncheckedUpdateManyWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswersCreateManyQuestionsInput = {
    id?: number
    answer: string
    createdat?: Date | string
  }

  export type UserAnswersCreateManyQuestionsInput = {
    id?: number
    questionanswerid: number
    userid: number
    createdat?: Date | string
  }

  export type AnswersUpdateWithoutQuestionsInput = {
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUpdateManyWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateManyWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUpdateWithoutQuestionsInput = {
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Answers?: AnswersUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionanswerid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionanswerid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyAnswersInput = {
    id?: number
    questionid: number
    userid: number
    createdat?: Date | string
  }

  export type UserAnswersUpdateWithoutAnswersInput = {
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
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