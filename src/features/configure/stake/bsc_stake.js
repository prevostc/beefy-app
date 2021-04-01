import { govPoolABI } from '../abi';

export const bscStakePools = [
  {
    id: 'bifi-bnb',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'BNB',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    earnContractAddress: '0x453D4Ba9a2D594314DF88564248497F7D74d6b2C',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WBNB',
    partnership: false,
    status: 'active',
    hideCountdown: true,
    partner: {
      logo: 'stake/beefy/beefyfinance.png',
      background: 'stake/beefy/background.png',
      text:
        "You probably already knew that Beefy is the most trusted Yield optimizer for the Binance Smart Chain. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of BNB that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your BNB whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
      website: 'https://app.beefy.finance',
      social: {
        telegram: 'http://t.me/beefyfinance',
        twitter: 'https://twitter.com/beefyfinance',
      },
    },
  },

  {
    id: 'moo_auto_cake-swirl',
    name: 'Swirl Cash',
    logo: 'single-assets/CAKE.png',
    token: 'mooAutoCakeFixed',
    tokenDecimals: 18,
    tokenAddress: '0xe0B473c0dD6D7Fea5B395c3Ce7ffd4FEF0ab4373',
    tokenOracle: 'tokens',
    tokenOracleId: 'Cake',
    earnedToken: 'SWIRL',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x52d86850bc8207b520340B7E39cDaF22561b9E56',
    earnContractAddress: '0x062939d2EAe7586424180E9b4D80e442885A6E2F',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SWIRL',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1617725489,
    partner: {
      logo: 'stake/swirl/logo.png',
      background: 'stake/swirl/background.png',
      text:
        'Swirl is a BSC-deployed fork of Tornado.cash, the strongest privacy protocol on the Ethereum network. It uses various cryptographic methods, including implementations of zero-knowledge(zkSnarks) proofs to achieve privacy functionality. So we’ve taken something that works, which allows 100M USD worth of tokens per day to regain their right to anonymity, customized it in Swirl for the current DeFi landscape, and brought it to Binance Smart Chain. Now, Swirl will allow you to send BSC cryptocurrency with 100% anonymity! *Swirl is a declinatory Token, which means that there is a 2% burn on transactions that get redistributed, please keep this in mind when transferring and trading this token.*',
      website: 'https://swirl.cash/',
      social: {
        telegram: 'https://t.me/Swirl_Cash',
        twitter: 'https://twitter.com/Swirl_Cash',
      },
    },
  },

  {
    id: 'moo_ellipsis_3pool-zefi',
    name: 'ZCore Finance',
    logo: 'uncategorized/EPS3.png',
    token: 'mooEllipsis3Pool',
    tokenDecimals: 18,
    tokenAddress: '0xE563c046147b4dF98bfCD3d00Dc54511F0c3b752',
    tokenOracle: 'lps',
    tokenOracleId: 'ellipsis-3eps',
    earnedToken: 'ZEFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
    earnContractAddress: '0xc7ccd3520bEa91a87ecf39Ed39d9BD59946ED2b5',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ZEFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1617555581,
    partner: {
      logo: 'stake/zcore/logo.png',
      background: 'stake/zcore/background.png',
      text:
        'ZCore Finance is a decentralized exchange running on Binance Smart Chain and Pancake swap exchange, with features that let you earn and win tokens. What we are trying to do is create a perpetual deflation token, the ZEFI, that allows a constant price pump with a sufficient burn mechanism. We are not trying to replace the swap & exchange but to add value into the system and create a suitable and sustainable environment for people to yield farm with high APR.',
      website: 'https://finance.zcore.network/',
      social: {
        telegram: 'https://t.me/ZCoreMiners',
        twitter: 'https://twitter.com/ZCoreCrypto',
      },
    },
  },

  {
    id: 'moo_1inch-hps',
    name: 'Billionhappiness',
    logo: 'single-assets/INCH.png',
    token: 'moo1INCH1INCH',
    tokenDecimals: 18,
    tokenAddress: '0xBa53AF4C2f1649F82e8070FB306DDBF2771A1950',
    tokenOracle: 'tokens',
    tokenOracleId: '1INCH',
    earnedToken: 'HPS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D',
    earnContractAddress: '0x9ae4496b063f5715561Cbe8f1d389a3FE4720258',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'HPS',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1617643560,
    partner: {
      logo: 'stake/billionhappiness/logo.png',
      background: 'stake/billionhappiness/background.png',
      text:
        'BillionHappiness is a blockchain technology-based apparel company dedicated to providing happiness through a transparent record of information on its quality products. Our goal is to provide authenticity using blockchain technology to eliminate counterfeit items on the market. Billion Happiness has a token called BHC.',
      website: 'https://billionhappiness.finance',
      social: {
        telegram: 'https://t.me/BillionHappinessOfficial',
        twitter: 'https://twitter.com/BHC_Happiness',
      },
    },
  },

  {
    id: 'moo_auto_wbnb-naut',
    name: 'Astronaut',
    logo: 'single-assets/BNB.png',
    token: 'mooAutoWbnbFixed',
    tokenDecimals: 18,
    tokenAddress: '0x5B06aA1ebd2e15bC6001076355E5B4C39Cbc83F3',
    tokenOracle: 'tokens',
    tokenOracleId: 'WBNB',
    earnedToken: 'NAUT',
    earnedTokenDecimals: 8,
    earnedTokenAddress: '0x05B339B0A346bF01f851ddE47a5d485c34FE220c',
    earnContractAddress: '0x47F7CbE34aD6f857662759CDAECC48152237d135',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'NAUT',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1617388318,
    partner: {
      logo: 'stake/astronaut/logo.png',
      background: 'stake/astronaut/background.png',
      text:
        'Astronaut is a protocol built for decentralizing the way in which new projects and ideas coming to the BSC ecosystem raise capital. With Astronaut, decentralized projects will be able to raise and exchange capital cheap and fast. Users will be able to participate in a secure and interoperable environment on the Binance Smart Chain. The deployment of the protocol will take place in III phases. During Phase I Astronaut is a deflationary token that burns and redistributes %s to its holders. During Phase II Astronaut will release its evolved platform and launchpad to provide secure, fair, and affordable launches to both projects and investors alike. Phase III will be the real game-changer with a bridge and a full DeFi ecosystem. Astronaut takes their initiative from the bottom up slowly increasing value to the project and holders of the native NAUT token. *Astronaut is an Automatic Yield Token, which means that there is a 4% burn on transactions that get redistributed, please keep this in mind when transferring and trading this token.*',
      website: 'https://astronaut.to/',
      social: {
        telegram: 'https://t.me/joinchat/pJTzEu-mhnAzMjMx',
        twitter: 'https://twitter.com/astronauttoken',
      },
    },
  },

  {
    id: 'moo_cake_bnb-space',
    name: 'Farm.Space',
    logo: 'bnb-pairs/CAKE-BNB.svg',
    token: 'mooAutoCAKE-BNB',
    tokenDecimals: 18,
    tokenAddress: '0x5DA77c7DBF6dBa1155CF343db06a7D79aaaad9Ee',
    tokenOracle: 'lps',
    tokenOracleId: 'auto-cake-bnb',
    earnedToken: 'SPACE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0abd3E3502c15ec252f90F64341cbA74a24fba06',
    earnContractAddress: '0x680dDCDAB13735d11a09d3c6d60867B2C75861bE',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SPACE',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1617214423,
    partner: {
      logo: 'stake/space/logo.png',
      background: 'stake/space/background.png',
      text:
        'Farm your way into DeFi space! Bringing dual farming rewards through margin trading and lending, to yield farming, on the Binance Smart Chain.',
      website: 'https://farm.space/',
      social: {
        telegram: 'https://t.me/farmdotspace',
        twitter: 'https://twitter.com/farmdotspace',
      },
    },
  },
  {
    id: 'moo_bifi_wbnb-nuts',
    name: 'Squirrel Finance',
    logo: 'bnb-pairs/BIFI-BNB.svg',
    token: 'mooPancakeBIFI-BNB',
    tokenDecimals: 18,
    tokenAddress: '0x3B5332A476AbCdb80Cde6645e9e5563435e97772',
    tokenOracle: 'lps',
    tokenOracleId: 'cake-bifi-bnb',
    earnedToken: 'NUTS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x8893D5fA71389673C5c4b9b3cb4EE1ba71207556',
    earnContractAddress: '0x02e2B4212b8F5610E2ab548cB680cb58E61056F6',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'NUTS',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1616434156,
    partner: {
      logo: 'stake/squirrel/logo.png',
      background: 'stake/squirrel/background.png',
      text:
        'In recent months the TVL (total value locked) inside BSC DeFi has skyrocketed due to an endless variety of token-incentivized adoption boosters known as Yield Farming. The problem introduced is some of these are experimental or unaudited projects, which can leave unsavvy farmers exposed if something were to go wrong. Because of the crazy APR % some of these can offer in the first few days, many users completely neglect to account for the possible risks introduced (Yolo-farming). Squirrel aims to resolve this problem by developing a trusted ecosystem to empower, secure & simplify DeFi for end users.',
      website: 'https://squirrel.finance/',
      social: {
        telegram: 'https://t.me/SquirrelDeFi',
        twitter: 'https://twitter.com/SquirrelDeFi',
      },
    },
  },
  {
    id: 'moo_venus_eth-ape',
    name: 'MEMEFARM',
    logo: 'stake/memefarm/ape.png',
    token: 'mooVenusETH',
    tokenDecimals: 18,
    tokenAddress: '0xA9936272065e6DDAc9D2453C9a2712B581e9aE1B',
    tokenOracle: 'tokens',
    tokenOracleId: 'ETH',
    earnedToken: 'APE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xa9eA4b786ee5b7A733c035564Bfd9341A4c9FC1e',
    earnContractAddress: '0xEd1B64D539b945Fb291E5487F527D19B7748321e',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'APE',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1616260324,
    partner: {
      logo: 'stake/memefarm/logo.png',
      background: 'stake/memefarm/background.png',
      text:
        'Meme Farm is an exciting protocol that combines DeFi yield-farming and rare non-fungible tokens (NFTs). You’re probably familiar with various food farming coin clones, most of which have a lifespan of 48 hours or less. While these tokens can make a small fortune for early adopters, most of them die out quickly because they lack actual utility. Most are simply governance tokens that get dumped by big farmers because they aren’t interested in participating in creating and voting on proposals. So what’s our solution for creating a high-yield farming token that can last in the long term? It’s to give the tokens actual utility and value (and thus, buy pressure) by combining them with one of the hottest cryptocurrency industries: NFTs.\n',
      website: 'https://memefarm.io/',
      social: {
        telegram: 'https://t.me/APEcoin_Chat',
        twitter: 'https://twitter.com/Go_MemeFarm',
      },
    },
  },
  {
    id: 'moo_belt_venus-slime',
    name: 'Slime Finance',
    logo: 'uncategorized/BELT-VENUSBLP.png',
    token: 'mooBeltVenusBLP',
    tokenDecimals: 18,
    tokenAddress: '0xb35Dc0b5eFd7c75590a9da55BE46d968c5804e24',
    tokenOracle: 'lps',
    tokenOracleId: 'belt-venus-blp',
    earnedToken: 'SLIME',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
    earnContractAddress: '0xba4Ee74E45De614bd8c2DFEEf16a4c13922C5659',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SLIME',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1616087152,
    partner: {
      logo: 'stake/slimefinance/logo.png',
      background: 'stake/slimefinance/background.png',
      text:
        'Slime Finance is a new yield farming project on the Binance Smart Chain. We yearn to offer competitive yield rates for our investors by delivering innovative updates in a timely manner. What differentiates us from other yield services is how we interact with our community. We strive to listen to all suggestions given on our social media and let the community vote for features. We are a team of software developers with bold ideas, working rigorously, passionately, and tirelessly on the Slime Finance project. We promise to deliver on the mid to long term a true utility to our Slime Token and fight against traditional yield farm inflation.',
      website: 'https://slime.finance/',
      social: {
        telegram: 'https://t.me/slimefinance',
        twitter: 'https://twitter.com/slimefinance',
      },
    },
  },
  {
    id: 'moo_venus_eth-brew',
    name: 'CafeSwap',
    logo: 'single-assets/ETH.png',
    token: 'mooVenusETH',
    tokenDecimals: 18,
    tokenAddress: '0xA9936272065e6DDAc9D2453C9a2712B581e9aE1B',
    tokenOracle: 'tokens',
    tokenOracleId: 'ETH',
    earnedToken: 'BREW',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    earnContractAddress: '0xC7e3795259e9f74F4F2265Bf28680a70b41B4334',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BREW',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615228996,
    partner: {
      logo: 'stake/cafeswap/cafeswap.png',
      background: 'stake/cafeswap/background.png',
      text:
        'CafeSwap is a yield farming and staking platform on BSC Chain, We have chosen BSC because of its low tnx fees and faster speed. We have built this project to provide the best experience with farming while regulating the supply, we believe in partnerships hence we aim to bring all BSC DeFi ecosystems in one place to have a friendly ecosystem for all of us.',
      website: 'https://cafeswap.finance',
      social: {
        telegram: 'https://t.me/CafeSwap',
        twitter: 'https://twitter.com/cafeswapfinance',
      },
    },
  },
  {
    id: 'moo_venus_btc-ramen',
    name: 'RamenSwap',
    logo: 'single-assets/BTCB.svg',
    token: 'mooVenusBTC',
    tokenDecimals: 18,
    tokenAddress: '0x7255Ae13BA4484eD33fB48c4b833000dC12888B4',
    tokenOracle: 'tokens',
    tokenOracleId: 'BTCB',
    earnedToken: 'RAMEN',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x4F47A0d15c1E53F3d94c069C7D16977c29F9CB6B',
    earnContractAddress: '0x07613c90c6f4F4910e53A1A6fF5dAc352C6a16e4',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'Ramen',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615229062,
    partner: {
      logo: 'stake/ramenswap/ramenswap.png',
      background: 'stake/ramenswap/background.png',
      text:
        'The Most Delicious Yield Farm AMM on Binance Smart Chain. RamenSwap Finance is a community driven Yield Farming, DeFi Aggregator and DEX Aggregator on Binance Smart Chain. You can earn RAMEN by staking it on the pool and farming it by providing the liquidity to earn more delicious RAMEN. You can also maximize your return by compounding your token in the vault and connecting several DEX to find the most efficient swapping routes across all platforms that will be released in Q2 to support BSC space.\n',
      website: 'https://ramenswap.finance/',
      social: {
        telegram: 'https://t.me/ramenswap',
        twitter: 'https://twitter.com/ramenswap',
      },
    },
  },
  {
    id: 'moo_auto_cake-salt',
    name: 'SaltSwap',
    logo: 'single-assets/CAKE.png',
    token: 'mooAutoCAKEfixed',
    tokenDecimals: 18,
    tokenAddress: '0xe0B473c0dD6D7Fea5B395c3Ce7ffd4FEF0ab4373',
    tokenOracle: 'tokens',
    tokenOracleId: 'Cake',
    earnedToken: 'SALT',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    earnContractAddress: '0xDda39b0a11de6e0Ebce995D4A065960532EB332E',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SALT',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615229128,
    partner: {
      logo: 'stake/saltswap/saltswap.png',
      background: 'stake/saltswap/background.png',
      text:
        'We are a team of experienced software developers and product managers from top tier tech companies (aka the salts) that want to contribute to the BSC DeFi yield farm movement and take it to the next level. Even though we are starting off with a salty yield farm, we will quickly move on to bigger and greater things. We have big plans for the SALT token.\n',
      website: 'https://saltswap.finance/',
      social: {
        telegram: 'https://t.me/saltswap',
        twitter: 'https://twitter.com/saltswap',
      },
    },
  },
  {
    id: 'moo_venus_ada-crow',
    name: 'CrowFinance',
    logo: 'single-assets/ADA.svg',
    token: 'mooVenusADA',
    tokenDecimals: 18,
    tokenAddress: '0x53c0CE2EBdA0c2A39327bE0B58a3c28A8Dcde420',
    tokenOracle: 'tokens',
    tokenOracleId: 'ADA',
    earnedToken: 'CROW',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E',
    earnContractAddress: '0x7fcfD0ceb5e9bD1A8b910b52983fe9c8aB656E20',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CROW',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615165746,
    partner: {
      logo: 'stake/crowfinance/crowfinance.png',
      background: 'stake/crowfinance/background.png',
      text:
        'CrowFinance an Evolution Yield Farming on Binance Smart Chain with daytime and nighttime burn mechanism system fork from fry and add some function from thug + jetfuel',
      website: 'https://www.crowfinance.net/',
      social: {
        telegram: 'https://t.me/CrowFinance',
        twitter: 'https://twitter.com/crowfinance',
      },
    },
  },
  {
    id: 'moo_auto_wbnb-banana',
    name: 'ApeSwap',
    logo: 'single-assets/WBNB.svg',
    token: 'mooWBNB',
    tokenDecimals: 18,
    tokenAddress: '0x5B06aA1ebd2e15bC6001076355E5B4C39Cbc83F3',
    tokenOracle: 'tokens',
    tokenOracleId: 'WBNB',
    earnedToken: 'BANANA',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    earnContractAddress: '0xe4267bFDE62B79d27c8BeD68dB8C114ccBbEE545',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BANANA',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615489938,
    partner: {
      logo: 'stake/apeswap/logo.png',
      background: 'stake/apeswap/background.png',
      text:
        'ApeSwap is an Automated Market Maker, Yield Farming, and Staking platform on Binance Smart Chain (forked from PancakeSwap). ApeSwap was built by DeFi Apes, for DeFi Apes. We have a dedicated team of experienced monkeys, who have been in the crypto space for years. $BANANA is the native currency of our platform. Stake, pool, and earn $BANANA all on ApeSwap.',
      website: 'https://apeswap.finance/',
      social: {
        telegram: 'https://t.me/ape_swap',
        twitter: 'https://twitter.com/ape_swap',
      },
    },
  },
  {
    id: 'moo_auto_beth-soups',
    name: 'Soup Protocol',
    logo: 'uncategorized/BETH-ETH.svg',
    token: 'mooAutoBETH-ETH',
    tokenDecimals: 18,
    tokenAddress: '0xF3C1EB01E40c47fd32D0397e56569809aae0e9c7',
    tokenOracle: 'lps',
    tokenOracleId: 'auto-beth-eth',
    earnedToken: 'SOUPS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x69F27E70E820197A6e495219D9aC34C8C6dA7EeE',
    earnContractAddress: '0x2526Bc61506665494E39cacCaF8c76A1f928D838',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SOUPS',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1615489989,
    partner: {
      logo: 'stake/soup/logo.png',
      background: 'stake/soup/background.png',
      text:
        "Soup Protocol is an experimental project that enables the generation of SOUP tokens that runs on Binance Smart Chain. Inspired by the likes of Basis Cash & bDollar, SOUP is an algorithmic token that is designed to pegged its value to the Binance (BNB) token instead of a stablecoin. The protocol is designed to expand and contract the supply of SOUP tokens similar to the way central banks trade fiscal debt to stabilise purchasing power, without any rebases or collateral risk. The SOUP token can be used to buy and sell tokens on Pancake Swap and also can be used to interact with Soup Protocol's upcoming games such as Soup3D.",
      website: 'https://soups.finance/',
      social: {
        telegram: 'https://t.me/soup_community',
        twitter: 'https://twitter.com/soupingGood',
      },
    },
  },
];
