import "./dadosPessoais.css"

export default function DadosPesoais() {
    return (
        <form action="" className="dadosPessoais">
            <div className="dadosPessoais-item-container">
                <div className="dadosPessoais-item">
                    <label htmlFor="">Primeiro Nome</label>
                    <input type="text" autoComplete="none" className="register-input" />
                </div>
                 <div className="dadosPessoais-item">
                    <label htmlFor="">Sobrenome</label>
                    <input type="text" autoComplete="none" className="register-input" />
                </div>
            </div>
            <div className="dadosPessoais-item">
                <label htmlFor="">E-mail</label>
                <input type="email" autoComplete="none" className="register-input" />
            </div> 
            <div className="dadosPessoais-item">
                <label htmlFor="">Telefone</label>
                <input type="text" autoComplete="none" className="register-input" />
            </div>
            <div className="dadosPessoais-button">
                <button className="button">Salvar</button>
            </div>
        </form>
    )
}