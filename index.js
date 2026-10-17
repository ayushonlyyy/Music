const EUROPIFY_ICON = 'data:image/jpeg;base64,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Pp/CrWXeWrW0tb472UsHu2yeTnqpXwpgmagOcR8lfm4ocA+oH8zTE44t1alrUVLUckk5Jq5R9meWT0Vpkx6dIW++srcV1J/gPQVQzg15RUislJ7SdXqgCCdS3X3QJ2Bv3lWNvpnOcUw2+5y7VPZnQpLkeYwre282rCkK9QatKKAmEntV1tLZLTuqruWz1AlKH8DUUkSHZTq3X3FuurOVLWoqUo+pJ61SooAzRRRQBRRRQBRRRmgPetATmvaUDzXDp4GyaUGFGlpIqp3gQMmlnaRTEVRqmttKONwJ+FeuPqc4zhPoKpUVnHXgKKKK6cCiiigPc1UjyXYrgcZcW2sdFJODVKigXBI2tVvlGHwlTg6OJSAo/Okr1HuQoFK1bjnCjnmo9RUPjiW/POqsdheAkKCGQN3qQf5VaPT1uk4SEj061aUV1RSIvJJ+S499fA294rBOaoqWpZypRJ+NJoqRCz2vKKKAKKKKAKKKKA9HJpRbIpFVkKynnyoCmUEV5tqqTSDQCcV5SqTQBRRRQBXoNeUUAvdSVKKuteUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUpBxmk16DQCs15mk5ooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooD/9k=';
const EUROPIFY_ICON_SMALL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABwAFBggBAgME/8QAMxAAAQIFAwIFBAECBwAAAAAAAQIDAAQFBhEHEiExQQgTIlFhFTJxgRSRkiMkM0JiobH/xAAaAQACAwEBAAAAAAAAAAAAAAACBQADBAEG/8QAIBEAAgICAgMBAQAAAAAAAAAAAAECAwQRITESIkFRcf/aAAwDAQACEQMRAD8AplChRu02pxQSkZJiES2aRnBgmaY6LXpfmX6VTwzIIOHZ+aV5Uuj39R+4/CQTE7e0p0ZtpRl7v1kl3ZxHDjFIlfNCD7bvV/4IBWRfRY6pLsrxg+0YxFiGtNtBa8f49vazKkptXCE1aSCGyewKiEYiG6qaH3nYcn9VmpdiqUNWCiqU5fmy+D0Ku6M/8hj2JizRW+AUwo2WgpJBGI1jhDKRk4g5eG3Tik1xdQvG8XRK2nQkedOuKOPOV1S0k/PfHOMAckQFJJG90Z6d4sHrvPLs3Riw9OpE+QZ6T+tVTbwXXHOUA++Of7Exnv3L1Rqx0o7mzjf+ol7aw15qyLBpczKURP8AhSVIkE7AptP+50jAAA5OSEjvk8mQUDwj1ASqHrru6WkX1cmUkGPPKfgrUUgnnsD+YMnh5til6Z6bSwWwg3DVWEzNSmCBuRuGUMg9ggHkd1En8YuS4Jtc68sKSttDvRKt2zGCpJxjAHt3P4zCyWb4y8KhpVgu73s4QGa74VZdbQFu3srz1A+W3UpEobWR2Ljalbf2kxCrauzU7w+3UaBcEi67SXwS/SppYdk5xlXBWyrlPIz6k8dlDtFlaZdYWhtttzKxnIJATvOScDufYD9H3ht7zFL1Fo07Y1SYSlSCt2nTa0eqVmMZSoHqEqPpUnuM9wDDCjIb0pGTJw0tuHwDuv8AYVvJolO1P07BVaNaVtXLY9VNmecsqHZJIOB2IIyRtJCRGDFgPC6t6sovXR2sJV/HrFOedZaWf9CdY6KHseB/YIAk02pt1SFp2qBwoex7xsf6KyZaJ23L3dqXQLZm3zLy9SnUMOuJ6pQclWPkgED5Ii4HiGotsJlr9emKPJzM1SbWpJprjqAtbDAmXg5sJ+04QMkc8RSawK+5bN5UavNqUFU+damOOuEqBP8A1mLSamVmYuGsMPyzomZC46LMUlLzasoc585rBHcguY7xRPaZqr01/CQ3JfICvpqMKD29TewggYO5OTkAJIIPXP4iJXLejkmhSAWFhalcs+odOmO4JUeemIElMrwnLfQxPFbM3TwJeYyeStPpSSO3pGP6w2Tlaf8A5CVqe84LIOxeevQkfB+IT04jhLT+Ho7s2EoJxXZPWrqdQ/5iCpsk/Yn7v6YwIcpW5paVU/OMlCph1RClDnYcAZz75gZVF8JlQptrBPJUVHP6/feG9NSXKSD77qzgK3IA4BWRwkD5jdXXp8Cy65NclqfD4xQXnLKuVFKkWarO3VWUmaS0A6uWEs+VJUocqG/bjPTtFafE5aNPsjWWuUKlPqekd6JljdyptLyQ5sJ77SojPtiC9pTMT1Det2QcJaTQaQ9MzBWdobem1j7ieh2pWeexgC603Mm79Ta3XW3fNZffCGV9lNoSEJI+CE5/cMvgmfZDgMx3S9MttJQmZcQhKt6UhZACvcD3+Y88KBIeqRn5iTmS+2rcVfeF8hf5h1+tSawf8q+wcg+l3eM/scQwQoFwTLI2yjwh+fuFS1ZDRVx3PENU9PTE4sF5fA+1I6CPNCiKKXQMpuXZ3MzMrC0qmHSHMbwVnCsdM+8cSCIxCggT/9k=';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<title>Europify</title>
<link rel="icon" href="__EUROPIFY_ICON_SMALL__"/>
<link rel="apple-touch-icon" href="__EUROPIFY_ICON__"/>
<meta name="theme-color" content="#050505"/>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:       #050505;
  --bg2:      #0d0d0d;
  --bg3:      #141414;
  --bg4:      #0f0f0f;
  --border:   rgba(255,255,255,0.06);
  --border2:  rgba(255,255,255,0.13);
  --text:     #ffffff;
  --text2:    rgba(255,255,255,0.72);
  --text3:    rgba(255,255,255,0.48);
  --scroll:   rgba(255,255,255,0.06);
  --sidebar-w: 280px;
  --header-h:  62px;
  --player-h:  72px;
  --accent:   rgba(255,255,255,0.9);
}

body.light {
  --bg:       #fafafa;
  --bg2:      #ffffff;
  --bg3:      #f3f3f3;
  --bg4:      #f8f8f8;
  --border:   rgba(0,0,0,0.07);
  --border2:  rgba(0,0,0,0.14);
  --text:     #0a0a0a;
  --text2:    rgba(0,0,0,0.65);
  --text3:    rgba(0,0,0,0.35);
  --scroll:   rgba(0,0,0,0.08);
}

html, body { height: 100%; background: var(--bg); color: var(--text); font-family: 'Sora', sans-serif; font-size: 15px; line-height: 1.6; overflow: hidden; }

* { -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; }
input, textarea { -webkit-user-select: text; user-select: text; }

/* ── Loading ── */
:root { --glow: rgba(255,255,255,0.2); }
body.light { --glow: rgba(0,0,0,0.14); }
#loading-screen {
  position: fixed; inset: 0; z-index: 9999;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 22px;
  transition: opacity 0.38s ease;
}
#loading-screen.hide { opacity: 0; visibility: hidden; pointer-events: none; }
.load-msg { margin: 0; color: var(--text2); font-size: 14px; text-align: center; max-width: 300px; padding: 0 16px; }
.brand-logo { width: 72px; height: 72px; border-radius: 22%; display: block; object-fit: cover; animation: breathe 6s ease-in-out infinite; }
.brand-logo[src=""] { display: none; }
.wm { font-weight: 300; letter-spacing: .005em; font-size: 20px; line-height: 1; white-space: nowrap; }
@keyframes breathe { 0%,100% { transform: scale(1); box-shadow: 0 0 0 1px var(--border), 0 0 34px var(--glow); } 50% { transform: scale(1.045); box-shadow: 0 0 0 1px var(--border2), 0 0 52px var(--glow); } }
.loading-logo { display: flex; align-items: center; gap: 10px; animation: fadeInUp 0.6s ease both; }
.loading-logo span { font-size: 26px; font-weight: 600; letter-spacing: -0.5px; }
.loading-bar { width: 120px; height: 2px; background: var(--bg3); border-radius: 2px; overflow: hidden; animation: fadeInUp 0.6s 0.15s ease both; }
.loading-bar-fill { height: 100%; width: 0%; background: linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.6), rgba(255,255,255,0.3)); animation: loadBar 1.4s ease forwards; border-radius: 2px; }
body.light .loading-bar-fill { background: linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.2)); }
@keyframes loadBar { to { width: 100%; } }
@keyframes fadeInUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.35;} }
@keyframes shimmer { to { background-position: -200% 0; } }
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.5;} }
@keyframes slideUp { from { transform: translateY(100%); opacity:0; } to { transform:translateY(0); opacity:1; } }
@keyframes scaleIn { from { transform:scale(0.92); opacity:0; } to { transform:scale(1); opacity:1; } }

/* ── Shell ── */
.shell { display: flex; height: 100vh; height: 100dvh; overflow: hidden; }

/* ── Sidebar ── */
.sidebar {
  width: var(--sidebar-w); flex-shrink: 0;
  background: var(--bg2); border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.28s cubic-bezier(.4,0,.2,1);
  position: fixed; left: 0; top: 0; bottom: 0; z-index: 50;
}
.sidebar.open { transform: translateX(0); }
.sidebar-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  z-index: 49; opacity: 0; pointer-events: none;
  transition: opacity 0.28s ease; backdrop-filter: blur(2px);
}
.sidebar-backdrop.show { opacity: 1; pointer-events: all; }

.sidebar-header { padding: 18px 16px 14px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.sidebar-brand { display: flex; align-items: center; gap: 8px; }
.sidebar-brand-text { font-size: 14px; font-weight: 600; letter-spacing: -0.3px; }
.sidebar-brand-badge { font-size: 10px; font-weight: 500; color: var(--text2); background: var(--bg3); border: 1px solid var(--border); padding: 2px 7px; border-radius: 20px; letter-spacing: 0.5px; text-transform: uppercase; }

.sidebar-nav { flex: 1; overflow-y: auto; padding: 10px 8px; }
.sidebar-nav::-webkit-scrollbar { width: 3px; }
.sidebar-nav::-webkit-scrollbar-thumb { background: var(--scroll); border-radius: 3px; }

.nav-section { padding: 14px 10px 5px; font-size: 10px; font-weight: 600; color: var(--text3); letter-spacing: 1px; text-transform: uppercase; }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 9px; cursor: pointer; transition: background 0.12s, color 0.12s; margin-bottom: 1px; font-size: 13px; color: var(--text2); font-weight: 400; }
.nav-item:hover { background: var(--bg3); color: var(--text); }
.nav-item.active { background: var(--bg3); color: var(--text); }
.nav-item svg { opacity: 0.5; flex-shrink: 0; transition: opacity 0.12s; }
.nav-item.active svg, .nav-item:hover svg { opacity: 1; }

.sidebar-footer { border-top: 1px solid var(--border); padding: 12px; flex-shrink: 0; }
.sidebar-theme-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 4px; }
.sidebar-theme-label { font-size: 12px; color: var(--text3); }
.theme-toggle { width: 38px; height: 22px; border-radius: 11px; background: var(--bg3); border: 1px solid var(--border2); cursor: pointer; position: relative; transition: background 0.2s; }
.theme-toggle-knob { position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: var(--text2); transition: transform 0.2s, background 0.2s; }
body.light .theme-toggle-knob { transform: translateX(16px); }

/* ── Main ── */
.main { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden; }

