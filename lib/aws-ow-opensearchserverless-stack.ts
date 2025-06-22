import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { parseCollectionType } from '../utils/collection-type-parse';
import { parseCollectionStandbyReplicas } from '../utils/collection-standby-replicas-parse';
import { VectorCollection } from '@cdklabs/generative-ai-cdk-constructs/lib/cdk-lib/opensearchserverless';
import { AwsOwOpensearchserverlessStackProps } from './AwsOwOpensearchserverlessStackProps';

export class AwsOwOpensearchserverlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AwsOwOpensearchserverlessStackProps) {
    super(scope, id, props);

    for (const [index, collectionName] of props.collectionNames.entries()) {
      const collectionType = parseCollectionType(props.collectionTypes[index]);
      const collectionStandbyReplicas = parseCollectionStandbyReplicas(props.collectionStandbyReplicas[index]);

      // Create the OpenSearch Serverless collection
      const ossCollection = new VectorCollection(this, `${props.resourcePrefix}-oss-${collectionName}`, {
        collectionName: `${props.appName}-${props.deployEnvironment}-${collectionName}`,
        collectionType,
        standbyReplicas: collectionStandbyReplicas,
        description: `OpenSearch Serverless collection for ${collectionName} with type ${collectionType} and standby replicas ${collectionStandbyReplicas}`,
      });

      // Create the outputs
      new cdk.CfnOutput(this, `${collectionName}-oss-collection-name`, {
        value: ossCollection.collectionName,
        description: `Name of the OpenSearch Serverless collection`,
        exportName: `${props.resourcePrefix}-${collectionName}-oss-collection-name`,
      });

      new cdk.CfnOutput(this, `${collectionName}-oss-collection-id`, {
        value: ossCollection.collectionId,
        description: `ID of the OpenSearch Serverless collection`,
        exportName: `${props.resourcePrefix}-${collectionName}-oss-collection-id`,
      });

      new cdk.CfnOutput(this, `${collectionName}-oss-collection-arn`, {
        value: ossCollection.collectionArn,
        description: `ARN of the OpenSearch Serverless collection`,
        exportName: `${props.resourcePrefix}-${collectionName}-oss-collection-arn`,
      });

      new cdk.CfnOutput(this, `${collectionName}-oss-collection-standby-replicas`, {
        value: ossCollection.standbyReplicas,
        description: `Standby replicas of the OpenSearch Serverless collection`,
        exportName: `${props.resourcePrefix}-${collectionName}-oss-collection-standby-replicas`,
      });

      new cdk.CfnOutput(this, `${collectionName}-oss-collection-type`, {
        value: ossCollection.collectionType,
        description: `Type of the OpenSearch Serverless collection`,
        exportName: `${props.resourcePrefix}-${collectionName}-oss-collection-type`,
      });
    }
  }
}
