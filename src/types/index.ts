export interface SearchResultsPayload {
  SearchTerm: string
}

export interface ShowModel {
  show: ShowModel,
  externals: FieldSection
  genres: string[]
  id: number
  image: FieldSection
  language: string
  name: string
  network: Network
  officialSite: string
  premiered: string
  rating: FieldSection
  runtime: number
  schedule: Schedule
  status: string
  summary: string
  type: string
  updated: number
  url: string
  webChannel: Network
  weight: number
  _links: FieldSection
}

export interface SeasonModel {
  seasonName: string
  seasonEpisodes: EpisodeModel[]
}

export interface EpisodeModel {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: FieldSection
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

export type FieldSection = { [key: string]: string }

type Schedule = {
  time: string
  days: string[]
}

type Network = {
  country: FieldSection
  id: number
  name: string
}

export interface BackendError {
  message: string
  code?: string
}

export type StudySearchState = {
  SearchTerm: string
}

export function searchStateToPayload(
  state: StudySearchState
): any {
  return {
    SearchTerm: state.SearchTerm
  }
}

export interface IValues<V> {
  tag: "Value";
  value: V[];
}

export interface IValue<V> {
  tag: "Value";
  value: V;
}

export interface IError<E> {
  tag: "Error";
  error: E;
}

export type ObjectResult<V, E> = IValue<V> | IError<E>;
export type ArrayResult<V, E> = IValues<V> | IError<E>;