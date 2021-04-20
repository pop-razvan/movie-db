import useShowSearch from '../hooks/useShowsSearch'
import { searchStateToPayload } from '../types/index'
import MovieCard from '../components/movieCard/movieCard'
import { ShowModel } from '../types'
import { Row, Col } from 'reactstrap'
import { useRouter } from 'next/router'
import SearchBar from '../components/searchBar/searchBar'
import { getSearchParams, getPageIndex } from '../functions/utils'
import { MainContainer } from '../global.css'
import Pagination from '../components/pagination/pagination'
import Helmet from 'react-helmet';

const SearchResults = () => {
    const router = useRouter()
    const SearchTerm = getSearchParams(router.query)
    const PageIndex = getPageIndex(router.query)
    const PageSize = 12
    const data = useShowSearch(searchStateToPayload({ SearchTerm: SearchTerm }), [SearchTerm])
    return (
        <MainContainer>
            <Helmet>
                <title>{'TVDB Results Page'}</title>
                <meta name="description" content={`On TVDB you can find the world's most popular and authoritative source for movie and TV.`} />
            </Helmet>
            <Row>
                <Col xs={12}>
                    <SearchBar />
                </Col>
                {data && data?.length &&
                    <>
                        <Col xs={12}>
                            <Pagination pages={(data?.length / PageSize).toFixed(0)} />
                        </Col>
                        {data.slice(PageIndex * PageSize, (PageIndex + 1) * PageSize).map((item: ShowModel, index: number) => (
                            <Col xs={12} md={6} lg={4} key={index}>
                                <MovieCard item={item} />
                            </Col>
                        ))}
                    </>
                }
            </Row>
        </MainContainer>
    )
}

export default SearchResults