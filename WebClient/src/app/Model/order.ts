export interface Order {
    Id: number;
    OrderDate: Date;
    OrderNumber: string;
    RecordStatus: number;
    Items?: any;
}
