const locationList = [
        {
          name: "Airport",
          items: ["Luggage", "Boarding Pass", "Security Scanner"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Apartment Complex",
          items: ["Mailboxes", "Elevator", "Intercom"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Attic",
          items: ["Old Boxes", "Cobwebs", "Trunk"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Bank",
          items: ["ATM", "Teller Window", "Vault"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Basement",
          items: ["Furnace", "Storage Shelves", "Old Furniture"],
          isOutdoors: false,
          temperature: "Cold"
        },
        {
          name: "Bathroom",
          items: ["Shower", "Mirror", "Toilet"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Beach",
          items: ["Sand", "Umbrella", "Waves"],
          isOutdoors: true,
          temperature: "Hot"
        },
        {
          name: "Bedroom",
          items: ["Bed", "Nightstand", "Closet"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Bistro",
          items: ["Small Tables", "Wine Glasses", "Cheese Platter"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Bridge",
          items: ["Bolt", "Rope", "Pebble", "Ticket Stub", "Leaf", "Duck", "Fishing Pole", "Coin"],
          isOutdoors: true,
          temperature: "Cool"
        },
        {
          name: "Buffet",
          items: ["Napkin", "Spoon", "Salt Packet", "Toothpick", "Plastic Cup","Serving Tray", "Plate", "Heat Lamp"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Bus Stop",
          items: ["Ticket Stub", "Coin", "Flyer", "Chewing Gum Wrapper", "Keychain","Bench", "Map", "Bus Sign"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Campsite",
          items: ["Matchstick", "Tent Peg", "Marshmallow", "Compass", "Flashlight","Tent", "Campfire", "Sleeping Bag","Map"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Canyon",
          items: ["Pebble", "Lizard", "Feather", "Dried Leaf", "Small Bone","Map","Signpost","Water Bottle"],
          isOutdoors: true,
          temperature: "Hot"
        },
        {
          name: "Cave",
          items: ["Pebble", "Feather", "Glow Worm", "Moss", "Broken Stalactite", "Bat", "Lizard" ],
          isOutdoors: true,
          temperature: "Cold"
        },
        {
          name: "Church",
          items: ["Book", "Candle", "Rosary", "Hymnal", "Collection Plate", "Pencil", "Bench"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "City Hall",
          items: ["Paperwork", "Stamp", "Ballot", "Keycard", "Pen"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Cliffside",
          items: ["Feather", "Pebble", "Dried Grass", "Shell", "Loose Soil","Sharp Rock", "Seagull"],
          isOutdoors: true,
          temperature: "Cold"
        },
        {
          name: "Closet",
          items: ["Scarf", "Glove", "Sock", "Hanger", "Shoe Lace"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Coffee Shop",
          items: ["Coffee Cup", "Muffin", "Napkin", "Spoon", "Sugar Packet", "Table"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Community Center",
          items: ["Brochure", "Name Tag", "Marker", "Folding Chair", "Water Bottle"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Courthouse",
          items: ["Gavel", "Notebook", "Pen", "Case File", "Glasses"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Desert",
          items: ["Cactus Flower", "Pebble", "Lizard", "Feather", "Water Canteen"],
          isOutdoors: true,
          temperature: "Hot"
        },
        {
          name: "Diner",
          items: ["Straw", "Ketchup Bottle", "Menu", "Salt Shaker", "Coffee Mug", "Table", "Milkshake", "Jukebox"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Dining Room",
          items: ["Fork", "Napkin", "Candle", "Table", "Chair"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Dunes",
          items: ["Seashell", "Pebble", "Feather", "Seagull", "Crab"],
          isOutdoors: true,
          temperature: "Hot"
        },
        {
          name: "Elementary School",
          items: ["Crayon", "Lunchbox", "Eraser", "Desk", "Backpack"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Factory",
          items: ["Screw", "Gloves", "Wrench", "Helmet", "Clipboard", "Bolt", "Measuring Tape"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Farm",
          items: ["Egg", "Bucket", "Hay Bale", "Apple", "Feather", "Milk Pail", "Seed Packet"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Field",
          items: ["Dandelion", "Feather", "Clover", "Flower", "Butterfly"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Fire Station",
          items: ["Walkie-Talkie", "Helmet", "Gloves", "Hose", "Dalmatian"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Food Truck",
          items: ["Napkin", "Plastic Fork", "Paper Tray", "Menu Board", "Ketchup Bottle"],
          isOutdoors: true,
          temperature: "Hot"
        },
        {
          name: "Forest",
          items: ["Pinecone", "Acorn", "Mushroom"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Garage",
          items: ["Wrench", "Oil Rag", "Flashlight", "Toolbox", "Workbench"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Garden",
          items: ["Petal", "Trowel", "Packet of Seeds","Flower", "Fountain", "Butterfly"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Gas Station",
          items: ["Receipt", "Air Gauge", "Energy Drink"],
          isOutdoors: true,
          temperature: "Warm"
        },
        {
          name: "Gym",
          items: ["Jump Rope", "Water Bottle", "Sweatband", "Backpack"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Hallway",
          items: ["Keychain", "Notebook", "Pen"],
          isOutdoors: false,
          temperature: "Cool"
        },
        {
          name: "High School",
          items: ["Textbook", "Pencil", "Desk", "Notebook", "Backpack"],
          isOutdoors: false,
          temperature: "Cool"
        },
        {
          name: "Hilltop",
          items: ["Leaf", "Feather", "Smooth Stone"],
          isOutdoors: true,
          temperature: "Cold"
        },
        {
          name: "Hospital",
          items: ["Thermometer", "Syringe", "Bandage","Bed", "Stethiscope", "Bedpad"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Hotel",
          items: ["Keycard", "Mini Shampoo Bottle", "Notepad","Suitcase", "Bellhop", "Bed"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Kitchen",
          items: ["Wooden Spoon", "Measuring Cup", "Oven Mitt","Oven", "Fridge", "Sink"],
          isOutdoors: false,
          temperature: "Warm"
        },
        {
          name: "Lake",
          items: ["Skipping Stone", "Fishing Bobber", "Duck Feather","Lilypad", "Tackle Box"],
          isOutdoors: true,
          temperature: "Cold"
        },

            {
              name: "Laundromat",
              items: ["Detergent Bottle", "Coin", "Clothespin"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Library",
              items: ["Bookmark", "Notebook", "Reading Glasses"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Living Room",
              items: ["Remote Control", "Throw Pillow", "Magazine","Sofa", "Coffee Table", "Television"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Market",
              items: ["Apple", "Cloth Bag", "Jar of Honey"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Marsh",
              items: ["Reed", "Pebble", "Snail Shell", "Frogs","Signpost"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Meadow",
              items: ["Daisy", "Feather", "Butterfly","Wildflower"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Mountain",
              items: ["Pinecone", "Small Rock", "Scarf","Signpost"],
              isOutdoors: true,
              temperature: "Cold"
            },
            {
              name: "Museum",
              items: ["Ticket Stub", "Postcard", "Brochure"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Office",
              items: ["Pen", "Sticky Note", "Paper Clip"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Orchard",
              items: ["Apple", "Basket", "Leaf"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Pantry",
              items: ["Jar of Peanut Butter", "Packet of Pasta", "Salt Shaker"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Park",
              items: ["Frisbee", "Water Bottle", "Notebook", "Bench","Signpost"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Parking Garage",
              items: ["Car Key", "Parking Ticket", "Flashlight"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Pharmacy",
              items: ["Pill Bottle", "Bandages", "Thermometer"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Pier",
              items: ["Fishing Hook", "Seashell", "Rope", "Wooden Plank", "Fishing Pole", "Seagull"],
              isOutdoors: true,
              temperature: "Cold"
            },
            {
              name: "Pizzeria",
              items: ["Pizza Cutter", "Napkin", "Box of Pizza"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Police Station",
              items: ["Handcuffs", "Notepad", "Badge"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Post Office",
              items: ["Envelope", "Stamp", "Packing Tape"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Power Plant",
              items: ["Wrench", "Safety Goggles", "Clipboard"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Restaurant",
              items: ["Fork", "Menu", "Salt Shaker","Table", "Waiter"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Riverbank",
              items: ["Skipping Stone", "Fishing Hook", "Leaf", "Pebble", "Duck"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Ruins",
              items: ["Broken Brick", "Old Coin", "Carved Stone"],
              isOutdoors: true,
              temperature: "Cold"
            },
            {
              name: "School",
              items: ["Pencil", "Notebook", "Eraser", "Locker"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Shopping Mall",
              items: ["Receipt", "Gift Card", "Shopping Bag"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Skyscraper",
              items: ["Keycard", "Business Card", "Notebook", "Sticky Note"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Stadium",
              items: ["Ticket Stub", "Foam Finger", "Whistle"],
              isOutdoors: true,
              temperature: "Warm"
            },
            {
              name: "Steakhouse",
              items: ["Steak Knife", "Menu", "Salt Shaker"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Supermarket",
              items: ["Grocery Bag", "Barcode Scanner", "Coupon"],
              isOutdoors: false,
              temperature: "Cool"
            },
            {
              name: "Sushi Bar",
              items: ["Sushi Roll", "Soy Sauce Packet", "Chopsticks"],
              isOutdoors: false,
              temperature: "Warm"
            },
            {
              name: "Swamp",
              items: ["Moss", "Small Frog", "Feather"],
              isOutdoors: true,
              temperature: "Warm"
            },


                {
                  name: "Theater",
                  items: ["Prop Sword", "Spotlight", "Foldable Chair"],
                  isOutdoors: false,
                  temperature: "Cool"
                },
                {
                  name: "Trail",
                  items: ["Backpack", "Walking Stick", "Water Bottle", "Signpost"],
                  isOutdoors: true,
                  temperature: "Warm"
                },
                {
                  name: "Train Station",
                  items: ["Luggage", "Train Ticket", "Bench"],
                  isOutdoors: true,
                  temperature: "Warm"
                },
                {
                  name: "University",
                  items: ["Textbook", "Laptop", "Notebook"],
                  isOutdoors: false,
                  temperature: "Cool"
                },
                {
                  name: "Valley",
                  items: ["Hiking Boots", "Compass", "Binoculars"],
                  isOutdoors: true,
                  temperature: "Warm"
                },
                {
                  name: "Vineyard",
                  items: ["Basket", "Wine Bottle", "Pruning Shears"],
                  isOutdoors: true,
                  temperature: "Warm"
                },
                {
                  name: "Warehouse",
                  items: ["Clipboard", "Flashlight", "Wrench", "Shipping Box"],
                  isOutdoors: false,
                  temperature: "Warm"
                },
                {
                  name: "Warehouse",
                  items: ["Packing Tape", "Shipping Label", "Barcode Scanner"],
                  isOutdoors: false,
                  temperature: "Warm"
                },
                {
                  name: "Warm Springs",
                  items: ["Towel", "Bathrobe", "Water Bottle"],
                  isOutdoors: true,
                  temperature: "Hot"
                },
                {
                  name: "Waterfall",
                  items: ["Camera", "Rain Poncho", "Mossy Rock"],
                  isOutdoors: true,
                  temperature: "Cold"
                }

              
];

class Location{

    constructor(){
        this.name = "Woods";
    }
    
    
}