function DigaMeuNome(props){

    return(
    <div className="DigaH1">
        <p>Fala meu nome: {props.nome} </p>
        <p>Fala minha idade: {props.idade}</p>
        <p>Fala minha profissão: {props.profissao}</p>
    </div>
    )
}

export default DigaMeuNome