import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PilatesClass {
    duration_minutes: bigint;
    name: string;
    description: string;
}
export interface StudioInfo {
    tagline: string;
    name: string;
    contact_email: string;
    classes: Array<PilatesClass>;
}
export interface backendInterface {
    getAllClasses(): Promise<Array<PilatesClass>>;
    getClassByName(name: string): Promise<PilatesClass>;
    getStudioInfo(): Promise<StudioInfo>;
}
