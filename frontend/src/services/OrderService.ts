import { api } from './api';
import { Order } from '../types/order';

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get('/Order');
  console.log("response: ", response)
  return response.data;
};

export const createOrder = async (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => {
  return api.post('/Order', order);
};