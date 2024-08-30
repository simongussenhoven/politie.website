declare global {
  interface Image {
    url: string
    alttext: any
  }

  interface Locatie {
    latitude: number
    longitude: number
  }

  interface Video {
    url: string
    alineatype: string
    captiontitle: any
    subcaptiontitle: any
  }

  interface SearchIterator {
    last?: boolean,
    offset?: number,
  }

}