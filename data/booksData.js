const books = [
    {
        name: "The Gift of Anger: And Other Lessons from My Grandfather Mahatma Gandhi",
        imageUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487752758l/31945429._SX318_.jpg",
        author: "Arun Gandhi",
        genre: "61f3b3a8b282be4f4cf65f39",
        price: 200,
        countInStock: 10,
        description: "Discover ten vital and extraordinary life lessons from one of the most important and influential philosophers and peace activists of the twentieth century—Mahatma Gandhi—in this poignant and timely exploration of the true path from anger to peace, as recounted by Gandhi’s grandson, Arun Gandhi. In the current troubled climate, in our country and in the world, these lessons are needed more than ever before."
    },
    {
        name: "The Undiscovered Self",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388255319l/67891.jpg",
        author: "C.G. Jung",
        genre: "61f3b41db282be4f4cf65f3b",
        price: 89,
        countInStock: 10,
        description: "In this challenging and provocative work, Dr. Carl Jung—one of history’s greatest minds—argues that civilization’s future depends on our ability as individuals to resist the collective forces of society. Only by gaining an awareness and understanding of one’s unconscious mind and true, inner nature—“the undiscovered self”—can we as individuals acquire the self-knowledge that is antithetical to ideological fanaticism. But this requires that we face our fear of the duality of the human psyche—the existence of good and the capacity for evil in every individual."
    },
    
    {
        name: "The Plague",
        imageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503362434l/11989._SY475_.jpg",
        author:"Albert Camus",
        genre: "61f3b3e9b282be4f4cf65f3a",
        price: 50,
        countInStock: 10,
        description:"A gripping tale of human unrelieved horror, of survival and resilience, and of the ways in which humankind confronts death, The Plague is at once a masterfully crafted novel, eloquently understated and epic in scope, and a parable of ageless moral resonance, profoundly relevant to our times. In Oran, a coastal town in North Africa, the plague begins as a series of portents, unheeded by the people. It gradually becomes an omnipresent reality, obliterating all traces of the past and driving its victims to almost unearthly extremes of suffering, madness, and compassion."
    },

    {
        name:"Dracula",
        imageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387151694l/17245.jpg",
        author: "Bram Stoker",
        genre: "61f3b3e9b282be4f4cf65f3a",
        price: 20,
        countInStock: 10,
        description: " As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, hunt Dracula and, in the end, kill him."
    },

    {
        name: "The Demon-Haunted World: Science as a Candle in the Dark",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553691804l/17349._SX318_.jpg",
        author: "Carl Sagan",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 50,
        countInStock: 10,
        description: "How can we make intelligent decisions about our increasingly technology-driven lives if we don’t understand the difference between the myths of pseudoscience and the testable hypotheses of science? Pulitzer Prize-winning author and distinguished astronomer Carl Sagan argues that scientific thinking is critical not only to the pursuit of truth but to the very well-being of our democratic institutions."
    },

    {
        name: "Sword of Destiny",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433369883l/25454056._SY475_.jpg",
        author: "Andrzej Sapkowski",
        genre: "61fbe4548e10c7bf27b30b24",
        price: 100,
        countInStock: 10,
        description: "Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent."
    },

    {
        name:"The Gulag Archipelago",
        imageUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388293026l/70561.jpg",
        author: "Aleksandr Solzhenitsyn",
        genre: "61f3b4d0b282be4f4cf65f3d",
        price: 10,
        countInStock: 10,
        description: "Drawing on his own incarceration and exile, as well as on evidence from more than 200 fellow prisoners and Soviet archives, Aleksandr I. Solzhenitsyn reveals the entire apparatus of Soviet repression—the state within the state that ruled all-powerfully. Through truly Shakespearean portraits of its victims—men, women, and children—we encounter secret police operations, labor camps and prisons; the uprooting or extermination of whole populations, the welcome that awaited Russian soldiers who had been German prisoners of war."
    },
    {
        name:"When Character Was King: A Story of Ronald Reagan",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51g6yqv+bzL._SX326_BO1,204,203,200_.jpg",
        author: "Peggy Noonan",
        genre: "61fbe4298e10c7bf27b30b23",
        price: 80,
        countInStock: 5,
        description: "No one has ever captured Ronald Reagan like Peggy Noonan. In When Character Was King, Noonan brings her own reflections on Reagan to bear as well as new stories—from Presidents George W. Bush and his father, George H. W. Bush, his Secret Service men and White House colleagues, his wife, his daughter Patti Davis, and his close friends—to reveal the true nature of a man even his opponents now view as a maker of big history. Marked by incisive wit and elegant prose, When Character Was King will both enlighten and move readers. It may well be the last word on Ronald Reagan, not only as a leader but as a man."
    },
    {
        name:"Ordinary Men",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/512YVrem8TL._SX329_BO1,204,203,200_.jpg",
        author: "Christopher R. Browning",
        genre: "61f3b4d0b282be4f4cf65f3d",
        price: 21,
        countInStock: 5,
        description: "Ordinary Men is the true story of Reserve Police Battalion 101 of the German Order Police, which was responsible for mass shootings as well as round-ups of Jewish people for deportation to Nazi death camps in Poland in 1942. Browning argues that most of the men of  RPB 101 were not fanatical Nazis but, rather, ordinary middle-aged, working-class men who committed these atrocities out of a mixture of motives, including the group dynamics of conformity, deference to authority, role adaptation, and the altering of moral norms to justify their actions. Very quickly three groups emerged within the battalion: a core of eager killers, a plurality who carried out their duties reliably but without initiative, and a small minority who evaded participation in the acts of killing without diminishing the murderous efficiency of the battalion whatsoever."
    },
    {
        name:"A Song of Ice and Fire: A Game of Thrones",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51tl4a3VY8L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        author: "George R.R. Martin",
        genre: "61fbe4548e10c7bf27b30b24",
        price: 30,
        countInStock: 5,
        description: "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season."
    },
    {
        name:"Bad Science",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51a1bO-K2PL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        author: "Ben Goldacre",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 55,
        countInStock: 5,
        description: "Have you ever wondered how one day the media can assert that alcohol is bad for us and the next unashamedly run a story touting the benefits of daily alcohol consumption? Or how a drug that is pulled off the market for causing heart attacks ever got approved in the first place? How can average readers, who aren't medical doctors or Ph.D.s in biochemistry, tell what they should be paying attention to and what's, well, just more bullshit?"
    },
    {
        name:"Black Rednecks and White Liberals",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41CcgyTevpL._SX318_BO1,204,203,200_.jpg",
        author: "Thomas Sowell",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 50,
        countInStock: 5,
        description: `his explosive new book challenges many of the long-prevailing assumptions about blacks, about Jews, about Germans, about slavery, and about education. Plainly written, powerfully reasoned, and backed with a startling array of documented facts, Black Rednecks and White Liberals takes on not only the trendy intellectuals of our times but also such historic interpreters of American life as Alexis de Tocqueville and Frederick Law Olmsted. In a series of long essays, this book presents an in-depth look at key beliefs behind many mistaken and dangerous actions, policies, and trends. It presents eye-opening insights into the historical development of the ghetto culture that is today wrongly seen as a unique black identity--a culture cheered on toward self-destruction by white liberals who consider themselves "friends" of blacks. An essay titled "The Real History of Slavery" presents a jolting re-examination of that tragic institution and the narrow and distorted way it is too often seen today.`
    },
    {
        name:"Atlas Shrugged",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41YrW1-rJaL._SX260_BO1,204,203,200_.jpg",
        author: "Ayn Rand",
        genre: "61fe0aeb3da8721dab42d640",
        price: 25,
        countInStock: 5,
        description: `In a scrap heap within an abandoned factory, the greatest invention in history lies dormant and unused. By what fatal error of judgment has its value gone unrecognized, its brilliant inventor punished rather than rewarded for his efforts?
        In defense of those greatest of human qualities that have made civilization possible, one man sets out to show what would happen to the world if all the heroes of innovation and industry went on strike. Is he a destroyer or a liberator? And why does he fight his hardest battle not against his enemies but against the woman he loves?`
    },
    {
        name:"1984",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/31ot4P1KcZL._SX319_BO1,204,203,200_.jpg",
        author: "George Orwell",
        genre: "61fe0aeb3da8721dab42d640",
        price: 35,
        countInStock: 5,
        description: `George Orwell depicts a gray, totalitarian world dominated by Big Brother and its vast network of agents, including the Thought Police - a world in which news is manufactured according to the authorities' will and people live tepid lives by rote.
        Winston Smith, a hero with no heroic qualities, longs only for truth and decency. But living in a social system in which privacy does not exist and where those with unorthodox ideas are brainwashed or put to death, he knows there is no hope for him.`
    },
    {
        name:"The Road to Wigan Pier",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41B-qNBFC7L._SX332_BO1,204,203,200_.jpg",
        author: "George Orwell",
        genre: "61f3b3a8b282be4f4cf65f39",
        price: 35,
        countInStock: 5,
        description: `In the 1930s Orwell was sent by a socialist book club to investigate the appalling mass unemployment in the industrial north of England. He went beyond his assignment to investigate the employed as well-”to see the most typical section of the English working class”. As a result of his experiences living with industrial workers in the North of England in the 1930s, Orwell created this searing study both for and against Socialism. `
    },
    {
        name:"The Intelligent Investor",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41vQ4DGEmoL._SX325_BO1,204,203,200_.jpg",
        author: "Benjamin Graham",
        genre: "61fd31166a67b16de572a17b",
        price: 90,
        countInStock: 5,
        description: `This classic text is annotated to update Graham's timeless wisdom for today's market conditions...
        The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. Graham's philosophy of "value investing" -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.
        
        Over the years, market developments have proven the wisdom of Graham's strategies. While preserving the integrity of Graham's original text, this revised edition includes updated commentary by noted financial journalist Jason Zweig, whose perspective incorporates the realities of today's market, draws parallels between Graham's examples and today's financial headlines, and gives readers a more thorough understanding of how to apply Graham's principles.`
    },
    {
        name:"Good to Great",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41FNZJgQbLL._SX333_BO1,204,203,200_.jpg",
        author: "Jim Collins",
        genre: "61fd31166a67b16de572a17b",
        price: 20,
        countInStock: 5,
        description: `In Good to Great, former Stanford business professor Jim Collins offers a primer on turning the average into the exceptional. Through detailed case studies of 11 companies that went from tracking the market to exceeding it by at least 3x, Collins presents the key factors that separate merely good organizations from great ones—from rare leadership to disciplined thinking to the dogged pursuit of a core mission.`
    },
    {
        name:"A Random Walk Down Wall Street",
        imageUrl:"https://m.media-amazon.com/images/I/51WgeIrEb1L.jpg",
        author: "Burton G. Malkiel",
        genre: "61fd31166a67b16de572a17b",
        price: 120,
        countInStock: 5,
        description: `Whether you’re considering your first 401k contribution, contemplating retirement, or anywhere in between, A Random Walk Down Wall Street is the best investment guide money can buy. In this new edition, Burton G. Malkiel shares authoritative insights spanning the full range of investment opportunities―including valuable new material on cryptocurrencies like bitcoin, and “tax-loss harvesting”―to help you chart a calm course through the turbulent waters of today’s financial markets.`
    },
    {
        name:"Harry Potter and the Goblet of Fire",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/516SzpxSeML._SX332_BO1,204,203,200_.jpg",
        author: "J.K. Rowling",
        genre: "61fbe4548e10c7bf27b30b24",
        price: 100,
        countInStock: 5,
        description: `The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons, and dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive! 

        Having now become classics of our time, the Harry Potter audiobooks never fail to bring comfort and escapism to listeners of all ages. With its message of hope, belonging, and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new listeners. `
    },
    {
        name:"Crime and Punishment",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41c99G44teL._SX311_BO1,204,203,200_.jpg",
        author: "Fyodor Dostoyevsky",
        genre: "61f3b3e9b282be4f4cf65f3a",
        price: 80,
        countInStock: 5,
        description: `One of the supreme masterpieces of world literature, Crime and Punishment catapulted Dostoyevsky to the forefront of Russian writers and into the ranks of the world's greatest novelists. Drawing upon experiences from his own prison days, the author recounts in feverish, compelling tones the story of Raskolnikov, an impoverished student tormented by his own nihilism, and the struggle between good and evil. Believing that he is above the law, and convinced that humanitarian ends justify vile means, he brutally murders an old woman — a pawnbroker whom he regards as "stupid, ailing, greedy…good for nothing." Overwhelmed afterwards by feelings of guilt and terror, Raskolnikov confesses to the crime and goes to prison. There he realizes that happiness and redemption can only be achieved through suffering. Infused with forceful religious, social, and philosophical elements, the novel was an immediate success. `
    },
    {
        name:"Up from Slavery",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41LzZt1hMDL._SX311_BO1,204,203,200_.jpg",
        author: "Booker T. Washington",
        genre: "61fbe4298e10c7bf27b30b23",
        price: 70,
        countInStock: 5,
        description: `Born in a Virginia slave hut, Booker T. Washington (1856–1915) rose to become the most influential spokesman for African Americans of his day. In this eloquently written book, he describes events in a remarkable life that began in bondage and culminated in worldwide recognition for his many accomplishments. In simply written yet stirring passages, he tells of his impoverished childhood and youth, the unrelenting struggle for an education, early teaching assignments, his selection in 1881 to head Tuskegee Institute, and more.
        A firm believer in the value of education as the best route to advancement, Washington disapproved of civil-rights agitation and in so doing earned the opposition of many black intellectuals. Yet, he is today regarded as a major figure in the struggle for equal rights, one who founded a number of organizations to further the cause and who worked tirelessly to educate and unite African Americans.`
    },
    {
        name:"Crack In Creation",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51papIPfzDL._SX324_BO1,204,203,200_.jpg",
        author: "Jennifer A. Doudna",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 45,
        countInStock: 5,
        description: `Not since the atomic bomb has a technology so alarmed its inventors that they warned the world about its use. That is, until 2015, when biologist Jennifer Doudna called for a worldwide moratorium on the use of the gene-editing tool CRISPR—a revolutionary new technology that she helped create—to make heritable changes in human embryos. The cheapest, simplest, most effective way of manipulating DNA ever known, CRISPR may well give us the cure to HIV, genetic diseases, and some cancers. Yet even the tiniest changes to DNA could have myriad, unforeseeable consequences, to say nothing of the ethical and societal repercussions of intentionally mutating embryos to create “better” humans. Writing with fellow researcher Sam Sternberg, Doudna—who has since won the Nobel Prize for her CRISPR research—shares the thrilling story of her discovery and describes the enormous responsibility that comes with the power to rewrite the code of life.`
    },
    {
        name:"12 Rules for Life: An Antidote to Chaos",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41EATHVLJRL._SX324_BO1,204,203,200_.jpg",
        author: "Jordan B. Peterson",
        genre: "61f3b41db282be4f4cf65f3b",
        price: 65,
        countInStock: 5,
        description: `Acclaimed clinical psychologist Jordan Peterson has influenced the modern understanding of personality, and now he has become one of the world's most popular public thinkers, with his lectures on topics from the Bible to romantic relationships to mythology drawing tens of millions of viewers. In an era of unprecedented change and polarizing politics, his frank and refreshing message about the value of individual responsibility and ancient wisdom has resonated around the world.

        In this book, he provides twelve profound and practical principles for how to live a meaningful life, from setting your house in order before criticising others to comparing yourself to who you were yesterday, not someone else today. Happiness is a pointless goal, he shows us. Instead we must search for meaning, not for its own sake, but as a defence against the suffering that is intrinsic to our existence.`
    },
    {
        name:"Whisperers: Private Life in Stalin's Russia",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51km6K6RF3L._SX324_BO1,204,203,200_.jpg",
        author: "Orlando Figes",
        genre: "61f3b4d0b282be4f4cf65f3d",
        price: 55,
        countInStock: 5,
        description: `Drawing on a huge range of sources - letters, memoirs, conversations - Orlando Figes tells the story of how Russians tried to endure life under Stalin. Those who shaped the political system became, very frequently, its victims. Those who were its victims were frequently quite blameless. "The Whisperers" recreates the sort of maze in which Russians found themselves, where an unwitting wrong turn could either destroy a family or, perversely, later save it: a society in which everyone spoke in whispers - whether to protect themselves, their families, neighbours or friends - or to inform on them.`
    },
    {
        name:"Infidel",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51b6YKbnkjL._SX327_BO1,204,203,200_.jpg",
        author: "Ayaan Hirsi Ali",
        genre: "61fbe4298e10c7bf27b30b23",
        price: 40,
        countInStock: 5,
        description: `Infidel shows the coming of age of this distinguished political superstar and champion of free speech as well as the development of her beliefs, iron will, and extraordinary determination to fight injustice. Raised in a strict Muslim family, Hirsi Ali survived civil war, female mutilation, brutal beatings, adolescence as a devout believer during the rise of the Muslim Brotherhood, and life in four troubled, unstable countries ruled largely by despots. She escaped from a forced marriage and sought asylum in the Netherlands, where she earned a college degree in political science, tried to help her tragically depressed sister adjust to the West, and fought for the rights of Muslim women and the reform of Islam as a member of Parliament. Under constant threat, demonized by reactionary Islamists and politicians, disowned by her father, and expelled from family and clan, she refuses to be silenced.`
    },
    {
        name:"Enlightenment Now: The Case for Reason, Science, Humanism, and Progress",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51wWpCs4ThL._SX324_BO1,204,203,200_.jpg",
        author: "Steven Pinker",
        genre: "61f3b41db282be4f4cf65f3b",
        price: 40,
        countInStock: 5,
        description: `Is the world really falling apart? Is the ideal of progress obsolete? In this elegant assessment of the human condition in the third millennium, cognitive scientist and public intellectual Steven Pinker urges us to step back from the gory headlines and prophecies of doom, which play to our psychological biases. Instead, follow the data: In seventy-five jaw-dropping graphs, Pinker shows that life, health, prosperity, safety, peace, knowledge, and happiness are on the rise, not just in the West, but worldwide. This progress is not the result of some cosmic force. It is a gift of the Enlightenment: the conviction that reason and science can enhance human flourishing.`
    },
    {
        name:"The Revolt",
        imageUrl:"https://m.media-amazon.com/images/I/61Uoj1xTZrL.jpg",
        author: "Menachem Begin",
        genre: "61f3b4d0b282be4f4cf65f3d",
        price: 40,
        countInStock: 5,
        description: `Menachem Begin was run out of Poland by the Nazis, imprisoned by the Soviets, hunted by the British and nearly murdered by the Jews. To have survived would have been impressive enough. To have flourished- Begin led the first Jewish nationalist revolution in nearly 2,000 years and signed the first peace treaty in Israeli history- ranks as something of a miracle” -Sidney Zion, 1983

        Menachem Begin was a participant in the major events in modern Jewish history: the evolution of Zionism, resistance to the Nazi genocide, Soviet conquest of Eastern Europe, struggle against British rule in Palestine, founding of the state of Israel and the peace treaty with Egypt, which won him a Nobel Prize.
        
        Begin was a controversial figure, commander of the Irgun, an underground Army which fought against the British Mandatory regime in Palestine. He was lionized by some, demonized by others, but his love of the Jewish people and his heroism in the service of their national homeland were never questioned.`
    },
    {
        name:"Never Grow Up",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/419jRpUqmdL._SX331_BO1,204,203,200_.jpg",
        author: "Jackie Chan",
        genre: "61fbe4298e10c7bf27b30b23",
        price: 65,
        countInStock: 5,
        description: `Everyone knows Jackie Chan. Whether it’s from Rush Hour, Shanghai Noon, The Karate Kid, or Kung Fu Panda, Jackie is admired by generations of moviegoers for his acrobatic fighting style, comic timing, and mind-bending stunts. In 2016—after fifty-six years in the industry, over 200 films, and many broken bones—he received an honorary Academy Award for his lifetime achievement in film. But at 64 years-old, Jackie is just getting started.

        Now, in Never Grow Up, the global superstar reflects on his early life, including his childhood years at the China Drama Academy (in which he was enrolled at the age of six), his big breaks (and setbacks) in Hong Kong and Hollywood, his numerous brushes with death (both on and off film sets), and his life as a husband and father (which has been, admittedly and regrettably, imperfect).`
    },
    {
        name:"One Flew Over the Cuckoo's Nest",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/518OfSHBDxL._SX281_BO1,204,203,200_.jpg",
        author: "Ken Kesey",
        genre: "61f3b3e9b282be4f4cf65f3a",
        price: 30,
        countInStock: 5,
        description: `In this classic novel, Ken Kesey’s hero is Randle Patrick McMurphy, a boisterous, brawling, fun-loving rebel who swaggers into the world of a mental hospital and takes over. A lusty, life-affirming fighter, McMurphy rallies the other patients around him by challenging the dictatorship of Nurse Ratched. He promotes gambling in the ward, smuggles in wine and women, and openly defies the rules at every turn. But this defiance, which starts as a sport, soon develops into a grim struggle, an all-out war between two relentless opponents: Nurse Ratched, backed by the full power of authority, and McMurphy, who has only his own indomitable will. What happens when Nurse Ratched uses her ultimate weapon against McMurphy provides the story’s shocking climax.`
    },
    {
        name:"The Golden Ratio",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gM4pBJu5L._SX319_BO1,204,203,200_.jpg",
        author: "Mario Livio",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 40,
        countInStock: 5,
        description: `Throughout history, thinkers from mathematicians to theologians have pondered the mysterious relationship between numbers and the nature of reality. In this fascinating book, Mario Livio tells the tale of a number at the heart of that mystery: phi, or 1.6180339887...This curious mathematical relationship, widely known as "The Golden Ratio," was discovered by Euclid more than two thousand years ago because of its crucial role in the construction of the pentagram, to which magical properties had been attributed. Since then it has shown a propensity to appear in the most astonishing variety of places, from mollusk shells, sunflower florets, and rose petals to the shape of the galaxy. Psychological studies have investigated whether the Golden Ratio is the most aesthetically pleasing proportion extant, and it has been asserted that the creators of the Pyramids and the Parthenon employed it. It is believed to feature in works of art from Leonardo da Vinci's Mona Lisa to Salvador Dali's The Sacrament of the Last Supper, and poets and composers have used it in their works. It has even been found to be connected to the behavior of the stock market!`
    },
    {
        name:"The Selfish Gene",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51-bIbzo1mL._SX342_SY445_QL70_FMwebp_.jpg",
        author: " Richard Dawkins",
        genre: "61f3b43ab282be4f4cf65f3c",
        price: 40,
        countInStock: 5,
        description: `As influential today as when it was first published, The Selfish Gene has become a classic exposition of evolutionary thought. Professor Dawkins articulates a gene's eye view of evolution - a view giving centre stage to these persistent units of information, and in which organisms can be seen as vehicles for their replication. This imaginative, powerful, and stylistically brilliant work not only brought the insights of Neo-Darwinism to a wide audience, but galvanized the biology
        community, generating much debate and stimulating whole new areas of research. Forty years later, its insights remain as relevant today as on the day it was published.`
    },


];

module.exports = books;