/* ── Header ── */
.header { height: var(--header-h); display: flex; align-items: center; justify-content: space-between; padding: 0 16px; border-bottom: 1px solid var(--border); background: var(--bg); flex-shrink: 0; position: relative; z-index: 10; }
.header-left { display: flex; align-items: center; gap: 10px; }
.menu-btn { background: none; border: none; color: var(--text2); cursor: pointer; padding: 6px; border-radius: 8px; display: flex; align-items: center; transition: color 0.2s, background 0.2s; }
.menu-btn:hover { color: var(--text); background: var(--bg3); }
.logo { display: flex; align-items: center; gap: 8px; }
.logo svg { flex-shrink: 0; }
.logo-text { font-size: 16px; font-weight: 600; letter-spacing: -0.3px; }
.logo-badge { font-size: 10px; font-weight: 500; color: var(--text2); background: var(--bg3); border: 1px solid var(--border); padding: 2px 7px; border-radius: 20px; letter-spacing: 0.5px; text-transform: uppercase; }
.header-right { display: flex; align-items: center; gap: 6px; }
.icon-btn { background: none; border: none; color: var(--text2); cursor: pointer; padding: 6px; border-radius: 8px; display: flex; align-items: center; transition: color 0.2s, background 0.2s; }
.icon-btn:hover { color: var(--text); background: var(--bg3); }
.icon-btn.active { color: var(--text); }

/* Header search */
.header-search-wrap { position: relative; display: flex; align-items: center; }
.search-box { position: absolute; right: 36px; top: 50%; transform: translateY(-50%); width: 0; overflow: hidden; transition: width 0.3s cubic-bezier(.4,0,.2,1); background: var(--bg2); border: 1px solid var(--border); border-radius: 9px; }
.search-box.open { width: 200px; border-color: var(--border2); }
.search-input { width: 100%; background: none; border: none; outline: none; color: var(--text); font-family: 'Sora', sans-serif; font-size: 13px; padding: 7px 12px; }
.search-input::placeholder { color: var(--text3); }

/* ── Content Area ── */
.content-area { flex: 1; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--scroll) transparent; }
.content-area::-webkit-scrollbar { width: 4px; }
.content-area::-webkit-scrollbar-thumb { background: var(--scroll); border-radius: 4px; }
.content-inner { max-width: 800px; margin: 0 auto; padding: 20px 16px calc(var(--player-h) + 20px); }

/* ── Views ── */
.view { display: none; }
.view.active { display: block; animation: fadeInUp 0.3s ease both; }

/* ── Section Headers ── */
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.section-title { font-size: 13px; font-weight: 600; color: var(--text3); letter-spacing: 0.8px; text-transform: uppercase; }
.section-action { font-size: 12px; color: var(--text3); cursor: pointer; padding: 3px 8px; border-radius: 6px; transition: color 0.15s, background 0.15s; }
.section-action:hover { color: var(--text2); background: var(--bg3); }

/* ── Song Cards (List) ── */
.song-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 12px; border-radius: 10px;
  cursor: pointer; transition: background 0.15s;
  margin-bottom: 2px; position: relative;
}
.song-item:hover { background: var(--bg3); }
.song-item.playing { background: var(--bg3); }
.song-item.playing .song-item-title { color: var(--text); }
.song-num { width: 20px; text-align: center; font-size: 12px; color: var(--text3); font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }
.song-item.playing .song-num { display: none; }
.song-playing-bars { display: none; width: 20px; flex-shrink: 0; align-items: flex-end; justify-content: center; gap: 2px; height: 16px; }
.song-item.playing .song-playing-bars { display: flex; }
.bar { width: 3px; border-radius: 2px; background: var(--text2); animation: barAnim 0.8s ease infinite; }
.bar:nth-child(1) { animation-delay: 0s; height: 8px; }
.bar:nth-child(2) { animation-delay: 0.15s; height: 14px; }
.bar:nth-child(3) { animation-delay: 0.3s; height: 6px; }
@keyframes barAnim { 0%,100%{transform:scaleY(0.4);} 50%{transform:scaleY(1);} }
.song-item.paused .bar { animation-play-state: paused; }

.song-item-thumb { width: 44px; height: 44px; border-radius: 8px; overflow: hidden; flex-shrink: 0; background: var(--bg3); border: 1px solid var(--border); }
.song-item-thumb img { width: 100%; height: 100%; object-fit: cover; }
.song-item-info { flex: 1; min-width: 0; }
.song-item-title { font-size: 13.5px; font-weight: 500; color: var(--text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: color 0.15s; }
.song-item:hover .song-item-title { color: var(--text); }
.song-item-artist { font-size: 12px; color: var(--text3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-item-duration { font-size: 11.5px; color: var(--text3); font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }
.song-item-actions { display: flex; align-items: center; gap: 4px; opacity: 0; transition: opacity 0.15s; flex-shrink: 0; }
.song-item:hover .song-item-actions { opacity: 1; }
.song-action-btn { background: none; border: none; color: var(--text3); cursor: pointer; padding: 4px; border-radius: 6px; display: flex; align-items: center; transition: color 0.15s; }
.song-action-btn:hover { color: var(--text2); }
.song-action-btn.liked { color: #f87171; }

/* ── Skeleton ── */
.skeleton { background: linear-gradient(90deg, var(--bg3) 25%, var(--bg4) 50%, var(--bg3) 75%); background-size: 200% 100%; animation: shimmer 1.6s infinite; border-radius: 8px; }
.skeleton-song { display: flex; align-items: center; gap: 12px; padding: 10px 12px; margin-bottom: 2px; }
.skeleton-thumb { width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0; }
.skeleton-info { flex: 1; }
.skeleton-line { height: 12px; border-radius: 6px; margin-bottom: 6px; }
.skeleton-line.w60 { width: 60%; }
.skeleton-line.w80 { width: 80%; }
.skeleton-line.w40 { width: 40%; }

/* ── Empty State ── */
.empty-state { padding: 60px 20px; text-align: center; }
.empty-icon { font-size: 48px; margin-bottom: 12px; opacity: 0.3; }
.empty-title { font-size: 15px; font-weight: 500; color: var(--text2); margin-bottom: 6px; }
.empty-desc { font-size: 13px; color: var(--text3); }

/* ── HOME VIEW ── */
.home-hero { margin-bottom: 28px; }
.home-greeting { font-size: 11px; font-weight: 600; color: var(--text3); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; }
.home-title { font-size: 22px; font-weight: 600; letter-spacing: -0.5px; }
.home-subtitle { font-size: 13px; color: var(--text3); margin-top: 4px; }

.quick-picks { display: flex; gap: 10px; overflow-x: auto; scrollbar-width: none; padding-bottom: 4px; margin-bottom: 28px; }
.quick-picks::-webkit-scrollbar { display: none; }
.quick-pick-btn { display: flex; align-items: center; gap: 8px; padding: 8px 14px 8px 8px; background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; cursor: pointer; white-space: nowrap; transition: all 0.18s; flex-shrink: 0; }
.quick-pick-btn:hover { border-color: var(--border2); background: var(--bg3); }
.quick-pick-btn img { width: 32px; height: 32px; border-radius: 6px; object-fit: cover; background: var(--bg3); }
.quick-pick-btn span { font-size: 12.5px; font-weight: 500; color: var(--text2); }

.mood-chips { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; padding-bottom: 4px; margin-bottom: 28px; }
.mood-chips::-webkit-scrollbar { display: none; }
.mood-chip { padding: 6px 14px; border-radius: 20px; background: var(--bg2); border: 1px solid var(--border); font-size: 12px; color: var(--text2); cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: all 0.18s; }
.mood-chip:hover { background: var(--bg3); border-color: var(--border2); color: var(--text); }
.mood-chip.active { background: var(--text); color: var(--bg); border-color: var(--text); }

/* ── SEARCH VIEW ── */
.search-view-input-wrap { position: relative; margin-bottom: 20px; }
.search-view-input { width: 100%; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; color: var(--text); font-family: 'Sora', sans-serif; font-size: 14px; padding: 12px 16px 12px 44px; outline: none; transition: border-color 0.2s; -webkit-user-select: text; user-select: text; }
.search-view-input:focus { border-color: var(--border2); }
.search-view-input::placeholder { color: var(--text3); }
.search-view-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text3); pointer-events: none; }
.search-clear-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text3); cursor: pointer; padding: 4px; border-radius: 6px; display: none; align-items: center; transition: color 0.15s; }
.search-clear-btn.show { display: flex; }
.search-clear-btn:hover { color: var(--text2); }

