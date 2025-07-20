export interface LevelData {
  level: number;
  theme: string;
  words: string[];
  rhymePairs: [string, string][];
}


export const gameData: LevelData[] = [
  // Simple Levels (1–5)
  {
    level: 1,
    theme: "Animals",
    words: ["cat", "hat", "dog", "log"],
    rhymePairs: [["cat", "hat"], ["dog", "log"]],
  },
  {
    level: 2,
    theme: "Colors",
    words: ["red", "bed", "blue", "shoe"],
    rhymePairs: [["red", "bed"], ["blue", "shoe"]],
  },
  {
    level: 3,
    theme: "Food",
    words: ["cake", "lake", "pie", "sky"],
    rhymePairs: [["cake", "lake"], ["pie", "sky"]],
  },
  {
    level: 4,
    theme: "Nature",
    words: ["tree", "bee", "sun", "fun"],
    rhymePairs: [["tree", "bee"], ["sun", "fun"]],
  },
  {
    level: 5,
    theme: "Home",
    words: ["door", "floor", "wall", "ball"],
    rhymePairs: [["door", "floor"], ["wall", "ball"]],
  },

  // Moderate Levels (6–10)
  {
    level: 6,
    theme: "Weather",
    words: ["rain", "train", "snow", "grow"],
    rhymePairs: [["rain", "train"], ["snow", "grow"]],
  },
  {
    level: 7,
    theme: "Toys",
    words: ["doll", "tall", "car", "star"],
    rhymePairs: [["doll", "tall"], ["car", "star"]],
  },
  {
    level: 8,
    theme: "Body",
    words: ["hand", "sand", "nose", "rose"],
    rhymePairs: [["hand", "sand"], ["nose", "rose"]],
  },
  {
    level: 9,
    theme: "Time",
    words: ["day", "play", "night", "light"],
    rhymePairs: [["day", "play"], ["night", "light"]],
  },
  {
    level: 10,
    theme: "Magic",
    words: ["moon", "spoon", "wish", "fish"],
    rhymePairs: [["moon", "spoon"], ["wish", "fish"]],
  },

  // Hard Levels (11–15)
  {
    level: 11,
    theme: "Fantasy",
    words: ["dragon", "wagon", "cloak", "oak"],
    rhymePairs: [["dragon", "wagon"], ["cloak", "oak"]],
  },
  {
    level: 12,
    theme: "Adventure",
    words: ["cliff", "stiff", "path", "math"],
    rhymePairs: [["cliff", "stiff"], ["path", "math"]],
  },
  {
    level: 13,
    theme: "Space",
    words: ["star", "afar", "light", "flight"],
    rhymePairs: [["star", "afar"], ["light", "flight"]],
  },
  {
    level: 14,
    theme: "Emotions",
    words: ["glad", "sad", "fear", "tear"],
    rhymePairs: [["glad", "sad"], ["fear", "tear"]],
  },
  {
    level: 15,
    theme: "School",
    words: ["learn", "burn", "class", "glass"],
    rhymePairs: [["learn", "burn"], ["class", "glass"]],
  }
];

