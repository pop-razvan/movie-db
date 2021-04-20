import { ShowModel } from '../../types'
import { createHtmlElement } from '../../functions/utils'
import { H1, Paragraph, TextSm } from '../../global.css'
import { Row, Col } from 'reactstrap'
import RatingStars from '../ratingStars/ratingStars'

interface ShowDetailsProps {
    data?: ShowModel
}

const ShowDetails = ({ data }: ShowDetailsProps) => {
    return (
        <Row>
            <Col md={4} lg={3}>
                <img src={data?.image?.medium} />
            </Col>
            <Col md={8} lg={9}>
                <H1>{data?.name}</H1>
                {RatingStars(data?.rating?.average)}
                <Paragraph dangerouslySetInnerHTML={createHtmlElement(data?.summary)} />
                <TextSm><b>{'Status: '}</b>{data?.status}</TextSm>
                <TextSm><b>{'Time: '}</b> {data?.schedule?.time}</TextSm>
                <TextSm><b>{'Day(s): '}</b>{data?.schedule?.days}</TextSm>
                <TextSm><b>{'Network: '}</b>{data?.network?.name}</TextSm>
                <TextSm><b>{'Genre(s): '}</b>{data?.genres.join(', ')}</TextSm>
            </Col>
            <Col xs={12}>
                
            </Col>
        </Row>
    )
}

export default ShowDetails