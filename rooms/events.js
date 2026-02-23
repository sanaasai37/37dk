// events.js
const events = [
  { date: "2026-03-07", time: "0:00", title: "3LDK OPEN", place: "web" },
  { date: "2026-03-07", time: "21:00", title: "さなちゅぶ。更新", place: "Youtube", tags:["公開予定"] },
  { date: "2026-03-14", time: "21:00", title: "さなちゅぶ。更新", place: "Youtube", tags:["公開予定"] },
  { date: "2026-08-01", time: "0:00", title: "A HAPPY NEW YEAR", place: "Japan" },
  { date: "2026-08-06", time: "0:00", title: "HAPPY SANA BIRTHDAY", place: "Japan" },

//  { date: "2026-01-03", time: "21:00", title: "さなちゅぶ。生まれ変わります。", place: "Youtube", tags:["公開予定"] },
//  { date: "2026-01-10", time: "21:00", title: "3LDK開設の裏側", place: "YouTube", tags:["公開予定"] },
//  { date: "2026-01-17", time: "21:00", title: "さなろぐ再始動", place: "YouTube", tags:["公開予定"] },
//  { date: "2026-01-21", time: "18:00", title: "さなろぐ #1", place: "Podcast", tags:["配信"] },
  { date: "2026-01-24", time: "21:00", title: "", place: "Cafe", tags:["追加確認"] },
  { date: "2025-11-15", time: "18:00", title: "テスト：🍰ケーキの日", place: "Cafe", tags:["追加確認"] },
].sort((a,b)=> a.date.localeCompare(b.date) || (a.time||"").localeCompare(b.time||""));
