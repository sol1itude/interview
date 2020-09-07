class Dep {
    constructor(){
        this.list = []
    }

    listen(sub){
        this.list.push(sub)
    }

    notify(){
        for(var i=0;i<this.list.length;i++){
            this.list[i].update()
        }
    }
}

Dep.prototype.target = null;

export default Dep