===========================
JUnit Exercises (IntelliJ)
===========================

1. Download these two JARs:
   - junit-4.13.2.jar
     https://search.maven.org/remotecontent?filepath=junit/junit/4.13.2/junit-4.13.2.jar
   - hamcrest-core-1.3.jar
     https://search.maven.org/remotecontent?filepath=org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar

2. Place both JARs into the `lib/` folder of this project.

3. Open this project in IntelliJ:
   - File → Open → Select the unzipped folder
   - File → Project Structure → Modules → Dependencies
   - Click `+` → JARs or directories → Select both `.jar` files from `lib/`
   - Set scope to TEST → Apply and OK

4. Right-click on any test file (e.g., CalculatorTest.java) → Run.

Tests included:
- CalculatorTest
- AssertionsTest
- MathUtilsTest