.search-genres { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.genre-chip { padding: 7px 16px; border-radius: 9px; background: var(--bg2); border: 1px solid var(--border); font-size: 12.5px; color: var(--text2); cursor: pointer; transition: all 0.18s; }
.genre-chip:hover { background: var(--bg3); border-color: var(--border2); color: var(--text); }

.search-results-count { font-size: 12px; color: var(--text3); margin-bottom: 12px; font-family: 'JetBrains Mono', monospace; }

/* ── LIBRARY VIEW ── */
.library-tabs { display: flex; gap: 0; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
.lib-tab { padding: 10px 16px; font-size: 13px; font-weight: 500; color: var(--text3); cursor: pointer; border-bottom: 2px solid transparent; transition: color 0.18s, border-color 0.18s; }
.lib-tab:hover { color: var(--text2); }
.lib-tab.active { color: var(--text); border-bottom-color: var(--text); }

.playlist-card { display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 8px; cursor: pointer; transition: border-color 0.18s; }
.playlist-card:hover { border-color: var(--border2); }
.playlist-art { width: 52px; height: 52px; border-radius: 8px; background: var(--bg3); flex-shrink: 0; overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; }
.playlist-art img { width: 100%; height: 100%; object-fit: cover; }
.playlist-art-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.playlist-info { flex: 1; min-width: 0; }
.playlist-name { font-size: 14px; font-weight: 500; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.playlist-count { font-size: 12px; color: var(--text3); margin-top: 2px; }
.playlist-actions { display: flex; gap: 4px; }

.create-playlist-btn { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: var(--bg2); border: 1px dashed var(--border2); border-radius: 12px; cursor: pointer; font-size: 13px; color: var(--text3); transition: all 0.18s; width: 100%; margin-bottom: 16px; }
.create-playlist-btn:hover { border-color: var(--text3); color: var(--text2); background: var(--bg3); }

/* ── PLAYER SCREEN (Full) ── */
#player-screen {
  position: fixed; inset: 0; z-index: 200;
  background: var(--bg);
  display: none; flex-direction: column;
  overflow: hidden;
}
#player-screen.open { display: flex; animation: slideUp 0.35s cubic-bezier(.4,0,.2,1); }

.player-screen-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; flex-shrink: 0; }
.player-screen-close { background: none; border: none; color: var(--text2); cursor: pointer; padding: 6px; border-radius: 8px; display: flex; align-items: center; transition: color 0.2s; }
.player-screen-close:hover { color: var(--text); }
.player-screen-title { font-size: 13px; font-weight: 600; color: var(--text3); letter-spacing: 0.5px; text-transform: uppercase; }
.player-screen-options { background: none; border: none; color: var(--text2); cursor: pointer; padding: 6px; border-radius: 8px; display: flex; align-items: center; transition: color 0.2s; }
.player-screen-options:hover { color: var(--text); }

.player-artwork-wrap { flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px 40px; min-height: 0; }
.player-artwork { width: 100%; max-width: 300px; aspect-ratio: 1; border-radius: 18px; overflow: hidden; background: var(--bg3); box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 1px solid var(--border); transition: transform 0.3s; }
.player-artwork.playing { transform: scale(1.02); }
.player-artwork img { width: 100%; height: 100%; object-fit: cover; }

.player-info-wrap { padding: 0 28px 10px; flex-shrink: 0; }
.player-song-title { font-size: 18px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 4px; letter-spacing: -0.3px; }
.player-song-artist { font-size: 14px; color: var(--text3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.player-like-btn { background: none; border: none; color: var(--text3); cursor: pointer; padding: 4px; display: flex; align-items: center; transition: color 0.2s, transform 0.15s; flex-shrink: 0; }
.player-like-btn:hover { color: var(--text2); }
.player-like-btn.liked { color: #f87171; transform: scale(1.1); }
.player-info-row { display: flex; align-items: center; justify-content: space-between; }

/* Progress */
.player-progress-wrap { padding: 16px 28px 4px; flex-shrink: 0; }
.progress-bar-container { width: 100%; height: 4px; background: var(--border); border-radius: 2px; cursor: pointer; position: relative; margin-bottom: 8px; touch-action: none; }
.progress-bar-fill { height: 100%; background: var(--text2); border-radius: 2px; position: relative; transition: width 0.1s linear; pointer-events: none; }
.progress-bar-fill::after { content: ''; position: absolute; right: -5px; top: -4px; width: 12px; height: 12px; border-radius: 50%; background: var(--text); opacity: 0; transition: opacity 0.15s; }
.progress-bar-container:hover .progress-bar-fill::after { opacity: 1; }
.progress-times { display: flex; justify-content: space-between; font-size: 11px; color: var(--text3); font-family: 'JetBrains Mono', monospace; }

/* Controls */
.player-controls { display: flex; align-items: center; justify-content: center; gap: 20px; padding: 12px 28px; flex-shrink: 0; }
.ctrl-btn { background: none; border: none; color: var(--text2); cursor: pointer; padding: 8px; border-radius: 50%; display: flex; align-items: center; transition: color 0.2s, transform 0.15s; }
.ctrl-btn:hover { color: var(--text); transform: scale(1.1); }
.ctrl-btn.active { color: var(--text); }
.ctrl-btn-main { width: 56px; height: 56px; border-radius: 50%; background: var(--text); color: var(--bg); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s, background 0.2s; }
.ctrl-btn-main:hover { transform: scale(1.06); }
.ctrl-btn-main:active { transform: scale(0.96); }

/* Volume */
.player-volume-wrap { display: flex; align-items: center; gap: 10px; padding: 4px 28px 16px; flex-shrink: 0; }
.volume-icon { color: var(--text3); flex-shrink: 0; }
.volume-slider { flex: 1; -webkit-appearance: none; appearance: none; height: 3px; border-radius: 2px; background: var(--border); outline: none; cursor: pointer; }
.volume-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: var(--text); cursor: pointer; }
.volume-slider::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: var(--text); border: none; cursor: pointer; }

/* Queue toggle */
.player-queue-toggle { display: flex; justify-content: center; padding: 0 28px 12px; }
.queue-toggle-btn { font-size: 12px; color: var(--text3); background: none; border: 1px solid var(--border); padding: 6px 16px; border-radius: 20px; cursor: pointer; transition: all 0.18s; }
.queue-toggle-btn:hover { border-color: var(--border2); color: var(--text2); }
.queue-toggle-btn.active { border-color: var(--border2); color: var(--text); background: var(--bg3); }

/* Queue panel */
.player-queue { display: none; flex: 1; overflow-y: auto; padding: 0 16px 12px; border-top: 1px solid var(--border); }
.player-queue.show { display: block; }
.queue-header { font-size: 11px; font-weight: 600; color: var(--text3); letter-spacing: 1px; text-transform: uppercase; padding: 12px 0 8px; }

/* ── Mini Player Bar ── */
#mini-player {
  height: var(--player-h);
  background: var(--bg2); border-top: 1px solid var(--border);
  display: none; align-items: center; gap: 10px;
  padding: 0 16px; flex-shrink: 0; z-index: 30;
  cursor: pointer; position: relative;
}
#mini-player.show { display: flex; }
.mini-thumb { width: 46px; height: 46px; border-radius: 8px; overflow: hidden; background: var(--bg3); flex-shrink: 0; border: 1px solid var(--border); }
.mini-thumb img { width: 100%; height: 100%; object-fit: cover; }
.mini-info { flex: 1; min-width: 0; }
.mini-title { font-size: 13px; font-weight: 500; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-artist { font-size: 11.5px; color: var(--text3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-controls { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.mini-btn { background: none; border: none; color: var(--text2); cursor: pointer; padding: 6px; border-radius: 50%; display: flex; align-items: center; transition: color 0.2s; }
.mini-btn:hover { color: var(--text); }
.mini-play-btn { width: 36px; height: 36px; border-radius: 50%; background: var(--text); color: var(--bg); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s; }
.mini-play-btn:hover { transform: scale(1.08); }
.mini-progress { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--border); }
.mini-progress-fill { height: 100%; background: var(--text3); transition: width 0.1s linear; }

/* ── Toast ── */
#toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(8px); background: var(--bg3); border: 1px solid var(--border2); border-radius: 9px; padding: 9px 18px; font-size: 12.5px; color: var(--text2); z-index: 500; opacity: 0; transition: all 0.25s cubic-bezier(.4,0,.2,1); white-space: nowrap; box-shadow: 0 8px 30px rgba(0,0,0,0.4); pointer-events: none; }
#toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ── Modal ── */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 300; display: none; align-items: flex-end; justify-content: center; backdrop-filter: blur(4px); }
.modal-backdrop.open { display: flex; }
.modal-sheet { background: var(--bg2); border: 1px solid var(--border2); border-radius: 18px 18px 0 0; width: 100%; max-width: 480px; padding: 20px 20px 32px; animation: slideUp 0.3s cubic-bezier(.4,0,.2,1); }
.modal-handle { width: 36px; height: 4px; border-radius: 2px; background: var(--border2); margin: 0 auto 20px; }
.modal-title { font-size: 15px; font-weight: 600; margin-bottom: 16px; }
.modal-input { width: 100%; background: var(--bg3); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-family: 'Sora', sans-serif; font-size: 14px; padding: 11px 14px; outline: none; margin-bottom: 12px; transition: border-color 0.2s; -webkit-user-select: text; user-select: text; }
.modal-input:focus { border-color: var(--border2); }
.modal-btn { width: 100%; padding: 11px; border-radius: 10px; font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; border: none; transition: all 0.18s; }
.modal-btn.primary { background: var(--text); color: var(--bg); margin-bottom: 8px; }
.modal-btn.primary:hover { opacity: 0.88; }
.modal-btn.secondary { background: var(--bg3); color: var(--text2); border: 1px solid var(--border); }
.modal-btn.secondary:hover { border-color: var(--border2); color: var(--text); }

.add-to-playlist-list { max-height: 240px; overflow-y: auto; margin-bottom: 12px; }
.add-playlist-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 9px; cursor: pointer; transition: background 0.15s; }
.add-playlist-item:hover { background: var(--bg3); }
.add-playlist-item-art { width: 38px; height: 38px; border-radius: 6px; background: var(--bg3); border: 1px solid var(--border); flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.add-playlist-item-art img { width: 100%; height: 100%; object-fit: cover; }
.add-playlist-item-name { font-size: 13px; font-weight: 500; color: var(--text2); }
.add-playlist-item-count { font-size: 11.5px; color: var(--text3); }

/* ── Bottom Nav (Mobile) ── */
.bottom-nav { display: none; }
@media (max-width: 600px) {
  .bottom-nav {
    display: flex; align-items: center; justify-content: space-around;
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 40;
    background: var(--bg2); border-top: 1px solid var(--border);
    height: 56px; padding-bottom: env(safe-area-inset-bottom);
    flex-shrink: 0;
  }
  #mini-player.show { bottom: 56px; position: fixed; left: 0; right: 0; }
  #mini-player { position: fixed; left: 0; right: 0; bottom: 56px; }
  .main { padding-bottom: 56px; }
  #toast { bottom: calc(56px + 12px); }
  .content-inner { padding-bottom: 24px; }
}
.bottom-nav-btn { display: flex; flex-direction: column; align-items: center; gap: 3px; background: none; border: none; color: var(--text3); cursor: pointer; padding: 6px 16px; border-radius: 10px; transition: color 0.15s; flex: 1; }
.bottom-nav-btn.active { color: var(--text); }
.bottom-nav-btn span { font-size: 10px; font-weight: 500; }
.bottom-nav-btn svg { transition: transform 0.15s; }
.bottom-nav-btn.active svg { transform: scale(1.1); }

/* ── Offline banner ── */
#offline-banner { display: none; background: rgba(248,113,113,0.08); border-bottom: 1px solid rgba(248,113,113,0.15); padding: 8px 16px; font-size: 12px; color: #f87171; text-align: center; flex-shrink: 0; }
#offline-banner.show { display: block; }

/* ── Misc ── */
.spinner { width: 20px; height: 20px; border: 2px solid var(--border2); border-top-color: var(--text2); border-radius: 50%; animation: spin 0.7s linear infinite; }
.loader-wrap { display: flex; justify-content: center; align-items: center; padding: 48px 0; }

/* Playlist detail */
.playlist-detail-header { display: flex; gap: 16px; align-items: flex-end; padding: 20px 0 24px; border-bottom: 1px solid var(--border); margin-bottom: 16px; }
.playlist-detail-art { width: 90px; height: 90px; border-radius: 12px; background: var(--bg3); border: 1px solid var(--border); flex-shrink: 0; overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; }
.playlist-detail-art img { width: 100%; height: 100%; object-fit: cover; }
.playlist-detail-art.empty { display: flex; align-items: center; justify-content: center; }
.playlist-detail-name { font-size: 18px; font-weight: 600; letter-spacing: -0.3px; margin-bottom: 4px; }
.playlist-detail-count { font-size: 13px; color: var(--text3); margin-bottom: 12px; }
.playlist-detail-controls { display: flex; gap: 8px; }
.playlist-play-btn { display: flex; align-items: center; gap: 6px; padding: 8px 18px; border-radius: 9px; background: var(--text); color: var(--bg); border: none; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; transition: opacity 0.18s; }
.playlist-play-btn:hover { opacity: 0.85; }

.back-btn { display: inline-flex; align-items: center; gap: 6px; background: var(--bg3); border: 1px solid var(--border2); color: var(--text2); padding: 7px 14px; border-radius: 9px; font-size: 13px; font-family: 'Sora', sans-serif; cursor: pointer; margin-bottom: 16px; transition: all 0.18s; }
.back-btn:hover { color: var(--text); border-color: var(--border2); }

/* ── Login (Europa style) ── */
#login-screen { position: fixed; inset: 0; z-index: 10000; background: var(--bg); overflow-y: auto; display: none; flex-direction: column; align-items: center; padding: 8vh 16px calc(24px + env(safe-area-inset-bottom)); }
.au-brand { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 28px; }
.au-brand .brand-logo { width: 64px; height: 64px; }
.au-card { width: 100%; max-width: 380px; }
.au-tabs { display: grid; grid-template-columns: 1fr 1fr; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 20px; }
.au-tab { height: 38px; border: none; border-radius: 9px; background: transparent; color: var(--text3); font-family: inherit; font-size: 14px; font-weight: 500; cursor: pointer; transition: background-color .2s, color .2s; }
.au-tab[aria-selected="true"] { background: var(--bg); color: var(--text); box-shadow: 0 1px 3px rgba(0,0,0,.25); }
.au-field { display: block; margin-bottom: 14px; }
.au-field span { display: block; font-size: 13.5px; color: var(--text2); margin-bottom: 6px; }
.au-field input { width: 100%; height: 46px; padding: 0 14px; background: var(--bg3); border: 1px solid var(--border2); border-radius: 12px; outline: none; font-family: inherit; font-size: 16px; color: var(--text); box-sizing: border-box; transition: border-color .2s, box-shadow .2s; }
.au-field input:focus { border-color: var(--text2); box-shadow: 0 0 0 3px var(--border); }
.au-btn { width: 100%; height: 46px; border: none; border-radius: 12px; background: var(--text); color: var(--bg); font-family: inherit; font-size: 15px; font-weight: 500; cursor: pointer; transition: opacity .2s, transform .1s; }
.au-btn:hover { opacity: .9; } .au-btn:active { transform: scale(.985); }
.au-ghost { width: 100%; height: 46px; border-radius: 12px; border: 1px solid var(--border2); background: transparent; color: var(--text); font-family: inherit; font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background-color .2s; }
.au-ghost:hover { background: var(--bg3); }
.au-or { display: flex; align-items: center; gap: 12px; color: var(--text3); font-size: 13px; margin: 18px 0; }
.au-or::before, .au-or::after { content: ""; flex: 1; height: 1px; background: var(--border2); }
#auth-error { margin: 12px 0 0; font-size: 14px; color: #ff8f85; text-align: center; display: none; }

/* ── Sleep timer ── */
.player-queue-toggle { gap: 8px; }
.sleep-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; }
.sleep-opt { padding: 12px 0; border-radius: 10px; border: 1px solid var(--border); background: var(--bg3); color: var(--text); font-family: 'Sora', sans-serif; font-size: 13.5px; cursor: pointer; transition: border-color .18s; }
.sleep-opt:hover { border-color: var(--border2); }
.sleep-opt.wide { grid-column: 1 / -1; }
.sleep-status { text-align: center; font-size: 13px; color: var(--text2); margin-bottom: 12px; }

/* ── Light polish ── */
.brand-mini { width: 22px; height: 22px; border-radius: 6px; display: block; }
.ctrl-btn-main { box-shadow: 0 6px 22px var(--glow); }
.player-artwork { box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 70px var(--glow); }
.nav-item.active { box-shadow: inset 2px 0 0 var(--text); }
.quick-pick-btn:hover { border-color: var(--border2); transform: translateY(-1px); }
.song-item:active { transform: scale(0.99); }
</style>
</head>
<body>

<!-- Loading Screen -->
<div id="loading-screen" role="status" aria-live="polite">
  <img class="brand-logo" src="__EUROPIFY_ICON__" alt="" width="72" height="72">
  <div class="wm">Europify</div>
  <p id="load-msg" class="load-msg" hidden></p>
</div>

<!-- Sidebar backdrop -->
<div class="sidebar-backdrop" id="sidebar-backdrop" onclick="closeSidebar()"></div>

<!-- Sidebar -->
<div class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <img class="brand-mini" src="__EUROPIFY_ICON_SMALL__" alt="" width="22" height="22"/>
      <span class="sidebar-brand-text">Europify</span>
    </div>
    <button class="icon-btn" onclick="closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-section">Navigation</div>
    <div class="nav-item active" id="nav-home" onclick="showView('home');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Home
    </div>
    <div class="nav-item" id="nav-search" onclick="showView('search');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      Search
    </div>
    <div class="nav-item" id="nav-library" onclick="showView('library');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
      Library
    </div>
    <div class="nav-section">Discover</div>
    <div class="nav-item" onclick="searchByGenre('bollywood 2025');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
      Bollywood
    </div>
    <div class="nav-item" onclick="searchByGenre('punjabi hits');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Punjabi Hits
    </div>
    <div class="nav-item" onclick="searchByGenre('arijit singh');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      Arijit Singh
    </div>
    <div class="nav-item" onclick="searchByGenre('lofi chill');closeSidebar()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
      Lofi / Chill
    </div>
  </nav>
  <div class="sidebar-footer">
    <div class="sidebar-theme-row">
      <span class="sidebar-theme-label">Light Mode</span>
      <div class="theme-toggle" onclick="toggleTheme()"><div class="theme-toggle-knob"></div></div>
    </div>
    <div id="sidebar-logout" style="display:none;margin-top:10px;">
      <button onclick="doLogout()" style="width:100%;padding:9px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text3);font-size:13px;cursor:pointer;">Sign Out</button>
    </div>
    <div style="margin-top:10px;font-size:10px;color:var(--text3);text-align:center;">Powered by Europa &nbsp;·&nbsp; Made by Ayush Raj Sinha</div>
  </div>
</div>

<!-- Shell -->
<div class="shell">
  <div class="main">

    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <button class="menu-btn" onclick="openSidebar()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div class="logo">
          <span class="logo-text">Europify</span>
        </div>
      </div>
      <div class="header-right">
        <div class="header-search-wrap">
          <div class="search-box" id="header-search-box">
            <input class="search-input" id="header-search-input" type="text" placeholder="Search songs..." autocomplete="off"/>
          </div>
          <button class="icon-btn" id="header-search-btn" onclick="toggleHeaderSearch()">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
        <button class="icon-btn" onclick="toggleTheme()" title="Toggle theme">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
    </div>

    <!-- Offline banner -->
    <div id="offline-banner">You're offline — music may not load</div>

    <!-- Content -->
    <div class="content-area" id="content-area">
      <div class="content-inner">

        <!-- HOME VIEW -->
        <div class="view active" id="view-home">
          <div class="home-hero">
            <div class="home-greeting" id="home-greeting">Good evening</div>
            <div class="home-title">What do you want to<br>listen to?</div>
          </div>

          <!-- Quick picks -->
          <div class="section-header"><span class="section-title">Quick Picks</span></div>
          <div class="quick-picks" id="quick-picks">
            <div class="quick-pick-btn" onclick="searchByGenre('arijit singh')">
              <img src="" alt="Arijit" style="background:var(--bg3)" onerror="this.style.display='none'"/>
              <span>Arijit Singh</span>
            </div>
            <div class="quick-pick-btn" onclick="searchByGenre('bollywood 2025')">
              <img src="" alt="" style="background:var(--bg3)" onerror="this.style.display='none'"/>
              <span>Bollywood 2025</span>
            </div>
            <div class="quick-pick-btn" onclick="searchByGenre('punjabi hits')">
              <img src="" alt="" style="background:var(--bg3)" onerror="this.style.display='none'"/>
              <span>Punjabi Hits</span>
            </div>
            <div class="quick-pick-btn" onclick="searchByGenre('lofi chill music')">
              <img src="" alt="" style="background:var(--bg3)" onerror="this.style.display='none'"/>
              <span>Lofi Chill</span>
            </div>
            <div class="quick-pick-btn" onclick="searchByGenre('shreya ghoshal')">
              <img src="" alt="" style="background:var(--bg3)" onerror="this.style.display='none'"/>
              <span>Shreya Ghoshal</span>
            </div>
          </div>

          <!-- Mood -->
          <div class="section-header"><span class="section-title">Mood</span></div>
          <div class="mood-chips">
            <div class="mood-chip active" onclick="setMood(this,'trending')">Trending</div>
            <div class="mood-chip" onclick="setMood(this,'romantic')">Romantic</div>
            <div class="mood-chip" onclick="setMood(this,'sad')">Sad</div>
            <div class="mood-chip" onclick="setMood(this,'party')">Party</div>
            <div class="mood-chip" onclick="setMood(this,'motivation')">Motivation</div>
            <div class="mood-chip" onclick="setMood(this,'spiritual')">Devotional</div>
            <div class="mood-chip" onclick="setMood(this,'retro')">90s</div>
          </div>

          <!-- Trending -->
          <div class="section-header">
            <span class="section-title">Trending Now</span>
            <span class="section-action" onclick="searchByGenre('trending')">See all</span>
          </div>
          <div id="home-trending-list">
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
            <div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>
          </div>

          <!-- Recent -->
          <div class="section-header" id="recent-section-header" style="display:none">
            <span class="section-title">Recently Played</span>
            <span class="section-action" onclick="clearRecent()">Clear</span>
          </div>
          <div id="home-recent-list"></div>
        </div>

        <!-- SEARCH VIEW -->
        <div class="view" id="view-search">
          <div class="search-view-input-wrap">
            <svg class="search-view-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input class="search-view-input" id="search-view-input" type="text" placeholder="Artists, songs, albums..." autocomplete="off" oninput="onSearchInput(this.value)" autocorrect="off" autocapitalize="off"/>
            <button class="search-clear-btn" id="search-clear-btn" onclick="clearSearch()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div id="search-browse">
            <div class="section-header"><span class="section-title">Browse</span></div>
            <div class="search-genres">
              <div class="genre-chip" onclick="searchByGenre('bollywood 2025')">Bollywood</div>
              <div class="genre-chip" onclick="searchByGenre('punjabi 2025')">Punjabi</div>
              <div class="genre-chip" onclick="searchByGenre('arijit singh hits')">Arijit Singh</div>
              <div class="genre-chip" onclick="searchByGenre('kumar sanu')">Kumar Sanu</div>
              <div class="genre-chip" onclick="searchByGenre('lofi hindi')">Lofi Hindi</div>
              <div class="genre-chip" onclick="searchByGenre('romantic hindi')">Romantic</div>
              <div class="genre-chip" onclick="searchByGenre('sad hindi songs')">Sad Songs</div>
              <div class="genre-chip" onclick="searchByGenre('english pop 2025')">English Pop</div>
              <div class="genre-chip" onclick="searchByGenre('rap hip hop hindi')">Hip-Hop</div>
              <div class="genre-chip" onclick="searchByGenre('classical indian music')">Classical</div>
            </div>
          </div>

          <div id="search-results-wrap" style="display:none">
            <div class="search-results-count" id="search-results-count"></div>
            <div id="search-results-list"></div>
          </div>
          <div id="search-loader" class="loader-wrap" style="display:none"><div class="spinner"></div></div>
        </div>

        <!-- LIBRARY VIEW -->
        <div class="view" id="view-library">
          <div class="library-tabs">
            <div class="lib-tab active" id="lib-tab-playlists" onclick="switchLibTab('playlists')">Playlists</div>
            <div class="lib-tab" id="lib-tab-liked" onclick="switchLibTab('liked')">Liked Songs</div>
          </div>

          <div id="lib-playlists">
            <button class="create-playlist-btn" onclick="openCreatePlaylist()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Create new playlist
            </button>
            <div id="playlists-list"></div>
          </div>

          <div id="lib-liked" style="display:none">
            <div id="liked-songs-list"></div>
          </div>
        </div>

        <!-- PLAYLIST DETAIL VIEW -->
        <div class="view" id="view-playlist-detail">
          <button class="back-btn" onclick="showView('library')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            Library
          </button>
          <div class="playlist-detail-header">
            <div class="playlist-detail-art" id="pd-art">
              <div class="playlist-art-placeholder" style="display:flex;align-items:center;justify-content:center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </div>
            </div>
            <div style="flex:1;min-width:0">
              <div class="playlist-detail-name" id="pd-name">Playlist</div>
              <div class="playlist-detail-count" id="pd-count">0 songs</div>
              <div class="playlist-detail-controls">
                <button class="playlist-play-btn" onclick="playPlaylist()">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
                  Play all
                </button>
                <button class="icon-btn" onclick="shufflePlaylist()" title="Shuffle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div id="pd-songs-list"></div>
        </div>

      </div><!-- content-inner -->
    </div><!-- content-area -->

    <!-- Mini Player -->
    <div id="mini-player" onclick="openPlayerScreen()">
      <div class="mini-thumb"><img id="mini-thumb-img" src="" alt=""/></div>
      <div class="mini-info">
        <div class="mini-title" id="mini-title">—</div>
        <div class="mini-artist" id="mini-artist">—</div>
      </div>
      <div class="mini-controls" onclick="event.stopPropagation()">
        <button class="mini-btn" onclick="prevSong()" title="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
        </button>
        <button class="mini-play-btn" id="mini-play-btn" onclick="togglePlay()">
          <svg id="mini-play-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
        </button>
        <button class="mini-btn" onclick="nextSong()" title="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
        </button>
      </div>
      <div class="mini-progress"><div class="mini-progress-fill" id="mini-progress-fill" style="width:0%"></div></div>
    </div>

    <!-- Bottom Nav (Mobile) -->
    <div class="bottom-nav">
      <button class="bottom-nav-btn active" id="bnav-home" onclick="showView('home')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Home</span>
      </button>
      <button class="bottom-nav-btn" id="bnav-search" onclick="showView('search')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Search</span>
      </button>
      <button class="bottom-nav-btn" id="bnav-library" onclick="showView('library')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
        <span>Library</span>
      </button>
    </div>

  </div><!-- main -->
</div><!-- shell -->

<!-- Full Player Screen -->
<div id="player-screen">
  <div class="player-screen-header">
    <button class="player-screen-close" onclick="closePlayerScreen()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <span class="player-screen-title" id="ps-context-label">Now Playing</span>
    <button class="player-screen-options" onclick="openAddToPlaylist()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>
    </button>
  </div>

  <div class="player-artwork-wrap">
    <div class="player-artwork" id="ps-artwork">
      <img id="ps-artwork-img" src="" alt=""/>
    </div>
  </div>

  <div class="player-info-wrap">
    <div class="player-info-row">
      <div style="min-width:0;flex:1">
        <div class="player-song-title" id="ps-title">—</div>
        <div class="player-song-artist" id="ps-artist">—</div>
      </div>
      <button class="player-like-btn" id="ps-like-btn" onclick="toggleLikeCurrent()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </button>
    </div>
  </div>

  <div class="player-progress-wrap">
    <div class="progress-bar-container" id="progress-bar" onmousedown="startSeek(event)" ontouchstart="startSeekTouch(event)">
      <div class="progress-bar-fill" id="progress-bar-fill" style="width:0%"></div>
    </div>
    <div class="progress-times">
      <span id="ps-current-time">0:00</span>
      <span id="ps-duration">0:00</span>
    </div>
  </div>

  <div class="player-controls">
    <button class="ctrl-btn" id="shuffle-btn" onclick="toggleShuffle()" title="Shuffle">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
    </button>
    <button class="ctrl-btn" onclick="prevSong()" title="Previous">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
    </button>
    <button class="ctrl-btn-main" id="main-play-btn" onclick="togglePlay()">
      <svg id="main-play-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
    </button>
    <button class="ctrl-btn" onclick="nextSong()" title="Next">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
    </button>
    <button class="ctrl-btn" id="repeat-btn" onclick="cycleRepeat()" title="Repeat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
    </button>
  </div>

  <div class="player-volume-wrap">
    <svg class="volume-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
    <input class="volume-slider" id="volume-slider" type="range" min="0" max="100" value="100" oninput="setVolume(this.value)"/>
  </div>

  <div class="player-queue-toggle">
    <button class="queue-toggle-btn" id="sleep-btn" onclick="openSleepTimer()">Sleep</button>
    <button class="queue-toggle-btn" id="queue-toggle-btn" onclick="toggleQueue()">Queue</button>
  </div>
  <div class="player-queue" id="player-queue">
    <div class="queue-header">Up next</div>
    <div id="queue-list"></div>
  </div>
</div>

<!-- Create Playlist Modal -->
<div class="modal-backdrop" id="create-playlist-modal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-title">New Playlist</div>
    <input class="modal-input" id="playlist-name-input" type="text" placeholder="Playlist name..." maxlength="60" autocomplete="off"/>
    <button class="modal-btn primary" onclick="createPlaylist()">Create</button>
    <button class="modal-btn secondary" onclick="closeModal('create-playlist-modal')">Cancel</button>
  </div>
</div>

<!-- Add to Playlist Modal -->
<div class="modal-backdrop" id="add-to-playlist-modal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-title">Add to Playlist</div>
    <div class="add-to-playlist-list" id="add-to-playlist-list"></div>
    <button class="modal-btn secondary" onclick="closeModal('add-to-playlist-modal')">Cancel</button>
  </div>
</div>

<!-- Sleep Timer Modal -->
<div class="modal-backdrop" id="sleep-timer-modal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-title">Sleep Timer</div>
    <div class="sleep-grid">
      <button class="sleep-opt" onclick="setSleepTimer(5)">5 min</button>
      <button class="sleep-opt" onclick="setSleepTimer(10)">10 min</button>
      <button class="sleep-opt" onclick="setSleepTimer(15)">15 min</button>
      <button class="sleep-opt" onclick="setSleepTimer(30)">30 min</button>
      <button class="sleep-opt" onclick="setSleepTimer(45)">45 min</button>
      <button class="sleep-opt" onclick="setSleepTimer(60)">60 min</button>
      <button class="sleep-opt wide" onclick="setSleepEndOfSong()">End of this song</button>
    </div>
    <div class="sleep-status" id="sleep-status" style="display:none;"></div>
    <button class="modal-btn primary" id="sleep-off-btn" style="display:none;" onclick="clearSleepTimer()">Turn off timer</button>
    <button class="modal-btn secondary" onclick="closeModal('sleep-timer-modal')">Close</button>
  </div>
</div>

<!-- Toast -->
<div id="toast"></div>

<audio id="audio-player" preload="none"></audio>

<!-- Login Screen — hidden by default, shown only if not logged in -->
<div id="login-screen">
  <div class="au-brand">
    <img class="brand-logo" src="__EUROPIFY_ICON__" alt="" width="64" height="64">
    <div class="wm">Europify</div>
  </div>
  <div class="au-card">
    <div class="au-tabs" role="tablist" aria-label="Account">
      <button class="au-tab" id="tab-signin" role="tab" aria-selected="true" onclick="switchAuthTab('signin')" type="button">Log in</button>
      <button class="au-tab" id="tab-signup" role="tab" aria-selected="false" onclick="switchAuthTab('signup')" type="button">Sign up</button>
    </div>
    <div id="form-signin" style="display:block;">
      <label class="au-field"><span>Email</span><input id="signin-email" type="email" autocomplete="email" inputmode="email"/></label>
      <label class="au-field"><span>Password</span><input id="signin-password" type="password" autocomplete="current-password"/></label>
      <button class="au-btn" onclick="doSignIn()" type="button">Log in</button>
    </div>
    <div id="form-signup" style="display:none;">
      <label class="au-field"><span>Name</span><input id="signup-name" type="text" autocomplete="name"/></label>
      <label class="au-field"><span>Email</span><input id="signup-email" type="email" autocomplete="email" inputmode="email"/></label>
      <label class="au-field"><span>Password (6 or more characters)</span><input id="signup-password" type="password" autocomplete="new-password"/></label>
      <button class="au-btn" onclick="doSignUp()" type="button">Create account</button>
    </div>
    <div id="auth-error" role="alert"></div>
    <div class="au-or">or</div>
    <button class="au-ghost" onclick="doGoogleSignIn()" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Continue with Google
    </button>
  </div>
</div>

<script>
// ERROR OVERLAY
var _errCount = 0;
window.onerror = function(msg, src, line, col, err) {
  _errCount++;
  if (_errCount > 3) return;
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;top:' + ((_errCount-1)*70) + 'px;left:0;right:0;background:#ff4444;color:#fff;padding:10px;font-size:11px;z-index:99999;word-break:break-all;font-family:monospace';
  d.textContent = '#' + _errCount + ' JS ERROR L' + line + ': ' + msg;
  document.body.appendChild(d);
};
window.addEventListener('unhandledrejection', function(e) {
  _errCount++;
  if (_errCount > 3) return;
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;top:' + ((_errCount-1)*70) + 'px;left:0;right:0;background:#ff8800;color:#fff;padding:10px;font-size:11px;z-index:99999;word-break:break-all;font-family:monospace';
  d.textContent = '#' + _errCount + ' PROMISE: ' + (e.reason ? e.reason.toString() : 'unknown');
  document.body.appendChild(d);
});
</script>

<script>
// ═══════════════════════════════════════════════
// CONFIG
// ═══════════════════════════════════════════════
const API_BASE = 'https://europify.ayushonlyyy.workers.dev/api';
const SEARCH_LIMIT = 20;

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let queue = [];
let queueIndex = -1;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0=off, 1=all, 2=one
let seekDragging = false;
let currentView = 'home';
let likedSongs = [];
let playlists = [];
let recentlyPlayed = [];
let addToPlaylistSong = null;
let currentPlaylistId = null;

// ─── Safe localStorage reads ───────────────────
try { likedSongs = JSON.parse(localStorage.getItem('ep_liked') || '[]'); } catch(e) { likedSongs = []; }
try { playlists = JSON.parse(localStorage.getItem('ep_playlists') || '[]'); } catch(e) { playlists = []; }
try { recentlyPlayed = JSON.parse(localStorage.getItem('ep_recent') || '[]'); } catch(e) { recentlyPlayed = []; }

// ─── Song context store (replaces passing JSON in onclick attrs) ───
// Key: context string → songs array
const songCtx = {};

const audio = document.getElementById('audio-player');

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}
function fmtTime(s) {
  s = Math.floor(s || 0);
  return Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
// Hide loader — CSS animation handles it automatically at 1.8s
// JS is just a backup
function hideLoader() {
  const ls = document.getElementById('loading-screen');
  if (!ls) return;
  ls.classList.add('hide');
}
setTimeout(function () {
  if (!window.__authReady) {
    var m = document.getElementById('load-msg');
    if (m) { m.textContent = 'Cannot reach the sign-in service. Check your connection and reload the page.'; m.hidden = false; }
  }
}, 10000);

window.addEventListener('DOMContentLoaded', () => {

  // Greeting
  const h = new Date().getHours();
  const greet = h < 12 ? 'GOOD MORNING' : h < 17 ? 'GOOD AFTERNOON' : 'GOOD EVENING';
  const el = document.getElementById('home-greeting');
  if (el) el.textContent = greet;

  // Theme
  try {
    if (localStorage.getItem('ep_theme') === 'light') document.body.classList.add('light');
  } catch(e) {}

  // Load trending
  fetchAndRenderSongs('trending', 'home-trending-list', 8);

  // Recent / playlists / liked
  renderRecent();
  renderPlaylists();
  renderLiked();

  // Header search enter key
  const hsi = document.getElementById('header-search-input');
  if (hsi) hsi.addEventListener('keydown', e => { if (e.key === 'Enter') doHeaderSearch(); });

  // Network
  window.addEventListener('offline', () => {
    const b = document.getElementById('offline-banner');
    if (b) b.classList.add('show');
    showToast("You're offline");
  });
  window.addEventListener('online', () => {
    const b = document.getElementById('offline-banner');
    if (b) b.classList.remove('show');
    showToast('Back online');
  });

  // Media session
  setupMediaSession();

  // Audio events
  audio.addEventListener('timeupdate', onTimeUpdate);
  audio.addEventListener('ended', onEnded);
  audio.addEventListener('canplay', () => { if (isPlaying) audio.play().catch(() => {}); });
  audio.addEventListener('error', () => { showToast('Failed to load song'); nextSong(); });

  // Close modal on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', e => { if (e.target === bd) bd.classList.remove('open'); });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') nextSong();
    if (e.code === 'ArrowLeft') prevSong();
  });
});

// ═══════════════════════════════════════════════
// API
// ═══════════════════════════════════════════════
// ═══════════════════════════════════════════════
// MUSIC SOURCE — Jamendo (licensed, via the Worker route /api/search)
// To use another licensed source, change the Worker route /api/search at the
// bottom of this file. The app expects every song in this shape:
//   { id: string, name: string, artists: string, album: string,
//     image: string (image URL), audioUrl: string (playable URL),
//     duration: number (seconds) }
// ═══════════════════════════════════════════════
const MusicSource = {
  configured: true,
  async search(query, limit, opts) {
    const url = '/api/search?q=' + encodeURIComponent(query) + '&limit=' + limit + (opts && opts.fallback ? '&fb=1' : '');
    const res = await fetch(url);
    if (!res.ok) throw new Error('Source error ' + res.status);
    const data = await res.json();
    return Array.isArray(data.results) ? data.results : [];
  }
};

async function searchSongs(query, limit = SEARCH_LIMIT, opts) {
  const results = await MusicSource.search(query, limit, opts);
  return Array.isArray(results) ? results : [];
}

function getImageUrl(song) {
  return (song && typeof song.image === 'string') ? song.image : '';
}

function getDownloadUrl(song) {
  return (song && typeof song.audioUrl === 'string') ? song.audioUrl : '';
}

function getDuration(song) {
  const d = parseInt(song.duration || 0);
  if (!d) return '—';
  return Math.floor(d/60) + ':' + String(d%60).padStart(2,'0');
}

function getArtistNames(song) {
  return (song && typeof song.artists === 'string' && song.artists) ? song.artists : '—';
}

// ═══════════════════════════════════════════════
// VIEWS
// ═══════════════════════════════════════════════
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + name);
  if (el) { el.classList.add('active'); currentView = name; }

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.getElementById('nav-' + name);
  if (nav) nav.classList.add('active');

  document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
  const bnav = document.getElementById('bnav-' + name);
  if (bnav) bnav.classList.add('active');

  if (name === 'library') { renderPlaylists(); renderLiked(); }
  if (name === 'search') { setTimeout(() => { const si = document.getElementById('search-view-input'); if (si) si.focus(); }, 100); }
}

