# Studio Motion

One offline HTML file for planning a repeating training week. Download `index.html`
and open it in a browser. No install, sign-in, trackers, or external services needed. The
single HTML works offline as-is; the public web app can also be added to your Home Screen.

## Home Screen

Open [Studio Motion](https://aperico.github.io/studio-motion/) once while online.
On iPhone, open it in Safari and use **Share → Add to Home Screen**. On Android,
open it in Chrome and use **Install app** or **Add to Home screen** from its menu.
After the app caches its own files, reopen it offline. It never transmits workouts:
the hosted app starts with separate browser storage from a downloaded HTML file.
Use the same browser and address to keep using the same saved plan.

## Use it

**Week summary** shows the saved sessions and main muscle groups for the current week.
Tap a day in the summary to open it. Opening the summary does not generate or save a plan.

In **Menu**, choose **English** or **Português (Brasil)**. The app remembers your choice
locally, including offline. Your saved exercises, workout names, and notes are not migrated.


- It opens on **today** in your device's local time. This is a single
  phone-first screen at all widths. See the exercises in workout order and check
  off each set as you finish. Progress stays visible while you scroll. The first unfinished
  exercise is marked, and you can jump straight to its next unchecked set.
  Each exercise has its own diagram, rendered immediately.
  Only on-screen diagrams animate. **Form tips** on each training card show an optional
  in-place image or a direct source demo when verified. Tap a day to see its workout.
- Use **Plan workout** or **Edit plan** to name and edit the day's workout.
  Leave a day unplanned. Existing rest days are retained. The expandable exercise library
  offers simplified start/end poses and filters by muscle group or machine,
  cable, dumbbell (halteres), barbell, and bodyweight. Use the diagrams as cues,
  not as a substitute for instruction. Diagrams also appear next to sets and reps
  while editing, and a larger library preview appears when you select a movement.
  Visible movements loop automatically;
  if your device has reduced motion enabled, you can switch between static poses.
  Use **Selected exercise & add** to jump past the larger library list.
  Search supports **supino**, **halteres**, **trapézio** and English names;
  filter flat/incline bench exercises or show movements that need no bench.
  The planner and alternatives respect **Bench available** for exercises
  that require a flat or adjustable bench.
  Search also recognizes common Brazilian gym names for many machine and cable variants.
  The manual planner supports nine or more exercises, independently of Auto Plan.
  **Reuse last exercise’s sets, reps and rest** speeds up entering a similar prescription;
  load and notes are never copied. The training list and exercise guide show the
  current prescription, and the progress bar counts checked sets for that date.
  Tap **Done** to return to training.
- Use **Replace** beside an exercise if the equipment is unavailable. In
  Training this swaps only the selected calendar date; in Plan/Edit it changes
  the saved weekday. Filter by equipment, then choose a matching movement or a
  same-muscle alternative. No load, exercise-specific note, or checkmarks are
  carried to a different movement. Rows already checked for the date are kept
  visible. A timed exercise keeps a duration only when the substitute is also
  timed, otherwise the new exercise uses the usual default for reps or holds.
- Tap **ⓘ Exercise guide** on a workout row or the selected library exercise
  to see the original diagram, technique cue, equipment, and target muscles
  offline. Where rights allow, **Show form image** displays a credited reference
  inside the guide. It loads only on tap. Otherwise, optional short demo links
  open the verified movement directly, without
  a long introduction or search results. Other exercises use their built-in loop; no
  approximate external demo is linked. External demos load only when tapped and require internet.
- **Auto Plan Day** previews up to three different workouts for your selected
  day and focus. Select the option you want and save it; only the chosen workout
  becomes active. **Regenerate this day** makes another full preview for that day
  without touching other days; limited equipment can constrain variation.
  Choose **Triceps** or **Chest & triceps** for a targeted, randomized plan, or use
  the library’s **Triceps** filter to find exercises whose primary target is triceps.
- **Auto Plan Week** is in the top bar on every day. Each preview randomizes
  exercise selection within a repeatable Monday–Sunday plan: upper A, lower A,
  core/calves, upper B, lower B, a lighter Saturday strength day (up to two sets per exercise), and one short Sunday recovery session. Choose Balanced, Glutes & legs, or Upper body.
  Goal choices are available to everyone and never change the plan until you save.
  Machine and cable equipment are selected initially for the strength days.
  Change equipment in Plan/Edit. Empty days are checked for saving by default. With restricted equipment, a
  preview may offer fewer than eight exercises or show an unavailable day.
  Explicitly select and confirm a replacement to keep the previous workout
  under **Saved workouts**. Close the preview to leave the plan unchanged.
- The weekday strength preset uses up to eight distinct exercises with **4 sets of 10–12
  reps** by default, with timed holds where appropriate and no suggested weight.
  Reduce to 2 or 3 sets if you want less volume. The estimate includes 8 minutes
  to warm up, roughly 40 seconds per rep-based set (per side when needed),
  scheduled between-set rest, and 1.5 minutes per changeover. Eight movements
  at four sets will often take more than an hour; choose fewer sets to shorten it. Sunday uses
  one easy set per movement, across three gentle mobility and activation movements. Random options provide choice, not evidence that
  continually changing a saved routine is better or that you should lift hard
  on seven days or train to failure.
- Use **Print / save PDF** for a printable copy of the selected day.

## Private on-device storage

**Menu → Local data → Reset app** clears Studio Motion workouts, checkmarks,
date-specific replacements and settings in this browser only after a typed confirmation.
Close other Studio Motion tabs, especially older versions, before confirming.

The browser stores the weekly plan and completion checkmarks on the device
when local storage is available. Checkmarks are separate by local calendar date,
workout and exercise row (including repeated exercises). They are retained for
the latest 84 logged dates. Date-specific substitutes stay on the device
for the latest 84 dates with substitutes and do not alter the weekly plan. A recurring weekday starts with unchecked sets the
next week. The open app refreshes for local midnight and when you return.
**Clear all sets** below the exercise list clears only the selected date’s
displayed workout (including its substitutions), not other dates, exercise
plans or notes. **Undo clear** restores those marks while you remain on that
date. Changing the number of sets only changes the controls that are shown.

Existing v1 sessions at the same browser file location go to **Saved workouts**
without deleting the old storage. Existing v2 plans, archived workouts and
previously marked rest days are kept. Copy a saved workout to any weekday.
Keep using the same file path and browser profile; moving the file or device,
opening in private mode or clearing browser storage can make prior data
unavailable. This version has no in-app backup, restore, or sync controls.
Nothing is uploaded from the app.

The exercise sketches and text are original and simplified. The generator is a
general planning starting point, not individualized coaching. See [CDC adult
activity guidance](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html),
[CDC on muscle-strengthening activity](https://www.cdc.gov/physical-activity-basics/adding-adults/what-counts.html),
and [AHA on recovery between strength sessions](https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/strength-and-resistance-training-exercise).

## Movement diagram references

Diagrams are original simplified drawings. The purple handle/roller represents
moving equipment; teal crosses identify support points where shown. A gold arrow marks movement direction. Orange marks the main muscle focus and
pink a meaningful supporting region. The compact front/back maps and text
show these targets when a body surface is not visible in a moving pose.
These are approximate exercise focus areas, not muscle activation measurements. Animations pause briefly at the start
and finish; isometric movements show a steady hold instead of repeating reps.
Some less common exercises still use a shared simplified rig, so confirm the
machine instructions rather than treating the drawing as a precise setup guide.

Machine geometry and contact-point references:
[Life Fitness equipment manual](https://resources.lifefitness.com/hub/life-fitness/en-US/1000419-0001-xd_32ce9968be620066-6b5ac64-1817a3e5ec1--7f3d.ditamap?onepage=true),
[Technogym seated leg curl](https://www.technogym.com/en-INT/product/selection-900-leg-curl_MNIP.html),
[Technogym leg extension](https://www.technogym.com/en-INT/product/selection-900-leg-extension_MNJP.html),
[Technogym linear leg press](https://www.technogym.com/en-US/product/pure-strength-linear-leg-press_MG75.html),
[Technogym chest press setup](https://www.technogym.com/en-RO/stories/training-with-the-chest-press-machine/),
[ACE cable examples](https://www.acefitness.org/resources/everyone/exercise-library/equipment/resistance-bands-cables/?page=2),
and [ACE barbell examples](https://www.acefitness.org/resources/everyone/exercise-library/equipment/barbell/).
These are optional documentation links; the app does not preload external assets. The online form images are requested only when you tap to show one.

Target region terminology: [ACE Exercise Library](https://www.acefitness.org/resources/everyone/exercise-library/).

Bench movement reference: [ACE incline chest press](https://www.acefitness.org/resources/everyone/exercise-library/25/incline-chest-press/).


## Publish an announcement

In `index.html`, find `const announcements` and add a newest-first entry
with a unique `id`, a date in `YYYY-MM-DD` form, a short `title`, and plain
`body` text. Keep prior IDs unchanged so dismissed notices do not reappear.
Commit to `main` and verify the public [What’s new](https://aperico.github.io/studio-motion/#updates)
link after Pages deploys. If changing hosted content for a release, bump the
app badge and the service-worker shell version. Announcements do not require
an account, backend, or analytics.

## Release usability checks

Run the [ten-profile usability check](docs/USABILITY.md) for user-facing changes.

For a focused session, select **Chest & triceps** (Portuguese: **Peito e tríceps**) in the daily planner. It randomizes up to five matching exercises, leaves weights blank, and previews before saving.

### Weight on workout cards

Tap **Set weight** or the current kg value while training. Enter up to two decimal places (comma or point), enter zero for zero added load, or leave it blank to clear the value. **Save weight** applies it to this row of the recurring plan; a dated replacement keeps its own weight for that date only. This never changes checked sets or other days.

### Mark a set during a workout

Tap **Set completed** to mark the next unchecked set on that exercise. The numbered checkboxes remain available to correct any set. When all sets on the card are checked, the button shows **All sets completed** and does not move to another exercise. Checkmarks stay on that workout date in this browser.

### Exercise guides offline

Open an exercise’s information button to see the positions and form steps without internet. The guide identifies exercises with no external weight. If a credited external image or demo is available, open it yourself; form images are fetched only when requested. Additional illustrations are by [Nitin Raturi](https://fitness.raturi.in/credits/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). On supported mobile browsers the weight editor adjusts to the visible window when the keyboard opens.

In Train, **Mark as current** highlights one exercise for the selected workout, including exercises with every set complete. This temporary marker is separate from **First unfinished**, does not change workout data or set progress, and clears on refresh or a local date change.

### Transfer routines and preferences between devices

Open **Menu → Local data → Configuration backup**. **Download JSON** saves a local file with the recurring week, archived workouts, dated program and planner preferences, including language, units and goal. Checkmarks, temporary dated substitutions and your profile email are excluded by default. Add your saved local email as author metadata only by checking the optional box; importing someone else’s file won’t update your local profile. Keep the file private unless you intend to share it.

On the other device choose that file, review what it replaces and explicitly confirm. Existing checkmarks and temporary substitutions are left untouched but will not match different workouts. Nothing is uploaded. For a safe restore or interruption recovery, the browser must support Web Locks and allow local storage.

In Train, tap **ⓘ** to open one exercise guide inline. It keeps offline form diagrams and instructions together; optional linked or inline source media is not automatically downloaded. The library guide still opens in its own dialog.
