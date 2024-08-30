export interface MissingPersonsResponse {
  iterator: SearchIterator
  vermisten: MissingPerson[]
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
  afbeeldingen: Image[]
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

export interface Signalementen {
  afbeelding: Image
  titel: string
  persoonskenmerken: Persoonskenmerken[]
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
