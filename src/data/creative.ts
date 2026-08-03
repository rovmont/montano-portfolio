export type CreativeKind = "essay" | "prose" | "anthology";

export type AnthologyEntry = {
  title: string;
  body: string;
};

export type CreativePost = {
  slug: string;
  title: string;
  /** ISO date used for sorting and display */
  date: string;
  description: string;
  kind: CreativeKind;
  tags: string[];
  /** Full piece body for essay/prose posts */
  body?: string;
  /** Dated proses for anthology posts */
  entries?: AnthologyEntry[];
};

/**
 * Chronological order (oldest → newest).
 * Prev/next on post pages follow this array order.
 */
export const creativePosts: CreativePost[] = [
  {
    slug: "mine-alone-to-keep",
    title: "Mine alone to keep.",
    date: "2023-01-01",
    description: "“These chronic symptoms of love, would I ever be ridden of them?”",
    kind: "prose",
    tags: ["Prose", "2023"],
    body: `Have I ever mentioned how easy it is to get lost in your eyes?

Even in the dark, they sparkle with all the stars the sky cannot contain. I try to count each of them every time, especially when your thoughts get tangled up in your head. These clumsy moments are my only chance to indulge in your presence and allow myself to admit my heart's calling. Because if I stare for far too long—when both of us have reveled in careless silence—you might see just how much my seedlings of admiration have grown into unruly forests of confusing emotions.

Have I ever described to you how your smile leaves me breathless?

You never notice it when your eyes crinkle and turn into heartwarming crescents. It takes every bit of me to stay on my feet, to not take your hand and run away from everything. I know you would if you had the chance, it is just that it would not be my hand that you would grab. Nevertheless, I trace the lines on your face in my mind; it's my futile attempt to immortalize the you of tonight. That way, I could have something to remember when this night ends, and we both have to return to where we belong.

Have I ever told you about how you keep me awake at night?

I knew it from the start. In this world, the likes of you will never see the likes of me. See me beyond someone who you can turn to when no one else would listen; who you can share your secrets without the collateral damage; who you can lean on without ever thinking of the consequences. Yet, I foolishly wish for you to stay longer. I pathetically hope that you do not leave my side and that I feel your warmth just for a minute more.

These chronic symptoms of love, would I ever be ridden of them?

As you walk away, it seems like all of them, along with the moments I have stolen over time and the questions that swim in the depths of my mind, will forever be mine. And mine alone to keep.`,
  },
  {
    slug: "this-is-my-last-goodbye-my-first",
    title: "This is my last goodbye, my first.",
    date: "2024-06-01",
    description:
      "“I am hoping by the next time they do, I will have the strength to say ‘This is my last goodbye, my first.’”",
    kind: "prose",
    tags: ["Prose", "2024"],
    body: `When my mind runs out of thoughts to take apart, I wonder how you are. Are you eating well? Are you sleeping well? I used to want to ask you these questions with earnest, to pose them as a friendly concern. But even then up until now, I have barely mustered the courage for a simple hello. Now, my curiosity's more like a force of habit than a guileless attempt to express my heart’s calling, yet the yearning for any answer still remains.

When I run out of songs to play, it's your voice that I still hear in the silence. Day by day, it gets fainter as you drift farther from me. I now take more time to remember just how much your smile knocks the wind out of my chest.

I have been at the end of being forgotten more times than I can count. Strangely, I find the act of forgetting similar to learning how to walk again after a broken knee. There is a dull ache that persists, and it would leave you stuck in the same place. Then, one day you wake up wanting—needing—to remove the cast and finally allow your frayed bones to mend. You discover in your throbbing steps that enduring the pain is the only way to start moving forward.

Though, it’s not really as easy as it seems. Some days, I still lose my footing and stumble. I would find myself taking a few steps back for a semblance of familiarity. In my heart, there is still a space that holds all the love I have yet to learn how to rid myself of. A love that does not know where to go. That needs to realize it has nowhere else to go.

And until then, I would just have to keep fighting the urge not to fall again into the pit that is you (and let everything I still harbor spill over) every time our eyes meet. I am hoping by the next time they do, I will have the strength to say “This is my last goodbye, my first.”`,
  },
  {
    slug: "memory",
    title: "Memory",
    date: "2024-09-01",
    description:
      "I fell in love with music, then with my mother again, then, slowly, with my own voice.",
    kind: "essay",
    tags: ["Essay", "Literature", "2024"],
    body: `It was when I was four years old that I first fell in love. The scent of overcooked rice wafted through my family’s dilapidated and cramped apartment, a hand-me-down from my father’s parents. Madonna’s “Crazy For You” was blasting from our half-busted stereo system, a once staple in every Filipino household since it could play a CD and a tape while being a speaker all at the same time. My mother’s voice bounced from wall to wall as she sang along to the music while tending to our dinner. Just like the steam from the overflowing kaldero, there was nowhere for her voice to go but straight to my ears because our home was nowhere fit for a family of four, barely passing as a modern studio condo unit with how unbearably small it was.

She enunciated the lines with a clarity unique to those who sang in a chorus, a sort of exaggerated syllabication of the words. Her voice contrasted Madonna’s thin, almost tin-canny timbre. Right then and there, as she belted out the refrain alongside Madonna with a tone so womanly and thick yet inexplicably youthful, I fell in love with music and with a girl for the first and last time.

I had accepted the fact that I might not like women as much I loved their power ballads at the age of 10. By that time, my family already owned two units in the same building, one we used for sleeping, while the other for entertainment and dining. There was no longer our stereo system, which used to play Madonna and other classics from a pirated compilation CD sold in the tiangges in Tutuban (an old train station from the colonial era turned into a shopping mall for the masses that is quite more akin to a supermarket than an SM mall). In its place was an actual sound system that could cause our entire floor and maybe the ones above and below to tremble on special occasions, and every time I got home from school, I would terrorize my neighbors with the latest pop hits by Ariana Grande and a sprinkle of Mariah Carey if something significant had happened. I did not only play their music, however. With the way I reached for the high notes in their songs’ climaxes, it became an open secret in the neighborhood that the Montaño family’s unico hijo might not be a real man after all.

So even if I made up for my gayness by being an academic achiever and a steadfast boy scout, there was no distracting my parents, especially my stonehearted father, that their only son would be the end of his natural bloodline. In the same room where I first tasted the freedom to express myself and learn who I really am, I also first felt what it was like to be tremendously ashamed to the point that I wanted to crawl inside my skin.

At 14, I took that shame with me even when we moved to a much more spacious apartment not far from our old one. This time it had its own living room and separate bedrooms for my parents, and my sister and I. I had learned to stifle my voice and love a little more quietly, keeping the mini-concerts short and only during showers before school. It was in Manila Science High School’s historical H.A Bordner building where I unleashed everything I could not contain at home. The music room in that building became my sanctuary, a place where I could breathe and let loose the strings in my body. Just like my mother, I joined a chorus and sang music different from what I was used to, and in that reverb-filled room, I discovered the magic of singing within a group and what it felt like to belong. Belong not only to the other talented vocalists I had the opportunity to create music and form friendships with, but also to myself after a period of being lost.

Looking back on those tumultuous memories, I wish I could say that I would never stray from myself again. Alas, the pandemic caused an irreparable loss of a multitude of things. There are relationships that I will probably yearn for until I forget them and pieces of myself that are forever lost in that sea of confusion and regrets. Still, I had my music and it kept me afloat even when the current was too strong and the tide too high. It was also through music that I was able to find my way back to my mother, for it seemed like the three or so years before the pandemic, the string that had tethered me to her had snapped, or at least slacked exceedingly. In a way, I fell in love with her again, and in the quiet moments when it was just her and Madonna having another sing-off in our home, I realized that time had slipped right through my fingers. Where there was ease in her phrasing when I was young, there is now a hint of grit, of a beautiful tiredness that is as pleasant to the ear as the youth in her singing from all those years ago.

She was still the same. I was still the same. Yet, we were all so different.

This realization defined my transition from childhood to adulthood. All of a sudden, there has been this weight on my shoulders that is an amalgamation of pressure—pressure to make the most of my youth, to make my parents proud, to be a good brother, to be a good friend, to belong to myself, and to belong to someone. And I guess, that last one, that kind of pressure is something that just churns within you more and more as you get older. I mean, I know that I have years ahead of me still, but what I did not expect is this indescribable need to love and this need somehow felt the strongest in the ultimate year of my teenagehood.

It was at 19 that I fell in love with someone else other than music and my mother. In a filled Teresa Yuchengco Auditorium at the De La Salle University, during the encore of the university’s chorale (which I would later become a member of as well), my heart seemed to have slowed down. There was this certain tenor who sang the second verse of The Beatles’ “Let It Be” with such palpable emotion in his voice, and even if I was standing a significant number of rows from the stage, I witnessed his eyes shining with an overwhelming love for what he was doing.

This boy would later on inspire me to become someone who lets his love overwhelm him without restraint through song. I have him to thank for helping me discover a magic greater than singing with a group, which is telling a story, my story, and touching people’s hearts with the voice I am slowly learning to love over the short course of my life thus far.

Now at 20, I kind of have found my path once again and it goes back and forth between the rehearsal hall of the DLSU Chorale and the vibrant streets of Tondo. With my 20s ahead of me, there will probably be more chances of me straying from this path and it changing, but as of current, I have my mother’s hum and the ensemble of chorale to lead me back if ever I do. And most importantly, I can now hear my own voice. Moving forward, I would just have to listen my heart’s song and trust that its melodies will bring me to a place I can call home.`,
  },
  {
    slug: "water-town",
    title: "Water Town",
    date: "2024-10-01",
    description:
      "If ever I need to come back to my once beloved water town, I hope I will be welcomed with my dad’s laugh roaring across the shore.",
    kind: "essay",
    tags: ["Essay", "Literature", "2024"],
    body: `When I was younger, my father would sometimes take me to where he worked—the Manila North Harbor or what most would simply call the Pier—on the rare occasion of a shortened class schedule and having no one to look after me at home. I would spend most of my time either in my grandfather’s air-conditioned office, singing along to the radio and performing for an imaginary audience, or in the porters’ makeshift communal space which they would colloquially call the barracks. It was at the barracks that I would first be introduced to who my father was, not as someone who bore me but as a person outside of his family through the many titos that I would learn and soon forget the names of once I have become too old to bring to work.

One of those titos was Tito Ramil, my sister’s ninong. Despite that, he would never miss the chance to hand me a five-peso coin to buy a snack with whenever he catches me at the barracks. When he was not in a hurry to go home to his own family, he would take the time to play a game or two of Street Fighter Two with me in a rusting arcade machine, which the porters confiscated after a passenger was not allowed to board the ship with it. Once there were no more ships yet to depart, my father’s day would end and with some of my titos, we would go to a place they called Break. I didn’t know it then, but Break was a mispronunciation of an informal settler community in Parola, Tondo, officially known as Purok 1 Brick, and there lived some of my relatives and titos even to this day. We would get lugaw or mami in one of the many food carts that littered Break’s narrow alleys and ignore the stench of sewage water mixed with the salty breeze from the sea for a warm, hearty meal to end the day. In the chatter between my father and my titos, I would hear him speak with a spunk reminiscent of a boy in his teens and laugh with such unbridled happiness.

I was maybe five or six years old then, but I felt this inexplicable pity (I would describe it as a heart-wrenching wistfulness now) for my father as I watched him leave behind the burden of responsibility for half an hour with his friends. I do not see myself having a kid at 28 or 29, and sometimes even just thinking about living past that age is daunting. However, my father at around the same age had me already and would allow me a glimpse of his world before we would eventually leave the door to each other’s closed.

Remembering exactly when I lost touch with my father would probably take an eternity—the amount of our lives, which we both have missed. While I still have respect and gratitude for what he does for my family, there is a part of me that wishes that he guided and is still guiding me on how to become a man. A part of me wishes that someone had taught me to shave my facial hair so I would not have foolishly nicked myself with my shaky hold of the razor. A part of me wishes I had someone I could talk to about the nights I would wake up confused about the changes to my body. A part of me wishes he would be here beside me like he promised to be after he had read the letter I wrote when I first wanted an escape from myself.

Yet these wishes would remain as hopes forever waiting to be reaped from their sowing within the trenches of my soul. I would like to say it is never too late, that there is a chance to rekindle the fire between father and son, but I have already faced too many of life’s trials without him even at the ripe age of 20. Still, I would get snapshots of the chaos in my father’s mind from time to time and each instance would leave me with a sympathetic outlook on what our relationship has become.

I first came back to Break after years at the news of one of my paternal grandfathers, Tito Lipid’s passing. This particular grandfather, a brother of my actual grandfather, was the youngest among them and was someone my father considered more of a friend than an uncle. On the night of his ship’s unfortunate departure, I saw my father looking out the window of our home with profound sadness. My mom was fast asleep below on the bed beside where he stood, and to the music of the roaring motorcycle engines speeding on the highway adjacent to our condominium complex, he cried silent tears. I could not take another step towards him. I just stood frozen before backing away and returning to my room. The moment I lay down, I realized that my father and I were not so different after all. Maybe it was his father that was to blame or his father’s father—or it might be no one’s fault at all but the circumstance that we were born with fathers who never learned how to become a father once their children grow up and start thinking like a grown up.

Tito Ramil was missing from Tito Lipid’s wake; his ship had left the shore of the once lively water town of Break a year earlier. There, I met many of my titos whose names I no longer recall but still recognize the same warmth and sparkle in their kind eyes. This time around, I was drinking amongst them, eating from the same plate of peanuts and fish crackers, and reliving the same memories of Tito Lipid with enthused descriptions instead of being just a passive observer. I get a glimpse of my father’s world once again and witness him lose himself in the youth he still had left. All I could think of at that moment was how fast time passed us by. How long would I have to wait until the next time I could see within my father’s heart instead of being stuck at the sight of his closed-off exteriors? When it is my turn to be in his seat, would it also be the only chance a piece of myself could get to know its whole? Or would I be able to stir my ship away from the path of hurting them the same way the fathers that came before me have hurt each other?

The most frustrating part of my relationship with my father, with life and its complexities, is that I truly will never know until I am at that point in time. I just would have to make the right choice, and listen to the child within me who only hopes that one day, his father will hold him again like one holds a child—with tenderness and without fear. For in the first place, it is fear that has made us drift apart. A fear of failing only results in more failures, especially ones that might take a lifetime and cost one’s innocence to fix. So until then, I would just have to be the captain of my ship with only the compass of my own to trust and follow. If ever I need to come back to my once beloved water town, whether alone or with a smaller fleet to lead, I hope I will be welcomed with my dad’s laugh roaring across the shore.`,
  },
  {
    slug: "what-does-it-mean-to-love",
    title: "What does it mean to love?",
    date: "2024-11-01",
    description: "Is love an endless practice of forgiving?",
    kind: "essay",
    tags: ["Essay", "Literature", "2024"],
    body: `On some days, I walk what is supposed to be another tricycle ride home after a jeep from Taft Avenue to Divisoria and come to the conclusion that I will probably die alone. My mom would often warn me to go straight home, that having a stroll at night was an open invite for thieves and goons to come at me. Yet I never listen, for at night, Plaza Moriones comes alive with the pretty lights that color the sprucing waters of its many fountains and the many couples, both young and old, who huddle close on the benches that line the plaza’s stretch. A 20-year-old having been single since birth and a boatload of couples littering a plaza might seem like a recipe for loneliness to some. However, I would often just find myself confused instead of downtrodden at the thought of trudging Moriones’ love-infested plaza alone.

Are they all really in love?

The question extends home when I open the door to my parents’ room and find them sound asleep, reminiscent of the lovers I just saw with their limbs woven together as if they were sharing one body. Then, the next day would roll along, and this synergy would usually be carried into the morning as my mom prepared us breakfast and my father would be seated on the couch, sipping on his cup of coffee and his daily dose of Ted Failon and DJ Chacha’s live radio show. It is almost picture-perfect. Peaceful, perhaps, but only up until my father turns off the television and starts beckoning my mom to do even the most basic of things as he prepares for work. Sometimes, he would be out the door, and my mom and I would sigh in relief for a morning unruined, though unfortunately, the opposite is the common case.

“My father’s father never taught him how to keep the fire within him tame,” I try to remind myself every time his rage heats the house because of a mistake, regardless of how small or whose it was. This effervescent anger—an heirloom to the men of the family that has been woefully passed down to me—I try my hardest not to seep through and out of me in the mornings when my father would be spiteful to my mom ever since I have discovered that adding on to my father’s rampage would only make it harder for mom to cool down later on. Before I head out myself, I would lament the fact that I have made this discovery fairly recently and must have dealt my mom a fair share of stress and unnecessary tears.

As I have grown older and maybe, wiser, I would like to think I have become more forgiving to my mom. She is not perfect. What she thinks and says is best for me is not always, but I have felt her lovely eyes on me ever since I could, and they have not strayed away from me even in the moments when she had cut up my soul. That is why I always feel sorry for her. Because I am her son and she deserves the world and more. I do not know if there will come a time when I will be able to give that to her, alas, I do know she will treasure it no matter what or how much it is. She is just that type of person. Selfless and tactful, although not to be taken for granted. At least, not as much as my father does.

My relationship with my father, on the other hand, has rusted and is continuing to rust. Still, I will never take away from him his willingness to carry the responsibility of earning a living for the entire family by himself. If there is one thing my dad has learned from his, it is that being a provider is the top priority of a good father. And I am aware of my privilege to have a father who provides and cares to some degree, who has affection for his children that, for some weird reason, he can only show through provision and half-assed Facebook posts of appreciation.

That is why I only end up more confused with time. Is love the sparkle in the eyes and hearth in the laughter of the people I come across on my walks home? Does love mean that you can demolish a person brick by brick and then build them up just to do it all over again? Is love an endless practice of forgiving? Is love really what my parents share?

There is this dreading feeling at the thought of never knowing the answer to these questions because the lack of an answer means I might not know how to love properly, if there is indeed a proper way, once it comes knocking at my doorstep. Quite frankly, I hope to not overthink like I typically do when I am about to offer my heart to someone. I want to know for certain because I do not want a love like my parents’ and want a love like theirs too. I do not yearn for the unneeded tears and the nights when anger is allowed to fester, but I yearn for the trust in silence, the quiet moments in solitude, and the willingness to share most of their selves to one another. And on my walks home, I find it hard to grasp that someone like me who is borne out of a love that stands on a precipice and is struggling to keep their balance can ever fulfill a such yearning. So when I open the door to my parents’ room and catch them intertwined, I come to the conclusion that I will probably die alone.`,
  },
  {
    slug: "the-absence-of-you",
    title: "the absence of you",
    date: "2025-01-01",
    description:
      "“I am the one walking away, but how come I am the one left with our residual summers and the eternal winter that is the absence of you.”",
    kind: "prose",
    tags: ["Prose", "2025"],
    body: `“How are you?” A simple question. Three words that should roll off our tongues without a hitch. Should not struggle to find its way past our throats. Yet, your lips dare not move a muscle and mine can only seem to remember what it is like to be on top of yours. Is time not so peculiar? How is it that we spent years spewing flowers that decorated our hearts so dazzlingly but now we cannot even spare each other a petal of good wishes? Somehow, everything warm has left our bones, and breathing the same air feels like the winters we used to endure together.

Fate is a cruel, cruel being. Right when I thought I had finally bid my farewell to the life that we once carefully built brick by brick, it brings you to me and suddenly I am homesick. There is this tingle on my skin, a voice in the back of my head. It is telling me to come running. Whether to you or to the place we proudly called our own, I do not know. But what I do know is that the voice sounds like you and that no matter how much I pretend for every second of my every day, a part of me still waits for you to slip through the door. With the same smile, the same relief, the same warmth—as if seeing me was what made it all worth it at the end of the day, as if coming home to me is the best thing that has happened to you.

But who am I kidding? I guess everything was in my head, just like how these reminiscences would never see the light of day. After all, you would not have ended the lease so abruptly if my memories were reliable. Perhaps I have been too absorbed in myself; I did not see how I was becoming the bane of your loneliness.

Today though, my sight seems clearer. It starts in your eyes. They light up with this unbridled, genuine tenderness that seeps into every nook and cranny of your soul. And I allow myself to be blinded. Because this might be the last time. This will be the last time that I will let myself bask in you. Because I am selfish, and I want my last piece of you to be like the first time.

I turn back on my feet before they even find the courage to walk a step in your direction.

“How are you?” A simple question. One that you have always asked me but I never asked back. Three words that did not need to be said for I know now the answer. Is time not so peculiar? How is it that in the years that we spent together, it is only now that I feel myself so firm and sure; it is only now that I feel I do not have to hide behind a flowery facade. I am the one walking away, but my bones are the ones begging to stay just a second more.

I am the one walking away, but how come I am the one left with our residual summers and the eternal winter that is the absence of you.`,
  },
  {
    slug: "letters-sent-and-ive-yet-to-send",
    title: "Letters Sent and I've Yet to Send",
    date: "2026-02-15",
    description: "An anthology of proses written for my last sunny February.",
    kind: "anthology",
    tags: ["Anthology", "Prose", "2026"],
    entries: [
      {
        title: "February 7, 2026",
        body: `It's been a while since I've wanted to freeze a moment in time. I trace the lines of your smile, hoping I can keep it as mine. Our feet are a mess of weary limbs. A step away from being stepped on. But you should know I wouldn't mind. We can keep doing it wrong, so long as I can continue drowning in your eyes.

It scares me how I don't want to come up for air: I've forgotten what it's like to feel this kind of warmth brewing from the inside. The kind that starts slow with a spark but spreads like a wildfire. The kind that slows the beating of your heart, and wants the clock to tick twice instead of once.

Yet I do. Somehow I'm the one who waves the flag and retreats even if I reached for you first. It's the paradox of gallantry. A residual side-effect of my lingering misery. Still, I'm hoping you notice the way my fingers tremble before locking into yours, and how I hesitate before looking away.

Just so next time, you'll be the one to come onto me. Perhaps, with a smidge less of fear that we both might break if either of us pushes too far. Because you feel the same warmth that I do from when your hand is in mine. They clasp together imperfectly, but it's perfectly fine.`,
      },
      {
        title: "February 9, 2026",
        body: `A little hi, a small hello. These are things I’ve brushed off so easily before; words that I could bring my tongue to effortlessly utter. Nowadays, these greetings have been getting my tongue tied. I seem to never find the right thing to say unless it’s a misconceived confession about how I find you breathtaking in the streetlights or how your eyes mesmerize me without fail.

Sometimes you get it, other times you don’t. But when you do, I feel like I’ve won the lottery, and your eyes turning into crescents while you throw your head back in bashful laughter is my jackpot. See, even in these fleeting musings, I somehow cannot piece together the right metaphors to convey the joy that your smile brings me. I keep on going off a tangent. I write run-on over run-ons, yet all I really want is to run to you. To be close to you.

And when our shoulders brush and our fingers graze upon each other, I feel my heart supernova. Its fragments shower within me, and take root with saplings of this entrancing feeling that I can’t quite put a name on yet.

It’s familiar but still indescribable. It’s the start of something beautiful.`,
      },
      {
        title: "February 12, 2026",
        body: `Tonight, I am sending fireflies to your window.

They are the flickering testaments of what I contain that I am still mustering the courage for—mosaics of my harbored emotions these past nights that I have been by your side. It is my way of telling you that I am happy because you make me so with anything that you do, whether it is when you sing a song under your breath, let out a huff of frustration when you think no one sees or hears, or act handsomely silly with that bounce on your shoulders.

I am not exactly sure when or how I have noticed these things, but I know why. You are sometimes clueless but earnest. You can get blunt, but you are also sensitive. You are hard on yourself, but all you truly want is to be better. I could go on and on, and in the end, all I am trying to say is I notice because these parts of yourself are all uniquely you. You make it so easy to like you, and the past few days, it has almost become an involuntary action. Like how you breathe even if you do not will yourself to.

Maybe that is a bit scary—the thought of caring for someone becoming second nature. Yet, I am not as afraid as I thought I would be. I am still learning, and recalibrating every time I get to know another piece of your life and what is running through your mind. Especially, when you find that you are not doing as well as you could. Because at the end of the days we share, I yearn to know the right way for you to come to me, to have you be comfortable enough to tell me what is it that bothers you from time to time.

It is not that I am asking for a quick way to your heart. I am only asking to be the glow that lingers after the streetlights go dim. To be the one to tell you that you did well regardless, for all that truly matters is that we tried. Because even if we are still just learning how to walk by each other’s side, I would rather have this slow, careful rhythm than the hollow silence of being a few steps behind.

So instead of acting with haste, tonight, I am sending fireflies by your window. They are my way of telling you to have a good dream, and that with the thought of you, I am looking forward to tomorrow.`,
      },
      {
        title: "February 14, 2026",
        body: `You've been building a home in my heart. The foundation has shot through the ground, and every time our hands touch is a new brick laid down. At this rate, you'll soon be living in my every other thought, and I'll miss you more than I currently do on the days I can't hear your laugh.

It's quite scary, you know? Deep inside, a quiet voice reminds me I'll be forced to take it all down one way or another. Because I'm certain I'll want more than what I can have, and when that time comes, you'll find it all a bit too much. That I'm a bit too much.

But for now, I'll try to hold off with all my being. I'll try to contain everything from growing too fast. Just so the ending to this story would be slightly different. Just so I can have you by my side for a bit longer than I know I would.

People might call me a fool when it all crumbles before us, yet I don't care. Even if it's only the beginning, you've already made me ask this question a thousand times: In another world, do you think we could happen?

I know it's pointless since the answer is clear. What matters is in this world, I got to be in your embrace, and for someone like me, it's more than enough knowing it’s all I can ever have.`,
      },
      {
        title: "February 15, 2026",
        body: `Noon pa ba akong nabibighani tuwing nagtatagpo ang landas ng ating mga mata? Kabog ng aking aking puso ay hindi mawari. Ang isipan ay bumubulong na hindi maaari; natatakot sa patutunguhan nitong bumubugsong damdamin. Noon pa ba akong nadedehado sa simpleng mga pagbangga ng ating mga braso? Tila ba ay may kuryenteng dumadaloy, ngunit imbis na bumilis ay pinapabagal nito ang pagtibok, at ang pagpatak ng bawat segundo.

Madaming tanong, walang mahanap na sagot. Ang tanging alam ko ay hindi na nabubuo ang araw kung hindi masilayan ang ngiti mong nakahahalina. Kaya halika at ating libutin ang kasuluksulukan ng mundo. Kahit ano ay gagawin basta ikaw ang nasa tabi ko.

Totoong medyo delikado ang kasiyahang nanunoot sa aking loob. May pangangamba kung saan aabutin itong pagkamarahuyo sa iyo. Subalit, akin ring napagtatantong walang punto ang pagdadalawang-isip at pag-aalinlangan kung aking mas pagtutuunan ng pansin na kahit maikli man o mahaba, itong oras na kasama ka ay walang kapalit.

Bagaman punla pa lamang itong pag-ibig, ako’y nananabik nang makita itong bumunga ng mga alaalang kailanma’y ating hindi lilimutin.`,
      },
    ],
  },
];

export function getCreativePost(slug: string): CreativePost | undefined {
  return creativePosts.find((post) => post.slug === slug);
}

export function getAdjacentCreativePosts(slug: string): {
  previous: CreativePost | null;
  next: CreativePost | null;
} {
  const index = creativePosts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? creativePosts[index - 1] : null,
    next: index < creativePosts.length - 1 ? creativePosts[index + 1] : null,
  };
}

export function formatCreativeDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatCreativeYear(iso: string): string {
  return new Date(`${iso}T12:00:00`).getFullYear().toString();
}