// ═══════════════════════════════════════════════
// RENDER SONG ITEM
// — Uses data-* attributes, no inline onclick —
// ═══════════════════════════════════════════════
function renderSongItem(song, index, songsArr, context) {
  songCtx[context] = songsArr;

  const img = getImageUrl(song);
  const artist = getArtistNames(song);
  const dur = getDuration(song);
  const isLiked = likedSongs.some(l => l.id === song.id);
  const likedFill = isLiked ? 'currentColor' : 'none';
  const likedClass = isLiked ? ' liked' : '';

  const div = document.createElement('div');
  div.className = 'song-item';
  div.id = 'sitem-' + song.id;
  div.dataset.songId = song.id;
  div.dataset.index = index;
  div.dataset.context = context;

  const thumbImg = document.createElement('img');
  thumbImg.src = img;
  thumbImg.alt = '';
  thumbImg.loading = 'lazy';
  thumbImg.onerror = function() { this.style.display = 'none'; };

  const thumb = document.createElement('div');
  thumb.className = 'song-item-thumb';
  thumb.appendChild(thumbImg);

  div.innerHTML =
    '<span class="song-num">' + (index + 1) + '</span>' +
    '<div class="song-playing-bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>' +
    '<div class="song-item-info">' +
      '<div class="song-item-title">' + escHtml(song.name) + '</div>' +
      '<div class="song-item-artist">' + escHtml(artist) + '</div>' +
    '</div>' +
    '<span class="song-item-duration">' + dur + '</span>' +
    '<div class="song-item-actions">' +
      '<button class="song-action-btn' + likedClass + '" data-action="like" data-song-id="' + escAttr(song.id) + '" data-context="' + escAttr(context) + '" title="Like">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="' + likedFill + '" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' +
      '</button>' +
      '<button class="song-action-btn" data-action="addplaylist" data-song-id="' + escAttr(song.id) + '" data-context="' + escAttr(context) + '" title="Add to playlist">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
      '</button>' +
    '</div>';

  // Insert thumb after first child (song-num span)
  div.insertBefore(thumb, div.children[2]);

  div.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-action]');
    if (btn) {
      e.stopPropagation();
      const action = btn.dataset.action;
      const sid = btn.dataset.songId;
      const ctx = btn.dataset.context;
      if (action === 'like') toggleLikeByCtx(sid, ctx);
      if (action === 'addplaylist') addToPlaylistByCtx(sid, ctx);
      return;
    }
    playFromCtx(song.id, index, context);
  });

  return div;
}

