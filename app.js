/* Stay search prototype. All stays, prices and counts are demonstration data from the Figma mock. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ic = (n, c = '') => `<svg class="icon ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const DAY = 864e5;
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const fmtDay = d => `${MON[d.getMonth()]} ${d.getDate()}`;
const fmtLong = d => `${DOW[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
const num = n => n.toLocaleString('en-US');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Data ---------- */
const TAKSIM = [28.9850, 41.0370];
const HOTELS = [
  { id: 'pera', name: 'Pera Light Hotel', hood: 'Beyoğlu', walk: 10, transit: '3 min to metro M2', near: 'Metro M2 · 3 min', tmin: 3, score: 8.7, word: 'Excellent', reviews: 1240, cancel: 'Nov 28', breakfast: true, loved: 'location, clean rooms', price: 88, photos: 42, img: 'pera', deal: 'Member price', type: 'Hotel', ll: [28.9772, 41.0316], clean: 9.0, pay: 'Pay now', hoodNote: 'Beyoğlu · lively at night', bf: 'Included', size: 18 },
  { id: 'sisli', name: 'Şişli Business Suites', hood: 'Şişli', walk: 22, transit: '4 min to metro M2', near: 'Metro M2 · 4 min', tmin: 4, score: 8.1, word: 'Very good', reviews: 860, cancel: 'Nov 29', breakfast: false, loved: 'quiet rooms, fast Wi‑Fi', price: 96, photos: 18, img: 'sisli', sponsored: true, type: 'Apartment', ll: [28.9868, 41.0512], clean: 8.2, pay: 'Pay at the property', hoodNote: 'Şişli · business district', bf: '+ $12 per person', size: 24 },
  { id: 'karakoy', name: 'Karaköy Townhouse', hood: 'Karaköy', walk: 18, transit: '2 min to tram T1', near: 'Tram T1 · 2 min', tmin: 2, score: 9.0, word: 'Exceptional', reviews: 512, cancel: 'Nov 30', breakfast: false, loved: 'staff, rooftop breakfast', price: 99, photos: 27, img: 'karakoy', type: 'Hotel', ll: [28.9772, 41.0238], clean: 9.2, pay: 'Pay at the property', hoodNote: 'Karaköy · waterfront, cafés', bf: '+ $9 per person', size: 22 },
  { id: 'galata', name: 'Galata View Rooms', hood: 'Beyoğlu', walk: 7, transit: '2 min to metro M2', near: 'Metro M2 · 2 min', tmin: 2, score: 8.3, word: 'Very good', reviews: 2010, cancel: 'Nov 27', breakfast: true, loved: 'view, location', price: 93, photos: 33, img: 'galata', type: 'Hotel', ll: [28.9822, 41.0338], clean: 8.4, pay: 'Pay now', hoodNote: 'Beyoğlu · lively at night', bf: 'Included', size: 16 },
];
const SOLD = { id: 'oldcity', name: 'Old City Rooms', hood: 'Sultanahmet', walk: 38, transit: '4 min to tram T1', score: 8.9, word: 'Excellent', reviews: 1105, loved: 'breakfast, quiet street', price: 74, photos: 21, img: 'sisli', soldout: true };
const byId = id => HOTELS.find(h => h.id === id);
const EXTRA_PINS = [
  { price: 74, ll: [28.9748, 41.0108] }, { price: 61, ll: [28.9802, 41.0128] },
  { price: 82, ll: [28.9905, 41.0362], full: true }, { price: 90, ll: [29.0165, 41.0262], full: true }, { price: 57, ll: [28.9668, 41.0052], full: true },
];
const HOOD_LABELS = [['Şişli', [28.9870, 41.0580]], ['Beyoğlu', [28.9745, 41.0345]], ['Karaköy', [28.9790, 41.0218]], ['Sultanahmet', [28.9762, 41.0062]]];
const AREAS = [
  { id: 'Karaköy', match: 94, accent: 'var(--amber)', img: 'karakoy', stays: 41, from: 64, center: [28.9772, 41.0238], ticks: ['41 stays under $100 with free cancellation', '18 min walk to Taksim · tram T1', 'Waterfront cafés, quieter evenings', 'Solo travelers rate safety 8.6 / 10'] },
  { id: 'Beyoğlu', match: 90, accent: 'var(--coral)', img: 'galata', stays: 96, from: 58, center: [28.9790, 41.0330], ticks: ['96 stays under $100 with free cancellation', '10 min walk to Taksim Square', 'Metro M2 · busy at night', 'Solo travelers rate safety 8.4 / 10'] },
  { id: 'Sultanahmet', match: 78, accent: 'var(--leaf)', img: 'sisli', stays: 52, from: 49, center: [28.9768, 41.0070], ticks: ['52 stays under $100 with free cancellation', 'Walk to Hagia Sophia & Blue Mosque', 'Tram T1 · quieter at night', 'Solo travelers rate safety 8.1 / 10'] },
];
const QUIZ = {
  who: [['solo', 'user', 'Just me', 'Solo trip', 'a solo trip'], ['couple', 'couple', 'Couple', '2 adults', 'a couple’s trip'], ['family', 'family', 'Family', 'With children', 'a family trip'], ['friends', 'friends', 'Friends', 'Group of 3+', 'a group trip'], ['work', 'briefcase', 'Work trip', 'Remote work or business', 'a work trip']],
  matters: [['safe', 'shield', 'Feeling safe', 'Good for solo travelers', 'that feel safe'], ['metro', 'train-lg', 'Near the metro', '5 min or less to a station', 'near the metro'], ['sights', 'home', 'Walk to sights', 'Old town, museums', 'near the sights'], ['quiet', 'moon', 'Quiet nights', 'Away from bars', 'with quiet nights'], ['food', 'coffee', 'Food & cafés', 'Lots to eat nearby', 'near good food'], ['night', 'music', 'Nightlife', 'Bars and live music', 'near the nightlife']],
  budget: [['u60', 'card', 'Under $60', '612 stays', 60], ['60-100', 'card', '$60 – $100', '1,240 stays', 100], ['100-150', 'card', '$100 – $150', '980 stays', 150], ['none', 'card', 'No limit', '3,522 stays', 160]],
};
const MORE = [
  { k: 'Room features', checks: [['Balcony', 64], ['Bathtub', 52], ['Sea view', 31]] },
  { k: 'Star rating', info: true, chips: ['3 stars', '4 stars', '5 stars'] },
  { k: 'Accessibility', checks: [['Step-free access', 73], ['Elevator', 142], ['Roll-in shower', 12]] },
  { k: 'Payment & booking', checks: [['Pay at the property', 88], ['No prepayment', 61]] },
  { k: 'Policies (pets, smoking)', checks: [['Pets allowed', 27], ['Non-smoking rooms', 190]] },
];
const AMEN = [['Wi-Fi', 'wifi', 'Wi‑Fi', 182], ['Pool', 'pool', 'Pool', 101], ['Parking', 'parking', 'Parking', 86], ['Gym', 'gym', 'Gym', 75], ['Air conditioning', 'snow', 'Air con', 199], ['Kitchen', 'kitchen', 'Kitchen', 47], ['Airport shuttle', 'bus', 'Shuttle', 19], ['Workspace', 'laptop', 'Workspace', 36]];
const TAGNAME = { Pool: 'Swimming pool' };
const FACTOR = { 'Wi-Fi': .85, Pool: .473, Parking: .4, Gym: .35, 'Air conditioning': .93, Kitchen: .22, 'Airport shuttle': .09, Workspace: .17 };
const BUDGET_MAX = 160;

/* ---------- State ---------- */
const S = {
  where: 'Istanbul, Türkiye', start: new Date(2026, 11, 1), end: new Date(2026, 11, 5), calMonth: new Date(2026, 11, 1),
  adults: 2, children: 0, ages: [], rooms: 1, stayType: 0,
  basis: 'night', sort: 'value', compare: ['pera', 'karakoy'], selected: 'pera', moreOpen: false, openAcc: new Set(), soldShown: false, diffOnly: true,
  f: { min: 0, max: 100, cancel: true, breakfast: false, rating: 8, walk15: true, transit5: false, hood: null, types: new Set(), extra: new Set() },
  quiz: { who: 'solo', matters: ['safe', 'metro'], budget: '60-100', cancel: true },
  fresh: new Set(), keepLong: false, countOverride: null, findQuery: '',
  product: 'stays', seg: null, calPhase: 'start', flex: 0, qstep: 1, fromQuiz: false, miniHidden: false,
};
const nights = () => Math.max(1, Math.round((S.end - S.start) / DAY));
const money = h => '$' + num(S.basis === 'night' ? h.price : h.price * nights());
const guestsText = () => `${S.adults} adult${S.adults > 1 ? 's' : ''}${S.children ? `, ${S.children} child${S.children > 1 ? 'ren' : ''}` : ''} · ${S.rooms} room${S.rooms > 1 ? 's' : ''}`;
const datesText = () => `${fmtDay(S.start)} – ${fmtDay(S.end)}`;
const rangeShort = (a, b) => a.getMonth() === b.getMonth() ? `${MON[a.getMonth()]} ${a.getDate()}–${b.getDate()}` : `${MON[a.getMonth()]} ${a.getDate()} – ${MON[b.getMonth()]} ${b.getDate()}`;

