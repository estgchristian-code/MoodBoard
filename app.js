const pins = [
  { id: "p1", title: "Luz da manhã, café sem pressa", category: "Interiores", creator: "Casa de Dentro", initials: "C", description: "Um cantinho de leitura com luz natural, madeira clara e espaço para desacelerar.", image: "photo-1616486338812-3dadae4b4ace", height: 540 },
  { id: "p2", title: "Dias azuis em Positano", category: "Viagem", creator: "Lia Santos", initials: "L", description: "Ruelas ensolaradas, fachadas em tons de terracota e o azul infinito do Mediterrâneo.", image: "photo-1533105079780-92b9be482077", height: 390 },
  { id: "p3", title: "Flores que parecem pintadas", category: "Natureza", creator: "Jardim Calmo", initials: "J", description: "Flores silvestres em uma composição leve para trazer um pouco de cor para casa.", image: "photo-1490750967868-88aa4486c946", height: 470 },
  { id: "p4", title: "Uma mesa para compartilhar", category: "Receitas", creator: "Mesa de Domingo", initials: "M", description: "Uma mesa de verão simples, com frutas frescas, cerâmica artesanal e boa companhia.", image: "photo-1490645935967-10de6ba17061", height: 360 },
  { id: "p5", title: "Texturas naturais", category: "Interiores", creator: "Ateliê Noma", initials: "A", description: "Linho, pedra e tons terrosos fazem desse espaço um refúgio tranquilo.", image: "photo-1615874694520-474822394e73", height: 580 },
  { id: "p6", title: "A cidade depois da chuva", category: "Viagem", creator: "Theo Martins", initials: "T", description: "Uma caminhada lenta pelas ruas históricas de Lisboa em uma tarde nublada.", image: "photo-1555881400-74d7acaacd8b", height: 420 },
  { id: "p7", title: "Silêncio entre as árvores", category: "Natureza", creator: "Entre Folhas", initials: "E", description: "O verde profundo de uma floresta que convida a respirar mais devagar.", image: "photo-1448375240586-882707db888b", height: 510 },
  { id: "p8", title: "O vestido para todos os verões", category: "Estilo", creator: "Clara Nunes", initials: "C", description: "Uma silhueta leve e atemporal, em tecidos naturais que acompanham os dias quentes.", image: "photo-1539109136881-3be0616acf4b", height: 590 },
  { id: "p9", title: "O ritual do pão caseiro", category: "Receitas", creator: "Forno de Casa", initials: "F", description: "Pão recém-saído do forno, manteiga e aquela mesa de café que faz a manhã.", image: "photo-1509440159596-0249088772ff", height: 380 },
  { id: "p10", title: "Fim de tarde no deserto", category: "Viagem", creator: "Rota Livre", initials: "R", description: "Tons quentes, horizontes amplos e a luz dourada de uma viagem sem roteiro.", image: "photo-1509316785289-025f5b846b35", height: 470 },
  { id: "p11", title: "Camadas de calma", category: "Interiores", creator: "Casa de Dentro", initials: "C", description: "Uma paleta suave e formas simples que deixam o quarto com cara de descanso.", image: "photo-1618221195710-dd6b41faaea6", height: 420 },
  { id: "p12", title: "Um caminho entre ciprestes", category: "Natureza", creator: "Lia Santos", initials: "L", description: "Colinas verdes, céu aberto e uma estrada para seguir sem olhar o relógio.", image: "photo-1470770841072-f978cf4d019e", height: 520 },
  { id: "p13", title: "Cerâmica de todo dia", category: "Interiores", creator: "Ateliê Noma", initials: "A", description: "Peças feitas à mão que transformam pequenos rituais em momentos especiais.", image: "photo-1578749556568-bc2c40e68b61", height: 460 },
  { id: "p14", title: "Uma pausa à beira-mar", category: "Viagem", creator: "Theo Martins", initials: "T", description: "Uma cabana escondida entre palmeiras, areia clara e água tranquila.", image: "photo-1519046904884-53103b34b206", height: 360 },
  { id: "p15", title: "Uma salada cheia de cor", category: "Receitas", creator: "Mesa de Domingo", initials: "M", description: "Tomates maduros, ervas frescas e uma ideia simples para o almoço de domingo.", image: "photo-1512621776951-a57141f2eefd", height: 420 },
  { id: "p16", title: "Formas orgânicas e luz", category: "Interiores", creator: "Casa de Dentro", initials: "C", description: "Uma combinação de linhas esculturais, madeira quente e luz da tarde.", image: "photo-1616486029423-aaa4789e8c9a", height: 545 },
  { id: "p17", title: "Verde que abraça", category: "Natureza", creator: "Entre Folhas", initials: "E", description: "Folhagens exuberantes e caminhos sombreados para se perder por algumas horas.", image: "photo-1511497584788-876760111969", height: 470 },
  { id: "p18", title: "Detalhes em azul e branco", category: "Estilo", creator: "Clara Nunes", initials: "C", description: "Uma mistura descontraída de estampas clássicas para vestir os dias de sol.", image: "photo-1529139574466-a303027c1d8b", height: 540 },
  { id: "p19", title: "Fruta fresca, mesa posta", category: "Receitas", creator: "Forno de Casa", initials: "F", description: "Cores da estação e ingredientes simples para uma mesa que dá vontade de ficar.", image: "photo-1498837167922-ddd27525d352", height: 400 },
  { id: "p20", title: "Uma janela para a montanha", category: "Viagem", creator: "Rota Livre", initials: "R", description: "Manhãs tranquilas, montanhas no horizonte e uma cabana longe da rotina.", image: "photo-1449158743715-0a90ebb6d2d8", height: 530 },
];

