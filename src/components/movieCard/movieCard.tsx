import { ShowModel } from '../../types'
import { CardView } from './movieView.css'
import { formatDate } from '../../functions/utils'
import { useRouter } from 'next/router'
import { H4, Text } from '../../global.css'

interface MovieCardProps {
    item: ShowModel
  }

const MovieCard = ({item}: MovieCardProps) => {
    const router = useRouter();
    return (
        <CardView onClick={() => router.push(`/details?serie=${item.id}`)}>
            <H4>{item.name}</H4>
            <img src={item.image?.medium} />
            <Text>{formatDate(item.premiered)}</Text>
            <Text>{item.network?.name}</Text>
        </CardView>
    )
}

export default MovieCard