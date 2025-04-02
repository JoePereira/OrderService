'use client'

import { useOrders } from '@/hooks/useOrders';
import { Order } from '@/types/order';
import { useState } from 'react';
import OrderDetailsModal from '../OrderdetailsModal';
import { Button } from '../ui/button';
import { Dock, InfoIcon } from 'lucide-react';

export default function OrderTable() {
  const { orders } = useOrders();
  console.log("Orders: ", orders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <>
      <table className="w-full border-collapse border rounded-lg">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className=" hover:bg-gray-100 border" onClick={() => setSelectedOrder(order)}>
              <td className='p-2'>{order.cliente}</td>
              <td >{order.produto}</td>
              <td >{order.valor}</td>
              <td >{order.status}</td>
              <td >
                <Button className="bg-transparent text-black hover:bg-blue-950 hover:text-white " onClick={() => setSelectedOrder(order)}>
                  <InfoIcon/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </>
  );
}