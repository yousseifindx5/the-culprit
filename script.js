const SCENARIOS = {
    4:[
        {
            crime: "Someone stole Grandma Olivia's secret cookie recipe the night before the village baking contest.",
            roles: [
                {job: "The Delivery Guy"},
                {job: "The Neighborhood Gossip"},
                {job: "The Baker's Apprentice"},
                {job: "The Retired Librarian"}
            ],
            culprits: [2],
            clues: [
                "Clue #1: The kitchen window was left unlatched for about twenty minutes that evening, right when grandma stepped out to walk two different visitors to the gate.",
                "Clue #2: Whoever took the card would need to actually read grandma's hand writing, which is famously hard to decipher unless you have studied her notes before.",
                "Clue #3: The contest sign-up sheet, filled out earlier that week, lists one entrant whose listed specialty quietly changed overnight from 'basic loaves' to something far more abitious."
            ],
            story: "The baker's apprentice had quietly been studying Grandma's old recipe notes for months, waiting for a chance to get a clean look at the real thing. The unlatched window during the visitors' goodbyes was all the opening they neede."
        },
        {
            crime: "Mr. john's pet parrot kiwi was found mysteriously silent, someone fed it hot chili peppers as a prank.",
            roles:[
                {job: "The Landlord"},
                {job: "The Dog Walker"},
                {job: "The Food Blogger"},
                {job: "The Chess Club President"}
            ],
            culprits: [2],
            clues:[
                "Clue #1: The cage was accessible to anyone passing through the lobby that hour, but only one visitor signed the guestbook with a pen that later smelled faintly of hot spice",
                "Clue #2: A grocery receipt in the recycling shows a specialty spice purchase earlier that week, the cashier of the shop said that there were a dog following the culprit who bought it",
                "Clue #3: Days before the incident, someone had posted online about wanting to try something with pets and food that had 'never really been done before', without saying what."
            ],
            story: "The food blogger had been chaising a viral idea for weeks and decided a parrot 'taste test' would finally get them noticed. The spice receipt and vague online teaser both trace back to them."
        },
        {
            crime: "The office mini-fridge was raided overnight, someone ate james's very clearly labeled birthday cake slice",
            roles: [
                {job: "The It Technician"},
                {job: "The Accountant"},
                {job: "The Intern"},
                {job: "The Janitor"}
            ],
            culprits: [1],
            clues: [
                "Clue #1: Badge logs show two people entered after hours that night, but only one badge was used twice, once going in, once coming back roughly an hour later.",
                "Clue #2: The break room trash held a crumpled printout of spreadsheets, faintly stained with forsting.",
                "Clue #3: The next morning, while everyone else buzzed about the missing cake, one person seemed strangely unbothered by the whole thing."
            ],
            story: "The Accountant had been buried in month-end numbers, badged back in for one last look at their reports, and the clearly labeled cake became too tempting to resist along the way."
        },
        {
            crime: "Someone replaced all the sugar in the canteen with salt, every single coffee that morning tasted like a potato chips.",
            roles: [
                {job: "The Gym Instructor"},
                {job: "The Security Guard"},
                {job: "The Marketing Manager"},
                {job: "The Barista"}
            ],
            culprits: [0],
            clues: [
                "Clue #1: Whoever did it had to be in the building well before opening, the badge log shows one scan before 6:30 AM that doesn't match the Barista's usual early shift. ",
                "Clue #2: A half used bag of sugar was found in the marketing manager's bag.",
                "CLue #3: For weeks, someone had been dropping hints about wanting to fix everyone's diet, without ever saying how."
            ],
            story: "The Gym Instructor's wellness crusade finally went too far. the early badge scan gave away what their vague health rants had been building towards, however putting the sugar bag in the marketing manager bag was a nice try."
        },
        {
            crime: "The school's beloved class hamster, Mr.peanut, was found on the roof. Nobody knows how he got there.",
            roles: [
                {job: "The Art Teacher"},
                {job: "The Cafeteria Lady"},
                {job: "The School Janitor"},
                {job: "The Vice Principal"}
            ],
            culprits: [3],
            clues: [
                "Roof access needs a master key, and the sign out log shows it was taken out once that afternoon, under a signature too rushed to read",
                "The hamester cage was left propped exactly the way someone would leave it if they wanted it to look untouched. This is a habit associated with someone very particular about order.",
                "In the staff room, someone was overhead saying they were 'tired of that classroom chaos', though more than one staff member has said similar things before."
            ],
            story: "The Vice Principle Had reached their limit with Mr. Peanut's classroom escapes. The master key sign out and their well known obsession with tidiness were the threads that revealed him."
        },
        {
            crime: "Someone anonymously submitted a very embarrassing photo of the boss to the company newsletter, and it got published",
            roles: [
                {job: "The Graphic Designer"},
                {job: "The Receptionist"},
                {job: "The HR Manager"},
                {job: "The Sales Leader"}
            ],
            culprits: [3],
            clues: [
                "Clue #1: The photo's file properties shows that it was exported from a professional editing software, though a couple of people in the office have that software for unrelated reasons.",
                "Clue #2: The anonymous submission email was created the same day someone received unusally blunt feedback on their work.",
                "Clue #3: The photo carries a specific visual filter that needs a professional editor to deal with."
            ],
            story: "The Sales Leader got a job with higher salary and he had been stinging from the boss's harsh feedback all day. So he did that before he leaved the company."
        },
        {
            crime: "Someone ate all the pieces of Mama Emma's homemade tacos at the family reunion after the guests arrived",
            roles: [
                {job: "The Favourite Cousin"},
                {job: "The Uncle Who's Always Late"},
                {job: "The Neighbor Who Got Invited"},
                {job: "Mama Emma's Son"}
            ],
            culprits: [3],
            clues: [
                "Clue #1: The kitchen camera caught a hunched, fast moving figure near the fridge around noon, too blury to say much more.",
                "Clue #2: A phone case turned up later with a faint sauce smudge on it, though several people were holding phones that day.",
                "Clue #3: A food photo went up online that morning with suspiciously specific details about the taste, before anyone else had officially eaten."
            ],
            story: "Mama Emma's Son put the phone down just long enough for him to finish eating the delicious tacoos and hurry back again to document it, this post was the giveaway to catch him."
        },
        {
            crime: "Someone loosened all the screws on the office chair belonging to the team leader, causing a collapse during a meeting.",
            roles: [
                {job: "The Quiet Coder"},
                {job: "The Meeting Enthusiast"},
                {job: "The New Joiner"},
                {job: "The Always-On-Time Guy"}
            ],
            culprits: [1],
            clues: [
                "Clue #1: A small screwdriver was found in the meeting room, a common enough tool, but this one had a sticker from a stationery store only a couple of people in the office shop at.",
                "Clue #2: Someone stayed unusually late the night before, saying they wanted to 'tidy up' the meeting room for tomorrow.",
                "Clue #3: Weeks earlier, in a meeting, someone made an offhand comment about ideas being 'cut short too often', though it is a complaint more that one person has made."
            ],
            story: "The Meeting Enthusiast had one too many ideas cut off mid-sentence. Their late-night 'tidying' and the recognizable screwdriver sticker connected them to the scene."
        },
        {
            crime: "The building's elevator music was mysteriously replaced with very loud, dramatic opera, and nobody could figure out how to change it back.",
            roles: [
                {job: "The Building Manager"},
                {job: "The Opera Lover woman On Floor 7"},
                {job: "The IT Support Guy"},
                {job: "The Night Cleaner"}
            ],
            culprits: [3],
            clues: [
                "Clue #1: The music system's access code was entered correctly late Tuesday night, meaning whoever did it either knew the code or had seen it used before.",
                "Clue #2: A streaming playlist with an oddly specific, unrelated name was linked to an account on the building's shared network, though the account owner isn't listed anywhere obvious.",
                "Clue #3: A written complaint about the elevator music had been filed weeks earlier — though management says several tenants have complained about it over the years."
            ],
            story: "The Night cleaner loves the opera lover woman on floor seven, so he decided to change the music in the elevator when he listened to her complaining about the music in the elevator."
        },
        {
            crime: "Someone sent a company wide email from the CEO's account wishing everyone a 'Magical Monday' with three red heart emojis.",
            roles: [
                {job: "The IT Admin"},
                {job: "The Social Media Coordinator"},
                {job: "The Executive Assistant"},
                {job: "The Intern employee"}
            ],
            culprits: [3],
            clues: [
                "Clue #1: The email was sent from a session left logged in on a guest laptop, one that several people use throughout the day.",
                "Clue #2: A strikingly similar phrase turns up in an old, unrelated social media draft, though the account owner insists they never posted it.",
                "Clue #3: Whoever sent it needed about four unsupervised minutes near the laptop, a window that lines up with a short, unusually quiet stretch in the office that day."
            ],
            story: "The Intern employee found the CEO's laptop open during a coffee run and couldn't resist. The old draft phrase, dug up and reused without thinking, was what gave it away."
        }
    ],

    5:[
        {
            crime: "The company vending machine's snacks were mysteriously replaced with vegetables overnight.",
            roles: [
                {job: "The Officer Manager"},
                {job: "The Sales Rep"},
                {job: "The Part time Nutrition Coach"},
                {job: "The Weekend Security Guard"},
                {job: "The New Hire"}
            ],
            culprits: [2, 3],
            clues: [
                "Clue #1: The vending contractor confirms no delivery was scheduled that week, whoever restocked it used the machine's own key.",
                "Clue #2: Badge logs show two people entered together late sunday night, leaving again within minutes of each other.",
                "Clue #3: A gym membership receipt showing two people at the same discounted 'wellness partner' rate turned up in the recycling."
            ],
            story: "The Nutrition Coach had been pushing 'wellness initiative' for months and finally roped in the Security Guard, who had after hours key access, to make the swap themselves."
        },
        {
            crime: "The neighborhood's beloved fountain started spewing pink bubbles during the town festival.",
            roles: [
                {job: "The Town Mayor"},
                {job: "The Local Prankster"},
                {job: "The Plumber"},
                {job: "The Festival Organizer"},
                {job: "The Icecream Vendor"}
            ],
            culprits: [1, 3],
            clues: [
                "Clue #1: Buuble bath residue traces back to brand sold at one shop, whose receipt is timed suspiciously close to the festival setup.",
                "Clue #2: The fountain's maintenance panel was signed into twice that morning, though only one visit logged as official.",
                "Clue #3: A festival poster mockup found in the trash has a joke scribbled in the margin about 'surprise fountain fun', dated days before the event."
            ],
            story: "The Local Prankster wanted a stunt to boost festival buzz convinced the Festival Organizer, who had panel access, to help pull it off."
        },
        {
            crime: "All the office chairs were mysteriously swapped for tiny children's chairs overnight.",
            roles: [
                {job: "The Facilities Manager"},
                {job: "The HR Intern Employee"},
                {job: "The Late Night Cleaner"},
                {job: "The Marketing Director"},
                {job: "The IT Guy"}
            ],
            culprits: [0, 4],
            clues: [
                "Clue #1: Warehouse records show children's chairs were requested that week, approved under a smudged signature matching an order form only two departments can submit.",
                "Clue #2: Loading dock footage shows two people moving boxes after hours, though it's too dark to make out faces.",
                "Clue #3: An old office chat joke about 'downsizing the furniture budget' only got laughs from a couple of specific people in the thread."
            ],
            story: "The Facilities Manager and the IT Guy pulled off the ultimate April fool's prank, one had ordering access, the other quietly dimmed the loading dock cameras."
        },
        {
            crime: "Someone rearranged every book in the library into completely wrong genres overnight.",
            roles: [
                {job: "The Head Librarian"},
                {job: "The Study Group Leader"},
                {job: "The Part Time Shelver"},
                {job: "The Silent Reading Club President"},
                {job: "Campus Security"}
            ],
            culprits: [1, 2],
            clues: [
                "Clue #1: Sign out logs show one person stayed nearly three hours after closing, though that night's closing shift belonged to someone else entirely.",
                "Clue #2: A student forum post from a week earlier dares people to 'make the librarian's day interesting'.",
                "Clue #3: Several rearranged sections cluster suspiciously close to where regular study sessions happen, like two people moved efficiently through familiar ground."
            ],
            story: "The Study Group Leader posted the forum challenge as a joke, then talked the part time shelver, who had after hours access, into actually doing it."
        },
        {
            crime: "Every alarm clock in the dormitory was set exactly one hour early on the morning of finals.",
            roles: [
                {job: "The Resident Advisor"},
                {job: "The Late Sleeper Roommate"},
                {job: "The Dorm Prankster"},
                {job: "The Study Buddy"},
                {job: "The Front Desk Worker"}
            ],
            culprits: [2, 3],
            clues: [
                "Clue #1: The master key sign out sheet shows a key checked out overnight under a name smudged beyond the first two letters.",
                "Clue #2: A deleted group chat, recovered from a screenshot, shows two people planning something 'to make finals morning interesting'.",
                "Clue #3: "
            ],
            story: "The Dorm Prankster and the Study Buddy borrowed the master key from an unsuspecting friend at the front desk to prank the whole floor, except their own circle."
        },
        {
            crime: "The company softball team's uniforms were all dyed a garish shade of orange before the championship game.",
            roles: [
                {job: "The Team Captain"},
                {job: "The Rival Team Fan"},
                {job: "The Laundry Service Contact"},
                {job: "The Assistant Coach"},
                {job: "The Team Mascot Performer"}
            ],
            culprits: [1, 4],
            clues: [
                "Clue #1: The laundry service confirms the uniforms left clean and arrived dyed, the switch happened somewhere only staff, and one other person, had access to that day.",
                "Clue #2: A jersey in the same orange shade was found balled up in a gym bag that wasn't the Rival Team Fan's usual one.",
                "Clue #3: Someone in the mascot costume slipped away from their usual pre game spot for nearly twenty unaccounted minutes."
            ],
            story: "The Rival Team Fan bribed the Mascot Performer, who had backstage access near the laundry drop point, to pull off the swap before the big game."
        },
        {
            crime: "A giant inflatable dinosaur appeared on the roof of the community center overnight, blocking the solar panels.",
            roles: [
                {job: "The Community Center Manager"},
                {job: "The Local Handyman"},
                {job: "The Kid's Camp Counselor"},
                {job: "The Rooftop Access Technician"},
                {job: "The Neighborhood Watch Volunteer"}
            ],
            culprits: [2, 3],
            clues: [
                "Clue #1: The roof access log shows one technician badge used twice that night, once to open the hatch, once to close it two hours later.",
                "Clue #2: The dinosaur matches one reported 'missing' from the kids' camp storage unit earlier that week.",
                "Clue #3: A muddy, child sized footprint trail leads partway up the fire escape before disappearing, as if someone smaller was helped up, then carried the rest of the way."
            ],
            story: "The Camp Counselor wanted to prank the community center and talked the Rooftop Technician into helping haul the camp's own dinosaur up top."
        },
        {
            crime: "The office's motivational poster wall was replaced overnight with posters of extremely unmotivational, discouraging quotes.",
            roles: [
                {job: "The HR Coordinator"},
                {job: "The Print Shop Contact"},
                {job: "The Disgruntled Employee"},
                {job: "The Office Comedian"},
                {job: "The Facilities Assistant"}
            ],
            culprits: [2, 3],
            clues: [
                "Clue #1: A rush order for 'ironic' poster designs was placed on the company print account two days before the swap, logged in from a shared office computer.",
                "Clue #2: The wall mounting kit from the supply closet was signed out and never returned by closing time.",
                "Clue #3: One of the discouraging quotes is an inside joke from a specific team meeting the week before, attended by only a few employees."
            ],
            story: "The Office Comedian roped in the Disgruntled Employee, using the employee's supply closet access and the comedian's print account to pull it off."
        },
        {
            crime: "Every clock in the museum was set to a different random time, causing confusion for the scheduled tour groups.",
            roles: [
                {job: "The Museum Curator"},
                {job: "The Tour Guide"},
                {job: "The Security Officer"},
                {job: "The Gift Shop Cashier"},
                {job: "The Visiting Historian"}
            ],
            culprits: [1, 4],
            clues: [
                "Clue #1: The maintenance ladder needed to reach the clocks was found leaning in the east wing, off the usual tour route, but familiar to guides who lead special tours there.",
                "Clue #2: A staff sign in sheet shows someone lingering nearly an hour after their guided tour officially ended.",
                "Clue #3: The guest book has a note in careful cursive jocking about 'giving visitors a taste of the time travel', signed only with an initial shared by more than one staff member."
            ],
            story: "The Tour Guide and the Visiting Historian thought a 'time travel' surprise would delight that day's tours, they underestimated the chaos it would cause."
        },
        {
            crime: "The company's mascot costume went missing right before the big product launch, only to reappear covered in glitter at the after party.",
            roles: [
                {job: "The Event Planner"},
                {job: "The Costume Designer"},
                {job: "The Junior Marketing Associate"},
                {job: "The Warehouse Manager"},
                {job: "The DJ"}
            ],
            culprits: [0, 2],
            clues: [
                "Clue #1: Warehouse sign out records show the costume checked out under the Event Planner's name hours before launch, though they insist they were in meetings all day.",
                "Clue #2: Glitter matching the after party decorations was found in a car trunk parked near the warehouse that morning, a car registered to someone junior on the team.",
                "Clue #3: A deleted group chat shows two people coordinating a 'surprise entrance' for the after party."
            ],
            story: "The Junior Marketing Associate wanted a big after party moment and convinced the Event Planner to 'borrow' the costume early using their sign out privileges."
        }
    ],
    6:[
        {
            crime: "The charity bake sale table was found completely empty an hour before it even opened, with an \"IOU\" note taped to the sign.",
            roles: [
                {job: "The Receptionist"},
                {job: "The Warehouse Clerk"},
                {job: "The Finance Intern"},
                {job: "The Cafeteria Supervisor"},
                {job: "The Weekend Custodian"},
                {job: "The New Marketing Hire"}
            ],
            culprits: [1, 5],
            clues: [
                "Clue #1: Loading dock sign in shows two names entered within a minute of each other, well before the building officially opened.",
                "Clue #2: A trail of cookie crumbs leads from the sale table toward the parking lot, stopping near two different reserved spots.",
                "Clue #3: A group chat message from the night before jokes about 'getting first pick before the crowd', sent to a thread with only a couple of active numbers."
            ],
            story: "The New Marketing Hire wanted first pick of the treats and convinced the warehouse clerk, who had early dock access, to let them both in before opening."
        },
        {
            crime: "Every 'Employee of the Month' photo in the hallway was quietly swapped with a photo of a golden retriever.",
            roles: [
                {job: "The HR Manager"},
                {job: "The Office Photographer"},
                {job: "The IT Support Lead"},
                {job: "The Junior Analyst"},
                {job: "The Front Desk Guard"},
                {job: "The Facilities Coordinator"}
            ],
            culprits: [1, 3],
            clues: [
                "Clue #1: The photo frames require a special frame release tool, which was checked out from the supply room and not returned until the next afternoon.",
                "Clue #2: The dog photo's file metadata shows it was edited using the same software installed on a specific employee's work laptop.",
                "Clue #3: A late night badge scan shows someone in the hallway for nearly 45 minutes far longer than a normal walk through."
            ],
            story: "The Office Photographer thought it'd be a harmless gag and got the Junior Analyst, who'd borrowed the frame tool for a 'project', to help swap every photo."
        },
        {
            crime: "The community garden's prize winning pumpkin was found painted bright purple the morning of the harvest festival judging.",
            roles: [
                {job: "The Garden Club President"},
                {job: "The Rival Grower"},
                {job: "The Festival Judge's Assistant"},
                {job: "The Local Artist"},
                {job: "The Garden Volunteer"},
                {job: "The Farmers Market Vendor"}
            ],
            culprits: [1, 3],
            clues: [
                "Clue #1: The Paint matches a rare pigment sold at only one art supply shop, whose recent receipt shows a purchase timed days before the festival.",
                "Clue #2: The Garden's gate lock shows signs of being picked, a skill mentioned once in passing by someone who does craft projects on the side.",
                "Clue #3: A sketch of a 'purple pumpkin' concept was found crumpled in a nearby trash can, unsigned but drawn in a very distinctive style."
            ],
            story: "The Rival Grower, desperate to knock out the competition, convinced the Local Artist to 'improve' the pumpkin with their art supplies the night before judging."
        },
        {
            crime: "The office thermostat was mysteriously locked at a freezing 60 degree fehrenhite the day of the big client presentation.",
            roles: [
                {job: "The Building Engineer"},
                {job: "The Executive Assistant"},
                {job: "The Client Relations Manager"},
                {job: "The Summer Intern"},
                {job: "The Overheated Sales Rep"},
                {job: "The Office Plant Waterer"}
            ],
            culprits: [0, 4],
            clues: [
                "Clue #1: The thermostat's lock code was changed the night before, only accessible to whoever has building engineer credentials, or whoever borrowed them.",
                "Clue #2: Someone complained loudly for days about the office being 'way too hot to think straight', right up until the morning of the presentation.",
                "Clue #3: A maintenance request form was filed and quietly withdrawn a few hours later, under a signature that's hard to place."
            ],
            story: "The Overheated Sales Rep had been complaining for days and got the Building Engineer to 'fix' the temperature, permanently, and right before the worst possible moment."
        },
        {
            crime: "Every Whiteboard marker in the building was replaced with ones that only write in invisible ink.",
            roles: [
                {job: "The Office Supply Coordinator"},
                {job: "The Prankster Intern"},
                {job: "The Team Leader"},
                {job: "The Receptionist"},
                {job: "The Visiting Consultant"},
                {job: "The Janitor"}
            ],
            culprits: [0, 1],
            clues: [
                "Clue #1: The supply closet inventory log shows an unusual buulk order for 'novelty markers' placed under the standard restocking account.",
                "Clue #2: A shipping box for the invisible ink markers was found flattened in the recycling, addressed to someone's personal attention rather than the office in general.",
                "Clue #3: A prank supply website browsing history was found on a shared computer, timestamped a few days before the switch."
            ],
            story: "The Prankster Intern ordered the novelty markers online and got the Office Supply Coordinator, who could quietly slip them into normal restock, to make the switch."
        },
        {
            crime: "Someone replaced the entire company playlist with a two hour loop of one extremely repetitive jingle.",
            roles: [
                {job: "The Office Manager"},
                {job: "The Sound System Technician"},
                {job: "The Marketing Coordinator"},
                {job: "The Receptionist"},
                {job: "The Weekend Shift Lead"},
                {job: "The Jingle Composer's Friend"}
            ],
            culprits: [1, 5],
            clues: [
                "Clue #1: The sound system requires an admin login, last accessed late Friday evening by an account that's rarely used on weekends.",
                "Clue #2: The jingle in question turns out to be from unreleased ad campaign, something only a small circle would even hace access to.",
                "Clue #3: A voicemail joke was found on the office phone system, someone laughing about wanting to 'get this song stuck in everyone's head'."
            ],
            story: "The Jingle Composer's Friend wanted everyone to hear the unreleased creation and convinced the Sound Technician, who had admin access, to loop it all weekend."
        },
        {
            crime: "The school trophy case was found rearranged so the smallest, least impressive trophy sat proudly in the center spotlight.",
            roles: [
                {job: "The Athletic Director"},
                {job: "The Yearbook Photographer"},
                {job: "The Head Custodian"},
                {job: "The Class President"},
                {job: "The Chess Club Captain"},
                {job: "The Substitute Teacher"}
            ],
            culprits: [3, 4],
            clues: [
                "Clue #1: The trophy case key is normally kept in the front office, but was signed out for 'inventory purposes' the afternoon before the rearrangement.",
                "Clue #2: The smallest trophy happens to belong to a club that rarely gets my recognition, moved to the most prominent spot in the whole case.",
                "Clue #3: A yearbook draft caption was found nearby, joking about 'finally giving someone their moment', written in handwriting that doesn't match the photographer's usual notes."
            ],
            story: "The Chess Club Captain, tired of being overlooked,convinced the Class President to sign out the case key and give the club's trophy it's well deserved spotlight."
        },
        {
            crime: "All the 'reserved parking' signs in the office lot were quietly swapped, so the CEO's spot now says 'Compact Cars Only'.",
            roles: [
                {job: "The Facilities Manager"},
                {job: "The CEO's Driver"},
                {job: "The Sign Shop Contact"},
                {job: "The Parking Attendant"},
                {job: "The Junior Executive"},
                {job: "The Delivery Coordinator"}
            ],
            culprits: [2, 4],
            clues: [
                "Clue #1: The sign shop's order history shows a rush job for replacement signage under a personal account rather than the usual facilities one.",
                "Clue #2: The Original 'Reserved' sign was found propped in a supply closet, not thrown away, as if whoever took it planned to put it back eventually.",
                "Clue #3: Someone was overheard grumbling for weeks about never getting decent parking despite 'doing just as much work as anyone with a reserved spot'."
            ],
            story: "The Junior Executive, sick of hunting for parking, had to sign shop contact quietly print a replacement sign, planning to swap it back before anyone noticed."
        },
        {
            crime: "Someone snuck into the office overnight and rearranged an entire wall of framed cerrificates into an unmistakable smiley face pattern.",
            roles: [
                {job: "The HR Director"},
                {job: "The Facilities Assistant"},
                {job: "The New Team Member"},
                {job: "The Office Prankster"},
                {job: "The Late Shift Security Guard"},
                {job: "The Building Manager"}
            ],
            culprits: [3, 4],
            clues: [
                "Clue #1: Security footage shows the hallway lights flicked on for nearly an hour overnight, an unusually long time for a routine patrol.",
                "Clue #2: A hand drawn smiley face sketch, matching the exact certificate arrangement, was found in a desk drawer belonging to someone known for doodling during meetings.",
                "Clue #3: The night guard's shift log has an unexplained gap of about fifty minutes with no recorded rounds."
            ],
            story: "The office prankster sketched out the smiley face plan for fun and talked the late shift guard into talking an extended 'break' to help pull it off."
        },
        {
            crime: "The break room's coffe machine started dispensing strong, borderline undrinkable coffe, and nobody could figure out why.",
            roles: [
                {job: "The Office Manager"},
                {job: "The Maintenance Contractor"},
                {job: "The Coffee Enthusiast Employee"},
                {job: "The New Hire"},
                {job: "The Break Room Regular"},
                {job: "The Vending Machine Technician"}
            ],
            culprits: [2, 5],
            clues: [
                "Clue #1: The machine's settings were changed through a technician level menu that requires a special access coed, last used outside a scheduled maintenance visit.",
                "Clue #2: A bag of unusually strong specialty coffe beans, not the office's usual brand, was found trucked behind the break room supplies.",
                "Clue #3: Someone had been complaining for weeks that the office coffee was 'basically flavored water' and needed a serious upgrade."
            ],
            story: "The Coffee Enthusiast Employee couldn't take the weak coffee anymore and convinced the Vending Machine Technician to quietly recalibrate the machine with stronger beans."
        }
    ],
    7:[
        {
            crime: "The office's annual holiday party budget mysteriously vanished, leaving only a sad veggie tray and a karaoke machine with no songs loaded.",
            roles: [
                {job: "The Finance Manager"},
                {job: "The Event Planning Committee Head"},
                {job: "The Catering Contact"},
                {job: "The DJ Booking Coordinator"},
                {job: "The Office Manager"},
                {job: "The Junior Accountant"},
                {job: "The Enthusiastic Volunteer"}
            ],
            culprits: [1, 2, 5],
            clues: [
                "Clue #1: The catering invoice was quietly downgraded three weeks before the party, approved by a signature that doesn't match the usual budget sign off process.",
                "Clue #2: A separate, unrelated 'team retreat' expense was approved the same week the party budget shrank, filled under a category nobody remembers creating.",
                "Clue #3: Three people were seen having a long, hushed conversation in the break room right after the original budget was announced, going quiet whenever someone walked by."
            ],
            story: "The Committee Head, the Catering Contact, and the Enthusiastic Volunteer quietly redirected the party funds toward a 'team retreat' none of them had actually cleared with anyone else."
        },
        {
            crime: "The community pool's diving board was found wrapped entirely in bubble wrap the morning of the swim meet.",
            roles: [
                {job: "The Pool Manager"},
                {job: "The Head Lifeguard"},
                {job: "The Rival Team Coach"},
                {job: "The Concession Stand Worker"},
                {job: "The Pool Maintenance Tech"},
                {job: "The Swim Team Captain"},
                {job: "The Parent Volunteer"}
            ],
            culprits: [2, 4, 6],
            clues: [
                "Clue #1: The maintenance shed, where the bubble wrap is normally stored for equipment shipping, was accessed after hours using a code only a couple of people outside staff would know.",
                "Clue #2: A rival team jacket was spotted draped over a pool chair early that morning, though the rival team wasn't scheduled to arrive for hours.",
                "Clue #3: Three poeple were seen leaving the venue together very late the night before, laughing about somehting none of them would explain."
            ],
            story: "The Rivla Coach  convinced the Maintenance Tech and a Parent volunteer sympathetic to the rival team to wrap the board, hoping to rattle the home team before the meet."
        },
        {
            crime: "Someone replaced every 'Wet Floor' sign in the mall with signs reading 'Beware of Dragons'.",
            roles: [
                {job: "The Mall Security Guard"},
                {job: "The Print Shop Employee"},
                {job: "The Novelty Store Owner"},
                {job: "The Janitorial Staff Lead"},
                {job: "The Mall Manager's Assistant"},
                {job: "The Food Court Regular"},
                {job: "The Teen Volunteer Group Leader"}
            ],
            culprits: [1, 2, 6],
            clues: [
                "Clue #1: The dragon sign design matches a font and layout only available through one secific print shop account, accessed after normal business hours.",
                "Clue #2: A batch of novelty 'dragon warning' merchandise had recently gone on clearance at a nearby shop, several of which are now missing from inventory.",
                "Clue #3: A group of teenagers was seen giggling near the escalators that morning, holding what looked like rolled up posters."
            ],
            story: "The Teen Volunteer Group Leader talked the Print Shop Employee and the Novelty Store Owner into the prank as a send off before summer break ended."
        },
        {
            crime: "The office break room fridge was found compleatly rearranged, with very single item labeled with someone else's name.",
            roles: [
                {job: "The Office Manager"},
                {job: "The HR Generalist"},
                {job: "The IT Support Tech"},
                {job: "The Marketing Associate"},
                {job: "The Sales Coordinator"},
                {job: "The Facilities Assistant"},
                {job: "The New Hire"}
            ],
            culprits: [3, 4, 6],
            clues: [
                "Clue #1: The label marker was signed out from the supply closet the night before and returned with an almost empty tape cartridge.",
                "Clue #2: Someone had been complaining for weeks about people 'stealing' unlabeled lunches from the fridge.",
                "Clue #3: Three desks near each other were seen with printed sheets of names and label templates, later found crumpled in a shared trash bin."
            ],
            story: "The Marketing Associate, fed up with lunch theft, enlisted the sales coordinator and the new hire to relabel everything as an ironic 'lesson'."
        },
        {
            crime: "A giant hand painted banner reading 'Congrats On Nothing!' appeared over the school's main entrance the morning after finals.",
            roles: [
                {job: "The Student Council President"},
                {job: "The Art Teacher"},
                {job: "The Head Custodian"},
                {job: "The Yearbook Editor"},
                {job: "The Senior Class Prankster"},
                {job: "The Guidance Counselor"},
                {job: "The Substitute Teacher"}
            ],
            culprits: [3, 4, 6],
            clues: [
                "Clue #1: The banner materials matches a leftover roll from the yearbook photography backdrop, signed out of storage but never logged as returned.",
                "Clue #2: The ladder needed to hang it that high was found leaning against the building, borrowed from a supply closet only a couple of staff have keys to.",
                "Clue #3: Three people were spotted on campus unusually early that morning, well before the first bell, carrying rolled up material between them."
            ],
            story: "The Senior Class Prankster convinced the Yearbook Editor to suppply the material and got a substitude unfamiliar with the rules to unknowingly hold the ladder steady."
        },
        {
            crime: "The neighborhood block party's sound system started blasting a cryptic countdown timer instead of the planned music playlist.",
            roles: [
                {job: "The Block Party Organizer"},
                {job: "The Local DJ"},
                {job: "The Teenager With The AUX Cord"},
                {job: "The Neighborhood watch the captain"},
                {job: "The Food Truck Owner"},
                {job: "The Kids' Game Coordinator"},
                {job: "The New Neighbor"}
            ],
            culprits: [1, 2, 6],
            clues: [
                "Clue #1: The sound system's playlist app shows it was accesses from a phone that briefly connected via a shared password, one that only a couple of people at the party knew.",
                "Clue #2: The countdown audio file matches a sound effect from a video everyone at the party had seen shared online days earlier.",
                "Clue #3: Three people were seen huddled around a phone near the speakers minutes before the music cut out, quickly stepping away when someone approached."
            ],
            story: "The Teenager, the Local DJ and the New Neighbor thought a mysterious countdown would be a fun surprise for everyone, they hadn't planned what to do once it actually hit zero."
        },
        {
            crime: "The office's 'Suggestion Box' was found stuffed entirely with suggestion for a company wide four day work week.",
            roles: [
                {job: "The HR Director"},
                {job: "the Office Manager"},
                {job: "The Junior Developer"},
                {job: "The Senior Developer"},
                {job: "The Marketing Leader"},
                {job: "The Receptionist"},
                {job: "The Intern"}
            ],
            culprits: [2, 3, 6],
            clues: [
                "Clue #1: The handwriting on most of the suggestion cards is suspiciously similar, despite claiming to be from different departments.",
                "Clue #2: A shared document titled 'Operation Four Day Week' was found on the office network, edited by three different accounts over the same weekend.",
                "Clue #3: Three people were seen staying unusually late one evening, taking turns at the suggestion box when they thought no one was watching."
            ],
            story: "The two Developers and the Intern coordinated the campaign together, filling the box themselves to make their four day week pitch like overwhelming company support."
        },
        {
            crime: "The community theater's costume closet was found completely rearranged, with every costume mislabeled for the wrong show entirely.",
            roles: [
                {job: "The Theater Director"},
                {job: "The Custom Designer"},
                {job: "The Stage Manager"},
                {job: "The Lead Actor"},
                {job: "The Backstage Volunteer"},
                {job: "The Set Designer"},
                {job: "The Understudy"}
            ],
            culprits: [4, 5, 6],
            clues: [
                "Clue #1: The custume closet key, usually kept with the Custume Designer, wa signed out under a note that just says 'borrowed for inventory'.",
                "Clue #2: A backstage joke had been circulating for days about how 'nobody would notice' if the labels got mixed up before opening night.",
                "Clue #3: Three people were seen lingering in the closet well after the rest of the crew had gone home for the night."
            ],
            story: "The understudy, tired feeling of overlooked, convinced the Backstage Volunteer and the set Designer to help pull the prank, a little chaos felt like the only way to get noticed."
        },
        {
            crime: "The office's entire supply of sticky notes was replaced with ones that say 'This is fine' in tiny print, in every color.",
            roles: [
                {job: "The Office Supply Coordinator"},
                {job: "The Graphic Designer Intern"},
                {job: "The Team Lead"},
                {job: "The Customer Support Rep"},
                {job: "The IT Administrator"},
                {job: "The Print Shop Liaison"},
                {job: "The New Employee"}
            ],
            culprits: [1, 5, 6],
            clues: [
                "Clue #1: The print shop's order history shows a custom sticky note design submitted under a personal account.",
                "Clue #2: The design file was created using a template only available to someone with graphic design software access.",
                "Clue #3: Three people were overhead joking in the break room about how 'accurate' the new notes felt for the week everyone was having."
            ],
            story: "The Graphic Design Intern designed the notes as a joke, the print shop liaison quietly rushed the order through, and the new employee, eager to fit in, helped distribute them everywhere."
        },
        {
            crime: "The gym's entire rack of dumbbells was found rearranged it randomly instead of arranging it from the lightest to heaviest",
            roles: [
                {job: "The Gym Owner"},
                {job: "The Personal Trainer"},
                {job: "The Front Desk Staff"},
                {job: "The Overnight Cleaning Crew Lead"},
                {job: "The Regular Member With Too Much Time"},
                {job: "The New Trainer"},
                {job: "The Equibment Supplier Rep"}
            ],
            culprits: [4, 5, 6],
            clues: [
                "Clue #1: Gym access logs show three separate check ins well after closing time, all within a narrow window of each other.",
                "Clue #2: A gym social media account had been playfully teasing an 'organization glow up' for the equipment area for days beforehand.",
                "Clue #3: The rearrangement follows an oddly specific color logic that matches a diagram once shared in the gym's group chat as a joke."
            ],
            story: "The Regular Member's joke diagram became a real plan once the New Trainer and the Supplier Rep, both looking for a laugh after hours, decided to actually make it happen."
        }
    ],
    8:[
        {
            crime: "The company's annual awards cermony trophies were all found melted down into one giant, shapeless blob of metal overnight.",
            roles: [
                {job: "The CEO's Assistant"},
                {job: "The Facilities Director"},
                {job: "The Trophy Vendor Rep"},
                {job: "The HR Coordinator"},
                {job: "The Overnight Security Leader"},
                {job: "The Metalworking Hobbyist Employee"},
                {job: "The Awards Committee Member"},
                {job: "The Junior Designer"}
            ],
            culprits: [1, 5, 6],
            clues: [
                "Clue #1: The building's industrial workshop, rarely used outside scheduled projects, shows signs of recent activity logged under a maintenance request that was never actually filed.",
                "Clue #2: A hobbyist welding kit, not standard commpany equipment, was found tucked behind supplies in a storage closet with restricted access.",
                "Clue #3: Three people were seen carrying a heavy, covered box toward the workshop late one evening, laughing about 'finally getting creative'."
            ],
            story: "The Metalworking Hobbyist, backed by the Facilities Director's workshop access and the Awards Committee Member's frustration with the boring trophy design, decided to 'reimagine' them entirely."
        },
        {
            crime: "The neighborhood's community garden sign was replaced overnight with one reading 'Property of the raccoons now'.",
            roles: [
                {job: "The Garden Committee Chair"},
                {job: "The Local Handyman"},
                {job: "The Sign Painter"},
                {job: "The Neighborhood Kid"},
                {job: "The Retired Teacher"},
                {job: "The Wildlife Enthusiast"},
                {job: "The New Resident"},
                {job: "The HOA Representative"}
            ],
            culprits: [2, 3, 5],
            clues: [
                "Clue #1: The sign's paint matches a set recently donated to the neighborhood kids' art club, several cans of which are now unaccounted for.",
                "Clue #2: A trail of small footprints leads from the garden shed to the sign post, alongside slightly larger adult sized ones.",
                "Clue #3: Three people were seen huddled around a sketchbook at the park the day before, giggling about raccoons for reasons nobody else understood."
            ],
            story: "The wildlife Enthusiast's raccoon obsession inspired the Neighborhood Kid, and the Sign Painter agreed to help make the joke sign look official."
        },
        {
            crime: "The office's entire fleet of company cars was found parked in a perfect circle in the lot, facing inward like a wagon train.",
            roles: [
                {job: "The Fleet Manager"},
                {job: "The Security Guard"},
                {job: "The Delivery Driver"},
                {job: "The Office Manager"},
                {job: "The Weekend Shift Supervisor"},
                {job: "The Maintenance Tech"},
                {job: "The New Driver"},
                {job: "The Dispatch Coordinator"}
            ],
            culprits: [0, 2, 6],
            clues: [
                "Clue #1: ALl the car keys were checked out from the lockbox using a master code, logged under a name that doesn't match the weekend schedule.",
                "Clue #2: Tire tracks in the lot show a slow, deliberate arrangement pattern rather than a rushed parking job.",
                "Clue #3: Three people were seen at the lot well after their shifts had technically ended, standing around laughing at something on a phone screen"
            ],
            story: "The Fleet Manager thought it'd make a funny photo for the office chat, and got the Delivery Driver and New Driver, both still hanging around after their shift, to help arrange it."
        },
        {
            crime: "The School cafeteria's lunch menu board was rewritten entirely in a mysterious code that took the staff all morning to decipher.",
            roles: [
                {job: "The Cafeteria Manager"},
                {job: "The Math Teacher"},
                {job: "The Computer Club Advisor"},
                {job: "The Student Council Secretary"},
                {job: "The Head Custodian"},
                {job: "The Chess Club Member"},
                {job: "The Substitute Teacher"},
                {job: "The Yearbook Photographer"}
            ],
            culprits: [1, 2, 5],
            clues: [
                "Clue #1: The code used matches a cipher taught in an advanced elective, one only offered to a small number of students and staff.",
                "Clue #2: A whiteboard in an empty classroom was found with practice versions of the code, only partially erased.",
                "Clue #3: Three people were seen huddled around a laptop in the library the day before, occasionally glancing toward the cafeteria."
            ],
            story: "The Computer Club Advisor taught the cipher as an elective challenge, and the Chess Club Member and Math Teacher decided to actually use it, just to see if anyone could crack it."
        },
        {
            crime: "The office's break room refrigerator started playing a looping recording of ocean waves time the door opened.",
            roles: [
                {job: "The IT Support Specialist"},
                {job: "The Office Manager"},
                {job: "The Facilities Technician"},
                {job: "The Wellness Committee Lead"},
                {job: "The Marketing Associate"},
                {job: "The Receptionist"},
                {job: "The New Intern"},
                {job: "The Building Electrician"}
            ],
            culprits: [0, 3, 7],
            clues: [
                "Clue #1: A small speaker and motion sensor, not standard fridge equipment, were found wired in behind the appliance, the wiring work is clearly professional.",
                "Clue #2: The audio file used matches a track from a 'relaxation and mindfulness' playlist promoted in a recent wellness newsletter.",
                "Clue #3: Three people were seen testing something near the fridge with a laptop open, quickly closing it and walking away when someone entered."
            ],
            story: "The wellness Committee Lead wanted to bring calm to the break room and got the IT Specialist and Building ELectrician to rig up the surprise soundscape."
        },
        {
            crime: "The local library's returns bin was found completely full of stuffed animals instead of books, with a note reading 'Reading is for the birds'.",
            roles: [
                {job: "The Head Librarian"},
                {job: "The Children's Section Volunteer"},
                {job: "The Library Board Member"},
                {job: "The After School Program Coordinator"},
                {job: "The Book Club Leader"},
                {job: "The Local Toy Store Owner"},
                {job: "The Teen Volunteer"},
                {job: "The Retired Librarian"}
            ],
            culprits: [1, 3, 6],
            clues: [
                "Clue #1: The stuffed animals match a batch recently donated by a local business for an upcoming children's event, several boxes short of the original count.",
                "Clue #2: The returns bin's lock, usually only opened during staffed hours, shows signs of being propped open rather than properly unlocked.",
                "Clue #3: Three people were seen giggling near the storage room the afternoon before, carrying an unusually bulky bag between them."
            ],
            story: "The After School Coordinator, prepping for the children's event, let the Teen Colunteer and Children's Section Volunteer talk her into an early 'perview' prank."
        },
        {
            crime: "The gym's locker room speakers started playing nothing but extremely dramatic orchestral music, turning every workout into an action movie montage.",
            roles: [
                {job: "The Gym Manager"},
                {job: "The Personal Trainer"},
                {job: "The Front Desk Staff"},
                {job: "The Sound System Vendor"},
                {job: "The Regular Member"},
                {job: "The Overnight Cleaning Crew"},
                {job: "The New Employee"},
                {job: "The Yoga Instructor"}
            ],
            culprits: [1, 4, 6],
            clues: [
                "Clue #1: The playlist was uploaded using vendor level system access, granted temporarily for a routine maintenance visit that ended days earlier.",
                "Clue #2: A gym social media post from days before jokes about wanting the place to 'feel more like a movie'.",
                "Clue #3: Three people were seen testing something on a laptop near the sound booth, laughing and quickly minimizing the screen when staff walked by."
            ],
            story: "The Regular Member's joke about 'movie gym' became real once the Personal Trainer and New Employee, still holding onto the vendor's temporary access, decided to make it happen."
        },
        {
            crime: "Every 'Do Not Disturb' sign in the office was quietly replaced with ones reading 'Currently Napping, Please Whisper'.",
            roles: [
                {job: "The Officer Manager"},
                {job: "The Print Shop Liaison"},
                {job: "The Facilities Assistant"},
                {job: "The HR Coordinator"},
                {job: "The Sleep Deprived New Parent Employee"},
                {job: "The Graphic Designer"},
                {job: "The Receptionist"},
                {job: "The Weekend Shift Lead"}
            ],
            culprits: [1, 4, 5],
            clues: [
                "Clue #1: The new sign design was submitted to the print shop under a personal account rather than the usual facilities request process.",
                "Clue #2: A design draft matching the new signs was found saved on a shared computer, created using professional design software.",
                "Clue #3: Three people were overhead joking sympathetically about someone's rough sleep schedule earlier that same week."
            ],
            story: "The Sleep Deprived New Parent joked about wanting a 'nap sign' for their door, and the Graphic Designer and Print Shop Liaison decided to make it a reality for the whole office."
        },
        {
            crime: "The town's annual pie eating contest podium was found decorated entirely in miniature trophies for made up categories like 'Most Enthusiastic Chewing'.",
            roles: [
                {job: "The Festival Committee Chair"},
                {job: "The Trophy Shop Owner"},
                {job: "The Local Radio Host"},
                {job: "The Contest Judge"},
                {job: "The Bakery Owner"},
                {job: "The Volunteer Coordinator"},
                {job: "The High School Student"},
                {job: "The Town Photographer"}
            ],
            culprits: [1, 2, 6],
            clues: [
                "Clue #1: The trophy shop's order records show a rush batch of joke trophies ordered under a personal request rather than the festival's official order.",
                "Clue #2: A local radio segment from the week before jokingly proposed exactly these categories as 'what the contest is really missing'.",
                "Clue #3: Three people were seen setting up near the podium unusually early, well before the festival volunteers' scheduled arrival."
            ],
            story: "The Radio Host's joke segment inspired the Trophy Shop Owner to actually make them, and the school Mascot, always up for chaos in costume, helped set them up before anyone arrived."
        },
        {
            crime: "The office parking garage's elevator started annouuncing each floor in an exaggerated dramatic movie trailer voice.",
            roles: [
                {job: "The Building Manager"},
                {job: "The Elevator Maintenance Tech"},
                {job: "The IT Administrator"},
                {job: "The Voiceover Hobbyist Employee"},
                {job: "The Security Guard"},
                {job: "The Office Manager"},
                {job: "The Weekend Shift Worker"},
                {job: "The New Employee"}
            ],
            culprits: [1, 3, 7],
            clues: [
                "Clue #1: The elevator's audio system requires technician level access, briefly granted during a scheduled maintenance visit that ended the same week.",
                "Clue #2: The dramatic voice recording matches a demo reel previously shared informally in an office chat as a joke.",
                "Clue #3: Three people were seen testing something near the elevator control panel with a laptop, quickly stepping away when the doors opened unexpectedly."
            ],
            story: "The Voiceover Hobbyist recorded the demo as a joke, and the Maintenance Tech, aided by the New Employee eager to be part of the fun, actually installed it during the scheduled visit."
        }
    ],
    9:[
        {
            crime:"The office's rooftop garden was found completely rearranged overnight into an elaborate maze pattern, with several prize tomato plants relocated.",
            roles:[
                {job: "The Facilities Director"},
                {job: "The Office Manager"},
                {job: "The Gardening Club president"},
                {job: "The IT Support Tech"},
                {job: "The Weekend Security Guard"},
                {job: "The Marketing Coordinator"},
                {job: "The Landscaping Contractor"},
                {job: "The Junior Analyst"},
                {job: "The New Hire"}
            ],
            culprits: [2, 6, 7],
            clues: [
                "Clue #1: The rooftop access log shows three separate entries within the same hour on saturday, well outside the garden club's usual schedule.",
                "Clue #2: The maze layout closely resembles a sketch pinned to the gardening club's bulletin board weeks earlier, credited only with initials.",
                "Clue #3: A landscaping company's spare tools were found left behind near the relocated planters, checked out under a name that doesn't match their usual crew roster."
            ],
            story: "The Gardening Club President had sketched the maze as a dream project, and the Landscaping Contractor and Junior Analyst, both club members on the side, decided to just go for it one weekend."
        },
        {
            crime:"Every clock in the town hall was found running exactly thirteen minutes fast, causing half the town's meetings to start early and confused.",
            roles:[
                {job: "The Town Clerk"},
                {job: "The Building Maintenance Lead"},
                {job: "The Mayor's Assistant"},
                {job: "The Local Watchmaker"},
                {job: "The Front Desk Receptionist"},
                {job: "The Council Member"},
                {job: "The Records Archivist"},
                {job: "The Intern"},
                {job: "The Security Guard"}
            ],
            culprits: [1, 3, 7],
            clues: [
                "Clue #1: The clock mechanisms require specialized tools, only a couple of which are known to exist in town, one belonging to a local shop.",
                "Clue #2: A maintenance request for 'clock calibration' was filed and then quietly withdrawn just days before the discrepancy was noticed.",
                "Clue #3: Three people were seen carrying a toolbox through the town hall after hours, joking about'fixing time itself'."
            ],
            story: "The Watchmaker, called in informally by the maintenance Lead, brought the Intern along to help, and in a moment of overconfidence, 'improved' the clocks a little too enthusiastically."
        },
        {
            crime:"The community pool's changing rooms were found stocked entirely with rubber ducks instead of towels the morning of the swim meet.",
            roles:[
                {job: "The Pool Manager"},
                {job: "The Head Lifeguard"},
                {job: "The Concession Worker"},
                {job: "The Swim Team Parent"},
                {job: "The Pool Supply Vendor"},
                {job: "The Assistant Coach"},
                {job: "The Maintenance Tech"},
                {job: "The Front Desk Staff"},
                {job: "The Teen Volunteer"}
            ],
            culprits: [3, 5, 8],
            clues: [
                "Clue #1: The supply closet, normally locked outside business hours, shows signs of being accessed with a spare key kept off the official log.",
                "Clue #2: A bulk rubber duck order, hundrends of units, was delivered to a personal address matching someone connected to the swim team.",
                "Clue #3: Three people were seen unloading boxes from a car trunk very early that morning, well before the pool's usual opening staff arrived."
            ],
            story: "The Swim Team Parent ordered the ducks as a 'team spirit' surprise, and the Assistant Coach and a Teen Volunteer helped haul them in before the meet."
        },
        {
            crime:"The office elevator was stuck playing an endless loop of smooth jazz elevator music remixed with airborn sound effects.",
            roles:[
                {job: "The Building Manager"},
                {job: "The IT Administrator"},
                {job: "The Sound System Vendor"},
                {job: "The Marketing Intern"},
                {job: "The Office DJ Enthusiast"},
                {job: "The Security Guard"},
                {job: "The Receptionist"},
                {job: "The Facilities Assistant"},
                {job: "The New Employee"}
            ],
            culprits: [1, 4, 3],
            clues: [
                "Clue #1: The audio system's admin panel was accessed using a login that hadn't been used in months, reactivated the same week the remix appeared.",
                "Clue #2: The remix file's properties show it was created using audio editing software installed on very few company laptops.",
                "Clue #3: Three people were spotted testing sound clips on headphones near the elevator bank, laughing quietly and stopping abruptly when someone walked by."
            ],
            story: "The Office DJ Enthusiast made the remix for fun, and the IT Administrator, roped in by the Marketing Intern, decided it deserved a wider audience than just the office chat."
        },
        {
            crime:"The school's trophy case was found filled with participation ribbons instead of the usual championship trophies, all neatly labeled 'Everyone Wins'.",
            roles:[
                {job: "The Athletic Director"},
                {job: "The Guidance Counselor"},
                {job: "The PE Teacher"},
                {job: "The Student Council President"},
                {job: "The Head Custodian"},
                {job: "The Yearbook Editor"},
                {job: "The Substitute Teacher"},
                {job: "The Debate Team Captain"},
                {job: "The Freshman Class Rep"}
            ],
            culprits: [1, 7, 8],
            clues: [
                "Clue #1: The trophy case key was signed out under a note referencing a 'display update', though no such update was scheduled with the office.",
                "Clue #2: A batch of custom participation ribbons was ordered under the student council's budget, approved by a signature that doesn't match the usual process.",
                "Clue #3: Three people were seen debating something animatedly outside the trophy case the day before, stopping mid sentence whenever a teacher passed."
            ],
            story: "The Debate Team Captain had strong opinions about competitive culture, and the Guidance Counselor, sympathetic to the message, helped the Freshman Rep quietly make the switch."
        },
        {
            crime:"The office's entire supply of pens mysteriously stopped writing in anything but a single shade of alarming neon green.",
            roles:[
                {job: "The Office Supply Coordinator"},
                {job: "The Graphic Design Intern"},
                {job: "The Print Shop Contact"},
                {job: "The Team Lead"},
                {job: "The Customer Support Rep"},
                {job: "The IT Administrator"},
                {job: "The Receptionist"},
                {job: "The New Employee"},
                {job: "The Facilities Assistant"}
            ],
            culprits: [0, 2, 7],
            clues: [
                "Clue #1: A bulk neon green pen order appears in the supply account's history, placed a week before the switch and quietly approved without the usual review.",
                "Clue #2: The Old pens were found in a sealed box in a storage room, not thrown away, as if someone planned to swap them back eventually.",
                "Clue #3: Three people were overheard joking in the break room about how 'everyone would definitely notice' the color change."
            ],
            story: "The Office Supply Coordinator thought the joke would be harmless, and got the Print Shop Contact and an eager New Employee to help place and hide the order."
        },
        {
            crime:"The neighborhood block party's potluck table was found rearranged so every dish was alphabetized by the last name of whoever brought it.",
            roles:[
                {job: "The Block Party Organizer"},
                {job: "The Retired Librarian"},
                {job: "The Neighborhood Watch Captain"},
                {job: "The New Resident"},
                {job: "The Kids' Activity Coordinator"},
                {job: "The Local Baker"},
                {job: "The HOA Representative"},
                {job: "The Teenager Helping Set Up"},
                {job: "The Food Truck Owner"}
            ],
            culprits: [1, 7, 4],
            clues: [
                "Clue #1: The seating and dish arrangement follows a vary specific alphabetizing system rarely used outside of library cataloging.",
                "Clue #2: A handwritten sign explaining the 'new system' was found tucked under the table, in handwriting that matches nobody's official party planning notes.",
                "Clue #3: Three people were seen quietly rearranging dishes just before the party officially started, checking a list on a clipboard as they went."
            ],
            story: "The Retired Librarian couldn't resist organizing the chaos and enlisted the kids' Activity Coordinator and a helpful Teenager to alphabetize everything before the crowd arrived."
        },
        {
            crime:"The gym's entire music system was reprogrammed to only play extremely claming meditation sounds during the peak evening workout rush.",
            roles:[
                {job: "The Gym Owner"},
                {job: "the Personal Trainer"},
                {job: "The Yoga Instructor"},
                {job: "The Front Desk Staff"},
                {job: "The Sound System Technician"},
                {job: "The Regular Member"},
                {job: "The New Trainer"},
                {job: "The Overnight Cleaning Crew"},
                {job: "The Nutrition Coach"}
            ],
            culprits: [2, 4, 8],
            clues: [
                "Clue #1: The sound system's schedule was changed through a technician level login, used outside its normal scheduled maintenance window.",
                "Clue #2: A meditation playlist matching the one played was found linked to an account associated with the gym's wellness programming.",
                "Clue #3: Three people were seen testing something calmly at the front desk with a tablet, unusually serene compared to the evening rush around them."
            ],
            story: "The Yoga Instructor and Nutrition Coach felt the evening rush needed 'better energy', and the Sound Technician, sympathetic to the cause, made the switch happen."
        },
        {
            crime:"The office's entire collection of team building trust fall photos was replaced with photos of everyone dramatically falling into a kiddie pool instead.",
            roles:[
                {job: "The HR Director"},
                {job: "The Office Photographer"},
                {job: "The Team Building Consultant"},
                {job: "The IT Support Tech"},
                {job: "The Marketing Lead"},
                {job: "The Facilities Coordinator"},
                {job: "The Junior Designer"},
                {job: "The Receprionist"},
                {job: "The Summer Intern"}
            ],
            culprits: [1, 6, 8],
            clues: [
                "Clue #1: The replacement photos were edited using professional design software and printed at the office's high quality printer during off hours.",
                "Clue #2: A kiddie pool matching the one in the photos was seen in the office parking lot the same week, though nobody claimed to know why.",
                "Clue #3: Three people were seen laughing hysterically while reviewing photos on a laptop, quickly closing it whenever a manager walked past."
            ],
            story: "The Office Photographer thought the trust fall photos were painfully corny, and enlisted the Junior Designer and Summer Intern to stage funnier replacements as a joke."
        },
        {
            crime:"The town's public library installed a 'silence detector' that played increasingly loud kazoo music whenever anyone whispered too loudly.",
            roles:[
                {job: "The Head Librarian"},
                {job: "The IT Volunteer"},
                {job: "The Children's Program Coordinator"},
                {job: "The Library Board Member"},
                {job: "The Teen Volunteer"},
                {job: "The Book Club Leader"},
                {job: "The Local Musician"},
                {job: "The Retired Engineer"},
                {job: "The After School Regular"}
            ],
            culprits: [1, 6, 7],
            clues: [
                "Clue #1: The 'silence detector' device uses custom wiring far beyond typical library equipment, the kind an electronics hobbyist would need real expertise to build.",
                "Clue #2: The kazoo recordings match a track previously shared for laughs in a local hobbyist forum thread about 'library pranks'.",
                "Clue #3: Three people were seen tinkering with something small and electronic in a back corner of the library, packing it away quickly when a petron approached."
            ],
            story: "The Retired Engineer built the device as a fun side project, and the IT Volunteer and Local Musician helped install and soundtrack it, underestimating how disruptive it would actually be."
        }
    ],
    10:[
        {
            crime: "The company's annual conference stage backdrop was replaced overnight with a giant photo of the office cat wearing a tiny business suit.",
            roles: [
                {job : "The Event Coordinator"},
                {job : "The Graphic Design Lead"},
                {job : "The Facilities Manager"},
                {job : "The Marketing VP's Assistant"},
                {job : "The AV Technician"},
                {job : "The Office Cat's Unofficial Caretaker"},
                {job : "The Print Vendor Contact"},
                {job : "The Junior Coordinator"},
                {job : "The Security Guard"},
                {job : "The New Hire"}
            ],
            culprits: [1, 5, 6, 7],
            clues: [
                "Clue #1: The backdrop print was ordered through a rush job at the print vendor, approved under an account not usually authorized for large format jobs.",
                "Clue #2: The office cat photo used in the design matches one recently posted in an internal chat thread dedicated entirely to the cat.",
                "Clue #3: Four people were seen loading a large flat package into the venue late the night before, taking turns steadying it around corners."
            ],
            story: "The cat's unofficial Caretaker had the perfect photo, the Design Lead built the mockup, the Print Vendor Contact rushed it through, and the junior Coordinator helped sneak it into the venue overnight."
        },
        {
            crime: "The neighborhood's annual chili cook off scoreboard was hacked to declare every single entry tied for the first place.",
            roles: [
                {job : "The Cook Off Organizer"},
                {job : "The Local Tech Enthusiast"},
                {job : "The Judge's Assistant"},
                {job : "The Rival Chili Vendor"},
                {job : "The Scoreboard Sponsor Rep"},
                {job : "The Teen Volunteer"},
                {job : "The Neighborhood Watch Captain"},
                {job : "The Retired IT Professional"},
                {job : "The Food Truck Regular"},
                {job : "The New Resident"}
            ],
            culprits: [1, 2, 7, 9],
            clues: [
                "Clue #1: The Scoreboard's software requires admin credentials, last accessed from a personal laptop rather than the event's official tablet.",
                "Clue #2: A message thread reveals a debate about how 'everyone's chili deserves recognition', shared among a small group who all know each other from the same book club.",
                "Clue #3: Four people were seen gathered around a laptop near the judging table minutes before the scores were announced, unusually quiet for the moment."
            ],
            story: "The Retired IT Professional had the admin skills, the Local Tech Enthusiast had the laptop, and the Judge's Assistant and New Resident, both tired of the annual drama over rankings, decided everyone should just win."
        },
        {
            crime: "The office's entire wall of framed motivational quotes was replaced with equally large frames containing extremely mundane grocery lists.",
            roles: [
                {job : "The HR Director"},
                {job : "The Office Manager"},
                {job : "The Facilities Assistant"},
                {job : "The Graphic Design Intern"},
                {job : "The Print Shop Liaison"},
                {job : "The Marketing Associate"},
                {job : "The Receptionist"},
                {job : "The IT Support Tech"},
                {job : "The New Employee"},
                {job : "The Weekend Shift Lead"}
            ],
            culprits: [3, 4, 5, 9],
            clues: [
                "Clue #1: The grocery list designs were printed using the same account that submitted a 'joke poster' project weeks earlier, quietly approved without review.",
                "Clue #2: The wall mounting kit was signed out and not returned until well after closing time on a weekend shift.",
                "Clue #3: Four people were seen carrying framed items down the hallway that same weekend, joking about how 'nobody actually reads these anyway'."
            ],
            story: "The Marketing Associate found the corporate quotes cringeworthy, and with help from the Design Intern, Print Shop Liaison, and the Weekend Shift Lead's supply access, swapped them out for something more 'relatable'."
        },
        {
            crime: "Every desk plant in the office was found rearranged overnight into a giant plant based recreation of the company logo.",
            roles: [
                {job : "The Office Manager"},
                {job : "The Marketing Director"},
                {job : "The Facilities Coordinator"},
                {job : "The Graphic Design Lead"},
                {job : "The Junior Marketer"},
                {job : "The Weekend Cleaning Crew Leader"},
                {job : "The Plant Enthusiast Employee"},
                {job : "The Receptionist"},
                {job : "The IT Administrator"},
                {job : "The New Intern"}
            ],
            culprits: [3, 6, 5, 9],
            clues: [
                "Clue #1: A printed logo template, scaled and gridded for a large layout, was found pinned near the supply room, matching the plant arrangement exactly.",
                "Clue #2: Weekend badge logs show four seperate entries within a tight window, all before the cleaning crew's official shift start.",
                "Clue #3: A well known plant enthusiast in the office had been overheard planning a 'living art installation' with a couple of teammates weeks earlier."
            ],
            story: "The Plant Enthusiast had been dreaming up the idea for weeks, and the Design Lead's template, the Cleaning Crew Land's early access, and the New Intern's eager help brought it to life."
        },
        {
            crime: "The high school's cafeteria menu board was hacked to display entirely fictional 'Mystery Meat Monday' menu that caused a minor panic.",
            roles: [
                {job : "The Cafeteria Manager"},
                {job : "The Computer Science Teacher"},
                {job : "The Student Council VP"},
                {job : "The AV Club President"},
                {job : "The Substitute Teacher"},
                {job : "The Head Custodian"},
                {job : "The Yearbook Photographer"},
                {job : "The Debate Team Number"},
                {job : "The Freshman Class Rep"},
                {job : "The Guidance Counselor"}
            ],
            culprits: [1, 3, 2, 7],
            clues: [
                "Clue #1: The menu board's control system requires a login usually reserved for tech-savvy staff or students with special elective access.",
                "Clue #2: A joke thread on the school's private forum from days earlier proposed exactly this menu prank, credited only to a group chat name.",
                "Clue #3: Four students were seen huddled around a laptop in the AV room during lunch period the day before, unusually secretive about the screen."
            ],
            story: "The AV Club President had the system access, the CS Teacher's elective taught them how to use it responsibly (which they didn't), and the Student Council VP and Debate Team Member helped script the ridiculous menu."
        },
        {
            crime: "The community center's bulletin board was found completely covered in flyers advertising a fake event: 'Interpretive Dance for Cats'.",
            roles: [
                {job : "The Center Director"},
                {job : "The Font Desk Volunteer"},
                {job : "The Local Print Shop Owner"},
                {job : "The Yoga Instructor"},
                {job : "The Kids' Club Coordinator"},
                {job : "The Retired Graphic Artist"},
                {job : "The Teen Volunteer"},
                {job : "The Neighborhood Watch Member"},
                {job : "The New Volunteer"},
                {job : "The Facilities Assistant"}
            ],
            culprits: [2, 5, 6, 8],
            clues: [
                "Clue #1: The flyer design uses a distinctive illustration style matching a portfolio recently shared informally by a local artist.",
                "Clue #2: The print shop's order log shows a batch of flyers printed under a personal request, not the community center's usual account.",
                "Clue #3: Four people were seen posting flyers together early one morning, laughing about how many people might actually show up."
            ],
            story: "The Retired Graphic Artist designed the flyers as a joke, and the Print Shop Owner ran them off for free, with the Teen Volunteer happily helping post them everywhere."
        },
        {
            crime: "The office's video conferencing system was hacked so every meeting background defaulted to an underwater aquarium scene, fish and all.",
            roles: [
                {job : "The IT Director"},
                {job : "The Office Manager"},
                {job : "The Marketing Coordinator"},
                {job : "The Junior Developer"},
                {job : "The Executive Assistant"},
                {job : "The Facilities Tech"},
                {job : "The Receptionist"},
                {job : "The Summer Intern"},
                {job : "The Sales Associate"},
                {job : "The New Employee"}
            ],
            culprits: [3, 7, 4, 9],
            clues: [
                "Clue #1: The default background setting was changed through an admin console accessible only with elevated developer permissions, briefly granted for an unrelated project.",
                "Clue #2: The aquarium background file matches an image shared for laughs in a small group chat about 'making meetings less boring'.",
                "Clue #3: Four people were seen testing video call settings together on a shared screen, muting themselves quickly whenever someone walked past."
            ],
            story: "The Junior Developer had the elevated access from a recent project, and with the Summer Intern's enthusiasm and the Excutive Assistant's willing participation, the harmless parnk made every meeting a little more oceanig."
        },
        {
            crime: "The town's holiday light display was reprogrammed to spell out an oddly specific inside joke instead of the usual seasonal greeting.",
            roles: [
                {job : "The Town Events Coordinator"},
                {job : "The Electrician"},
                {job : "The Local Tech Club Leader"},
                {job : "The High School Robotics Team Captain"},
                {job : "The Town Council Member"},
                {job : "The Retired Engineer"},
                {job : "The Volunteer Coordinator"},
                {job : "The Local Radio DJ"},
                {job : "The Teen Volunteer"},
                {job : "The New Resident"}
            ],
            culprits: [2, 3, 5, 8],
            clues: [
                "Clue #1: The light display's control software requires programming knowledge well beyond the standard installation team's usual skill set.",
                "Clue #2: The inside joke phrase traces back to a robotics competition several months earlier, understood only by a small circle who attended.",
                "Clue #3: FOur people were seen working on a laptop near the light control box after the display was already switched off for the night."
            ],
            story: "The Robotics Team Captain and Tech Club Leader had the programming chops, and with the Retired Engineer's help wiring things and a Teen Volunteer keeping watch, they immortalized their team's favorite joke in lights."
        },
        {
            crime: "The office's fire drill announcement system was hijacked to play a dramatic movie trailer voice announcing a 'Snack Emergency' instead.",
            roles: [
                {job : "The Office Manager"},
                {job : "The Building Safety Officer"},
                {job : "The IT Administrator"},
                {job : "The Voiceover Hobbyist Employee"},
                {job : "The Facilities Technician"},
                {job : "The Marketing Associate"},
                {job : "The Receptionist"},
                {job : "The New Employee"},
                {job : "The Weekend Security Guard"},
                {job : "The Junior Analyst"}
            ],
            culprits: [2, 3, 4, 7],
            clues: [
                "Clue #1: The announcement system requires technician level access, briefly logged in the same week as a routine scheduled maintenance visit.",
                "Clue #2: The recording matches a demo reel previously shared informally in the office chat, credited to an employee's hobby project.",
                "Clue #3: Four people were seen testing audio equipment together after hours, replaying the same short clip and laughing every time."
            ],
            story: "The Voiceover Hobbyist recorded the announcement for fun, and the IT Administrator and Facilities Technician, both amused by the idea, actually got it onto the system with the New Employee's eager help."
        },
        {
            crime: "The community garden's annual harvest festival banner was found rewritten to celebrate 'National Weed Appreciation Day' instead.",
            roles: [
                {job : "The Garden Committee Chair"},
                {job : "The Local Sign Painter"},
                {job : "The Community College Botany Student"},
                {job : "The Handyman"},
                {job : "The Retired Teacher"},
                {job : "The Wildlife Enthusiast"},
                {job : "The New Volunteer"},
                {job : "The HOA Representative"},
                {job : "The Kids' Garden Club Leader"},
                {job : "The Local Reporter"}
            ],
            culprits: [1, 2, 5, 6],
            clues: [
                "Clue #1: The banner's replacement lettering matches paint recently donated to a botany class project, several cans of which are now unaccounted for.",
                "Clue #2: A student thesis draft about 'reframing weeds as misunderstood plants' was found near the garden shed, dated days before the festival.",
                "Clue #3: Four people were seen repainting the banner together late one evening, debating font choises with surprising seriousness."
            ],
            story: "The Botany Student's thesis obsession with 'misunderstood plants' inspired the Wildlife Enthusiast, and with the Sign Painter's help and a New Volunteer along for the ride, the banner got a controversial rebrand."
        }
    ]
};