/* ---------- Filters → tags, count, list ---------- */
function tags() {
  const f = S.f, n = nights(), t = [];
  if (f.max < BUDGET_MAX || f.min > 0) {
    const tot = S.basis === 'total';
    const hi = tot ? f.max * n : f.max, lo = tot ? f.min * n : f.min;
    const unit = tot ? 'total, incl. taxes' : '/ night incl. taxes';
    t.push(['budget', f.min > 0 ? (f.max < BUDGET_MAX ? `$${num(lo)} – $${num(hi)} ${unit}` : `Over $${num(lo)} ${unit}`) : `Under $${num(hi)} ${unit}`]);
  }
  if (f.cancel) t.push(['cancel', 'Free cancellation']);
  if (f.breakfast) t.push(['breakfast', 'Breakfast included']);
  if (f.rating) t.push(['rating', `Guest rating ${f.rating}+`]);
  if (f.walk15) t.push(['walk15', '≤ 15 min walk to center']);
  if (f.transit5) t.push(['transit5', '≤ 5 min to metro / tram']);
  if (f.hood) t.push(['hood', f.hood]);
  f.types.forEach(x => t.push(['type:' + x, x]));
  f.extra.forEach(x => t.push(['extra:' + x, TAGNAME[x] || x]));
  return t;
}
function removeTag(k) {
  const f = S.f;
  if (k === 'budget') { f.min = 0; f.max = BUDGET_MAX; }
  else if (k === 'rating' || k === 'hood') f[k] = null;
  else if (k.startsWith('type:')) f.types.delete(k.slice(5));
  else if (k.startsWith('extra:')) f.extra.delete(k.slice(6));
  else f[k] = false;
}
function clearAll() { Object.assign(S.f, { min: 0, max: BUDGET_MAX, cancel: false, breakfast: false, rating: null, walk15: false, transit5: false, hood: null }); S.f.types.clear(); S.f.extra.clear(); }
function count() {
  if (S.countOverride != null) return S.countOverride;
  const f = S.f, frac = (f.max - f.min) / BUDGET_MAX;
  const fb = frac >= 1 ? 1 : .30 * Math.pow(Math.max(frac, .02) / .625, 1.6);
  let c;
  if (f.hood) {
    const a = AREAS.find(x => x.id === f.hood);
    c = (a ? a.stays : 60) / (.30 * .55) * fb * (f.cancel ? .55 : 1);
  } else c = 5737 * fb * (f.cancel ? .55 : 1) * (f.walk15 ? .452 : 1);
  c *= ({ 7: .72, 8: .5, 9: .21 }[f.rating] || 1) * (f.breakfast ? .612 : 1) * (f.transit5 ? .58 : 1);
  if (f.types.size === 1) c *= f.types.has('Hotel') ? .62 : .3;
  f.extra.forEach(x => { c *= FACTOR[x] || .5; });
  return Math.round(c);
}
function visibleHotels() {
  const f = S.f;
  const list = HOTELS.filter(h => h.price >= f.min && h.price <= (f.max >= BUDGET_MAX ? 1e9 : f.max)
    && (!f.breakfast || h.breakfast) && (!f.rating || h.score >= f.rating) && (!f.transit5 || h.tmin <= 5)
    && (!f.hood || h.hood === f.hood) && (!f.types.size || f.types.has(h.type)));
  const by = { price: (a, b) => a.price - b.price, rating: (a, b) => b.score - a.score, walk: (a, b) => a.walk - b.walk }[S.sort];
  return by ? list.sort(by) : list;
}

/* ---------- Shared pieces ---------- */
function cardHTML(h, o = {}) {
  const n = nights(), tot = S.basis === 'total';
  const cls = ['card', h.sponsored && 'is-sponsored', h.soldout && 'is-soldout', !o.plain && S.selected === h.id && 'is-linked'].filter(Boolean).join(' ');
  const price = h.soldout
    ? `<div class="price-top"><span class="tag tag-neutral">Sold out</span><small>for your dates</small></div>`
    : `<div class="price-top">${h.deal ? `<span class="tag tag-deal">${h.deal}</span>` : ''}<strong>${money(h)}</strong>
        <span>${tot ? `for ${n} night${n > 1 ? 's' : ''}` : 'per night'}</span>
        <small>${tot ? `$${h.price} / night` : `$${num(h.price * n)} total`}</small></div>
      <label class="check"><input type="checkbox" data-compare="${h.id}" ${S.compare.includes(h.id) ? 'checked' : ''}>Compare</label>`;
  return `<article class="${cls}" data-hotel="${h.id}">
    <div class="photo"><img src="assets/${h.img}.jpg" alt="${esc(h.name)}" loading="lazy" width="208" height="176"><span>1 / ${h.photos}</span></div>
    <div class="details">
      ${h.sponsored ? '<span class="tag tag-neutral">Sponsored</span>' : ''}
      <h3><a href="#" data-stub="The property page">${esc(h.name)}</a></h3>
      <p class="meta">${ic('pin')}${h.hood} · ${h.walk} min walk to Taksim</p>
      <p class="meta muted">${ic('train')}${h.transit}</p>
      <p class="rating"><span class="score">${h.score.toFixed(1)}</span><b>${h.word}</b><span>${num(h.reviews)} reviews</span></p>
      ${h.cancel ? `<p class="cancel">${ic('check')}Free cancellation until ${h.cancel}</p>` : ''}
      ${h.breakfast ? '<span class="tag tag-neutral">Breakfast</span>' : ''}
      <p class="loved">Guests loved: ${h.loved}</p>
    </div>
    <div class="price">${price}</div>
  </article>`;
}
function renderChrome() {
  const n = nights();
  const trip = `<b>${esc(S.where)}</b><span>${datesText()} · ${n} night${n > 1 ? 's' : ''}</span><span>${guestsText()}</span>${ic('edit', 'icon-18')}`;
  $$('[data-trip]').forEach(e => e.innerHTML = trip);
  $$('[data-basis]').forEach(b => b.setAttribute('aria-checked', b.dataset.basis === S.basis));
  $$('.price-toggle').forEach(t => { t.dataset.on = S.basis; });
  const t = tags();
  $$('[data-tags]').forEach(e => {
    e.innerHTML = t.map(([k, l]) => `<span class="tag ${S.fresh.has(k) ? 'tag-brand' : ''}">${esc(l)}<button class="tag-x" data-rm="${k}" aria-label="Remove filter: ${esc(l)}">${ic('x')}</button></span>`).join('')
      + (t.length && e.closest('#applied') ? '<button class="btn btn-subtle btn-sm" data-act="clear">Clear all</button>' : '');
  });
}
function renderCount(updating) {
  const c = count();
  $('[data-count]').textContent = updating ? `Updating… ${num(c)} stays` : `${num(c)} stay${c === 1 ? '' : 's'} match`;
  $('[data-count-map]').textContent = `${num(c)} stays on the map`;
  $('[data-showlist]').textContent = `Show list · ${num(c)} stays`;
}

