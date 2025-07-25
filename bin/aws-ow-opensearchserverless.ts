#!/usr/bin/env node
import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import { checkEnvVariables } from '../utils/check-environment-variable';

import { ApplyTags } from '../utils/apply-tag';
import { Aspects } from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { AwsOwOpensearchserverlessStack } from '../lib/aws-ow-opensearchserverless-stack';
import { AwsOwOpensearchserverlessStackProps } from '../lib/AwsOwOpensearchserverlessStackProps';

dotenv.config(); // Load environment variables from .env file
const app = new cdk.App();

const appAspects = Aspects.of(app);

// check APP_NAME variable
checkEnvVariables('APP_NAME',
    'CDK_DEPLOY_REGION',
    'ENVIRONMENT',
    'OWNER',
    'COLLECTION_NAMES',
    'COLLECTION_TYPES',
    'COLLECTION_STANDBY_REPLICAS'
);

const { CDK_DEFAULT_ACCOUNT: account } = process.env;

const cdkRegion = process.env.CDK_DEPLOY_REGION;
const deployEnvironment = process.env.ENVIRONMENT!;

const appName = process.env.APP_NAME!;
const owner = process.env.OWNER!;

// check best practices based on AWS Solutions Security Matrix
appAspects.add(new AwsSolutionsChecks());

appAspects.add(new ApplyTags({
    environment: deployEnvironment as 'development' | 'staging' | 'production' | 'feature',
    project: appName,
    owner: owner,
}));

const stackProps: AwsOwOpensearchserverlessStackProps = {
    resourcePrefix: `${appName}-${deployEnvironment}`,
    env: {
        region: cdkRegion,
        account,
    },
    deployRegion: cdkRegion,
    deployEnvironment,
    appName,
    owner,
    collectionNames: process.env.COLLECTION_NAMES!.split(','),
    collectionTypes: process.env.COLLECTION_TYPES!.split(','),
    collectionStandbyReplicas: process.env.COLLECTION_STANDBY_REPLICAS!.split(','),
};
new AwsOwOpensearchserverlessStack(app, `${owner}-${deployEnvironment}-AwsOwOpensearchserverlessStack`, {
    ...stackProps,
    stackName: `${owner}-${deployEnvironment}-AwsOwOpensearchserverlessStack`,
    description: `AwsOwOpensearchserverlessStack for ${appName} in ${cdkRegion} ${deployEnvironment}.`,
});

app.synth();
