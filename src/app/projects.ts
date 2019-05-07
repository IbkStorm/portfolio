export class Project {
    constructor(
        public id: number,
        public name: string,
        public image: string,
        public type: string,
        public special: string,
        public link: string,
        public firma: string,
        public description: string
    ) {}
}
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'IKB',
        type: 'Typo3',
        image: 'IKB.PNG',
        special: 'Umsetzung, Barrierefreiheit Optimierung',
        link: 'https://www.ikb.at',
        firma: 'holzweg GmbH',
        description: 'Die Innsbrucker Kommunalbetriebe Aktiengesellschaft (IKB AG) ist ein kommunales Infrastruktur-Dienstleistungsunternehmen. Die Stadt Innsbruck ist mit 50 % und einer Aktie, die TIWAG-Tiroler Wasserkraft AG mit 50 % minus einer Aktie an der Innsbrucker Kommunalbetriebe AG beteiligt.' },
    {
        id: 2,
        name: 'Wedl Handelhaus',
        type: 'Typo3',
        image: 'Wedl.PNG',
        special: 'Umsetzung',
        link: 'https://www.wedl.com/',
        firma: 'holzweg GmbH',
        description: '1904 gründete Leopold Wedl I. in Hall in Tirol ein Kolonialwarengeschäft und legte damit den Grundstein für einen Betrieb, der heute zu den Top 10 Unternehmen des Lebensmittelhandels in Österreich gehört. Bereits in den 20er Jahren begann Leopold Wedl II. mit der Großhandelstätigkeit. Nach dem viel zu frühen Tod des Vaters übernahm Leopold Wedl III. 1965 die Führung des Familienunternehmens und baute es zusammen mit Wilhelm Hofmann zur heutigen Größe aus.' },
    // {
    //     id: 3,
    //     name: 'Tyzka',
    //     type: 'Typo3',
    //     image: 'tyzka.PNG',
    //     special: 'Umsetzung',
    //     link: 'https://www.tyczka.at/',
    //     firma: 'holzweg GmbH',
    //     description: 'Tyczka Neue Gastechnik, ist der Energieversorger für Industriekunden in Österreich, sowie für Handelskunden im In- und Ausland. Im starken Verbund der Tyczka Gruppe bieten wir als zuverlässiger Partner seit mehr als 45 Jahren umfassende Lösungen für die Versorgung mit Flüssiggas.' },
    {
        id: 4,
        name: 'Intersport-Okay',
        type: 'Typo3',
        image: 'Intersport.PNG',
        special: 'Umsetzung',
        link: 'https://www.intersport-okay.at/',
        firma: 'web-crossing GmbH',
        description: 'Unsere Erfolgsgeschichte begann 1980 mit der Erschließung des Skigebiets und der Eröffnung des ersten Geschäfts am Stubaier Gletscher, aus dem sich bis heute Tirols größter Sporthändler mit 10 Standorten und über 200 Mitarbeitern entwickelt hat. Damals wie heute treibt uns aber immer noch dieselbe Frage an: Was wünschen sich sportbegeisterte Tiroler?' },
    {
        id: 5,
        name: 'Hypo Tirol Versichert',
        type: 'Typo3',
        image: 'Hypo.PNG',
        special: 'Umsetzung',
        link: 'https://www.hypotirolversichert.com/',
        firma: 'web-crossing GmbH',
        description: 'Während viele Unternehmen zentralisieren und dieser Vorgang die Betreuer, Berater und Sachbearbeiter immer noch weiter weg von ihren Kundinnen und Kunden bringt, setzt die Hypo Tirol Versicherungsgesellschaft genau auf jene Bodenhaftung, die Sie sich wünschen. Vor Ort, durchaus mit gebirgigem Charme und jedenfalls mit der persönlichen Kenntnis um unsere Kunden und deren Aufgabenstellungen, Bedürfnisse und Erwartungen, präsentieren wir uns als dem Land und seinen Leuten verbundenes Traditionsunternehmen.' },
    {
        id: 6,
        name: 'Winter Plus',
        type: 'Typo3',
        image: 'winter.PNG',
        special: 'Umsetzung',
        link: 'https://winter.plus/',
        firma: 'web-crossing GmbH',
        description: 'Mit der neu geschaffenen Skiverbindung ist der Oberalppass ist der perfekte Ort für alle, die den Winter in seiner vollen Pracht erleben möchten. Erst ein paar Abfahrten auf den breiten Pisten, danach Sonne tanken auf grossen Restaurantterrassen, dabei immer das imposante Bergpanorama vor den Augen. Langweilig wird es Skisportlern keinesfalls – vor allem nicht, wenn man den Freestylern im ACE Snowpark zusehen kann – und sich vielleicht sogar selbst über den Kicker wagt. Hier ist für jeden etwas dabei, und die MGBahn fährt quasi bis vor den Lift. ' },
    {
        id: 7,
        name: 'Skilodge Oberlech',
        type: 'Typo3',
        image: 'skilodge.PNG',
        special: 'Umsetzung',
        link: 'https://www.skilodge-oberlech.at/',
        firma: 'web-crossing GmbH',
        description: 'Ein Sprung höher, ein Stück natürlicher, eine Spur luxuriöser - wir begrüßen Sie über den Dächern von Lech am Arlberg, in der exklusiven Skilodge Oberlech - verbringen Sie die schönsten Tage des Jahres in den Bergen. ' }
];