/* ---------- Results ---------- */
function renderFilters() {
  const f = S.f, n = nights(), tot = S.basis === 'total', mult = tot ? n : 1;
  const bars = [10, 20, 32, 40, 36, 24, 14, 8, 5, 4];
  const chk = (k, label, on, cnt) => `<label class="check"><input type="checkbox" data-f="${k}" ${on ? 'checked' : ''}>${label}${cnt != null ? `<span class="n">${cnt}</span>` : ''}</label>`;
  const q = S.findQuery.trim().toLowerCase();
  const moreCount = [...f.extra].filter(x => !AMEN.some(a => a[0] === x)).length;
  const acc = MORE.filter(g => !q || [g.k, ...(g.chips || []), ...(g.checks || []).map(c => c[0])].some(s => s.toLowerCase().includes(q))).map(g => {
    const open = S.openAcc.has(g.k) || !!q;
    const nOn = [...(g.chips || []), ...(g.checks || []).map(c => c[0])].filter(x => f.extra.has(x)).length;
    return `<div class="acc ${open ? 'is-open' : ''}">
      <button aria-expanded="${open}" data-acc="${esc(g.k)}">${g.k}${g.info ? ic('info') : ''}${nOn ? `<span class="count-badge">${nOn}</span>` : ''}${ic('chevron')}</button>
      ${open ? `<div class="acc-body">
        ${g.chips ? `<div class="chips">${g.chips.map(c => `<button class="toggle" aria-pressed="${f.extra.has(c)}" data-extra="${c}">${c}</button>`).join('')}</div>` : ''}
        ${(g.checks || []).map(([c, cnt]) => chk('extra:' + c, c, f.extra.has(c), cnt)).join('')}
        ${g.all ? `<button class="btn btn-link btn-sm" data-stub="The full list of ${g.all} amenities">Show all ${g.all}</button>` : ''}
      </div>` : ''}</div>`;
  }).join('');
  $('#filters').innerHTML = `
    <h2>Popular filters</h2>
    <div class="fgroup">
      <div class="histogram" aria-hidden="true">${bars.map((h, i) => `<i style="height:${h}px" class="${i * 16 >= f.min && (i + 1) * 16 <= f.max + 4 ? 'on' : ''}"></i>`).join('')}</div>
      <div class="slider-head"><span id="budget-label">${tot ? `Budget for ${n} nights` : 'Budget per night'}</span><output id="budget-out">$${num(f.min * mult)}-${num(f.max * mult)}${f.max >= BUDGET_MAX ? '+' : ''}</output></div>
      <div class="range"><i class="fill" style="left:${f.min / BUDGET_MAX * 100}%;right:${100 - f.max / BUDGET_MAX * 100}%"></i>
        <input type="range" min="0" max="${BUDGET_MAX}" step="10" value="${f.min}" data-range="min" aria-label="Minimum budget">
        <input type="range" min="0" max="${BUDGET_MAX}" step="10" value="${f.max}" data-range="max" aria-label="Maximum budget"></div>
      <p class="slider-note" id="budget-note">$${num(f.min * mult)} – $${num(f.max * mult)}${f.max >= BUDGET_MAX ? '+' : ''} · includes taxes</p>
    </div>
    <hr>
    <div class="fgroup">${chk('cancel', 'Free cancellation', f.cancel)}${chk('breakfast', 'Breakfast included', f.breakfast)}</div>
    <hr>
    <div><h3 id="rating-h">Guest rating</h3><div class="rating-row" role="group" aria-labelledby="rating-h">${[7, 8, 9].map(r => `<button class="toggle" aria-pressed="${f.rating === r}" data-rating="${r}">${r}+</button>`).join('')}</div></div>
    <hr>
    <div class="fgroup"><h3>Location</h3>${chk('walk15', '≤ 15 min walk to center', f.walk15)}${chk('transit5', '≤ 5 min to metro / tram', f.transit5)}
      <button class="btn btn-subtle btn-sm" style="justify-self:start" data-act="choose-hood">${f.hood ? `Neighborhood: ${f.hood}` : 'Choose neighborhood'}</button></div>
    <hr>
    <div class="fgroup"><h3 id="amen-h">Amenities${AMEN.some(a => f.extra.has(a[0])) ? `<span class="count-badge">${AMEN.filter(a => f.extra.has(a[0])).length}</span>` : ''}</h3>
      <div class="amen" role="group" aria-labelledby="amen-h">${AMEN.map(([k, i, l, c]) => `<button type="button" class="amen-t" aria-pressed="${f.extra.has(k)}" data-extra="${k}" aria-label="${l}, ${c} stays">${ic(i, 'icon-20')}<span>${l}</span></button>`).join('')}</div>
      <button type="button" class="btn btn-link btn-sm" style="justify-self:start" data-stub="The full list of 18 amenities">Show all 18 amenities</button></div>
    <hr>
    <div class="fgroup"><h3>Property type</h3>${chk('type:Hotel', 'Hotel', f.types.has('Hotel'))}${chk('type:Apartment', 'Apartment', f.types.has('Apartment'))}</div>
    ${S.moreOpen ? `<hr><div class="more">
        <button class="more-head" aria-expanded="true" data-act="more">More filters${moreCount ? `<span class="count-badge">${moreCount}</span>` : ''}${ic('chevron')}</button>
        <div class="find"><input class="input" id="find-filter" placeholder="Find a filter" aria-label="Find a filter" value="${esc(S.findQuery)}">${ic('search')}</div>
        <div>${acc || '<p class="acc-empty">No filter with that name.</p>'}</div>
        <button class="btn btn-neutral btn-sm" style="justify-self:start" data-act="more">Fewer filters</button></div>`
      : `<button class="btn btn-neutral btn-block" aria-expanded="false" data-act="more">More filters (32)${moreCount ? ` · ${moreCount} on` : ''}</button>`}`;
}
function renderCards() {
  const list = visibleHotels();
  $('#cards').innerHTML = list.length ? list.map(h => cardHTML(h)).join('') + (S.soldShown ? cardHTML(SOLD, { plain: true }) : '')
    : `<div class="empty"><h3>None of the sample stays match these filters</h3><p>This prototype holds four stays. Remove a filter to bring them back.</p><button class="btn btn-primary" data-act="clear">Clear all filters</button></div>`;
  $('#soldout span').textContent = (S.soldShown ? 'Showing 1 of 12 sold-out stays' : '12 sold-out stays hidden');
  $('#list-end').textContent = list.length ? `Showing ${list.length} of ${num(count())} stays. This prototype holds ${list.length === 1 ? 'one sample stay' : 'only these sample stays'}.` : '';
  $('#soldout-btn').textContent = S.soldShown ? 'Hide them' : 'Show them';
  if (!list.some(h => h.id === S.selected)) S.selected = list[0] ? list[0].id : null;
  syncMaps();
}
function renderTray() {
  const c = S.compare.map(byId);
  $('#tray').innerHTML = `<div class="tray-lead"><b>Compare (${c.length} of 4)</b>
    ${c.map(h => `<span class="tag">${esc(h.name)} · ${money(h)}<button class="tag-x" data-uncompare="${h.id}" aria-label="Remove ${esc(h.name)} from compare">${ic('x')}</button></span>`).join('')}
    <small>${c.length ? 'No sign-in needed' : 'Tick Compare on up to 4 stays'}</small></div>
    <button type="button" class="btn btn-primary" data-act="compare-open" ${c.length < 2 ? 'disabled' : ''}>Compare${c.length ? ` (${c.length})` : ''}</button>`;
}
function renderQuizNote() {
  const el = $('#quiz-applied'); el.hidden = !S.fromQuiz;
  if (S.fromQuiz) el.innerHTML = `${ic('sparkle')}<span>Filters set from your answers.</span><button type="button" class="btn btn-link btn-sm" data-act="quiz-open">Edit answers</button><button type="button" class="icon-btn" data-act="quiz-dismiss" aria-label="Dismiss">${ic('x')}</button>`;
}
function renderResults() { renderChrome(); renderCount(); renderFilters(); renderCards(); renderTray(); renderQuizNote(); }
let updT;
function update(changedKey) {
  S.countOverride = null;
  const before = new Set(tags().map(t => t[0]));
  return (after) => {
    S.fresh = new Set(tags().map(t => t[0]).filter(k => !before.has(k)));
    const keep = document.activeElement && document.activeElement.dataset ? { ...document.activeElement.dataset } : null;
    renderChrome(); renderFilters(); renderCount(true); renderTray();
    if (keep) { const sel = Object.entries(keep).map(([k, v]) => `[data-${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}="${CSS.escape(v)}"]`).join(''); const el = sel && $('#filters ' + sel); if (el) el.focus({ preventScroll: true }); }
    const root = $('#v-results'); root.classList.remove('is-updating'); void root.offsetWidth; root.classList.add('is-updating');
    $('#updating-pill').hidden = false;
    clearTimeout(updT);
    updT = setTimeout(() => { root.classList.remove('is-updating'); $('#updating-pill').hidden = true; S.fresh.clear(); renderChrome(); renderCount(); renderCards(); }, reduced ? 250 : 950);
  };
}
function change(fn) { const done = update(); fn(); done(); }

