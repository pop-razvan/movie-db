import SearchBar from '../components/searchBar/searchBar'
import { Row, Col } from 'reactstrap'
import { MainContainer } from '../global.css';
import Helmet from 'react-helmet';

function HomePage() {
    return (
        <MainContainer>
            <Helmet>
                <title>{'Welcome to TVDB'}</title>
                <meta name="description" content={`TVDB is the world's most popular and authoritative source for movie and TV.`} />
            </Helmet>
            <Row>
                <Col xs={12}>
                    <SearchBar />
                </Col>
            </Row>
        </MainContainer>
    )
}

export default HomePage