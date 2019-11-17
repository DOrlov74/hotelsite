import './../scss/heading.scss';

class Heading{
    render(){
        const div_logo=document.createElement('div');
        div_logo.className='header__logo';
        const div_logo_text=document.createElement('div');
        div_logo_text.className='header__logo__text';
        const div_menu=document.createElement('div');
        div_menu.className='header__menu';
        const div_menu_about=document.createElement('div');
        div_menu_about.className='header__menu__about';
        div_menu_about.innerHTML='О нас';
        const container=document.getElementsByClassName('header');
        const div_menu_service=document.createElement('div');
        div_menu_service.className='header__menu__service';
        div_menu_service.innerHTML='Услуги';
        container[0].appendChild(div_logo);
        container[0].appendChild(div_logo_text);
        container[0].appendChild(div_menu);
        div_menu.appendChild(div_menu_about);
        div_menu.appendChild(div_menu_service);
    }
}

export default Heading;