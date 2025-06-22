export interface AwsOwOpensearchserverlessStackVpcProps {
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
}
