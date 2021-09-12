## Contributing

**Never** make changes to one of the version branches - e.g. `v1.0.0`. Always create a new version branch if something on that branch needs changing. If you are **only** making instructional changes on the `main` branch, you do not need to create a new branch or list the changes here.

# Change Log

Whenever something on the version branch gets changed, add the new branch name and the changes here.

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Fix issues with logs not being generated after reset
  - Move the two SQL log files to ~
  - Change to that location in postgresql.conf
  - Update all watchers to that location
  - Change tests to get logs from those locations