// ─── Context-safe play ─────────────────────────
function playFromCtx(songId, index, context) {
  const songs = songCtx[context];
  if (!songs || !songs[index]) { showToast('Could not play song'); return; }
  queue = songs;
  queueIndex = index;
  loadAndPlay(songs[index]);
  updateQueueUI();
}

// ─── Context-safe like ─────────────────────────
function toggleLikeByCtx(songId, context) {
  const songs = songCtx[context] || [];
  const song = songs.find(s => s.id === songId) || likedSongs.find(s => s.id === songId);
  if (song) toggleLike(song);
}

// ─── Context-safe add to playlist ─────────────
function addToPlaylistByCtx(songId, context) {
  const songs = songCtx[context] || [];
  const song = songs.find(s => s.id === songId) || likedSongs.find(s => s.id === songId);
  if (song) { addToPlaylistSong = song; openAddToPlaylist(); }
}

// ═══════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════
async function fetchAndRenderSongs(query, containerId, limit) {
  limit = limit || 10;
  const container = document.getElementById(containerId);
  if (!container) return;
  // Show skeletons
  let skels = '';
  for (let i = 0; i < Math.min(limit, 5); i++) {
    skels += '<div class="skeleton-song"><div class="skeleton skeleton-thumb"></div><div class="skeleton-info"><div class="skeleton skeleton-line w80"></div><div class="skeleton skeleton-line w60" style="margin-top:6px"></div></div></div>';
  }
  container.innerHTML = skels;
  try {
    const songs = await searchSongs(query, limit, { fallback: true });
    if (!songs.length) {
      container.innerHTML = '<div class="empty-state"><div class="empty-title">No songs found</div></div>';
      return;
    }
    container.innerHTML = '';
    songs.forEach((s, i) => container.appendChild(renderSongItem(s, i, songs, containerId)));
  } catch(e) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Failed to load</div><div class="empty-desc">Check your connection</div></div>';
  }
}

