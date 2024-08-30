export interface MissingPersonsResponse {
  iterator: Iterator
  vermisten: MissingPerson[]
}

export interface Iterator {
  last: boolean
  offset: number
}

export interface MissingPerson {
  displayName: any
  links: any
  uid: string
  url: string
  publicatiedatum: string
  availabletranslations?: Availabletranslation[]
  documenttype: string
  titel: string
  zaaknummer: string
  vermistsinds: string
  laatstgezienin: string
  afbeeldingen: Afbeeldingen[]
  signalementen: Signalementen[]
  introductie: string
  omschrijving: string
  vragen: string
  locaties: Location[]
  meerafbeeldingen: Meerafbeeldingen[]
  urltipformulier: string
  videos: any
  uwtip: string
}

export interface Availabletranslation {
  language: string
  id: string
}

export interface Afbeeldingen {
  url: string
  alttext: string
}

export interface Signalementen {
  afbeelding: Afbeelding
  titel: string
  persoonskenmerken: Persoonskenmerken[]
}

export interface Afbeelding {
  url: string
  alttext: string
}

export interface Persoonskenmerken {
  label: string
  waarde: string
}

export interface Location {
  latitude: number
  longitude: number
}

export interface Meerafbeeldingen {
  url: string
  alttext: string
}
