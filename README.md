# AWS OpenSearch Serverless CDK Infrastructure

A comprehensive AWS CDK TypeScript project for deploying and managing OpenSearch Serverless collections with best practices, security compliance, and automated resource tagging.

## 🚀 Overview

This project provides infrastructure as code (IaC) for AWS OpenSearch Serverless using AWS CDK. It creates vector collections with configurable types, standby replicas, and comprehensive CloudFormation outputs. The solution includes security best practices, automated resource tagging, and environment-specific configurations.

## ✨ Features

- **Multi-Collection Support**: Deploy multiple OpenSearch Serverless collections in a single stack
- **Collection Types**: Support for VECTORSEARCH, SEARCH, and TIMESERIES collection types
- **Standby Replicas**: Configurable standby replica settings (ENABLED/DISABLED)
- **Security Compliance**: Built-in AWS Solutions security checks using cdk-nag
- **Resource Tagging**: Automated tagging with environment, project, and owner information
- **Environment Variables**: Secure configuration management using environment variables
- **CloudFormation Outputs**: Comprehensive outputs for collection metadata
- **TypeScript**: Full TypeScript support with type safety

## 🏗️ Architecture

The project creates OpenSearch Serverless collections using the `@cdklabs/generative-ai-cdk-constructs` library, which provides the `VectorCollection` construct. Each collection is configured with:

- Collection name with resource prefix
- Collection type (VECTORSEARCH, SEARCH, TIMESERIES)
- Standby replica configuration
- Comprehensive CloudFormation outputs

## 📋 Prerequisites

- Node.js 22.x or later
- AWS CDK CLI v2.1019.1 or later
- AWS CLI configured with appropriate credentials
- TypeScript 5.8.3 or later

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aws-ow-opensearchserverless
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
APP_NAME=your-app-name
CDK_DEPLOY_REGION=us-east-1
ENVIRONMENT=development
OWNER=your-team-name
COLLECTION_NAMES=collection1,collection2
COLLECTION_TYPES=VECTORSEARCH,SEARCH
COLLECTION_STANDBY_REPLICAS=ENABLED,DISABLED
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `APP_NAME` | Name of the application | Yes | `my-search-app` |
| `CDK_DEPLOY_REGION` | AWS region for deployment | Yes | `us-east-1` |
| `ENVIRONMENT` | Deployment environment | Yes | `development`, `staging`, `production` |
| `OWNER` | Team or owner responsible | Yes | `data-team` |
| `COLLECTION_NAMES` | Comma-separated collection names | Yes | `vectors,documents,logs` |
| `COLLECTION_TYPES` | Comma-separated collection types | Yes | `VECTORSEARCH,SEARCH,TIMESERIES` |
| `COLLECTION_STANDBY_REPLICAS` | Comma-separated standby replica settings | Yes | `ENABLED,DISABLED,ENABLED` |

### Collection Types

- **VECTORSEARCH**: Optimized for vector similarity search operations
- **SEARCH**: General-purpose search functionality
- **TIMESERIES**: Optimized for time-series data

### Standby Replicas

- **ENABLED**: Provides high availability with standby replicas
- **DISABLED**: Single instance without standby replicas

## 🚀 Usage

### Development

1. **Build the project**:

```bash
npm run build
```

2. **Watch for changes**:

```bash
npm run watch
```

3. **Run tests**:

```bash
npm run test
```

### Deployment

1. **Synthesize CloudFormation template**:

```bash
npx cdk synth
```

2. **Deploy to AWS**:

```bash
npx cdk deploy
```

3. **View deployment differences**:

```bash
npx cdk diff
```

### Stack Outputs

After deployment, the stack provides the following outputs for each collection:

- `{collection-name}-oss-collection-name`: Collection name
- `{collection-name}-oss-collection-id`: Collection ID
- `{collection-name}-oss-collection-arn`: Collection ARN
- `{collection-name}-oss-collection-standby-replicas`: Standby replica configuration
- `{collection-name}-oss-collection-type`: Collection type

## 🔧 Project Structure

```Bash
aws-ow-opensearchserverless/
├── bin/
│   └── aws-ow-opensearchserverless.ts    # CDK app entry point
├── lib/
│   ├── aws-ow-opensearchserverless-stack.ts      # Main stack implementation
│   └── AwsOwOpensearchserverlessStackProps.ts    # Stack properties interface
├── utils/
│   ├── apply-tag.ts                      # Resource tagging utility
│   ├── check-environment-variable.ts     # Environment variable validation
│   ├── collection-standby-replicas-parse.ts      # Standby replica parser
│   ├── collection-type-parse.ts          # Collection type parser
│   └── vpc-type-parser.ts                # VPC type parser
├── test/
│   └── aws-ow-opensearchserverless.test.ts       # Unit tests
├── cdk.json                              # CDK configuration
├── package.json                          # Dependencies and scripts
└── tsconfig.json                         # TypeScript configuration
```

## 🔒 Security Features

- **AWS Solutions Security Checks**: Automated security compliance using cdk-nag
- **Resource Tagging**: Consistent tagging across all resources
- **Environment Variable Validation**: Secure configuration management
- **Best Practices**: Follows AWS CDK best practices and recommendations

## 🧪 Testing

Run the test suite to ensure everything works correctly:

```bash
npm run test
```

The project includes Jest-based unit tests for all utility functions and stack components.

## 📦 Dependencies

### Core Dependencies

- `aws-cdk-lib`: AWS CDK core library
- `@cdklabs/generative-ai-cdk-constructs`: OpenSearch Serverless constructs
- `cdk-nag`: Security compliance checks
- `constructs`: CDK constructs library
- `dotenv`: Environment variable management

### Development Dependencies

- `typescript`: TypeScript compiler
- `jest`: Testing framework
- `@types/*`: TypeScript type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include environment details and error messages

## 🔄 Version History

- **v0.1.0**: Initial release with OpenSearch Serverless collection support
