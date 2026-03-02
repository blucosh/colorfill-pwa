// ColorFill Image Library
// Each image has detailed SVG regions suitable for adult relaxation coloring

export const COLOR_PALETTE = [
  { id: 1,  hex: "#C0392B", name: "Crimson" },
  { id: 2,  hex: "#E74C3C", name: "Rose Red" },
  { id: 3,  hex: "#E67E22", name: "Tangerine" },
  { id: 4,  hex: "#F39C12", name: "Amber" },
  { id: 5,  hex: "#F1C40F", name: "Gold" },
  { id: 6,  hex: "#2ECC71", name: "Emerald" },
  { id: 7,  hex: "#27AE60", name: "Forest" },
  { id: 8,  hex: "#1ABC9C", name: "Teal" },
  { id: 9,  hex: "#16A085", name: "Deep Teal" },
  { id: 10, hex: "#3498DB", name: "Sky Blue" },
  { id: 11, hex: "#2980B9", name: "Ocean" },
  { id: 12, hex: "#9B59B6", name: "Violet" },
  { id: 13, hex: "#8E44AD", name: "Plum" },
  { id: 14, hex: "#EC407A", name: "Petal" },
  { id: 15, hex: "#F06292", name: "Blush" },
  { id: 16, hex: "#78909C", name: "Slate" },
  { id: 17, hex: "#546E7A", name: "Storm" },
  { id: 18, hex: "#795548", name: "Chestnut" },
  { id: 19, hex: "#BCAAA4", name: "Sand" },
  { id: 20, hex: "#ECEFF1", name: "Pearl" },
  { id: 21, hex: "#FFF9C4", name: "Cream" },
  { id: 22, hex: "#D4AC0D", name: "Bronze" },
  { id: 23, hex: "#1C2833", name: "Midnight" },
  { id: 24, hex: "#7DCEA0", name: "Sage" },
];

// ─── Image 1: Mandala ─────────────────────────────────────────────────────────
const mandala = {
  id: "mandala_001",
  title: "Sacred Mandala",
  category: "Mandala",
  difficulty: "Hard",
  estimatedMinutes: 45,
  description: "A traditional geometric mandala with intricate petal layers",
  addedDate: "2024-01-01",
  viewBox: "0 0 500 500",
  regions: [
    // Center circle
    { id: "c0", colorId: 5, label: "5", d: "M250,250 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0" },
    // Inner ring segments (8)
    { id: "r1_1", colorId: 12, label: "12", d: "M250,250 L270,230 A28,28 0 0,1 278,250 Z" },
    { id: "r1_2", colorId: 8,  label: "8",  d: "M250,250 L278,250 A28,28 0 0,1 270,270 Z" },
    { id: "r1_3", colorId: 12, label: "12", d: "M250,250 L270,270 A28,28 0 0,1 250,278 Z" },
    { id: "r1_4", colorId: 8,  label: "8",  d: "M250,250 L250,278 A28,28 0 0,1 230,270 Z" },
    { id: "r1_5", colorId: 12, label: "12", d: "M250,250 L230,270 A28,28 0 0,1 222,250 Z" },
    { id: "r1_6", colorId: 8,  label: "8",  d: "M250,250 L222,250 A28,28 0 0,1 230,230 Z" },
    { id: "r1_7", colorId: 12, label: "12", d: "M250,250 L230,230 A28,28 0 0,1 250,222 Z" },
    { id: "r1_8", colorId: 8,  label: "8",  d: "M250,250 L250,222 A28,28 0 0,1 270,230 Z" },
    // Petal ring (8 petals)
    { id: "p1_1", colorId: 14, label: "14", d: "M250,215 Q270,200 250,185 Q230,200 250,215 Z" },
    { id: "p1_2", colorId: 14, label: "14", d: "M285,215 Q300,198 285,185 Q268,197 285,215 Z" },
    { id: "p1_3", colorId: 14, label: "14", d: "M285,250 Q300,230 315,250 Q300,270 285,250 Z" },
    { id: "p1_4", colorId: 14, label: "14", d: "M285,285 Q300,302 285,315 Q268,303 285,285 Z" },
    { id: "p1_5", colorId: 14, label: "14", d: "M250,285 Q270,300 250,315 Q230,300 250,285 Z" },
    { id: "p1_6", colorId: 14, label: "14", d: "M215,285 Q200,302 215,315 Q232,303 215,285 Z" },
    { id: "p1_7", colorId: 14, label: "14", d: "M215,250 Q200,230 185,250 Q200,270 215,250 Z" },
    { id: "p1_8", colorId: 14, label: "14", d: "M215,215 Q200,198 215,185 Q232,197 215,215 Z" },
    // Middle ring dots (8)
    { id: "d1_1", colorId: 5, label: "5", d: "M250,160 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_2", colorId: 5, label: "5", d: "M304,182 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_3", colorId: 5, label: "5", d: "M340,230 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_4", colorId: 5, label: "5", d: "M340,270 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_5", colorId: 5, label: "5", d: "M304,318 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_6", colorId: 5, label: "5", d: "M250,340 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_7", colorId: 5, label: "5", d: "M196,318 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_8", colorId: 5, label: "5", d: "M160,270 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_9", colorId: 5, label: "5", d: "M160,230 a8,8 0 1,0 0.1,0 Z" },
    { id: "d1_10",colorId: 5, label: "5", d: "M196,182 a8,8 0 1,0 0.1,0 Z" },
    // Outer large petals (8)
    { id: "op1", colorId: 3, label: "3", d: "M250,130 Q280,100 250,80  Q220,100 250,130 Z" },
    { id: "op2", colorId: 3, label: "3", d: "M320,180 Q350,160 370,130 Q340,120 320,180 Z" },
    { id: "op3", colorId: 3, label: "3", d: "M370,250 Q400,250 420,220 Q400,200 370,250 Z" },
    { id: "op4", colorId: 3, label: "3", d: "M320,320 Q350,340 370,370 Q340,380 320,320 Z" },
    { id: "op5", colorId: 3, label: "3", d: "M250,370 Q280,400 250,420 Q220,400 250,370 Z" },
    { id: "op6", colorId: 3, label: "3", d: "M180,320 Q150,340 130,370 Q160,380 180,320 Z" },
    { id: "op7", colorId: 3, label: "3", d: "M130,250 Q100,250 80,220  Q100,200 130,250 Z" },
    { id: "op8", colorId: 3, label: "3", d: "M180,180 Q150,160 130,130 Q160,120 180,180 Z" },
    // Outer ring fill
    { id: "outerRing", colorId: 23, label: "23", d: "M250,250 m-180,0 a180,180 0 1,0 360,0 a180,180 0 1,0 -360,0 M250,250 m-150,0 a150,150 0 0,1 300,0 a150,150 0 0,1 -300,0" },
    // Corner decorations
    { id: "co1", colorId: 10, label: "10", d: "M50,50 Q80,50 80,80 Q50,80 50,50 Z" },
    { id: "co2", colorId: 10, label: "10", d: "M450,50 Q420,50 420,80 Q450,80 450,50 Z" },
    { id: "co3", colorId: 10, label: "10", d: "M50,450 Q80,450 80,420 Q50,420 50,450 Z" },
    { id: "co4", colorId: 10, label: "10", d: "M450,450 Q420,450 420,420 Q450,420 450,450 Z" },
  ]
};