/* ---------- Home: search form ---------- */
const PRODUCTS = [['stays', 'bed', 'Hotels & homes'], ['flights', 'plane', 'Flights'], ['bundle', 'briefcase', 'Flight + Hotel'], ['activities', 'ticket', 'Activities'], ['transfer', 'car', 'Airport transfer']];
const SUGGEST = [['pin-lg', 'Istanbul, Türkiye', 'City · 5,737 stays'], ['map', 'Beyoğlu, Istanbul', 'Neighborhood · 1,180 stays'], ['star', 'Taksim Square, Istanbul', 'Landmark · show stays nearby'], ['plane', 'Istanbul Airport (IST)', 'Airport · 42 stays']];
const FL = { from: 'London (LHR)', to: 'Istanbul (IST)', trip: 'round', cabin: 'Economy', act: 'Istanbul', pick: 'Istanbul Airport (IST)', drop: 'Pera Light Hotel, Beyoğlu', time: '14:00' };
const TODAY = new Date(2026, 10, 27).getTime(); // demo "today" so the sample dates stay bookable
const POPS = { where: '#suggest', checkin: '#cal', checkout: '#cal', who: '#guests' };
let sugIdx = 0;
function closePops() {
  ['#suggest', '#cal', '#guests'].forEach(p => { $(p).hidden = true; });
  if (S.seg) { S.seg = null; renderBar(); }
}
function openSeg(seg) {
  const pop = S.product === 'stays' || seg !== 'where' ? POPS[seg] : null;
  S.seg = seg;
  ['#suggest', '#cal', '#guests'].forEach(p => { $(p).hidden = p !== pop; });
  $('#search-form').dataset.pop = seg;
  if (pop === '#cal') { S.calPhase = seg === 'checkin' ? 'start' : 'end'; renderCal(); }
  if (pop === '#guests') renderGuests();
  if (pop === '#suggest') renderSuggest();
  renderBar();
}
const flexTxt = () => S.flex ? ` ±${S.flex}` : '';
const segB = (key, label, value, empty) => { const on = S.seg === key; return `<button type="button" class="seg ${on ? 'is-active' : ''}" data-seg="${key}" aria-expanded="${on}"><span class="seg-l">${label}</span><span class="seg-v ${value ? '' : 'is-empty'}">${esc(value || empty)}</span></button>`; };
const segI = (key, label, id, value, ph, extra = '') => { const on = S.seg === key; return `<label class="seg seg-in ${on ? 'is-active' : ''}" data-seg="${key}" for="${id}"><span class="seg-l">${label}</span><input id="${id}" data-field="${key}" value="${esc(value)}" placeholder="${ph}" autocomplete="off" spellcheck="false" ${extra}></label>`; };
function renderBar() {
  const p = S.product, people = S.adults + S.children, active = document.activeElement;
  const keep = active && active.dataset && active.dataset.field, pos = keep && active.type !== 'time' ? active.selectionStart : null;
  const dIn = fmtDay(S.start) + flexTxt(), dOut = S.end ? fmtDay(S.end) + flexTxt() : '';
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  let segs;
  if (p === 'stays') segs = [segI('where', 'Where', 'where', S.where, 'Search destinations', `role="combobox" aria-controls="suggest" aria-expanded="${S.seg === 'where'}"`), segB('checkin', 'Check in', dIn, 'Add date'), segB('checkout', 'Check out', dOut, 'Add date'), segB('who', 'Who', guestsText(), 'Add guests')];
  else if (p === 'flights' || p === 'bundle') segs = [segI('from', 'From', 'fl-from', FL.from, 'City or airport'), `<button type="button" class="swap" data-act="swap" aria-label="Swap origin and destination">${ic('swap', 'icon-18')}</button>`, segI('to', 'To', 'fl-to', FL.to, 'City or airport'), segB('checkin', 'Depart', dIn, 'Add date'), ...(p === 'flights' && FL.trip === 'one' ? [] : [segB('checkout', 'Return', dOut, 'Add date')]), segB('who', p === 'bundle' ? 'Travelers' : 'Travelers', p === 'bundle' ? `${plural(people, 'traveler')} · ${plural(S.rooms, 'room')}` : `${plural(people, 'traveler')} · ${FL.cabin}`, 'Add travelers')];
  else if (p === 'activities') segs = [segI('act', 'Where', 'act', FL.act, 'City or attraction'), segB('checkin', 'Date', dIn, 'Add date'), segB('who', 'Who', plural(people, 'person').replace('persons', 'people'), 'Add people')];
  else segs = [segI('pick', 'Pick-up', 'tr-pick', FL.pick, 'Airport'), segI('drop', 'Drop-off', 'tr-drop', FL.drop, 'Hotel or address'), segB('checkin', 'Date', dIn, 'Add date'), segI('time', 'Time', 'tr-time', FL.time, '', 'type="time"'), segB('who', 'Passengers', plural(people, 'passenger'), 'Add')];
  const label = PRODUCTS.find(x => x[0] === p)[2];
  const bar = $('#sbar');
  bar.className = `sbar sbar-${p}` + (S.seg ? ' has-active' : '');
  bar.innerHTML = segs.join('') + `<button class="sbar-go" type="submit" aria-label="Search ${esc(label)}">${ic('search', 'icon-18')}<span>Search</span></button>`;
  $$('#products [data-product]').forEach(b => b.setAttribute('aria-selected', b.dataset.product === p));
  $$('.nav [data-product]').forEach(b => b.classList.toggle('is-current', b.dataset.product === p));
  const chip = (attr, v, on, t) => `<button type="button" class="chip" aria-pressed="${on}" data-${attr}="${v}">${t}</button>`;
  $('#subopts').innerHTML = p === 'stays' ? ['Overnight stays', 'Day use', 'Long stays (30+ nights)'].map((t, i) => chip('staytype', i, S.stayType === i, t)).join('')
    : p === 'flights' ? [['round', 'Round trip'], ['one', 'One way']].map(([k, t]) => chip('flighttrip', k, FL.trip === k, t)).join('') + ['Economy', 'Premium economy', 'Business'].map(c => chip('cabin', c, FL.cabin === c, c)).join('')
    : p === 'bundle' ? '<span class="subnote">Book both together and save on the hotel.</span>'
    : p === 'activities' ? '<span class="subnote">Tours, tickets and experiences.</span>'
    : '<span class="subnote">Private car, met at arrivals.</span>';
  if (keep) { const el = $(`[data-field="${keep}"]`); if (el) { el.focus({ preventScroll: true }); if (pos != null) el.setSelectionRange(pos, pos); } }
}
function renderSuggest() {
  const q = $('#where').value.trim().toLowerCase();
  const hit = SUGGEST.filter(s => s[1].toLowerCase().includes(q));
  const corrected = q && !hit.length && q !== S.where.toLowerCase();
  const list = hit.length ? hit : SUGGEST;
  sugIdx = Math.min(sugIdx, list.length - 1);
  $('#suggest').innerHTML = `${corrected ? '<p class="suggest-note">Showing results for<b>Istanbul</b></p>' : '<p class="pop-h">Suggested destinations</p>'}
    <ul role="listbox">${list.map((s, i) => `<li role="option" aria-selected="${i === sugIdx}"><button type="button" class="suggest-item ${i === sugIdx ? 'is-active' : ''}" data-suggest="${esc(s[1])}"><span class="tile">${ic(s[0], 'icon-20')}</span><span><b>${s[1]}</b><small>${s[2]}</small></span></button></li>`).join('')}</ul>`;
}
function renderCal() {
  const s = S.start.getTime(), e = S.end ? S.end.getTime() : null;
  const month = i => {
    const m = new Date(S.calMonth.getFullYear(), S.calMonth.getMonth() + i, 1), y = m.getFullYear(), mo = m.getMonth();
    const lead = (m.getDay() + 6) % 7, days = new Date(y, mo + 1, 0).getDate();
    let cells = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => `<span class="dow">${d}</span>`).join('') + '<span></span>'.repeat(lead);
    for (let d = 1; d <= days; d++) {
      const dt = new Date(y, mo, d), t = dt.getTime(), col = (lead + d - 1) % 7, low = y === 2026 && mo === 11 && [8, 9, 10, 15, 16].includes(d);
      const cls = [t === s && 'is-start', t === s && e && 'has-end', t === e && 'is-end', e && t > s && t < e && 'in-range', (col === 0 || d === 1) && 'row-start', (col === 6 || d === days) && 'row-end', low && 'low'].filter(Boolean).join(' ');
      cells += `<button type="button" class="cal-day ${cls}" data-day="${t}" ${t < TODAY ? 'disabled' : ''} aria-label="${fmtLong(dt)}${low ? ', lower prices' : ''}" aria-pressed="${t === s || t === e}"><span>${d}</span></button>`;
    }
    const nav = i === 0 ? `<button type="button" class="cal-nav" data-calnav="-1" aria-label="Previous month" ${y * 12 + mo <= 2026 * 12 + 10 ? 'disabled' : ''}>${ic('arrow-left')}</button>` : `<button type="button" class="cal-nav" data-calnav="1" aria-label="Next month">${ic('arrow-right')}</button>`;
    return `<div class="cal-month"><div class="cal-title ${i ? 'is-right' : ''}">${i === 0 ? nav : ''}<span>${MONTHS[mo]} ${y}</span>${i === 1 ? nav : ''}</div><div class="cal-grid">${cells}</div></div>`;
  };
  const n = S.end ? nights() : 0;
  $('#cal').innerHTML = `<div class="cal-head"><b>${S.end ? `${n} night${n > 1 ? 's' : ''}` : S.calPhase === 'end' ? 'Select check-out date' : 'Select check-in date'}</b><span>${S.end ? `${fmtDay(S.start)} – ${fmtDay(S.end)}` : `Check-in ${fmtDay(S.start)}`}</span></div>
    <div class="cal-months">${month(0)}${month(1)}</div>
    <div class="cal-foot"><div class="flex-chips" role="group" aria-label="How flexible are your dates?">${[0, 1, 2, 3].map(f => `<button type="button" class="chip" aria-pressed="${S.flex === f}" data-flex="${f}">${f ? `± ${f} day${f > 1 ? 's' : ''}` : 'Exact dates'}</button>`).join('')}</div>
      <span class="cal-legend">Lower prices</span><button type="button" class="btn btn-link btn-sm" data-act="cal-clear">Clear</button><button type="button" class="btn btn-primary btn-sm" data-act="cal-done" ${S.end ? '' : 'disabled'}>Done</button></div>`;
}
function previewRange(t) {
  const cal = $('#cal'), s = S.start.getTime(), on = S.calPhase === 'end' && t != null && t > s;
  cal.classList.toggle('is-pv', on);
  $$('.cal-day', cal).forEach(b => { const x = +b.dataset.day; b.classList.toggle('pv', on && x > s && x < t); b.classList.toggle('pv-end', on && x === t); b.classList.toggle('pv-start', on && x === s); });
}
function renderGuests(showErrors) {
  const p = S.product;
  const step = (k, min, max, what) => `<span class="stepper"><button type="button" data-step="${k}:-1" ${S[k] <= min ? 'disabled' : ''} aria-label="Fewer ${what}">${ic('minus')}</button><output aria-live="polite">${S[k]}</output><button type="button" data-step="${k}:1" ${S[k] >= max ? 'disabled' : ''} aria-label="More ${what}">${ic('plus')}</button></span>`;
  const ages = S.ages.map((a, i) => {
    const err = showErrors && a === '';
    return `<div class="field age"><label for="age${i}">Age of child ${i + 1}</label>
      <select id="age${i}" class="input ${err ? 'is-error' : ''}" data-age="${i}" ${err ? `aria-invalid="true" aria-describedby="age${i}e"` : ''}><option value="">Select age</option>${Array.from({ length: 18 }, (_, y) => `<option value="${y}" ${String(a) === String(y) ? 'selected' : ''}>${y === 0 ? 'Under 1' : y}</option>`).join('')}</select>
      ${err ? `<span class="error-text" id="age${i}e">Select an age</span>` : ''}</div>`;
  }).join('');
  const rooms = p === 'stays' || p === 'bundle';
  $('#guests').innerHTML = `<div class="guest-row"><span><b>Adults</b><small>Ages 18 or above</small></span>${step('adults', 1, 8, 'adults')}</div>
    <div class="guest-row"><span><b>Children</b><small>Ages 0–17</small></span>${step('children', 0, 4, 'children')}</div>${ages}
    ${rooms ? `<div class="guest-row"><span><b>Rooms</b><small>Up to 4 per booking</small></span>${step('rooms', 1, 4, 'rooms')}</div>` : ''}
    <div class="guest-foot"><button type="button" class="btn btn-primary btn-sm" data-act="guests-done">Done</button></div>`;
}
function renderHome() { renderBar(); }
function agesOk() { return S.ages.every(a => a !== ''); }

