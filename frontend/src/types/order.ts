export interface Order {
  id: string;
  cliente: string;
  produto: string;
  valor: number;
  status: 'Pendente' | 'Processando' | 'Finalizado';
  createdAt: string;
}