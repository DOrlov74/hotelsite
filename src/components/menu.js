import Button from "./button";

export default class Menu{
    constructor(arr,name){
        this.menu=document.createElement('div');
        this.menu.className=name;
        this.addElem(arr);
    }
    addElem(arr){
        arr.forEach((elem)=>{
            const menu_elem=document.createElement('div');
            menu_elem.className=elem[0];
            menu_elem.innerHTML=elem[1];
            if (elem.length==3){
                const btn=new Button(elem[2]);
                menu_elem.appendChild(btn.render());
            }
            this.menu.appendChild(menu_elem);
        });
    }
    render(){
        return this.menu;
    }
}