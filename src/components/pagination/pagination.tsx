import { useRouter } from 'next/router'
import { resultsPageUrl } from '../../constants/config'
import { getSearchParams, getPageIndex } from '../../functions/utils'
import { PaginationContainer, PaginationText, PaginationButton } from './pagination.css'

interface PaginationProps {
    pages: string
}

const Pagination = ({ pages }: PaginationProps) => {
    const router = useRouter()
    const searchTerm = getSearchParams(router.query)
    const PageIndex = getPageIndex(router.query)
    return (
        <PaginationContainer>
            <PaginationButton disabled={PageIndex === 0} onClick={() => router.push(resultsPageUrl(searchTerm, PageIndex - 1))}>
                {'Previous'}
            </PaginationButton>
            <PaginationText>{`Page ${PageIndex + 1} of ${pages}`}</PaginationText>
            <PaginationButton disabled={(PageIndex + 1).toString() === pages} onClick={() => router.push(resultsPageUrl(searchTerm, PageIndex + 1))}>
                {'Next'}
            </PaginationButton>
        </PaginationContainer>
    );
}

export default Pagination;