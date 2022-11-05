const fs=require('fs').promises;

class container {
    #array;
    #file
    constructor(road) {
        this.#array = [];
        this.#file = road;
        }  
       async save (id, nombre, cantidad, precio) {
            const obj = {
                id: id,
                nombre:nombre,
                cantidad: cantidad,
                precio: precio
            };
            try {
                this.#array.push(obj);
                await fs.writeFile(this.#file, JSON.stringify(this.#array, null, '\t'));
            } catch (error) {
                throw new Error ('Error en el metodo save');
            }
        }

    async getById(id){ 
        try{
            const array= JSON.parse (await fs.readFile (this.#file, 'utf-8'));
            const obj = array.find (element => element.id === id);
            if (!obj){
                return null;
            }
        return obj;
    }
      catch (error) {
        throw new Error ('elemento con id ${id} no encontrado');
      }
    }

    async getAll(){
        try {
            return JSON.parse (await fs.readFile (this.#file, 'utf-8'));
        } catch (error)
 {
    throw new Error ('Error en el metodo getAll');
 }        
    }

    async deleteById(id){
        try {
            const array = JSON.parse(await fs.readFile (this.#file, 'utf-8'));
            await fs.writeFile(this.#file, JSON.stringify(array.filter(element => element.id!== id)));
        } catch (error){
            throw new error('Error en el metodo de deletebyId');
        }
    }

    async deleteAll(){
        try { await fs.writeFile(this.#file, '[]');
    } catch (error){
        throw new error('Error en el metodo deleteAll')
        }  
    }
  }
  async function test(){
    await fs.writeFile('./productos.txt', '[]');
  
const element = new container('./productos.txt');
try{
    await element.save (1, 'Pulparindo', 30, 70);
    await element.save (2, 'Pelon Pelorico', 15, 120);
    await element.save (3, 'Lucas muecas', 8, 100);
    await element.save (4, 'Pica fresas', 50, 90);
    await element.save (5, 'Rockaleta', 15, 95);
    await element.save (6, 'Skwinkles', 8, 85);
  
  const elem= await 
  element.getById(2);
  console.log(elem);
}catch (error){
    throw new error ('Error al llamar a los metodos en la funcion test');
 }
} 
test ();