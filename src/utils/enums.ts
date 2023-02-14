interface RoleNames {
  top: string
  jungle: string
  mid: string
  bot: string
  support: string
}

export const roleNames: RoleNames = {
  top: 'Top',
  jungle: 'Jungle',
  mid: 'Mid',
  bot: 'Bot',
  support: 'Support',
}

interface TeamImgs {
  [k: string]: {
    icon: string
    background: string
  }
}

export const teamImgs: TeamImgs = {
  'red-kalunga': {
    icon: 'http://static.lolesports.com/teams/1631820575924_red-2021-worlds.png',
    background: 'http://static.lolesports.com/teams/REDCanidsRED.png',
  },
  'los-grandes': {
    icon: 'http://static.lolesports.com/teams/1671220578076_LOSGRANDES1.png',
    background:
      'http://static.lolesports.com/teams/1671220578079_LOSGRANDES1.png',
  },
  loud: {
    icon: 'http://static.lolesports.com/teams/Logo-LOUD-Esports_Original.png',
    background: 'http://static.lolesports.com/teams/LOUDLLL.png',
  },
  'kabum-esports': {
    icon: 'http://static.lolesports.com/teams/1671197541491_LOGO-KABUM-ESPORTS-2023-NEGATIVO-FUNDOPRETO.png',
    background:
      'http://static.lolesports.com/teams/1671197541493_LOGO-KABUM-ESPORTS-2023-POSITIVO-FUNDOBRANCO.png',
  },
  intz: {
    icon: 'http://static.lolesports.com/teams/1643056732785_INTZ_Logo_Principal_2022.png',
    background:
      'http://static.lolesports.com/teams/1643056732785_INTZ_Logo_Principal_2022.png',
  },
  fluxo: {
    icon: 'http://static.lolesports.com/teams/1670539056915_fluxo_escudo_w.png',
    background:
      'http://static.lolesports.com/teams/1670539056920_fluxo_escudo_b.png',
  },
  liberty: {
    icon: 'http://static.lolesports.com/teams/1643305707691_RXfNcFMU.png',
    background: 'http://static.lolesports.com/teams/1643305798548_qiCw-xgg.png',
  },
  'pain-gaming': {
    icon: 'http://static.lolesports.com/teams/1674657011011_pain_logo_white.png',
    background:
      'http://static.lolesports.com/teams/1674657070286_pain_preto.png',
  },
  furia: {
    icon: 'http://static.lolesports.com/teams/FURIA---black.png',
    background: 'http://static.lolesports.com/teams/FuriaUppercutFUR.png',
  },
  'vivo-keyd': {
    icon: 'http://static.lolesports.com/teams/1670542079678_vks.png',
    background:
      'https://lolstatic-a.akamaihd.net/esports-assets/production/team/keyd-stars-erse0ibu.png',
  },
}

interface Player {
  id: string
  summonerName: string
  firstName: string
  lastName: string
  image: string
  role: string
}

interface TeamInfo {
  id: string
  slug: string
  name: string
  code: string
  image: string
  alternativeImage?: string | null
  backgroundImage?: string | null
  status: string
  homeLeague: {
    name: string
    region: string
  }
  players: Array<Player>
}