const additionalPinData = [
  ["Arquitetura que conversa com a paisagem", "Arquitetura", "Traço Contemporâneo", "T", "Volumes modernos, materiais naturais e uma casa que se integra ao verde ao redor.", "photo-1600210492486-724fe5c67fb0", 520],
  ["Linhas puras, luz suave", "Arquitetura", "Studio Forma", "S", "Um projeto de linhas limpas com luz natural atravessando cada ambiente.", "photo-1600607687939-ce8a6c25118c", 440],
  ["Concreto, madeira e calma", "Arquitetura", "Traço Contemporâneo", "T", "Uma composição arquitetônica acolhedora que equilibra concreto aparente e madeira.", "photo-1600566753086-00f18fb6b3ea", 590],
  ["Uma casa aberta para o jardim", "Arquitetura", "Studio Forma", "S", "Arquitetura contemporânea com espaços que se abrem para o exterior.", "photo-1600585154340-be6161a56a0c", 490],
  ["Geometria em tons quentes", "Arquitetura", "Casa de Dentro", "C", "Formas geométricas e texturas suaves criam uma fachada cheia de personalidade.", "photo-1600573472550-8090b5e0745e", 570],
  ["O charme de uma casa modernista", "Arquitetura", "Traço Contemporâneo", "T", "Um olhar sobre a arquitetura modernista e a beleza da simplicidade estrutural.", "photo-1600210492493-0946911123ea", 430],
  ["Espaços pensados para viver", "Arquitetura", "Studio Forma", "S", "Um projeto autoral que combina proporções equilibradas e materiais acolhedores.", "photo-1600566753190-17f0baa2a6c3", 540],
  ["Um refúgio de linhas tranquilas", "Interiores", "Ateliê Noma", "A", "Interiores claros, madeira natural e detalhes para deixar a rotina mais leve.", "photo-1600607687920-4e2a09cf159d", 510],
  ["Uma sala com alma", "Interiores", "Casa de Dentro", "C", "Mobiliário confortável e peças escolhidas com cuidado transformam esta sala.", "photo-1598928506311-c55ded91a20c", 440],
  ["A cor inesperada", "Interiores", "Ateliê Noma", "A", "Uma composição de formas e cores para trazer personalidade a um espaço cotidiano.", "photo-1494438639946-1ebd1d20bf85", 500],
  ["Um canto para desacelerar", "Interiores", "Casa de Dentro", "C", "Um ambiente sereno, com luz suave e uma paleta feita para descansar.", "photo-1493663284031-b7e3aefcae8e", 560],
  ["Café da manhã com vista", "Viagem", "Rota Livre", "R", "Montanhas ao longe e a primeira luz do dia em uma viagem sem pressa.", "photo-1500530855697-b586d89ba3ee", 470],
  ["Entre lagos e montanhas", "Viagem", "Lia Santos", "L", "Água cristalina, trilhas tranquilas e paisagens que ficam na memória.", "photo-1476514525535-07fb3b4ae5f1", 560],
  ["O silêncio dos Alpes", "Viagem", "Theo Martins", "T", "Um horizonte de montanhas para inspirar a próxima viagem de natureza.", "photo-1464822759023-fed622ff2c3b", 450],
  ["A estrada segue pelo vale", "Viagem", "Rota Livre", "R", "Uma estrada sinuosa atravessa um vale verde em uma manhã de céu aberto.", "photo-1501785888041-af3ef285b470", 520],
  ["Um lugar longe da pressa", "Viagem", "Lia Santos", "L", "Paisagens amplas e um pequeno refúgio para esquecer o ritmo da cidade.", "photo-1469474968028-56623f02e42e", 410],
  ["Casas coloridas à beira-mar", "Viagem", "Theo Martins", "T", "Ruelas em tons pastel descem até o Mediterrâneo em uma tarde ensolarada.", "photo-1516483638261-f4dbaf036963", 580],
  ["Uma pausa nas ruas de Kyoto", "Viagem", "Lia Santos", "L", "Arquitetura tradicional, ruas tranquilas e detalhes delicados de uma viagem ao Japão.", "photo-1480796927426-f609979314bd", 490],
  ["Azul de verão", "Viagem", "Rota Livre", "R", "O mar em tons de azul e areia clara para sonhar com os próximos dias de férias.", "photo-1507525428034-b723cf961d3e", 430],
  ["A manhã encontra a montanha", "Natureza", "Entre Folhas", "E", "A luz dourada da manhã atravessa uma paisagem aberta e coberta de verde.", "photo-1470252649378-9c29740c9fa8", 520],
  ["Uma trilha sob as árvores", "Natureza", "Jardim Calmo", "J", "Uma floresta fresca e silenciosa, com luz filtrada entre as copas.", "photo-1441974231531-c6227db76b6e", 470],
  ["Horizonte depois da chuva", "Natureza", "Entre Folhas", "E", "Nuvens baixas e colinas verdes desenham uma paisagem ampla e tranquila.", "photo-1500534623283-312aade485b7", 560],
  ["O campo em tons de verde", "Natureza", "Jardim Calmo", "J", "Um vale coberto de vegetação visto de um ponto alto ao amanhecer.", "photo-1470071459604-3b5ec3a7fe05", 430],
  ["Ondas e céu aberto", "Natureza", "Entre Folhas", "E", "O movimento do oceano em uma imagem que traz a calma dos dias à beira-mar.", "photo-1518837695005-2083093ee35b", 500],
  ["Flores silvestres ao sol", "Natureza", "Jardim Calmo", "J", "Uma mistura espontânea de flores coloridas para inspirar um jardim mais natural.", "photo-1465146344425-f00d5f5c8f07", 560],
  ["Verde dentro de casa", "Natureza", "Entre Folhas", "E", "Folhas esculturais e luz natural em uma composição botânica para decorar.", "photo-1501004318641-b39e6451bec6", 440],
  ["Fim de tarde nas montanhas", "Natureza", "Jardim Calmo", "J", "A luz muda sobre as montanhas e colore o horizonte no fim do dia.", "photo-1500534314209-a25ddb2bd429", 520],
  ["Camadas leves para o verão", "Estilo", "Clara Nunes", "C", "Uma combinação descontraída de tecidos leves, tons neutros e acessórios naturais.", "photo-1483985988355-763728e1935b", 560],
  ["Neutros que nunca cansam", "Estilo", "Clara Nunes", "C", "Peças atemporais em uma paleta discreta para composições fáceis de repetir.", "photo-1490481651871-ab68de25d43d", 460],
  ["O azul como ponto de partida", "Estilo", "Lia Santos", "L", "Uma proposta fresca com tons de azul para renovar as combinações do dia a dia.", "photo-1524504388940-b1c1722653e1", 590],
  ["Elegância sem esforço", "Estilo", "Clara Nunes", "C", "Silhuetas simples e texturas interessantes em uma produção cheia de leveza.", "photo-1525507119028-ed4c629a60a3", 480],
  ["Inspiração para vestir diferente", "Estilo", "Lia Santos", "L", "Uma composição expressiva de cores e formas para experimentar novas ideias.", "photo-1487222477894-8943e31ef7b2", 540],
  ["Acessórios com personalidade", "Estilo", "Clara Nunes", "C", "Detalhes cuidadosos mostram como os acessórios transformam uma produção.", "photo-1509631179647-0177331693ae", 440],
  ["Ideias em movimento", "Estilo", "Lia Santos", "L", "Moda urbana e combinações contemporâneas para inspirar o próximo look.", "photo-1502982720700-bfff97f2ecac", 580],
  ["Luz e detalhes digitais", "Tecnologia", "Pixel & Forma", "P", "Uma composição de placas eletrônicas, circuitos e formas que lembram um mapa digital.", "photo-1518770660439-4636190af475", 460],
  ["Um espaço para criar", "Tecnologia", "Estúdio Aberto", "E", "Um ambiente de trabalho colaborativo com ideias e tecnologia em movimento.", "photo-1498050108023-c5249f4df085", 540],
  ["Conexões que aproximam", "Tecnologia", "Pixel & Forma", "P", "Uma equipe conectada colabora em novas ideias em um espaço cheio de luz.", "photo-1516321318423-f06f85e504b3", 430],
  ["Nostalgia em pixels", "Tecnologia", "Estúdio Aberto", "E", "Uma homenagem colorida aos computadores e jogos que marcaram outras épocas.", "photo-1550745165-9bc0b252726f", 570],
  ["O futuro em luz e cor", "Tecnologia", "Pixel & Forma", "P", "Uma imagem abstrata de luzes que evoca interfaces, dados e novas possibilidades.", "photo-1550751827-4bd374c3f58b", 490],
  ["Ideias ganham forma", "Tecnologia", "Estúdio Aberto", "E", "Uma cena contemporânea para quem gosta de imaginar o que vem pela frente.", "photo-1535223289827-42f1e9919769", 550],
  ["Uma equipe, muitas ideias", "Tecnologia", "Pixel & Forma", "P", "Um grupo criativo compartilha referências e transforma possibilidades em projetos.", "photo-1519389950473-47ba0277781c", 420],
  ["Cores frescas no prato", "Receitas", "Mesa de Domingo", "M", "Ingredientes frescos e coloridos em uma receita leve para qualquer dia da semana.", "photo-1540189549336-e6e99c3679fe", 500],
  ["Uma mesa cheia de sabor", "Receitas", "Forno de Casa", "F", "Uma combinação apetitosa de ingredientes para servir e compartilhar.", "photo-1547592180-85f173990554", 460],
  ["Noite de pizza em casa", "Receitas", "Mesa de Domingo", "M", "Massa dourada e ingredientes frescos para uma noite descontraída com amigos.", "photo-1565299624946-b28f40a0ae38", 540],
  ["A beleza do simples", "Receitas", "Forno de Casa", "F", "Um prato caseiro feito com ingredientes da estação e muito cuidado.", "photo-1476224203421-9ac39bcb3327", 420],
  ["Verde, crocante e fresco", "Receitas", "Mesa de Domingo", "M", "Uma salada vibrante com folhas e vegetais frescos para um almoço leve.", "photo-1546069901-ba9599a7e63c", 510],
  ["Um banquete para compartilhar", "Receitas", "Forno de Casa", "F", "Pratos variados sobre a mesa convidam todo mundo a se servir sem pressa.", "photo-1504674900247-0877df9cc836", 570],
  ["Pinceladas que contam histórias", "Arte", "Ateliê Noma", "A", "Cores e formas expressivas em uma obra que merece ser observada de perto.", "photo-1541961017774-22349e4a1262", 530],
  ["Um mundo feito de cores", "Arte", "Galeria Aberta", "G", "Uma composição abstrata para encontrar novas formas de olhar o cotidiano.", "photo-1577083552431-6e5fd01aa342", 460],
  ["O encanto da pintura clássica", "Arte", "Ateliê Noma", "A", "Uma pintura rica em detalhes e nuances para inspirar um olhar mais atento.", "photo-1579783902614-a3fb3927b6a5", 580],
  ["Formas, matéria e imaginação", "Arte", "Galeria Aberta", "G", "Uma obra contemporânea que mistura textura e cor em uma composição singular.", "photo-1578301978693-85fa9c0320b9", 430],
  ["Uma galeria dentro de casa", "Arte", "Ateliê Noma", "A", "Inspiração para trazer obras de arte para perto e compor espaços com personalidade.", "photo-1579783900882-c0d3dad7b119", 520],
  ["Retrato em luz natural", "Fotografia", "Olhar Livre", "O", "Um retrato delicado que aproveita a luz natural para contar uma história.", "photo-1452587925148-ce544e77e70d", 560],
  ["A câmera como companhia", "Fotografia", "Lia Santos", "L", "Equipamento fotográfico e referências para sair por aí observando novos detalhes.", "photo-1516035069371-29a1b244cc32", 430],
  ["A noite também tem cor", "Fotografia", "Theo Martins", "T", "O céu escuro revela detalhes, estrelas e uma paisagem que muda depois do pôr do sol.", "photo-1519608487953-e999c86e7455", 480],
  ["Arquitetura sob outro olhar", "Fotografia", "Olhar Livre", "O", "Geometrias e fachadas fotografadas para revelar linhas que passam despercebidas.", "photo-1493809842364-78817add7ffb", 540],
  ["Luz boa para novas ideias", "Fotografia", "Lia Santos", "L", "Um espaço de trabalho com luz natural para inspirar novos projetos visuais.", "photo-1497366754035-f200968a6e72", 450],
  ["Detalhes que fazem a diferença", "Fotografia", "Olhar Livre", "O", "Uma imagem de arquitetura que destaca materiais, luz e composição.", "photo-1497366811353-6870744d04b2", 570],
  ["Cores e formas no cotidiano", "Fotografia", "Theo Martins", "T", "Um olhar atento transforma objetos comuns em uma composição visual interessante.", "photo-1497366216548-37526070297c", 420],
  ["Espaço para imaginar", "Interiores", "Casa de Dentro", "C", "Um estúdio tranquilo combina funcionalidade, madeira e luz do dia.", "photo-1497366858526-0766cadbe8fa", 500],
  ["Um projeto que inspira", "Arquitetura", "Studio Forma", "S", "Um estudo contemporâneo de formas e volumes para inspirar projetos autorais.", "photo-1524758631624-e2822e304c36", 550],
  ["A delicadeza dos detalhes", "Interiores", "Ateliê Noma", "A", "Materiais e acabamentos naturais criam um ambiente atemporal e acolhedor.", "photo-1511818966892-d7d671e672a2", 470],
];

