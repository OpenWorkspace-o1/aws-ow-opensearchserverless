declare module NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        CDK_DEPLOY_REGION: string;
        ENVIRONMENT: string;
        APP_NAME: string;
        VPC_ID: string;
        VPC_SUBNET_TYPE: string;
        VPC_PRIVATE_SUBNET_IDS: string;
        VPC_PRIVATE_SUBNET_AZS: string;
        VPC_PRIVATE_SUBNET_ROUTE_TABLE_IDS: string;
        OWNER: string;
        COLLECTION_NAMES: string;
        COLLECTION_TYPES: string;
    }
}
