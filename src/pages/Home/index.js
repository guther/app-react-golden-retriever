import CarouselSlider from "../../components/Carousel"
import "./styles.css"

const Home = () => {
    return (
        <div className="container-home">
            <CarouselSlider />
            <div className="subcontainer-right">
                <div>
                    <h5>Origem</h5>
                    <p>Tudo indica que a raça tenha origem entre 1868 e 1871, da união entre um Retriever de pelo achatado com uma Tweed Water Spaniel, raça atualmente desaparecida.</p>
                </div>
                <div>
                    <h5>Descendência</h5>
                    <p>Acredita-se também que surgiu do cruzamento com o Terra-Nova e o Setter Islandês. Os Golden foram desenvolvidos na Escócia, com um senhor burguês conhecido como Tweedmouth.</p>
                </div>
                <div>
                    <h5>Habilidades</h5>
                    <p>Ele buscava um pet que o auxiliasse na caça de aves aquáticas, tivesse um olfato apurado, fosse atento e leal ao seu tutor e alegrasse a casa.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;