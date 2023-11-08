import carbonaraImg from "../../assets/CarbonaraPasta.jpg";
import LasagnaImage from "../../../src/assets/LasagnaBolognese.png";
import ButterChickenImage from "../../../src/assets/ButterChicken.jpg";
import PumpkinSoupImage from "../../../src/assets/PumpkinSoup.jpg";
import MargheritaImage from "../../../src/assets/PizzaMargherita.jpg";
import SteakImage from "../../../src/assets/PorkSteak.jpg";
import CremeBruleeImage from "../../../src/assets/CremeBrulee.webp";
import TiramisuImage from "../../../src/assets/Tiramisu.jpg";
import MacaronsImage from "../../../src/assets/Macarons.jpg";
import PoachedPearsImage from "../../../src/assets/PoachedPears.jpg";
import BlueberryMuffinsImage from "../../../src/assets/BluebeeryMuffin.webp";
import ProfiterolesImage from "../../../src/assets/Profiteroles.webp";
import CosmopolitanImage from "../../../src/assets/CosmopolitanCocktail.webp";
import MojitoImage from "../../../src/assets/Mojito.jpg";
import PinaColadaImage from "../../../src/assets/PinaColada.jpg";
import BlueLagoonImage from "../../../src/assets/BlueLagoon.webp";
import AperolImage from "../../../src/assets/AperolSpritz.jpg";
import BloodyMaryImage from "../../../src/assets/BloodyMary.webp";

export interface Recipe {
  title: string;
  category: FoodCategory;
  description: string;
  image: any;
  ingredients: string[];
  preparationSteps: string[];
}

export type FoodCategory = "MAIN_DISHES" | "DESERTS" | "DRINKS" | "ALL";

