export default class Button{
    constructor(name){
        this.button=document.createElement('div');
        this.button.className=name;
    }
    render(){
        return this.button;
    }
}

