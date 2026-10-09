# RIG/ motion spec

The design lives in the Pencil file `viewtransitions.pen`. Each blue pin on a screen is one animation; this file repeats those notes next to the data you need to build them. Pins are written as `screen·pin`, so `02·1` is pin 1 on Product Detail.

Tools:

- **VT**: view transition. React `<ViewTransition>` plus `startTransition` / router navigation.
- **CSS**: `:active`, `transition`, `@keyframes`.
- **JS**: pointer events, `element.animate()`, `requestAnimationFrame`.

Tokens are in `src/common/styles/theme.css` (colors, fonts, radii, easings, durations). Icons come from `lucide-react`.

## Screens, routes and data

| Screen | Route | Data |
| --- | --- | --- |
| 01 Catalog | `/` | `MOCKED_CATEGORIES`, `MOCKED_PRODUCTS` filtered by `categoryId`, `TOTAL_STOCK`, `MOCKED_USER.initials`, badge = item count of `MOCKED_CART_ITEMS_BEFORE_ADD` |
| 02 Product Detail | `/product/:productId` | `findProduct(id)`: `image`, `gallery`, `detailMeta`, `breadcrumb`, `editions`, `specs`, `description` |
| 03 Cart | `/cart` | `MOCKED_CART_ITEMS`, `MOCKED_PROMOS`, `getCartSummary()`, `formatPrice()` |
| 04 Order Placed | `/order/:orderId` | `MOCKED_ORDER` |

Routes are also in `ROUTES` and tab definitions in `TABS` (`src/common/mocks/navigation.ts`).

Expected totals for the cart screen, so you can check your math: subtotal **$4,176**, promo **−$417.60**, shipping **Free**, total **$3,758.40**, 4 items.

## 01 Catalog

| Pin | Name | Tool | What moves | Starting spec |
| --- | --- | --- | --- | --- |
| 1 | Sliding chip pill | VT | Dark pill glides to the tapped chip | Render the pill only in the active chip, `<ViewTransition name="chip-pill">`, `--duration-chip`, `--ease-snappy` |
| 2 | Card → detail morph | VT | Image and name grow into the detail hero | `name={`product-img-${id}`}` and `product-title-${id}` on both screens, `::view-transition-group(*.product-img)` 350ms |
| 3 | Add button feedback | CSS | Button shrinks, plus turns into a check, cart badge pops | `:active { scale: .9 }` 120ms, badge `@keyframes pop` 1 → 1.35 → 1 in 300ms |
| 4 | Grid stagger on filter | VT | Cards rise and fade in one after another | `<ViewTransition enter="fade-up">`, `animation-delay: calc(var(--i) * var(--stagger-grid))` |
| 5 | Tab capsule | VT | Highlight capsule slides to the tapped tab | `addTransitionType('nav-tab')`, style with `:active-view-transition-type(nav-tab)` |

## 02 Product Detail

| Pin | Name | Tool | What moves | Starting spec |
| --- | --- | --- | --- | --- |
| 1 | Hero receives the image | VT | End state of 01·2; radius 14 → 22 and size animate | `::view-transition-new(*.product-img) { height: 100%; object-fit: cover }` |
| 2 | Name grows 17 → 34px | VT | Title scales instead of stretching | `width: auto; height: auto` on old/new, same trick as `page-title` |
| 3 | Back reverses the flow | VT | Same morph in reverse, page slides right | `navigate(-1)` in `startTransition` + `addTransitionType('nav-back')` |
| 4 | Edition toggle | CSS | White thumb slides, label colors cross-fade | `transform: translateX(100%)`, `--duration-toggle` ease-out |
| 5 | Spec tiles count up | JS | Tiles enter 60ms apart, numbers tick up from 0 | rAF loop 600ms, ease-out cubic; use `spec.value` and `spec.decimals`; `tabular-nums` |
| 6 | Add to cart → Added | JS | Label becomes "Added", a thumbnail copy flies to the cart tab | `el.animate()` 500ms, badge pop on `finish` |

## 03 Cart

| Pin | Name | Tool | What moves | Starting spec |
| --- | --- | --- | --- | --- |
| 1 | New item slides in | VT | Newest item (`addedAt`) enters from the right, outline fades after 1.2s | `<ViewTransition enter="slide-in">`, `outline` transition 400ms with 1.2s delay |
| 2 | Swipe to remove | JS | Row follows the finger; past 40% it leaves and rows below close the gap | `pointermove` → `translateX`; the remaining rows keep their names so the VT moves them |
| 3 | Quantity roll | VT | Old digit slides up, new digit comes in from below | `<ViewTransition key={quantity} enter="roll-in" exit="roll-out">` |
| 4 | Total roll | CSS | Each digit of the total rolls, right to left | `tabular-nums`, `animation-delay: calc(var(--d) * 30ms)` |
| 5 | Checkout expands | VT | Button grows to fill the screen and becomes Track order | `name="cta"` on both buttons, `--duration-expand`, `--ease-expand` |

## 04 Order Placed

| Pin | Name | Tool | What moves | Starting spec |
| --- | --- | --- | --- | --- |
| 1 | Check pops in | CSS | Circle springs in, check draws, rings pulse, confetti bursts | `scale` with `--ease-spring` 600ms, `stroke-dashoffset: 48 → 0` |
| 2 | Text stagger | CSS | Order number, title, subtitle fade up | `@keyframes fade-up`, delay `250ms + i * 30ms` |
| 3 | Progress fill | CSS | Bar fills to `MOCKED_ORDER.progress` | `transform: scaleX(.25)`, `transform-origin: left`, 700ms |
| 4 | Receives the CTA | VT | End state of 03·5 | `::view-transition-group(cta)`, label cross-fades |

## Suggested order

1. **01·3, 02·4**: CSS press states and toggles. No view transitions yet.
2. **01·2, 02·1–2**: your first shared-element morph, card → detail.
3. **02·3, 01·5**: transition types, forward vs back and tabs vs pushes.
4. **01·1, 01·4, 03·3**: `enter` / `exit` / `update` on lists and digits.
5. **03·2, 02·5–6**: gestures and values in JS.
6. **03·5, 04·1–4**: put it together, checkout → confirmation.

Wrap every animation in `@media (prefers-reduced-motion: no-preference)`, or replace the morphs with a 150ms cross-fade when reduced motion is on.
