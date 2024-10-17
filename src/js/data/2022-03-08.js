dataSetVersion = "2022-03-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter Unreleased Characters",
    key: "unr",
    tooltip: "Check this to remove Unreleased Characters." //should i add more filters? i think this is enough for now. let me know if any others would be nice
  },
  {
    name: "Filter Women",
    key: "fem",
    tooltip: "Check this to remove female characters."
  },
  {
    name: "Filter Men",
    key: "men",
    tooltip: "Check this to remove male characters."
  },
  {
    name: "Filter Mondstadtians",
    key: "mond",
    tooltip: "Check this to remove characters from Mondstadt."
  },
  {
    name: "Filter Liyueians",
    key: "liy",
    tooltip: "Check this to remove characters from Liyue."
  },
  {
    name: "Filter Sumeruians",
    key: "sum",
    tooltip: "Check this to remove characters from Sumeru."
  },
  {
    name: "Filter Inazumans",
    key: "ina",
    tooltip: "Check this to remove characters from Inazuma."
  },
  {
    name: "Filter Fontainians",
    key: "fon",
    tooltip: "Check this to remove characters from Fontaine."
  },
  {
    name: "Filter Nationless People",
    key: "lol",
    tooltip: "Check this to remove characters who don't have an associated nationality."
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "8Ball",
    img: "8Ball.png",
    opts: {
      men: true,
      mond: true
    }
  },
  {
    name: "Absenz",
    img: "Absenz.png",
opts: {
    fem: true,
    lol: true
}
  },
  {
    name: "Abyss",
    img: "Abyss.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Agent Jones",
    img: "AgentJones.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Agent Peely",
    img: "AgentPeely.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "AIM",
    img: "AIM.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Alli",
    img: "Alli.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Antheia",
    img: "Antheia.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Arachne Couture",
    img: "ArachneCouture.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Aubrey",
    img: "Aubrey.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Aura",
    img: "Aura.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Ava",
    img: "Ava.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Azuki",
    img: "Azuki.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Birch",
    img: "Birch.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Blackheart",
    img: "Blizzabelle.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Brutus",
    img: "Brutus.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Bundles",
    img: "Bundles.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Bunker Jonesy",
    img: "BunkerJonesy.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Calamity",
    img: "Calamity.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Cameo Vs Chic",
    img: "CameoVSChic.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Camille",
    img: "Camille.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Caper",
    img: "Caper.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Captain Jones",
    img: "CaptainJones.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Carnage",
    img: "Carnage.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Catalyst",
    img: "Catalyst.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Centurion",
    img: "Centurion.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Charlotte",
    img: "Charlotte.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Chigusa",
    img: "Chigusa.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Cloaked Shadow",
    img: "CloakedShadow.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Cluck",
    img: "Cluck.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Clutch",
    img: "Clutch.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Countess Daraku",
    img: "CountessDaraku.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Cozy Commander",
    img: "CozyCommander.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Cryptic",
    img: "Cryptic.png",
opts: {
    men: true,
    liy: true //should i add a snezhnaya one for this? i feel like it's unecessary since he's the only playable character from it so far. I'll keep him as liyueian for now
}
  },
  {
    name: "Crystal",
    img: "Crystal.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "CubeAssassin",
    img: "CubeAssassin.png",
opts: {
    fem: true,
    lol: true
}
  },
  {
    name: "Dali",
    img: "Dali.png",
opts: {
    men: true,
    lol: true
}
  },
  {
    name: "D'Ark",
    img: "D'ark.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Dark Power Chord",
    img: "DarkPowerChord.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Dark Tricera Ops",
    img: "DarkTriceraOps.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Dark Vertex",
    img: "DarkVertex.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Dark Voyager",
    img: "DarkVoyager.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Dawn",
    img: "Dawn.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Deadpool",
    img: "Deadpool.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Demi",
    img: "Demi.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Demogorgon",
    img: "Demogorgon.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Demos",
    img: "DerbyDynamo.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Desdemona",
    img: "Desdemona.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Diamond Diva",
    img: "DiamondDiva.png",
opts: {
   men: true,
   ina: true
}
  },
  {
    name: "Dire",
    img: "Dire.png",
opts: {
   men: true,
   unr: true,
   lol: true //same as childe. he's from khanreiah but seems redundant to add a specific filter just for that. he will stay as nationless for now
}
  },
  {
    name: "DJ Yonder",
    img: "DJYonder.png",
opts: {
   fem: true,
   liy: true
}
  },
  {
    name: "Doctor Doom",
    img: "DoctorDoom.png",
opts: {
   fem: true,
   ina: true
}
  },
  {
    name: "Doom",
    img: "Doom.png",
opts: {
   fem: true,
   liy: true
}
  },
  {
    name: "Doublecross",
    img: "Doublecross.png",
opts: {
   men: true,
   unr: false,
   ina: true
}
  },
  {
    name: "Drakon Steel Hybrid",
    img: "DrakonSteelHybrid.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Dream",
    img: "Dream.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Drift",
    img: "Drift.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Dusk",
    img: "Dusk.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Elite Agent",
    img: "EliteAgent.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Ember",
    img: "Ember.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Emma Frost",
    img: "EmmaFrost.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Enforcer",
    img: "Enforcer.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Era",
    img: "Era.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "EternalVoyager",
    img: "EternalVoyager.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Etheria",
    img: "Etheria.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Explorer Emilie",
    img: "ExplorerEmilie.png",
opts: {
   men: true,
   unr: false,
   sum: true,
   ina: true
}
  },
  {
    name: "Fabio Sparklemane",
    img: "FabioSparklemane.png",
opts: {
   men: true,
   liy: true
}
  },
  {
    name: "Fable",
    img: "Fable.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Fade",
    img: "Fade.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Fanatic",
    img: "Fanatic.png",
opts: {
   fem: true,
   unr: false,
   ina: true
}
  },
  {
    name: "Felina",
    img: "Felina.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Festival Lace",
    img: "FestivalLace.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Festival Phaedra",
    img: "FestivalPhaedra.png",
opts: {
   men: true,
   unr: false,
   mond: true
}
  },
  {
    name: "Flapjackie",
    img: "Flapjackie.png",
opts: {
   men: true,
   fon: true
}
  },
  {
    name: "Frost Squad",
    img: "FrostSquad.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Fusion",
    img: "Fusion.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Galaxia",
    img: "Galaxia.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Gear Specialist Maya",
    img: "GearSpecialistMaya.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Giddy-Up",
    img: "Giddy-Up.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Glitch",
    img: "Glitch.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Green Arrow",
    img: "GreenArrow.png",
opts: {
   fem: true,
   unr: true,
   fon: true
}
  },
  {
    name: "Grind",
    img: "Grind.png",
opts: {
   men: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Groot",
    img: "Groot.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Gwenpool",
    img: "Gwenpool.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Halley",
    img: "Halley.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Haven",
    img: "Haven.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Haze",
    img: "Haze.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Holiday Boxy",
    img: "HolidayBoxy.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Hope",
    img: "Hope.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Huntress",
    img: "Huntress.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Hybrid",
    img: "Hybrid.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Imperial Stormtrooper",
    img: "Imperial Stormtrooper.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Iris",
    img: "Iris.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "J.B. Chimpanski",
    img: "J.B.Chimpanski.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Jackie",
    img: "Jackie.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Jennifer Walters",
    img: "JenniferWalters.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Jing",
    img: "Jing.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "John Wick",
    img: "JohnWick.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Joltara",
    img: "Joltara.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Journey VS Hazard",
    img: "JourneyVSHazard.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Karol G",
    img: "KarolG.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Keleritas",
    img: "Keleritas.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Kondor",
    img: "Kondor.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Kor",
    img: "Kor.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Krisabelle",
    img: "Krisabelle.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Kuno",
    img: "Kuno.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Kymera",
    img: "Kymera.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lace",
    img: "Lace.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Laguna",
    img: "Laguna.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lana Llane",
    img: "Lana Llane.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lara Croft",
    img: "LaraCroft.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Leelah",
    img: "Leelah.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lexa",
    img: "Lexa.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lil Split",
    img: "LilSplit.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lizzik",
    img: "Lizzik.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Llamabro",
    img: "Llamabro.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lt Evergreen",
    img: "LtEvergreen.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lt John Llama",
    img: "LtJohnLlama.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Luxe",
    img: "Luxe.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lynx",
    img: "Lynx.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mancake",
    img: "Mancake.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mandalorian",
    img: "Mandalorian.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Manic",
    img: "Manic.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Marigold",
    img: "Marigold.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Master Key",
    img: "MasterKey.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mave",
    img: "Mave.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mecha Cuddle Master",
    img: "MechaCuddleMaster.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Megumi",
    img: "Megumi.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Menace",
    img: "Menace.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Meowscles",
    img: "Meowscles.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Midas",
    img: "Midas.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Midnight Dusk",
    img: "MidnightDusk.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "MissionSpecialist",
    img: "MissionSpecialist.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Molten Omen",
    img: "MoltenOmen.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Montague",
    img: "Montague.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Moonwalker",
    img: "Moonwalker.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mysterio",
    img: "Mysterio.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Mystique",
    img: "Mystique.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Nightshade",
    img: "Nightshade.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Nightsurf Bomber",
    img: "Nightsurf Bomber.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Nisha",
    img: "Nisha.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Nog Ops",
    img: "NogOps.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Ocean",
    img: "Ocean.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Omegarok",
    img: "Omegarok.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Onesie",
    img: "Onesie.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Oscar",
    img: "Oscar.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Panda Team Leader",
    img: "PandaTeamLeader.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Peelverine",
    img: "Peelverine.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Peely",
    img: "Peely.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Peter Griffen",
    img: "PeterGriffen.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "PolarPeely",
    img: "PolarPeely.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Polus",
    img: "Polus.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Powder",
    img: "Powder.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Predator",
    img: "Predator.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Ragnarok",
    img: "Ragnarok.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Raven Team Leader",
    img: "RavenTeamLeader.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Raz",
    img: "Raz.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rebirth Raven",
    img: "RebirthRaven.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Red Jade",
    img: "RedJade.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Redline",
    img: "Redline.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Reese",
    img: "Reese.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Reina",
    img: "Reina.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Remedy VS Toxin",
    img: "RemedyVSToxin.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Renegade Lynx",
    img: "RenegadeLynx.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Reverie",
    img: "Reverie.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rian",
    img: "Rian.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rippley VS Sludge",
    img: "RippleyVSSludge.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rogue",
    img: "Rogue.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Ronin",
    img: "Ronin.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rook",
    img: "Rook.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rose Team Leader",
    img: "RoseTeamLeader.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rox",
    img: "Rox.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rue",
    img: "Rue.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Ruin",
    img: "Ruin.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Runway Racer",
    img: "RunwayRacer.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Rust Lord",
    img: "RustLord.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Scarlet Witch",
    img: "ScarletWitch.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Scourge",
    img: "Scourge.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Scrapknight Jules",
    img: "ScrapknightJules.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Scuba Crystal",
    img: "ScubaCrystal.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Scuba Jonesy",
    img: "Scuba Jonesy.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Seeker",
    img: "Seeker.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sentinel",
    img: "Sentinel.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sgt Winter",
    img: "SgtWinter.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Shadow Ark",
    img: "ShadowArk.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Shanta",
    img: "Shanta.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Shogun",
    img: "Shogun.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Shuri",
    img: "Shuri.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sica",
    img: "Sica.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sidewinder",
    img: "Sidewinder.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sierra",
    img: "Sierra.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Silas Hesk",
    img: "SilasHesk.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Singularity",
    img: "Singularity.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Siren",
    img: "Siren.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sith Trooper",
    img: "SithTrooper.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Skull Ranger",
    img: "SkullRanger.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Skull Scout",
    img: "SkullScout.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Skully",
    img: "Skully.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Skye",
    img: "Skye.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sledgehammer",
    img: "Sledgehammer.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Snowbell",
    img: "Snowbell.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Snowdancer",
    img: "Snowdancer.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Snowmando",
    img: "Snowmando.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Solid Snake",
    img: "SolidSnake.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sorana",
    img: "Sorana.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sorina",
    img: "Sorina.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sparkle Supreme",
    img: "SparkleSupreme.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Spectra Knight",
    img: "SpectraKnight.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Spire Assassin",
    img: "SpireAssassin.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Spirit Hunter Saeko",
    img: "SpiritHunterSaeko.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Splatterella",
    img: "Splatterella.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Star-Spangled Ranger",
    img: "StarSpangledRanger.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Storm",
    img: "Storm.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Stratus",
    img: "Stratus.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Summit Striker",
    img: "SummitStriker.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sunbird",
    img: "Sunbird.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Sun Strider",
    img: "SunStrider.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tarana",
    img: "Tarana.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Ace",
    img: "TheAce.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Autumn Queen",
    img: "TheAutumnQueen.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Cube Queen",
    img: "TheCubeQueen.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Ice King",
    img: "TheIceKing.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Machinist",
    img: "TheMachinist.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Prisoner",
    img: "ThePrisoner.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "The Scientist",
    img: "TheScientist.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Thor",
    img: "Thor.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tigress",
    img: "Tigress.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tilted Teknique",
    img: "TiltedTeknique.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tntina",
    img: "Tntina.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tony Stark",
    img: "TonyStark.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Toona Fish",
    img: "ToonaFish.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Torin",
    img: "Torin.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Trace",
    img: "Trace.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Travis Scott",
    img: "TravisScott.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Triple Threat",
    img: "TripleThreat.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Trog",
    img: "Trog.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Tsuki",
    img: "Tsuki.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Turk VS Riptide",
    img: "TurkVSRiptide.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Ultima Knight",
    img: "UltimaKnight.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Valeria",
    img: "Valeria.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Vega",
    img: "Vega.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Vendetta",
    img: "Vendetta.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Vengeance Jones",
    img: "VengeanceJones.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Vi",
    img: "VI.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "War Machine",
    img: "WarMachine.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Warpaint",
    img: "Warpaint.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Wavebreaker",
    img: "Wavebreaker.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Whiteout",
    img: "Whiteout.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Wilde",
    img: "Wilde.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Windwalker Echo",
    img: "WindwalkerEcho.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Wingman",
    img: "Wingman.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Winterfest Bushranger",
    img: "WinterfestBushranger.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Wolverine",
    img: "Wolverine.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Wooly Warrior",
    img: "WoolyWarrior.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "X-Lord",
    img: "X-Lord.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Yond3r",
    img: "Yond3r.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Yuki",
    img: "Yuki.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Zenith",
    img: "Zenith.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Zorgoton",
    img: "Zorgoton.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Lexa Harbinger",
    img: "LexaHarbinger.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  }
]  