function setMood(el, query) {
  document.querySelectorAll('.mood-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  fetchAndRenderSongs(query, 'home-trending-list', 10);
}

// ═══════════════════════════════════════════════
// PLAYBACK
// ═══════════════════════════════════════════════
function loadAndPlay(song) {
  if (!song) return;
  const url = getDownloadUrl(song);
  if (!url) { showToast('No stream available'); return; }

  audio.src = url;
  audio.load();
  isPlaying = true;
  audio.play().then(() => {
    updatePlayUI();
    updatePlayerInfo(song);
    updateMiniPlayer(song);
    addToRecent(song);
    highlightPlayingSong();
    updateMediaSession(song);
  }).catch(() => {
    isPlaying = false;
    updatePlayUI();
    showToast('Playback error — try again');
  });
}

function togglePlay() {
  if (!queue.length) return;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().catch(() => {});
    isPlaying = true;
  }
  updatePlayUI();
  highlightPlayingSong();
}

function nextSong() {
  if (!queue.length) return;
  if (repeatMode === 2) { audio.currentTime = 0; audio.play(); return; }
  let next;
  if (isShuffle) {
    next = Math.floor(Math.random() * queue.length);
  } else {
    next = queueIndex + 1;
    if (next >= queue.length) {
      if (repeatMode === 1) next = 0;
      else { audio.pause(); isPlaying = false; updatePlayUI(); return; }
    }
  }
  queueIndex = next;
  loadAndPlay(queue[queueIndex]);
}

function prevSong() {
  if (!queue.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  let prev = queueIndex - 1;
  if (prev < 0) prev = repeatMode === 1 ? queue.length - 1 : 0;
  queueIndex = prev;
  loadAndPlay(queue[queueIndex]);
}

function onEnded() {
  if (sleepEndOfSong) { resetSleepState(); audio.pause(); isPlaying = false; updatePlayUI(); updateSleepUI(); showToast('Sleep timer: music stopped'); return; }
  nextSong();
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById('shuffle-btn').classList.toggle('active', isShuffle);
  showToast(isShuffle ? 'Shuffle on' : 'Shuffle off');
}

function cycleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  const btn = document.getElementById('repeat-btn');
  btn.classList.toggle('active', repeatMode > 0);
  const labels = ['Repeat off', 'Repeat all', 'Repeat one'];
  showToast(labels[repeatMode]);
}

function setVolume(v) { audio.volume = v / 100; }

// ═══════════════════════════════════════════════
// PROGRESS / SEEK
// ═══════════════════════════════════════════════
function onTimeUpdate() {
  if (seekDragging) return;
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  const pbf = document.getElementById('progress-bar-fill');
  const mpf = document.getElementById('mini-progress-fill');
  const ct = document.getElementById('ps-current-time');
  const dt = document.getElementById('ps-duration');
  if (pbf) pbf.style.width = pct + '%';
  if (mpf) mpf.style.width = pct + '%';
  if (ct) ct.textContent = fmtTime(audio.currentTime);
  if (dt) dt.textContent = fmtTime(audio.duration || 0);
}

function startSeek(e) {
  seekDragging = true;
  doSeek(e);
  const mm = ev => doSeek(ev);
  const mu = () => { seekDragging = false; document.removeEventListener('mousemove', mm); document.removeEventListener('mouseup', mu); };
  document.addEventListener('mousemove', mm);
  document.addEventListener('mouseup', mu);
}

function startSeekTouch(e) {
  seekDragging = true;
  doSeekTouch(e.touches[0]);
  const tm = ev => { if (ev.touches[0]) doSeekTouch(ev.touches[0]); };
  const te = () => { seekDragging = false; document.removeEventListener('touchmove', tm); document.removeEventListener('touchend', te); };
  document.addEventListener('touchmove', tm, { passive: true });
  document.addEventListener('touchend', te);
}

function doSeek(e) {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const rect = bar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const pbf = document.getElementById('progress-bar-fill');
  if (pbf) pbf.style.width = (pct * 100) + '%';
  if (audio.duration) audio.currentTime = pct * audio.duration;
}

function doSeekTouch(touch) {
  const bar = document.getElementById('progress-bar');
  if (!bar || !touch) return;
  const rect = bar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
  const pbf = document.getElementById('progress-bar-fill');
  if (pbf) pbf.style.width = (pct * 100) + '%';
  if (audio.duration) audio.currentTime = pct * audio.duration;
}

// ═══════════════════════════════════════════════
// UI UPDATES
// ═══════════════════════════════════════════════
function updatePlayUI() {
  const playIcon = '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>';
  const pauseIcon = '<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>';
  const icon = isPlaying ? pauseIcon : playIcon;

  const mainIcon = document.getElementById('main-play-icon');
  if (mainIcon) mainIcon.innerHTML = icon;

  const miniIcon = document.getElementById('mini-play-icon');
  if (miniIcon) miniIcon.innerHTML = icon;

  const artwork = document.getElementById('ps-artwork');
  if (artwork) artwork.classList.toggle('playing', isPlaying);
}

function updatePlayerInfo(song) {
  const img = getImageUrl(song);
  const artist = getArtistNames(song);
  const title = document.getElementById('ps-title');
  const art = document.getElementById('ps-artist');
  const artImg = document.getElementById('ps-artwork-img');
  if (title) title.textContent = song.name || '—';
  if (art) art.textContent = artist;
  if (artImg) artImg.src = img;
  updateLikeBtn(likedSongs.some(l => l.id === song.id));
}

function updateMiniPlayer(song) {
  const img = getImageUrl(song);
  const artist = getArtistNames(song);
  const ti = document.getElementById('mini-thumb-img');
  const mt = document.getElementById('mini-title');
  const ma = document.getElementById('mini-artist');
  const mp = document.getElementById('mini-player');
  if (ti) ti.src = img;
  if (mt) mt.textContent = song.name || '—';
  if (ma) ma.textContent = artist;
  if (mp) mp.classList.add('show');
}

function updateLikeBtn(liked) {
  const btn = document.getElementById('ps-like-btn');
  if (!btn) return;
  btn.classList.toggle('liked', liked);
  const svg = btn.querySelector('svg');
  if (svg) svg.setAttribute('fill', liked ? 'currentColor' : 'none');
}

function highlightPlayingSong() {
  document.querySelectorAll('.song-item').forEach(el => el.classList.remove('playing', 'paused'));
  if (queueIndex < 0 || !queue[queueIndex]) return;
  const el = document.getElementById('sitem-' + queue[queueIndex].id);
  if (el) el.classList.add(isPlaying ? 'playing' : 'paused');
}

