import foto1 from "./img/foto1.jpg"

const Personalidade = () => {
    return (
        <div className="container-cond">
            <h2>
                Personalidade
            </h2>
            <p>
                Eles são excelentes cães de companhia, calmos, doces, equilibrados, afetuosos, gentis e muito pacientes. Entretanto, também precisam gastar suas energias de algum modo.
            <br />
                <div style={{ textAlign: "center" }}>
                    <img src={foto1} style={{ width: "50%" }} alt="" />
                </div>
                <br />
                É recomendada a prática de natação e brincadeiras agitadas entre o tutor e o peludo.
            </p>
        </div>
    )
}

export default Personalidade