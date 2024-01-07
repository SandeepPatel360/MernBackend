import { products } from './constants/data.js';
import Product from './model/product.js'

const defaultData = async() =>{
    try{
        await Product.insertMany(products);
        console.log('DATA is import Successfully');

    }catch(error){
        console.log('Error while inserting default data', error.message);
    }

}

export default defaultData;