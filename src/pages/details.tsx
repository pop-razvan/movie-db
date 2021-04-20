import useStudySearch from '../hooks/useShow'
import useShowEpisodes from '../hooks/useEpisodes'
import { useRouter } from 'next/router'
import { MainContainer } from '../global.css'
import ShowDetails from '../components/showDetails/showDetails'
import SeasonContainer from '../components/seasonContainer/seasonContainer';
import Helmet from 'react-helmet';
import { Spinner } from 'reactstrap'



const Details = () => {
    const router = useRouter()
    const { data, isLoading } = useStudySearch(router.query)
    const { episodes } = useShowEpisodes(router.query)
    const seasones = episodes && Array.from(new Set(episodes.map((a: any) => a.season))).map(
        key => {
            return {
                seasonEpisodes: episodes.filter((s: any) => s.season === key),
                seasonName: 'Season ' + key
            };
        }
    )
    return (
        <MainContainer>
            <Helmet>
                <title>{`Details - ${data?.name}`}</title>
                <meta name="description" content={data?.summary} />
            </Helmet>
            {!isLoading ? <>
                <ShowDetails data={data} />
                {seasones?.map((season, index) => (
                    <SeasonContainer key={index} item={season} />
                ))}
            </>
                : <Spinner />}
        </MainContainer>
    )
}

export default Details