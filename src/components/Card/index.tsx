import { Container, Content, Evaluation } from './styles'
import { BsStarFill, BsHeartFill } from 'react-icons/bs'


export function Card() {

    return (
        <Container>
            <Content>
                <img src="https://source.unsplash.com/185x274/?movies,series" alt="" />
                <Evaluation>
                    <BsStarFill color= "#FDD030"/><p>8,9</p><BsHeartFill color= "#FF0000" />
                </Evaluation>
                <h3>Nome do filme</h3>
                <button>+ more info</button>



            </Content>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
    );
}