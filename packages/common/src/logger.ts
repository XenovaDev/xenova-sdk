export function createLogger(name = 'xenova') {
  return {
    info: (...args: any[]) => console.log('[INFO]', name, ...args),
    warn: (...args: any[]) => console.warn('[WARN]', name, ...args),
    error: (...args: any[]) => console.error('[ERROR]', name, ...args)
  };
}
