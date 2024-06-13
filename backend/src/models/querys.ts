import connection from '../models/connection';


export const MostrarProdutos = async () => {
    
    
    try {
        
        const [produtos]: any[]= await connection.execute('CALL `MostrarProdutos`;');

        
        
        
        if (produtos) {
            return produtos
        }else {
            return {message : 'test não executado'}
        }

    } catch (error) {
        console.log(error);
        return {message : 'erro ao receber os dados'}
    }

    
}