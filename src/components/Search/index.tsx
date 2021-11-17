import { SearchBar, Content} from './styles'
import  { CgSearch }from 'react-icons/cg'

export function Search() {
    return (
        <SearchBar>
            <Content>
               <input type="text" placeholder="  Search"/>
               <CgSearch color="#fff" size="2rem" />
            </Content>

        </SearchBar>
    );
}