export interface FetchParams {
    key: string;
    params?: any;
    callback(): any;
    expiresInSeconds?: number;
  }
  
  export interface KeyParams {
    key: string;
    params?: any;
  }
  
  export interface StoredData<T> {
    key: string;
    data: T;
    expiration: number;
  }
  
  export interface IStorageCache {
    fetch<T>(params: FetchParams): Promise<T> | T;
  }
  
  // By default data will expire in 5 minutes.
  const DEFAULT_EXPIRATION_SECONDS = 5 * 60;
  
  const MapCache = () => ({
    cache: new Map(),
  
    // The fetch method, before calling callback, will check if there is cached data.
    // If cached data is not available, it will call callback, store the data in memory
    // and return it. If cached data is available, it won't call callback and it will
    // just return the cached values.
    async fetch<T>({
      key,
      params = null,
      callback,
      expiresInSeconds = DEFAULT_EXPIRATION_SECONDS,
    }: FetchParams): Promise<T> {
      const cacheKey = this.generateKey({ key, params });
      const data = this.get<T>(cacheKey);
      const expiration = this.computeExpirationTime(expiresInSeconds);
  
      return data ? data : this.set<T>({ key: cacheKey, data: await callback(), expiration });
    },
  
    clear(): void {
      this.cache = new Map();
    },
  
    deleteKey(key: string): void {
      this.cache.forEach((value, keyCache: string) => {
        if (keyCache.includes(key)) {
          this.cache.delete(keyCache);
        }
      });
    },
  
    size(): number {
      return this.cache.size;
    },
  
    computeExpirationTime(expiresInSeconds: number): number {
      return new Date().getTime() + expiresInSeconds * 1000;
    },
  
    // This method returns a base64 string containing a combination of a key and parameters
    // creating a unique identifier for a specific key and specific parameters. This is
    // useful in case the callback returns different values based on parameters.
    generateKey({ key, params }: KeyParams): string {
      const keyValues = params ? { key, params } : { key };
      const stringifiedKey = JSON.stringify(keyValues);
      return stringifiedKey;
    },
  
    // Store the data in memory and attach to the object expiration containing the
    // expiration time.
    set<T>({ key, data, expiration }: StoredData<T>): T {
      this.cache.set(key, { data, expiration });
  
      return data;
    },
  
    // Will get specific data from the Map object based on a key and return null if
    // the data has expired.
    get<T>(key: string): T | null {
      if (this.cache.has(key)) {
        const { data, expiration } = this.cache.get(key) as StoredData<T>;
  
        return this.hasExpired(expiration) ? null : data;
      }
  
      return null;
    },
  
    hasExpired(expiration: number): boolean {
      return expiration < new Date().getTime();
    },
  });
  
  export default MapCache();
  