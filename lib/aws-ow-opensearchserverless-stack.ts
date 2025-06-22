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
      const ossCollection = new VectorCollection(this, `${collectionName}-oss-collection`, {
        collectionName,
        collectionType,
        standbyReplicas: collectionStandbyReplicas,
        description: `OpenSearch Serverless collection for ${collectionName} with type ${collectionType} and standby replicas ${collectionStandbyReplicas}`,
      });

      // Get the collection details
      const vectorCollectionName = ossCollection.collectionName;
      const vectorCollectionId = ossCollection.collectionId;
      const vectorCollectionArn = ossCollection.collectionArn;
      const vectorCollectionStandbyReplicas = ossCollection.standbyReplicas;
      const vectorCollectionType = ossCollection.collectionType;

      // Create the outputs
      new cdk.CfnOutput(this, `${collectionName}-vector-collection-name`, {
        value: vectorCollectionName,
        description: `Name of the OpenSearch Serverless collection`,
        exportName: `${collectionName}-oss-collection-name`,
      });

      new cdk.CfnOutput(this, `${collectionName}-vector-collection-id`, {
        value: vectorCollectionId,
        description: `ID of the OpenSearch Serverless collection`,
        exportName: `${collectionName}-oss-collection-id`,
      });

      new cdk.CfnOutput(this, `${collectionName}-vector-collection-arn`, {
        value: vectorCollectionArn,
        description: `ARN of the OpenSearch Serverless collection`,
        exportName: `${collectionName}-oss-collection-arn`,
      });

      new cdk.CfnOutput(this, `${collectionName}-vector-collection-standby-replicas`, {
        value: vectorCollectionStandbyReplicas,
        description: `Standby replicas of the OpenSearch Serverless collection`,
        exportName: `${collectionName}-oss-collection-standby-replicas`,
      });

      new cdk.CfnOutput(this, `${collectionName}-vector-collection-type`, {
        value: vectorCollectionType,
        description: `Type of the OpenSearch Serverless collection`,
        exportName: `${collectionName}-oss-collection-type`,
      });
    }
  }
}
