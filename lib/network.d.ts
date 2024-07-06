/// <reference types="node" />
/// <reference types="node" />
import { Socket } from 'dgram';
import { NetworkInterfaceInfoIPv4 } from 'os';
import Control from "./control";
import Database from "./db";
import DeviceManager from "./devices";
import LocalDatabase from "./localdb";
import { MixstatusProcessor } from "./mixstatus";
import RemoteDatabase from "./remotedb";
import StatusEmitter from "./status";
import { NetworkState } from "./types";
export interface NetworkConfig {
    /**
     * The network interface to listen for devices on the network over
     */
    iface: NetworkInterfaceInfoIPv4;
    /**
     * The ID of the virtual CDJ to pose as.
     *
     * IMPORTANT:
     *
     * You will likely want to configure this to be > 6, however it is important to
     * note, if you choose an ID within the 1-6 range, no other CDJ may exist on the
     * network using that ID. you CAN NOT have 6 CDJs if you're using one of their slots.
     *
     * However, should you want to make metadata queries to a unanalized media
     * device connected to the CDJ, or metadata queries for CD disc data, you MUST
     * use a ID within the 1-6 range, as the CDJs will not respond to metadata
     * requests outside of the range of 1-6
     *
     * Note that rekordbox analized media connected to the CDJ is accessed out of
     * band of the networks remote database protocl, and is not limited by this
     * restriction.
     */
    vcdjId: number;
}
interface ConstructOpts {
    config?: NetworkConfig;
    announceSocket: Socket;
    beatSocket: Socket;
    statusSocket: Socket;
    deviceManager: DeviceManager;
    statusEmitter: StatusEmitter;
}
/**
 * Services that are not accessible until connected
 */
declare type ConnectedServices = 'statusEmitter' | 'control' | 'db' | 'localdb' | 'remotedb' | 'mixstatus';
export declare type ConnectedProlinkNetwork = ProlinkNetwork & {
    [P in ConnectedServices]: NonNullable<ProlinkNetwork[P]>;
} & {
    state: NetworkState.Connected;
    isConfigured: true;
};
/**
 * Brings the Prolink network online.
 *
 * This is the primary entrypoint for connecting to the prolink network.
 */
export declare function bringOnline(config?: NetworkConfig): Promise<ProlinkNetwork>;
export declare class ProlinkNetwork {
    #private;
    /**
     * @internal
     */
    constructor({ config, announceSocket, beatSocket, statusSocket, deviceManager, statusEmitter, }: ConstructOpts);
    /**
     * Configure / reconfigure the network with an explicit configuration.
     *
     * You may need to disconnect and re-connect the network after making a
     * networking configuration change.
     */
    configure(config: NetworkConfig): void;
    /**
     * Wait for another device to show up on the network to determine which network
     * interface to listen on.
     *
     * Defaults the Virtual CDJ ID to 5.
     */
    autoconfigFromPeers(): Promise<void>;
    /**
     * Connect to the network.
     *
     * The network must first have been configured (either with autoconfigFromPeers
     * or manual configuration). This will then initialize all the network services.
     */
    connect(): void;
    /**
     * Disconnect from the network
     */
    disconnect(): Promise<[unknown, unknown, unknown]>;
    /**
     * Get the current NetworkState of the network.
     *
     * When the network is Online you may use the deviceManager to list and react to
     * devices on the nettwork
     *
     * Once the network is Connected you may use the statusEmitter to listen for
     * player status events, query the media databases of devices using the db
     * service (or specifically query the localdb or remotedb).
     */
    get state(): NetworkState;
    /**
     * Check if the network has been configured. You cannot connect to the network
     * until it has been configured.
     */
    get isConfigured(): boolean;
    /**
     * Typescript discriminate helper. Refines the type of the network to one
     * that reflects the connected status. Useful to avoid having to gaurd the
     * service getters from nulls.
     */
    isConnected(): this is ConnectedProlinkNetwork;
    /**
     * Get the {@link DeviceManager} service. This service is used to monitor and
     * react to devices connecting and disconnecting from the prolink network.
     */
    get deviceManager(): DeviceManager;
    /**
     * Get the {@link StatusEmitter} service. This service is used to monitor
     * status updates on each CDJ.
     */
    get statusEmitter(): StatusEmitter | null;
    /**
     * Get the {@link Control} service. This service can be used to control the
     * Playstate of CDJs on the network.
     */
    get control(): Control | null;
    /**
     * Get the {@link Database} service. This service is used to retrieve
     * metadata and listings from devices on the network, automatically choosing the
     * best strategy to access the data.
     */
    get db(): Database | null;
    /**
     * Get the {@link LocalDatabase} service. This service is used to query and sync
     * metadata that is downloaded directly from the rekordbox database present
     * on media connected to the CDJs.
     */
    get localdb(): LocalDatabase | null;
    /**
     * Get the {@link RemoteDatabase} service. This service is used to query
     * metadata directly from the database service running on Rekordbox and the CDJs
     * themselves.
     *
     * NOTE: To use this service to access the CDJ remote database service, the
     *       Virtual CDJ must report itself as an ID between 1 and 6. This means
     *       there cannot be four physical CDJs on the network to access any CDJs
     *       remote database.
     */
    get remotedb(): RemoteDatabase | null;
    /**
     * Get (and initalize) the {@link MixstatusProcessor} service. This service can
     * be used to monitor the 'status' of devices on the network as a whole.
     */
    get mixstatus(): MixstatusProcessor | null;
}
export {};