function goTo(screenId){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    target.classList.add('active');
    target.classList.remove('fade-in');
    void target.offsetWidth; //reflow
    target.classList.add('fade-in');
    window.scrollTo(0, 0);
}

function openModal(name){
    document.getElementById(name + 'Modal').classList.add('open');
}

function closeModal(name){
    document.getElementById(name + 'Modal').classList.remove('open');
}

let state = {
    crewName: '',
    playercount: 0,
    players: [],
    scenario: null,
    round: 1,
    clueIndex: 0,
    votes: {},
    eliminated: [],
    currentVoterIndex: 0,
    selectedVote: null,
    gameOver: false
};

function selectCount(n){
    state.playercount = n;
    document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.count-btn').forEach(b => {
        if(parseInt(b.textContent) === n) b.classList.add('selected');
    });
    buildPlayerInputs(n);
}

function getMafiaCount(n){
    if (n === 4) return 1;
    if (n <= 6) return 2;
    if (n <= 9) return 3;
    return 4;
}

function buildPlayerInputs(n){
    const section = document.getElementById('playerNamesSection');
    const container = document.getElementById('playerInputs');
    section.style.display = 'block';
    container.innerHTML = '';
    for (let i = 0; i < n; i++){
        container.innerHTML += `
        <div class = "player-input-row">
            <span class = "player-num">${i + 1}.</span>
            <input type = "text" id = "playerName${i}" placeholder = "Player ${i + 1}" maxlength = "20">
        </div>`;
    }
}