/* ---------- Help me choose (quiz popup) ---------- */
function openQuiz() {
  S.qstep = 1; renderQuiz();
  const d = $('#quiz-dialog'); if (!d.open) d.showModal();
  $('#quiz-title').focus();
}
function renderQuiz() {
  const q = S.quiz, step = S.qstep;
  const cfg = [null,
    { key: 'who', title: 'Who’s traveling?', lede: 'So we can suggest the right areas and rooms.', cols: 'c3' },
    { key: 'matters', title: 'What matters most?', lede: 'Pick up to 2.', cols: 'c3', multi: true },
    { key: 'budget', title: 'What’s your budget per night?', lede: 'Includes taxes and fees.', cols: 'c2' }][step];
  const sel = v => cfg.multi ? q.matters.includes(v) : q[cfg.key] === v;
  const can = cfg.multi ? q.matters.length > 0 : !!q[cfg.key];
  $('#quiz').innerHTML = `
    <div class="quiz-top"><b>Step ${step} of 3</b><button type="button" class="icon-btn" data-act="quiz-close" aria-label="Close">${ic('x', 'icon-20')}</button></div>
    <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="3" aria-valuenow="${step}" aria-label="Step ${step} of 3">${[1, 2, 3].map(i => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>
    <h2 id="quiz-title" tabindex="-1">${cfg.title}</h2><p class="lede">${cfg.lede}</p>
    <div class="options ${cfg.cols}" role="${cfg.multi ? 'group' : 'radiogroup'}" aria-labelledby="quiz-title">
      ${QUIZ[cfg.key].map(o => `<button type="button" class="option" role="${cfg.multi ? 'checkbox' : 'radio'}" aria-checked="${sel(o[0])}" data-opt="${cfg.key}:${o[0]}"><span class="tile">${ic(o[1], 'icon-24')}</span><span class="radio">${ic('check')}</span><b>${o[2]}</b><small>${o[3]}</small></button>`).join('')}
    </div>
    ${cfg.multi ? `<p class="pick-count" aria-live="polite">${q.matters.length} of 2 selected</p>` : ''}
    ${step === 3 ? `<label class="switch-row"><span>Only free cancellation<small>Cancel for free if your plans change</small></span><input type="checkbox" class="switch" id="quiz-cancel" ${q.cancel ? 'checked' : ''}></label>` : ''}
    <div class="quiz-actions">
      ${step > 1 ? `<button type="button" class="btn btn-link" data-act="quiz-back">${ic('arrow-left')}Back</button>` : ''}
      <button type="button" class="btn btn-link" data-act="quiz-close">Not now</button>
      <button type="button" class="btn btn-primary" data-act="quiz-next" ${can ? '' : 'disabled'}>${step === 3 ? 'Show my stays' : 'Next'}</button>
    </div>`;
}
function applyQuiz() {
  const q = S.quiz, bud = QUIZ.budget.find(o => o[0] === q.budget);
  clearAll();
  Object.assign(S.f, { min: bud[0] === '100-150' ? 100 : bud[0] === '60-100' ? 60 : 0, max: bud[4], cancel: q.cancel });
  if (q.matters.includes('safe')) S.f.rating = 8;
  if (q.matters.includes('metro')) S.f.transit5 = true;
  if (q.matters.includes('sights')) S.f.walk15 = true;
  if (q.matters.includes('quiet') || q.matters.includes('food')) S.f.hood = 'Karaköy';
  if (q.matters.includes('night')) S.f.hood = 'Beyoğlu';
  if (q.who === 'work') S.f.extra.add('Workspace');
  if (q.who === 'family') S.f.types.add('Apartment');
}

/* ---------- No matches ---------- */
function suggestedStart() { const s = new Date(S.start.getTime()); s.setMonth(s.getMonth() + 1); return s < S.end ? s : new Date(S.end.getTime() - 6 * DAY); }
function renderNoMatch() {
  if (nights() <= 30) { S.start = new Date(2027, 0, 6); S.end = new Date(2027, 1, 12); S.keepLong = false; }
  renderChrome();
  const n = nights(), s2 = suggestedStart(), n2 = Math.round((S.end - s2) / DAY);
  $('[data-check-dates]').textContent = `Check your dates (${n} nights)`;
  const fixes = [];
  if (S.f.walk15) fixes.push(['walk15', 'Remove “≤ 15 min walk to center”', 86]);
  if (S.f.max < 120) fixes.push(['budget120', 'Raise budget to $120 / night, incl. taxes', 41]);
  if (S.f.rating === 8) fixes.push(['rating7', 'Guest rating 7+ instead of 8+', 58]);
  $('#nomatch').innerHTML = `<span class="roundel">${ic('calendar', 'icon-24')}</span>
    <h1 tabindex="-1">No stays match your search</h1>
    ${S.keepLong ? `<p>Keeping ${n} nights. Changing a filter below will bring stays back.</p>` : `<p>Did you mean ${fmtDay(s2)} – ${fmtDay(S.end)} (${n2} nights)?</p>
    <div class="row"><button class="btn btn-primary" data-act="fix-dates">Change to ${rangeShort(s2, S.end)}</button><button class="btn btn-link" data-act="keep-long">Keep ${n} nights</button></div>`}
    ${fixes.length ? `<hr><h2>${S.keepLong ? 'Try changing a filter' : 'Or try changing a filter'}</h2>
    ${fixes.map(([k, l, c]) => `<div class="fix"><span>${l}</span><b>+${c} stays</b><button class="btn btn-neutral btn-sm" data-fix="${k}:${c}">Apply</button></div>`).join('')}` : ''}
    <p class="long">Planning a long stay? <a href="#results" data-act="monthly">See monthly apartments in Istanbul</a></p>`;
}

/* ---------- Compare (side panel) ---------- */
function openCompare() {
  renderCompare();
  const d = $('#compare-dialog'); if (!d.open) d.showModal();
  $('#compare-title').focus();
}
function renderCompare() {
  const hs = S.compare.map(byId), n = nights();
  const head = `<header class="drawer-head"><div><h2 id="compare-title" tabindex="-1">Compare stays</h2><p>${hs.length} of 4 · ${esc(S.where.split(',')[0])} · ${rangeShort(S.start, S.end)} · ${n} night${n > 1 ? 's' : ''}</p></div>
    <button type="button" class="icon-btn" data-act="compare-close" aria-label="Close compare">${ic('x', 'icon-20')}</button></header>`;
  if (hs.length < 2) {
    $('#compare').innerHTML = head + `<div class="drawer-empty"><h3>${hs.length ? 'Add one more stay to compare' : 'Nothing to compare yet'}</h3><p>Tick Compare on at least two stays in the results.</p><button type="button" class="btn btn-primary" data-act="compare-close">Back to results</button></div>`;
    return;
  }
  const best = (fn, dir) => { const v = hs.map(fn), b = dir > 0 ? Math.max(...v) : Math.min(...v); return v.filter(x => x === b).length === 1 ? v.indexOf(b) : -1; };
  const cd = h => +h.cancel.split(' ')[1];
  const rows = [
    ['Per night', h => `<span class="big">$${h.price}</span>`, best(h => h.price, -1), 'Lowest', h => h.price],
    [`Total, ${n} night${n > 1 ? 's' : ''}`, h => `$${num(h.price * n)}`, -1, '', h => h.price],
    ['Cancellation', h => `Free until ${h.cancel}`, best(cd, 1), 'Latest', h => h.cancel],
    ['Payment', h => h.pay, -1, '', h => h.pay],
    ['Guest rating', h => `${h.score.toFixed(1)} ${h.word}`, best(h => h.score, 1), 'Highest', h => h.score],
    ['Cleanliness', h => h.clean.toFixed(1), best(h => h.clean, 1), 'Highest', h => h.clean],
    ['Walk to Taksim', h => `${h.walk} min`, best(h => h.walk, -1), 'Closest', h => h.walk],
    ['Nearest transit', h => h.near, -1, '', h => h.near],
    ['Neighborhood', h => h.hoodNote, -1, '', h => h.hoodNote],
    ['Breakfast', h => h.bf, -1, '', h => h.bf],
    ['Room size', h => `${h.size} m²`, best(h => h.size, 1), 'Largest', h => h.size],
    ['Wi-Fi', () => 'Free', -1, '', () => 1],
    ['Check-in', () => 'From 2:00 PM', -1, '', () => 1],
  ].filter(r => !S.diffOnly || new Set(hs.map(r[4])).size > 1);
  $('#compare').innerHTML = head + `
    <div class="drawer-tools"><label>Show differences only<input type="checkbox" class="switch" id="diff" ${S.diffOnly ? 'checked' : ''}></label><button type="button" class="btn btn-neutral btn-sm" data-act="share">Share</button></div>
    <div class="drawer-body"><div class="ctable" style="--cols:${hs.length}" role="table" aria-label="Stay comparison">
      <div class="crow head" role="row"><div class="rh" role="columnheader"><span class="sr">Feature</span></div>${hs.map(h => `<div class="chead" role="columnheader"><img src="assets/${h.img}.jpg" alt=""><h3>${esc(h.name)}</h3><small>${h.hood}</small><button type="button" class="btn btn-link btn-sm" data-uncompare="${h.id}" aria-label="Remove ${esc(h.name)} from compare">Remove</button></div>`).join('')}</div>
      ${rows.map((r, i) => `<div class="crow ${i % 2 ? 'alt' : ''}" role="row"><div class="rh" role="rowheader">${r[0]}</div>${hs.map((h, j) => `<div class="cell ${r[2] === j ? 'best' : ''}" role="cell">${r[1](h)}${r[2] === j ? `<span class="tag tag-positive">${r[3]}</span>` : ''}</div>`).join('')}</div>`).join('')}
      <div class="crow foot" role="row"><div class="rh"></div>${hs.map(h => `<div><button type="button" class="btn btn-primary btn-block btn-sm" data-stub="The property page for ${esc(h.name)}">View</button></div>`).join('')}</div>
    </div></div>`;
}

