export const productsList: Producto[] = [
    {id:1, name: 'Monitor', price: 100000, description: 'HD' },
    {id:2, name: 'Notebook', price: 500000, description: 'Nuevo' },
    {id:3, name: 'Mouse', price: 15000, description: 'Inalambrico' },
    {id:4, name: 'Teclado', price: 20000 },
    {id:5, name: 'Aio', price: 100000, description: '24 pulgadas' },
]

export interface Producto {
    id: number | string;
    name: string;
    price: number;
    description?: string;    
}