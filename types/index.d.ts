interface CardContent {
  title: string,
  subTitle: string,
  buttonText: string,
  image,
}


interface NewsRequest {
  query: string,
  radius: number,
  maxNumberOfItems: number,
  offset: number
}

interface NewsItem {
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

interface SearchIterator {
  last?: boolean,
  offset?: number,
}

interface NewsResponse {
  iterator: IIterator,
  nieuwsberichten: INewsItem[],
}

interface CardContent {
  uid?: string,
  title?: string,
  description?: string,
  content?: string,
  footer?: string,
}