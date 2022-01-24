## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Fix issues with logs not being generated after reset
  - Move the two SQL log files to ~
  - Change to that location in postgresql.conf
  - Update all watchers to that location
  - Change tests to get logs from those locations

## [v1.0.2]

- Fix typo in `yippee.wav`
  - Change `TUTORIAL.md`
  - Change test `.freeCodeCamp/test/1320.test.js` in step `1320.1`
  - Change `.freeCodeCamp/db.sql` in step `1330.1`

## [v1.0.3]

- Move startup commands to `reset.sh`
- Run `reset.sh` on continue
- Add `IF EXISTS` to `db.sql` when dropping database to stop warnings
- Terminate only user `freeCodeCamp` from db when resetting
