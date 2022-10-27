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
  
  container.saveObj({id: 1, title: "lucas muecas", price: 112, thumbail: "img.jpg"});
  console.log(container.getAll());