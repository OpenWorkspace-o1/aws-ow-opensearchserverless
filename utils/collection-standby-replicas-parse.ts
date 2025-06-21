import { VectorCollectionStandbyReplicas } from "@cdklabs/generative-ai-cdk-constructs/lib/cdk-lib/opensearchserverless";

export function parseCollectionStandbyReplicas(collectionStandbyReplicas: string): VectorCollectionStandbyReplicas {
    switch (collectionStandbyReplicas) {
        case 'ENABLED':
            return VectorCollectionStandbyReplicas.ENABLED;
        case 'DISABLED':
            return VectorCollectionStandbyReplicas.DISABLED;
        default:
            throw new Error(`Invalid collection standby replicas: ${collectionStandbyReplicas}`);
    }
}
