class dulces {
    constructor(id, nombre, cantidad, precio) {
      this.caramelos = []
    }

    getById(id){
        return this.caramelos.find(x => x.id === id);
    }

    getAll(){
        return this.caramelos;
    }

    saveObj(obj){
        this.caramelos.push(obj);
    }

    deleteById(num){
        let i = this.caramelos.find(x=> x.id === num);
        let j = this.caramelos.indexOf(i);
        this.caramelos.splice(j, 1);
        return this.caramelos;
    }

    deleteAll(){
        while (this.caramelos.length > 0) {
            this.caramelos.pop();
        }
    }
  }

  const container = new dulces();
  
  container.saveObj({id: 1, nombre: "Pulparindo", cantidad: 30, precio: 70});
  ({id: 2, nombre: "Pelon Pelorico", cantidad: 15,precio: 120});  
  ({id: 3, nombre: "Lucas muecas", cantidad: 8, precio: 100});  
  ({id: 4, nombre: "Pica fresas", cantidad: 50,precio: 90});  
  ({id: 5, nombre: "Rockaleta", cantidad: 15,precio: 95});  
  ({id: 6, nombre: "Skwinkles", cantidad: 8,precio: 85});  

console.log(container.getAll());

var dulceNuevo= new dulces(id:7, nombre:"doritos", cantidad: 7, precio: 105);
console.log(container.saveObj(dulceNuevo));
console.log(container.getAll());

console.log(container.deleteById(7));
console.log(container.getAll());

console.log(container.deleteAll());
console.log(container.getAll());