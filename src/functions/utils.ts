import { ParsedUrlQuery } from 'querystring'

export function getSearchParams(param: ParsedUrlQuery) {
        if (typeof param.SearchTerm === 'string') {
            return param.SearchTerm
        }
        else {
            return ''
        }
}

export function getPageIndex(param: ParsedUrlQuery) {
    if (typeof param.PageIndex === 'string') {
        return parseInt(param.PageIndex)
    }
    else {
        return 0
    }
}

export const createHtmlElement = (item: any) => {
    return {__html: item};
}

export function formatDate(data: string) {
    const date = new Date(data)
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString("en-US",options)
}