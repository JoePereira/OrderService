import OrderForm from '@/components/OrderForm';
import OrderTable from '@/components/OrderTable';
export default function Home() {


  return (
    <main className="sm:ml-14 p-4" >
      {/* <section className="grid grid-cols-2 gap-4 lg:grid-cols-4"> */}
      <div className="mx-auto p-4">
        <OrderForm />
        <OrderTable />
      </div>

        {/* <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-500'>
                Novos Clientes
              </CardTitle>
              <Users2Icon className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
              Novos clientes nos ultimos 90 dias
            </CardDescription>

            <CardContent>
              <p className='text-base sm:text-lg font-bold'>396</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-500'>
                Pedidos
              </CardTitle>
              <ShoppingBasket className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
              Pedidos de hoje
            </CardDescription>

            <CardContent>
              <p className='text-base sm:text-lg font-bold'>200</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-500'>
                Pedidos Totais
              </CardTitle>
              <ShoppingBag className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
              Total de Pedidos nos ultimos 90 dias
            </CardDescription>

            <CardContent>
              <p className='text-base sm:text-lg font-bold'>1254</p>
            </CardContent>
          </CardHeader>
        </Card> */}
      {/* </section> */}
    </main>
  );
}
