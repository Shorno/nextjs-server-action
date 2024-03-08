export {}

declare global {
    interface  IClient {
        _id: string;
        name: string;
        mobile: string;
        address: string;
        serial: string;
    }
}