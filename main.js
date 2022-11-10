const fs = require('fs')
 
class ContenedorArchivo {
  #elementos
  #ruta
  constructor(ruta) {
    this.#ruta = ruta
    this.#elementos = [];
  }
  async save(elemento) {
    this.#elementos.push(elemento)
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
  }

  async getById(id) {
    const elemento = await this.getAll()
    const buscado = elemento.find(o => o.id == id)
    return buscado
  }

  async getAll() {
   this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
   return this.#elementos
  }

  async deleteById(id){
    this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
    const index = this.#elementos.indexOf(this.#elementos.find(elem => elem.id === id));
    this.#elementos.splice(index, 1);
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
  }

  async deleteAll(){
    try { await fs.promises.writeFile(this.#ruta, '[]');
} catch (error){
    return error('Error en el metodo deleteAll')
    }  
}
}
async function test() {
  const rutaArchivo = './productos.txt'
  await fs.promises.writeFile(rutaArchivo, '[]')
  const contenedor = new ContenedorArchivo(rutaArchivo)


  await contenedor.save ({id:1, nombre:'Pulparindo', cantidad:30, precio:70})
  await contenedor.save ({id: 2, nombre: 'Pelon Pelorico', cantidad: 15, precio: 120})
  await contenedor.save ({id: 3, nombre:'Lucas muecas', cantidad: 8, precio: 100})
  await contenedor.save ({id: 4, nombre: 'Pica fresas,', cantidad: 50, precio: 90})
  await contenedor.save ({id: 5, nombre: 'Rockaleta', cantidad: 15, precio: 95})
  await contenedor.save ({id: 6,nombre: 'Skwinkles', cantidad: 8, precio: 85})
  console.log(await contenedor.getAll())
  console.log(await contenedor.getById(2))
  console.log(await contenedor.deleteById(2))
  console.log(await contenedor.getAll())
  console.log(await contenedor.deleteAll())
  console.log(await contenedor.getAll())
}
test()