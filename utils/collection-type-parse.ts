import { VectorCollectionType } from "@cdklabs/generative-ai-cdk-constructs/lib/cdk-lib/opensearchserverless";

export function parseCollectionType(collectionType: string): VectorCollectionType {
    switch (collectionType) {
        case 'VECTORSEARCH':
            return VectorCollectionType.VECTORSEARCH;
        case 'SEARCH':
            return VectorCollectionType.SEARCH;
        case 'TIMESERIES':
            return VectorCollectionType.TIMESERIES;
        default:
            throw new Error(`Invalid collection type: ${collectionType}`);
    }
}
