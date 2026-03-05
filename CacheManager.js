/**
 * @class CacheManager
 * @description Singleton pattern implementation for managing application cache.
 */
class CacheManager {
  constructor() {
 
    if (CacheManager.instance) {
      return CacheManager.instance;
    }
    
 
    this._cache = new Map(); 
    this._maxSize = 100;
    
 
    CacheManager.instance = this;
  }

  /**
   * Retrieves a value from the cache.
   * @param {string} key - The cache key.
   * @returns {any|null} The cached value or null if not found.
   */
  get(key) {
    if (typeof key !== 'string' || !key.trim()) {
      throw new Error('Invalid key provided to cache.'); // Добавлена обработка ошибок
    }
    return this._cache.has(key) ? this._cache.get(key) : null;
  }

  /**
   * Sets a value in the cache with simple eviction.
   * @param {string} key - The cache key.
   * @param {any} value - The value to cache.
   */
  set(key, value) {
    if (typeof key !== 'string' || !key.trim()) {
      throw new Error('Invalid key provided to cache.');
    }
    
    
    if (this._cache.size >= this._maxSize && !this._cache.has(key)) {
      const firstKey = this._cache.keys().next().value;
      this._cache.delete(firstKey);
    }
    
    this._cache.set(key, value);
  }

  /**
   * Clears the entire cache.
   */
  clear() {
    this._cache.clear();
  }

  /**
   * Gets the current number of items in the cache.
   * @returns {number}
   */
  getSize() {
    return this._cache.size;
  }
}


const instance = new CacheManager();
Object.freeze(instance);
export default instance;