/* ---------- Map (MapLibre GL JS) ---------- */
const MAPS = {};
window.__maps = MAPS;
const MAPC = { land: '#f2efe9', water: '#a9cbea', building: '#e2dcd3', park: '#cfe5c0', casing: '#d9d2c7', road: '#ffffff' };
function circle(c, m, pts = 72) { const r = []; for (let i = 0; i <= pts; i++) { const a = i / pts * 2 * Math.PI; r.push([c[0] + m / (111320 * Math.cos(c[1] * Math.PI / 180)) * Math.cos(a), c[1] + m / 110540 * Math.sin(a)]); } return r; }
const line = coords => ({ type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} });
function routeFor(h) { return h ? line([h.ll, [h.ll[0] + (TAKSIM[0] - h.ll[0]) * .35, h.ll[1] + (TAKSIM[1] - h.ll[1]) * .7], TAKSIM]) : line([]); }
function recolor(map, full) {
  const set = (id, p, v) => { try { map.setPaintProperty(id, p, v); } catch (e) { /* layer does not take this property */ } };
  map.getStyle().layers.forEach(l => {
    const id = l.id.toLowerCase();
    if (l.type === 'background') set(l.id, 'background-color', MAPC.land);
    else if (l.type === 'fill-extrusion') map.setLayoutProperty(l.id, 'visibility', 'none');
    else if (l.type === 'fill') {
      if (id.includes('water')) set(l.id, 'fill-color', MAPC.water);
      else if (id.includes('building')) { set(l.id, 'fill-color', MAPC.building); set(l.id, 'fill-outline-color', MAPC.building); }
      else if (/park|wood|grass|green|cemetery|pitch/.test(id)) { set(l.id, 'fill-color', MAPC.park); set(l.id, 'fill-opacity', 1); }
      else set(l.id, 'fill-color', MAPC.land);
    } else if (l.type === 'line') {
      if (id.includes('water')) set(l.id, 'line-color', MAPC.water);
      else if (/rail|transit/.test(id)) set(l.id, 'line-color', MAPC.casing);
      else if (/casing|outline/.test(id)) set(l.id, 'line-color', MAPC.casing);
      else if (/road|highway|street|bridge|tunnel|path|motorway/.test(id)) set(l.id, 'line-color', MAPC.road);
    } else if (l.type === 'symbol') {
      // Labels come from the Figma overlay; the full-screen map keeps street and water names for orientation.
      if (full && /road|street|highway|water|transportation_name/.test(id)) { set(l.id, 'text-color', '#757575'); set(l.id, 'text-halo-color', '#ffffff'); }
      else map.setLayoutProperty(l.id, 'visibility', 'none');
    }
  });
}
function initMap(key) {
  if (MAPS[key]) { MAPS[key].map.resize(); return MAPS[key]; }
  const el = $('#map-' + key), full = key === 'full';
  if (!window.maplibregl) { el.innerHTML = '<p class="map-fallback">The map needs an internet connection to load MapLibre and its tiles.</p>'; return null; }
  const map = new maplibregl.Map({ container: el, style: 'https://tiles.openfreemap.org/styles/positron', center: full ? [28.985, 41.026] : [28.9805, 41.0305], zoom: full ? 13 : 12.45, attributionControl: false, cooperativeGestures: !full });
  map.setPadding(full ? { top: 60, bottom: 170, left: 0, right: 0 } : { top: 40, bottom: 230, left: 0, right: 0 });
  const M = MAPS[key] = { map, pins: {}, ready: false };
  // MapLibre's standard control layout: navigation, full screen, geolocate top-right; attribution bottom-right. No scale bar (removed at the user's request).
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), 'top-right');
  map.addControl({
    onAdd() { const d = document.createElement('div'); d.className = 'maplibregl-ctrl maplibregl-ctrl-group ctrl-full'; d.innerHTML = `<button type="button" title="${full ? 'Exit full screen map' : 'Full screen map'}" aria-label="${full ? 'Exit full screen map' : 'Full screen map'}">${ic('fullscreen')}</button>`; d.firstChild.onclick = () => { location.hash = full ? '#results' : '#map'; }; return this._d = d; },
    onRemove() { this._d.remove(); },
  }, 'top-right');
  map.addControl(new maplibregl.GeolocateControl({ positionOptions: { enableHighAccuracy: true } }), 'top-right');
  map.addControl(new maplibregl.AttributionControl({ compact: false }), 'bottom-right');
  map.on('load', () => {
    recolor(map, full);
    map.addSource('walk', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Polygon', coordinates: [circle(TAKSIM, 1100)] }, properties: {} } });
    map.addLayer({ id: 'walk-fill', type: 'fill', source: 'walk', paint: { 'fill-color': '#2067da', 'fill-opacity': .09 } });
    map.addLayer({ id: 'walk-line', type: 'line', source: 'walk', paint: { 'line-color': '#2067da', 'line-width': 1.5, 'line-dasharray': [4, 3] } });
    map.addSource('route', { type: 'geojson', data: routeFor(byId(S.selected)) });
    map.addLayer({ id: 'route', type: 'line', source: 'route', layout: { 'line-cap': 'round' }, paint: { 'line-color': '#2067da', 'line-width': 4, 'line-dasharray': [.1, 1.8] } });
    M.ready = true; syncMaps();
  });
  const mk = (html, cls, ll, opt = {}) => { const d = document.createElement(opt.tag || 'div'); d.className = cls; d.innerHTML = html; return new maplibregl.Marker({ element: d, anchor: opt.anchor || 'center', offset: opt.offset || [0, 0] }).setLngLat(ll).addTo(map); };
  HOOD_LABELS.forEach(([n, ll]) => mk(n, 'hood-label', ll));
  mk(`<span style="display:inline-flex;align-items:center;gap:6px"><svg class="icon" style="width:14px;height:14px;fill:currentColor"><use href="#i-star"/></svg>Taksim Square</span>`, 'landmark is-anchor', TAKSIM, { anchor: 'bottom', offset: [0, -4] });
  mk('Galata Tower', 'landmark', [28.9741, 41.0256], { anchor: 'right', offset: [-8, 0] });
  if (full) mk('Hagia Sophia', 'landmark', [28.9802, 41.0086], { anchor: 'top', offset: [0, 6] });
  HOTELS.forEach(h => {
    const m = mk('', 'pin', h.ll, { tag: 'button' }); const el2 = m.getElement();
    el2.type = 'button'; el2.dataset.pin = h.id; el2._ll = h.ll;
    el2.addEventListener('click', e => { e.stopPropagation(); select(h.id, true); });
    el2.addEventListener('mouseenter', () => select(h.id));
    M.pins[h.id] = m;
  });
  M.extras = EXTRA_PINS.filter(p => full || !p.full).map(p => { const m = mk('', 'pin', p.ll, { tag: 'button' }); m.getElement().type = 'button'; m.getElement().dataset.stub = 'This stay'; m.getElement()._ll = p.ll; m._p = p; return m; });
  M.routeLabel = mk('', 'route-label', TAKSIM);
  map.on('moveend', () => placeRouteLabel(M));
  map.on('error', e => console.warn('map', e && e.error && e.error.message));
  syncMaps();
  let first = true;
  map.on('moveend', e => { if (first) { first = false; return; } if (!e.originalEvent) return; const sw = $(`#v-${full ? 'map' : 'results'} [data-moveswitch]`); if (sw && sw.checked) { const z = map.getZoom(); const done = update(); done(); S.countOverride = Math.max(4, Math.round(count() * Math.min(1.6, Math.pow(2, 12.55 - z)) * (.75 + (Math.abs(map.getCenter().lng * 1000) % 5) / 20))); renderCount(true); } });
  return M;
}
function syncMaps() {
  const vis = new Set(visibleHotels().map(h => h.id)), sel = byId(S.selected);
  Object.values(MAPS).forEach(M => {
    HOTELS.forEach(h => { const el = M.pins[h.id].getElement(); el.textContent = money(h); el.hidden = !vis.has(h.id); el.classList.toggle('is-selected', h.id === S.selected); el.setAttribute('aria-label', `${h.name}, ${money(h)}`); el.setAttribute('aria-pressed', h.id === S.selected); });
    M.extras.forEach(m => { m.getElement().textContent = money(m._p); m.getElement().hidden = S.f.max < BUDGET_MAX && m._p.price > S.f.max; });
    const rl = M.routeLabel.getElement();
    rl.hidden = !sel;
    if (sel) { rl.textContent = `${sel.walk} min walk to Taksim`; M.routeLabel.setLngLat(sel.ll); placeRouteLabel(M); }
    if (M.ready) M.map.getSource('route').setData(routeFor(sel));
  });
  $$('#cards .card').forEach(c => c.classList.toggle('is-linked', c.dataset.hotel === S.selected));
  const mc = $('#map-card'); if (mc) { mc.hidden = !sel || S.miniHidden; mc.innerHTML = sel ? miniCardHTML(sel) : ''; }
}
function miniCardHTML(h) {
  const tot = S.basis === 'total';
  return `<article class="mini" data-hotel="${h.id}"><img src="assets/${h.img}.jpg" alt="" width="104" height="104">
    <div class="mini-body"><h3>${esc(h.name)}</h3>
      <p class="rating"><span class="score">${h.score.toFixed(1)}</span><b>${h.word}</b><span>${num(h.reviews)} reviews</span></p>
      <p class="meta">${ic('pin')}${h.hood} · ${h.walk} min walk to Taksim</p>
      ${h.cancel ? `<p class="cancel">${ic('check')}Free cancellation</p>` : ''}</div>
    <div class="mini-price"><strong>${money(h)}</strong><small>${tot ? `for ${nights()} nights` : 'per night'}</small><button type="button" class="btn btn-primary btn-sm" data-stub="The property page">View</button></div>
    <button type="button" class="icon-btn mini-x" data-act="mini-close" aria-label="Close">${ic('x')}</button></article>`;
}
function placeRouteLabel(M) {
  const sel = byId(S.selected), rl = M.routeLabel.getElement();
  if (!sel || rl.hidden) return;
  const map = M.map, at = map.project(sel.ll), w = rl.offsetWidth || 180, h = rl.offsetHeight || 28;
  const pins = [...Object.values(M.pins), ...M.extras].map(m => m.getElement()).filter(e => !e.hidden && e.dataset.pin !== sel.id)
    .map(e => { const p = map.project(e._ll); return { x: p.x, y: p.y, w: e.offsetWidth + 6, h: e.offsetHeight + 6 }; });
  const box = map.getContainer().getBoundingClientRect();
  map.getContainer().querySelectorAll('.landmark').forEach(e => { const b = e.getBoundingClientRect(); pins.push({ x: b.left - box.left + b.width / 2, y: b.top - box.top + b.height / 2, w: b.width + 6, h: b.height + 6 }); });
  const cw = map.getContainer().clientWidth, ch = map.getContainer().clientHeight;
  // Candidate spots in rings around the selected pin, nearest first.
  const tries = [];
  [0, 1, 2, 3].forEach(ring => {
    const gx = 32 + w / 2 + ring * 28, gy = 18 + h / 2 + ring * 22;
    tries.push([gx, 0], [-gx, 0], [0, gy], [0, -gy], [gx, gy], [-gx, gy], [gx, -gy], [-gx, -gy]);
  });
  const out = ([dx, dy]) => at.x + dx - w / 2 < 8 || at.x + dx + w / 2 > cw - 44 || at.y + dy - h / 2 < 52 || at.y + dy + h / 2 > ch - 8;
  const overlap = ([dx, dy]) => pins.reduce((a, p) => a + Math.max(0, (w + p.w) / 2 - Math.abs(at.x + dx - p.x)) * Math.max(0, (h + p.h) / 2 - Math.abs(at.y + dy - p.y)), 0);
  const inside = tries.filter(t => !out(t));
  const clear = inside.find(t => overlap(t) === 0);
  // Never hide a price: with no clear spot, take the least-overlapping one; pins also stack above the label.
  M.routeLabel.setOffset(clear || (inside.length ? inside.reduce((b, t) => overlap(t) < overlap(b) ? t : b) : tries[0]));
}
function select(id, fromPin) {
  if (S.selected === id && !fromPin) return;
  S.selected = id; syncMaps();
  if (fromPin && route.name === 'results') { const c = $(`#cards [data-hotel="${id}"]`); if (c) c.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' }); }
}

/* ---------- Toast + routing ---------- */
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2600); }
const route = { name: 'home' };
let pendingUpdate = false;
const TITLES = { home: 'Search stays', results: 'Stays in Istanbul', nomatch: 'No stays match', map: 'Map of stays' };
function go() {
  let [name = 'home', arg] = location.hash.slice(1).split('/');
  let after = null;
  // Old addresses: the quiz and compare now open over the page instead of being screens.
  if (name === 'quiz' || name === 'areas') { history.replaceState(null, '', '#home'); name = 'home'; after = openQuiz; }
  if (name === 'compare') { history.replaceState(null, '', '#results'); name = 'results'; after = openCompare; }
  const n = TITLES[name] ? name : 'home';
  const changed = n !== route.name || arg !== route.arg;
  route.name = n; route.arg = arg;
  $$('.view').forEach(v => v.classList.toggle('is-active', v.id === 'v-' + n));
  document.title = `${TITLES[n]} · Stay search prototype (usability study)`;
  closePops();
  if (n === 'home') renderHome();
  if (n === 'results') {
    if (nights() > 30 && S.countOverride == null && !S.f.types.has('Apartment')) { location.replace('#nomatch'); return; }
    renderResults(); initMap('side');
    if (pendingUpdate) { pendingUpdate = false; update()(); }
  }
  if (n === 'nomatch') renderNoMatch();
  if (n === 'map') { renderChrome(); renderCount(); initMap('full'); S.miniHidden = false; syncMaps(); }
  if (changed) { scrollTo(0, 0); const h = $(`#v-${n} h1[tabindex]`); if (h) h.focus({ preventScroll: true }); }
  if (after) after();
}
function finishQuiz() {
  applyQuiz(); S.fromQuiz = true; pendingUpdate = true;
  $('#quiz-dialog').close();
  if (route.name === 'results') go(); else location.hash = '#results';
}

