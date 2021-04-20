import { useRef } from 'react'
import { useRouter } from 'next/router'
import { resultsPageUrl } from '../../constants/config';
import { getSearchParams } from '../../functions/utils';
import { SearchContainer, SearchInput } from './searchBar.css'
import { Row, Col } from 'reactstrap'
import { Button } from '../../global.css'

const SearchBar = () => {
    const router = useRouter();
    const inputValue = useRef('');
    const searchTerm = getSearchParams(router.query)
    function Search() {
        router.push(resultsPageUrl(inputValue.current, 0));
    }
    return (
        <SearchContainer>
            <Row>
                <Col xs={8} md={6}>
                    <SearchInput type="text" placeholder={'Search...'} defaultValue={searchTerm} onChange={(e) => inputValue.current = e.target.value} />
                </Col>
                <Col xs={8} md={2}>
                    <Button onClick={Search}>{'Search'}</Button>
                </Col>
            </Row>
        </SearchContainer>
    )
}

export default SearchBar