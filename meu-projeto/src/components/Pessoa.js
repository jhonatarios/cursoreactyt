function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <section>
                <img src={foto} alt={nome}/>
                <h2>Nome: {nome}</h2>
                <p>Idade: {idade}</p>
                <p>Profissão: {profissao}</p>
            </section>
        </div>
    )
}

export default Pessoa