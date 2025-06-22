import * as cdk from "aws-cdk-lib";

export interface AwsOwOpensearchserverlessStackProps extends cdk.StackProps {
    /** Resource prefix for all AWS resources */
    readonly resourcePrefix: string;
    /** AWS region where resources will be deployed */
    readonly deployRegion: string | undefined;
    /** Deployment environment (e.g., development, staging, production) */
    readonly deployEnvironment: string;
    /** Name of the application */
    readonly appName: string;
    /** Owner or team responsible for the resources */
    readonly owner: string;
    /** List of collection names */
    readonly collectionNames: string[];
    /** List of collection types */
    readonly collectionTypes: string[];
    /** List of collection standby replicas */
    readonly collectionStandbyReplicas: string[];
}