// ─── Image 2: Botanical ───────────────────────────────────────────────────────
const botanical = {
  id: "botanical_001",
  title: "Wildflower Meadow",
  category: "Botanical",
  difficulty: "Medium",
  estimatedMinutes: 35,
  description: "A peaceful arrangement of wildflowers, stems and leaves",
  addedDate: "2024-01-02",
  viewBox: "0 0 500 600",
  regions: [
    // Sky background
    { id: "sky", colorId: 21, label: "21", d: "M0,0 H500 V600 H0 Z" },
    // Ground strip
    { id: "ground", colorId: 24, label: "24", d: "M0,520 H500 V600 H0 Z" },
    // Main stem 1 (tall sunflower)
    { id: "stem1", colorId: 7, label: "7", d: "M200,520 Q195,400 205,300 Q200,200 198,150 L202,150 Q204,200 210,300 Q215,400 205,520 Z" },
    // Main stem 2
    { id: "stem2", colorId: 7, label: "7", d: "M320,520 Q315,420 320,350 Q318,270 316,200 L320,200 Q324,270 326,350 Q328,420 324,520 Z" },
    // Main stem 3 (short)
    { id: "stem3", colorId: 7, label: "7", d: "M120,520 Q118,460 122,400 Q119,350 118,310 L122,310 Q124,350 126,400 Q128,460 124,520 Z" },
    // Stem 4
    { id: "stem4", colorId: 7, label: "7", d: "M390,520 Q388,480 392,440 Q389,400 388,370 L392,370 Q394,400 396,440 Q398,480 394,520 Z" },
    // Leaves on stem 1
    { id: "leaf1a", colorId: 6, label: "6", d: "M200,380 Q170,360 155,330 Q175,340 200,360 Z" },
    { id: "leaf1b", colorId: 6, label: "6", d: "M205,380 Q235,355 250,325 Q228,340 205,362 Z" },
    { id: "leaf1c", colorId: 7, label: "7", d: "M198,280 Q165,258 148,228 Q172,245 200,265 Z" },
    { id: "leaf1d", colorId: 7, label: "7", d: "M203,278 Q240,252 258,218 Q232,242 205,260 Z" },
    // Leaves on stem 2
    { id: "leaf2a", colorId: 6, label: "6", d: "M318,420 Q285,400 268,370 Q292,385 318,402 Z" },
    { id: "leaf2b", colorId: 6, label: "6", d: "M323,418 Q358,395 375,362 Q348,382 323,400 Z" },
    // Sunflower head (stem1)
    { id: "sf_center", colorId: 18, label: "18", d: "M200,148 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" },
    { id: "sf_p1",  colorId: 4, label: "4", d: "M200,115 Q210,100 200,85 Q190,100 200,115 Z" },
    { id: "sf_p2",  colorId: 4, label: "4", d: "M223,122 Q235,110 230,95  Q218,108 223,122 Z" },
    { id: "sf_p3",  colorId: 4, label: "4", d: "M235,145 Q250,138 250,122 Q235,128 235,145 Z" },
    { id: "sf_p4",  colorId: 4, label: "4", d: "M228,168 Q242,165 245,150 Q230,155 228,168 Z" },
    { id: "sf_p5",  colorId: 4, label: "4", d: "M210,182 Q220,180 222,166 Q208,172 210,182 Z" },
    { id: "sf_p6",  colorId: 4, label: "4", d: "M190,182 Q180,180 178,166 Q192,172 190,182 Z" },
    { id: "sf_p7",  colorId: 4, label: "4", d: "M172,168 Q158,165 155,150 Q170,155 172,168 Z" },
    { id: "sf_p8",  colorId: 4, label: "4", d: "M165,145 Q150,138 150,122 Q165,128 165,145 Z" },
    { id: "sf_p9",  colorId: 4, label: "4", d: "M177,122 Q165,110 170,95  Q182,108 177,122 Z" },
    // Rose on stem 2
    { id: "rose_base", colorId: 2, label: "2", d: "M320,198 m-28,0 a28,28 0 1,0 56,0 a28,28 0 1,0 -56,0" },
    { id: "rose_inner", colorId: 14, label: "14", d: "M320,198 m-16,0 a16,16 0 1,0 32,0 a16,16 0 1,0 -32,0" },
    { id: "rose_p1", colorId: 1, label: "1", d: "M320,165 Q332,155 320,145 Q308,155 320,165 Z" },
    { id: "rose_p2", colorId: 1, label: "1", d: "M343,175 Q356,168 348,155 Q336,165 343,175 Z" },
    { id: "rose_p3", colorId: 1, label: "1", d: "M350,198 Q363,198 358,184 Q344,188 350,198 Z" },
    { id: "rose_p4", colorId: 1, label: "1", d: "M343,221 Q356,228 350,214 Q336,216 343,221 Z" },
    { id: "rose_p5", colorId: 1, label: "1", d: "M320,231 Q332,241 320,248 Q308,241 320,231 Z" },
    { id: "rose_p6", colorId: 1, label: "1", d: "M297,221 Q284,228 290,214 Q304,216 297,221 Z" },
    { id: "rose_p7", colorId: 1, label: "1", d: "M290,198 Q277,198 282,184 Q296,188 290,198 Z" },
    { id: "rose_p8", colorId: 1, label: "1", d: "M297,175 Q284,168 292,155 Q304,165 297,175 Z" },
    // Lavender on stem 3
    { id: "lav1", colorId: 12, label: "12", d: "M120,308 Q112,295 118,282 Q126,295 120,308 Z" },
    { id: "lav2", colorId: 12, label: "12", d: "M120,295 Q108,282 115,268 Q126,282 120,295 Z" },
    { id: "lav3", colorId: 13, label: "13", d: "M120,282 Q110,268 117,254 Q128,268 120,282 Z" },
    { id: "lav4", colorId: 13, label: "13", d: "M120,268 Q112,252 120,240 Q128,252 120,268 Z" },
    // Daisy on stem 4
    { id: "daisy_c", colorId: 5, label: "5", d: "M390,368 m-16,0 a16,16 0 1,0 32,0 a16,16 0 1,0 -32,0" },
    { id: "daisy_p1", colorId: 20, label: "20", d: "M390,348 Q396,340 390,332 Q384,340 390,348 Z" },
    { id: "daisy_p2", colorId: 20, label: "20", d: "M405,353 Q413,348 412,339 Q404,346 405,353 Z" },
    { id: "daisy_p3", colorId: 20, label: "20", d: "M410,368 Q418,368 418,358 Q410,360 410,368 Z" },
    { id: "daisy_p4", colorId: 20, label: "20", d: "M405,383 Q413,388 414,378 Q406,375 405,383 Z" },
    { id: "daisy_p5", colorId: 20, label: "20", d: "M390,388 Q396,396 390,404 Q384,396 390,388 Z" },
    { id: "daisy_p6", colorId: 20, label: "20", d: "M375,383 Q367,388 366,378 Q374,375 375,383 Z" },
    { id: "daisy_p7", colorId: 20, label: "20", d: "M370,368 Q362,368 362,358 Q370,360 370,368 Z" },
    { id: "daisy_p8", colorId: 20, label: "20", d: "M375,353 Q367,348 368,339 Q376,346 375,353 Z" },
    // Butterflies
    { id: "but1_lw", colorId: 3, label: "3", d: "M75,200 Q55,185 45,165 Q60,175 78,195 Z" },
    { id: "but1_rw", colorId: 3, label: "3", d: "M82,200 Q102,185 112,165 Q97,175 84,195 Z" },
    { id: "but1_b",  colorId: 23, label: "23", d: "M78,192 Q80,185 80,200 Q79,207 78,192 Z" },
    // Bee
    { id: "bee_b", colorId: 4, label: "4", d: "M440,250 Q455,244 460,252 Q455,260 440,255 Z" },
    { id: "bee_s", colorId: 23, label: "23", d: "M443,251 Q447,247 456,250 Q452,254 443,251 Z" },
    { id: "bee_w", colorId: 20, label: "20", d: "M448,248 Q450,238 456,238 Q458,244 448,248 Z" },
    // Decorative border vines
    { id: "vine_l", colorId: 24, label: "24", d: "M0,0 Q15,150 5,300 Q18,450 0,600 L8,600 Q20,450 12,300 Q22,150 8,0 Z" },
    { id: "vine_r", colorId: 24, label: "24", d: "M500,0 Q485,150 495,300 Q482,450 500,600 L492,600 Q480,450 488,300 Q478,150 492,0 Z" },
  ]
};

