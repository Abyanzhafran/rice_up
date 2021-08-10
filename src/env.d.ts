declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    FIREBASE_CONFIG: string;
    FIREBASE_USE_EMULATOR: boolean;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