pins.push(...additionalPinData.map(([title, category, creator, initials, description, image, height], index) => ({
  id: `p${index + 21}`,
  title,
  category,
  creator,
  initials,
  description,
  image,
  height,
})));

const commonsCaptions = {
  Arquitetura: ["Linhas modernas e luz natural", "Geometria em perspectiva", "Detalhes de uma fachada", "Volumes em harmonia"],
  Interiores: ["Um espaço para desacelerar", "Detalhes que acolhem", "Luz natural em casa", "Texturas para viver bem"],
  Viagem: ["Paisagens para ir sem pressa", "Um destino para descobrir", "Horizontes de viagem", "Uma cidade em outro ritmo"],
  Natureza: ["Um respiro entre as árvores", "Cores encontradas no caminho", "A calma do mundo natural", "Luz sobre a paisagem"],
  Estilo: ["Uma composição cheia de atitude", "Texturas para vestir", "Inspiração para o dia a dia", "Estilo em movimento"],
  Tecnologia: ["Ideias em movimento", "Formas da tecnologia", "Detalhes de um novo projeto", "Inovação em perspectiva"],
  Receitas: ["Uma mesa para compartilhar", "Sabores que inspiram", "Um prato feito com cuidado", "Cores frescas à mesa"],
  Arte: ["Matéria e imaginação", "Uma obra para contemplar", "Cor, forma e expressão", "Arte que muda o espaço"],
  Fotografia: ["Um instante bem enquadrado", "Uma cena para observar", "Luz e perspectiva", "Histórias em uma imagem"],
};

