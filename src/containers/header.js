import './../scss/heading.scss';
import Button from '../components/button';
import Menu from '../components/menu';

class Heading{
    constructor(){
        this.menu_elements=[
            ['header__menu__about', 'О нас'],
            ['header__menu__service', 'Услуги', 'header__menu__button'],
            ['header__menu__vacancies', 'Вакансии'],
            ['header__menu__news', 'Новости'],
            ['header__menu__contracts', 'Соглашения', 'header__menu__button']
        ];
    }
    render(){
        const logo=document.createElement('div');
        logo.className='header__logo';
        const logo_text=document.createElement('div');
        logo_text.className='header__logo__text';
        const menu=new Menu(this.menu_elements, 'header__menu');
        const login_btn=document.createElement('div');
        login_btn.className='header__login';
        login_btn.innerText='войти';
        const signin_btn=document.createElement('div');
        signin_btn.className='header__signin';
        signin_btn.innerText='зарегистрироваться';
        const container=document.getElementsByClassName('header');
        container[0].appendChild(logo);
        container[0].appendChild(logo_text);
        container[0].appendChild(menu.render());
        container[0].appendChild(login_btn);
        container[0].appendChild(signin_btn);
    }
}

export default Heading;