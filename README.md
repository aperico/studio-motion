# Studio Motion

One offline HTML file for planning a repeating training week. Download `index.html`
and open it in a browser. No server, install, sign-in, trackers, or external assets.

## Use it

- It opens on **today** in your device's local time. This is a single
  phone-first screen at all widths. See the exercises in workout order and check
  off each set as you finish. Each exercise has its own diagram, rendered immediately.
  Only on-screen diagrams animate. Form tips are optional. Tap a day to see its workout.
- Use **Plan workout** or **Edit plan** to name and edit the day's workout.
  Leave a day unplanned. Existing rest days are retained. The expandable exercise library
  offers simplified start/end poses and filters by muscle group or machine,
  cable, dumbbell (halteres), barbell, and bodyweight. Use the diagrams as cues,
  not as a substitute for instruction. Diagrams also appear next to sets and reps
  while editing, and a larger library preview appears when you select a movement.
  Visible movements loop automatically;
  if your device has reduced motion enabled, you can switch between static poses.
  Use **Selected exercise & add** to jump past the larger library list.
  Tap **Done** to return to training.
- Use **Replace** beside an exercise if the equipment is unavailable. In
  Training this swaps only the selected calendar date; in Plan/Edit it changes
  the saved weekday. Filter by equipment, then choose a matching movement or a
  same-muscle alternative. No load, exercise-specific note, or checkmarks are
  carried to a different movement. Rows already checked for the date are kept
  visible. A timed exercise keeps a duration only when the substitute is also
  timed, otherwise the new exercise uses the usual default for reps or holds.
- **Auto Plan Day** previews up to three different workouts for your selected
  day and focus. Select the option you want and save it; only the chosen workout
  becomes active.
- **Auto Plan Week** is in the top bar on every day. Each preview randomizes
  exercise selection within a repeatable Monday–Sunday plan: upper A, lower A,
  core/calves, upper B, lower B, and two short no-equipment recovery sessions.
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
  at four sets will often take more than an hour; choose fewer sets to shorten it. The weekend uses
  one easy set per movement, across eight mobility and activation movements. Random options provide choice, not evidence that
  continually changing a saved routine is better or that you should lift hard
  on seven days or train to failure.
- Use **Print / save PDF** for a printable copy of the selected day.

## Private on-device storage

The browser stores the weekly plan and completion checkmarks on the device
when local storage is available. Checkmarks are separate by local calendar date,
workout and exercise row (including repeated exercises). They are retained for
the latest 84 logged dates. Date-specific substitutes stay on the device
for the latest 84 dates with substitutes and do not alter the weekly plan. A recurring weekday starts with unchecked sets the
next week. Changing the number of sets only changes the controls that are shown.

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
moving equipment; teal crosses identify support points where shown. The short
orange arrow marks the movement direction. Animations pause briefly at the start
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
These are optional documentation links; the HTML loads no external assets.
