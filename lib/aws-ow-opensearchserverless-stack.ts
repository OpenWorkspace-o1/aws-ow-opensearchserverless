import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface AwsOwOpensearchserverlessStackProps extends cdk.StackProps {
  /** Resource prefix for all AWS resources */
  readonly resourcePrefix: string;
  /** AWS region where resources will be deployed */
  readonly deployRegion: string | undefined;
  /** Deployment environment (e.g., development, staging, production) */
  readonly deployEnvironment: string;
  /** Name of the application */
  readonly appName: string;
  /** Type of VPC subnet (e.g., public, private) */
  readonly vpcSubnetType: string;
  /** Owner or team responsible for the resources */
  readonly owner: string;
  /** ID of the VPC where resources will be deployed */
  readonly vpcId: string;
  /** List of private subnet IDs in the VPC */
  readonly vpcPrivateSubnetIds: string[];
  /** List of Availability Zones for private subnets */
  readonly vpcPrivateSubnetAzs: string[];
  /** List of route table IDs for private subnets */
  readonly vpcPrivateSubnetRouteTableIds: string[];
  /** List of collection names */
  readonly collectionNames: string[];
}

export class AwsOwOpensearchserverlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AwsOwOpensearchserverlessStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsOwOpensearchserverlessQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