// ═══════════════════════════════════════════════
// PLAYER SCREEN
// ═══════════════════════════════════════════════
function openPlayerScreen() {
  if (!queue.length) return;
  document.getElementById('player-screen').classList.add('open');
  updateQueueUI();
}
function closePlayerScreen() {
  document.getElementById('player-screen').classList.remove('open');
}
function toggleQueue() {
  const q = document.getElementById('player-queue');
  const btn = document.getElementById('queue-toggle-btn');
  const show = !q.classList.contains('show');
  q.classList.toggle('show', show);
  btn.classList.toggle('active', show);
}
function updateQueueUI() {
  const list = document.getElementById('queue-list');
  if (!list) return;
  const upcoming = queue.slice(queueIndex + 1, queueIndex + 11);
  list.innerHTML = '';
  if (!upcoming.length) {
    list.innerHTML = '<div style="padding:12px 0;font-size:13px;color:var(--text3)">Nothing up next</div>';
    return;
  }
  upcoming.forEach((s, i) => {
    const img = getImageUrl(s);
    const artist = getArtistNames(s);
    const qi = queueIndex + 1 + i;

    const div = document.createElement('div');
    div.className = 'song-item';
    div.addEventListener('click', function() { jumpQueue(qi); });

    const thumbImg = document.createElement('img');
    thumbImg.src = img;
    thumbImg.alt = '';
    thumbImg.loading = 'lazy';
    thumbImg.onerror = function() { this.style.display = 'none'; };
    const thumb = document.createElement('div');
    thumb.className = 'song-item-thumb';
    thumb.appendChild(thumbImg);

    div.innerHTML =
      '<span class="song-num">' + (i + 1) + '</span>' +
      '<div class="song-playing-bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>' +
      '<div class="song-item-info">' +
        '<div class="song-item-title">' + escHtml(s.name) + '</div>' +
        '<div class="song-item-artist">' + escHtml(artist) + '</div>' +
      '</div>';
    div.insertBefore(thumb, div.children[2]);
    list.appendChild(div);
  });
}
function jumpQueue(idx) {
  queueIndex = idx;
  loadAndPlay(queue[queueIndex]);
  updateQueueUI();
}

// ═══════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════
let searchTimeout = null;

function onSearchInput(val) {
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.classList.toggle('show', val.length > 0);
  clearTimeout(searchTimeout);
  if (!val.trim()) {
    document.getElementById('search-browse').style.display = '';
    document.getElementById('search-results-wrap').style.display = 'none';
    document.getElementById('search-loader').style.display = 'none';
    return;
  }
  document.getElementById('search-browse').style.display = 'none';
  document.getElementById('search-loader').style.display = 'flex';
  document.getElementById('search-results-wrap').style.display = 'none';
  searchTimeout = setTimeout(() => doSearch(val.trim()), 400);
}

async function doSearch(query) {
  try {
    const songs = await searchSongs(query);
    document.getElementById('search-loader').style.display = 'none';
    document.getElementById('search-results-wrap').style.display = '';
    document.getElementById('search-results-count').textContent = songs.length + ' results for "' + query + '"';
    if (!songs.length) {
      document.getElementById('search-results-list').innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">No results</div><div class="empty-desc">Try a different search</div></div>';
      return;
    }
    const sl = document.getElementById('search-results-list');
    sl.innerHTML = '';
    songs.forEach((s, i) => sl.appendChild(renderSongItem(s, i, songs, 'search')));
  } catch(e) {
    document.getElementById('search-loader').style.display = 'none';
    document.getElementById('search-results-wrap').style.display = '';
    document.getElementById('search-results-list').innerHTML = '<div class="empty-state"><div class="empty-title">Search failed</div><div class="empty-desc">Check connection</div></div>';
  }
}

function clearSearch() {
  const si = document.getElementById('search-view-input');
  const cb = document.getElementById('search-clear-btn');
  if (si) si.value = '';
  if (cb) cb.classList.remove('show');
  document.getElementById('search-browse').style.display = '';
  document.getElementById('search-results-wrap').style.display = 'none';
  document.getElementById('search-loader').style.display = 'none';
}

function searchByGenre(query) {
  showView('search');
  const si = document.getElementById('search-view-input');
  const cb = document.getElementById('search-clear-btn');
  if (si) si.value = query;
  if (cb) cb.classList.add('show');
  document.getElementById('search-browse').style.display = 'none';
  document.getElementById('search-loader').style.display = 'flex';
  document.getElementById('search-results-wrap').style.display = 'none';
  clearTimeout(searchTimeout);
  doSearch(query);
}

function toggleHeaderSearch() {
  const box = document.getElementById('header-search-box');
  const input = document.getElementById('header-search-input');
  const open = !box.classList.contains('open');
  box.classList.toggle('open', open);
  if (open) { setTimeout(() => { if (input) input.focus(); }, 100); }
  else { if (input) input.value = ''; }
}

function doHeaderSearch() {
  const input = document.getElementById('header-search-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  document.getElementById('header-search-box').classList.remove('open');
  searchByGenre(val);
}

// ═══════════════════════════════════════════════
// LIKED SONGS
// ═══════════════════════════════════════════════
function toggleLike(song) {
  if (!song || !song.id) return;
  const idx = likedSongs.findIndex(l => l.id === song.id);
  if (idx === -1) {
    likedSongs.unshift(song);
    showToast('Added to Liked Songs');
  } else {
    likedSongs.splice(idx, 1);
    showToast('Removed from Liked Songs');
  }
  saveLiked();
  // Keep liked context up to date
  songCtx['liked'] = likedSongs;
  // Update all visible like buttons for this song
  document.querySelectorAll('#sitem-' + song.id + ' .song-action-btn').forEach(btn => {
    const isLiked = likedSongs.some(l => l.id === song.id);
    btn.classList.toggle('liked', isLiked);
    const svg = btn.querySelector('svg');
    if (svg && svg.querySelector('path')) svg.setAttribute('fill', isLiked ? 'currentColor' : 'none');
  });
  if (queue[queueIndex]?.id === song.id) updateLikeBtn(likedSongs.some(l => l.id === song.id));
  if (currentView === 'library') renderLiked();
}

function toggleLikeCurrent() {
  if (!queue[queueIndex]) return;
  toggleLike(queue[queueIndex]);
}

function saveLiked() {
  try { localStorage.setItem('ep_liked', JSON.stringify(likedSongs)); } catch(e) {}
}

function renderLiked() {
  const list = document.getElementById('liked-songs-list');
  if (!list) return;
  songCtx['liked'] = likedSongs;
  if (!likedSongs.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">♡</div><div class="empty-title">No liked songs yet</div><div class="empty-desc">Like songs to save them here</div></div>';
    return;
  }
  list.innerHTML = '';
  likedSongs.forEach((s, i) => list.appendChild(renderSongItem(s, i, likedSongs, 'liked')));
}

// ═══════════════════════════════════════════════
// PLAYLISTS
// ═══════════════════════════════════════════════
function openCreatePlaylist() {
  const inp = document.getElementById('playlist-name-input');
  if (inp) inp.value = '';
  openModal('create-playlist-modal');
  setTimeout(() => { const inp = document.getElementById('playlist-name-input'); if (inp) inp.focus(); }, 100);
}

function createPlaylist() {
  const inp = document.getElementById('playlist-name-input');
  const name = inp ? inp.value.trim() : '';
  if (!name) { showToast('Enter a playlist name'); return; }
  const pl = { id: Date.now().toString(), name, songs: [], createdAt: Date.now() };
  playlists.unshift(pl);
  savePlaylists();
  renderPlaylists();
  closeModal('create-playlist-modal');
  showToast('"' + name + '" created');
}

function savePlaylists() {
  try { localStorage.setItem('ep_playlists', JSON.stringify(playlists)); } catch(e) {}
}

function renderPlaylists() {
  const list = document.getElementById('playlists-list');
  if (!list) return;
  list.innerHTML = '';
  if (!playlists.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🎵</div><div class="empty-title">No playlists yet</div><div class="empty-desc">Create one above</div></div>';
    return;
  }
  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.addEventListener('click', function() { openPlaylistDetail(pl.id); });

    const imgs = pl.songs.slice(0, 4).map(s => getImageUrl(s)).filter(Boolean);
    const artDiv = document.createElement('div');
    artDiv.className = 'playlist-art';
    if (imgs.length) {
      imgs.forEach(u => {
        const img = document.createElement('img');
        img.src = u; img.alt = ''; img.loading = 'lazy';
        img.onerror = function() { this.style.display = 'none'; };
        artDiv.appendChild(img);
      });
    } else {
      artDiv.innerHTML = '<div class="playlist-art-placeholder"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>';
    }

    const delBtn = document.createElement('button');
    delBtn.className = 'song-action-btn';
    delBtn.title = 'Delete';
    delBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>';
    delBtn.addEventListener('click', function(e) { e.stopPropagation(); deletePlaylist(pl.id); });

    card.appendChild(artDiv);
    card.innerHTML += '<div class="playlist-info"><div class="playlist-name">' + escHtml(pl.name) + '</div><div class="playlist-count">' + pl.songs.length + ' song' + (pl.songs.length !== 1 ? 's' : '') + '</div></div><div class="playlist-actions"></div>';
    card.querySelector('.playlist-actions').appendChild(delBtn);
    list.appendChild(card);
  });
}

function openPlaylistDetail(id) {
  const pl = playlists.find(p => p.id === id);
  if (!pl) return;
  currentPlaylistId = id;
  const pdName = document.getElementById('pd-name');
  const pdCount = document.getElementById('pd-count');
  if (pdName) pdName.textContent = pl.name;
  if (pdCount) pdCount.textContent = pl.songs.length + ' song' + (pl.songs.length !== 1 ? 's' : '');

  const art = document.getElementById('pd-art');
  const imgs = pl.songs.slice(0, 4).map(s => getImageUrl(s)).filter(Boolean);
  if (art) {
    art.innerHTML = '';
    if (imgs.length) {
      art.className = 'playlist-detail-art';
      imgs.forEach(u => {
        const img = document.createElement('img');
        img.src = u; img.alt = ''; img.loading = 'lazy';
        img.onerror = function() { this.style.display = 'none'; };
        art.appendChild(img);
      });
    } else {
      art.className = 'playlist-detail-art empty';
      art.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
    }
  }

  const ctxKey = 'playlist-' + id;
  songCtx[ctxKey] = pl.songs;
  const songsList = document.getElementById('pd-songs-list');
  if (songsList) {
    if (!pl.songs.length) {
      songsList.innerHTML = '<div class="empty-state"><div class="empty-icon">🎵</div><div class="empty-title">No songs</div><div class="empty-desc">Search and add songs to this playlist</div></div>';
    } else {
      songsList.innerHTML = '';
      pl.songs.forEach((s, i) => songsList.appendChild(renderSongItem(s, i, pl.songs, ctxKey)));
    }
  }
  showView('playlist-detail');
}

function playPlaylist() {
  const pl = playlists.find(p => p.id === currentPlaylistId);
  if (!pl || !pl.songs.length) { showToast('Playlist is empty'); return; }
  queue = [...pl.songs];
  queueIndex = 0;
  loadAndPlay(queue[0]);
  updateQueueUI();
}

function shufflePlaylist() {
  const pl = playlists.find(p => p.id === currentPlaylistId);
  if (!pl || !pl.songs.length) { showToast('Playlist is empty'); return; }
  queue = [...pl.songs].sort(() => Math.random() - 0.5);
  queueIndex = 0;
  loadAndPlay(queue[0]);
  updateQueueUI();
  showToast('Shuffled');
}

function deletePlaylist(id) {
  if (!confirm('Delete this playlist?')) return;
  playlists = playlists.filter(p => p.id !== id);
  savePlaylists();
  renderPlaylists();
  showToast('Playlist deleted');
}

function openAddToPlaylist() {
  if (!addToPlaylistSong && queue[queueIndex]) addToPlaylistSong = queue[queueIndex];
  const list = document.getElementById('add-to-playlist-list');
  if (!list) return;
  list.innerHTML = '';
  if (!playlists.length) {
    list.innerHTML = '<div style="padding:12px;font-size:13px;color:var(--text3)">No playlists yet. Create one first.</div>';
  } else {
    playlists.forEach(pl => {
      const item = document.createElement('div');
      item.className = 'add-playlist-item';
      item.addEventListener('click', function() { addSongToPlaylist(pl.id); });

      const artDiv = document.createElement('div');
      artDiv.className = 'add-playlist-item-art';
      const firstImg = pl.songs.slice(0, 1).map(s => getImageUrl(s)).filter(Boolean)[0];
      if (firstImg) {
        const img = document.createElement('img');
        img.src = firstImg; img.alt = '';
        img.onerror = function() { this.style.display = 'none'; };
        artDiv.appendChild(img);
      } else {
        artDiv.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
      }

      item.appendChild(artDiv);
      item.innerHTML += '<div><div class="add-playlist-item-name">' + escHtml(pl.name) + '</div><div class="add-playlist-item-count">' + pl.songs.length + ' songs</div></div>';
      list.appendChild(item);
    });
  }
  openModal('add-to-playlist-modal');
}