function startGame(){
    const crewName = document.getElementById('crewName').value.trim();
    if (!crewName) {alert('Please enter a crew name!'); return;}
    if (!state.playercount) {alert('Please select number of players!'); return;}

    const names = [];
    for (let i = 0; i < state.playercount; i++){
        const val = document.getElementById('playerName' + i).value.trim();
        if (!val) { alert(`Please enter a name for Player ${i + 1}`); return; }
        names.push(val);
    }

    if (new Set(names).size !== names.length) {alert('All player names must be unique!'); return;}

    state.crewName = crewName;

    const pool = SCENARIOS[state.playerCount];
    state.scenario = pool[Math.floor(Math.random() * pool.length)];

    const roles = [...state.scenario.roles];
    const shuffledRoles = shuffle(roles);
    const shuffledNames = shuffle([...names]);

    const culpritIndices = state.scenario.culprits;

    state.players = shuffledNames.map((name, i) => {
        const role = shuffledRoles[i];
        const originalIndex = roles.indexOf(role);
        const isCulprit = culpritIndices.includes(originalIndex);
        return {name, job: role.job, isCulprit};
    });

    state.round = 1;
    state.clueIndex = 0;
    state.votes = {};
    state.eliminated = [];
    state.currentVoterIndex = 0;
    state.selectedVote = null;
    state.gameOver = false

    showRoleReveal(0);
    goTo('screen-roles');
}

