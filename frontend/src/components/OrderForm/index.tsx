'use client'

import { useState } from 'react';
import { createOrder } from '../../services/OrderService';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function OrderForm() {
  const [cliente, setCliente] = useState('');
  const [produto, setProduo] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  
    await createOrder({ cliente, produto, valor: parseFloat(price) });
    setCliente('');
    setProduo('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow mb-6">
      <Input placeholder="Cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} />
      <Input placeholder="Produto" value={produto} onChange={(e) => setProduo(e.target.value)} />
      <Input type="number" placeholder="Valor" value={price} onChange={(e) => setPrice(e.target.value)} />
      <Button type="submit" className='bg-green-800'>Criar Pedido</Button>
    </form>
  );
}