export const recipesData: Recipe[] = [
  {
    title: "Carbonara",
    category: "MAIN_DISHES",
    image: carbonaraImg,
    description:
      "Pasta Carbonara is a traditional Italian dish which conquered the hearts of millions of people, with a delightful combination of silky cheese sauce with crisp pancetta and black pepper.",
    ingredients: [
      "100g pancetta",
      "50g pecorino cheese",
      "50g parmesan",
      "3 large eggs",
      "350g spaghetti",
      "2 plump garlic cloves, peeled and left whole",
      "50g unsalted butter",
      "sea salt and freshly ground black pepper",
    ],
    preparationSteps: [
      "Put a large saucepan of water on to boil.",
      "Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.",
      "Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.",
      "Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
      "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it",
      "While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.",
      "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.",
      "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.",
      "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
      "Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
      "Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.",
      "Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.",
    ],
  },

  {
    title: "LasagnaBolognese",
    category: "MAIN_DISHES",
    image: LasagnaImage,
    description:
      "This isn't a quick and easy lasagna. This is a slow and divine lasagna. A memorable lasagna. Layers of flat lasagna noodles baked with alternating layers of slow-cooked Bolognese sauce, and Parmesan cheese make you to want to taste it more and more.",
    ingredients: [
      "For Bolognese sauce:",
      "2 ounces diced pancetta, finely chopped",
      "1 medium Spanish onion or yellow onion, finely chopped",
      "1 rib celery, finely chopped",
      "1 carrot, finely chopped",
      "4 tablespoons unsalted butter",
      "11 ounces ground beef",
      "4 ounces ground pork",
      "4 ounces ground Italian sausage",
      "1 clove, freshly ground",
      "Dash freshly ground cinnamon",
      "1 teaspoon freshly ground black pepper",
      "2 pounds tomatoes , peeled and chopped, or 1 (28-ounce) can whole peeled tomatoes",
      "1 cup whole milk",
      "1/2 teaspoon sea salt",
      "For Lasagna:",
      "About 16 sheets lasagna noodles (De Cecco brand recommended), enough to make 4 layers in a 13 x 9-inch baking pan with the noodles overlapping each other a little bit",
      "1 cup freshly grated Parmesan cheese",
    ],
    preparationSteps: [
      "Combine pancetta, onion, celery, and carrot in sauté pan with butter and cook over medium heat until onion turns pale gold.",
      "Add the beef, pork, and sausage to the soffritto and increase the heat to high. Cook until browned. Sprinkle with the ground clove, cinnamon, and pepper.",
      "Stir in the tomatoes and bring to a simmer. Reduce the heat to medium. Cook over medium heat for 15 minutes. If you are using whole canned tomatoes, break them up as you add them to the sauce.",
      "Add the milk, season with sea salt, then turn down the heat and let simmer for 2 and 1/2 hours. Stir at least every 20 minutes. Whenever the sauce simmers down to the point that it is sticking to the bottom of the pan, just add 1/4 cup of water and scrape up the browned bits from the bottom and continue to cook.",
      "Preheat oven to 375°F. Cook the lasagna according to instructions. About 8 minutes in 6 quarts of boiling salted water. Drain, rinse with cold water. Lay the individual lasagna noodles out on kitchen towels, not touching, so they do not stick together while you layer the casserole.",
      "Spread a little olive oil around the inside of a 13x9-inch baking pan. Make sure your baking pan is non-reactive - pyrex or stainless steel. Do not use an aluminum pan as it will react with the acidity of the sauce and ruin the flavor. Put a layer of lasagna noodles down first. Layer on a third of the bolognese sauce, then a third of the bechamel sauce. Sprinkle with grated Parmesan. Repeat two more times. Top with a final layer of noodles and sprinkle with grated Parmesan.",
      "Tent the casserole with aluminum foil. Put lasagna into the middle rack of a pre-heated 375°F oven. Bake for 20-30 minutes, until the top begins to get lightly browned. Remove from oven and let cool 5-10 minutes before serving.",
    ],
  },

  {
    title: "ButterChicken",
    category: "MAIN_DISHES",
    image: ButterChickenImage,
    description:
      "Butter Chicken is a indian meal that smoothly combines  chicken, tomato sauce, and a slew of aromatic spices all in one pot to make a flavorful dinner that’s just as good as the version you’ll get at restaurants — only way easier to make.  Serve it over rice with a bit of cilantro to balance the heat and dinner is done.",
    ingredients: [
      "2 lb boneless, skinless chicken breast(910 g), cubed",
      "salt and pepper",
      "2 teaspoons chili powder, divided",
      "½ teaspoon turmeric",
      "6 tablespoons unsalted butter, divided",
      "1 ½ cups diced yellow onion(225 g)",
      "3 teaspoons garam masala",
      "1 teaspoon ground cumin",
      "1 teaspoon cayenne pepper",
      "1 tablespoon grated ginger",
      "3 cloves garlic, minced",
      "1 3-inch cinnamon stick",
      "tomato sauce(395 g)",
      "1 cup water(240 mL)",
      "1 cup heavy cream(240 mL)",
      "cooked rice, for serving",
      "chopped fresh cilantro, for garnish",
    ],
    preparationSteps: [
      "In a large bowl, season the chicken with salt, pepper, 1 teaspoon of chili powder, and the turmeric. Let sit for 15 minutes to marinate.",
      "Melt 2 tablespoons of butter in a large pot over medium heat. Brown the chicken, then remove from the pot.",
      "Melt another 2 tablespoons of butter in the pot, then add the onion, garam masala, remaining teaspoon of chili powder, the cumin, ginger, garlic, cayenne, cinnamon, salt, and pepper. Cook until fragrant.",
      "Add the tomato sauce and bring to a simmer.",
      "Add the water and cream and return to a simmer.",
      "Return the chicken to the pot, cover, and simmer for 10-15 minutes.",
      "Stir in the remaining 2 tablespoons of butter and season with more salt and pepper to taste.",
      "Serve the chicken over rice and garnish with cilantro.",
    ],
  },

  {
    title: "PumpkinSoup",
    category: "MAIN_DISHES",
    image: PumpkinSoupImage,
    description:
      "Pumpkin Soup is a fall soup that will melt your heart in a combination of creamy soup, crunchy rusk and tasty cheese",
    ingredients: [
      "4 tbsp olive oil",
      "2 onions, finely chopped",
      "1kg pumpkin or squash (try kabocha), peeled, deseeded and chopped into chunks",
      "700ml vegetable stock or chicken stock",
      "150ml double cream",
      "4 slices wholemeal seeded bread, crusts removed",
      "handful pumpkin seeds",
    ],
    preparationSteps: [
      "Melt the butter over medium/medium-low heat in a large pot or Dutch oven. Add the chopped shallot and cook, stirring frequently, for 3-5 minutes. Next add the garlic and continue cooking, mixing frequently, for about 1 minute. Quickly add the pumpkin puree and mix well to avoid the garlic burning.",
      "Cook the pumpkin mixture for 5 minutes, stirring frequently.",
      "Add the coconut milk and chicken stock and mix well to incorporate it into the pumpkin. Then add the honey, chicken bouillon, thyme, nutmeg, ¼ tsp salt, and fresh cracked black pepper (to taste).",
      "Bring the soup to a boil then lower the heat and simmer until desired thickness is reached (15-20 minutes). If desired, allow the soup to cool and blend well with an immersion blender. (If doing this, simmer again before serving).",
      "Season with salt and pepper as desired.",
      "Serve hot, topped with freshly cracked pepper and raw pumpkin seeds.",
    ],
  },

  {
    title: "PizzaMargherita",
    category: "MAIN_DISHES",
    image: MargheritaImage,
    description:
      "Say 'ciao' to this classic Pizza Margherita that'll transport you straight to Italy! With its simple yet flavorful combination of fresh basil, mozzarella, and tomato sauce, your heart will be singing loudly",
    ingredients: [
      "4 cups bread flour(480 g)",
      "2 ½ tablespoons kosher salt, divided",
      "1 tablespoon sugar",
      "2 cups warm water(470 mL)",
      "1 ½ teaspoons active dry yeast",
      "3 tablespoons extra virgin olive oil",
      "whole tomatoes(795 g),",
      "4 cloves garlic",
      " fresh mozzarella cheese(455 g), sliced 1/2-inch (1 1/4 cm) thick",
      "2 cups fresh basil(80 g)",
    ],
    preparationSteps: [
      "In a large bowl combine flour, 1½ tablespoons salt, and sugar.",
      "In a medium bowl, combine water, yeast, and 1 tablespoon of olive oil. Stir well and let rest for 2 minutes.",
      "Add yeast mixture to flour mixture and combine using your hands or a stand mixer with a dough hook, at least two minutes. Let dough rest for 20 minutes, uncovered, at room temperature.",
      "On a floured work surface, separate dough into 4 even portions. Work each into a circular ball, then place the balls onto a baking sheet lined with wax paper. Cover with a damp towel and rest, refrigerated, for at least 4 hours.",
      "In a blender or food processor, combine tomatoes, 2 tablespoons of olive oil, 1 tablespoon of salt, and garlic. Process until smooth.",
      "Preheat oven to 550°F/290°C. Place a pizza stone or large cast-iron griddle on the center rack. Heat for at least 45 minutes.",
      "On a floured work surface, use your fingertips to create a ring around the outside (your crust) of one of the risen balls of dough. Using the pads of your fingers, gently flatten out the dough inside the ring.",
      "Gently lift up the dough and let it hang off your knuckles, stretching itself out with its own weight. Slowly rotate the circle of dough, continuing to let it stretch off your knuckles. Go all the way around the circle once, taking care not to let it hang too long in one place and stretch too thin.",
      "Using a large spoon, spread a thin layer of sauce across the dough, leaving room for the crust.",
      "Evenly place three slices of mozzarella on top of the sauce, then sprinkle a handful of torn basil leaves evenly over your pizza. Or top with whatever you desire: sausage, peppers, onions… just about anything can be a pizza topping!",
      "Carefully slide the pizza onto a floured sheet or pizza peel and place on top of your stone or griddle in the oven. Cook for 7 to 10 minutes, until the cheese is bubbly and the top of the crust is just beginning to blacken.",
      "Remove from oven and let cool for 3-4 minutes before slicing.",
    ],
  },
  {
    title: "Pork steak with smoky corn",
    category: "MAIN_DISHES",
    image: SteakImage,
    description:
      "The tasty steak, baked on the grill and crispy corn. All together give you unforgettable moments that will teleport you directly in Florence, Italy. Cook this to discover the beauty of the Italian dishes!",
    ingredients: [
      "4 tsp tomato ketchup",
      "2 tbsp dark muscovado sugar",
      "1 tbsp white wine vinegar",
      "1 tsp paprika",
      "4 pork loin steaks, trimmed of any fat",
      "4 corn on the cobs",
      "1 tbsp butter",
    ],
    preparationSteps: [
      "Boil a large pan of water for the corn. Make a sauce by mixing the ketchup, sugar and vinegar with half the paprika. Heat a non-stick frying pan, then brown the pork for 3-4 mins on each side. Spoon over the sauce halfway through cooking and turn the steaks in it until the pork is cooked through and sticky.",
      "Meanwhile, tip the corn into the boiling water and cook for 5-8 mins until tender. Stir the remaining paprika into the butter in a heatproof bowl and microwave on High for 15-20 secs until the paprika is sizzling in the melted butter (alternatively, just melt the smoky butter in a small pan). Drain the corn, brush over the butter, then serve with the sticky pork steaks and a green salad.",
    ],
  },

  {
    title: "CremeBrulee",
    category: "DESERTS",
    image: CremeBruleeImage,
    description:
      "Indulge in this rich and creamy dessert, made with silky smooth custard and a crispy caramelized sugar top. This classic French dessert is sure to impress with its decadent taste and elegant presentation.",
    ingredients: [
      "2 cartons double cream, 1 large (284ml) plus 1 small (142ml)",
      "100ml whole milk",
      "1 vanilla pod",
      "5 egg yolks",
      "50g golden caster sugar, plus extra for the topping",
    ],
    preparationSteps: [
      "Heat the oven to 180C/160C fan/gas 4. Sit four 175ml ramekins in a deep roasting tin at least 7.5cm deep (or a large deep cake tin), one that will enable a baking tray to sit well above the ramekins when laid across the top of the tin.",
      "Pour the large and small cartons of double cream into a medium pan with the milk.",
      "Lay the vanilla pod on a board and slice lengthways through the middle with a sharp knife to split it in two. Use the tip of the knife to scrape out all the tiny seeds into the cream mixture. Drop the vanilla pod in as well, and set aside.",
      "Put the egg yolks and sugar in a mixing bowl and whisk for 1 min with an electric hand whisk until paler in colour and a bit fluffy.",
      "Put the pan with the cream on a medium heat and bring almost to the boil. As soon as you see bubbles appear round the edge, take the pan off the heat.",
      "Pour the hot cream into the beaten egg yolks, stirring with a wire whisk as you do so, and scraping out the seeds from the pan.",
      "Set a fine sieve over a large wide jug or bowl and pour the hot mixture through to strain it, encouraging any stray vanilla seeds through at the end.",
      "Using a big spoon, scoop off all the pale foam that is sitting on the top of the liquid (this will be several spoonfuls) and discard. Give the mixture a stir.",
      "Pour in enough hot water (from the tap) into the roasting tin to come about 1.5cm up the sides of the ramekins. Pour the hot cream into the ramekins so you fill them up right to the top – it’s easier to spoon in the last little bit.",
      "Put them in the oven and lay a baking sheet over the top of the tin so it sits well above the ramekins and completely covers them, but not the whole tin, leaving a small gap at one side to allow air to circulate.",
      "Bake for 30-35 mins until the mixture is softly set. To check, gently sway the roasting tin and if the crème brûlées are ready, they will wobble a bit like a jelly in the middle. Don’t let them get too firm.",
      "Lift the ramekins out of the roasting tin with oven gloves and set them on a wire rack to cool for a couple of minutes only, then put in the fridge to cool completely. This can be done overnight without affecting the texture.",
      "When ready to serve, wipe round the top edge of the dishes, sprinkle 1½ tsp of caster sugar over each ramekin and spread it out with the back of a spoon to completely cover.",
      "Spray with a little water using a fine spray (the sort you buy in a craft shop) to just dampen the sugar – then use a blow torch to caramelise it. Hold the flame just above the sugar and keep moving it round and round until caramelised. Serve when the brûlée is firm, or within an hour or two.",
    ],
  },

  {
    title: "Tiramisu",
    category: "DESERTS",
    image: TiramisuImage,
    description:
      "End your meal on a sweet note with this indulgent tiramisu. Layers of creamy mascarpone cheese and coffee-soaked ladyfingers encased by rich cheesecake. All without turning on your oven!",
    ingredients: [
      "400ml double cream",
      "250g mascarpone",
      "75ml marsala",
      "5 tbsp golden caster sugar",
      "300ml coffee, made with 2 tbsp coffee granules and 300ml boiling water",
      "175g sponge fingers",
      "25g dark chocolate",
      "2tsp cocoa powder",
    ],
    preparationSteps: [
      "Put the double cream, mascarpone, marsala and golden caster sugar in a large bowl.",
      "Whisk until the cream and mascarpone have completely combined and have the consistency of thickly whipped cream.",
      "Pour the coffee into a shallow dish. Dip in a few of the sponge fingers at a time, turning for a few seconds until they are nicely soaked, but not soggy. Layer these in a dish until you’ve used half the sponge fingers, then spread over half of the creamy mixture.",
      "Using the coarse side of the grater, grate over most of the dark chocolate. Then repeat the layers (you should use up all the coffee), finishing with the creamy layer.",
      "Cover and chill for a few hours or overnight. Will keep in the fridge for up to two days.",
      "To serve, dust with the cocoa powder and grate over the remainder of the chocolate.",
    ],
  },

  {
    title: "Macarons",
    category: "DESERTS",
    image: MacaronsImage,
    description:
      "Do you need a refreshing dessert that will keep you going? Enter macarons!. They may seem intimidating but with our easy-to-follow guide, they don’t have to be. And you can customize them! Want a variety? Use different types of food coloring. Prefer a different flavored icing? Add some lavender extract for a floral feel. One bite, and you’ll feel like you’re in Paris yourself. ",
    ingredients: [
      "170g icing sugar",
      "160g ground almonds",
      "120ml egg whites from about 4 medium eggs, separated into 2 equal batches",
      "160g granulated sugar",
      "½ tsp red food colouring",
      "120g double cream",
      "110g dark chocolate, finely chopped",
      "25g unsalted butter, room temperature",
      "75g raspberry jam",
    ],
    preparationSteps: [
      "Place the icing sugar and ground almonds in the bowl of a food processor and pulse about 15 times until fully combined. Sieve this mixture into a large bowl, discarding any particles that stay in the sieve. Add the first batch of egg whites to the almond mixture, mix to form a thick paste and set aside.",
      "Tip the second batch of egg whites into a spotlessly clean, heatproof bowl and have an electric whisk at the ready. Place 50ml water and the granulated sugar into a small saucepan on medium heat. Bring to a boil and cook until the syrup registers 110C, using a sugar thermometer, at which time start to beat the egg whites on high speed. Once the syrup is at 118C pour it slowly down the side of the mixer bowl, avoiding the moving whisk. Continue to whisk on high until the mixture has cooled slightly and you have a shiny peaked meringue mixture – the bowl should no longer be hot to the touch, but still warm. Add the colouring and whisk to combine.",
      "Tip the meringue onto the almond mixture and gently fold together. It is important not to over-mix the batter – it should fall in a thick ribbon from the spatula. The ribbon should also fade back into the batter within about 30 secs – if it doesn’t, fold a few more times.",
      "Heat oven to 170C/150C fan/gas 3-4. Line three baking sheets with baking parchment. Transfer the batter to a piping bag fitted with a large round nozzle. Hold the bag vertically to the tray, with the nozzle about 1cm from it. Pipe rounds about 2.5cm in diameter onto the prepared baking sheets. Leave to rest for 30 mins, or until the macarons have developed a skin.",
      "Bake the macarons for 14 mins (this needs to be precise, so you could test a macaron first). Immediately slide the parchment onto the work surface and cool for a few minutes before gently peeling the macarons off the paper.",
      "To make the filling, place the cream in a small saucepan and the chocolate in a medium bowl. Bring the cream just to the boil and pour over the chocolate. Leave to stand for a few mins, then stir to combine. Add the butter and stir until smooth, then leave to set until thickened. Place the chocolate mix into a clean piping bag with a smaller nozzle and pipe around the edge of half the macarons. Fill the centre with jam and sandwich with another macaron shell.",
      "Once finished, the macarons will improve with an overnight rest in the fridge.",
    ],
  },

  {
    title: "PoachedPears",
    category: "DESERTS",
    image: PoachedPearsImage,
    description:
      "If you're already 18, you can try my poached pears recipe. Whole dessert make an elegant dinner party atmosphere, with a red wine sauce and fragrant cinnamon and vanilla",
    ingredients: [
      "750ml bottle Merlot or other red wine",
      "200g golden caster sugar",
      "2 cinnamon sticks, snapped in half",
      "1 vanilla pod, halved lengthways then halved across to make 4 strips",
      "4 firm pears, peeled",
    ],
    preparationSteps: [
      "Tip the wine, sugar, cinnamon and vanilla into a deep medium pan and heat gently until the sugar dissolves. Add the pears, making sure they are fully covered by the wine, then simmer for 30 mins until they are just tender. If the pears are very ripe, they may be ready in 20 mins. Can be made up to 2 days ahead – leave the pears in the syrup in the fridge until you’re ready to finish the recipe.",
      "Remove the pears from the pan with a slotted spoon and boil the syrup for 30 mins to reduce it and make it more syrupy. Cool, then chill for up to 2 days. Remove from the fridge 1 hr before serving.",
    ],
  },

  {
    title: "BlueberryMuffins",
    category: "DESERTS",
    image: BlueberryMuffinsImage,
    description:
      "These quick and easy blueberry muffins are super tender, moist, and soft! They make a great dessert or a snack on the go.",
    ingredients: [
      "100g unsalted butter softened, plus 1 tbsp, melted, for greasing",
      "140g golden caster sugar",
      "",
      "2 large eggs140g natural yogurt",
      "1 tsp vanilla extract",
      "2 tbsp milk",
      "250g plain flour",
      "2 tsp baking powder",
      "1 tsp bicarbonate of soda",
      "125g pack blueberries (or use frozen)",
    ],
    preparationSteps: [
      "Heat oven to 200C/180C fan/gas 6 and line a 12-hole muffin tin with paper cases. Beat the butter and caster sugar together until pale and fluffy. Add the eggs and beat in for 1 min, then mix in the yogurt, vanilla extract and milk. Combine the flour, baking powder and bicarb in a bowl with ¼ tsp fine salt, then tip this into the wet ingredients and stir in. Finally, fold in the blueberries and divide the mixture between the muffin cases.",
      "Bake for 5 mins, then reduce oven to 180C/160C fan/gas 4 and bake for 15-18 mins more until risen and golden, and a cocktail stick inserted into the centre comes out clean.",
      "Cool in the tin for 10 mins, then carefully lift out onto a wire rack to finish cooling. Will keep for 3-4 days in an airtight container – after a day or two, pop them in the microwave for 10-15 secs on high to freshen up.",
    ],
  },
  {
    title: "Profiteroles",
    category: "DESERTS",
    image: ProfiterolesImage,
    description:
      "Childhood desert, filled-up with soft cream, that gives you the highest pleasure. Enjoy this dessert with a cup of coffee!",
    ingredients: [
      "50g butter (preferably unsalted), cut into cubes",
      "2 tbsp caster sugar",
      "75g strong white flour, sifted with a pinch of fine sea salt",
      "2 eggs, lightly beaten",
      "300ml double cream",
      "few drops vanilla extract",
      "50g cocoa powder",
      "175g caster sugar",

    ],
    preparationSteps: [
      "Heat the oven to 220C/200C fan/gas 7. To make the profiteroles, put the butter and 2 tsp of the caster sugar in a saucepan with 150ml water. Place the pan over a low heat until the butter and sugar have melted, then bring to the boil. Take off the heat, add the flour all at once and beat energetically with a wooden spoon until the dough comes away from the sides of the pan.",
      "Leave to cool for 5 mins, then beat in the eggs bit by bit until you have a stiff, glossy mixture (this process is much easier in a food processor). Rinse two baking trays with cold water, shaking off any excess so they are slightly damp (this helps the pastry to rise). Using 2 teaspoons, spoon blobs of the mixture onto the baking trays. Then place in the oven and cook for about 18-20 mins until well risen and brown. Remove the profiteroles from the oven and cut a small slit in the base of each one so they don’t collapse. Cool on a wire rack.",
      "When they’re cold, whip the cream lightly until just holding its shape. Sweeten to taste with remaining sugar and a few drops of vanilla extract. Cut the profiteroles in half, fill them with the sweetened cream and pile them up on a plate. You can refrigerate them for 1-2 hrs at this point but not for any longer as the pastry will go soggy.",
      "To make the sauce, sift the cocoa powder into a bowl. Put the sugar in a pan with 100ml water and warm over a low heat until dissolved. Bring to the boil, cook for 1 min, then pour over the cocoa powder and stir well until smooth. Return the sauce to the pan, cook for 1 min then set aside for 15 mins before drizzling over the profiteroles.",
    ],
  },

  {
    title: "CosmopolitanCocktail",
    category: "DRINKS",
    image: CosmopolitanImage,
    description:
      "Lipsmackingly sweet and sour, the Cosmopolitan cocktail of vodka, cranberry, orange liqueur and citrus is a good-time in a glass. Perfect for a party",
    ingredients: [
      "45ml lemon vodka",
      "15ml triple sec",
      "30ml cranberry juice",
      "10ml lime juice",
      "ice",
    ],
    preparationSteps: [
      "Shake ingredients in a cocktail shaker with ice and strain into a cocktail glass.",
      "To make the garnish: hold a 3cm round piece of orange zest about 10cm above your cosmo and very carefully wave it over a lit match or lighter flame. Bend the outer edge of the zest in towards the flame so that the orange oils are released, then drop the zest into your drink.",
    ],
  },

  {
    title: "Mojito",
    category: "DRINKS",
    image: MojitoImage,
    description:
      "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.",
    ingredients: [
      "juice of 1 lime",
      "1 tsp granulated sugar",
      "small handful mint leaves, plus extra sprig to serve",
      "60ml white rum",
    ],
    preparationSteps: [
      "Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.",
      "Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.",
    ],
  },

  {
    title: "PinaColadaCocktail",
    category: "DRINKS",
    image: PinaColadaImage,
    description:
      "A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal",
    ingredients: [
      "120ml pineapple juice",
      "60ml white rum",
      "60ml coconut cream",
      "wedge of pineapple, to garnish (optional)",
    ],
    preparationSteps: [
      "Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like.",
    ],
  },

  {
    title: "BlueLagoonCocktail",
    category: "DRINKS",
    image: BlueLagoonImage,
    description:
      "Try our refreshing take on the classic blue lagoon with lemonade and fresh citrus juice. This boozy retro classic cocktail is perfect for parties",
    ingredients: [
      "few handfuls ice cubes and some crushed ice",
      "100ml blue curaçao",
      "100ml vodka",
      "1 lemon, juiced",
      "1 orange, juiced",
      "1 lime, juiced",
      "8 maraschino cherries and 1 tsp of the syrup",
      "200ml soda water",
    ],
    preparationSteps: [
      "Put the ice cubes in a large jug. Pour over the curaçao, vodka, fruit juices and 1 tsp syrup from the cherries. Stir until the outside of the glass feels cold.",
      "Half-fill four hurricane glasses with crushed ice, then strain in the cocktail.",
      "Top up the glasses with the soda water and gently stir, then garnish with the maraschino cherries.",
    ],
  },

  {
    title: "AperolSpritz",
    category: "DRINKS",
    image: AperolImage,
    description:
      "Get a taste of summer with our take on this classic Italian cocktail. You will enjoy this!",
    ingredients: ["ice", "100ml Aperol", "150ml prosecco", "soda, to top up"],
    preparationSteps: [
      "Put a couple of cubes of ice into 2 glasses and add a 50 ml measure of Aperol to each. Divide the prosecco between the glasses and then top up with soda, if you like.",
    ],
  },
  {
    title: "BloodyMary",
    category: "DRINKS",
    image: BloodyMaryImage,
    description:
      "Get a taste of summer with our take on this classic Italian cocktail. You will enjoy this!",
    ingredients: ["large handful of ice", "100ml vodka", "500ml tomato juice", "1 tbsp lemon juice, plus 2 slices to serve", "few shakes Worcestershire sauce","few shakes Tabasco (smoked Tabasco is nice)","pinch celery salt","pinch black pepper", "2 celery sticks, to serve"],
    preparationSteps: [
      "Place the ice in a large jug. Measure the vodka, tomato juice and lemon juice and pour it straight onto the ice.",
      "Add 3 shakes of Worcestershire sauce and Tabasco (or more if you like it very spicy) and a pinch of celery salt and pepper. Stir until the outside of the jug feels cold, then strain the cocktail into 2 tall glasses.",
      "Top up with fresh ice, add a celery stick and lemon slice to both glasses and enjoy.",
    ],
  },
];
