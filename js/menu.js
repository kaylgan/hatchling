// -------------------- select item from lessons menu, show lessons for rmenu items --------------------
function menuListener() {
  let items = document.querySelectorAll("#dropdown-content span");
  let narration = document.getElementById("narration");
  let vocabBox = document.getElementById("vocabBox");
  let index = -1, lessonTitleTop = 10, lessonTitleWidth = 300;

  // lessons text and properties
  // {text: "", left: 5, top: 5, width: 5, highlight: false, highlightElement: null, extraCode: "", lesson: "".split("")}
  let narrationText = [
    {text: document.getElementById("tutorial").textContent, top: lessonTitleTop, width: lessonTitleWidth, extraCode: "enterToContinue"},
    {text: "Welcome to Hatchling, a web app to help you get used to stenography on a QWERTY keyboard."},
    {text: "To navigate through each lesson, type your ENTER key to go forward and BACKSPACE to go backward."},
    {text: "You may have noticed that this qwerty keyboard has some unusual letters added to it.",
    highlight: true, highlightElement: document.getElementById("keyboard")},
    {text: "These are steno machine letters overlaid on a typical keyboard."},
    {text: "Stenography differs quite a bit from traditional typing. At its core, however, it is still a process of quickly finding key positions."},
    {text: "These lessons have been designed to mimic typical qwerty keyboarding lessons in order to take advantage of this similarity."},
    {text: "This will hopefully help qwerty typists build muscle memory for steno key positions in a way that is familiar."},
    {text: "The lessons here teach Plover Theory.",
    left: 65, width: lessonTitleWidth, top: 5, highlight: true, highlightElement: document.getElementById("nav-lessons")},
    {text: "However, they are meant to be completed without " + '\
    <a href="https://github.com/openstenoproject/plover/wiki/Installation-Guide#installation"\ target="_blank">' + "\
    Plover" + '</a>' + " or other steno software turned on."},
    {text: "They should work with most normal keyboards, meaning ones that do not have n-key rollover (NKRO)."},
    {text: "Keyboards with n-key rollover are able to press a large number of keys at once without conflict."},
    {text: "Now that you have some background info, let's take a look at hand positions.", extraCode: "showSideView"},
    {text: "As you go through the lessons, you will notice the hands above moving."},
    {text: "These hands are a very simplified representation of steno movements, and they are much more rigid than real movements."},
    {text: "Just concentrate on placing your fingertips or thumb sides on the proper key or crack (which you will learn soon)."},
    {text: "You can see a video of how keyboard stenography actually \
    looks " + '<a href="https://www.youtube.com/watch?v=Il8DT_alCLk" target="_blank">' + "here" + '</a>' + "."},
    {text: "While qwerty keyboarding is based solely in the fingers, stenography incorporates the forearms into keypresses. This way, \
    the fingers don't have to press as hard, and there is less wrist strain as well."},
    {text: "For home row placement, the ends of the fingertips are placed in the cracks between keys (see above).",
    highlight: true, highlightElement: document.getElementById("side-view")},
    {text: "The thumbs are turned on their sides, also above cracks (see the thumbs on left image for another view of this).",
    highlight: true, highlightElement: document.getElementById("thumb-side"), extraCode: "adjustThumb"},
    {text: "Each finger can reach forward to press the top key (watch the hands above move when you press ENTER)...",
    highlight: true, highlightElement: document.getElementById("finger-side-tip"), extraCode: "readjustThumb"},
    {text: "Notice the movement on the left image, as well -- the teal represents a very simplified fingertip. \
    The grayish circles are just visual aids to help you see which keys are being pressed.",
    extraCode: "pointerForward"},
    {text: "Now, backwards movement." + '<br><br>' + '\
    <a href="https://www.artofchording.com/layout/chorded-keyboard.html#home-row" target="_blank">' + "\
    Here" + '</a>' + " are some useful images showing these positions.", width: 350,
    extraCode: "pointerBackward"},
    {text: "You will notice that some keys are duplicated on the keyboard. For instance, qwerty Q, A, and colon/semicolon \
    are all steno S's."},
    {text: "On a steno machine, the left-hand S's are combined into one long key. On a qwerty keyboard, you can use whichever one is easiest for the word \
    you are typing."},
    {text: "We will practice typing these different S's soon."},
    {text: "After you complete each exercise, you will see a message that says to type S-S to repeat the exercise. \
    This means press both S's at the same time -- that is, qwerty A + semicolon OR qwerty Q + semicolon."},
    {text: "Let's type our first key now. Take your left-hand pinky, and press either S key (qwerty Q or A).", lesson: ["S", "S", "S", "S", "S"]},
    {text: "Now try using your right-hand to type the third S key. In steno, right-hand keys are designated with a dash preceding them. \
    So -S means right-hand S. Left-hand keys are written with no dash or with a dash following them: S or S-.",
    lesson: ["-S", "-S", "-S", "-S", "-S"]},
    {text: "Remember, S or S- means use the left hand. -S means use the right hand.",
    lesson: ["S", "-S", "S", "-S", "-S"]},
    {text: "Let's try typing a word. \
    Type T (qwerty W) with your left ring finger." + '<br>' +"\
    Type A (qwerty C) by moving your left thumb a little to the left." + '<br>' + "\
    Last, move your RIGHT pointer down to R (qwerty J).",
    width: 800, lesson: ["S", "T", "A", "-R"]},
    {text: "When you start doing full stenography on your keyboard, you will press all of those keys at the same time. \
    Give it a try, pressing the same keys you just used. You should STAR (not STRA) spelled out in the black highlights \
    above the keyboard. If not, press SPACE and try again. If you are sure you are pressing the right keys, but you are not \
    seeing STAR, press ENTER.", width: 1000, highlight: true, highlightElement: document.getElementById("steno-order"),
    lesson: ["star"], extraCode: "clearPractice"},
    {text: "Some non n-key-rollver keyboards may not output STAR correctly, while others will be able to. \
    If your keyboard is not able to, there is a workaround. Press S. While still holding S, press T, then \
    release only S. Then press A while still holding T, and release T while A is still pressed. \
    Repeat this once more for A to R.", width: 900, lesson: ["star", "star", "star", "star"]},
    {text: "This technique is a simplified version of " + '<a href="http://plover.stenoknight.com/2011/02/plover-211-released.html" \
    target="_blank">' + "arpeggiating" + '</a>' + " keys. The more advanced form of arpeggiating \
    involves pressing 2-3 keys at a time instead of just one."},
    {text: "Arpeggiating is much less efficient than pressing all the keys at once, \
    but it works well enough until you are ready to get an n-key rollover keyboard."},
    {text: "So just what was this bar here, anyway? This shows steno order. This is the order that keys are processed by steno software \
    in order to form a word.", top: lessonTitleTop-15,
    highlight: true, highlightElement: document.getElementById("steno-order")},
    {text: "For each stroke of keys you type, the keys will be processed from left to right and top to bottom."},
    {text: "Left-hand keys precede vowel keys in a stroke, and vowels precede right-hand keys."},
    {text: "This is the reason you may have gotten 'STRA' instead of 'STAR' if you accidentally typed a left-hand R in \
    the exercise earlier. The left-hand R is processed before vowels, while the right-hand R is processed after vowels."},
    {text: "Here is a mnemonic for remembering steno order consonants: STicK PaW HeRe FoR Peanut Butter. LarGe ToeS DoZe 🐕 (modified \
    from " + '<a href="https://github.com/openstenoproject/plover/wiki/Stenotype-Mnemonics-for-Beginners-(English)" \
    target="_blank">' + "here" + '</a>' + ")."},
    {text: "Last, we have this little drum button. Press this to toggle back and forth between the keyboard and a metronome view. \
    With the metronome, you can practice the current exercise at a target strokes/minute. This will be close to the words per minute - punctuation \
    and multiple strokes per word will mean a slower WPM if you type everything on the beat.", width: 1000, highlight: true,
    highlightElement: document.getElementById("hide-button"), lesson: ["S", "-S", "S", "-S", "S"]},
    {text: "If you click the BPM slider, you can use the left and right arrow keys to fine-tune the BPM setting."},
    {text: "Don't worry if you don't remember everything yet or if it looks like you cannot possibly write words like \"water\". \
    These things will be reinforced and explained in the upcoming lessons."},
    {text: "Press ENTER to go to the next lesson!"},
    {text: document.getElementById("lesson1").textContent, top: lessonTitleTop, width: lessonTitleWidth, extraCode: "enterToContinue"},
    {text: "The left pinky is in charge of the S keys.", left: 10, top: 50, extraCode: "greenPinkies"},
    {text: "On a steno machine, the S's are combined into one big key.", left: 5, top: 50},
    {text: "You can use whichever S key you want. You might find that the top S is easier for some words, and the bottom S is easier for others."},
    {text: "We will practice this next. At the end of the typing exercise, you can type S-S to repeat the exercise."},
    {text: "This means press a left-pinky S (qwerty Q or qwerty A) and a right-pinky S (qwerty colon/semi-colon) at the same time."},
    {text: "You can also press S-S to restart the exercise at any point."},
    {text: "You can also skip any exercise at any time by hitting ENTER."},
    {text: "Give it a try.", lesson: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]},
    {text: "The right pinky is in charge of four keys: -T, -S, -D, and -Z.", left: 70, top: 45, width: 350, extraCode: "greenPinkiesRight"},
    {text: "Note that the right-hand letters are designated with a dash (e.g. -S).", left: 70, top: 45},
    {text: "This is the case unless they are in a word like STAR -- in that case, only one R (the right one) can come after \
    A in steno order, so the dash is not necessary."},
    {text: "Left-hand letters are occasionally designated with a dash afterwards (S-), especially \
    if they are followed by a right-hand letter but no vowel.", left: 70, top: 45, width: 350},
    {text: "Try reaching your right pinky to each key while keeping other fingers close to home position.",
    extraCode: "rightPinkies"},
    {text: "Now we will review all of the pinky keys. Remember that S is the left S, and -S is the right S.",
    extraCode: "pinkyLessons"},
    {text: "Time for your first briefs! Briefs are abbreviations for longer words. So, instead of typing out IS for \"is\", \
    you can just type S.", vocab: ["is: S"]},
    {text: "You can click on a word in the vocab box to move the hands above to the corresponding keys.", vocab: ["is: S"]},
    {text: "Note that S, but not -S, is a brief. If you just type -S in word processor with your steno software on, it will likely output \"es\". This is \
    because you use -S to make words plural. It will add \"s\" or \"es\" to words, whichever is appropriate. Similarly, -Z will \
    also output \"s\" or \"es\" to make other words plural (such as those already ending in \"s\").",
    width: 725},
    {text: "-D serves a similar purpose. It adds \"ed\" to words to make them past tense. You can use these suffixes with a word you type, or right after. E.g. STARS (all in \
    one movement, or \"chord\") and STAR\/-S (two chords, separated by the forward slash -- press S,T,A,R together, release keys, then press -S) both output \"stars\".",
    width: 725},
    {text: "-T is another brief. If you type it, your steno software will output \"the\".", vocab: ["the: -T"]},
    {text: "Now we will practice some briefs and do a little bit of letter review as well.",
    extraCode: "pinkyLessonsBriefs"},
    {text: "And, for extra credit ... You haven't been formally introduced to all of these letters, but you have typed them if you \
    did the tutorial. Give these a try. The vocab words written with a \"~\" in the vocab list are included to teach theory, \
    but we will not practice them in these exercises.", vocab: ["star: STAR", "stars: STARS", "~(or STAR\\-S)", "starred: STARD", "~(or STAR\\-D)"],
    lesson: ["S", "T", "A", "-R", "star", "stars", "starred"]},
    {text: document.getElementById("lesson2").textContent,  top: lessonTitleTop, width: lessonTitleWidth, extraCode: "clearGreenPinkies"},
    {text: "This lesson will focus on vowels. To begin, let's practice the keys.", extraCode: "vowelKeys"},
    {text: "Where is the I key, you ask? There isn't one. Instead, you press the E and U keys together.",
    extraCode: "greenThumbs", lesson: ["E", "U", "I", "E", "U", "I", "I", "I", "I", "I"]},
    {text: "When you press a vowel key by itself, you get the short vowel sounds, such as in \
    sat, set, sit, sod, and suds. Let's practice these short vowels.",
    vocab: ["sat: SAT", "set: SET", "sit: SEUT", "sod: SOD", "suds: SUDZ"], extraCode: "shortVowels"},
    {text: "You probably noticed that \"suds\" was written with a -Z at the end instead of an -S. \
    If we used an -S, we would have written SUSD (\"sussed\") instead since -S is before -D in steno order. \
    This is why we use -Z to add -s or -es to words ending in -D.",
    lesson: ["suds", "stars", "suds", "stars", "suds"]},
    {text: "** LONG VOWEL Similarly, to add -s or -es to words that already end in -S, we use -Z.", vocab: ["use", "uses"],
    vocab: ["use: AOUS", "uses: AOUSZ"], lesson: ["use", "use", "uses", "use", "uses", "uses"]},
    {text: "Now we will look at long vowel sounds, such as in say, seed, sight, sow (like sow seeds), and suit."},
    {text: "To form these, press the letter key for the vowel, then add in all the thumb keys of the opposite thumb. \
    So long A is AEU, long E is AOE, long I is AOEU, and long U is AOU."},
    {text: "Long O is the only exception -- you will press OE to make a long O sound."},
    {text: "We will learn more about why O doesn't follow the rules soon. For now, let's practice the long vowel \
    sounds."},
    {text: "You may have some trouble pressing more than two vowel keys at once on a non-NKRO keyboard. \
    So I will repeat the arpeggiating technique once more for the word \"seed\": \
    Press S, press A without releasing S. Release S. Without releasing A, press O. Release A. And so on for O to E, E to D.",
    vocab: ["say: SAEU", "seed: SAOED", "sight: SAOEUT", "sow: SOE", "suit: SAOUT"], extraCode: "longVowels"},
    {text: "Once you get used to arpeggiating with one key at a time, try two or three keys at a time. Depending on your keyboard and \
    the word you are typing, you may even be able to press all the left-hand keys at once followed by all the right-hand keys. \
    For instance, try arpeggiating \"sight\" by pressing SAO (all keys at once), continue pressing SAO down and press EUT all at once, \
    then release SAO, then release EUT.",
    lesson: ["sat", "say", "set", "seed", "sit", "sight", "sod", "sow", "suds", "suit"]},
    {text: "We will revisit that pesky O now. The chord that should be a long O, OEU, is instead reserved for \"oy\" sounds, like \
    in soy.", vocab: ["soy: SOEU"], lesson: "soy soy soy soy soy".split(" "), extraCode: "greenO"},
    {text: "We have another set of keys, AO, for \"oo\", like in soot. However, AO is also used to distinguish between homophones. \
    Rode is ROED, while road is RAOD. We will practice these R- words even though we haven't learned the R- key. Use the left-hand R. \
    (Note that you may need to arpeggiate single keys for \"road\" since the keys are close together.)",
    vocab: ["soot: SAOT", "road: RAOD", "rode: ROED"],
    lesson: ["soot", "road", "soot", "road", "rode", "road", "rode", "rode", "road", "soot"], extraCode: "greenOO"},
    {text: "Similarly, AE is used for words like see (SAOE) and sea (SAE). The word containing \"ea\" gets the EA. If neither word contains \
    \"ea\", e.g. sail and sale, the one that contains \"a\" and \"e\" would get the AE (sale, in this case).",
    vocab: ["see: SAOE", "sea: SAE"],
    lesson: ["see", "see", "sea", "sea"],
    extraCode: "greenAE"},
    {text: "Another combo is AU, used for aw-sounds like in saw (SAU). Notice that \"sod\" was writted SOD, not SAUD, even though you \
    might say the vowel sounds the same. AU is used with aw sounds in words spelled with \"au\"/\"aw\", like \"laud\" and \"law\"",
    vocab: ["saw: SAU"], lesson: "saw saw saw saw saw".split(" "), extraCode: "greenAU"},
    {text: "One last combo is OU, used for ow-sounds like in out (OUT). Words with this sound will have an \"ou\" (ouch) or \"ow\" (now).",
    vocab: ["out: OUT"], lesson: "out out out out out".split(" "), extraCode: "greenOU"},
    {text: "Note that for words beginning with out- the prefix AOUT is used, rather than the chord OUT. This helps keep words together \
    -- e.g. outset instead of out set. (This is known as a word boundary error.) When we practice prefixes and suffixes in these lessons, \
    they will often be broken up into strokes. That is, you will see \"out-\" and \"set\" for \"outset\" instead of just \"outset\". If you see \
    one box, you will need to use one stroke. If you see multiple boxes, you will need that number of strokes.",
    affix: ["AOUT: out-"], lesson: "out- out- out- out- out-".split(" "), extraCode: "greenThumbs"},
    {text: "** Let's review.",
    vocab: ["soy: SOEU", "soot: SAOT", "rode: ROED", "road: RAOD", "sea: SAE", "see: SAOE", "saw: SAU",
    "out: OUT", "outset: AOUT/SET"],
    extraCode: "oVowels"},
    {text: "That's enough vowel practice for now. Let's move on to a new lesson."},
    {text: document.getElementById("sentences1").textContent,  top: lessonTitleTop, width: lessonTitleWidth, extraCode: "clearGreenThumbs"},
    {text: "We will learn a little bit of punctuation now. We haven't met all of these keys yet, but we will get better \
    acquainted with them later. ** These are all single chords. The hyphen between letters is for clarity, for left-hand keys not followed by a vowel.",
    vocab: ["\.: TP-PL", "\,: KW-BG", "\-: H-PB"]},
    {text: "You won't have to worry about typing spaces. Steno software adds them automatically."},
    {text: "EU SAEU KW-BG -T SAOE H-PB SAU EU ROED S- SO STARD TP-PL", vocab: ["\.: TP-PL", "\,: KW-BG", "\-: H-PB", "I: EU", "so: SO"],
    lesson: ("I say , the see - saw I rode is so starred .").split(" "), full: true},
    {text: "U SET -T SOD TP-PL U SEUT TP-PL U SOE SAOEDZ TP-PL", vocab: ["you: U"],
    lesson: ("You set the sod . You sit . You sow seeds .").split(" "), width: 350, full: true},
    {text: "EU SAOE U SAU -T SAE SUDZ TP-PL", lesson: ("I see you saw the sea suds .").split(" "), full: true},
    {text: "-T AOEU SAU AEU SAOEUT H-PB RODZ ROED -T RAOD TP-PL", vocab: ["a: AEU", "(the word, not the letter)", "eye: AOEU", "rods: RODZ"],
    lesson: ("The eye saw a sight - rods rode the road .").split(" "), full: true},
    {text: "-T SAOT SEUTS KW-BG -T RAOT ROTS TP-PL", vocab: ["root: RAOT", "rots: ROTS"], lesson: ("The soot sits , the root rots .").split(" "),
    full: true},
    {text: "-T SOEU SAOUT S- AEU SAOEUT TP-PL", lesson: ("The soy suit is a sight .").split(" "), full: true},
    {text: document.getElementById("lesson3").textContent, top: lessonTitleTop, width: lessonTitleWidth},
    {text: "The left ring finger is in charge of T and K. We mentioned in the last lesson that stenography is phonetic -- so any words starting with a \"k\" \
    sound will use the K key -- e.g. call and cat. By pressing T and K together, we get the letter D. Each of these letters, in\
    turn, also functions as a brief.",
    vocab: ["it: T", "can: K", "did: TK"], extraCode: "leftRing"},
    {text: "For the right ring finger, we have -L and -G. G is also used to add -ing to the ends of words. -LG is used for words \
    that end in -lge. This is not phonetic (-lge sounds like -lj), but it is used so that the -L and -J keys are not in conflict (more \
    on this when we get to the middle finger keys). -LG is also used for -lch, as there are not many words that are the same other than ending \
    in -lch or -lge.", affix: ["-ing: -G", "-lch, -lge: -LG"], vocab: ["starring: STARG", "~(or STAR\-G)"],
    extraCode: "rightRing"},
    {text: "Let's practice these letters in a few new words.", vocab: ["call: KAUL", "kale: KAEUL", "tug: TUG", "dig: TKEUG", "tile: TAOEUL",
    "dial: TKAOEUL"],
    extraCode: "rightRingReview"},
    {text: "Do you remember that we mentioned \"sale\" vs \"sail\" in the pinkies lesson? Let's practice them now that we have -L."},
    {text: "Do you remember which word gets the EA?" + '<br><br>' + "The one that has an \"ea\" (like when we wrote \"sea\")" + '<br>' + "OR" + '<br>' + "the one that has \
    an \"e\" and an \"a\" (like in sale).",
    vocab: ["sale: SAEL", "sail: SAEUL"], lesson: ["sale", "sale", "sail", "sail", "sale", "sail", "sale", "sail"]},
    {text: "Now we will learn a technique for writing words called inversion. Every once in a while, you can bend the application of steno order \
    just a teensy bit so you can fit a word into one chord. If two letters are adjacent in a chord, but are out of steno order, you can swap \
    their order. Consider the word \"decide\". We could write this in two strokes as TKE/SAOEUD. S and TK are adjacent, so we can invert them to \
    get STKAOEUD.", vocab: ["decide: STKAOEUD", "~(or TKE/SAOEUD)"], lesson: ["decide", "decide", "decide", "decide", "decide"]},
    {text: "Notice that to write STKAOEUD, we dropped an unstressed vowel. This is a common practice in stenography for words that have more than one \
    syllable. Generally, vowels that are pronounced like \
    \"uh\" (" + '<a href="https://blog.allaboutlearningpress.com/schwas/" target="_blank">' + "schwa sound" + '</a>' + ") are \
    unstressed. For instance, banana is often spoken as buh-na-nuh, \
    " + '<a href="https://pronuncian.com/intro-to-schwa" target="_blank">' + "with the first and third a's unstressed" + '</a>' + "."},
    {text: "Consider the word \"setting\". We could write SET/-G. But there are just four keys here. Can we fit this into \
    a single stroke somehow? Perhaps we can use inversion?"},
    {text: "Suppose we try SETG. This does not follow steno order. What we can do is move the -G to get SEGT. \
    This is called \"folding in\" the ending, and is similar to inversion. However, folding in the ending does \
    not always involve inversion. When we wrote \"starring\" as STARG instead of STAR/-G, we folded in the ending without inversion.",
    vocab: ["setting: SEGT", "calling: KAULG", "kidding: KEUGD"],
    lesson: ["setting", "starring", "calling", "kidding", "setting", "kidding", "calling", "kidding", "setting", "setting"]},
    {text: "We can also use a folded in -E for some words ending in -y. For instance, sorry = SOR + a folded in -E = SOER.",
    vocab: ["sorry: SOER", "~(or SOR/REU)", "carry: KAER", "~(or KAR/REU)"], lesson: ["sorry", "carry", "sorry", "carry", "sorry"]},
    {text: "Time for more practice. Recall that \"use\" can be written either phonetically (AOUZ) or based on spelling (AOUS)." + '<br><br>' + "\
    -T TKOG SAEUD TO US T- KO AOUZ AEU TKAEU OUT TP-PL",
    vocab: ["dog: TKOG", "said: SAEUD", "(say was SAEU)", "to: TO", "us: US", "could: KO", "day: TKAEU"],
    lesson: ("The dog said to us it could use a day out .").split(" "), full: true},
    {text: "T-S AS KOELD AS AOEUS OUDZ TP-PL",
    vocab: ["it's: T-S", "as: AS", "cold: KOELD", "ice: AOEUS", "outside: OUDZ"],
    lesson: ("It's as cold as ice outside .").split(" ")},
    {text: "AE is used to distinguish between the homophones in this sentence. Tale has an A and E in it, and tail does not, \
    so tale is the one that is mapped to AE.)",
    vocab: ["sagged: SAGD", "its: EUTS", "tail: TAEUL", "at: AT", "sad: SAD", "tale: TAEL"],
    lesson: ("The dog sagged its tail at the sad tale .").split(" "), full: true},
    {text: "To type -TD, place your pinky on the crack between -T and -D. Normally, fingers stay in their own columns. \
    The right pinky is an exception since it has to press two columns of keys. The pointers will also break this rule for \
    asterisks, as we will see soon enough.",
    vocab: ["it'd: EUTD", "ill: EUL", "I'll: AOEUL", "stay: STAEU", "sighed: SAOEUD", "\": KW-GS", "(^ opening parenthesis)", "\": KR-GS",
    "(^ closing parenthesis)"],
    lesson: ("\" It'd set us ill . I'll stay \, \" the dog sighed .").split(" "), full: true},
    {text: "KW-GS SAUE AUL -T AOEUS KW-PL AOEUL DO SKAEUGT TP-BG KR-GS -T TKOG KAULD TP-PL",
    vocab: ["all: AUL", "do: DO", "skating: SKAEUGT", "called: KAULD", "?: KW-PL", "!: TP-BG"],
    lesson: ("\" See all the ice ? I'll do skating ! \" the dog called .").split(" "), full: true},
    {text: document.getElementById("lesson4").textContent, top: lessonTitleTop, width: lessonTitleWidth, extraCode: "greenLeftMiddles"},
    {text: "Moving on to the middle finger keys, we have P and W for the left hand. Pressed together, the P and W keys produce B.",
    affix: ["be-: PWE"], vocab: ["about: PW", "with: W", "bee: PWAOE"], extraCode: "leftMiddle"},
    {text: "Let's quickly revisit the -lge suffix (-LG) we had before. Now that we have B-, we can type a few words with the -lge ending.",
    affix: ["-lch, -lge: -LG"], vocab: ["bilge: PWEULG", "bulge: PWULG"],
    lesson: ["bilge", "bilge", "bulge", "bulge", "bilge", "bulge"]},
    {text: "Recall that the -LG suffix is also used for -lch endings.", affix: ["-lch, -lge: -LG"], vocab: ["squelch: SKWELG", "belch: PWELG"],
    lesson: ["belch", "squelch", "squelch", "belch", "belch"]},
    {text: "For the right hand, we have -P, -B. We get -N when they are pressed together.",
    vocab: ["an: -N", "be: -B", "being: -BG", "can be: K-B", "between: PWE/TWAOEPB", "(or TWEPB)"], extraCode: "rightMiddle"},
    {text: "Now that we have the P key, we can write the brief for \"and\", SKP (all left keys). We can combine this with other keys to make many short phrases. \
    The vocab list shows a handful of examples.",
    vocab: ["and: SKP", "and the: SKP-T", "and you: SKPU", "and I: SKPEU", "and a: SKPA", "and I can: SKPEUBG"],
    lesson: ["and", "and I", "and you", "and a", "and the", "and I can"], extraCode: "leftMiddleAgain"},
    {text: "We can make some similar phrases using \"it\".",
    vocab: ["it was: TWAS", "it wasn't: TWAEPBT", "it would: T-LD", "it can: T-BG", "it could: T-BGD", "it'll: T-L", "it has: T-Z", "-ing it: T-G"],
    lesson: ["it was", "it wasn't", "it would", "it can", "it could", "it'll", "it has", "see", "-ing it"]},
    {text: "The middle fingers are also used in typing a few other new letters. For the left hand, TP is F, KW is Q (you may have noticed this in the word)\
    \"squelch\" earlier; the keys for Q happen to be phonetic), and TKPW is G, \
    and KP is X. If you are arpeggiating, try two keys at once for G (TK then PW).",
    vocab: ["if: TP", "go: TKPW", "examine: KP", "request: KW"],
    extraCode: "middleLettersLeft"},
    {text: "For the right hand, -PL is -M, -BG is -K, -BGS is -X (think -KS to help you remember this), and -PBLG is -J.",
    extraCode: "middleLettersRight"},
    {text: "Time to review! Let's start with the left hand.", extraCode: "middleLettersReviewLeft"},
    {text: "Now we will review the right-hand letters.", extraCode: "middleLettersReviewRight"},
    {text: "Let's review all the letters we have learned on both hands.", extraCode: "middleLettersReviewAll"},
    {text: "Now we will practice some more sentences.",
    vocab: ["some: SOPL", "good: TKPWAOD", "people: PAOEPL", "only: OEPBL", "want: WAPBT", "time: TAOEUPL"],
    lesson: "Some good people only want time .".split(" ")},
    {text: "PWUT KW-BG PWEU -T WAEU KW-BG WE WO TAEUBG TWO BAUS WE WAPBT TO TP-PL",
    vocab: ["but: PWUT", "by: PWEU", "way: WAEU", "we: WE", "would: WO", "take: TAEUBG", "two: TWO", "because: BAUS", "(or BAUZ)"],
    lesson: "But , by the way , we would take two because we want to .".split(" "), full: true},
    {text: "KOPL OPB PWABG SKP TKPWET WUPB TP-PL",
    vocab: ["come: KOPL", "on: OPB", "back: PWABG", "get: TKPWET", "(or TKPW-T)", "one: WUPB"],
    lesson: "Come on back and get one .".split(" ")},
    {text: "WEU WO U PWAOEU KW-PL WEU WO -B TKPWAOD KW-PL",
    vocab: ["which: WEU", "buy: PWAOEU"],
    lesson: "Which would you buy ? Which would be good ?".split(" "), full: true},
    {text: "WEL KW-BG S- T- AOEPB S-G U WAPBT KW-BG SKP S-G ELS UP OPB TOP TAO KW-BG",
    vocab: ["well: WEL", "even: AOEPB", "something: S-G", "else: ELS", "up: UP", "top: TOP", "too: TAO"],
    lesson: "Well , is it even something you want ? And something else up on top too ?".split(" "), full: true},
    {text: "Here are a few new prefixes and suffixes.",
    affix: ["-shun: -GS", "(e.g. -tion, -sion)", "-kshun: -BGS", "-ment: -PLT"],
    vocab: ["station: STAEUGS", "section: SEBGS", "cement: SEPLT", "(or SAOEPLT)"],
    lesson: ["station", "section", "cement", "section", "cement", "station", "station", "section", "section", "cement"]},
    {text: "Just a few more prefixes, then we will move on to the pointers.",
    affix: ["-nge: -PBG", "im-: EUPL", "ent-/int-: SPW"],
    vocab: ["sponge: SPOPBG", "possible: POB", "impossible: EUPL/POB",
    "I'm: AOEUPL", "entice: SPWAOEUS", "intact: SPWABGT"],
    extraCode: "middleAffixes"},
    {text: document.getElementById("lesson5").textContent, top: lessonTitleTop, width: lessonTitleWidth, extraCode: "clearGreenMiddles"},
    {text: "For our last pair of fingers, we will finally introduce those bizarre asterisks in the middle of the keyboard.",
    extraCode: "greenAsterisks"},
    {text: " On a steno machine, there is just one long key for the asterisk, kind of like the left S key. Normally, the right index finger is in charge of the \
    asterisk. However, it is acceptable to use whichever index finger feels suitable for the word you are trying to write."},
    {text: "The asterisk allows you to delete the last stroke that was output. It also is used to distinguish between homophones or other chords that have the same keys. \
    We will not be doing any deleting in these lessons, but we will use the asterisk to distinguish chords."},
    {text: "First, let's take a look at the other letters for the index fingers. The left index finger controls the H and R keys. Combined, these \
    produce L.", vocab: ["had: H", "are: R", "will: L"], extraCode: "leftPointer"},
    {text: "The right pointer presses the -F key and the -R key. -FR does not produce a letter, but it is a brief for \"ever\". You can produce related briefs \
    by adding letters. You can get \"every\" by folding in an -E. Then we can get \"everybody\" as \"every\" + -B, and \"everything\" as \"every\" + -ing (-G)",
    vocab: ["of: -F", "off: OF", "are: -R", "(or R-)", "ever: -FR", "every: EFR", "everything: EFRG", "everywhere: WEFR",
    "everybody: EFRB", "everyday: EFRD", "everyone: EFRPB"], extraCode: "rightPointer"},
    {text: "We have a number of new letters that we type now that we have the pointer finger keys, such as M (PH) and N (TPH).",
    extraCode: "pointerLetters2"},
    {text: "We also have Z (S*), V (SR), and -V (*F). Frequently, if there is no conflict, just the -F can be used in place of *F. \
    (We will use *F to practice typing -V key here, and -F in the words.)",
    vocab: ["love: HRUF", "(or HROF)", "(or HR*UF)", "save: SAF", "savvy: SA*EF", "(^ folded-in -E suffix)", "satisfy: SAEF", "safe: SAEUF"],
    extraCode: "pointerLetters1"},
    {text: "You can also use -F in place of -S in words that have an -S before the end, such as MOFT (most) and MAFK (mask). \
    Sometimes you will need to use *S instead of -F, such as to differentiate LIFT (lift) and L*IS (list).", affix: ["-st: -FT", "-st: *S"],
    vocab: ["most: MOFT", "mask: MAFK", "~(or PHAS/-BG)", "lift: LIFT", "list: L*IS"],
    lesson: ["most", "mask", "most", "mask", "lift", "list", "list", "lift", "list", "list"]},
    {text: "We also have C (KR) as well as the ch-sound (KH). We generally use S- or K- to write words beginning with \"c\". However, there \
    are some cases when we use C to distinguish chords (such as \"sent\" and \"cent\"). The right-hand -ch/-tch is produced using -FP.", extraCode: "pointerLetters3"},
    {text: "Some other letters that involve the pointers are Y (KWR), J (SKWR).", extraCode: "pointerLetters4"},
    {text: "There are only a few new briefs for these keys.", vocab: ["in: N", "why: Y", "have: V", "consider: C"], extraCode: "pointerBriefs"},
    {text: "We can form some \"some\" words in the same way that we formed \"every\" words. earlier",
    vocab: ["something: S-G", "somewhere: SWR", "somebody: S-B",
    "someday: STKAEU", "someone: SPHPB", "sometime: STAOEUPL", "somehow: SPHOU","someplace: SPHRAEUS"], extraCode: "someWords"},
    {text: "Let's review these new letters a little more.", extraCode: "pointerLettersReview"},
    {text: document.getElementById("lesson6").textContent, top: lessonTitleTop, width: lessonTitleWidth, extraCode: "clearGreenPointers"},
    {text: "Now we will work on some sentences with some more new briefs."},
    {text: "TPHOU KW-GB HRAOBG AF HEUPL TP-PL HE S- TPH HEUS RAOPL TH AFR/TPHAOPB.", affix: ["after-: AFR"],
    vocab: ["now: TPHOU", "look: HRAOBG", "him: HEUPL", "he: HE", "his: HEUS", "or HEUZ", "room: RAOPL", "this: TH", "after: AF",
    "afternoon: AFR/TPHAOPB", "~(or AFPB)"],
    lesson: ("Now , look after him . He is in his room this after- noon .").split(" "), full: true},
    {text: "TKO U TPHOE HOW UR TKPW-G TPHAO KWROUR HOUS KW-PL",
    vocab: ["know: TPHOE", "how: HOW", "you're: UR", "going: TKPW-G", "into: TPHAO", "your: KWROUR", "house: HOUS"],
    lesson: ("Do you know how you're going into your house ?").split(" "), full: true},
    {text: "THE THEU THER PHAEB TKPW-G OUT THR- TPH THAEUR SOBGS",
    vocab: ["they: THE", "think: THEU", "they're: THER", "maybe: PHAEB", "(^ folded-in -E)", "(or PHAEUB)", "there: THR", "their: THAEUR", "socks: SOBGS"],
    lesson: ("They think they're maybe going out there in their socks .").split(" "), full: true},
    {text: "HR SHE HR-S TKPWEUF PHE PHUFP -F HER WORBG KW-BG OR HR SHE SKWRUFT TKPWEUF PHE PHEU WORBG KW-PL",
    vocab: ["she: SHE", "also: HR-S", "~(or AL/SO)", "give: TKPWEUF", "me: PHE", "much: PHUFP", "her: HER", "work: WORBG", "or: OR",
    "just: SKWRUFT", "my: PHEU"],
    lesson: ("Will she also give me much of her work , or will she just give me my work ?").split(" "), full: true},
    {text: "PHOFT -F THEZ R OUR PHAEPB TPEURS TKRAFTS TP-PL",
    vocab: ["these: THEZ", "our: OUR", "many: PHAEPB", "(^ folded-in -E)", "first: TPEURS", "(or TPEUFRT)", "drafts: TKRAFTS"],
    lesson: ("Most of these are our many first drafts .").split(" "), full: true},
    {text: "HOU R TPHEU -F THEPL ERL (or ER/HREU) KW-PL",
    vocab: ["any: TPHEU", "them: THEPL", "early: ERL", "~(or ER/HREU)"],
    lesson: ("How are any of them early ?").split(" "), full: true},
    {text: "S- T- OEFR KW-BG THEPB KW-BG OER THAPB THA KW-PL EU APL AUFR/SKWROEUD TP-BG",
    vocab: ["over: OEFR", "then: THEPB", "other: OER", "than: THAPB", "that: THA", "am: APL", "overjoyed: AUFR/SKWROEUD"],
    lesson: ("Is it over , then , other than that ? I am over- joyed !").split(" "), full: true},
    {text: "WHA F- WH TPHOER KWRAOER STARTS KW-BG TH KWRA*ER S- TPHOT HRAOEUBG TPHU KW-PL",
    vocab: ["what: WHA", "when: WH", "another: TPHOER", "year: KWRAOER", "starts: STARTS", "area: KWRA*ER",
    "not: TPHOT", "like: HRAOEUBG", "new: TPHU"],
    lesson: ("What if when another year starts , this area is not like new ?").split(" "), full: true},
    {text: "WHO HR PHAEUBG TPHO KAEUBGS KW-PL",
    vocab: ["who: WHO", "make: PHAEUBG", "no: TPHO", "cakes: KAEUBGS"],
    lesson: ("Who will make no cakes ?").split(" "), full: true},
    {text: "TH S- TPHOT TP-R -T PHAPB TPR- -T STOR KW-BG WHO TPAURGT THA EU TPORGT THEUPBGS TP-PL" + '<br><br>' + "\
    TPAUR is the prefix for-. TPOR is used to differentiate forgot and forget. Also notice that \"for\" is F-R, and \"from\" \
    is FR-, so they use the same R as if they were written out in full.",
    affix: ["for: TPAUR"], vocab: ["for: TP-R", "from: TPR-", "man: PHAPB", "store: STOR", "forgot: TPAURGT",
    "forget: TPORGT", "things: THEUPBGS"],
    lesson: ("This is not for the man from the store , who forgot that I forget things .").split(" "), full: true},
    {text: "THAS AUL THAR THR TP-PL", vocab: ["that is: THAS", "that are: THAR"],
    lesson: ["That is", "all", "that are", "there", "."], full: true},
    {text: "EU SR TO SR-T WUPB THA S- HAF OF TP-PL SAOE KW-PL -T TAG SEZ HA*F OF TP-PL",
    vocab: ["I have: SREU", "to have: TOF", "half: HAF", "tag: TAG", "says: SEZ", "(or SAEUZ)", "(or SAEUS)", "1/2: HA*F"],
    lesson: ("I have to have the one that is half off . See ? The tag says 1/2 off .").split(" "), full: true},
    {text: document.getElementById("lesson7").textContent, top: lessonTitleTop, width: lessonTitleWidth},
    {text: "Let's take a look at a few more prefixes and suffixes."},
    {text: "HURB KW-BG PRERBS PWAEB TP-PL", affix: ["-sh: -RB", "-shus: -RBS"], vocab: ["hush: HURB", "precious: PRERBS", "baby: PWAEB", "~(or PWAEU/PWEU)"],
    lesson: ("Hush , precious baby .").split(" "), full: true},
    {text: "-T AFRP HREFL AT AET A*PL S- AFRPL TP-PL" + '<br><br>' + "-FRP allows us to write -mple just by adding an -L, -FRPL. We can't use *PL for amp because \
    A*PL is used for a.m., instead. We can use *PL to write ample as A*PL/*L, however. We use *L for the suffix -le. A*PL/-L outputs \"a.m. -L\".",
    affix: ["-mp: -FRP", "(or *PL)", "-le: *L"], vocab: ["amp: AFRP", "~(or APL/-P)", "ample: AFRPL", "~(or APL/-PL)", "~(or A*PL/*L)", "level: HREFL",
    "eight: AET", "a.m.: A*PL", "(APL was am)", "subtle: SUBLT", "~(or SUT/*L)"],
    lesson: ("The amp level at eight a.m. is ample and subtle .").split(" "), full: true},
    {text: "EU THAUT PHA*T H- HROEFLT TK*EPT TP-PL",
    affix: ["-th: *T"], vocab: ["thought: THAUT", "math: PHA*T", "a lot of: HROEFLT", "(a lot: HROELT)", "depth: TK*EPT"],
    lesson: (["I", "thought", "math", "had", "a lot of", "depth", "."]), full: true},
    {text: "TPH-T TPHAOEUT KW-BG SHE WEPBT EUPB/WARD KW-BG TPURT TPHAOT -T KAEUF TP-PL", affix: ["in-: EUPB", "-th: *T"],
    vocab: ["in the: TPH-T", "night: TPHAOEUT", "went: WEPBT", "inward: EUPB/WARD", "further: TPURT", "(or TP*URT)", "into the: TPHAOT", "cave: KAEUF"],
    lesson: ["In the", "night", ",", "she", "went", "in-", "ward", ",", "further", "into the", "cave", "."], full: true},
    {text: "HE SAEUD PWAO*EU TO HEUS WAEBG HREFT PW*EU/SEP HRAFT WAOEBG TP-PL" + '<br><br>' + "Notice that weak uses the AE disambiguator since it contains a and e.",
    affix: ["bi-: PW*EU"], vocab: ["bye: PWAO*EU", "weak: WAEBG", "left: HREFT", "bicep: PW*EU/SEP",
    "last: HRAFT", "weak: WAEBG", "week: WAOEBG"],
    lesson: ("He said bye to his weak left bi- cep last week .").split(" "), full: true},
    {text: "HE SWEFRBD AOEPB AS HE TKROEF SHROEL ARPBD -T KUFRB TP-PL",
    affix: ["-rve: -FRB", "-ly: -L", "(or HREU)"], vocab: ["swerved: SWEFRBD", "drove: TKROEF", "slowly: SHROEL", "~(or SHROE/HREU)", "around: ARPBD",
    "~(or A/ROUPBD)", "curve: KUFRB"],
    lesson: ("He swerved even as he drove slowly around the curve .").split(" "), full: true},
    {text: "-T PH*EUPBG AEUT -T KWROEBG SKP TKRA*PBG -T PH*EULG TP-PL" + '<br><br>' + "We can't use -LK (-LBG) to write -lk because the -L breaks up the -K chord. \
    Also note that yolk is spelled phonetically, like \"yoke\"",
    affix: ["-nk: *PBG", "-lk: *LG"], vocab: ["mink: PH*EUPBG", "ate: AEUT", "(vs AET, eight)", "yolk: KWROEBG", "drank: TKRA*PBG", "milk: PH*EULG"],
    lesson: ("The mink ate the yolk and drank the milk .").split(" "), full: true},
    {text: "W-R WR- -T KPAOURTS TPH -T KPHOPB RAOPL KEBGTD TP-PL", affix: ["con-: K-", "(or KOPB)", "(or KAUPB)", "com-: K-", "(or KOPL)"],
    vocab: ["where: W-R", "were: WR-", "computers: KPAOURTS", "common: KPHOPB", "~(or KOPL/PHOPB)", "connected: KEBGTD", "~(or KOPB/TPHEBGT)"],
    lesson: ("Where were the computers in the common room connected ?").split(" "), full: true},
    {text: "EU PHAFRPB TKOUPB -T HAUL TO HRUFRPBLG KW-BG THEPB HRUFRPB TO -T PWEFRPB TP-PL" + '<br><br>' + "-FRPBLG is used for conflicts \
    like lunch vs lurch. The -rch word is given the -FRPB ending, and -nch becomes -FRPBLG.",
    affix: ["-rch: -FRPB", "-nch: -FRPB", "(or -FRPBLG)"], vocab: ["march: PHAFRPB", "down: TKOUPB", "hall: HAUL", "lunch: HRUFRPBLG", "(or HRUPBS)",
    "lurch: HRUFRPB", "bench: PWEFRPB"],
    lesson: ("I march down the hall to lunch , then lurch to the bench .").split(" "), full: true},
    {text: "Another useful ending is -y, as in \"puppy\".", affix: ["-y: KWREU"], vocab: ["puppy: PUP/KWREU", "kitty: KEUT/KWREU"],
    lesson: "pup -y kit -y pup -y pup -y kit -y".split(" ")},
    {text: "We are going to address a few more conflicts. Consider axe vs action. -ction (you saw this as -kshun before, in the Middles lesson) is normally \
    written -BGS, and so is -X. Here, -X takes priority and we add an asterisk to -ction.",
    vocab: ["axe: ABGS", "action: A*BGS"], lesson: ["axe", "axe", "action", "action", "axe", "action", "axe", "action"]},
    {text: "Asterisks often follow conflict rules such as these. However, if one word is much more common than the conflicting word, the less common \
    word will use the asterisk instead."},
    {text: "What if we want to write a word like \"divide\"? If we try to combine TK and SR as STKR, the TK breaks up the SR. Instead, what we can do is substitue a W- \
    for the V-. So we would write TKWAOEUD. See if you can apply the same rule to \"severe\".",
    vocab: ["divide: TKWAOEUD", "~(or TKEU/SRAOEUD)", "severe: SWAOER", "~(or SE/SRAOER)"],
    lesson: ["divide", "divide", "divide", "divide", "severe", "severe", "severe", "severe"]},
    {text: "Remember using -PBG to write the -nge in sponge? What if we have something like lung and lunge? We use -PBG for the hard G sound and \
    add a * for the soft G, e.g. PWEUPBG for bing and PW*EUPBG for binge. Binge can also be written by adding -J, \
    PWEUPB/-PBLG. Similarly, we can write HRUPBG for lung and HRUPBLG or HRUPB/-PBLG for lunge. HRU*PBG is not actually mapped to anything in this case (though it \
    could be mapped to \"lunge\" based on this rule).",
    affix: ["-ng: -PBG", "-nge: -PBG", "(or *PBG)"], vocab: ["bing: PWEUPBG", "binge: PW*EUPBG", "~(or PWEUPB/-PBLG)", "lung: HRUPBG",
    "lunge: HRUPBLG", "~(or HRUPB/-PBLG)", "~(or HRUPB/*PBLG)"], extraCode: "ngeConflict"},
    {text: "Now for a little more inversion, which we introduced in the ring finger lesson. For \"concept\", we invert con- (K-) and S. We invert d and s to get TKS, the \
    \"dis\" in \"discuss\", and invert m and s to get SPH, the \"mis\" is \"mistake\". We can also invert m and r in \"summer\", SURPL.",
    vocab: ["concept: SKEPT", "~(or KOPB/SEPT)", "~(or KAUPB/SEPT)", "dismiss: STKPHEUS", "~(or TKEUS/PHEUS)", "mistake: SPHAEUBG",
    "~(or PHEUZ/TAEUBG)", "summer: SURPL", "~(or SUPL/ER)"],
    lesson: ["concept", "dismiss", "summer", "mistake", "mistake", "summer", "dismiss", "concept"]},
    {text: "One final trick -- to form some briefs, we can drop consonants or even full syllables. Recall that K is used for com- and con- prefixes. \
    Here we drop the leading a- in again, the middle t in control, the middle c in document, and the middle c in discuss.",
    vocab: ["again: TKPWEPB", "control: KROL", "~(or KAUPB/TROEL)", "~(or KOPB/TROEL)", "(or TKROEL)", "document: TKOUPLT", "~(or TKOBG/AOUPLT)",
    "~(or TKOBG/KWRAOUPLT)", "discuss: STKUS", "~(or TKEUS/KUS)"],
    lesson: ["again", "again", "control", "document", "discuss", "again", "document", "control", "discuss", "document"]},
    {text: "Here are a few more words that drop middle t's or th's. The word \"other\", which you saw as OER, also follows this pattern.",
    vocab: ["mother: MOER", "water: WAUR", "rather: RAER", "bother: PWOER"],
    lesson: ["mother", "water", "rather", "bother", "water", "water", "rather", "mother", "bother"]},
    {text: document.getElementById("lesson8").textContent, top: lessonTitleTop, width: lessonTitleWidth},
    {text: "Sometimes you will have a word or name that you do not know a chord for, and you will need to spell it out letter by letter. This \
    is called fingerspelling. To do this, use the left hand letters plus an asterisk. Since Z is S*, you will need to use a long form of Z for \
    fingerspelling, STKPW. So use S* to fingerspell S and STKPW* to fingerspell Z. Add -P to make the letter capital. Use S-P for spaces and TK-LS to remove space, \
    if needed."},
    {text: '<a href="https://thepracticetest.com/typing/practice/alphabet" target="_blank">' + "This typing site" + '</a>' + " is a great resource for \
    practicing fingerspelling. The site generates pangrams, sentences which contain all the letters of \
    the alphabet. After each exercise, it tells you which letters you should work on more, with links to letter-specific drills. It is made for qwerty keyboards, \
    so be sure to turn on Plover."},
    {text: "Now we will move on to numbers. In these lessons, we will only learn how to type single digits. You can use these single digits to form any number. However, there are more advanced techniques \
    that you can use to type large numbers more quickly."},
    {text: "A steno machine has a number bar above the keys. For a keyboard, the number keys, minus key, and plus key are part of the number bar. \
    So to type a number, press any key in the number bar plus the steno key for a particular number.", extraCode: "highlightNumberBar"},
    {text: "The hands here have not been animated to show the motions for the numbers since there are so many possible movements."},
    {text: "One way to handle the number bar is to use one finger to press a steno number as well as the number bar. So, for instance, the steno key for 1 is S-. \
    To press the number bar with this key, you could press qwerty 1 and qwerty Q both with the left pinky finger. Or you could do a more centered press \
    on qwerty Q, and instead press qwerty 1, qwerty2, and qwerty Q all at once. Or qwerty 2 and qwerty Q. Or you could use a separate finger to press the number bar while pressing \
    qwerty Q with your left pinky.", width: 650, vocab: ["1: #S", "(# means number bar)"], lesson: "1".repeat(5).split(""), extraCode: "highlightNumber1"},
    {text: "For the thumb number 0 (0 is the O key), the same hand middle finger is one way of pressing the number bar. \
    For 0, the left middle finger would press qwerty 3, qwerty 4, or both.",
    vocab: ["0: #O"], lesson: "0".repeat(5).split(""), extraCode: "highlightNumber0"},
    {text: "Here are all the digits to practice. To type 5, you can use the thumb/middle finger technique you used for 0.",
    vocab: ["0: #O", "1: #S", "2: #T", "3: #P", "4: #H", "5: #A", "6: #-F", "7: #-P", "8: #-L", "9: #-T"],
    lesson: "0123456789".repeat(2).split(""), extraCode: "highlightNumbers"},
    {text: "You can output multiple digits at once by pressing a number bar key and then as many of the digit keys as you want to press. \
    The numbers will be output in steno order."},
    {text: "Now you know all of the keys! Let's do some review!", extraCode: "clearNumbers"},
    {text: "Here is an exercise to practice the full alphabet using left-hand and thumb keys.",
    lesson: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},
    {text: "Now for the right-hand (and thumbs again). The letters that aren't available for the right hand (C, H, Q, W, Y) have been replaced by -K's and O's. \
    This is because C's and Q's at the ends of words make a -K sound, and H's and W's at the ends of words are part of a vowel sound (E is used here as the placeholder).",
    width: 650,
    lesson: ["A", "-B", "-K", "-D", "E", "-F", "-G", "E", "I", "-J", "-K", "-L", "-M", "-N", "O", "-P", "-K", "-R", "-S", "-T", "U", "-V", "E", "-X", "E", "-Z"]},
    {text: "Here is another ABC exercise. We will do the left and right letters together.", lesson: ["A", "B", "-B", "C", "-K", "D", "-D", "E", "F", "-F", "G", "-G", "H",
    "E", "I", "J", "-J", "K", "-K", "L", "-L", "M", "-M", "N", "-N", "O", "P", "-P", "Q", "-K", "R", "-R", "S", "-S", "T", "-T", "U", "V", "-V", "W", "E", "X",
    "-X", "Y", "E", "Z", "-Z"]},
    {text: "Here is a longer version of the exercise we just did.", extraCode: "lrExtendedABC"},
    {text: "And now, ABC Briefs. Left hand first.", lesson: ["A", "about", "consider", "did", "E", "if", "go", "had", "I", "J", "can", "will", "M", "in", "O",
    "P", "request", "are", "is", "it", "you", "have", "with", "examine", "why", "Z"]},
    {text: "Let's do right-hand ABC Briefs now (-K's and E's in place of letters as in the right-hand ABCs you did a few exercises back). \
    Notice that the right-hand keys have far fewer briefs than the left-hand keys did.",
    lesson: ["A", "be", "-K", "-D", "E", "of", "-G", "E", "I", "-J", "being", "-L", "-M", "an", "O", "-P", "-K", "are", "-S", "the", "you",
    "-V", "E", "-X", "E", "-Z"]},
    {text: "Here are the single-letter briefs alphabetized by word.",
    lesson: ["about", "an", "are", "be", "being", "can", "consider", "did", "examine", "go", "had", "have", "if", "in", "is", "it", "of",
    "request", "the", "why", "will", "with", "you"]},
    {text: "Last, let's practice all the prefixes and suffixes we have learned. The list is provided in the vocab box in \
    case you need a refresher.",
    vocab: ["after-: AFR", "be-: PWE", "bi-: PW*EU", "ch: KH", "-ch, -tch: -FP", "com-, con-: K-",
    "com-: KOPL", "con-: KOPB", "(or KAUPB)", "-ction (-kshun): -BGS", "-ed: -D", "ent-, int-: SPW",
    "for-: TPAUR", "im-: EUPL", "in-: EUPB", "-ing: -G", "-lch, -lge: -LG", "-lk: *LG", "-le: *L",
    "-le, -ly: -L", "-ly: HREU", "-ment: -PLT", "-mp: FRP", "(or *PL)", "-nch, -rch: -FRPB", "-nch: -FRPBLG",
    "-ng, -nge: -PBG", "-nge, -nk: *PBG", "out-: AOUT", "-rve: -FRB", "-sh: -RB", "-tion, -sion (-shun): -GS",
    "-tious, -cious (-shus): -RBS", "-st: -FT", "(or *S)", "-th: *T", "-y: KWREU"],
    lesson: ["after-", "be-", "bi-", "ch", "-ch", "com-", "con-", "-ction (-kshun)", "-ed", "ent-, int-",
    "for-", "im-", "in-", "-ing", "-lch, -lge", "-lk", "-le", "-le, -ly", "-ly", "-ment", "-mp", "-nch, -rch", "-nch",
    "-ng, -nge", "-nge, -nk", "out-", "-rve", "-sh", "-tion, -sion (-shun)", "-tious, -cious (-shus)", "-st", "-th", "-y"]},
    {text: "Last, let's practice all the prefixes and suffixes we have learned. The list is provided in the vocab box in \
    case you need a refresher.",
    vocab: ["after-: AFR", "be-: PWE", "bi-: PW*EU", "ch: KH", "-ch, -tch: -FP", "com-, con-: K-",
    "com-: KOPL", "con-: KOPB", "(or KAUPB)", "-ction (-kshun): -BGS", "-ed: -D", "ent-, int-: SPW",
    "for-: TPAUR", "im-: EUPL", "in-: EUPB", "-ing: -G", "-lch, -lge: -LG", "-lk: *LG", "-le: *L",
    "-le, -ly: -L", "-ly: HREU", "-ment: -PLT", "-mp: FRP", "(or *PL)", "-nch, -rch: -FRPB", "-nch: -FRPBLG",
    "-ng, -nge: -PBG", "-nge, -nk: *PBG", "out-: AOUT", "-rve: -FRB", "-sh: -RB", "-tion, -sion (-shun): -GS",
    "-tious, -cious (-shus): -RBS", "-st: -FT", "(or *S)", "-th: *T", "-y: KWREU"],
    extraCode: "affixReview"},
    {text: document.getElementById("lesson9").textContent, top: lessonTitleTop, width: lessonTitleWidth},
    {text: "If you completed all of the earlier lessons, you have actually already done some phrasing. Let's review one \
    " + "of these sentences now. See if you can identify anything that might be considered \"phrasing\"."},
    {text: "TPH-T TPHAOEUT KW-BG SHE WEPBT EUPB/WARD KW-BG TPURT TPHAOT -T KAEUF TP-PL", affix: ["in-: EUPB", "-th: *T"],
    vocab: ["in the: TPH-T", "night: TPHAOEUT", "went: WEPBT", "inward: EUPB/WARD", "further: TPURT", "(or TP*URT)", "into the: TPHAOT", "cave: KAEUF"],
    lesson: ["In the", "night", ",", "she", "went", "in-", "ward", ",", "further", "into the", "cave", "."], full: true},
    {text: "You may have spotted \"in the: TPH-T\" and \"into the: TPHAOT\". Each of these has a phrase expressed as a single stroke."},
    {text: "Plover includes some subject-verb phrases as well. There are eleven commonly-appearing subjects in Plover's dictionary. \
    " + "Notice that most of these use the same strokes that you have already learned for these words (exception: \"which: KH-\"). \
    " + '<br><br>' + '<table><tr><th>I</th><th>you</th><th>it</th><th>she</th><th>he</th><th>we</th>\
    ' + '<th>they</th><th>who</th><th>what</th><th>which</th><th>that</th>\
    ' + '<tr><td>EU</td><td>U</td><td>T-</td><td>SHE</td><td>HE</td><td>WE</td>\
    ' + '<td>THE</td><td>WHO</td><td>WHA</td><td>KH-</td><td>THA</td>\
    ' + '</tr></table>'},
    {text: "In phrasing, you will often see the verb stroked using the right-hand only. For the (helper) verb \"could\", we will use \"-BGD\" (-KD) rather \
    " + "than \"KO\" as we learned previously. We can then combine this with each of the subjects. \
    " + '<br><br>' + '<table><tr><th>I could</th><th>you could</th><th>it could</th><th>she could</th><th>he could</th><th>we could</th>\
    ' + '<th>they could</th><th>who could</th><th>what could</th><th>which could</th><th>that could</th>\
    ' + '<tr><td>EUBGD</td><td>UBGD</td><td>T-BGD</td><td>SHEBGD</td><td>HEBGD</td><td>WEBGD</td>\
    ' + '<td>THEBGD</td><td>WHOBGD</td><td>WHABGD</td><td>KH-BGD</td><td>THABGD</td>\
    ' + '</tr></table>'},
    {text: "Let's practice these.",
    vocab: ["[phrasing] -BGD: could", "I could: EUBGD", "you could: UBGD", "it could: T-BGD", "she could: SHEBGD", "he could: HEBGD", "we could: WEBGD",
    "they could: THEBGD", "who could: WHOBGD", "what could: WHABGD", "which could: KH-BGD", "that could: THABGD"],
    lesson: ["I could", "I could", "I could", "you could", "you could", "you could", "it could", "it could", "she could", "she could",
    "he could", "he could", "we could", "we could", "they could", "they could", "who could", "who could", "what could", "what could",
    "which could", "which could", "that could", "that could"]},
    {text: "You can form different tenses of verbs in these phrases, as well. Let's try it out using the phrase-form of believe, -BL.",
    vocab: ["[phrasing] -BL: believe", "[phrasing] -BLS: believes", "[phrasing] -BLD: believed", "you believe: UBL",
    "she believes: SHEBLS", "we believed: WEBLD"],
    lesson: ["you believe", "you believe", "she believes", "she believes", "we believed", "we believed"]},
    {text: "These types of phrases are simple enough to remember, but it can be difficult to form a large number of phrases that do not conflict with \
    " + "other words defined in the Plover dictionary. For instance, in the last exercise, we practiced \"you believe\" instead of \"I believe\" \
    because EUBL actually maps to the suffix \"-ible\"."},
    {text: "Because of this, in steno dictionaries (including Plover) you will sometimes see phrases \
    " + "like \"KWRAPBDZ: I can't understand\".", vocab: ["KWRAPBDZ: I can't understand"]},
    {text: "The left-hand keys (excluding vowels) form the left-hand phrase starter (LHPS), which is the subject in this case. \
    " + "Plover uses \"KWR\" for \"I\".", vocab: ["KWRAPBDZ: I can't understand", "[LHPS] KWR-: I",]},
    {text: "The right-hand keys (still excluding vowels) form the right-hand phrase ender (RHPE), which is a main verb here. -PBDZ is \
    " + "the RHPE for \"understand\".", vocab: ["KWRAPBDZ: I can't understand", "[LHPS] KWR-: I", "[RHPE] -PBDZ: understand"]},
    {text: "Finally, we have our vowel keys. Plover uses A for the helper verb, \"can't\".",
    vocab: ["KWRAPBDZ: I can't understand", "[LHPS] KWR-: I", "[RHPE] -PBDZ: understand", "[phrasing] A: can't"],
    lesson: ["I can't understand", "I can't understand", "I can't understand"]},
    {text: "Plover uses O (and sometimes OE) for \"don't\", and EU for \"didn't\".",
    vocab: ["KWROPBDZ: I don't understand", "KWREUPBDZ: I didn't understand",],
    lesson: ["I don't understand", "I don't understand", "I didn't understand", "I didn't understand"]},
    {text: "Plover only partially implements the LHPS/RHPE phrasing system. The Plover dictionary contains a number of I-phrases, \
    " + "but does not appear to contain LHPS/RHPE phrases for any other subject."},
    {text: "The completeness of the phrase lists also varies for each verb. For instance, the Plover dictionary \
    " + "has different tenses of \"believe\" for seven subjects. But for the verb \"find\", there are only three \
    " + "subject-verb phrases total (I don't find, you find, we find)."},
    {text: "I have generated some of my own dictionaries for Plover to make these phrase lists more complete. I have attempted \
    " + " to mimic the phrasing provided in Plover Theory as much as possible."},
    {text: "You can find these files and learn more about their entries by clicking \"Downloads\" in the menu above."},
    {text: document.getElementById("lesson10").textContent, top: lessonTitleTop, width: lessonTitleWidth},
    {text: "I strongly recommend you read both \
    " + '<em><a href="https://www.artofchording.com" target="_blank">' + "The Art of Chording" + '</a></em>' + " and \
    " + '<em><a href="https://sites.google.com/site/learnplover" target="_blank">' + "Learn Plover!" + '</a></em>' + " \
    These books are free and online, and will help you solidify and build on what you've learned here. Consider reading \
    " + '<em>' + "The Art of Chording" + '</em>' + " first, as " + '<em>' + "Learn Plover!" + '</em>' + " has a ton of \
    information, and " + '<em>' + "The Art of Chording" + '</em>'  + " will help build foundation for remembering it all."},
    {text: "Also try out the Practice section in the menu above. It is based on \
    " + '<a href="#" target="_blank">' + "Steno Jig" + '</a>' + " but adds features to practice errors and to use a metronome.",
    highlight: true, highlightElement: document.getElementById("nav-practice")},
    {text: "For more practice, check out the resources on the \
    " + '<a href="https://github.com/openstenoproject/plover/wiki/Learning-Stenography" target="_blank">' + "Open Steno Project GitHub page\
    " + '</a>' + "."}
  ]

  // go to selected index, show text for that index
  function showNarration() {
    // use preset width if set, else set a width relative to string length
    if (window.innerWidth <= 450) { narration.style.width = 95 + "\%"; }
    else if (narrationText[index].width != null) { narration.style.width = narrationText[index].width + "px"; }
    else if (narrationText[index].text.length < 100) { narration.style.width = narrationText[index].text.length * 6 + "px"; }
    else if (narrationText[index].text.length < 200) { narration.style.width = narrationText[index].text.length * 5 + "px"; }
    else if (narrationText[index].text.length < 300) { narration.style.width = narrationText[index].text.length * 3 + "px"; }
    else { narration.style.width = narrationText[index].text.length * 2 + "px"; }

    // set narration box text
    narration.innerHTML = narrationText[index].text;

    // set narration box x position
    let widthPercentage = 100 * (narration.getBoundingClientRect().width / window.innerWidth);
    if (window.innerWidth <= 750) { narration.style.left = 2.5 + "\%"; }
    else if (narrationText[index].left != null) { narration.style.left = narrationText[index].left + "\%"; }
    else { narration.style.left = ((100 - widthPercentage) / 2) + "\%"; }

    // set narration box y position
    if (window.innerWidth <= 750) { narration.style.top = 85 + "\%"; }
    else if (narrationText[index].top != null) { narration.style.top = narrationText[index].top + "\%"; }
    else { narration.style.top = 115 + "\%"; }

    // add and remove highlights
    if (narrationText[index].highlight) { narrationText[index].highlightElement.classList.add("highlight-element"); }
    if (index > 0 && narrationText[index-1].highlight) { narrationText[index - 1].highlightElement.classList.remove("highlight-element"); }

    // call an additional function, if needed
    if (narrationText[index].extraCode) { extraCode(narrationText[index].extraCode); }

    // set letters for lesson
    if (narrationText[index].lesson) {
      getNextLesson(true, narrationText[index].lesson);
      getPracticeIndex(true, 0);

      // show the proper number of letters -- all, 10, or length or text
      if (narrationText[index].full) {
        getNextLessonFull(true, true); // set next lesson full to true
        generatePracticeLetters(getNextLesson(), 0, getNextLesson().length);
       }
      else {
        getNextLessonFull(true, false); // set next lesson full to false
        generatePracticeLetters(getNextLesson(), 0, Math.min(getPracticeIndex()+10, getNextLesson().length));
      }
    }

    // make sure narration box isn't still wiggling
    document.getElementById("narration").classList.remove("wiggle");
    // console.log("wiggle removed");

    // show vocab if there is any, remove old vocab
    if (!narrationText[index].vocab && !narrationText[index].affix) { vocabBox.hidden = true; }
    if (narrationText[index].vocab || narrationText[index].affix) { vocabBox.innerHTML = ""; }

    // add appropriate heading styles in vocab box
    if (narrationText[index].affix) {
      // vocabBox.innerHTML += '<span class="headingSpan vocabSpan">' + "Prefixes & Suffixes" + '<br>' + '</span>';
      vocabBox.innerHTML += '<span class="headingSpan vocabSpan">' + "Prefixes & Suffixes" + '</span>';
      if (window.innerWidth <= 750) {
        vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].affix.join("</span><span class='vocabSpan'>") + '</span>';
      } else {
        // vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].affix.join("</span><br><span class='vocabSpan'>") + '</span>';
        vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].affix.join("</span><span class='vocabSpan'>") + '</span>';
      }
      vocabBox.hidden = false;
    }

    // if (narrationText[index].vocab && narrationText[index].affix) { vocabBox.innerHTML += '<br>'; }

    if (narrationText[index].vocab) {
      // vocabBox.innerHTML += '<span class="headingSpan vocabSpan">' + "Vocab" + '<br>' + '</span>';
      vocabBox.innerHTML += '<span class="headingSpan vocabSpan">' + "Vocab" + '</span>';
      if (window.innerWidth <= 750) {
        vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].vocab.join("</span><span class='vocabSpan'>") + '</span>';
      } else {
      // vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].vocab.join("</span><br><span class='vocabSpan'>") + '</span>';
      vocabBox.innerHTML += '<span class="vocabSpan">' + narrationText[index].vocab.join("</span><span class='vocabSpan'>") + '</span>';
      }
      vocabBox.hidden = false;
    }

    // show hand positions when a vocabulary word is clicked
    let vocabSpans = document.querySelectorAll(".vocabSpan:not(.headingSpan)");
    for (let i = 0; i < vocabSpans.length; i++) { vocabSpans[i].addEventListener("click", vocabListener, false); }
    function vocabListener() {
      // console.log("pressed a span, text is " + event.target.textContent);
      let wordIndex = event.target.textContent.indexOf(":");
      let word = event.target.textContent.substring(0, wordIndex);
      // console.log(word);
      let reversed = checkDictionary([], true, word).split("");
      // console.log("reversed: " + reversed);
      if (reversed) {
        positionHand(reversed);
        pressKeys(reversed);
        clearStenoOrder();
        setStenoOrder(reversed);
      }
    }

    index++; // go to the next index when done
  }

  // get starting indices of lessons
  let menuIndices = [];
  for (let i = 0; i < items.length; i++) { menuIndices.push(narrationText.findIndex(obj => obj.text === items[i].textContent)); }

  // show proper narration when a menu item is clicked; clear exercise and steno order
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      // unhighlight any highlighted elements
      let highlighted = document.querySelectorAll(".highlight-element"), greenKeys = document.querySelectorAll(".green-key");
      highlighted.forEach(function (element) { element.classList.remove("highlight-element") });
      greenKeys.forEach(function (element) { element.classList.remove("green-key") });

      // show initial narration; clear steno order, exercise letters
      narration.hidden = false;
      document.getElementById("side-view").hidden = true;
      index = menuIndices[i];
      clearPracticeLetters();
      clearStenoOrder();
      showNarration();
    }, false);
  }

  // get the next narration text, position, etc. to display when user hits enter
  document.body.addEventListener("keydown", nextText, false);
  function nextText() {
    // if (event.key === "Enter" && (index < narrationText.length) && (index >= 0)) {
    if ((index < narrationText.length) && (index >= 0) && ((event.key === "Enter") || (event.key === "Backspace"))) {
      // clear the practice area, hand position on keyboard, etc.
      clearPracticeLetters();
      clearStenoOrder();
      positionHand("");
      // let vocabSpans = document.querySelectorAll(".vocabSpan:not(.headingSpan):hover");
      // for (let i = 0; i < vocabSpans.length; i++) { vocabSpans[i].removeEventListener("click", vocabListener, false); }

      console.log("current index: " + index);
      if (event.key === "Enter") {
        // showNarration(index);
        showNarration();
      } else if (event.key ==="Backspace" && (index >= 2)) {
        // showNarration(index-2);
        index = index - 2;
        showNarration();
      }
      console.log("after keypress: " + index);
    }
  }
}
