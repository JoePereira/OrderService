import { Order } from '@/types/order';

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

export default function OrderDetailsModal({ order, onClose }: OrderDetailsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-4 rounded-lg shadow-lg min-w-96">
        <h2 className="text-lg font-bold">Detalhes do Pedido</h2>
        <p><strong>Cliente:</strong> {order.cliente}</p>
        <p><strong>Produto:</strong> {order.produto}</p>
        <p><strong>Valor:</strong> {order.valor}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded">Fechar</button>
      </div>
    </div>
  );
}