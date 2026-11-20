# Studio Motion

One offline HTML file for planning a repeating training week. Download `index.html`
and open it in a browser. No server, install, sign-in, trackers, or external assets.

## Use it

- It opens on **today** in your device's local time. This is a single
  phone-first screen at all widths. See the exercises in workout order and check
  off each set as you finish. Tap an exercise name to show the movement cue;
  only its visible diagram animates. Tap a weekday to see that workout.
- Use **Plan workout** or **Edit plan** to name and edit the day's workout.
  Leave a day unplanned. Existing rest days are retained. The expandable exercise library
  offers simplified start/end poses and filters by muscle group or machine,
  cable, dumbbell (halteres), barbell, and bodyweight. Use the diagrams as cues,
  not as a substitute for instruction. The selected movement loops while visible;
  if your device has reduced motion enabled, you can switch between static poses.
  Tap **Done** to return to training.
- **Auto Plan Day** previews up to three different workouts for your selected
  day and focus. Select the option you want and save it; only the chosen workout
  becomes active.
- **Auto Plan Week** previews a Monday–Friday rotation: upper A, lower A,
  core/calves, upper B, lower B. Machine and cable equipment are selected
  initially; change those filters to match your gym. Empty weekdays are checked
  for saving by default, not existing workouts or weekends. Explicitly check and
  confirm a replacement to keep the prior workout under **Saved workouts**.
- This five-day preset uses up to six exercises per day and **4 sets of 10–12
  reps** by default, with timed holds where appropriate and no suggested weight.
  Reduce to 2 or 3 sets if you want less volume. The time estimate includes
  8 minutes to warm up, roughly 40 seconds per rep-based set (per side when
  needed), scheduled between-set rest, and 1.5 minutes per changeover. It is not
  a guarantee or a recommendation to lift five days or train to failure.
- Use **Print / save PDF** for a printable copy of the selected day.

## Private on-device storage

The browser stores the weekly plan and completion checkmarks on the device
when local storage is available. Checkmarks are separate by local calendar date,
workout and exercise row (including repeated exercises). They are retained for
the latest 84 logged dates. A recurring weekday starts with unchecked sets the
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
