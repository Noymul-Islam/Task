var par={
    a:10
    func: function(){

    	return this.a;
    }

}

//console.log(par.func);
var child={
    a:30



}

Object.setPrototypeOf(child,par);
console.log(child.func());