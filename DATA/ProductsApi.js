import axios from "axios"

class ProductsApi{
static getAllProducts(cb){
    return new Promise(async(resolve, reject) => {
        try {
            const Response= await axios.get('http://localhost:3002/Products')
            resolve(Response.data)
            cb(Response.data)
        } catch (error) {
            reject(error)
            console.log(error.message)
        }
    })
}

static getProductById(id,cb){
    return new Promise(async(resolve, reject) => {
        try {
            const res=await axios.get(`http://localhost:3002/Products/${id}`) 
            resolve(res.data)
            cb(res.data)
        } catch (error) {
            reject(error)
            console.log(error.message)
        }
    })
}

}
export default ProductsApi