/* ---------- Events ---------- */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-stub],[data-rm],[data-act],[data-suggest],[data-day],[data-calnav],[data-step],[data-opt],[data-rating],[data-extra],[data-acc],[data-uncompare],[data-fix],[data-basis],[data-seg],[data-product],[data-staytype],[data-flighttrip],[data-cabin],[data-flex],#teaser-dismiss,#members-dismiss,#soldout-btn,#add-landmark,[data-focus]');
  if (!e.target.closest('#search-form')) closePops();
  if (!t) return;
  const d = t.dataset;
  if (d.stub != null) { e.preventDefault(); toast(`${d.stub} is not part of this prototype.`); return; }
  if (d.product) { S.product = d.product; S.seg = null; ['#suggest', '#cal', '#guests'].forEach(p => { $(p).hidden = true; }); if (route.name !== 'home') location.hash = '#home'; else renderBar(); return; }
  if (d.seg) { if (S.seg === d.seg && t.tagName === 'BUTTON') closePops(); else openSeg(d.seg); if (t.tagName === 'LABEL' || t.querySelector('input')) { const i = t.querySelector('input'); if (i && document.activeElement !== i) i.focus(); } return; }
  if (d.staytype) { S.stayType = +d.staytype; renderBar(); return; }
  if (d.flighttrip) { FL.trip = d.flighttrip; if (FL.trip === 'one' && S.seg === 'checkout') closePops(); renderBar(); return; }
  if (d.cabin) { FL.cabin = d.cabin; renderBar(); return; }
  if (d.flex) { S.flex = +d.flex; renderCal(); renderBar(); return; }
  if (d.rm) { change(() => removeTag(d.rm)); if (route.name === 'nomatch') renderNoMatch(); return; }
  if (d.suggest) { S.where = d.suggest; openSeg('checkin'); return; }
  if (d.day) {
    const day = new Date(+d.day);
    if (S.calPhase === 'start' || day <= S.start) { S.start = day; if (S.end && S.end <= day) S.end = null; S.calPhase = 'end'; S.seg = 'checkout'; }
    else S.end = day;
    renderCal(); renderBar(); return;
  }
  if (d.calnav) { S.calMonth = new Date(S.calMonth.getFullYear(), S.calMonth.getMonth() + +d.calnav, 1); renderCal(); return; }
  if (d.step) { const [k, v] = d.step.split(':'); S[k] += +v; if (k === 'children') { while (S.ages.length < S.children) S.ages.push(''); S.ages.length = S.children; } renderGuests(); renderBar(); const b = $(`[data-step="${d.step}"]`); (b && !b.disabled ? b : $('#guests .stepper button:not([disabled])')).focus(); return; }
  if (d.opt) { const [k, v] = d.opt.split(':'), q = S.quiz; if (k === 'matters') { const i = q.matters.indexOf(v); if (i >= 0) q.matters.splice(i, 1); else if (q.matters.length < 2) q.matters.push(v); else { toast('Pick up to 2. Untick one to choose another.'); return; } } else q[k] = v; renderQuiz(); $(`[data-opt="${d.opt}"]`).focus(); return; }
  if (d.rating) { change(() => { S.f.rating = S.f.rating === +d.rating ? null : +d.rating; }); return; }
  if (d.extra) { change(() => { S.f.extra.has(d.extra) ? S.f.extra.delete(d.extra) : S.f.extra.add(d.extra); }); return; }
  if (d.acc) { S.openAcc.has(d.acc) ? S.openAcc.delete(d.acc) : S.openAcc.add(d.acc); renderFilters(); $(`[data-acc="${CSS.escape(d.acc)}"]`).focus(); return; }
  if (d.uncompare) { S.compare = S.compare.filter(x => x !== d.uncompare); renderTray(); $$(`[data-compare="${d.uncompare}"]`).forEach(c => { c.checked = false; }); if ($('#compare-dialog').open) renderCompare(); return; }
  if (d.fix) { const [k, c] = d.fix.split(':'); if (k === 'walk15') S.f.walk15 = false; if (k === 'budget120') S.f.max = 120; if (k === 'rating7') S.f.rating = 7; S.countOverride = +c; pendingUpdate = false; location.hash = '#results'; return; }
  if (d.basis) { S.basis = d.basis; renderResults(); return; }
  if (t.id === 'teaser-dismiss') { $('#teaser').hidden = true; return; }
  if (t.id === 'members-dismiss') { $('#members').hidden = true; return; }
  if (t.id === 'soldout-btn') { S.soldShown = !S.soldShown; renderCards(); return; }
  if (t.id === 'add-landmark') { toast('Adding a landmark is not part of this prototype.'); return; }
  if (d.focus) { S.selected = d.focus; return; }
  switch (d.act) {
    case 'clear': change(clearAll); break;
    case 'more': S.moreOpen = !S.moreOpen; S.findQuery = ''; renderFilters(); $('[data-act="more"]').focus(); break;
    case 'choose-hood': { const order = [null, 'Beyoğlu', 'Karaköy', 'Sultanahmet']; change(() => { S.f.hood = order[(order.indexOf(S.f.hood) + 1) % order.length]; }); break; }
    case 'swap': [FL.from, FL.to] = [FL.to, FL.from]; renderBar(); break;
    case 'cal-clear': S.end = null; S.calPhase = 'start'; S.seg = 'checkin'; renderCal(); renderBar(); break;
    case 'cal-done': openSeg('who'); break;
    case 'guests-done': if (agesOk()) { closePops(); $('.sbar-go').focus(); } else { renderGuests(true); $('#guests .is-error').focus(); } break;
    case 'quiz-open': e.preventDefault(); openQuiz(); break;
    case 'quiz-close': $('#quiz-dialog').close(); break;
    case 'quiz-back': S.qstep = Math.max(1, S.qstep - 1); renderQuiz(); $('#quiz-title').focus(); break;
    case 'quiz-next': if (S.qstep < 3) { S.qstep++; renderQuiz(); $('#quiz-title').focus(); } else finishQuiz(); break;
    case 'quiz-dismiss': S.fromQuiz = false; renderQuizNote(); break;
    case 'compare-open': openCompare(); break;
    case 'compare-close': $('#compare-dialog').close(); break;
    case 'mini-close': S.miniHidden = true; syncMaps(); break;
    case 'fix-dates': S.start = suggestedStart(); S.keepLong = false; pendingUpdate = true; location.hash = '#results'; break;
    case 'keep-long': S.keepLong = true; renderNoMatch(); $('#nomatch h1').focus(); break;
    case 'monthly': clearAll(); S.f.types.add('Apartment'); S.countOverride = 63; break;
    case 'share': (navigator.clipboard ? navigator.clipboard.writeText(location.href.split('#')[0] + '#compare') : Promise.reject()).then(() => toast('Link to your comparison copied.'), () => toast('Copy this page’s address to share it.')); break;
  }
});
// A click on a dialog's backdrop closes it.
$$('dialog').forEach(dl => dl.addEventListener('click', e => { if (e.target === dl) dl.close(); }));
$('#compare-dialog').addEventListener('close', () => { const b = $('[data-act="compare-open"]'); if (b) b.focus({ preventScroll: true }); });
document.addEventListener('change', e => {
  const t = e.target, d = t.dataset;
  if (d.compare) {
    if (t.checked) { if (S.compare.length >= 4) { t.checked = false; toast('You can compare up to 4 stays.'); return; } S.compare.push(d.compare); } else S.compare = S.compare.filter(x => x !== d.compare);
    renderTray(); $$(`[data-compare="${d.compare}"]`).forEach(c => { c.checked = t.checked; }); return;
  }
  if (d.f) { change(() => { const k = d.f; if (k.startsWith('type:')) t.checked ? S.f.types.add(k.slice(5)) : S.f.types.delete(k.slice(5)); else if (k.startsWith('extra:')) t.checked ? S.f.extra.add(k.slice(6)) : S.f.extra.delete(k.slice(6)); else S.f[k] = t.checked; }); return; }
  if (d.range) { change(() => {}); return; }
  if (d.age != null) { S.ages[+d.age] = t.value; renderGuests(!agesOk() && t.value === ''); $(`[data-age="${d.age}"]`).focus(); return; }
  if (t.id === 'sort') { S.sort = t.value; change(() => {}); return; }
  if (t.id === 'quiz-cancel') { S.quiz.cancel = t.checked; return; }
  if (t.id === 'diff') { S.diffOnly = t.checked; renderCompare(); $('#diff').focus(); return; }
  if (d.moveswitch != null) { $$('[data-moveswitch]').forEach(s => { s.checked = t.checked; }); toast(t.checked ? 'Results will update when you move the map.' : 'Results stay put when you move the map.'); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.range) {
    const [a, b] = $$('[data-range]'); let lo = +a.value, hi = +b.value;
    if (lo > hi - 10) { if (t === a) lo = hi - 10; else hi = lo + 10; a.value = lo; b.value = hi; }
    S.f.min = lo; S.f.max = hi;
    const mult = S.basis === 'total' ? nights() : 1, plus = hi >= BUDGET_MAX ? '+' : '';
    $('.range .fill').style.cssText = `left:${lo / BUDGET_MAX * 100}%;right:${100 - hi / BUDGET_MAX * 100}%`;
    $('#budget-out').textContent = `$${num(lo * mult)}-${num(hi * mult)}${plus}`;
    $('#budget-note').textContent = `$${num(lo * mult)} – $${num(hi * mult)}${plus} · includes taxes`;
    $$('.histogram i').forEach((i, n) => i.classList.toggle('on', n * 16 >= lo && (n + 1) * 16 <= hi + 4));
  }
  const f = t.dataset.field;
  if (f === 'where') { sugIdx = 0; if (S.seg !== 'where') openSeg('where'); else renderSuggest(); }
  if (f && f !== 'where') { const k = { from: 'from', to: 'to', act: 'act', pick: 'pick', drop: 'drop', time: 'time' }[f]; if (k) FL[k] = t.value; }
  if (t.id === 'find-filter') { S.findQuery = t.value; const pos = t.selectionStart; renderFilters(); const ff = $('#find-filter'); ff.focus(); ff.setSelectionRange(pos, pos); }
});
document.addEventListener('focusin', e => {
  const f = e.target.dataset && e.target.dataset.field;
  if (f && S.seg !== f) { openSeg(f); if (f === 'where') e.target.select(); }
  const c = e.target.closest('#cards .card[data-hotel]'); if (c && byId(c.dataset.hotel)) select(c.dataset.hotel);
});
document.addEventListener('keydown', e => {
  if (e.target.id === 'where' && S.product === 'stays') {
    const items = $$('#suggest .suggest-item');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sugIdx = (sugIdx + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; renderSuggest(); }
    else if (e.key === 'Enter' && !$('#suggest').hidden) { e.preventDefault(); items[sugIdx] && items[sugIdx].click(); }
  }
  if (e.key === 'Escape' && S.seg) { const seg = S.seg; closePops(); const b = $(`[data-seg="${seg}"]`); if (b) (b.querySelector('input') || b).focus(); }
});
document.addEventListener('mouseover', e => {
  const c = e.target.closest('#cards .card[data-hotel]'); if (c && byId(c.dataset.hotel)) select(c.dataset.hotel);
  if (!$('#cal').hidden) { const dEl = e.target.closest('.cal-day:not([disabled])'); previewRange(dEl ? +dEl.dataset.day : null); }
});
$('#search-form').addEventListener('submit', e => {
  e.preventDefault();
  if (S.product !== 'stays') { const l = PRODUCTS.find(x => x[0] === S.product)[2]; toast(`${l} search is not part of this prototype. Try Hotels & homes.`); return; }
  if (!S.end) { openSeg('checkout'); toast('Choose a check-out date.'); return; }
  if (!agesOk()) { openSeg('who'); renderGuests(true); $('#guests .is-error').focus(); return; }
  if (!SUGGEST.some(s => s[1] === S.where)) S.where = 'Istanbul, Türkiye';
  S.countOverride = null; S.keepLong = false; S.fromQuiz = false;
  if (nights() > 30 && S.stayType !== 2) { location.hash = '#nomatch'; return; }
  if (S.stayType === 2 && nights() > 30) { S.f.types.add('Apartment'); S.countOverride = 63; }
  pendingUpdate = true; location.hash = '#results';
});
addEventListener('hashchange', go);
go();
})();
