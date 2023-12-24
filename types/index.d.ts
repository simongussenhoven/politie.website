interface CardContent {
    title: string,
    subTitle: string,
    buttonText: string,
    image,
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