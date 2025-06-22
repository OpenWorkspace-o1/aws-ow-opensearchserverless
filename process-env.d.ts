declare module NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        CDK_DEPLOY_REGION: string;
        ENVIRONMENT: string;
        APP_NAME: string;
        OWNER: string;
        COLLECTION_NAMES: string;
        COLLECTION_TYPES: string;
        COLLECTION_STANDBY_REPLICAS: string;
    }
}
