import { useEffect, useState } from 'react';
import { getOrders } from '../services/OrderService';
import { Order } from '@/types/order';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  console.log("Orders: ", orders)
  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return { orders };
}