export const teamsInfo: { [k: string]: TeamInfo } = {
  redKalunga: {
    id: '99566408221961358',
    slug: 'red-kalunga',
    name: 'RED Kalunga',
    code: 'RED',
    image:
      'http://static.lolesports.com/teams/1631820575924_red-2021-worlds.png',
    alternativeImage: null,
    backgroundImage: 'http://static.lolesports.com/teams/REDCanidsRED.png',
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '107559111166843860',
        summonerName: 'Boal',
        firstName: 'Felipe',
        lastName: 'Boal',
        image:
          'http://static.lolesports.com/players/1674160225623_Boal-1copy.png',
        role: 'top',
      },
      {
        id: '105397188336529754',
        summonerName: 'Betao',
        firstName: 'Norberto',
        lastName: 'Motta',
        image:
          'http://static.lolesports.com/players/1674503207410_Beto-1copy.png',
        role: 'top',
      },
      {
        id: '103743617977630492',
        summonerName: 'Aegis',
        firstName: 'Gabriel',
        lastName: 'Lemos',
        image:
          'http://static.lolesports.com/players/1674160144649_Aegis-1copy.png',
        role: 'jungle',
      },
      {
        id: '100131733431621850',
        summonerName: 'Avenger',
        firstName: 'Adriano',
        lastName: 'Perassoli',
        image:
          'http://static.lolesports.com/players/1674160189705_Avenger-1copy.png',
        role: 'mid',
      },
      {
        id: '99566407783597200',
        summonerName: 'TitaN',
        firstName: 'Alexandre',
        lastName: 'dos Santos',
        image:
          'http://static.lolesports.com/players/1674160329559_titan-1copy.png',
        role: 'bottom',
      },
      {
        id: '108395451349202875',
        summonerName: 'Morttheus',
        firstName: 'Matheus',
        lastName: 'Motta',
        image:
          'http://static.lolesports.com/players/1674503341424_Morttheus-1copy.png',
        role: 'bottom',
      },
      {
        id: '109519428307200356',
        summonerName: 'Beta32',
        firstName: 'Felipe',
        lastName: 'Carreno',
        image:
          'http://static.lolesports.com/players/1671133852195_placeholder.png',
        role: 'top',
      },
      {
        id: '107559597273805278',
        summonerName: 'Soweto',
        firstName: 'Leonardo',
        lastName: 'Andrade',
        image:
          'http://static.lolesports.com/players/1674503296800_Soweto-1copy.png',
        role: 'jungle',
      },
      {
        id: '103980682928812378',
        summonerName: 'Aithusa',
        firstName: 'Lucas',
        lastName: 'Mantese',
        image:
          'http://static.lolesports.com/players/1674503236513_Aithusa-1copy.png',
        role: 'mid',
      },
      {
        id: '103743593842085398',
        summonerName: 'scamber',
        firstName: 'Pedro',
        lastName: 'Maximiniano',
        image:
          'http://static.lolesports.com/players/1674503267167_Scamber-1copy.png',
        role: 'support',
      },
      {
        id: '109519445199403108',
        summonerName: 'Stoneses',
        firstName: 'Rafael',
        lastName: 'Pinto',
        image:
          'http://static.lolesports.com/players/1671134109686_placeholder.png',
        role: 'support',
      },
      {
        id: '103495716778335083',
        summonerName: 'Kuri',
        firstName: 'Wonyoung',
        lastName: 'Choi',
        image:
          'http://static.lolesports.com/players/1674160271945_Kuri-1copy.png',
        role: 'support',
      },
    ],
  },
  losGrandes: {
    id: '109480204628225868',
    slug: 'los-grandes',
    name: 'Los Grandes',
    code: 'LOS',
    image: 'http://static.lolesports.com/teams/1671220578076_LOSGRANDES1.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1671220578079_LOSGRANDES1.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '103743600803050303',
        summonerName: 'Hidan',
        firstName: 'Leonardo',
        lastName: 'Santos',
        image:
          'http://static.lolesports.com/players/1674503162464_Hidan-1copy.png',
        role: 'top',
      },
      {
        id: '103495716693930864',
        summonerName: 'HiRit',
        firstName: 'Shin',
        lastName: 'Tae-min',
        image:
          'http://static.lolesports.com/players/1674158345846_Hirit-1copy.png',
        role: 'top',
      },
      {
        id: '99566407771166805',
        summonerName: 'Ranger',
        firstName: 'Filipe',
        lastName: 'Brombilla',
        image:
          'http://static.lolesports.com/players/1674158551585_Ranger-1copy.png',
        role: 'jungle',
      },
      {
        id: '106393510086922506',
        summonerName: 'enel1',
        firstName: 'Gustavo',
        lastName: 'Hayashi Lima',
        image:
          'http://static.lolesports.com/players/1674158280759_Enel-1copy.png',
        role: 'jungle',
      },
      {
        id: '109519179723052282',
        summonerName: 'CrjaY',
        firstName: 'Renan',
        lastName: 'Machado',
        image:
          'http://static.lolesports.com/players/1674158239736_Crjay-1copy.png',
        role: 'jungle',
      },
      {
        id: '108576894549726185',
        summonerName: 'neyzz',
        firstName: 'Eduardo',
        lastName: 'Espindola',
        image:
          'http://static.lolesports.com/players/1674158514404_Neyzz-1copy.png',
        role: 'mid',
      },
      {
        id: '109519181469036777',
        summonerName: 'Allezs',
        firstName: 'Rafael',
        lastName: 'Souza',
        image:
          'http://static.lolesports.com/players/1674158109581_Allezs-1copy.png',
        role: 'mid',
      },
      {
        id: '99566404532076403',
        summonerName: 'Lava',
        firstName: 'Taehun',
        lastName: 'Kim',
        image:
          'http://static.lolesports.com/players/1674158384534_Lava-1copy.png',
        role: 'mid',
      },
      {
        id: '105397181199735591',
        summonerName: 'Netuno',
        firstName: 'Lucas',
        lastName: 'Fensterseifer',
        image:
          'http://static.lolesports.com/players/1674158474988_Netuno-1copy.png',
        role: 'bottom',
      },
      {
        id: '107560148944019348',
        summonerName: 'Celo',
        firstName: 'Marcelo',
        lastName: 'Leite',
        image:
          'http://static.lolesports.com/players/1674158145934_Celo-1copy.png',
        role: 'bottom',
      },
      {
        id: '106279008706914426',
        summonerName: 'Mido',
        firstName: 'Giulano',
        lastName: 'Inazawa',
        image:
          'http://static.lolesports.com/players/1674158438032_Mido-1copy.png',
        role: 'bottom',
      },
      {
        id: '107559356925533344',
        summonerName: 'zay',
        firstName: 'Vinicius',
        lastName: 'Viana',
        image:
          'http://static.lolesports.com/players/1674158580158_Zay-1copy.png',
        role: 'support',
      },
    ],
  },
  loud: {
    id: '105397404796640412',
    slug: 'loud',
    name: 'LOUD',
    code: 'LLL',
    image: 'http://static.lolesports.com/teams/Logo-LOUD-Esports_Original.png',
    alternativeImage:
      'http://static.lolesports.com/teams/Logo-LOUD-Esports_Original.png',
    backgroundImage: 'http://static.lolesports.com/teams/LOUDLLL.png',
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '107560059495150409',
        summonerName: 'Makes',
        firstName: 'Gabriel',
        lastName: 'Nemeth',
        image:
          'http://static.lolesports.com/players/1674158911148_Makes-1copy.png',
        role: 'top',
      },
      {
        id: '99566407763820708',
        summonerName: 'Robo',
        firstName: 'Leonardo',
        lastName: 'Souza',
        image:
          'http://static.lolesports.com/players/1674158981675_Robo-1copy.png',
        role: 'top',
      },
      {
        id: '103525195752578562',
        summonerName: 'Croc',
        firstName: 'Jong Hoon',
        lastName: 'Park',
        image:
          'http://static.lolesports.com/players/1674158874596_Croc-1copy.png',
        role: 'jungle',
      },
      {
        id: '99566407748213242',
        summonerName: 'tinowns',
        firstName: 'Thiago',
        lastName: 'Sartori',
        image:
          'http://static.lolesports.com/players/1674159066889_Tinowns-1copy.png',
        role: 'mid',
      },
      {
        id: '104275701204622434',
        summonerName: 'Beenie',
        firstName: 'Pedro',
        lastName: 'Rodrigues',
        image:
          'http://static.lolesports.com/players/1674158779562_Beenie-1copy.png',
        role: 'bottom',
      },
      {
        id: '101383793153915529',
        summonerName: 'Ceos',
        firstName: 'Denilson',
        lastName: 'Oliveira',
        image:
          'http://static.lolesports.com/players/1674158823709_Ceos-1copy.png',
        role: 'support',
      },
      {
        id: '102135522496703527',
        summonerName: 'Vahvel',
        firstName: 'Victor',
        lastName: 'Vieira',
        image:
          'http://static.lolesports.com/players/1674159132160_Vahvel-1copy.png',
        role: 'support',
      },
      {
        id: '105397275533488759',
        summonerName: 'ShaQuinn',
        firstName: 'Pedro',
        lastName: 'Salazar',
        image: 'http://static.lolesports.com/players/Luskka.png',
        role: 'top',
      },
      {
        id: '103478281326801420',
        summonerName: 'Mousty',
        firstName: 'Roger',
        lastName: 'Wiegand',
        image:
          'http://static.lolesports.com/players/1674158941709_Mousty-1copy.png',
        role: 'jungle',
      },
      {
        id: '103478281329357326',
        summonerName: 'Tutsz',
        firstName: 'Arthur',
        lastName: 'Machado',
        image:
          'http://static.lolesports.com/players/1674159101371_Tutsz-1copy.png',
        role: 'mid',
      },
      {
        id: '100174429498252618',
        summonerName: 'Route',
        firstName: 'Geomsoo',
        lastName: 'Mun',
        image:
          'http://static.lolesports.com/players/1674159016259_Route-1copy.png',
        role: 'bottom',
      },
      {
        id: '109519312677156930',
        summonerName: 'Stormi',
        firstName: 'Thalita',
        lastName: 'Andrade',
        image:
          'http://static.lolesports.com/players/1671132087802_placeholder.png',
        role: 'support',
      },
    ],
  },
  kabum: {
    id: '99566408221114231',
    slug: 'kabum-esports',
    name: 'KaBuM! Esports',
    code: 'KBM',
    image:
      'http://static.lolesports.com/teams/1671197541491_LOGO-KABUM-ESPORTS-2023-NEGATIVO-FUNDOPRETO.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1671197541493_LOGO-KABUM-ESPORTS-2023-POSITIVO-FUNDOBRANCO.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '108395415618910121',
        summonerName: 'Rusty',
        firstName: 'Emanuel ',
        lastName: 'Souza',
        image:
          'http://static.lolesports.com/players/1674156352260_Silhueta.png',
        role: 'top',
      },
      {
        id: '105397130782159175',
        summonerName: 'SCARY',
        firstName: 'Artur',
        lastName: 'Scalabrin',
        image:
          'http://static.lolesports.com/players/1674156032409_Scary-1copy.png',
        role: 'jungle',
      },
      {
        id: '105397226281231317',
        summonerName: 'Dioge',
        firstName: 'Diogenes',
        lastName: 'Bispo',
        image:
          'http://static.lolesports.com/players/1674155710368_Dioge-1copy.png',
        role: 'mid',
      },
      {
        id: '101383793129208417',
        summonerName: 'DudsTheBoy',
        firstName: 'Igor',
        lastName: 'Homem',
        image:
          'http://static.lolesports.com/players/1674155766397_Dudstheboy-1copy.png',
        role: 'bottom',
      },
      {
        id: '103538643818319398',
        summonerName: 'scuro',
        firstName: 'Gabriel',
        lastName: 'Scuro',
        image:
          'http://static.lolesports.com/players/1674156078763_Scuro-1copy.png',
        role: 'support',
      },
      {
        id: '106274177506022087',
        summonerName: 'SuperCleber',
        firstName: 'Cleber',
        lastName: 'Nantes',
        image:
          'http://static.lolesports.com/players/1674156120967_Supercleber-1copy.png',
        role: 'top',
      },
      {
        id: '103537145723534552',
        summonerName: 'Lonely',
        firstName: 'Gyujun',
        lastName: 'Han',
        image:
          'http://static.lolesports.com/players/1674155894413_Lonely-1copy.png',
        role: 'top',
      },
      {
        id: '105541438961192885',
        summonerName: 'Samkz',
        firstName: 'Samuel',
        lastName: 'Pereira',
        image:
          'http://static.lolesports.com/players/1674155969954_Samkz-1copy.png',
        role: 'jungle',
      },
      {
        id: '106279717873849247',
        summonerName: 'YURI',
        firstName: 'Heemin',
        lastName: 'Cha',
        image:
          'http://static.lolesports.com/players/1674156204757_Yuri-1copy.png',
        role: 'mid',
      },
      {
        id: '109518887573108724',
        summonerName: 'Doppler',
        firstName: 'Eduardo',
        lastName: 'Bomfim',
        image:
          'http://static.lolesports.com/players/1671125600529_placeholder.png',
        role: 'bottom',
      },
      {
        id: '104410793439045393',
        summonerName: 'RAV3N',
        firstName: 'Raphael',
        lastName: 'Sancio',
        image:
          'http://static.lolesports.com/players/1674156166426_Raven-1copy.png',
        role: 'bottom',
      },
      {
        id: '106276251959912540',
        summonerName: 'Guigs',
        firstName: 'Guilherme',
        lastName: 'Soares',
        image:
          'http://static.lolesports.com/players/1674155837931_Guigs-1copy.png',
        role: 'support',
      },
    ],
  },
  intz: {
    id: '99566408217116828',
    slug: 'intz',
    name: 'INTZ',
    code: 'ITZ',
    image:
      'http://static.lolesports.com/teams/1643056732785_INTZ_Logo_Principal_2022.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1643056732787_INTZ_Logo_Principal_2022.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '99566407784942056',
        summonerName: 'Yampi',
        firstName: 'Yan',
        lastName: 'Petermann',
        image:
          'http://static.lolesports.com/players/1674155536338_Yampi-1copy.png',
        role: 'jungle',
      },
      {
        id: '103478281346265622',
        summonerName: 'NOsFerus',
        firstName: 'Júlio',
        lastName: 'Cruz',
        image:
          'http://static.lolesports.com/players/1674155430084_Nosferus-1copy.png',
        role: 'mid',
      },
      {
        id: '101383793149917827',
        summonerName: 'Juzo',
        firstName: 'Gabriel',
        lastName: 'Nishimura',
        image:
          'http://static.lolesports.com/players/1674155278964_Juzo-1copy.png',
        role: 'bottom',
      },
      {
        id: '107559633217576287',
        summonerName: 'Yuki',
        firstName: 'Igor',
        lastName: 'Tanaka',
        image:
          'http://static.lolesports.com/players/1674155672579_Silhueta.png',
        role: 'support',
      },
      {
        id: '103743605928031045',
        summonerName: 'Eradan',
        firstName: 'André',
        lastName: 'Santos',
        image:
          'http://static.lolesports.com/players/1674155237566_Eradan-1copy.png',
        role: 'top',
      },
      {
        id: '108443041194004491',
        summonerName: 'Zzk',
        firstName: 'Won',
        lastName: 'Kwen Hee ',
        image:
          'http://static.lolesports.com/players/1674155573290_Zzk-1copy.png',
        role: 'top',
      },
      {
        id: '109518814253943969',
        summonerName: 'Paclo',
        firstName: 'Lucas',
        lastName: 'Jhun',
        image:
          'http://static.lolesports.com/players/1674155475050_Paclo-1copy.png',
        role: 'top',
      },
      {
        id: '108494063372887027',
        summonerName: 'Tatu',
        firstName: 'Pedro',
        lastName: 'Seixas',
        image:
          'http://static.lolesports.com/players/1674155508503_Tatu-1copy.png',
        role: 'jungle',
      },
      {
        id: '102135534311497703',
        summonerName: 'Blacky',
        firstName: 'Matheus',
        lastName: 'Lessa',
        image:
          'http://static.lolesports.com/players/1674155123885_Blacky-1copy.png',
        role: 'mid',
      },
      {
        id: '107560357748334767',
        summonerName: 'NinjaKiwi',
        firstName: 'Yudi',
        lastName: 'Miyashiro',
        image:
          'http://static.lolesports.com/players/1674155390950_Ninjakiwi-1copy.png',
        role: 'bottom',
      },
      {
        id: '109518816550791300',
        summonerName: 'Look',
        firstName: 'Ricardo',
        lastName: 'Raeder',
        image:
          'http://static.lolesports.com/players/1674155323695_Look-1copy.png',
        role: 'support',
      },
      {
        id: '109518818558571904',
        summonerName: 'Nia',
        firstName: 'Woo',
        lastName: 'Jun Sung',
        image:
          'http://static.lolesports.com/players/1674155356790_Nia-1copy.png',
        role: 'support',
      },
      {
        id: '109802874490334399',
        summonerName: 'Thominhas',
        firstName: 'Thomas',
        lastName: 'Nakayama',
        image:
          'http://static.lolesports.com/players/1675458890413_placeholder.png',
        role: 'support',
      },
    ],
  },
  fluxo: {
    id: '109480056092207899',
    slug: 'fluxo',
    name: 'FLUXO',
    code: 'FX',
    image:
      'http://static.lolesports.com/teams/1670539056915_fluxo_escudo_w.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1670539056920_fluxo_escudo_b.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '109518616822460313',
        summonerName: 'Forlin',
        firstName: 'Leonardo',
        lastName: 'Pereira',
        image:
          'http://static.lolesports.com/players/1674153943908_Forlin-1copy.png',
        role: 'top',
      },
      {
        id: '107559255871511679',
        summonerName: 'Mito',
        firstName: 'Giovani',
        lastName: 'Baldan',
        image:
          'http://static.lolesports.com/players/1674154117059_Mito-1copy.png',
        role: 'top',
      },
      {
        id: '99566407758231326',
        summonerName: 'Tay',
        firstName: 'Rodrigo',
        lastName: 'Panisa',
        image:
          'http://static.lolesports.com/players/1674154478403_Tay-1copy.png',
        role: 'top',
      },
      {
        id: '107559262560546832',
        summonerName: 'Ancrath',
        firstName: 'Rodrigo',
        lastName: 'Montrezol',
        image:
          'http://static.lolesports.com/players/1674153807529_Ancrath-1copy.png',
        role: 'jungle',
      },
      {
        id: '105397234464043531',
        summonerName: 'Disamis',
        firstName: 'Pedro',
        lastName: 'Gonçalves',
        image:
          'http://static.lolesports.com/players/1674153912597_Disamis-1copy.png',
        role: 'jungle',
      },
      {
        id: '100131567589299245',
        summonerName: 'hauz',
        firstName: 'Bruno',
        lastName: 'Ferreira',
        image:
          'http://static.lolesports.com/players/1674153999740_Hauz-1copy.png',
        role: 'mid',
      },
      {
        id: '109518619333850417',
        summonerName: 'Picknn',
        firstName: 'Bruno',
        lastName: 'Souza',
        image:
          'http://static.lolesports.com/players/1674154163651_Picknn-1copy.png',
        role: 'mid',
      },
      {
        id: '105397249991107623',
        summonerName: 'Brance',
        firstName: 'Diego',
        lastName: 'Antunes',
        image:
          'http://static.lolesports.com/players/1674153861095_Brance-1copy.png',
        role: 'bottom',
      },
      {
        id: '109518621083964549',
        summonerName: 'Kojima',
        firstName: 'Caio',
        lastName: 'Kojima',
        image:
          'http://static.lolesports.com/players/1674154084988_Kojima-1copy.png',
        role: 'bottom',
      },
      {
        id: '109518623516133866',
        summonerName: 'Veiga',
        firstName: 'Guilherme',
        lastName: 'Rodrigues',
        image:
          'http://static.lolesports.com/players/1674154509988_Veiga-1copy.png',
        role: 'bottom',
      },
      {
        id: '99566408211536727',
        summonerName: 'JoJo',
        firstName: 'Gabriel',
        lastName: 'de Oliveira',
        image:
          'http://static.lolesports.com/players/1674154024432_Jojo-1copy.png',
        role: 'support',
      },
      {
        id: '105397194580419452',
        summonerName: 'Kick',
        firstName: 'João',
        lastName: 'Rosas',
        image:
          'http://static.lolesports.com/players/1674154054383_Kick-1copy.png',
        role: 'support',
      },
    ],
  },
  liberty: {
    id: '99566408222831088',
    slug: 'liberty',
    name: 'Liberty',
    code: 'LBR',
    image: 'http://static.lolesports.com/teams/1643305707691_RXfNcFMU.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1643305798548_qiCw-xgg.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '105397207118950800',
        summonerName: 'SkB',
        firstName: 'Arthur',
        lastName: 'Cruz',
        image:
          'http://static.lolesports.com/players/1674157985301_Skb-1copy.png',
        role: 'top',
      },
      {
        id: '104275744442588539',
        summonerName: 'Kiari',
        firstName: 'Thiago',
        lastName: 'Campos',
        image:
          'http://static.lolesports.com/players/1674157830430_Kiari-1copy.png',
        role: 'top',
      },
      {
        id: '105397238669368241',
        summonerName: 'Cavalo',
        firstName: 'Alexandre',
        lastName: 'Fernandes',
        image:
          'http://static.lolesports.com/players/1674157733810_Cavalo-1copy.png',
        role: 'support',
      },
      {
        id: '109519055629889646',
        summonerName: 'Lukshy',
        firstName: 'Lucca',
        lastName: 'Martins',
        image:
          'http://static.lolesports.com/players/1671128165393_placeholder.png',
        role: 'top',
      },
      {
        id: '104241792163503965',
        summonerName: 'accez',
        firstName: 'Lucas',
        lastName: 'Miranda',
        image:
          'http://static.lolesports.com/players/1674157709013_Accez-1copy.png',
        role: 'jungle',
      },
      {
        id: '109519057410044019',
        summonerName: 'Drakehero',
        firstName: 'Luciano',
        lastName: 'Junior',
        image:
          'http://static.lolesports.com/players/1674157765511_Drakehero-1copy.png',
        role: 'jungle',
      },
      {
        id: '103461966873003900',
        summonerName: 'Piloto',
        firstName: 'Elvis',
        lastName: 'Vergara',
        image:
          'http://static.lolesports.com/players/1674157894504_Piloto-1copy.png',
        role: 'mid',
      },
      {
        id: '109519059241407699',
        summonerName: 'Ryanzin',
        firstName: 'Ryan',
        lastName: 'Charles',
        image:
          'http://static.lolesports.com/players/1674157954035_Ryan-1copy.png',
        role: 'mid',
      },
      {
        id: '106279007199957857',
        summonerName: 'Juliera',
        firstName: 'Julio',
        lastName: 'Henrique',
        image:
          'http://static.lolesports.com/players/1674157796579_Juliera-1copy.png',
        role: 'bottom',
      },
      {
        id: '109519061710277829',
        summonerName: 'Reaper',
        firstName: 'Matheus',
        lastName: 'Silva',
        image:
          'http://static.lolesports.com/players/1674157923197_Reaper-1copy.png',
        role: 'bottom',
      },
      {
        id: '109519063190408393',
        summonerName: 'Strix',
        firstName: 'Douglas',
        lastName: 'Assis',
        image:
          'http://static.lolesports.com/players/1674158024266_Strix-1copy.png',
        role: 'support',
      },
      {
        id: '109519064896337328',
        summonerName: 'Momochi',
        firstName: 'Gabriel',
        lastName: 'Sousa',
        image:
          'http://static.lolesports.com/players/1674157859126_Momochi-1copy.png',
        role: 'support',
      },
    ],
  },
  pain: {
    id: '99566408217955692',
    slug: 'pain-gaming',
    name: 'paiN Gaming',
    code: 'PNG',
    image:
      'http://static.lolesports.com/teams/1674657011011_pain_logo_white.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1674657070286_pain_preto.png',
    backgroundImage: null,
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '101388913280994733',
        summonerName: 'Wizer',
        firstName: 'Choi',
        lastName: 'Euiseok',
        image:
          'http://static.lolesports.com/players/1674159941646_Wizer-1copy.png',
        role: 'top',
      },
      {
        id: '108395441676362288',
        summonerName: 'anato',
        firstName: 'Kevin ',
        lastName: 'Castro',
        image:
          'http://static.lolesports.com/players/1674159239336_Anato-1copy.png',
        role: 'jungle',
      },
      {
        id: '100205576295412145',
        summonerName: 'CarioK',
        firstName: 'Marcos',
        lastName: 'Oliveira',
        image:
          'http://static.lolesports.com/players/1674159313821_Cariok-1copy.png',
        role: 'jungle',
      },
      {
        id: '99566407782924807',
        summonerName: 'dyNquedo',
        firstName: 'Matheus',
        lastName: 'Rossini',
        image:
          'http://static.lolesports.com/players/1674159391789_Dynquedo-1copy.png',
        role: 'mid',
      },
      {
        id: '105397295174824600',
        summonerName: 'Qats',
        firstName: 'Thiago Augusto',
        lastName: 'Fernandes',
        image:
          'http://static.lolesports.com/players/1674159914147_Qats-1copy.png',
        role: 'mid',
      },
      {
        id: '103478281332503056',
        summonerName: 'ProDelta',
        firstName: 'Fábio',
        lastName: 'Marques',
        image:
          'http://static.lolesports.com/players/1674159861070_ProDelta-1copy.png',
        role: 'support',
      },
      {
        id: '100205576297917527',
        summonerName: 'Damage',
        firstName: 'Yan',
        lastName: 'Sales',
        image:
          'http://static.lolesports.com/players/1674159350298_Damage-1copy.png',
        role: 'support',
      },
      {
        id: '105758879937719082',
        summonerName: 'Miss',
        firstName: 'Leticia',
        lastName: 'Porto',
        image:
          'http://static.lolesports.com/players/1674159829302_Miss-1copy.png',
        role: 'support',
      },
      {
        id: '104241655502826222',
        summonerName: 'Yupps',
        firstName: 'Yuri',
        lastName: 'Petermann',
        image:
          'http://static.lolesports.com/players/1674160014619_Yupps-1copy.png',
        role: 'top',
      },
      {
        id: '106619546344608600',
        summonerName: 'kksh',
        firstName: 'Otávio',
        lastName: 'Alves',
        image:
          'http://static.lolesports.com/players/1674159683715_Kksh-1copy.png',
        role: 'bottom',
      },
      {
        id: '101388912784979237',
        summonerName: 'Bvoy',
        firstName: 'Younghoon',
        lastName: 'Joo',
        image:
          'http://static.lolesports.com/players/1674159280112_Bvoy-1copy.png',
        role: 'bottom',
      },
      {
        id: '107560152698445728',
        summonerName: 'Griba',
        firstName: 'João',
        lastName: 'Grzybowski',
        image:
          'http://static.lolesports.com/players/1674159437903_Griba-1copy.png',
        role: 'support',
      },
    ],
  },
  furia: {
    id: '100205576309502431',
    slug: 'furia',
    name: 'FURIA',
    code: 'FUR',
    image: 'http://static.lolesports.com/teams/FURIA---black.png',
    alternativeImage: 'http://static.lolesports.com/teams/FURIA---black.png',
    backgroundImage: 'http://static.lolesports.com/teams/FuriaUppercutFUR.png',
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '99566408210057665',
        summonerName: 'fNb',
        firstName: 'Natan',
        lastName: 'Braz',
        image:
          'http://static.lolesports.com/players/1674154689560_Fnb-1copy.png',
        role: 'top',
      },
      {
        id: '107559322915926090',
        summonerName: 'Zemnas',
        firstName: 'Luidy',
        lastName: 'Tanno',
        image:
          'http://static.lolesports.com/players/1674155095312_Silhueta.png',
        role: 'top',
      },
      {
        id: '109518712216515937',
        summonerName: 'Gru',
        firstName: 'Pedro',
        lastName: 'Nunes',
        image:
          'http://static.lolesports.com/players/1674154801478_Gru-1copy.png',
        role: 'top',
      },
      {
        id: '105397190018458463',
        summonerName: 'Goot',
        firstName: 'Gabriel',
        lastName: 'da Luz',
        image:
          'http://static.lolesports.com/players/1674154770697_Goot-1copy.png',
        role: 'jungle',
      },
      {
        id: '107559327426244686',
        summonerName: 'StineR',
        firstName: 'Vinícius',
        lastName: 'Corrêa',
        image:
          'http://static.lolesports.com/players/1674155065604_Stinger-1copy.png',
        role: 'jungle',
      },
      {
        id: '99566407784212776',
        summonerName: 'Envy',
        firstName: 'Bruno',
        lastName: 'Farias',
        image:
          'http://static.lolesports.com/players/1674154656856_Envy-1copy.png',
        role: 'mid',
      },
      {
        id: '107559338252333149',
        summonerName: 'Fuuu',
        firstName: 'Gabriel',
        lastName: 'Furuuti',
        image:
          'http://static.lolesports.com/players/1674154736474_Fuuu-1copy.png',
        role: 'mid',
      },
      {
        id: '109518714719221538',
        summonerName: 'yazi',
        firstName: 'Bruno',
        lastName: 'Pascoal',
        image:
          'http://static.lolesports.com/players/1674154977128_Yazi-1copy.png',
        role: 'bottom',
      },
      {
        id: '103743620262608671',
        summonerName: 'Trigo',
        firstName: 'Matheus',
        lastName: 'Nóbrega',
        image:
          'http://static.lolesports.com/players/1674154945944_Trigo-1copy.png',
        role: 'bottom',
      },
      {
        id: '108613483446049530',
        summonerName: 'Ayu',
        firstName: 'Andrey',
        lastName: 'Saraiva',
        image:
          'http://static.lolesports.com/players/1674154604924_Ayu-1copy.png',
        role: 'support',
      },
      {
        id: '109518716685978765',
        summonerName: 'Manel',
        firstName: 'Emanoel',
        lastName: 'Lopes',
        image:
          'http://static.lolesports.com/players/1671122993259_placeholder.png',
        role: 'support',
      },
      {
        id: '98767975947296513',
        summonerName: 'RedBert',
        firstName: 'Ygor',
        lastName: 'Freitas',
        image:
          'http://static.lolesports.com/players/1674154885874_Redbert-1copy.png',
        role: 'support',
      },
    ],
  },
  keyd: {
    id: '99566408219409348',
    slug: 'vivo-keyd',
    name: 'Vivo Keyd Stars',
    code: 'VKS',
    image: 'http://static.lolesports.com/teams/1670542079678_vks.png',
    alternativeImage:
      'http://static.lolesports.com/teams/1670541584344_vks.png',
    backgroundImage:
      'https://lolstatic-a.akamaihd.net/esports-assets/production/team/keyd-stars-erse0ibu.png',
    status: 'active',
    homeLeague: {
      name: 'CBLOL',
      region: 'BRASIL',
    },
    players: [
      {
        id: '109519489933554012',
        summonerName: 'Eduardo',
        firstName: 'Eduardo',
        lastName: 'Carvalho',
        image:
          'http://static.lolesports.com/players/1671134791904_placeholder.png',
        role: 'top',
      },
      {
        id: '100131733430915231',
        summonerName: 'GUIGO',
        firstName: 'Guilherme',
        lastName: 'Ruiz',
        image:
          'http://static.lolesports.com/players/1674160687530_Guigo-1copy.png',
        role: 'top',
      },
      {
        id: '103478281338008082',
        summonerName: 'Tyrin',
        firstName: 'William',
        lastName: 'Portugal',
        image:
          'http://static.lolesports.com/players/1674161097786_Tyrin-1copy.png',
        role: 'top',
      },
      {
        id: '103478281341350420',
        summonerName: 'Sting',
        firstName: 'Luis Gustavo',
        lastName: 'Dirami',
        image:
          'http://static.lolesports.com/players/1674160963299_Sting-1copy.png',
        role: 'jungle',
      },
      {
        id: '106279668107187055',
        summonerName: 'Hugato',
        firstName: 'Hugo',
        lastName: 'Dias',
        image:
          'http://static.lolesports.com/players/1674160846849_Hugato-1copy.png',
        role: 'jungle',
      },
      {
        id: '103743619023893329',
        summonerName: 'Grevthar',
        firstName: 'Daniel',
        lastName: 'Ferreira',
        image:
          'http://static.lolesports.com/players/1674160656804_Grevthar-1copy.png',
        role: 'mid',
      },
      {
        id: '107560281476330464',
        summonerName: 'Leleko',
        firstName: 'Leandro',
        lastName: 'Aihara',
        image:
          'http://static.lolesports.com/players/1674160888467_Leleco-1copy.png',
        role: 'mid',
      },
      {
        id: '101383793127111259',
        summonerName: 'Krastyel',
        firstName: 'Marcos',
        lastName: 'Ferraz',
        image:
          'http://static.lolesports.com/players/1674160925554_Krastyel-1copy.png',
        role: 'mid',
      },
      {
        id: '101383793082615993',
        summonerName: 'ST3PZ',
        firstName: 'Miguel',
        lastName: 'Rezek',
        image:
          'http://static.lolesports.com/players/1674161257672_Silhueta.png',
        role: 'bottom',
      },
      {
        id: '99566407760687077',
        summonerName: 'micaO',
        firstName: 'Micael',
        lastName: 'Rodrigues',
        image:
          'http://static.lolesports.com/players/1674160993441_micao-1copy.png',
        role: 'bottom',
      },
      {
        id: '104410784751211111',
        summonerName: 'Bounty',
        firstName: 'Gabriel',
        lastName: 'Donner',
        image:
          'http://static.lolesports.com/players/1674160600601_Bounty-1copy.png',
        role: 'support',
      },
      {
        id: '106276191141062603',
        summonerName: 'Telas',
        firstName: 'Luis',
        lastName: 'Drumond',
        image:
          'http://static.lolesports.com/players/1674161049350_Telas-1copy.png',
        role: 'support',
      },
    ],
  },
}
