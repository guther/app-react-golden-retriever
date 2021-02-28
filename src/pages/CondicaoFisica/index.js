import foto1 from "./img/foto1.jpg"

const CondicaoFisica = () => {
    return (
        <div className="container-cond">
            <h2>
                Condição Física
            </h2>
            <p>
                Os cães da raça Golden são muito ativos e robustos, sendo excelentes para atividades como cão-guia para cegos, ajudante de deficientes motores e guardião. Recomenda-se que pratiquem de 40 a 60 minutos de exercícios físicos diários, sejam caminhadas, corridas, brincadeiras ao ar livre ou jogos de buscar.
            <br />
                <div style={{ textAlign: "center" }}>
                    <img src={foto1} style={{ width: "50%" }} alt="" />
                </div>
                <br />
                A raça tem um instinto de trabalho e, por isso, precisa ter algo dinâmico para fazer. Sendo assim, outra possibilidade é treiná-los para obediência, colocá-los em aulas de agilidade ou realizar outras atividades físicas. Tudo isso é altamente estimulante para o físico e a mente desses peludos.
            </p>
        </div>
    )
}

export default CondicaoFisica