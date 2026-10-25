// Banco editorial inicial. Validar todas las recetas y su adecuación individual con nutricionista infantil.
const RECIPES=[
{id:1,name:'Palta madura en gajos',emoji:'🥑',age:6,category:'Frutas y vegetales',ingredients:['palta madura'],steps:['Lavar la cáscara antes de cortar.','Retirar carozo y cáscara.','Ofrecer gajos grandes de palta madura que se aplasten fácilmente entre los dedos.'],tip:'Para mejorar el agarre, se puede cubrir con una pequeña cantidad de cereal infantil apropiado.',allergens:[]},
{id:2,name:'Batata tierna al horno',emoji:'🍠',age:6,category:'Vegetales',ingredients:['batata','aceite de oliva'],steps:['Lavar, pelar y cortar la batata en bastones grandes.','Hornear hasta que esté completamente tierna y se aplaste fácilmente.','Enfriar antes de ofrecer.'],tip:'No ofrecer partes duras o tostadas.',allergens:[]},
{id:3,name:'Brócoli bien cocido',emoji:'🥦',age:6,category:'Vegetales',ingredients:['brócoli'],steps:['Lavar y separar flores con tallo suficientemente largo para agarrar.','Cocinar al vapor hasta que estén muy blandas.','Dejar entibiar y supervisar.'],tip:'La textura debe aplastarse fácilmente entre los dedos.',allergens:[]},
{id:4,name:'Banana madura',emoji:'🍌',age:6,category:'Frutas',ingredients:['banana madura'],steps:['Pelar una banana bien madura.','Ofrecer una porción grande apropiada para agarrar, sin partes duras.'],tip:'Siempre sentado y bajo supervisión.',allergens:[]},
{id:5,name:'Pera cocida tierna',emoji:'🍐',age:6,category:'Frutas',ingredients:['pera'],steps:['Lavar, pelar y quitar semillas y corazón.','Cocinar hasta que esté muy blanda.','Presentar en trozos grandes y blandos apropiados para el agarre.'],tip:'Evitar pera cruda dura.',allergens:[]},
{id:6,name:'Zapallo suave',emoji:'🎃',age:6,category:'Vegetales',ingredients:['zapallo','aceite de oliva'],steps:['Pelar y retirar semillas.','Cocinar hasta que esté completamente blando.','Ofrecer en bastones grandes blandos.'],tip:'No añadir sal.',allergens:[]},
{id:7,name:'Avena cremosa',emoji:'🥣',age:6,category:'Cereales',ingredients:['avena','agua'],steps:['Cocinar avena con agua hasta lograr consistencia suave.','Dejar entibiar.','Ofrecer con cuchara precargada si el bebé está preparado.'],tip:'Usar avena apropiada para la edad y una textura homogénea.',allergens:[]},
{id:8,name:'Lentejas muy tiernas',emoji:'🫘',age:6,category:'Legumbres',ingredients:['lentejas','agua'],steps:['Lavar y cocinar hasta que estén completamente blandas.','Aplastar las lentejas hasta lograr una textura segura.','Servir como puré espeso o sobre cuchara precargada.'],tip:'No ofrecer legumbres firmes o secas.',allergens:[]},
{id:9,name:'Pollo desmenuzado húmedo',emoji:'🍗',age:6,category:'Proteínas',ingredients:['pollo','agua'],steps:['Cocinar el pollo completamente, sin piel ni huesos.','Desmenuzar muy fino y mezclar con líquido de cocción sin sal para mantener humedad.','Adaptar la textura al desarrollo del bebé.'],tip:'Evitar trozos secos, grandes o fibrosos.',allergens:[]},
{id:10,name:'Huevo bien cocido',emoji:'🥚',age:6,category:'Proteínas',ingredients:['huevo'],steps:['Cocinar el huevo completamente, sin partes líquidas.','Ofrecer en una textura y tamaño adecuados al desarrollo del bebé.'],tip:'El huevo es un alérgeno: introducir siguiendo la orientación pediátrica.',allergens:['huevo']},
{id:11,name:'Yogur natural sin azúcar',emoji:'🥛',age:6,category:'Lácteos',ingredients:['yogur natural pasteurizado sin azúcar'],steps:['Verificar que sea pasteurizado y sin miel ni azúcar agregada.','Ofrecer una pequeña porción con cuchara.'],tip:'El yogur no sustituye la leche materna o fórmula; contiene alérgeno leche.',allergens:['leche']},
{id:12,name:'Arroz suave con calabaza',emoji:'🍚',age:7,category:'Cereales',ingredients:['arroz','calabaza','agua'],steps:['Cocinar arroz y calabaza hasta muy blandos.','Aplastar o combinar hasta lograr textura húmeda y segura.'],tip:'Variar los cereales a lo largo de la semana.',allergens:[]},
{id:13,name:'Pasta muy tierna con tomate',emoji:'🍝',age:8,category:'Cereales',ingredients:['pasta','tomate'],steps:['Cocinar la pasta hasta muy tierna.','Preparar salsa de tomate cocido sin sal.','Adaptar forma y tamaño de la pasta al desarrollo.'],tip:'Revisar si la pasta contiene trigo o huevo.',allergens:['trigo (según pasta)']},
{id:14,name:'Pescado cocido y desmenuzado',emoji:'🐟',age:7,category:'Proteínas',ingredients:['pescado bajo en mercurio'],steps:['Cocinar completamente el pescado.','Retirar meticulosamente todas las espinas y piel.','Desmenuzar fino y humedecer antes de ofrecer.'],tip:'Elegir especies de bajo mercurio según guías locales.',allergens:['pescado']},
{id:15,name:'Tortita blanda de banana y avena',emoji:'🥞',age:8,category:'Preparaciones',ingredients:['banana madura','avena','huevo'],steps:['Aplastar banana y mezclar con avena y huevo.','Cocinar tortitas pequeñas completamente por ambos lados.','Servir muy blandas, cortadas según desarrollo.'],tip:'Contiene huevo; comprobar introducción y tolerancia.',allergens:['huevo']},
{id:16,name:'Zanahoria muy tierna',emoji:'🥕',age:6,category:'Vegetales',ingredients:['zanahoria'],steps:['Pelar y cortar en bastones gruesos.','Cocinar hasta que se aplaste fácilmente entre los dedos.','Enfriar antes de ofrecer.'],tip:'Nunca ofrecer zanahoria cruda dura.',allergens:[]},
{id:17,name:'Manzana cocida',emoji:'🍎',age:6,category:'Frutas',ingredients:['manzana'],steps:['Pelar, quitar semillas y corazón.','Cocinar hasta que esté completamente blanda.','Ofrecer en textura apropiada.'],tip:'No ofrecer trozos de manzana cruda dura.',allergens:[]},
{id:18,name:'Carne tierna desmenuzada',emoji:'🥩',age:7,category:'Proteínas',ingredients:['carne magra','agua'],steps:['Cocinar completamente la carne.','Desmenuzar o picar muy fino y humedecer para evitar textura seca.','Ajustar la consistencia al desarrollo.'],tip:'Importante aporte de hierro.',allergens:[]},
{id:19,name:'Palta con banana aplastadas',emoji:'🥑',age:7,category:'Frutas',ingredients:['palta madura','banana madura'],steps:['Lavar y pelar ambas frutas.','Aplastar con tenedor hasta textura segura.','Ofrecer de inmediato con cuchara.'],tip:'No guardar restos que hayan estado en contacto con la boca.',allergens:[]},
{id:20,name:'Garbanzos en puré',emoji:'🫘',age:8,category:'Legumbres',ingredients:['garbanzos','agua','aceite de oliva'],steps:['Cocinar garbanzos hasta que estén muy tiernos.','Procesar con agua hasta lograr puré liso.','Servir con cuchara.'],tip:'No ofrecer garbanzos enteros.',allergens:[]},
{id:21,name:'Coliflor al vapor',emoji:'🥦',age:6,category:'Vegetales',ingredients:['coliflor'],steps:['Lavar y separar flores grandes.','Cocinar al vapor hasta muy blandas.','Enfriar y ofrecer.'],tip:'Verificar que se aplaste fácilmente.',allergens:[]}
];

