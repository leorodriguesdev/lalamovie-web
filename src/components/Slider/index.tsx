import { Container } from './styles'
import SimpleImageSlider from "react-simple-image-slider";


export function Slider() {

    const images = [
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
        { url: "https://source.unsplash.com/1170x520/?movies,series" },
      ];

    return (
        <Container>
            <SimpleImageSlider
                    width={1170}
                    height={520}
                    images={images}
                    showBullets={true}
                    showNavs={true}
            />
        </Container>
    );
}