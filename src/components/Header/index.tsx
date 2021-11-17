import { Container, Content} from './styles'
import logoImg  from '../../assets/logo.png'
import  { CgMenu }from 'react-icons/cg'
import  { Search } from '../Search';


export function Header() {
    return (
        <Container>
            <Content>
                <a href="/">
                    <img src={logoImg} alt="logoLalaMovie"/>
                </a>
               <Search/>
               <nav>
                <a href="/">TOP RATED</a>
                <a href="/">LOWEST RATED</a>
                <a href="/">POPULAR</a>
               </nav>
            </Content>
            <CgMenu color="#fff" size="2rem"/>

        </Container>
    );
}