// ─── Image 3: Seascape ────────────────────────────────────────────────────────
const seascape = {
  id: "seascape_001",
  title: "Coastal Twilight",
  category: "Landscape",
  difficulty: "Medium",
  estimatedMinutes: 30,
  description: "A serene coastal scene at twilight with waves and rocks",
  addedDate: "2024-01-03",
  viewBox: "0 0 600 400",
  regions: [
    // Sky zones
    { id: "sky_top",    colorId: 13, label: "13", d: "M0,0 H600 V80  H0 Z" },
    { id: "sky_mid",    colorId: 12, label: "12", d: "M0,80 H600 V150 H0 Z" },
    { id: "sky_low",    colorId: 3,  label: "3",  d: "M0,150 H600 V200 H0 Z" },
    { id: "sky_hor",    colorId: 4,  label: "4",  d: "M0,200 H600 V220 H0 Z" },
    // Clouds
    { id: "cloud1", colorId: 15, label: "15", d: "M60,50 Q60,30 82,28 Q88,18 106,22 Q118,12 132,20 Q144,12 152,25 Q164,22 162,38 Q162,52 148,54 Q130,60 110,56 Q88,62 72,54 Q60,52 60,50 Z" },
    { id: "cloud2", colorId: 4,  label: "4",  d: "M380,40 Q380,24 398,22 Q404,14 418,17 Q428,9 440,16 Q450,9 457,20 Q467,18 465,32 Q465,44 453,46 Q438,51 420,48 Q402,52 389,46 Q380,44 380,40 Z" },
    // Sun
    { id: "sun_glow", colorId: 3, label: "3",  d: "M295,205 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
    { id: "sun_core", colorId: 5, label: "5",  d: "M295,205 m-22,0 a22,22 0 1,0 44,0 a22,22 0 1,0 -44,0" },
    { id: "sun_rays", colorId: 4, label: "4",  d: "M295,155 L298,175 L295,195 L292,175 Z M335,165 L324,180 L318,200 L316,178 Z M355,205 L335,208 L315,205 L335,202 Z M335,245 L324,230 L318,210 L316,232 Z M295,255 L298,235 L295,215 L292,235 Z M255,245 L266,230 L272,210 L274,232 Z M235,205 L255,208 L275,205 L255,202 Z M255,165 L266,180 L272,200 L274,178 Z" },
    // Ocean reflection strip
    { id: "sea_refl", colorId: 22, label: "22", d: "M220,215 H370 V225 H220 Z" },
    // Sea layers (horizon to foreground)
    { id: "sea1", colorId: 11, label: "11", d: "M0,218 H600 V260 H0 Z" },
    { id: "sea2", colorId: 10, label: "10", d: "M0,260 H600 V300 H0 Z" },
    { id: "sea3", colorId: 9,  label: "9",  d: "M0,300 H600 V340 H0 Z" },
    { id: "sea4", colorId: 8,  label: "8",  d: "M0,340 H600 V400 H0 Z" },
    // Waves (white foam lines)
    { id: "wave1", colorId: 20, label: "20", d: "M20,268 Q80,258 140,268 Q200,278 260,268 Q320,258 380,268 Q440,278 500,268 Q550,260 580,268 L580,272 Q550,264 500,272 Q440,282 380,272 Q320,262 260,272 Q200,282 140,272 Q80,262 20,272 Z" },
    { id: "wave2", colorId: 20, label: "20", d: "M0,308 Q60,298 120,308 Q180,318 240,308 Q300,298 360,308 Q420,318 480,308 Q540,300 600,308 L600,312 Q540,304 480,312 Q420,322 360,312 Q300,302 240,312 Q180,322 120,312 Q60,302 0,312 Z" },
    // Rocks foreground
    { id: "rock1", colorId: 17, label: "17", d: "M30,320 Q15,300 20,280 Q40,270 65,285 Q75,305 68,325 Z" },
    { id: "rock2", colorId: 16, label: "16", d: "M35,325 Q18,315 22,330 Q38,345 68,332 Q75,318 65,325 Z" },
    { id: "rock3", colorId: 17, label: "17", d: "M500,330 Q490,310 495,290 Q515,278 540,292 Q552,312 544,332 Z" },
    { id: "rock4", colorId: 16, label: "16", d: "M498,335 Q482,325 486,342 Q502,358 542,346 Q552,332 542,335 Z" },
    // Large foreground rocks
    { id: "frock1", colorId: 18, label: "18", d: "M0,380 Q20,340 60,335 Q90,330 110,355 Q120,370 110,400 H0 Z" },
    { id: "frock2", colorId: 17, label: "17", d: "M490,385 Q510,345 545,340 Q572,335 590,360 Q598,375 596,400 H490 Z" },
    { id: "frock_moss1", colorId: 7, label: "7", d: "M20,375 Q40,365 70,368 Q75,372 65,378 Q42,382 20,378 Z" },
    { id: "frock_moss2", colorId: 7, label: "7", d: "M515,378 Q535,368 562,370 Q568,374 558,380 Q535,385 515,380 Z" },
    // Seabirds
    { id: "bird1", colorId: 23, label: "23", d: "M150,90 Q158,84 165,90 Q158,88 150,90 Z" },
    { id: "bird2", colorId: 23, label: "23", d: "M170,78 Q180,71 188,78 Q180,76 170,78 Z" },
    { id: "bird3", colorId: 23, label: "23", d: "M205,95 Q213,89 220,95 Q213,93 205,95 Z" },
    // Lighthouse
    { id: "lh_base",  colorId: 20, label: "20", d: "M520,215 L515,260 H535 L530,215 Z" },
    { id: "lh_stripe",colorId: 1,  label: "1",  d: "M516,225 H534 V235 H516 Z M516,245 H534 V255 H516 Z" },
    { id: "lh_top",   colorId: 23, label: "23", d: "M514,215 H536 V218 H514 Z M520,205 L525,215 H515 Z" },
    { id: "lh_light", colorId: 5,  label: "5",  d: "M521,207 Q525,202 529,207 Q525,212 521,207 Z" },
    { id: "lh_beam",  colorId: 21, label: "21", d: "M525,210 Q560,190 580,180 Q565,195 525,215 Z" },
    // Sailboat
    { id: "boat_hull",colorId: 20, label: "20", d: "M85,222 Q90,218 110,218 Q130,218 135,222 Q130,228 90,228 Z" },
    { id: "boat_mast",colorId: 23, label: "23", d: "M110,218 L111,185 L109,185 Z" },
    { id: "sail_main",colorId: 20, label: "20", d: "M110,186 Q120,192 130,210 Q118,208 110,186 Z" },
    { id: "sail_front",colorId: 3, label: "3",  d: "M110,186 Q100,194 88,210 Q100,206 110,186 Z" },
  ]
};

// ─── Image 4: Architecture ────────────────────────────────────────────────────
const architecture = {
  id: "arch_001",
  title: "Gothic Spires",
  category: "Architecture",
  difficulty: "Hard",
  estimatedMinutes: 50,
  description: "Majestic Gothic cathedral spires reaching toward the sky",
  addedDate: "2024-01-04",
  viewBox: "0 0 500 700",
  regions: [
    { id: "bg", colorId: 11, label: "11", d: "M0,0 H500 V700 H0 Z" },
    // Sky gradient effect with clouds
    { id: "sky2", colorId: 10, label: "10", d: "M0,0 H500 V200 H0 Z" },
    { id: "sky3", colorId: 21, label: "21", d: "M0,200 H500 V350 H0 Z" },
    // Ground
    { id: "ground", colorId: 7, label: "7", d: "M0,620 H500 V700 H0 Z" },
    { id: "path",   colorId: 19, label: "19", d: "M220,700 L280,700 L270,620 L230,620 Z" },
    // Main central tower
    { id: "ct_body", colorId: 17, label: "17", d: "M210,200 H290 V620 H210 Z" },
    { id: "ct_spire",colorId: 16, label: "16", d: "M205,200 L250,60  L295,200 Z" },
    { id: "ct_tip",  colorId: 22, label: "22", d: "M248,62 L250,45 L252,62 Z" },
    // Left tower
    { id: "lt_body", colorId: 17, label: "17", d: "M105,320 H175 V620 H105 Z" },
    { id: "lt_spire",colorId: 16, label: "16", d: "M100,320 L140,170 L180,320 Z" },
    { id: "lt_tip",  colorId: 22, label: "22", d: "M138,172 L140,155 L142,172 Z" },
    // Right tower
    { id: "rt_body", colorId: 17, label: "17", d: "M325,320 H395 V620 H325 Z" },
    { id: "rt_spire",colorId: 16, label: "16", d: "M320,320 L360,170 L400,320 Z" },
    { id: "rt_tip",  colorId: 22, label: "22", d: "M358,172 L360,155 L362,172 Z" },
    // Nave (main body connecting towers)
    { id: "nave",    colorId: 18, label: "18", d: "M155,420 H345 V620 H155 Z" },
    // Rose window (central)
    { id: "rw_outer",colorId: 23, label: "23", d: "M250,300 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0" },
    { id: "rw_mid",  colorId: 10, label: "10", d: "M250,300 m-32,0 a32,32 0 1,0 64,0 a32,32 0 1,0 -64,0" },
    { id: "rw_inner",colorId: 5,  label: "5",  d: "M250,300 m-18,0 a18,18 0 1,0 36,0 a18,18 0 1,0 -36,0" },
    { id: "rw_core", colorId: 22, label: "22", d: "M250,300 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" },
    // Stained glass windows in towers
    { id: "lw1",  colorId: 10, label: "10", d: "M118,400 H162 Q140,370 118,400 Z M118,400 H162 V470 H118 Z" },
    { id: "lw1g", colorId: 5,  label: "5",  d: "M125,420 H155 V455 H125 Z" },
    { id: "rw1",  colorId: 10, label: "10", d: "M338,400 H382 Q360,370 338,400 Z M338,400 H382 V470 H338 Z" },
    { id: "rw1g", colorId: 3,  label: "3",  d: "M345,420 H375 V455 H345 Z" },
    // Main door arch
    { id: "door_arch",colorId: 23, label: "23", d: "M218,620 H282 Q282,540 250,530 Q218,540 218,620 Z" },
    { id: "door_inner",colorId: 10,label: "10", d: "M224,620 H276 Q276,548 250,538 Q224,548 224,620 Z" },
    // Buttresses
    { id: "butt_l1", colorId: 16, label: "16", d: "M155,500 Q125,520 110,540 Q120,530 155,520 Z" },
    { id: "butt_l2", colorId: 16, label: "16", d: "M155,560 Q125,575 108,590 Q120,582 155,570 Z" },
    { id: "butt_r1", colorId: 16, label: "16", d: "M345,500 Q375,520 390,540 Q380,530 345,520 Z" },
    { id: "butt_r2", colorId: 16, label: "16", d: "M345,560 Q375,575 392,590 Q380,582 345,570 Z" },
    // Decorative details
    { id: "detail1", colorId: 22, label: "22", d: "M248,145 L250,135 L252,145 Q250,148 248,145 Z" },
    { id: "detail2", colorId: 22, label: "22", d: "M138,228 L140,218 L142,228 Q140,231 138,228 Z" },
    { id: "detail3", colorId: 22, label: "22", d: "M358,228 L360,218 L362,228 Q360,231 358,228 Z" },
    // Trees at base
    { id: "tree_l", colorId: 6, label: "6", d: "M40,620 Q50,580 60,560 Q70,580 80,620 Z M55,620 Q58,590 60,575 Q62,590 65,620 Z" },
    { id: "tree_r", colorId: 6, label: "6", d: "M420,620 Q430,580 440,560 Q450,580 460,620 Z M435,620 Q438,590 440,575 Q442,590 445,620 Z" },
    // Stars in sky
    { id: "star1", colorId: 21, label: "21", d: "M80,40 L82,46 L88,46 L83,50 L85,56 L80,52 L75,56 L77,50 L72,46 L78,46 Z" },
    { id: "star2", colorId: 21, label: "21", d: "M400,70 L402,76 L408,76 L403,80 L405,86 L400,82 L395,86 L397,80 L392,76 L398,76 Z" },
    { id: "star3", colorId: 5,  label: "5",  d: "M150,25 L151,29 L155,29 L152,31 L153,35 L150,33 L147,35 L148,31 L145,29 L149,29 Z" },
    { id: "moon",  colorId: 21, label: "21", d: "M440,30 Q458,30 460,48 Q450,60 438,52 Q450,50 450,40 Q444,32 440,30 Z" },
  ]
};

// ─── Image 5: Koi Pond ────────────────────────────────────────────────────────
const koiPond = {
  id: "koi_001",
  title: "Zen Koi Garden",
  category: "Nature",
  difficulty: "Medium",
  estimatedMinutes: 40,
  description: "Graceful koi fish swimming among lotus blossoms in a peaceful pond",
  addedDate: "2024-01-05",
  viewBox: "0 0 500 500",
  regions: [
    // Pond water
    { id: "water_deep", colorId: 9,  label: "9",  d: "M0,0 H500 V500 H0 Z" },
    { id: "water_mid",  colorId: 10, label: "10", d: "M50,50 H450 V450 H50 Z" },
    { id: "water_light",colorId: 12, label: "12", d: "M100,100 H400 V400 H100 Z" },
    // Water ripples
    { id: "rip1", colorId: 11, label: "11", d: "M250,250 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M250,250 m-70,0 a70,70 0 0,1 140,0 a70,70 0 0,1 -140,0" },
    { id: "rip2", colorId: 11, label: "11", d: "M150,180 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0 M150,180 m-24,0 a24,24 0 0,1 48,0 a24,24 0 0,1 -48,0" },
    // Koi 1 (orange - large)
    { id: "koi1_body", colorId: 3,  label: "3",  d: "M200,180 Q240,155 280,170 Q310,185 305,215 Q295,240 260,248 Q220,252 195,235 Q175,220 180,200 Q185,188 200,180 Z" },
    { id: "koi1_tail", colorId: 2,  label: "2",  d: "M183,210 Q165,195 148,180 Q162,205 148,228 Q165,220 183,218 Z" },
    { id: "koi1_fin_t",colorId: 2,  label: "2",  d: "M230,160 Q238,145 248,148 Q245,162 235,170 Z" },
    { id: "koi1_fin_b",colorId: 2,  label: "2",  d: "M240,248 Q248,262 238,268 Q232,256 238,252 Z" },
    { id: "koi1_spot1",colorId: 20, label: "20", d: "M230,190 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0" },
    { id: "koi1_spot2",colorId: 20, label: "20", d: "M270,210 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0" },
    { id: "koi1_eye",  colorId: 23, label: "23", d: "M290,182 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0" },
    // Koi 2 (red & white)
    { id: "koi2_body", colorId: 20, label: "20", d: "M320,320 Q355,300 385,312 Q408,325 405,352 Q398,372 368,380 Q335,384 312,368 Q296,352 300,335 Q306,322 320,320 Z" },
    { id: "koi2_tail", colorId: 1,  label: "1",  d: "M302,347 Q285,335 268,320 Q282,344 268,365 Q285,358 302,355 Z" },
    { id: "koi2_spot1",colorId: 1,  label: "1",  d: "M350,318 Q362,308 372,315 Q368,330 355,335 Z" },
    { id: "koi2_spot2",colorId: 1,  label: "1",  d: "M340,360 Q352,355 360,362 Q356,375 344,376 Z" },
    { id: "koi2_eye",  colorId: 23, label: "23", d: "M390,322 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0" },
    // Koi 3 (small, black)
    { id: "koi3_body", colorId: 23, label: "23", d: "M130,330 Q155,318 175,325 Q188,335 185,352 Q178,364 158,368 Q136,370 122,358 Q112,348 118,338 Z" },
    { id: "koi3_tail", colorId: 17, label: "17", d: "M120,346 Q106,338 94,328 Q105,346 94,360 Q108,354 120,352 Z" },
    { id: "koi3_eye",  colorId: 5,  label: "5",  d: "M178,328 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0" },
    // Lotus flowers
    { id: "lotus1_pad",colorId: 7,  label: "7",  d: "M390,150 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0" },
    { id: "lotus1_slit",colorId: 9, label: "9",  d: "M390,115 L390,150 L392,115 Z" },
    { id: "lotus1_p1", colorId: 15, label: "15", d: "M390,130 Q398,118 390,108 Q382,118 390,130 Z" },
    { id: "lotus1_p2", colorId: 15, label: "15", d: "M404,136 Q414,126 408,115 Q398,124 404,136 Z" },
    { id: "lotus1_p3", colorId: 15, label: "15", d: "M408,150 Q420,150 418,138 Q406,142 408,150 Z" },
    { id: "lotus1_p4", colorId: 15, label: "15", d: "M404,164 Q414,174 420,165 Q414,156 404,164 Z" },
    { id: "lotus1_p5", colorId: 15, label: "15", d: "M390,170 Q398,182 390,192 Q382,182 390,170 Z" },
    { id: "lotus1_p6", colorId: 15, label: "15", d: "M376,164 Q366,174 360,165 Q366,156 376,164 Z" },
    { id: "lotus1_p7", colorId: 15, label: "15", d: "M372,150 Q360,150 362,138 Q374,142 372,150 Z" },
    { id: "lotus1_p8", colorId: 15, label: "15", d: "M376,136 Q366,126 372,115 Q382,124 376,136 Z" },
    { id: "lotus1_ctr",colorId: 5,  label: "5",  d: "M390,150 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0" },
    // Lotus bud
    { id: "lotus2_pad",colorId: 6,  label: "6",  d: "M110,120 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0" },
    { id: "lotus2_stem",colorId: 7, label: "7",  d: "M108,100 Q106,82 110,68 Q114,82 112,100 Z" },
    { id: "lotus2_bud", colorId: 14,label: "14", d: "M110,68 Q118,58 118,45 Q110,50 102,45 Q102,58 110,68 Z" },
    // Lily pads scattered
    { id: "pad1", colorId: 6, label: "6", d: "M430,380 m-18,0 a18,18 0 1,0 36,0 a18,18 0 1,0 -36,0" },
    { id: "pad1s",colorId: 9, label: "9", d: "M430,362 L430,380 L432,362 Z" },
    { id: "pad2", colorId: 7, label: "7", d: "M70,220 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0" },
    { id: "pad2s",colorId: 9, label: "9", d: "M70,205 L70,220 L72,205 Z" },
    // Rocks at edges
    { id: "rock1", colorId: 18, label: "18", d: "M0,220 Q20,205 45,215 Q55,230 40,245 Q18,248 0,238 Z" },
    { id: "rock2", colorId: 16, label: "16", d: "M460,290 Q478,278 500,285 V310 Q480,315 462,308 Z" },
    { id: "rock3", colorId: 18, label: "18", d: "M200,490 Q230,480 255,488 Q260,498 250,500 H205 Z" },
    // Dragonfly
    { id: "drag_b",  colorId: 8,  label: "8",  d: "M460,100 Q475,96 480,104 Q475,108 460,104 Z" },
    { id: "drag_w1", colorId: 20, label: "20", d: "M468,99 Q472,88 480,86 Q480,96 468,99 Z" },
    { id: "drag_w2", colorId: 20, label: "20", d: "M468,105 Q472,116 480,118 Q480,108 468,105 Z" },
    // Reflection shimmer
    { id: "shim1", colorId: 21, label: "21", d: "M220,280 Q225,278 228,280 Q225,282 220,280 Z" },
    { id: "shim2", colorId: 21, label: "21", d: "M280,200 Q288,198 292,200 Q288,202 280,200 Z" },
    { id: "shim3", colorId: 21, label: "21", d: "M350,280 Q358,278 362,280 Q358,282 350,280 Z" },
  ]
};

// ─── Image 6: Forest Path ─────────────────────────────────────────────────────
const forestPath = {
  id: "forest_001",
  title: "Enchanted Forest",
  category: "Landscape",
  difficulty: "Hard",
  estimatedMinutes: 55,
  description: "A winding path through a magical forest with ancient trees",
  addedDate: "2024-01-06",
  viewBox: "0 0 500 600",
  regions: [
    // Sky through canopy
    { id: "sky",   colorId: 10, label: "10", d: "M0,0 H500 V150 H0 Z" },
    { id: "sky_l", colorId: 11, label: "11", d: "M0,0 H120 V180 H0 Z" },
    { id: "sky_r", colorId: 11, label: "11", d: "M380,0 H500 V180 H380 Z" },
    // Far background trees (silhouette)
    { id: "bg_trees", colorId: 17, label: "17", d: "M0,180 Q50,120 100,140 Q150,100 200,130 Q250,100 300,125 Q350,100 400,130 Q450,110 500,140 V200 H0 Z" },
    // Ground / forest floor
    { id: "floor_far",  colorId: 7,  label: "7",  d: "M0,450 H500 V600 H0 Z" },
    { id: "floor_mid",  colorId: 6,  label: "6",  d: "M0,500 H500 V600 H0 Z" },
    { id: "floor_near", colorId: 24, label: "24", d: "M0,540 H500 V600 H0 Z" },
    // Path
    { id: "path_far",   colorId: 19, label: "19", d: "M230,300 Q245,280 270,260 Q280,250 270,280 Q255,300 240,320 Z" },
    { id: "path_mid",   colorId: 22, label: "22", d: "M200,400 Q220,360 280,360 Q310,380 290,420 Q260,440 220,430 Z" },
    { id: "path_near",  colorId: 19, label: "19", d: "M160,600 H340 L310,460 Q270,440 230,450 Z" },
    // Left large tree trunk
    { id: "trunk_l1", colorId: 18, label: "18", d: "M30,600 Q20,400 35,200 Q48,200 50,400 Q58,600 30,600 Z" },
    { id: "trunk_l2", colorId: 16, label: "16", d: "M95,600 Q88,420 100,250 Q112,250 115,420 Q122,600 95,600 Z" },
    // Left tree roots
    { id: "root_l1", colorId: 18, label: "18", d: "M32,550 Q10,560 0,555 Q5,540 32,540 Z" },
    { id: "root_l2", colorId: 18, label: "18", d: "M35,570 Q15,590 0,600 H18 Q30,585 38,570 Z" },
    // Right large tree trunk
    { id: "trunk_r1", colorId: 18, label: "18", d: "M450,600 Q440,400 455,200 Q468,200 470,400 Q478,600 450,600 Z" },
    { id: "trunk_r2", colorId: 16, label: "16", d: "M385,600 Q378,420 390,250 Q402,250 405,420 Q412,600 385,600 Z" },
    // Right tree roots
    { id: "root_r1", colorId: 18, label: "18", d: "M462,550 Q484,560 500,555 Q495,540 462,540 Z" },
    { id: "root_r2", colorId: 18, label: "18", d: "M455,570 Q475,590 500,600 H482 Q470,585 458,570 Z" },
    // Tree canopy left
    { id: "can_l1", colorId: 6,  label: "6",  d: "M35,200 Q-20,150 0,80 Q50,60 90,100 Q110,140 80,200 Z" },
    { id: "can_l2", colorId: 7,  label: "7",  d: "M38,220 Q10,180 20,120 Q55,100 80,140 Q95,170 70,220 Z" },
    { id: "can_l3", colorId: 24, label: "24", d: "M100,250 Q70,200 85,150 Q120,130 148,170 Q158,200 140,250 Z" },
    // Tree canopy right
    { id: "can_r1", colorId: 6,  label: "6",  d: "M455,200 Q500,150 490,80 Q440,60 405,100 Q385,140 415,200 Z" },
    { id: "can_r2", colorId: 7,  label: "7",  d: "M452,220 Q478,180 468,120 Q435,100 410,140 Q395,170 420,220 Z" },
    { id: "can_r3", colorId: 24, label: "24", d: "M388,250 Q418,200 405,150 Q372,130 345,170 Q335,200 352,250 Z" },
    // Mid-ground trees
    { id: "mid_l", colorId: 17, label: "17", d: "M155,420 Q150,350 158,280 Q165,280 168,350 Q175,420 155,420 Z" },
    { id: "mid_r", colorId: 17, label: "17", d: "M335,420 Q330,350 338,280 Q345,280 348,350 Q355,420 335,420 Z" },
    { id: "mid_lc",colorId: 6,  label: "6",  d: "M155,280 Q132,248 140,220 Q162,210 178,238 Q184,258 162,280 Z" },
    { id: "mid_rc",colorId: 6,  label: "6",  d: "M337,280 Q314,248 322,220 Q344,210 360,238 Q366,258 344,280 Z" },
    // Ferns & ground cover
    { id: "fern1a", colorId: 6, label: "6", d: "M60,520 Q40,505 35,490 Q48,498 62,510 Z" },
    { id: "fern1b", colorId: 6, label: "6", d: "M62,522 Q42,518 32,508 Q46,508 64,518 Z" },
    { id: "fern1c", colorId: 7, label: "7", d: "M64,524 Q55,540 48,552 Q58,538 66,524 Z" },
    { id: "fern2a", colorId: 6, label: "6", d: "M430,520 Q450,505 455,490 Q442,498 428,510 Z" },
    { id: "fern2b", colorId: 6, label: "6", d: "M428,522 Q448,518 458,508 Q444,508 426,518 Z" },
    // Mushrooms
    { id: "mush1_cap",  colorId: 2,  label: "2",  d: "M200,490 Q200,470 215,466 Q230,470 230,490 Z" },
    { id: "mush1_stem", colorId: 20, label: "20", d: "M212,490 H218 V510 H212 Z" },
    { id: "mush1_dot1", colorId: 20, label: "20", d: "M208,478 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" },
    { id: "mush1_dot2", colorId: 20, label: "20", d: "M218,476 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" },
    // Fireflies / light orbs
    { id: "glow1", colorId: 5,  label: "5",  d: "M170,320 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0" },
    { id: "glow2", colorId: 5,  label: "5",  d: "M290,350 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0" },
    { id: "glow3", colorId: 21, label: "21", d: "M340,290 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0" },
    { id: "glow4", colorId: 21, label: "21", d: "M200,270 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" },
    // Sunbeams
    { id: "beam1", colorId: 21, label: "21", d: "M250,0 Q260,80 240,150 Q238,140 238,80 Z" },
    { id: "beam2", colorId: 21, label: "21", d: "M320,0 Q340,100 310,180 Q306,165 310,90 Z" },
    { id: "beam3", colorId: 21, label: "21", d: "M180,0 Q160,100 190,180 Q194,165 190,90 Z" },
    // Moss on trunks
    { id: "moss1", colorId: 24, label: "24", d: "M35,380 Q25,370 30,360 Q42,365 45,378 Z" },
    { id: "moss2", colorId: 24, label: "24", d: "M455,380 Q465,370 460,360 Q448,365 445,378 Z" },
    { id: "moss3", colorId: 7,  label: "7",  d: "M100,450 Q88,440 92,428 Q106,433 108,448 Z" },
  ]
};

// ─── Daily Image Generator ────────────────────────────────────────────────────
// In production this would call an AI API. For now, cycles through a set.
export const DAILY_IMAGES_POOL = [
  { ...mandala,      addedDate: getTodayDate(0) },
  { ...botanical,    addedDate: getTodayDate(-1) },
  { ...seascape,     addedDate: getTodayDate(-2) },
  { ...architecture, addedDate: getTodayDate(-3) },
  { ...koiPond,      addedDate: getTodayDate(-4) },
  { ...forestPath,   addedDate: getTodayDate(-5) },
];

function getTodayDate(daysOffset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

export function getDailyImage() {
  const today = new Date().toISOString().split('T')[0];
  const seed = today.replace(/-/g, '');
  const idx = parseInt(seed) % DAILY_IMAGES_POOL.length;
  return { ...DAILY_IMAGES_POOL[idx], isToday: true, addedDate: today };
}

export const ALL_IMAGES = DAILY_IMAGES_POOL;
export const CATEGORIES = ['All', 'Mandala', 'Botanical', 'Landscape', 'Nature', 'Architecture'];
