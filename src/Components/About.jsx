import Link from "../Link";

const i18n={
    es:{
        title:'Sobre mi',
        textButton:'Ir a Home',
        descripcion:'Hola me llamo Jose chim'
    },
    en:{
        title:'About my',
        textButton:'go to Home',
        descripcion:'Hello, my name is Jose chim'

    }
}

const useI18n=(lang)=>{
    return i18n[lang] || i18n.en
}


export default function About({routeParams}){
    const i18n=useI18n(routeParams.lang??'es')
    return(
        <>
        <h1>
            {i18n.title}
        </h1>
        <img src="https://media.licdn.com/dms/image/D5603AQEX4b3uc2p48g/profile-displayphoto-shrink_800_800/0/1685050473967?e=1724889600&v=beta&t=FNLbbT6mpWo9zoiarYKQn2G7sp9RN6Ta_m04WPmBIEE">
        </img>
        <p>
            {i18n.descripcion}
        </p>
        <Link to='/'>{i18n.textButton}</Link>
        </>
        
    )
}