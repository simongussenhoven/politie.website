export interface WantedPersonsResponse {
  iterator: Iterator
  opsporingsberichten: WantedPerson[]
}

export interface Iterator {
  last: boolean
  offset: number
}

export interface WantedPerson {
  displayName: any
  links: any
  uid: string
  url: string
  publicatiedatum: string
  availabletranslations: any
  documenttype: string
  titel: string
  zaaknummer: string
  introductie: string
  omschrijving: string
  meerafbeeldingen: Image[]
  locaties: Location[]
  urltipformulier: string
  afbeeldingen: Image[]
  verdachte: WantedPersonDescription
  voortvluchtige: any
  "gestolen-gevonden": any
  dossier: any
}


export interface WantedPersonDescription {
  datumdelict: string
  plaatsdelict: string
  opgelost: boolean
  update: string
  vraag: string
  videos?: Video[]
  signalementen: any
  slachtoffer: boolean
}