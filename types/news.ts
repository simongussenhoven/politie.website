export interface NewsRequest {
  query: string,
  radius: number,
  maxNumberOfItems: number,
  offset: number
}

export interface NewsItem {
  displayName: string
  links: string,
  alineas: {
    titel: string
    opgemaaktetekst: string
    bestanden: string,
    alineatype: string
  }[],
  uid: string,
  url: string,
  publicatiedatum: string,
  availabletranslations: string,
  titel: string,
  gebied: string,
  introductie: string,
  afbeelding: {
    url: string,
    alttext: string,
  },
  locaties: [
    {
      latitude: string,
      longitude: string,
    }
  ],
  urltipformulier: string,
  uidtipformulier: string,
  tags: string[]
}

export interface NewsResponse {
  iterator: SearchIterator,
  nieuwsberichten: NewsItem[],
}

interface CardContent {
  uid?: string,
  title?: string,
  description?: string,
  content?: string,
  footer?: string,
}