import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(2)
    void testSecond() {
        assertTrue(true);
    }

    @Test
    @Order(1)
    void testFirst() {
        assertEquals("A", "A");
    }

    @Test
    @Order(3)
    void testThird() {
        assertNotNull(new Object());
    }
}