function addSongToPlaylist(plId) {
  if (!addToPlaylistSong) return;
  const pl = playlists.find(p => p.id === plId);
  if (!pl) return;
  if (pl.songs.some(s => s.id === addToPlaylistSong.id)) {
    showToast('Already in playlist');
    closeModal('add-to-playlist-modal');
    return;
  }
  pl.songs.push(addToPlaylistSong);
  savePlaylists();
  closeModal('add-to-playlist-modal');
  showToast('Added to ' + pl.name);
  addToPlaylistSong = null;
  if (currentView === 'library') renderPlaylists();
}

function switchLibTab(tab) {
  document.querySelectorAll('.lib-tab').forEach(t => t.classList.remove('active'));
  const tabEl = document.getElementById('lib-tab-' + tab);
  if (tabEl) tabEl.classList.add('active');
  const pls = document.getElementById('lib-playlists');
  const lkd = document.getElementById('lib-liked');
  if (pls) pls.style.display = tab === 'playlists' ? '' : 'none';
  if (lkd) lkd.style.display = tab === 'liked' ? '' : 'none';
  if (tab === 'liked') renderLiked();
}

// ═══════════════════════════════════════════════
// RECENTLY PLAYED
// ═══════════════════════════════════════════════
function addToRecent(song) {
  recentlyPlayed = recentlyPlayed.filter(s => s.id !== song.id);
  recentlyPlayed.unshift(song);
  if (recentlyPlayed.length > 20) recentlyPlayed = recentlyPlayed.slice(0, 20);
  try { localStorage.setItem('ep_recent', JSON.stringify(recentlyPlayed)); } catch(e) {}
  renderRecent();
}

function renderRecent() {
  const header = document.getElementById('recent-section-header');
  const list = document.getElementById('home-recent-list');
  if (!header || !list) return;
  if (!recentlyPlayed.length) { header.style.display = 'none'; list.innerHTML = ''; return; }
  header.style.display = '';
  songCtx['recent'] = recentlyPlayed;
  list.innerHTML = '';
  recentlyPlayed.slice(0, 6).forEach((s, i) => list.appendChild(renderSongItem(s, i, recentlyPlayed, 'recent')));
}

function clearRecent() {
  recentlyPlayed = [];
  try { localStorage.removeItem('ep_recent'); } catch(e) {}
  renderRecent();
  showToast('Cleared');
}

// ═══════════════════════════════════════════════
// SIDEBAR / THEME / MODALS
// ═══════════════════════════════════════════════
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-backdrop').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-backdrop').classList.remove('show');
}
function toggleTheme() {
  document.body.classList.toggle('light');
  try { localStorage.setItem('ep_theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch(e) {}
}
// ═══════════════════════════════════════════════
// SLEEP TIMER
let sleepTimeout = null, sleepTick = null, sleepEndAt = 0, sleepEndOfSong = false;
function sleepActive() { return !!sleepTimeout || sleepEndOfSong; }
function sleepFmt(ms) { const t = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
function resetSleepState() {
  if (sleepTimeout) clearTimeout(sleepTimeout);
  if (sleepTick) clearInterval(sleepTick);
  sleepTimeout = null; sleepTick = null; sleepEndAt = 0; sleepEndOfSong = false;
}
function openSleepTimer() { updateSleepUI(); openModal('sleep-timer-modal'); }
function setSleepTimer(min) {
  resetSleepState();
  sleepEndAt = Date.now() + min * 60000;
  sleepTimeout = setTimeout(sleepFire, min * 60000);
  sleepTick = setInterval(updateSleepUI, 1000);
  updateSleepUI(); closeModal('sleep-timer-modal');
  showToast('Sleep timer set: ' + min + ' min');
}
function setSleepEndOfSong() {
  resetSleepState();
  sleepEndOfSong = true;
  updateSleepUI(); closeModal('sleep-timer-modal');
  showToast('Music will stop after this song');
}
function clearSleepTimer() {
  resetSleepState(); updateSleepUI(); closeModal('sleep-timer-modal');
  showToast('Sleep timer off');
}
function sleepFire() {
  resetSleepState();
  audio.pause(); isPlaying = false; updatePlayUI(); updateSleepUI();
  showToast('Sleep timer: music stopped');
}
function updateSleepUI() {
  const btn = document.getElementById('sleep-btn');
  const st = document.getElementById('sleep-status');
  const off = document.getElementById('sleep-off-btn');
  let label = 'Sleep', status = '';
  if (sleepTimeout) { const left = sleepFmt(sleepEndAt - Date.now()); label = 'Sleep \u00b7 ' + left; status = 'Music stops in ' + left; }
  else if (sleepEndOfSong) { label = 'Sleep \u00b7 end of song'; status = 'Music stops after this song'; }
  if (btn) { btn.textContent = label; btn.classList.toggle('active', sleepActive()); }
  if (st) { st.textContent = status; st.style.display = status ? 'block' : 'none'; }
  if (off) off.style.display = sleepActive() ? 'block' : 'none';
}
// Backup checks: background tabs can delay setTimeout, but audio keeps firing timeupdate
audio.addEventListener('timeupdate', () => { if (sleepTimeout && Date.now() >= sleepEndAt) sleepFire(); });
document.addEventListener('visibilitychange', () => { if (sleepTimeout && Date.now() >= sleepEndAt) sleepFire(); });

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

// ═══════════════════════════════════════════════
// MEDIA SESSION API
// ═══════════════════════════════════════════════
function setupMediaSession() {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.setActionHandler('play', () => { audio.play(); isPlaying = true; updatePlayUI(); });
  navigator.mediaSession.setActionHandler('pause', () => { audio.pause(); isPlaying = false; updatePlayUI(); });
  navigator.mediaSession.setActionHandler('nexttrack', () => nextSong());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevSong());
  navigator.mediaSession.setActionHandler('seekto', details => { if (audio.duration) audio.currentTime = details.seekTime; });
}

function updateMediaSession(song) {
  if (!('mediaSession' in navigator)) return;
  const img = getImageUrl(song);
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.name || 'Unknown',
    artist: getArtistNames(song),
    album: (song && typeof song.album === 'string') ? song.album : '',
    artwork: img ? [{ src: img, sizes: '500x500', type: 'image/jpeg' }] : []
  });
}
</script>

<script type="module">
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDiKeV3dQihnVX3BvG9CbvGPnomZAtan50",
  authDomain: "europify-d7c61.firebaseapp.com",
  projectId: "europify-d7c61",
  storageBucket: "europify-d7c61.firebasestorage.app",
  messagingSenderId: "579040172233",
  appId: "1:579040172233:web:4b52e9e781c98b935a5518"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

// Auth state — show/hide login screen without flicker
onAuthStateChanged(auth, user => {
  const ls = document.getElementById('login-screen');
  const lo = document.getElementById('sidebar-logout');
  if (user) {
    if (ls) ls.style.display = 'none';
    if (lo) lo.style.display = 'block';
  } else {
    if (ls) { ls.style.display = 'flex'; }
    if (lo) lo.style.display = 'none';
  }
  window.__authReady = true;
  setTimeout(hideLoader, 350);
});

window.switchAuthTab = function(tab) {
  const isSignin = tab === 'signin';
  document.getElementById('form-signin').style.display = isSignin ? 'block' : 'none';
  document.getElementById('form-signup').style.display = isSignin ? 'none' : 'block';
  document.getElementById('tab-signin').setAttribute('aria-selected', isSignin ? 'true' : 'false');
  document.getElementById('tab-signup').setAttribute('aria-selected', isSignin ? 'false' : 'true');
  document.getElementById('auth-error').style.display = 'none';
};

[['signin-email','doSignIn'],['signin-password','doSignIn'],['signup-name','doSignUp'],['signup-email','doSignUp'],['signup-password','doSignUp']].forEach(([id, fn]) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') window[fn](); });
});

window.doSignIn = async function() {
  const email = document.getElementById('signin-email').value.trim();
  const pass = document.getElementById('signin-password').value;
  if (!email || !pass) { showAuthError('Fill in all fields'); return; }
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch(e) {
    showAuthError(e.code === 'auth/invalid-credential' ? 'Wrong email or password' : e.message);
  }
};

window.doSignUp = async function() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-password').value;
  if (!name || !email || !pass) { showAuthError('Fill in all fields'); return; }
  if (pass.length < 6) { showAuthError('Password must be at least 6 characters'); return; }
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, { displayName: name });
  } catch(e) {
    showAuthError(e.code === 'auth/email-already-in-use' ? 'Email already in use' : e.message);
  }
};

window.doGoogleSignIn = async function() {
  try {
    await signInWithPopup(auth, provider);
  } catch(e) {
    if (e.code !== 'auth/popup-closed-by-user') showAuthError(e.message);
  }
};

window.doLogout = async function() {
  try {
    await signOut(auth);
  } catch(e) {}
};
</script>

</body>
</html>`;

const PAGE_HTML = INDEX_HTML.split('__EUROPIFY_ICON_SMALL__').join(EUROPIFY_ICON_SMALL).split('__EUROPIFY_ICON__').join(EUROPIFY_ICON);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (path === '/api/search') {
      const jsonHeaders = { 'Content-Type': 'application/json', ...corsHeaders };
      if (!env.JAMENDO_CLIENT_ID) {
        return new Response(JSON.stringify({ error: 'JAMENDO_CLIENT_ID is not set' }), { status: 500, headers: jsonHeaders });
      }
      const q = (url.searchParams.get('q') || '').trim().slice(0, 100);
      const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit'), 10) || 10, 1), 50);
      const fallback = url.searchParams.get('fb') === '1';
      const base = 'https://api.jamendo.com/v3.0/tracks/?client_id=' + encodeURIComponent(env.JAMENDO_CLIENT_ID) +
        '&format=json&imagesize=300&audioformat=mp32&limit=' + limit;
      const getRows = async (extra) => {
        const r = await fetch(base + extra);
        if (!r.ok) throw new Error('Jamendo ' + r.status);
        const d = await r.json();
        return Array.isArray(d.results) ? d.results : [];
      };
      try {
        let rows = q ? await getRows('&search=' + encodeURIComponent(q)) : [];
        if (!rows.length && (fallback || !q)) rows = await getRows('&order=popularity_week');
        const results = rows.filter((t) => t && t.audio).map((t) => ({
          id: String(t.id),
          name: t.name || '',
          artists: t.artist_name || '',
          album: t.album_name || '',
          image: t.image || t.album_image || '',
          audioUrl: t.audio,
          duration: Number(t.duration) || 0,
        }));
        return new Response(JSON.stringify({ results }), { headers: { ...jsonHeaders, 'Cache-Control': 'public, max-age=300' } });
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Music source unavailable' }), { status: 502, headers: jsonHeaders });
      }
    }

    if (path === '/debug') {
      return new Response(JSON.stringify({
        status: 'ok',
        worker: 'europify-frontend',
        timestamp: new Date().toISOString(),
        api_base: env.API_BASE || 'https://europify.ayushonlyyy.workers.dev/api',
        vars: {
          API_BASE: env.API_BASE || '(not set)',
          FIREBASE_PROJECT_ID: env.FIREBASE_PROJECT_ID || '(not set)',
        },
        routes: ['/', '/debug'],
      }, null, 2), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(PAGE_HTML, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'no-cache',
        ...corsHeaders,
      },
    });
  },
};
