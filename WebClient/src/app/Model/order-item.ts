import { Product } from './product';
import { Order } from './order';

export interface OrderItem {
    Id: number;
    Product: Product;
    Quantity: number;
    UnitPrice: number;
    Order: Order;
}
