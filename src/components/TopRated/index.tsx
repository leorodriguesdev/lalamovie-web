import { Card } from '../Card';
import { Container, Title } from './styles'


export function TopRated() {

    return (
        <Container>
            <Title>
                <h1><span>|</span> Top Rated</h1>
            </Title>

            <Card />
        </Container>
    );
}