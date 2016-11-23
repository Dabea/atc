## 3.1.0 (November 20, 2016)
---
### Major
- Converted `FixCollection` to an instance class and refactored it away from being a static class.  [#116](https://github.com/n8rzz/atc/issues/116)

### Minor
- Implements `modelSourceFactory` and `modelSourcePool` [#77](https://github.com/n8rzz/atc/issues/77)

### Bugfixes



## 3.1.0 (November 20, 2016)
---
### Major
- Adds `FixModel` and static class `FixCollection` for reasoning about airport fixes [#18](https://github.com/n8rzz/atc/issues/18)
- Adds `StandardRoute` classes reasoning about SIDs and STARs [#19](https://github.com/n8rzz/atc/issues/19)
- Moves `airlineController` and `aircraftController` to instantiate from within `airportController` instead from `App` [#82](https://github.com/n8rzz/atc/issues/82)
- Enable airport load without bundling and moves `airportLoadList.js` out of the `src` folder [#88](https://github.com/n8rzz/atc/issues/88)
- Updates score calculations and how they are recorded [#96](https://github.com/n8rzz/atc/issues/96)

### Minor
- Correct casing for Arrival and Departure factories [#41](https://github.com/n8rzz/atc/issues/41)
- Rename `AreaModel` to `AirspaceModel` [#36](https://github.com/n8rzz/atc/issues/36)
- Changes `StandardRoute` property name `icao` to `identifier` [#57](https://github.com/n8rzz/atc/issues/57)
- Introduce early exit for airport load when airport data is not complete [#44](https://github.com/n8rzz/atc/issues/44)
- Adds [git-flow](tools/documentation/git-flow-process.md) strategy document [#60](https://github.com/n8rzz/atc/issues/60)
- Adds `BaseModel` [#100](https://github.com/n8rzz/atc/issues/100)
- Adds `BaseCollection` [#101](https://github.com/n8rzz/atc/issues/101)

### Bugfixes
- WMKK has misnamed star name [#45](https://github.com/n8rzz/atc/issues/45)
- Updates spelling in `.convertMinutesToSeconds[)` [#58](https://github.com/n8rzz/atc/issues/58)
- Future aircraft path, when on ILS, wrong width [#75](https://github.com/n8rzz/atc/issues/75)
- `areas` is undefined in `AirportModel` [#90](https://github.com/n8rzz/atc/issues/90)
- `FixCollection.init()` does not clear current `_items` if any exist [#91](https://github.com/n8rzz/atc/issues/91)
- Aircraft strips show arrival airport in uppercase [#108](https://github.com/n8rzz/atc/issues/108)
- Updates `FixCollection.findFixByName()` to accept upper, mixed, or lower case fix name [#109](https://github.com/n8rzz/atc/issues/109)
- Switching to a previously loaded airport does not clear previous airport fixes [#115](https://github.com/n8rzz/atc/issues/115)
