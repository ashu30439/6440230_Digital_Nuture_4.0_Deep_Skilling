=============================
JUnit Assertions Test Project
=============================

1. Download these JAR files:
   - junit-4.13.2.jar:
     https://search.maven.org/remotecontent?filepath=junit/junit/4.13.2/junit-4.13.2.jar
   - hamcrest-core-1.3.jar:
     https://search.maven.org/remotecontent?filepath=org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar

2. Place them into the `lib/` folder.

3. Open this project in IntelliJ:
   - File → Open → Select the extracted folder
   - File → Project Structure → Modules → Dependencies
   - Add both `.jar` files from `lib/`
   - Set scope to `Test` → Apply and OK

4. Right-click on AssertionsTest.java → Run 'AssertionsTest'