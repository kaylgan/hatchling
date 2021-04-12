// -------------------- extra functions to work with narration --------------------
function extraCode(whichCode) {
  // console.log("extraCode is " + whichCode);
  let lesson = [];

  function makeLesson(lessonText) {
    let mylesson = [], asIs = false;
    for (let i = 0; i < lessonText.length; i++) {
      if (lessonText[i][2]) {
        asIs = true;
        getNextLessonFull(true, true); // set next lesson full to true
      } else {
        getNextLessonFull(true, false); // set next lesson full to false
      }
      mylesson = mylesson.concat(getLessonPattern(lessonText[i][0], lessonText[i][1], asIs));
    }
    getNextLesson(true, mylesson);
    getPracticeIndex(true, 0);
    generatePracticeLetters(getNextLesson(), 0, Math.min(getPracticeIndex()+10, getNextLesson().length));
  }

  function updateGreenKeys(add, remove = []) {
    for (let i = 0; i < add.length; i++) { document.getElementById(add[i]).classList.add("green-key"); }
    for (let i = 0; i < remove.length; i++) { document.getElementById(remove[i]).classList.remove("green-key"); }
  }

  switch (whichCode) {
    case ("enterToContinue"):
      document.getElementById("side-view").hidden = true;
      let narration = document.getElementById("narration");

      setTimeout(function() {
        // if user hasn't already hit enter, prompt (early lessons only)
        if (narration.textContent === "Tutorial" || narration.textContent === "Pinkies") {
          narration.textContent = "type the ENTER key to continue";
        }
        // wiggle only if user still hasn't hit enter
        if (narration.textContent === "type the ENTER key to continue") { narration.classList.add("wiggle"); }
        setTimeout(function() { narration.classList.remove("wiggle"); }, 7000)
      }, 1500);
    break;
    case ("showSideView"):
      if (window.innerWidth > 300) { document.getElementById("side-view").hidden = false; }
      document.getElementById("lp-fend").classList.remove("top-key", "bottom-key");
      document.getElementById("lp-ftip").classList.remove("top-dot", "bottom-dot");
      break;
    case ("hideSideView"):
      document.getElementById("side-view").hidden = true;
      break;
    case ("adjustThumb"):
      document.getElementById("thumb-side").style.transform = 'translate(-6px, -5px)';
      break;
    case ("readjustThumb"):
      document.getElementById("thumb-side").style.transform = 'translateX(0px)';
      break;
    case ("pointerForward"):
      document.getElementById("finger-side-middle").classList.add("pointer-forward");
      document.getElementById("finger-side-tip").classList.add("pointer-tip-forward");
      document.getElementById("lp-fend").classList.remove("bottom-key");
      document.getElementById("lp-ftip").classList.remove("bottom-dot");
      document.getElementById("lp-fend").classList.add("top-key");
      document.getElementById("lp-ftip").classList.add("top-dot");
      break;
    case ("pointerBackward"):
      document.getElementById("finger-side-middle").classList.add("pointer-backward");
      document.getElementById("finger-side-tip").classList.add("pointer-tip-backward");
      document.getElementById("lp-fend").classList.remove("top-key");
      document.getElementById("lp-ftip").classList.remove("top-dot");
      document.getElementById("lp-fend").classList.add("bottom-key");
      document.getElementById("lp-ftip").classList.add("bottom-dot");
      break;
    case ("clearPractice"):
      clearPracticeLetters();
      break;
    case ("greenPinkies"):
      updateGreenKeys(["key-Q", "key-A"]);
      break;
    case ("greenPinkiesRight"):
      updateGreenKeys(["key-P", "key-colon", "key-lbrace", "key-quote"], ["key-Q", "key-A"]);
      break;
    case ("rightPinkies"):
      lesson = [
        ["ab2", ["-T", "-S"]],
        ["ab3", ["-D", "-Z"]],
        ["ab", ["-T", "-D"]],
        ["ab2", ["-S", "-Z"]],
        ["asIs", ["-T", "-S", "-D", "-Z", "-T", "-S", "-D", "-Z", "-T", "-Z"], true]
      ];
      break;
    case ("pinkyLessons"):
      updateGreenKeys(["key-Q", "key-A"]);
      lesson = [
        ["ab", ["S", "-S"]],
        ["abc", ["-S", "-Z", "S"]],
        ["abc2", ["-T", "-D", "-Z"]],
        ["five", ["S", "-S", "-T", "-D", "-Z"]],
        ["five2", ["-S", "-T", "S", "-D", "-Z"]],
        ["five3", ["-S", "S", "-T", "-D", "-Z"]]
      ];
      break;
    case ("pinkyLessonsBriefs"):
      lesson = [
        ["ab3", ["S", "-T"]],
        ["ab3", ["is", "the"]],
        ["ab", ["is", "-S"]],
        ["ab2", ["the", "-D"]]
      ];
      break;
    case ("vowelKeys"):
      updateGreenKeys(["key-C", "key-V", "key-N", "key-M"]);
      lesson = [
        ["ab3", ["A", "O"]],
        ["ab3", ["E", "U"]],
        ["ab2", ["A", "O"]],
        ["ab2", ["E", "U"]],
        ["five", ["A", "O", "E", "U", "E"]],
        ["five2", ["A", "O", "E", "U", "O"]]
      ];
      break;
    case ("greenThumbs"):
      updateGreenKeys(["key-C", "key-V", "key-N", "key-M"]);
      break;
    case ("shortVowels"):
      lesson = [
        ["five", ["sat", "set", "sit", "sod", "suds"]],
        ["five2", ["sat", "set", "sit", "sod", "suds"]],
        ["five3", ["sat", "set", "sit", "sod", "suds"]]
      ];
      break;
    case ("longVowels"):
      lesson = [
        ["five", ["say", "seed", "sight", "sow", "suit"]],
        ["five2", ["say", "seed", "sight", "sow", "suit"]],
        ["five3", ["say", "seed", "sight", "sow", "suit"]]
      ];
      break;
    case ("greenO"):
      updateGreenKeys([], ["key-C"]);
      break;
    case ("greenOO"):
      updateGreenKeys(["key-C"], ["key-N", "key-M"]);
      break;
    case ("greenAE"):
      updateGreenKeys(["key-N"], ["key-V"]);
      break;
    case ("greenAU"):
      updateGreenKeys(["key-M"], ["key-N"]);
      break;
    case ("greenOU"):
      updateGreenKeys(["key-V"], ["key-C"]);
      break;
    case ("oVowels"):
      lesson = [
        ["ab2", ["road", "rode"]],
        ["ab3", ["sea", "see"]],
        ["ab2", ["soy", "soot"]],
        ["abc", ["see", "sea", "saw"]],
        ["five3", ["soy", "soot", "rode", "road", "out"]],
        ["asIs", ["out", "out-", "set", "out", "out-", "set"], true],
      ];
      break;
    case ("clearGreenThumbs"):
      updateGreenKeys([], ["key-C", "key-V", "key-N", "key-M"]);
      break;
    case ("clearGreenPinkies"):
      updateGreenKeys([], ["key-A", "key-Q", "key-P", "key-colon", "key-lbrace", "key-quote"]);
      break;
    case ("clearGreenMiddles"):
      updateGreenKeys([], ["key-E", "key-D", "key-I", "key-K"]);
      break;
    case ("clearGreenPointers"):
      updateGreenKeys([], ["key-R", "key-F", "key-U", "key-J"]);
      break;
    case ("greenAsterisks"):
      updateGreenKeys(["key-T", "key-G", "key-Y", "key-H"]);
      break;
    case("leftRing"):
      updateGreenKeys(["key-W", "key-S"]);
      lesson = [
        ["ab2", ["T", "K"]],
        ["abc", ["T", "K", "D"]],
        ["abc2", ["it", "can", "did"]],
        ["six", ["T", "K", "D", "it", "can", "did"]],
        ["six2", ["T", "K", "D", "it", "can", "did"]],
        ["ab", ["it", "the"]],
        ["ab3", ["it", "the"]]
      ];
      break;
    case("rightRing"):
      updateGreenKeys(["key-O", "key-L"], ["key-W", "key-S"]);
      lesson = [
        ["ab3", ["-L", "-G"]],
        ["ab", ["-L", "-G"]],
        ["abc", ["-L", "-G", "-ing"]],
        ["ab2", ["starring", "starred"]],
        ["asIs", ["-lch, -lge", "-lch, -lge", "-ing", "-ing", "-lch, -lge", "-ing", "-lch, -lge", "-lch, -lge", "-ing", "-ing"], true]
      ];
      break;
    case("rightRingReview"):
      updateGreenKeys(["key-W", "key-S"]);
      lesson = [
        ["ab", ["call", "kale"]],
        ["ab2", ["dig", "dial"]],
        ["ab3", ["tug", "tile"]],
        ["six", ["call", "kale", "tug", "dig", "tile", "dial"]],
      ];
      break;
    case ("greenLeftMiddles"):
      updateGreenKeys([], ["key-W", "key-S", "key-O", "key-L"]);
      break;
    case ("leftMiddle"):
      updateGreenKeys(["key-E", "key-D"]);
      lesson = [
        ["ab", ["P", "W"]],
        ["abc", ["P", "W", "B"]],
        ["ab2", ["about", "with"]],
        ["five", ["P", "W", "B", "about", "with"]],
        ["five2", ["P", "W", "B", "bee", "about"]],
        ["abc", ["be-", "bee", "B"]]
      ];
      break;
    case ("rightMiddle"):
      updateGreenKeys(["key-I", "key-K"], ["key-E", "key-D"]);
      lesson = [
        ["ab2", ["-P", "-B"]],
        ["abc2", ["-P", "-B", "-N"]],
        ["abc", ["-P", "-B", "-N"]],
        ["ab", ["an", "be"]],
        ["five3", ["-P", "-B", "-N", "an", "be"]],
        ["asIs", ["be", "being", "can be", "can be", "being", "can", "be", "can be", "being", "be"], true],
        ["asIs", ["be", "be-", "tween", "between", "being", "be-", "tween", "can be", "be-", "between"], true]
      ];
      break;
    case ("leftMiddleAgain"):
      updateGreenKeys(["key-E", "key-D"]);
      break;
    case ("middleLettersLeft"):
      // F Q X G
      lesson = [
        ["ab", ["F", "Q"]],
        ["ab2", ["Q", "X"]],
        ["abc", ["F", "Q", "X"]],
        ["ab3", ["F", "G"]],
        ["ab2", ["G", "Q"]],
        ["five", ["G", "F", "Q", "G", "X"]],
        ["six", ["F", "X", "Q", "G", "X", "G"]]
      ];
      break;
    case ("middleLettersRight"):
      // -M -K -X -J
      lesson = [
        ["ab2", ["-M", "-K"]],
        ["ab3", ["-K", "-X"]],
        ["abc2", ["-M", "-K", "-X"]],
        ["ab", ["-M", "-J"]],
        ["ab3", ["-J", "-K"]],
        ["abc2", ["-K", "-M", "-J"]],
        ["five2", ["-J", "-M", "-K", "-J", "-X"]],
        ["six2", ["-M", "-X", "-K", "-J", "-X", "-J"]]
      ];
      break;
    case ("middleLettersReviewLeft"):
      // -P -B -N -M -K -X -J P W B F Q X G, T K D S, -L -G -T -S -D -Z
      lesson = [
        ["asIs", ["S", "T", "K", "P", "W", "S", "T", "K", "P", "W"], true],
        ["asIs", ["S", "T", "K", "P", "W", "S", "T", "K", "P", "W"], true],
        ["asIs", ["S", "S", "T", "K", "D", "D", "P", "W", "B", "B"], true],
        ["asIs", ["T", "K", "P", "W", "G", "D", "B", "D", "B", "G"], true],
        ["asIs", ["T", "P", "F", "K", "W", "Q", "K", "P", "X", "G"], true],
        ["asIs", ["S", "T", "K", "D", "P", "W", "B", "F", "Q", "X"], true]
      ];
      break;
    case ("middleLettersReviewRight"):
      lesson = [
        ["asIs", ["-P", "-B", "-L", "-G", "-T", "-S", "-D", "-Z", "-D", "-Z"], true],
        ["asIs", ["-P", "-B", "-L", "-G", "-T", "-S", "-T", "-D", "-S", "-Z"], true],
        ["asIs", ["-P", "-B", "-N", "-N", "-L", "-G", "-L", "-G", "-N", "-N"], true],
        ["asIs", ["-T", "-D", "-T", "-D", "-S", "-Z", "-S", "-Z", "-T", "-S"], true],
        ["asIs", ["-P", "-B", "-N", "-P", "-L", "-M", "-B", "-G", "-K", "-X"], true],
        ["asIs", ["-P", "-B", "-L", "-G", "-J", "-M", "-K", "-J", "-J", "-N"], true]
      ];
      break;
    case ("middleLettersReviewAll"):
      lesson = [
        ["ab", ["F", "-M"]],
        ["ab2", ["Q", "-K"]],
        ["ab3", ["X", "-X"]],
        ["ab", ["B", "-N"]],
        ["ab3", ["G", "-J"]],
        ["ab2", ["T", "-L"]],
        ["ab", ["K", "-G"]],
        ["ab3", ["W", "-B"]],
        ["ab2", ["P", "-P"]],
        ["ab2", ["A", "E"]],
        ["ab3", ["O", "U"]],
        ["asIs", ["S", "-S", "T", "-T", "K", "-K", "P", "-P", "W", "-B"], true],
        ["asIs", ["-P", "P", "-B", "W", "-L", "T", "-G", "K", "-T", "S"], true],
        ["asIs", ["S", "-T", "S", "-S", "S", "-D", "S", "-Z", "-S", "-Z"], true],
        ["asIs", ["B", "-B", "G", "-G", "X", "-X", "D", "-D", "G", "-G"], true]
      ];
      break;
    case ("middleAffixes"):
      lesson = [
        ["abc2", ["sponge", "im-", "possible"]],
        ["ab", ["entice", "intact"]],
        ["ab", ["I'm", "im-"]],
        ["six", ["section", "sponge", "entice", "intact", "I'm", "cement"]],
        ["six2", ["section", "sponge", "entice", "I'm", "possible", "cement"]],
        ["abc", ["I'm", "im-", "possible"]],
        ["asIs", ["-tion, -sion \(-shun\)", "-ction \(-kshun\)", "-ment", "ent-, int-",
        "-tion, -sion \(-shun\)", "-ction \(-kshun\)", "-ment", "ent-, int-", "im-", "im-"], true]
      ];
      break;
    case ("leftPointer"):
      updateGreenKeys(["key-R", "key-F"], ["key-T", "key-G", "key-Y", "key-H"]);
      lesson = [
        ["ab3", ["H", "R"]],
        ["abc", ["H", "R", "L"]],
        ["abc2", ["had", "are", "will"]],
        ["six", ["H", "had", "R", "are", "L", "will"]]
      ];
      break;
    case ("rightPointer"):
      updateGreenKeys(["key-U", "key-J"], ["key-R", "key-F"]);
      lesson = [
        ["ab", ["-F", "-R"]],
        ["five", ["-F", "of", "-R", "are", "ever"]],
        ["abc2", ["of", "are", "ever"]],
        ["ab2", ["of", "off"]],
        ["ab3", ["ever", "every"]],
        ["five2", ["everything", "everywhere", "everybody", "everyday", "everyone"]]
      ];
      break;
    case ("someWords"):
      lesson = [
        ["six", ["something", "somewhere", "somebody", "someday", "someone", "sometime"]],
        ["five2", ["somehow", "someplace", "someday", "someone", "sometime"]],
        ["five", ["someplace", "something", "somewhere", "somehow", "somebody"]]
      ];
      break;
    case ("pointerLetters1"):
      updateGreenKeys(["key-R", "key-F"]);
      lesson = [
        ["ab", ["Z", "V"]],
        ["ab3", ["V", "-V"]],
        ["abc2", ["V", "-V", "Z"]],
        ["five", ["V", "-V", "Z", "-Z", "-V"]],
        ["abc", ["love", "save", "love"]],
        ["ab", ["save", "savvy"]],
        ["ab", ["savvy", "satisfy"]],
        ["ab", ["save", "safe"]]
      ];
      break;
    case ("pointerLetters2"):
      lesson = [
        ["ab2", ["M", "N"]],
        ["ab", ["N", "M"]],
        ["ab3", ["M", "-M"]],
        ["ab", ["N", "-N"]]
      ];
      break;
    case ("pointerLetters3"):
      lesson = [
        ["ab3", ["C", "ch"]],
        ["ab", ["ch", "-ch"]],
        ["abc", ["C", "ch", "-ch"]],
        ["abc2", ["C", "ch", "-ch"]],
      ];
      break;
    case ("pointerLetters4"):
      lesson = [
        ["ab3", ["J", "Y"]],
        ["ab2", ["Y", "J"]],
        ["ab", ["J", "-J"]],
        ["abc", ["Y", "J", "-J"]]
      ];
      break;
    case ("pointerBriefs"):
      lesson = [
        ["five", ["N", "in", "Y", "why", "in"]],
        ["ab2", ["in", "why"]],
        ["five2", ["V", "have", "C", "consider", "C"]],
        ["ab3", ["have", "consider"]],
        ["five", ["have", "why", "consider", "have", "in"]]
      ];
      break;
    case ("pointerLettersReview"):
      lesson = [
        ["ab", ["N", "Y"]],
        ["ab2", ["N", "Y"]],
        ["abc2", ["J", "V", "Z"]],
        ["abc", ["J", "V", "Z"]],
        ["ab2", ["M", "N"]],
        ["ab3", ["M", "N"]],
        ["ab", ["-F", "-V"]],
        ["ab3", ["-F", "-V"]],
        ["abc2", ["C", "ch", "-ch"]],
        ["abc", ["C", "ch", "-ch"]],
        ["ab3", ["M", "-ch"]],
        ["ab", ["M", "-ch"]]
      ];
      break;
    case ("ngeConflict"):
      lesson = [
        ["ab3", ["bing", "binge"]],
        ["ab", ["lung", "bing"]],
        ["ab2", ["lung", "lunge"]],
        ["ab3", ["lunge", "binge"]]
      ];
      break;
    case ("highlightNumberBar"):
      updateGreenKeys(["key-one", "key-two", "key-three", "key-four", "key-five",
      "key-six", "key-seven", "key-eight", "key-nine", "key-zero", "key-minus", "key-equals"]);
      break;
    case ("highlightNumber1"):
      updateGreenKeys(["key-Q"], ["key-three", "key-four", "key-five",
      "key-six", "key-seven", "key-eight", "key-nine", "key-zero", "key-minus", "key-equals"]);
      break;
    case ("highlightNumber0"):
      updateGreenKeys(["key-three", "key-four", "key-V"], ["key-one", "key-two", "key-Q"])
      break;
    case ("highlightNumbers"):
      updateGreenKeys(["key-Q", "key-W", "key-E", "key-R", "key-C", "key-U", "key-I", "key-O", "key-P"],
      ["key-three", "key-four"])
      break;
    case ("clearNumbers"):
      updateGreenKeys([], ["key-Q", "key-W", "key-E", "key-R", "key-C", "key-V", "key-U", "key-I", "key-O", "key-P"])
      break;
    case ("lrExtendedABC"):
      lesson = [
        ["ab", ["B", "-B"]],
        ["ab2", ["D", "-D"]],
        ["ab3", ["F", "-F"]],
        ["ab2", ["G", "-G"]],
        ["ab2", ["J", "-J"]],
        ["ab", ["K", "-K"]],
        ["ab3", ["L", "-L"]],
        ["ab3", ["M", "-M"]],
        ["ab", ["N", "-N"]],
        ["ab", ["P", "-P"]],
        ["ab2", ["R", "-R"]],
        ["ab3", ["S", "-S"]],
        ["ab3", ["T", "-T"]],
        ["ab", ["V", "-V"]],
        ["ab3", ["X", "-X"]],
        ["ab2", ["Z", "-Z"]]
      ];
      break;
    case ("affixReview"):
      lesson = [
        ["abc", ["be", "be-", "about"]],
        ["five", ["M", "were", "-sh", "-ch", "-sh"]],
        ["ab2", ["-st", "-th"]],
        ["ab", ["-mp", "-rve"]],
        ["asIs", ["-mp", "-rve", "-nch, -rch", "-nch, -rch", "-rve", "-mp", "-mp", "-nch, -rch", "-rve", "-nch, -rch"], true],
        ["asIs", ["-ment", "-ction (-kshun)", "-ction (-kshun)", "-ment", "-ment", "-ction (-kshun)", "-ment",
        "-ction (-kshun)", "-ction (-kshun)", "-ment"], true],
        ["asIs", ["-lch, -lge", "-lk", "-ng, -nge", "-nge, -nk", "-lch, -lge", "-lk", "-ng, -nge", "-nge, -nk", "-lk", "-lch, -lge"], true],
        ["asIs", ["-sh", "-tion, -sion (-shun)", "-tious, -cious (-shus)", "-ction (-kshun)",
        "-sh", "-tion, -sion (-shun)", "-tious, -cious (-shus)", "-ction (-kshun)", "-sh", "-tious, -cious (-shus)"], true]
      ];
      break;
    // case ("couldLesson"):
    //   lesson = [
    //     ["asIs", ["I could", "I could", "you could", "you could", "it could", "it could"], true],
    //     ["asIs", ["she could", "she could", "he could", "he could", "we could", "we could"], true],
    //     ["asIs", ["they could", "they could", "who could", "who could", "what could", "what could"], true],
    //     ["asIs", ["which could", "which could", "that could", "that could"], true],
    //   ];
    //   break;
    case ("images"):
      document.getElementById("steno-and-keyboard").hidden = true;
      document.getElementById("just-plover").hidden = false;
    default:
      console.log("extra code not defined");
  }

  if (lesson.length > 0) { makeLesson(lesson); }
}

// -------------------- follow pattern for current lesson, replacing letters with approriate keys --------------------
function getLessonPattern(pattern, letters, keepOriginal = false) {
  if (!keepOriginal) {
    let templates = {
      "ab": "a b a b b a b b a a", "ab2": "a b a b a a b b a a",
      "ab3": "a a a b b b a b b a", "abc": "a b c a b c a a b c",
      "abc2": "a a b b c c a a c c", "five": "a b c d e a b c d e",
      "five2": "a a b b c c d d e e", "five3": "a c e b d c b a e d",
      "six": "a d b e c f d e f f", "six2": "b b e e a a d d c f"
    };

    let replacements = {
      'a': letters[0], 'b': letters[1], 'c': letters[2],
      'd': letters[3], 'e': letters[4], 'f': letters[5]
    };

    let finalPattern = templates[pattern].replace(/[a-z]/g, m => replacements[m]);
    return finalPattern.split(" ");
  }
  else { return letters; } // for use in makeLesson
}