function shuffle(arr){
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a;
}

let revealPlayerIndex = 0;
let cardFlipped = false;

function showRoleReveal(idx){
    revealPlayerIndex = idx;
    cardFlipped = false;
    const player = state.players[idx];
    const isLast = idx === state.players.length - 1;

    document.getElementById('roleRevealTopText').innerHTML = 
    `It's <span class="highlight">${player.name}'s</span> turn to see their role`;

    const container = document.getElementById('roleCardContainer');
    container.innerHTML = `
    <div class="role-card" id="theRoleCard" onclick="flipRoleCard(${idx})">
      <div class="tap-hint">Tap to reveal</div>
      <div class="player-name-on-card">${player.name}</div>
    </div>`;

    document.getElementById('roleRevealActions').innerHTML = 
    `<button class="btn btn-primary btn-disabled" id="nextRoleBtn" onclick="nextRole(${idx})">${isLast ? 'Continue →' : 'Next Player →'}</button>`;
}

function flipRoleCard(idx){
    if (cardFlipped) return;
    cardFlipped = true;
    const player = state.players[idx];
    const card = document.getElementById('the Role Card');
    card.classList.add('flipping');

    setTimeout(() => {
        card.classList.remove('flipping');
        card.classList.add('flipped');
        card.onclick = null;

        let cardContent = `
      <div class="role-label">Your role is</div>
      <div class="role-name">${player.job}</div>`;

      if (player.isCulprit) {
        cardContent += `<div class="mafia-badge"> You are the Culprit!<br>Your mission: deceive and mislead.<br>Don't let them catch you.</div>`;
      }

      card.innerHTML = cardContent;

      const btn = document.getElementById('nextRoleBtn');
      btn.classList.remove('btn-disabled');
      btn.onclick = () => nextRole(idx);
    }, 200);
}

function nextRole(idx) {
    if (!cardFlipped) { alert ('Please tap the card to reveal your role first!'); return; }
    
    if (idx + 1 < state.players.length) {
        showRoleReveal(idx + 1);
    } else {
        goto('screen-introduce');
    }
}

document.addEventListener('DOMContentLoaded', () => {});

const _origGoTo = goTo;

function showCrimeScreen(){
    document.getElementById('crimeDisplay').textContent = state.scenario.crime;
    goTo('screen-crime');
}

document.querySelector('#screen-introduce .btn-primary').addEventListener('click', function(){
    document.getElementById('crimeDisplay').textContent = state.scenario.crime;
});