const commonsPinData = `
29429815|Arquitetura|6/65/20120522-DSC00857_%287332563358%29.jpg|2608|1776
114686949|Arquitetura|e/e9/05_VCAL_by_Husos.jpg|3307|2480
115996342|Arquitetura|f/f4/A_stone_and_wood_house_-_Main_door.jpg|2953|2223
118937019|Arquitetura|6/62/Agua_Fria_Road_entrance_of_the_El_Camino_Real_de_Tierra_Adentro_National_Historic_Trail_retracement_in_Santa_Fe_County%2C_New_Mexico.jpg|2048|1536
118995352|Arquitetura|c/c7/A_kiosk_and_rest_area_mark_the_entrance_at_Frenchy%27s_Field_Park_in_Santa_Fe%2C_NM_%28a7e7cef2-8bb5-4cca-99ec-05d03c56063b%29.JPG|2048|1536
119361417|Arquitetura|7/70/Acequia_Madre_House.jpg|4032|3024
120575042|Arquitetura|6/61/A%26B_BOIS_11.01_PLANCHER_MASSIF_FOND_WAGON_SETE_PMFWS_COUPE.jpg|4886|3402
121340990|Arquitetura|a/a4/Almandoz_2022_039.jpg|6000|4000
121530779|Arquitetura|8/8b/48x54_HOUSE_ELEVATION.jpg|2186|1323
122847625|Arquitetura|b/b5/Abandoned_house_in_suburbs.jpg|3193|3441
124752852|Arquitetura|b/bc/616_N_Weber_St.png|992|680
124752854|Arquitetura|8/81/400_block_Yampa.png|986|672
125525901|Arquitetura|f/f5/Alfombra_Vinilo_Marron.png|956|1276
127082373|Arquitetura|d/db/Abdallah_Sherif_guest_house_77.jpg|6016|4000
127665004|Arquitetura|5/52/Aksumla_SDK_1980.jpg|2048|1088
129674527|Arquitetura|4/42/1_The_Loan%2C_Lauder.jpg|8000|6000
131176395|Arquitetura|9/93/A_local_store.jpg|1600|1067
131953867|Arquitetura|7/74/A_structure_in_wudil.jpg|4000|3000
137119437|Arquitetura|0/07/Aetna_Hill%2C_2019.jpg|4608|3456
137167891|Arquitetura|9/9b/20230908_xl_0955-Landhaus_Wanger.jpg|3072|2076
11350838|Interiores|c/c5/BP1_IS1_Carpeting.jpg|1742|2179
12803241|Interiores|8/8a/Bar_design_by_danny_jota.JPG|3872|2592
25428678|Interiores|1/11/AMBIANCE_ALBA_METAL_ET_BOIS.jpg|1772|1250
31519740|Interiores|7/74/Arnaldo_Dell%27Ira_%281903-1943%29%2C_schizzo_per_un_anticamera%2C_circa_1930.jpeg|1976|1784
32046677|Interiores|2/27/Bathroom_in_Leipzig.JPG|5472|3648
34728220|Interiores|1/1d/Gispen_furniture_catalogue_-_10209029853.jpg|1200|725
34728240|Interiores|a/a2/Gispen_furniture_catalogue.jpg|1200|699
37331691|Interiores|8/81/Arne_jacobsen%2C_aarhus_town_hall_1937-1942_%282779844959%29.jpg|1900|2592
37331726|Interiores|5/59/Arne_jacobsen%2C_aarhus_town_hall_1937-1942_%282803825388%29.jpg|1944|2592
37331746|Interiores|8/8e/Alvar_aalto%2C_nordjyllands_kunstmuseum%2C_1958-1972_%283534607484%29.jpg|1860|2604
41854904|Interiores|c/cd/Betimmering_eetkamer_-_Dining_Room_Wainscot_%285260603758%29.jpg|1280|928
42892479|Interiores|c/c7/10_-_Art_Curial_-_L%27art_de_vivre_avec_l%27art_-_Paris_-_La_chambre_onirique_-_Photographie_Jacques_P%C3%A9pion.jpg|1021|680
48383061|Interiores|c/cd/1.-%E2%80%98Blind_Spaces%E2%80%99%2C_Beijing_Design_Week_2015.jpg|2912|5184
48482358|Interiores|0/02/Blind_spaces.jpg|2950|1733
52825778|Interiores|e/e9/29166-Gr%C3%B6den-1956-Jugendherberge-Br%C3%BCck_%26_Sohn_Kunstverlag.jpg|1502|1000
59859763|Interiores|8/81/Aspect_Black_20W_Growlight_over_Bonsai.jpg|4313|3632
64223042|Interiores|5/55/Allianz_Seguros_S.A._%2822354621779%29.jpg|4500|3004
87757504|Viagem|2/2d/Le_Vif_%2894297211%29.jpeg|2048|1316
98630273|Viagem|2/27/Lluvia_en_el_bosque.jpg|2268|4032
98962318|Viagem|9/9f/Green_paddy_field_%2C%E0%A6%B2%E0%A6%96%E0%A6%BF%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A7%B0.jpg|960|720
99492593|Viagem|0/01/Kurtunbaraji.jpg|1440|809
99505220|Viagem|4/48/Indah_nya_puncak_gunung_dari_atas_awan.jpg|4000|3000
99876435|Viagem|4/4b/Kingplaylist.jpg|2448|3264
102117933|Viagem|1/1f/Il_biolago.jpg|6000|4000
102284519|Viagem|7/77/KOCHUPARAMBIL.jpg|1250|833
104492474|Viagem|e/e6/Hill_overseeing_Roo.jpg|3456|4608
104492477|Viagem|4/4d/Hills_at_Roo.jpg|3456|4608
104492483|Viagem|d/d6/Hill_overseeing_Roo_2.jpg|3456|4608
104646143|Viagem|2/2e/Landscape_photostyle.jpg|6720|4480
104903889|Viagem|4/49/Last_Ray_of_Light_%2850608651658%29.jpg|6000|4000
105376071|Viagem|b/b3/Hands_%284650623766%29.jpg|2048|1149
106151621|Viagem|1/1e/Low_tide_shallows_%287987533979%29.jpg|2592|1944
2249673|Natureza|6/6e/08020047.JPG|1600|1200
28684710|Natureza|9/93/201309181715_IMAG1733.jpg|2592|1944
39948682|Natureza|d/d0/20-2015-04-18_%D9%85%D8%AD%D9%85%D9%8A%D8%A9_%D8%AC%D8%A8%D9%84_%D8%A7%D9%84%D9%86%D8%A8%D9%8A_%D9%85%D8%AA%D9%89.jpg|2448|2352
39949998|Natureza|9/93/1-2015-04-18_%D8%AC%D8%A8%D9%84_%D8%A7%D9%84%D9%86%D8%A8%D9%8A_%D9%85%D8%AA%D9%89.jpg|3264|1836
53486175|Natureza|9/99/-_panoramio_%282538%29.jpg|3072|2304
53728542|Natureza|c/cf/-_panoramio_%284047%29.jpg|2048|1536
57504201|Natureza|5/58/2015_October_Holidays_%2822071995976%29.jpg|3648|2736
68616881|Natureza|1/10/20-2015-04-18_%D9%85%D8%AD%D9%85%D9%8A%D8%A9_%D8%AC%D8%A8%D9%84_%D8%A7%D9%84%D9%86%D8%A8%D9%8A_%D9%85%D8%AA%D9%89_%28cropped%29.jpg|2448|2357
71296038|Natureza|f/f0/20180504_0405_Jpeg_%28256485305%29.jpeg|2048|1363
71349212|Natureza|1/19/26_October_2015_%28232334107%29.jpeg|2048|1362
71471469|Natureza|b/b4/29005950975_Jpg_%28191922577%29.jpeg|2048|1371
74192159|Natureza|a/a8/500px_photo_%28127640475%29.jpeg|2048|1365
74192162|Natureza|8/88/500px_photo_%28127640479%29.jpeg|2048|1365
74192169|Natureza|b/b4/500px_photo_%28127640477%29.jpeg|2048|1365
74977495|Natureza|6/6b/2017-06-05_IMG_1310_DDumais_%2813%29.jpg|4000|3000
75597424|Natureza|1/11/-_Flickr_-_a_natural_thing.jpg|5184|3456
340947|Tecnologia|8/82/At_Boeing_Surplus_02.jpg|1024|768
2076639|Tecnologia|2/28/2323hardware.jpg|1632|1224
5946200|Tecnologia|2/24/Argus_500_1.JPG|1911|1512
6452746|Tecnologia|2/2b/40_x_80_Foot_Data_Acquisition_System_-_GPN-2000-001634.jpg|2872|1536
11156187|Tecnologia|9/9c/Blucoud2.JPG|4000|3000
19945189|Tecnologia|9/90/Blade_type_01_eng.jpg|902|894
30759682|Tecnologia|b/be/Band_gap_vs_E.jpg|1000|750
39061107|Tecnologia|9/93/10elqpi.jpg|1600|900
40182439|Tecnologia|6/66/Asus_Rampage_Extreme.jpg|1536|2048
42043365|Tecnologia|0/0c/Accessing_the_Image_Recovery_Options_in_Windows.PNG|1046|913
46506924|Tecnologia|d/d0/2014-08-31T15-57-14.141Z-IMG_1195.JPG.2560x2560_q85.jpg|2560|1912
47091113|Tecnologia|6/66/Block_Opened_to_show_hardware_inside_%28SAM_Labs%29.jpg|4428|2952
50638131|Tecnologia|9/9f/Aula_m%C3%B3vil.jpg|2560|1920
56707228|Tecnologia|b/b4/%22Disk_hacker%22_or_%22disk_doubler%22.jpg|2272|1704
62254359|Tecnologia|b/b4/An_actual_Bitcoin_transaction_from_the_Kraken_cryptocurrency_exchange_to_a_hardware_LedgerWallet.jpg|3065|2349
71356905|Tecnologia|a/aa/Aux_%2848315890%29.jpeg|2048|2047
74127751|Tecnologia|d/d3/2N404_back_side.jpg|1600|1200
74127752|Tecnologia|9/9e/2N404.jpg|1380|1200
80510616|Tecnologia|5/55/7AK7_vacuum_tubes.jpg|2448|3264
82095566|Tecnologia|c/cd/Board16bit.png|1024|768
88227867|Tecnologia|6/62/Bankarbeitsplatz_robotron_mit_Geldkartenleser.jpg|1324|831
93953686|Receitas|f/f5/A_cut_shot_of_a_dry_fruits_in_a_colorful_environment.jpg|5184|3456
101674274|Receitas|a/a7/Aaloo_Mutter.jpg|2676|2144
101822733|Receitas|d/d3/Aapam_with_Kadala_curry_with_hot_Kattan_Chai_-_Calicut%2C_Kerala.jpg|2160|3824
101872685|Receitas|2/2f/1441_Pizzeria.jpg|6000|6044
101935817|Receitas|a/a6/Aalu-Kachalu_-_Home_-_Uttar_Pradesh.jpg|4000|3000
101935820|Receitas|7/7d/Aalu-Kachalu_with_Buttermilk_-_Home_-_Uttar_Pradesh.jpg|3999|2729
101949142|Receitas|3/35/A_vegetarian_plate_of_food.jpg|3456|3453
101987842|Receitas|6/64/2019_Shacks_Goa.jpg|4608|3456
102143418|Receitas|0/00/A_man_cooking_falafel_in_Bethlehem%2C_Palestine.jpg|7952|5304
102282468|Receitas|9/98/AALU_PAPAD.jpg|5632|4224
102282994|Receitas|3/3d/Aalu_papad.jpg|4224|5632
102285225|Receitas|0/09/Aaloo_ki_tikki_or_Aaloo_Pattice.jpg|1023|1280
102621564|Receitas|9/9f/Aalo_Pakoda.jpg|3094|3259
102778105|Receitas|5/50/A_Traditional_Assamese_Thali-Roadside_Dhaba-Lakhimpur-Assam.jpg|3264|2448
102829101|Receitas|a/a8/A_yummy_dish.jpg|1440|1428
103265044|Receitas|5/51/00_break_fast.jpg|1039|767
103357061|Receitas|c/cf/A_plate_of_Ghuguni.jpg|3597|2324
103360081|Receitas|7/7e/A_combo_of_fast_foods.jpg|3120|4160
35205829|Arte|4/49/%27Yazhi.jpg|1024|768
39373707|Arte|5/5e/%22Regeneration%22_02.jpg|2448|3264
39373708|Arte|d/d9/%22Regeneration%22_01.jpg|2448|3264
39373709|Arte|4/4f/%22Regeneration%22_03.jpg|2448|3264
39373711|Arte|a/a0/%22Regeneration%22_04.jpg|2448|3264
39827778|Arte|c/c7/%22Knowledge_is_Power%22.JPG|1936|2592
44224496|Arte|9/9b/090927_RetzerWeinlesefest_012_%283959815246%29.jpg|2048|1536
45957496|Arte|8/83/00392%E6%B0%B4%E4%BA%95%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D.JPG|5152|3864
50085714|Arte|d/d1/%28Vogel-%29H%C3%A4user.jpg|2560|1704
53480687|Arte|c/c4/1_Orest_Mysko.jpg|3256|5646
56298138|Arte|2/25/...from_dark_waters.jpg|999|1764
56298140|Arte|9/94/...dances_yet.jpg|1492|2372
56951712|Arte|2/28/%22The_Song%22.jpg|2392|3505
57946422|Arte|9/94/-365photo_2017_edition_%2832210892693%29.jpg|2660|4507
65843607|Arte|6/62/%22Sin_t%C3%ADtulo%22._Luca_Benites.jpg|4724|2835
65843720|Arte|6/67/%22Sin_t%C3%ADtulo%22._Luca_Benites._Escultura.jpg|3136|2835
69116049|Arte|e/ee/%22Amelia%22_%28Homage_to_Amelia_Earhart%29_by_Mary_Curtis_Ratcliff.jpg|2976|2050
69116050|Arte|8/86/%22Josephine%22_%28Homage_to_Josephine_Baker%29_by_Mary_Curtis_Ratcliff.jpg|1802|3158
69116055|Arte|d/d3/%22Jellies%22_by_Mary_Curtis_Ratcliff.jpg|1816|1350
70288863|Arte|2/29/%22Perpetual_Mobile_I%22_within_%22Fish_Flies_On_Sky%22.jpg|2236|1472
74318630|Arte|d/dc/%22Havet%22_Peter_Hellbom.jpg|2153|1461
85540496|Arte|b/b0/028c_-_Zo%C3%A8%2C_Vaticano_27.06.2012.jpg|3543|2362
143896548|Fotografia|2/2a/09_-_Stra%C3%9Fenszene_Sarajevo_%281932%29.jpg|2737|1750
148230624|Fotografia|1/11/109992_a_parking_lot_for_manual_freight_carts_in_the_old_PikiWiki_Israel.jpg|1691|1014
149842317|Fotografia|f/fc/112613_klezmer_in_mahane_yehuda_market_PikiWiki_Israel.jpg|4032|3024
149842324|Fotografia|a/aa/112612_klezmer_in_mahane_yehuda_market_PikiWiki_Israel.jpg|4032|3024
149862245|Fotografia|f/f6/112611_klezmer_in_mahane_yehuda_market_PikiWiki_Israel.jpg|4032|3024
150610113|Fotografia|a/a3/113525_pekiin_in_in_the_street_PikiWiki_Israel.jpg|2000|1306
150610705|Fotografia|8/8d/113522_pekiin_in_in_the_street_PikiWiki_Israel.jpg|1333|2000
150812951|Fotografia|e/e5/113808_messiahs_donkey_jerusalem_PikiWiki_Israel.jpg|3176|2770
150812956|Fotografia|0/0a/113806_messiahs_donkey_PikiWiki_Israel.jpg|1883|2456
150812959|Fotografia|2/25/113807_messiahs_donkey_PikiWiki_Israel.jpg|2625|2174
151013569|Fotografia|3/37/114117_safed_-_on_the_street_PikiWiki_Israel.jpg|2000|1339
151013577|Fotografia|f/fb/114111_safed_-_harry_tomb_PikiWiki_Israel.jpg|2000|1325
151220366|Fotografia|e/e5/114579_ramat_gan_on_the_street_PikiWiki_Israel.jpg|2000|1360
151224274|Fotografia|d/dd/114571_pakiin_-_mourning_procession_PikiWiki_Israel.jpg|1869|1170
151224277|Fotografia|5/59/114572_pakiin_-_mourning_procession_PikiWiki_Israel.jpg|5081|3271
151224280|Fotografia|2/20/114573_pakiin_-_mourning_procession_PikiWiki_Israel.jpg|5184|3360
152187740|Fotografia|5/51/116847_rishon_lezion_PikiWiki_Israel.jpg|1134|1134
152271750|Fotografia|6/63/117088_shlomi_PikiWiki_Israel.jpg|1172|764
152502334|Fotografia|1/1e/117459_karkur_PikiWiki_Israel.jpg|1056|808
152790526|Fotografia|8/80/117804_jerusalem-the_old_city-elderly_PikiWiki_Israel.jpg|4032|3024
23605454|Estilo|b/b1/Feliz_Ano_Novo_by_Aaron_Tyree.jpg|3514|2340
31923434|Estilo|0/00/Behind_the_Scenes.JPG|3264|2448
34973769|Estilo|9/97/Fashion_Shooters_-_Photoquip_India_Stall_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7516.JPG|6016|4000
34973802|Estilo|7/7c/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7554.JPG|6016|4000
34973833|Estilo|0/0c/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7565.JPG|6016|4000
34973877|Estilo|4/43/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7566.JPG|6016|4000
34973955|Estilo|5/53/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7570.JPG|6016|4000
34974242|Estilo|5/5e/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7580.JPG|6016|4000
34974312|Estilo|0/09/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7582.JPG|6016|4000
34974345|Estilo|c/c8/Fashion_Shooting_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7584.JPG|5234|3480
34974397|Estilo|1/16/Fashion_Shooting_-_Photoquip_India_Stall_-_Photo_Video_Expo_-_Image_Craft_-_Netaji_Indoor_Stadium_-_Kolkata_2014-08-25_7513.JPG|6016|4000
34974445|Estilo|9/9c/Ishita_-_Kolkata_2014-08-25_7517.JPG|3636|4989
34974462|Estilo|b/b9/Ishita_-_Kolkata_2014-08-25_7522.JPG|2845|4048
34974482|Estilo|9/94/Ishita_-_Kolkata_2014-08-25_7523.JPG|3786|3786
34974514|Estilo|2/2e/Ishita_-_Kolkata_2014-08-25_7525.JPG|4000|6016
34974571|Estilo|4/46/Ishita_-_Kolkata_2014-08-25_7526.JPG|4000|6016
34974649|Estilo|7/77/Ishita_-_Kolkata_2014-08-25_7527.JPG|4000|6016
37045884|Estilo|1/1f/Berlin_Breitscheidplatz_078899b.jpg|1181|800
37074301|Estilo|7/7d/Berlin_Breitscheidplatz_078899a.jpg|1181|800
`.trim().split("\n");
const commonsCategoryCounts = Object.create(null);
const commonsPins = commonsPinData.map((row) => {
  const [id, category, imagePath, width, height] = row.split("|");
  const categoryIndex = commonsCategoryCounts[category] || 0;
  commonsCategoryCounts[category] = categoryIndex + 1;
  const captions = commonsCaptions[category];
  return {
    id: `commons-${id}`,
    title: `${captions[categoryIndex % captions.length]} ${String(categoryIndex + 1).padStart(2, "0")}`,
    category,
    creator: "Wikimedia Commons",
    initials: "W",
    description: `Uma referência visual de ${category.toLocaleLowerCase("pt-BR")} selecionada para inspirar novas ideias.`,
    image: `commons:${imagePath}`,
    source: `https://commons.wikimedia.org/?curid=${id}`,
    height: Math.round(300 * Number(height) / Number(width)),
  };
});