// Ampliación editorial de propuestas sencillas: cada receta requiere validación profesional.
const MORE_RECIPES = [
['Puré de calabaza y lentejas',6,'Comidas con hierro','🎃',['zapallo','lentejas','agua']],
['Avena con pera cocida',6,'Desayunos','🥣',['avena','pera','agua']],
['Puré de batata y pollo',6,'Comidas con hierro','🍠',['batata','pollo','agua']],
['Brócoli con papa aplastada',6,'Vegetales','🥦',['brócoli','papa','aceite de oliva']],
['Puré de zanahoria y lentejas',6,'Comidas con hierro','🥕',['zanahoria','lentejas','agua']],
['Banana y avena cremosa',6,'Desayunos','🍌',['banana madura','avena','agua']],
['Puré de papa y carne',7,'Comidas con hierro','🥔',['papa','carne magra','agua']],
['Arroz muy blando con zapallo',7,'Almuerzos','🍚',['arroz','zapallo','agua']],
['Pera y banana aplastadas',7,'Frutas','🍐',['pera','banana madura']],
['Puré de garbanzos y batata',8,'Comidas con hierro','🫘',['garbanzos','batata','agua']],
['Pollo con zapallito tierno',7,'Comidas con hierro','🍗',['pollo','zapallito','agua']],
['Avena con manzana cocida',6,'Desayunos','🍎',['avena','manzana','agua']],
['Lentejas con arroz bien cocido',7,'Comidas con hierro','🫘',['lentejas','arroz','agua']],
['Puré de arvejas y papa',7,'Vegetales','🫛',['arvejas','papa','agua']],
['Palta con pera madura cocida',7,'Frutas','🥑',['palta madura','pera']],
['Puré de pollo y zanahoria',6,'Comidas con hierro','🥕',['pollo','zanahoria','agua']],
['Calabaza con arroz suave',7,'Almuerzos','🎃',['zapallo','arroz','agua']],
['Puré de carne y batata',7,'Comidas con hierro','🍠',['carne magra','batata','agua']],
['Yogur natural con banana pisada',7,'Desayunos','🥛',['yogur natural pasteurizado sin azúcar','banana madura']],
['Garbanzos y calabaza en puré',8,'Comidas con hierro','🫘',['garbanzos','zapallo','agua']],
['Puré de brócoli y pollo',7,'Comidas con hierro','🥦',['brócoli','pollo','agua']],
['Pera cocida con avena',6,'Desayunos','🍐',['pera','avena','agua']],
['Zanahoria y batata muy blandas',6,'Vegetales','🥕',['zanahoria','batata']],
['Puré de coliflor y papa',6,'Vegetales','🥦',['coliflor','papa','agua']],
['Arroz cremoso con lentejas',8,'Comidas con hierro','🍚',['arroz','lentejas','agua']],
['Pollo con arroz muy blando',7,'Comidas con hierro','🍗',['pollo','arroz','agua']],
['Puré de manzana y banana',6,'Frutas','🍎',['manzana','banana madura']],
['Palta y batata aplastadas',7,'Almuerzos','🥑',['palta madura','batata']],
['Carne con zapallo suave',7,'Comidas con hierro','🥩',['carne magra','zapallo','agua']],
['Arvejas trituradas con arroz',8,'Almuerzos','🫛',['arvejas','arroz','agua']],
['Lentejas y papa en puré',7,'Comidas con hierro','🫘',['lentejas','papa','agua']],
['Yogur con pera cocida',7,'Desayunos','🥛',['yogur natural pasteurizado sin azúcar','pera']],
['Brócoli y batata tiernos',7,'Vegetales','🥦',['brócoli','batata']],
['Puré de garbanzos y zanahoria',8,'Comidas con hierro','🫘',['garbanzos','zanahoria','agua']],
['Pollo con papa cremosa',7,'Comidas con hierro','🍗',['pollo','papa','agua']],
['Avena con calabaza cocida',7,'Desayunos','🥣',['avena','zapallo','agua']],
['Puré de carne y arvejas',8,'Comidas con hierro','🥩',['carne magra','arvejas','agua']],
['Zapallito con arroz tierno',7,'Almuerzos','🥒',['zapallito','arroz','agua']],
['Batata con garbanzos pisados',8,'Comidas con hierro','🍠',['batata','garbanzos','agua']],
['Pollo y coliflor en puré',7,'Comidas con hierro','🍗',['pollo','coliflor','agua']],
['Lentejas con zapallito',8,'Comidas con hierro','🫘',['lentejas','zapallito','agua']],
['Puré de pera y manzana',6,'Frutas','🍐',['pera','manzana']],
['Puré de papa, brócoli y carne',8,'Comidas con hierro','🥔',['papa','brócoli','carne magra','agua']],
['Arroz, pollo y zapallo suave',8,'Comidas con hierro','🍚',['arroz','pollo','zapallo','agua']],
['Avena y banana con yogur',8,'Desayunos','🥣',['avena','banana madura','yogur natural pasteurizado sin azúcar']],
['Puré de batata, lentejas y zanahoria',8,'Comidas con hierro','🍠',['batata','lentejas','zanahoria','agua']],
['Garbanzos con arroz cremoso',8,'Comidas con hierro','🫘',['garbanzos','arroz','agua']],
['Carne, calabaza y papa en puré',8,'Comidas con hierro','🥩',['carne magra','zapallo','papa','agua']],
['Pollo, arvejas y batata',9,'Comidas con hierro','🍗',['pollo','arvejas','batata','agua']],
['Lentejas, arroz y brócoli',9,'Comidas con hierro','🥦',['lentejas','arroz','brócoli','agua']]
];
const SAFE_COOK = {'pollo':'Cocinar el pollo por completo, retirar huesos y piel y desmenuzar muy fino.','carne magra':'Cocinar completamente la carne y picar muy fino o triturar, humedeciendo para evitar sequedad.','lentejas':'Cocinar las lentejas hasta que estén muy blandas y aplastarlas o triturarlas.','garbanzos':'Cocinar hasta muy blandos y triturar: nunca ofrecer garbanzos enteros.','arvejas':'Cocinar muy bien y aplastar o triturar: nunca ofrecer arvejas enteras.','arroz':'Cocinar el arroz hasta que quede muy blando y húmedo.','avena':'Cocinar la avena con agua hasta obtener una textura suave.','manzana':'Pelar, quitar semillas y cocinar hasta que quede muy blanda; evitar manzana cruda dura.','pera':'Pelar, retirar semillas y cocinar hasta que quede muy blanda.','zanahoria':'Cocinar hasta que esté muy blanda; nunca ofrecer zanahoria cruda dura.','papa':'Pelar y cocinar hasta que quede muy blanda.','batata':'Pelar y cocinar hasta que quede muy blanda.','zapallo':'Pelar, retirar semillas y cocinar hasta que quede muy blando.','brócoli':'Lavar y cocinar al vapor hasta que se aplaste fácilmente.','coliflor':'Lavar y cocinar hasta que esté muy blanda.','zapallito':'Lavar y cocinar hasta que quede muy blando.','banana madura':'Pelar y aplastar la banana madura.','palta madura':'Lavar, retirar cáscara y carozo y aplastar la pulpa.','yogur natural pasteurizado sin azúcar':'Utilizar yogur natural pasteurizado sin azúcar ni miel agregadas.'};
MORE_RECIPES.forEach(([name,age,category,emoji,ingredients],i)=>{
 const steps=['Lavar las manos, los ingredientes y los utensilios.'];
 ingredients.filter(x=>x!=='agua'&&x!=='aceite de oliva').forEach(x=>steps.push(SAFE_COOK[x]||'Cocinar hasta alcanzar una textura muy blanda.'));
 steps.push('Integrar y aplastar o triturar hasta una textura húmeda y adecuada para las habilidades del bebé. Dejar entibiar y ofrecer bajo supervisión.');
 const allergens=ingredients.some(x=>x.includes('yogur'))?['leche']:[];
 RECIPES.push({id:22+i,name,emoji,age,category,ingredients,steps,tip:'Propuesta orientativa. Ajustar textura, presentación y frecuencia con su profesional. No agregar sal, azúcar ni miel.',allergens});
});

const MONTHS=[6,7,8,9,10,11,12];
function menuFor(month,day){
 const eligible=RECIPES.filter(r=>r.age<=month);
 const iron=eligible.filter(r=>r.category==='Comidas con hierro'||r.category==='Proteínas'||r.category==='Legumbres');
 const breakfast=eligible.filter(r=>r.category==='Desayunos'||r.category==='Frutas'||r.category==='Cereales');
 const rest=eligible.filter(r=>r.category!=='Desayunos');
 return [breakfast[(day*7+month)%breakfast.length],iron[(day*11+month*3)%iron.length],rest[(day*13+month*2)%rest.length]];
}