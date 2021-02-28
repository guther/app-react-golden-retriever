import Carousel from 'react-bootstrap/Carousel'
import "./styles.css"

const CarouselSlider = () => {
    return (
        <Carousel className="carousel-slider">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Reconhecimento</h3>
                    <p>Em 1911 o Kennel Club, na Inglaterra, oficializou o Golden Retriever como raça distinta e em 1920 registrou seu nome assim.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Amigo Fiel</h3>
                    <p>A raça é altamente capacitada para tarefas delicadas, como de auxílio a pessoas portadoras de deficiências.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Estatísticas</h3>
                    <p>Expectativa de vida: 12 anos<br />
                        Média de altura: 61cm<br />
                        Média de peso: 32Kg
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSlider;