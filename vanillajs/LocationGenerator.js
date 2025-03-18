class LocationGenerator{
    constructor(){
        this.possibleLocations = [
            {
                name: "Airport",
                items: ["Boarding Pass", "Luggage Tag", "Pillow", "Headphones", "Passport", "Suitcase", "Postcard"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Apartment Complex",
                items: ["Rusty Key", "Rent Notice", "Door Mat", "Frisbee", "Nameplate"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Attic",
                items: ["Old Boxes", "Cobwebs", "Trunk", "Rusty Nail", "Mousetrap"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Bank",
                items: ["ATM", "Teller Window", "Vault", "Receipt", "Deposit Slip", "Checkbook", "Coin", "Pen"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Basement",
                items: ["Cobweb", "Rusty Nail", "Dusty Box", "Lightbulb", "Rusty Key"],
                isOutdoors: false,
                temperature: "Cold"
            },
            {
                name: "Bathroom",
                items: ["Toothbrush", "Soap Bar", "Cotton Swab", "Hairpin", "Toothpaste"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Beach",
                items: ["Seashell", "Driftwood", "Pebble", "Sunscreen Packet", "Bottle Cap", "Umbrella", "Seagull", "Crab"],
                isOutdoors: true,
                temperature: "Hot"
            },
            {
                name: "Bedroom",
                items: ["Bookmark", "Pillow", "Alarm Clock Battery", "Lip Balm", "Pair of Socks", "Bed", "Nightstand"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Bistro",
                items: ["Sugar Packet", "Napkin", "Cork", "Butter Knife", "Menu", "Small Tables", "Wine Glasses", "Cheese Platter"],
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
                items: ["Napkin", "Spoon", "Salt Packet", "Toothpick", "Plastic Cup", "Serving Tray", "Plate", "Heat Lamp"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Bus Stop",
                items: ["Ticket Stub", "Coin", "Flyer", "Chewing Gum Wrapper", "Keychain", "Bench", "Map", "Bus Sign"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Campsite",
                items: ["Matchstick", "Tent Peg", "Marshmallow", "Compass", "Flashlight", "Tent", "Campfire", "Sleeping Bag", "Map"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Canyon",
                items: ["Pebble", "Lizard", "Feather", "Dried Leaf", "Small Bone", "Map", "Signpost", "Water Bottle"],
                isOutdoors: true,
                temperature: "Hot"
            },
            {
                name: "Cave",
                items: ["Pebble", "Feather", "Glow Worm", "Moss", "Broken Stalactite", "Bat", "Lizard"],
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
                items: ["Feather", "Pebble", "Dried Grass", "Shell", "Loose Soil", "Sharp Rock", "Seagull"],
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
                items: ["Pinecone", "Acorn", "Mushroom", "Feather", "Twig"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Garage",
                items: ["Wrench", "Oil Rag", "Flashlight", "Toolbox", "Workbench", "Lighter"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Garden",
                items: ["Petal", "Trowel", "Packet of Seeds", "Flower", "Fountain", "Butterfly"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Gas Station",
                items: ["Receipt", "Air Gauge", "Energy Drink", "Wrench", "Oil Rag", "Flashlight"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Gym",
                items: ["Jump Rope", "Water Bottle", "Sweatband", "Backpack", "Towel"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Hallway",
                items: ["Keychain", "Notebook", "Pen", "Lanyard", "Postcard"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "High School",
                items: ["Textbook", "Pencil", "Desk", "Notebook", "Backpack", "Ruler", "Compass"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Hilltop",
                items: ["Leaf", "Feather", "Smooth Stone", "Acorn", "Pebble"],
                isOutdoors: true,
                temperature: "Cold"
            },
            {
                name: "Hospital",
                items: ["Thermometer", "Syringe", "Bandage", "Bed", "Stethiscope", "Bedpad"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Hotel",
                items: ["Keycard", "Mini Shampoo Bottle", "Notepad", "Suitcase", "Bellhop", "Bed"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Kitchen",
                items: ["Wooden Spoon", "Measuring Cup", "Oven Mitt", "Oven", "Fridge", "Sink"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Lake",
                items: ["Skipping Stone", "Fishing Pole", "Duck Feather", "Lilypad", "Tackle Box"],
                isOutdoors: true,
                temperature: "Cold"
            },
        
            {
                name: "Laundromat",
                items: ["Detergent Bottle", "Coin", "Clothespin", "Flyer", "Lost Sock", "Dryer Sheet"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Library",
                items: ["Bookmark", "Notebook", "Reading Glasses", "Library Card", "Pencil"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Living Room",
                items: ["Remote Control", "Throw Pillow", "Magazine", "Sofa", "Coffee Table", "Television", "Coaster"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Market",
                items: ["Apple", "Cloth Bag", "Jar of Honey", "Receipt", "Bundle of Herbs"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Marsh",
                items: ["Reed", "Pebble", "Snail Shell", "Frog", "Signpost", "Lilypad"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Meadow",
                items: ["Daisy", "Feather", "Butterfly", "Wildflower", "Twig"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Mountain",
                items: ["Pinecone", "Small Rock", "Scarf", "Signpost", "Acorn"],
                isOutdoors: true,
                temperature: "Cold"
            },
            {
                name: "Museum",
                items: ["Ticket Stub", "Postcard", "Brochure", "Guidebook", "Coin"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Office",
                items: ["Pen", "Sticky Note", "Paper Clip", "Stapler", "USB Drive", "Newspaper"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Orchard",
                items: ["Apple", "Basket", "Leaf", "Twig", "Peach"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Pantry",
                items: ["Jar of Peanut Butter", "Packet of Pasta", "Salt Shaker", "Tea Bag", "Granola Bar"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Park",
                items: ["Frisbee", "Water Bottle", "Notebook", "Bench", "Signpost", "Leaf", "Acorn", "Squirrel"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Parking Garage",
                items: ["Key Fob", "Ticket Stub", "Flashlight", "Coin", "Receipt"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Pharmacy",
                items: ["Pill Bottle", "Bandages", "Thermometer", "Cotton Swab", "Cough Drop"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Pier",
                items: ["Seashell", "Rope", "Wooden Plank", "Fishing Pole", "Seagull"],
                isOutdoors: true,
                temperature: "Cold"
            },
            {
                name: "Pizzeria",
                items: ["Pizza Cutter", "Napkin", "Box of Pizza", "Menu", "Salt Packet"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Police Station",
                items: ["Handcuffs", "Notepad", "Badge", "Whistle", "Pen"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Post Office",
                items: ["Envelope", "Stamp", "Packing Tape", "Whistle", "Pen"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Power Plant",
                items: ["Wrench", "Safety Goggles", "Clipboard", "Gloves", "Flashlight"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Restaurant",
                items: ["Fork", "Menu", "Salt Shaker", "Table", "Waiter", "Napkin", "Receipt"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Riverbank",
                items: ["Skipping Stone", "Fishing Pole", "Leaf", "Pebble", "Duck", "Pebble", "Feather"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Ruins",
                items: ["Broken Brick", "Coin", "Carved Stone", "Fragment of Pottery", "Rusty Nail"],
                isOutdoors: true,
                temperature: "Cold"
            },
            {
                name: "Shopping Mall",
                items: ["Receipt", "Gift Card", "Shopping Bag", "Coupon", "Keychain"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Skyscraper",
                items: ["Keycard", "Business Card", "Notebook", "Sticky Note", "Newspaper"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Stadium",
                items: ["Ticket Stub", "Foam Finger", "Whistle", "Plastic Cup", "Confetti"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Steakhouse",
                items: ["Steak Knife", "Menu", "Salt Shaker", "Napkin", "Toothpick"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Supermarket",
                items: ["Grocery Bag", "Barcode Scanner", "Coupon", "Receipt", "Apple", "Peach", "Shopping List"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Sushi Bar",
                items: ["Sushi Roll", "Soy Sauce Packet", "Chopsticks", "Ginger Slice", "Napkin"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Swamp",
                items: ["Moss", "Frog", "Feather", "Reed", "Pebble"],
                isOutdoors: true,
                temperature: "Warm"
            },
        
        
            {
                name: "Theater",
                items: ["Playbill", "Mask", "Ticket Stub", "Feather Quill", "Script", "Prop Sword", "Spotlight", "Foldable Chair"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Trail",
                items: ["Leaf", "Pebble", "Compass", "Feather", "Backpack", "Walking Stick", "Water Bottle", "Signpost", "Map"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Train Station",
                items: ["Ticket Stub", "Luggage Tag", "Coin", "Map", "Postcard", "Luggage", "Bench"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "University",
                items: ["Textbook", "Laptop", "Notebook", "Desk", "Folding Chair"],
                isOutdoors: false,
                temperature: "Cool"
            },
            {
                name: "Valley",
                items: ["Hiking Boots", "Compass", "Binoculars", "Map", "Signpost"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Vineyard",
                items: ["Grape", "Wine Cork", "Leaf", "Tasting Spoon", "Bottle", "Basket", "Wine Glass", "Pruning Shears"],
                isOutdoors: true,
                temperature: "Warm"
            },
            {
                name: "Warehouse",
                items: ["Clipboard", "Flashlight", "Wrench", "Shipping Box", "Packing Tape", "Shipping Label", "Barcode Scanner"],
                isOutdoors: false,
                temperature: "Warm"
            },
            {
                name: "Warm Springs",
                items: ["Towel", "Bathrobe", "Water Bottle", "Coin", "Socks"],
                isOutdoors: true,
                temperature: "Hot"
            },
            {
                name: "Waterfall",
                items: ["Camera", "Rain Poncho", "Mossy Rock", "Map", "Feather"],
                isOutdoors: true,
                temperature: "Cold"
            }
        
        
        ];
    }

    getLocation(){
            let index = Math.floor(this.rng() * this.possibleLocations.length);
            let loc = new Location(this.possibleLocations[index]);
            this.possibleLocations.splice(index, 1); // delete that entire row of names
            return loc;
    }
}