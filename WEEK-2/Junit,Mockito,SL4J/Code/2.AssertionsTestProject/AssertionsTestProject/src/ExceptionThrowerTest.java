import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ExceptionThrowerTest {
    @Test
    void testThrowsException() {
        ExceptionThrower et = new ExceptionThrower();
        assertThrows(IllegalArgumentException.class, et::throwException);
    }
}
