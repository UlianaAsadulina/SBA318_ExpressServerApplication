const ingredients = require("./ingredients");
const wizards = require("./wizards");

const elixirs = [ 
    {
        id: 1,
        name: "Cure of Boils",
        effect: "Removes boils",
        sideEffects: "Caused nasty boils to erupt on skin if brewed badly",
        characteristics: "Blue in colour. Emits pink smoke when completed",
        difficulty: 1,       
        ingredients: [
            {
                ingredientId: 1, 
                //ingredientName: "snake fang",
                amount: 6
            },
            {
                ingredientId: 2, 
                //ingredientName: "horned slug",
                amount: 4
            },
            {
                ingredientId: 3, 
                //ingredientName: "porcupine quill",
                amount: 2
            }
        ],
        inventorID: [], 
        instructions: "Part 1.\n Add 6 snake fangs to the mortar. Crush into a fine powder using the pestle. Add 4 measures of the crushed fangs to your cauldron. Heat the mixture to 250 for 10 seconds. Wave your wand. Leave to brew and return in 33-45 minutes. \nPart 2. \nAdd 4 horned slugs to your cauldron. Take the cauldron off the fire before adding the next ingredient. Add 2 porcupine quills to your cauldron. Stir 5 times, clockwise. Wave your wand to complete the potion."

    },
    {
        id: 2,
        name: "Hair-Dyeing Potion",
        effect: "Changed the colour of the drinker's hair",
        sideEffects: "",
        characteristics: "It takes the colour(s) of the used shell(s)",
        difficulty: 1,        
        ingredients: [
            {
                ingredientId: 4, 
                //ingredientName: "standard potioning water",
                amount: 1
            },
            {
                ingredientId: 5, 
                //ingredientName: "dried nettles",
                amount: 4
            },
            {
                ingredientId: 6, 
                //ingredientName: "powdered fireball spikes",
                amount: 2
            },
            {
                ingredientId: 7,
                //ingredientName: "Streeler shells",
                amount: 1
            }
        ],
        inventorID: [],      
        instructions: "Add water to the cauldron. Add the Dried Nettle to the cauldron. Add the Streeler shell to the cauldron. Stir 3 times, anticlockwise. Stir 5 times, clockwise. Control the temperature. Raise the temperature."

    },
    {
        id: 3,
        name: "Pepperup Potion",
        effect: "Cured common cold. Warmed up recipient.",
        sideEffects: "Steam emitted from drinker's ears",
        characteristics: "Red in colour",
        difficulty: 2,    
        ingredients: [
            {
                ingredientId: 4, 
                //ingredientName: "standard potioning water",
                amount: 1
            },
            {
                ingredientId: 8,
                //ingredientName: "bicorn horn",
                amount: 4
            }, 
            {
                ingredientId: 9,
                //ingredientName: "mandrake root",
                amount: 1   
            },
            {
                ingredientId: 10,
                //ingredientName: "Jewelweed",
                amount: 4
            },
            {
                ingredientId: 11,
                //ingredientName: "ginger root",
                amount: 2
            },
            {
                ingredientId: 12,
                //ingredientName: "fairy wing",
                amount: 3            
            },
            {
                ingredientId: 13,
                //ingredientName: "bouncing spider juice",
                amount: 5
            },
            {
                ingredientId: 14,
                //ingredientName: "infusion of Wormwood",
                amount: 3
            }
        ],
        inventorID: [2],      
        instructions: "Part 1:\nBring 750 mL of water to 363 Kelvin (90°C/194°F).Cut one mandrake root and add one half of root to the cauldron. Slice one whole ginger root and add the whole sliced root to the caudron. Stir the potion twice clockwise.\n Bring the heat up to 383 Kelvin (110°C/230°F) for 45 seconds, and then reduce heat again to 363 Kelvin (90°C/194°F).\nLeave the potion to brew in your pewter cauldron for 53 minutes.\nPart 2:\nAdd 2 mL of red wine vinegar and 2 mL of bouncing spider juice to the cauldron. Add three fairy wings to your mortar and crush them into a fine, even powder. Add the full powdered substance to the cauldron. Bring the heat up to 383 Kelvin (110°C/230°F) for 20 seconds, and then take the cauldron off the heat entirely. Add two tablespoons of powdered bicorn horn while the cauldron is off the flame. Note: If you add the powdered bicorn horn while the cauldron is still on the flame, it will turn a vibrant red, and is known to splatter, melt less expensive cauldrons, and explode. Coming into contact with the potion at this time could cause serious magical burns that will gradually consume the body, even if wiped off the surface of the skin, without magical intervention. Stir once counterclockwise while the cauldron is still removed from the flame. Wait 10 more seconds, then add the cauldron back to the heat and bring it to 363 Kelvin (90°C/194°F). Add 3 mL of Infusion of Wormwood and 250 mL of water to the cauldron. Leave the potion to brew in your pewter cauldron for 25 minutes (This would be 22 minutes and 30 seconds in a brass cauldron and 20 minutes and 18 seconds in a copper cauldron.) At this point in the brewing process, the potion will be a deep red, and the steam emitted will be a deep orange.\nPart 3:\nSlice the last ginger root into 3 mm (about one-eighth inch) slices and add the whole sliced root to the cauldron with the other half of the mandrake root.Add two tablespoons of powdered bicorn horn. This time, the cauldron can be left on the flame when adding the horn. Stir twice counterclockwise with your wand. Add first the 3 mL of bouncing spider juice and then the 2 mL of red wine vinegar. Stir once clockwise with your wand. Bring the heat up to 383 Kelvin (110°C/230°F) for 45 seconds, and then reduce heat again to 363 Kelvin (90°C/194°F). Leave the potion to brew in your pewter cauldron for 10 minutes (This would be 9 minutes in a brass cauldron and 8 minutes and 6 seconds in a copper cauldron.) At the end of the brewing process, the potion will be bright orange and emit yellow steam. Even after the potion cools, this yellow steam will continue to rise out of the potion. Following its brewing and transfer to clear crystal phials, the potion requires a maturation period of 2 days."

    },
    {
        id: 4,
        name: "Ageing Potion",
        effect: "Aged drinker temporarily",
        sideEffects: "unknown",
        characteristics: "Green",
        difficulty: 3,  
        ingredients: [
            {
                ingredientId: 15,
                //ingredientName: "newt spleen",
                amount: 1
            },
            {
                ingredientId: 16,
                //ingredientName: "orange snake",
                amount: 1
            },
            {
                ingredientId: 17,
               // ingredientName: "banana",
                amount: 4
            },
            {
                ingredientId: 18,
               // ingredientName: "green leaf",
                amount: 4
            }
        ],
        inventorID: [],
        instructions: "Slowly heat the red wine and prune juice and begin stirring clockwise until you can just see bubbles starting to form. Immediately add the Hairy Fungus and continue to stir clockwise for ten minutes. ontinuing to stir clockwise, add the tortoise shell. After eight minutes, remove the cauldron from the heat and add the caterpillar and bat tongue, making sure to continue to stir the solution in a clockwise motion. As the potion cools, it will turn milky white. Once it is completely cooled (about fifteen to twenty minutes), you may cease your clockwise stirring"
    },
    {
        id: 5,
        name: "Beautification Potion",
        effect: "Enhances the attractiveness of the drinker's physical appearance", 
        characteristics: " Changes colour. Emits multi-colour bubbles",
        difficulty: 2,
        ingredients: [
            {
                ingredientId: 19,
                //ingredientName: "morning dew",
                amount: 1
            },
            {
                ingredientId: 12,
               // ingredientName: "fairy wing",
                amount: 1
            },
            {
                ingredientId: 20,
              //  ingredientName: "rose petal",
                amount: 1
            },
            {
                ingredientId: 21,
                //ingredientName: "Lady's Mantle",
                amount: 1
            },
            {
                ingredientId: 22,
               // ingredientName: "unicorn hair",
                amount: 1
            },
            {
                ingredientId: 11,
               // ingredientName: "ginger root",
                amount: 2
            },
            {
                ingredientId: 23,
                //ingredientName: "boomslang skin",
                amount: 1
            }
            
        ],
        inventorID: [7, 10],
        instructions: "Grind the wings of three fairies and add to cauldron. Stir slowly, and then add morning dew. Stir vigorously, then heat the mixture. Find a single fresh rose. Pluck seven petals and add to cauldron. Chop the dried Lady's Mantle and add to cauldron, then stir. Add a lock of unicorn hair and stir vigorously. Add powdered ginger root and then heat. Lastly, wave your wand over the cauldron to finish the potion"
    }

    
];

module.exports = elixirs;