pins.push(...commonsPins);

function imageUrl(image, width = 720) {
  if (image.startsWith("commons:")) {
    const imagePath = image.slice("commons:".length);
    const pathParts = imagePath.split("/");
    const filename = pathParts[pathParts.length - 1];
    const filePath = pathParts.join("/");
    const originalUrl = `https://upload.wikimedia.org/wikipedia/commons/${filePath}`;

    if (pathParts.length !== 3 || width > 1300) return originalUrl;

    const thumbnailWidth = width <= 600 ? 500 : 1280;
    return `https://thumb.wikimedia.org/wikipedia/commons/thumb/${filePath}/${thumbnailWidth}px-${filename}`;
  }

  const thumbnailWidth = width <= 600 ? 480 : width;
  const quality = width <= 600 ? 78 : 82;
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${thumbnailWidth}&q=${quality}`;
}
const grid = document.querySelector("#pin-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
const pinModal = document.querySelector("#pin-modal");
const createModal = document.querySelector("#create-modal");
const modalImage = document.querySelector("#modal-image");
const savedKey = "moodboard-saved-pins";
const customKey = "moodboard-custom-pins";
let savedPins = readStoredIds(savedKey);
let customPins = readStoredPins();
let activeView = "home";
let activeCategory = "Tudo";
let searchQuery = "";
let toastTimer;
let lastFocusedElement;

function readStoredIds(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(data) ? data.filter((id) => typeof id === "string") : [];
  } catch (error) {
    console.error(`Não foi possível ler ${key} do armazenamento local.`, error);
    return [];
  }
}

function readStoredPins() {
  try {
    const data = JSON.parse(localStorage.getItem(customKey) || "[]");
    return Array.isArray(data) ? data.filter((pin) =>
      pin && typeof pin.id === "string" && typeof pin.title === "string" &&
      typeof pin.image === "string" && typeof pin.category === "string"
    ) : [];
  } catch (error) {
    console.error("Não foi possível ler os pins criados do armazenamento local.", error);
    return [];
  }
}

function allPins() {
  return [...customPins, ...pins];
}

function updateSavedCount() {
  document.querySelector("#saved-count").textContent = String(savedPins.length);
}

function getVisiblePins() {
  let visible = allPins();
  if (activeView === "saved") visible = visible.filter((pin) => savedPins.includes(pin.id));
  if (activeCategory !== "Tudo") visible = visible.filter((pin) => pin.category === activeCategory);
  if (searchQuery) {
    visible = visible.filter((pin) =>
      `${pin.title} ${pin.category} ${pin.creator || ""} ${pin.description || ""}`.toLocaleLowerCase("pt-BR").includes(searchQuery)
    );
  }
  return visible;
}

function saveIcon(isSaved) {
  return isSaved
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
}

function renderPins() {
  const visible = getVisiblePins();
  grid.innerHTML = visible.map((pin) => {
    const isSaved = savedPins.includes(pin.id);
    const creator = pin.creator || "Sua coleção";
    return `<article class="pin-card" data-pin-id="${escapeHtml(pin.id)}">
      <button class="pin-image-button" type="button" data-open-pin="${escapeHtml(pin.id)}" aria-label="Ver ${escapeHtml(pin.title)}">
        <img class="pin-image" src="${imageUrl(pin.image, 600)}" alt="${escapeHtml(pin.title)}" loading="lazy" decoding="async" fetchpriority="low" style="aspect-ratio: 300 / ${pin.height || 450}" />
      </button>
      <button class="pin-save${isSaved ? " is-saved" : ""}" type="button" data-save-pin="${escapeHtml(pin.id)}" aria-label="${isSaved ? "Remover dos salvos" : "Salvar imagem"}" aria-pressed="${isSaved}">${saveIcon(isSaved)}<span>${isSaved ? "Salvo" : "Salvar"}</span></button>
      <div class="pin-actions">
        <button class="pin-action" type="button" data-share-pin="${escapeHtml(pin.id)}" aria-label="Compartilhar ${escapeHtml(pin.title)}" title="Compartilhar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.4"/></svg>
        </button>
        <button class="pin-action" type="button" data-download-pin="${escapeHtml(pin.id)}" aria-label="Baixar ${escapeHtml(pin.title)}" title="Baixar imagem">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3"/></svg>
        </button>
      </div>
      <div class="pin-card-info"><h3 class="pin-card-title">${escapeHtml(pin.title)}</h3><span class="pin-card-category">${escapeHtml(pin.category)}</span></div>
      <div class="pin-source"><span class="source-avatar">${escapeHtml(pin.initials || "V")}</span><span>${escapeHtml(creator)}</span></div>
    </article>`;
  }).join("");

  const isEmpty = visible.length === 0;
  emptyState.hidden = !isEmpty;
  grid.hidden = isEmpty;
  document.querySelector("#result-count").textContent = `${visible.length} ${visible.length === 1 ? "ideia" : "ideias"}`;
  document.querySelector("#grid-heading").textContent = activeView === "saved" ? "Sua coleção" : activeView === "explore" ? "Ideias para explorar" : searchQuery ? "Resultados da busca" : "Feito para você";
  document.querySelector("#empty-title").textContent = activeView === "saved" ? "Sua coleção começa aqui" : "Nenhuma ideia encontrada";
  document.querySelector("#empty-message").textContent = activeView === "saved" ? "Salve as imagens que quiser guardar para depois." : "Tente outra busca ou explore novas ideias.";
  updateSavedCount();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  document.querySelector(".toast-message").textContent = message;
  const action = document.querySelector(".toast-action");
  action.hidden = true;
  action.removeAttribute("href");
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function showImageFallback(message, url) {
  window.clearTimeout(toastTimer);
  document.querySelector(".toast-message").textContent = message;
  const action = document.querySelector(".toast-action");
  action.href = url;
  action.hidden = false;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 8000);
}

function getPin(id) {
  return allPins().find((pin) => pin.id === id);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      console.warn("A API de área de transferência não está disponível; tentando método alternativo.", error);
    }
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  const copied = document.execCommand("copy");
  input.remove();
  if (!copied) throw new Error("O navegador não permitiu copiar o link.");
}

async function sharePin(id) {
  const pin = getPin(id);
  if (!pin) {
    showToast("Não foi possível encontrar esta imagem.");
    return;
  }

  const url = imageUrl(pin.image, 2400);
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({
        title: pin.title,
        text: pin.description || "Confira esta imagem.",
        url,
      });
      showToast("Link da imagem compartilhado");
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
      console.warn("O compartilhamento nativo falhou; tentando copiar o link.", error);
    }
  }

  try {
    await copyText(url);
    showToast("Link da imagem copiado");
  } catch (error) {
    console.error("Não foi possível compartilhar nem copiar o link da imagem.", error);
    showImageFallback("Não foi possível copiar. Abra a imagem para compartilhar.", url);
  }
}

function filenameFromTitle(title, extension) {
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "imagem";
  return `${slug}.${extension}`;
}

async function downloadPin(id) {
  const pin = getPin(id);
  if (!pin) {
    showToast("Não foi possível encontrar esta imagem.");
    return;
  }

  const url = imageUrl(pin.image, 2400).replace("fit=crop", "fit=max").replace("q=82", "q=90");
  showToast("Preparando imagem para download...");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`O servidor respondeu com status ${response.status}.`);
    const blob = await response.blob();
    if (!blob.size || !blob.type.startsWith("image/")) {
      throw new Error("A resposta não contém uma imagem válida.");
    }

    const extension = ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" })[blob.type] || "jpg";
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filenameFromTitle(pin.title, extension);
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    showToast("Download iniciado");
  } catch (error) {
    console.error(`Não foi possível baixar a imagem "${pin.title}".`, error);
    showImageFallback("Download indisponível. Você pode abrir a imagem original:", url);
  }
}

function toggleSaved(id) {
  if (savedPins.includes(id)) {
    savedPins = savedPins.filter((savedId) => savedId !== id);
    localStorage.setItem(savedKey, JSON.stringify(savedPins));
    showToast("Imagem removida dos salvos");
  } else {
    savedPins = [id, ...savedPins];
    localStorage.setItem(savedKey, JSON.stringify(savedPins));
    showToast("Imagem salva na sua coleção");
  }
  renderPins();
  if (!pinModal.hidden && modalImage.dataset.pinId === id) updateModalSaveButton(id);
}

function openModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal(modal) {
  modal.hidden = true;
  if (pinModal.hidden && createModal.hidden) document.body.style.overflow = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

function updateModalSaveButton(id) {
  const button = document.querySelector("#modal-save");
  const isSaved = savedPins.includes(id);
  button.innerHTML = `${saveIcon(isSaved)} ${isSaved ? "Salvo" : "Salvar pin"}`;
  button.dataset.savePin = id;
}

function showPin(id) {
  const pin = allPins().find((item) => item.id === id);
  if (!pin) return;
  document.querySelector(".modal-image-wrap").classList.remove("is-unavailable");
  modalImage.src = imageUrl(pin.image, 1300);
  modalImage.alt = pin.title;
  modalImage.dataset.pinId = pin.id;
  document.querySelector("#modal-share").dataset.sharePin = pin.id;
  document.querySelector("#modal-download").dataset.downloadPin = pin.id;
  document.querySelector("#modal-category").textContent = pin.category;
  document.querySelector("#modal-title").textContent = pin.title;
  document.querySelector("#modal-description").textContent = pin.description || "Uma ideia para guardar e revisitar quando quiser.";
  const credit = document.querySelector("#modal-credit");
  credit.textContent = pin.creator || "Sua coleção";
  credit.href = pin.source || imageUrl(pin.image, 2400);
  document.querySelector("#credit-avatar").textContent = pin.initials || "V";
  updateModalSaveButton(pin.id);
  openModal(pinModal);
}

function setView(view) {
  activeView = view;
  if (view === "explore") {
    activeCategory = "Tudo";
    searchQuery = "";
    searchInput.value = "";
  }
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
  document.querySelector("#page-title").textContent = view === "saved" ? "Suas ideias favoritas" : view === "explore" ? "Encontre algo novo" : "Um pouco de inspiração";
  document.querySelector("#page-subtitle").textContent = view === "saved" ? "Tudo o que você guardou, em um só lugar." : view === "explore" ? "Um mundo de ideias esperando para ser descoberto." : "Ideias que combinam com o que você está imaginando.";
  renderPins();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCreateModal() {
  const select = document.querySelector("#pin-image-select");
  select.innerHTML = allPins().map((pin) => `<option value="${escapeHtml(pin.id)}">${escapeHtml(pin.title)}</option>`).join("");
  updateCreatePreview();
  openModal(createModal);
  document.querySelector("#pin-title-input").focus();
}

function updateCreatePreview() {
  const pin = allPins().find((item) => item.id === document.querySelector("#pin-image-select").value);
  if (!pin) return;
  document.querySelector("#create-preview").innerHTML = `<img src="${imageUrl(pin.image, 700)}" alt="Prévia de ${escapeHtml(pin.title)}" />`;
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  if (searchQuery) activeView = "explore";
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
  renderPins();
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  if (searchQuery) activeView = "explore";
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
  renderPins();
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
    renderPins();
  });
});

grid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-pin]");
  if (saveButton) {
    event.stopPropagation();
    toggleSaved(saveButton.dataset.savePin);
    return;
  }
  const shareButton = event.target.closest("[data-share-pin]");
  if (shareButton) {
    event.stopPropagation();
    sharePin(shareButton.dataset.sharePin);
    return;
  }
  const downloadButton = event.target.closest("[data-download-pin]");
  if (downloadButton) {
    event.stopPropagation();
    downloadPin(downloadButton.dataset.downloadPin);
    return;
  }
  const openButton = event.target.closest("[data-open-pin]");
  if (openButton) showPin(openButton.dataset.openPin);
});

grid.addEventListener("error", (event) => {
  if (!event.target.matches(".pin-image")) return;
  event.target.closest(".pin-image-button")?.classList.add("is-unavailable");
}, true);
grid.addEventListener("load", (event) => {
  if (!event.target.matches(".pin-image")) return;
  event.target.closest(".pin-image-button")?.classList.remove("is-unavailable");
}, true);
modalImage.addEventListener("error", () => document.querySelector(".modal-image-wrap").classList.add("is-unavailable"));
modalImage.addEventListener("load", () => document.querySelector(".modal-image-wrap").classList.remove("is-unavailable"));

document.querySelector("#modal-save").addEventListener("click", (event) => toggleSaved(event.currentTarget.dataset.savePin));
document.querySelector("#modal-share").addEventListener("click", (event) => sharePin(event.currentTarget.dataset.sharePin));
document.querySelector("#modal-download").addEventListener("click", (event) => downloadPin(event.currentTarget.dataset.downloadPin));
document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop")));
});
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeModal(backdrop);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!pinModal.hidden) closeModal(pinModal);
    if (!createModal.hidden) closeModal(createModal);
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelectorAll("#create-button, #top-create-button, #heading-create-button, #mobile-create-button").forEach((button) => {
  button.addEventListener("click", openCreateModal);
});
document.querySelector("#pin-image-select").addEventListener("change", updateCreatePreview);
document.querySelector("#create-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const imagePin = allPins().find((pin) => pin.id === formData.get("image"));
  const title = String(formData.get("title") || "").trim();
  if (!imagePin || !title) return;
  const createdPin = {
    id: `custom-${Date.now()}`,
    title,
    category: String(formData.get("category") || "Interiores"),
    creator: "Sua coleção",
    initials: "C",
    description: "Uma ideia adicionada à sua coleção pessoal.",
    image: imagePin.image,
    height: imagePin.height || 450,
  };
  customPins = [createdPin, ...customPins];
  localStorage.setItem(customKey, JSON.stringify(customPins));
  event.currentTarget.reset();
  closeModal(createModal);
  activeView = "home";
  activeCategory = "Tudo";
  searchQuery = "";
  searchInput.value = "";
  setView("home");
  showToast("Seu pin foi adicionado à coleção");
});

document.querySelector(".empty-reset").addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  activeCategory = "Tudo";
  setView("home");
});

document.querySelector(".discovery-link").addEventListener("click", (event) => {
  searchInput.value = event.currentTarget.dataset.search;
  searchQuery = event.currentTarget.dataset.search;
  activeView = "explore";
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === "explore"));
  renderPins();
  grid.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderPins();
