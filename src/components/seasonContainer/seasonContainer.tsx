import { useState } from 'react'
import { SeasonModel } from '../../types'
import { formatDate } from '../../functions/utils'
import Modal from '../modal/modal'
import { H4, H5, Text } from '../../global.css'
import { Collapse, Row, Col } from 'reactstrap'
import { ItemContainer, EpisodeContainer } from './seasonContainer.css'

interface SeasonProps {
  item: SeasonModel
}

const SeasonContainer = ({ item }: SeasonProps) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <ItemContainer>
      <H4 onClick={() => setCollapse(!collapse)} >{item.seasonName}</H4>
      <Collapse isOpen={collapse}>
      {item.seasonEpisodes.map((episode: any, index: number) => (
        <EpisodeContainer key={index} className={index > 0 ? 'bordered ' : ''}>
        <Row>
          <Col className={'episode-col'} md={3}>
            <H5>{episode.name}</H5>
            <Text>{formatDate(episode.airdate)}</Text>
          </Col>
          <Col className={'image-col'} md={6}>
            <img src={episode?.image?.medium} />
          </Col>
          <Col className={'episode-col'} md={3}>
            <Modal item={episode.summary} title={episode.name} />
          </Col>
        </Row>
        </EpisodeContainer>
      ))}
      </Collapse>
    </ItemContainer>
  )
}

export default SeasonContainer